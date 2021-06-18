import * as gen from './client-generator';
import * as child from 'child_process';
import * as sdk from './sdk-repository';
import * as fs from 'fs';
import * as maker from 'codemaker';
import * as path from 'path';

const INCLUDE = ['Lambda'];
// const EXCLUDE = ['Kendra', 'Pinpoint'];

const SDK_VERSION = process.env.SDK_VERSION ?? '2.799.0'

async function generate() {

  const sdks = path.join(`${__dirname}/.sdks`);
  fs.mkdirSync(sdks, { recursive: true });

  const repoPath = path.join(`${sdks}/aws-sdk-js-${SDK_VERSION}`);

  if (!fs.existsSync(repoPath)) {
    const out = path.join(sdks, `aws-sdk-js-${SDK_VERSION}.zip`);
    child.execSync(`curl -o ${out} --silent -L https://github.com/aws/aws-sdk-js/archive/v${SDK_VERSION}.zip`);
    child.execSync(`cd ${sdks} && unzip ${out}`)
  }

  const repo = new sdk.SdkRepository(repoPath);
  const src = path.join(__dirname, '..', 'src');
  const clientsDirectory = path.join(src, 'clients');

  const index = new maker.CodeMaker();
  index.openFile('index.ts');

  deleteFolderRecursive(clientsDirectory);

  for (const client of await repo.createClients()) {

    if (!INCLUDE.includes(path.basename(client.className))) {
      continue;
    }

    // if (EXCLUDE.includes(path.basename(client.className))) {
    //   continue;
    // }

    const clientBaseDir = index.toSnakeCase(client.className).replace(/_/g, '');
    const clientDir = path.join(clientsDirectory, clientBaseDir);
    const generator = new gen.ClientGenerator({ client: client, outDir: clientDir });

    console.log(`Generating client for ${path.basename(client.className)}`);

    await generator.gen();
    index.line(`export * from './clients/${clientBaseDir}';`)

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

generate()