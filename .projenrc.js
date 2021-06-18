const { JsiiProject } = require('projen');

const project = new JsiiProject({
  dependabot: true,
  authorName: 'Eli Polonsky',
  repository: 'https://github.com/iliapolo/aws-cdk-sdk',
  name: "aws-cdk-sdk",
  deps: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    'constructs',
  ],
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    'constructs',
  ],
  devDeps: [
    '@aws-cdk/aws-elasticsearch',
    '@aws-cdk/assert',
    "aws-sdk@2.799.0",
    'codemaker',
    'json-schema',
    'json2jsii',
    'typescript-parser',
    'node-color-log',
    'typescript-json-schema',
    'ts-node',
  ],
  stability: 'experimental'
});

project.gitignore.exclude(`gen/.sdks`)
project.addScript('gen', './node_modules/.bin/ts-node --skip-project gen/gen.ts');

project.eslint.addIgnorePattern('gen/**')
project.eslint.addRules({'max-len': ['error', { code: 2000 }]});
project.synth();
