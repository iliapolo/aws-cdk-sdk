const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
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
    'typescript-parser',
    'node-color-log',
    'ts-node',
  ]
});

project.removeScript('build');
project.addScript('build', './gen/gen.sh && NODE_OPTIONS=--max_old_space_size=4096 yarn run compile');
project.eslint.addIgnorePattern('gen/**')
project.eslint.addRules({'max-len': ['error', { code: 2000 }]});
project.synth();
