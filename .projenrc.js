const fs = require('fs');
const { JsiiProject } = require('projen');

const project = new JsiiProject({

  // we invoke jsii-docgen explicitly to create a api reference
  // per submodule. see scripts/docgen.ts
  docgen: false,

  defaultReleaseBranch: 'main',
  authorName: 'Eli Polonsky',
  repository: 'https://github.com/iliapolo/aws-cdk-sdk',
  name: 'aws-cdk-sdk',
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    'constructs',
  ],
  devDeps: [
    '@aws-cdk/aws-elasticsearch',
    '@aws-cdk/assert',
    'aws-sdk',
    'codemaker',
    'json-schema',
    'json2jsii',
    'typescript-parser',
    'node-color-log',
    'typescript-json-schema',
    'ts-node',
  ],
  stability: 'experimental',
  testdir: 'src/__tests__',
  sampleCode: false,
});

const codegen = project.addTask('codegen');
codegen.exec('ts-node --skip-project codegen/main.ts');
// codegen may change the task definitions so we need to resynth
// immediately after.
codegen.exec(project.projenCommand);

project.gitignore.exclude('.sdk');
project.gitignore.exclude('package.overrides.json');
project.gitignore.exclude('tsconfig.overrides.json');
project.gitignore.include('vendor/jsii.tgz');

// ideally we would just do project.buildTask.preSpawn(codegen)
// however - projen preloads all task definitions when it starts up, meaning
// that it doesn't see changes made in process.
// TODO: we can change projen to lazy load tasks, should we?
project.setScript('build', 'npx projen codegen && npx projen build');

const incrementalCompile = project.addTask('compile.incremental');

// compile all clients
for (const client of fs.readdirSync(`${__dirname}/src/clients`)) {
  compileClient(incrementalCompile, client);
}

// compile index
const compileIndex = project.addTask(`${incrementalCompile.name}:index`);
compileIndex.exec('ts-node --skip-project scripts/compile-index.ts');
incrementalCompile.spawn(compileIndex);

// create the final assembly
const assemble = project.addTask(`${incrementalCompile.name}:assemble`);
assemble.exec('ts-node --skip-project scripts/assemble.ts');
incrementalCompile.spawn(assemble);

// swap the default compile step with the incremental compile
// project.buildTask.steps.filter(s => s.spawn === project.compileTask.name)[0].spawn = incrementalCompile.name;
project.compileTask.env('NODE_OPTIONS', '--max_old_space_size=5000');

project.eslint.addIgnorePattern('codegen/**');
project.eslint.addIgnorePattern('scripts/**');
project.eslint.addRules({ 'max-len': ['error', { code: 2000 }] });

project.synth();

function compileClient(compileTask, client) {

  const compile = project.addTask(`${compileTask.name}:${client}`);
  const clientSrcPath = `src/clients/${client}`;
  const clientLibPath = `lib/clients/${client}`;

  const tsConfigOverridesPath = `${clientSrcPath}/tsconfig.overrides.json`;
  const manifestOverridesPath = `${clientSrcPath}/package.overrides.json`;

  // config overrides for specific client compilation
  fs.writeFileSync(tsConfigOverridesPath, JSON.stringify({ include: [`${clientSrcPath}/*.ts`] }));
  fs.writeFileSync(manifestOverridesPath, JSON.stringify({ main: `${clientLibPath}/index.js`, types: `${clientLibPath}/index.d.ts` }));

  // instruct jsii to use the overrides we created
  compile.env('JSII_TSCONFIG_OVERRIDES_PATH', tsConfigOverridesPath);
  compile.env('JSII_MANIFEST_OVERRIDES_PATH', manifestOverridesPath);
  compile.exec('npx projen compile');

  // save the sub assembly for later consolidation
  compile.exec(`mv .jsii ${clientSrcPath}/.jsii`);

  compileTask.spawn(compile);
}