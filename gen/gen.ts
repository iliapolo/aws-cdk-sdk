import * as child from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as maker from 'codemaker';
import * as gen from './client-generator';
import * as sdk from './sdk-repository';

// const INCLUDE = [
//   'GuardDuty',
//   'ManagedBlockchain',
//   'GameLift',
//   'FSx',
//   'CodeBuild',
//   'CloudTrail',
//   'CloudSearchDomain'
// ];
const EXCLUDE = ['Kendra', 'Pinpoint'];

async function generate() {

  const sdkPackage = path.join(path.dirname(path.dirname(require.resolve('aws-sdk'))), 'package.json');
  const sdkVersion = require(sdkPackage).version;

  console.log(`Generating clients for SDK: ${sdkVersion}`)
  const sdks = path.join(`${__dirname}/../.sdk`);
  fs.mkdirSync(sdks, { recursive: true });

  const repoPath = path.join(`${sdks}/aws-sdk-js-${sdkVersion}`);

  if (!fs.existsSync(repoPath)) {
    const out = path.join(sdks, `aws-sdk-js-${sdkVersion}.zip`);
    child.execSync(`curl -o ${out} --silent -L https://github.com/aws/aws-sdk-js/archive/v${sdkVersion}.zip`);
    child.execSync(`cd ${sdks} && unzip ${out}`);
  }

  const repo = new sdk.SdkRepository(repoPath);
  const src = path.join(__dirname, '..', 'src');
  const clientsDirectory = path.join(src, 'clients');

  const index = new maker.CodeMaker();
  index.openFile('index.ts');

  deleteFolderRecursive(clientsDirectory);

  for (const client of await repo.createClients()) {

    // if (!INCLUDE.includes(path.basename(client.className))) {
    //   continue;
    // }

    if (EXCLUDE.includes(path.basename(client.className))) {
      continue;
    }

    const clientBaseDir = index.toSnakeCase(client.className).replace(/_/g, '');
    const clientDir = path.join(clientsDirectory, clientBaseDir);
    const generator = new gen.ClientGenerator({ client: client, outDir: clientDir });

    console.log(`Generating client for ${path.basename(client.className)}`);

    await generator.gen();
    index.line(`export * from './clients/${clientBaseDir}';`);

    // child.execSync(`cd ${clientDir} && ${__dirname}/../node_modules/.bin/typescript-json-schema shapes.ts "*" > schema.json`);

  }

  index.closeFile('index.ts');

  await index.save(src);

}

function deleteFolderRecursive(dir: string) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file, _) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
};

generate();