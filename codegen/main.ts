import * as child from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as maker from 'codemaker';
import * as gen from './client';
import * as sdk from './sdk-repository';

// empty means nothing
const EXCLUDE = [

  // don't remember why these are excluded
  // there was some codegen problem with them
  'Kendra',
  'Pinpoint',

  // enormous client (300,000+ lines of code)
  // can't even compile it individually
  'MediaConvert'
];

// empty means all
const INCLUDE = [
];

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

  child.execSync(`rm -rf ${clientsDirectory}`);

  const clients = (await repo.createClients())
    .filter(c => INCLUDE.length > 0 ? INCLUDE.includes(path.basename(c.className)) : true)
    .filter(c => EXCLUDE.length > 0 ? !EXCLUDE.includes(path.basename(c.className)): true)

  for (const client of clients) {

    const clientBaseDir = index.toSnakeCase(client.className).replace(/_/g, '');
    const clientDir = path.join(clientsDirectory, clientBaseDir);
    const generator = new gen.ClientGenerator({ client: client, outDir: clientDir });

    console.log(`Generating client for ${path.basename(client.className)}`);

    await generator.gen();
    index.line(`export * as ${clientBaseDir} from './clients/${clientBaseDir}';`);
  }

  index.closeFile('index.ts');

  await index.save(src);

}

generate();