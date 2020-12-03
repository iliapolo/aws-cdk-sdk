const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  dependabot: true,
  authorName: 'Eli Polonsky',
  repository: 'https://github.com/iliapolo/aws-cdk-sdk',
  name: "aws-cdk-sdk",
  deps: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
  ],
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
  ],
  devDeps: [
    '@aws-cdk/aws-elasticsearch',
    '@aws-cdk/assert',
    'codemaker',
    'json-schema',
    'json2jsii',
    'typescript-parser',
    'node-color-log',
    'ts-node',
  ]
});

project.removeScript('build');
project.addScript('build', './gen/gen.sh && yarn run compile');

project.removeScript('compile');
project.addScript('compile', './compile.sh');

project.eslint.addIgnorePattern('gen/**')
project.eslint.addRules({'max-len': ['error', { code: 2000 }]});
project.synth();
