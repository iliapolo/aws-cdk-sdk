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
    'jsii-docgen',
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

const docgen = project.addTask('docgen');
docgen.exec('ts-node --skip-project scripts/docgen.ts');

project.compileTask.prependSpawn(codegen);
project.compileTask.spawn(docgen);

project.gitignore.exclude('.sdk');

// lots of code - need some more memory...
project.compileTask.env('NODE_OPTIONS', '--max_old_space_size=5000');
project.tasks.tryFind('eslint').env('NODE_OPTIONS', '--max_old_space_size=5000');

project.eslint.addIgnorePattern('codegen/**');
project.eslint.addIgnorePattern('scripts/**');
project.eslint.addRules({ 'max-len': ['error', { code: 2000 }] });

project.synth();
