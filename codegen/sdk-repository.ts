import * as fs from 'fs';
import * as path from 'path';
import * as structs from './structs';
import * as ts from 'typescript-parser';
import { CodeMaker } from 'codemaker';

/**
 * SDK client.
 */
export interface Client {

  /**
   * The class name for this client.
   *
   * @see https://github.com/aws/aws-sdk-js/tree/master/clients
   */
  readonly className: string;

  /**
   * The api specification for this client.
   *
   * @see https://github.com/aws/aws-sdk-js/tree/master/apis
   */
  readonly spec: structs.ClientApiSpec;

}

/**
 * SDK repository.
 */
export class SdkRepository {

  private readonly clientsDirectory: string;
  private readonly apisDirectory: string;
  private readonly tsParser: ts.TypescriptParser;

  constructor(repoPath: string) {
    this.clientsDirectory = path.join(repoPath, 'clients');
    this.apisDirectory = path.join(repoPath, 'apis');
    this.tsParser = new ts.TypescriptParser();
  }

  /**
   * Create the client available in the repository.
   *
   * @returns List of clients.
   */
  public async createClients(): Promise<Client[]> {

    const clients: Client[] = [];

    const clientFiles = fs.readdirSync(this.clientsDirectory);
    const apiFiles = fs.readdirSync(this.apisDirectory);

    for (const clientFile of clientFiles) {

      if (!clientFile.endsWith('.d.ts')) {
        continue;
      }

      const clientName = clientFile.split('.')[0];

      if (clientName === 'all') {
        continue;
      }

      const clientApiFiles = apiFiles.filter(f => f.replace(/-/g, '').startsWith(`${clientName}2`) && f.includes('normal.json'));

      if (clientApiFiles.length === 0) {
        // some clients dont have api files... (e.g augmentedairuntime)
        continue;
      }

      // take the last since it will be the latest
      const apiPath = path.join(this.apisDirectory, clientApiFiles[clientApiFiles.length - 1]);
      const spec = JSON.parse(fs.readFileSync(apiPath).toString());
      const className = await this.readClassName(path.join(this.clientsDirectory, clientFile));

      clients.push({ className, spec });

    };

    return clients;

  }

  private async readClassName(dtsPath: string): Promise<string> {

    const types = await this.tsParser.parseSource(fs.readFileSync(dtsPath, 'utf8').toString());
    const classDeclarations = types.declarations.filter(d => d instanceof ts.ClassDeclaration);
    if (classDeclarations.length !== 1) {
      throw new Error(`Unable to extract client id -> Unexpected number of class declarations for ${types.filePath}: ${classDeclarations.map(d => d.name).join(',')}`)
    }
    return classDeclarations[0].name;
  }

}