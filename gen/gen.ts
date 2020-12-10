import * as gen from './client-generator';
import * as sdk from './sdk-repository';
import * as fs from 'fs';
import * as maker from 'codemaker';
import logger = require('node-color-log')
import * as path from 'path';

const INCLUDE = ['es.d.ts'];
// const EXCLUDE = ['kendra.d.ts'];

async function main(repoPath: string) {

  logger.setLevel('debug');

  const repo = new sdk.SdkRepository(repoPath);
  const src = path.join(__dirname, '..', 'src');
  const clients = path.join(src, 'clients');

  const codemaker = new maker.CodeMaker();
  codemaker.openFile('index.ts');

  deleteFolderRecursive(clients);

  for (const client of repo.clients) {

    if (!INCLUDE.includes(path.basename(client.dtsPath))) {
      continue;
    }

    // if (EXCLUDE.includes(path.basename(client.dtsPath))) {
    //   continue;
    // }

    const generator = new gen.ClientGenerator(client);

    logger.info(`Generating client for ${path.basename(client.apiPath)}`);

    try {
      const service = codemaker.toSnakeCase(await generator.api.service()).replace(/_/g, '');
      await generator.gen(clients);
      codemaker.line(`export * from './clients/${service}';`)
    } catch (e) {
      logger.color('red').error(`Failed generating client for ${client.apiPath}: ${e}`);
      console.error(e);
    }
  }

  codemaker.closeFile('index.ts');
  await codemaker.save(src);

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
main(process.argv[2])