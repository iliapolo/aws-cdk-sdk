const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: "aws-cdk-sdk",
  deps: [
    'ts-sync-request',
    'codemaker',
    'json2jsii',
    'json-schema',
    'typescript-parser',
    '@aws-cdk/core',
    '@aws-cdk/custom-resources'
  ],
});

project.eslint.addRules({
  'max-len': ['error', { code: 2000 }]
})
project.synth();
