const fs = require('fs');
const path = require('path');
const { JsiiProject } = require('projen');

const project = new JsiiProject({

  // TODO: add --submodule support to jsii-docgen
  docgen: false,

  // TODO: need to run eslint incrementally as well
  eslint: false,

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

const assemble = project.addTask('assemble');
assemble.exec('ts-node --skip-project scripts/assemble.ts')

project.gitignore.exclude('.sdk');
project.gitignore.exclude('package.overrides.json');
project.gitignore.exclude('tsconfig.overrides.json');
project.gitignore.include('vendor/jsii.tgz');

project.setScript('build', 'npx projen codegen && npx projen build')
const compileSteps = project.compileTask.steps;
project.compileTask.reset();

// compile all clients
for (const client of fs.readdirSync(`${__dirname}/src/clients`)) {
  project.compileTask.spawn(compileClient(client));
}

// compile index
const compileIndex = project.addTask('compile:index');
compileIndex.exec('ts-node --skip-project scripts/compile-index.ts')
project.compileTask.spawn(compileIndex);

// create the final assembly
project.compileTask.spawn(assemble);

project.synth();

function compileClient(client) {

  const compile = project.addTask(`compile:${client}`);
  const clientSrcPath = `src/clients/${client}`;
  const clientLibPath = `lib/clients/${client}`;

  for (const step of compileSteps) {
    const options = { name: step.name, cwd: step.cwd };
    if (step.spawn) {
      const spawned = project.tasks.tryFind(step.spawn);
      compile.spawn(spawned, options);
    } else if (step.exec) {
      compile.exec(step.exec, options);
    } else if (step.builtin) {
      compile.builtin(step.builtin);
    } else if (step.say) {
      compile.say(step.say, options);
    } else {
      throw new Error(`Unexpected compile step: ${step}`);
    }
  }

  const tsConfigOverridesPath = `${clientSrcPath}/tsconfig.overrides.json`;
  const manifestOverridesPath = `${clientSrcPath}/package.overrides.json`;

  // config overrides for specific client compilation
  fs.writeFileSync(tsConfigOverridesPath, JSON.stringify({ include: [`${clientSrcPath}/*.ts`] }));
  fs.writeFileSync(manifestOverridesPath, JSON.stringify({ main: `${clientLibPath}/index.js`, types: `${clientLibPath}/index.d.ts` }));

  // instruct jsii to use the overrides we created
  compile.env('JSII_TSCONFIG_OVERRIDES_PATH', tsConfigOverridesPath);
  compile.env('JSII_MANIFEST_OVERRIDES_PATH', manifestOverridesPath);

  // save the sub assembly for later consolidation
  compile.exec(`mv .jsii ${clientSrcPath}/.jsii`);

  return compile;

}