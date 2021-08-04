const { JsiiProject } = require('projen');

const MEMORY_REQUIRED_FOR_COMPILATION = 8000;
const NODE_OPTIONS = `--max_old_space_size=${MEMORY_REQUIRED_FOR_COMPILATION}`;

const project = new JsiiProject({
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
});

project.gitignore.exclude('.sdk');

const gen = project.tasks.addTask('gen');
gen.env('NODE_OPTIONS', NODE_OPTIONS);
gen.exec('ts-node --skip-project gen/gen.ts');

project.compileTask.prependSpawn(gen);
project.compileTask.env('NODE_OPTIONS', NODE_OPTIONS);
project.testTask.env('NODE_OPTIONS', NODE_OPTIONS);
project.compileTask.env('NODE_OPTIONS', NODE_OPTIONS);

project.eslint.addIgnorePattern('gen/**');
project.eslint.addRules({ 'max-len': ['error', { code: 2000 }] });
project.synth();
