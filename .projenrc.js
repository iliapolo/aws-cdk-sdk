const { JsiiProject } = require('projen');

const project = new JsiiProject({
  defaultReleaseBranch: 'main',
  release: false,
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
});

const gen = project.tasks.addTask('gen');
gen.exec('./node_modules/.bin/ts-node --skip-project gen/gen.ts');
project.gitignore.exclude('gen/.sdks');

project.eslint.addIgnorePattern('gen/**');
project.eslint.addRules({ 'max-len': ['error', { code: 2000 }] });
project.synth();
