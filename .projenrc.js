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
    'aws-cdk',
    '@aws-cdk/aws-ssm',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-elasticsearch',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-sqs',
    'aws-sdk',
    'codemaker',
    'json-schema',
    'jsii-docgen',
    'json2jsii',
    'typescript-parser',
    'ts-node',
  ],
  stability: 'experimental',
  testdir: 'src/__tests__',
});

const codegen = project.addTask('codegen');
codegen.exec('ts-node --skip-project codegen/main.ts');

const docgen = project.addTask('docgen');
docgen.exec('ts-node --skip-project scripts/docgen.ts');

discoverIntegrationTests();

project.compileTask.prependExec('rm -rf lib');
project.compileTask.prependSpawn(codegen);
project.compileTask.spawn(docgen);

project.gitignore.exclude('cdk.out');
project.gitignore.exclude('.sdk');
project.gitignore.exclude('.vscode/');

// lots of code - need some more memory...
project.testTask.env('NODE_OPTIONS', '--max_old_space_size=5000');
project.compileTask.env('NODE_OPTIONS', '--max_old_space_size=5000');
project.tasks.tryFind('eslint').env('NODE_OPTIONS', '--max_old_space_size=5000');

project.eslint.addIgnorePattern('codegen/**');
project.eslint.addIgnorePattern('scripts/**');
project.eslint.addRules({ 'max-len': ['error', { code: 2000 }] });

project.synth();

function discoverIntegrationTests() {

  const clients = 'src/__tests__/clients';

  for (const client of fs.readdirSync(clients)) {

    const integ = `${clients}/${client}/${client}.integ.ts`;
    if (fs.existsSync(integ)) {

      const cdk = `cdk -a 'node ${integ.replace('src', 'lib').replace('.ts', '.js')}'`;

      for (const command of ['synth', 'deploy', 'destroy']) {
        const task = project.tasks.tryFind(`integ:${command}`) ? project.tasks.tryFind(`integ:${command}`) : project.addTask(`integ:${command}`);
        const subtask = project.addTask(`integ:${client}:${command}`);
        subtask.exec(`${cdk} ${command}`);
        task.spawn(subtask);
      }
    }
  }
}