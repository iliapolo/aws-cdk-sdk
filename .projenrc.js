const fs = require('fs');
const path = require('path');
const child = require('child_process');
const { JsiiProject } = require('projen');

// first off - generate the source code
console.log('Generating source code...');
child.execSync(`${__dirname}/node_modules/.bin/ts-node --skip-project ${__dirname}/gen/gen.ts`);

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

project.gitignore.exclude('.sdk');
project.gitignore.exclude('package.overrides.json');
project.gitignore.exclude('tsconfig.overrides.json');

const compileSteps = project.compileTask.steps;
project.compileTask.reset();

for (const client of fs.readdirSync(`${__dirname}/src/clients`)) {
  const compileClient = compileTask(client, `src/clients/${client}/*.ts`, `lib/clients/${client}/index.js`, `lib/clients/${client}/index.d.ts`)
  project.compileTask.spawn(compileClient);
}

const compileIndex = compileTask('index', 'src/index.ts', 'lib/index.js', 'lib/index.d.ts');
project.compileTask.spawn(compileIndex);

// remove tsconfig
project.compileTask.exec('rm tsconfig.json');

project.synth();

function compileTask(name, include, main, types) {

  const compile = project.addTask(`compile:${name}`);

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

  const tsConfigOverridesPath = `${__dirname}/${path.dirname(include)}/tsconfig.overrides.json`;
  const manifestOverridesPath = `${__dirname}/${path.dirname(include)}/package.overrides.json`;

  // config overrides for specific submodule compilation
  fs.writeFileSync(tsConfigOverridesPath, JSON.stringify({ include: [include] }));
  fs.writeFileSync(manifestOverridesPath, JSON.stringify({ main, types }));

  // instruct jsii to use the overrides we created
  compile.env('JSII_TSCONFIG_OVERRIDES_PATH', tsConfigOverridesPath);
  compile.env('JSII_MANIFEST_OVERRIDES_PATH', manifestOverridesPath);

  // event some individual clients are too big for the default memory limit
  // compile.env('NODE_OPTIONS', '--max_old_space_size=4096');

  return compile;

}