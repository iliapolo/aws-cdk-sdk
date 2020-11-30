import * as fs from 'fs';
import * as path from 'path';

export interface Client {
  readonly dtsPath: string;
  readonly specPath: string;
}

export class SdkRepository {

  public readonly clients: Client[] = [];

  constructor(repoPath: string) {

    const clientsDirectory = path.join(repoPath, 'clients');
    const apisDirectory = path.join(repoPath, 'apis');
    const clientFiles = fs.readdirSync(clientsDirectory);
    const apiFiles = fs.readdirSync(apisDirectory);

    for (const clientFile of clientFiles) {
      if (clientFile.endsWith('.d.ts')) {
        const clientName = clientFile.split('.')[0];

        if (clientName === 'all') {
          continue;
        }

        const clientApiFiles = apiFiles.filter(f => f.replace(/-/g, '').startsWith(`${clientName}2`) && f.includes('normal.json'));

        if (clientApiFiles.length === 0) {
          // some clients dont have api files... (e.g augmentedairuntime)
          continue;
        }

        this.clients.push({
          dtsPath: path.join(clientsDirectory, clientFile),
          // take the last since it will be the latest
          specPath: path.join(apisDirectory, clientApiFiles[clientApiFiles.length - 1]),
        });
      }
    };
  }

}