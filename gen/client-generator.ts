import * as fs from 'fs';
import * as path from 'path';
import * as maker from 'codemaker';
import * as ts from 'typescript-parser';
import * as sdk from './sdk-repository';

export interface ClientSpec {

  readonly metadata: any;

  readonly operations: any;

  readonly shapes: any;

  readonly documentation: string;
}

export interface ClientResponseDefinition {

  readonly declaration: ts.InterfaceDeclaration;

  readonly operationName: string;

  readonly operation: any;
}

export class ClientGenerator {

  private readonly spec: ClientSpec;
  private readonly typesRaw: string;
  private readonly parser: ts.TypescriptParser;
  private readonly code: maker.CodeMaker;

  private _types?: ts.File;
  private _id?: string;
  private _responses?: ClientResponseDefinition[];
  private _shapes?: ts.InterfaceDeclaration[];
  private _typeAliases?: ts.TypeAliasDeclaration[];

  constructor(client: sdk.Client) {
    this.parser = new ts.TypescriptParser();
    this.code = new maker.CodeMaker();
    this.code.indentation = 2;
    this.spec = JSON.parse(fs.readFileSync(client.spec).toString());
    this.typesRaw = fs.readFileSync(client.declarations).toString();
  }

  public async types(): Promise<ts.File> {
    if (!this._types) {
      this._types = await this.parser.parseSource(this.typesRaw);
    }
    return this._types;
  }

  public async id(): Promise<string> {
    if (!this._id) {
      this._id = (await this.types()).declarations.filter(d => d instanceof ts.ClassDeclaration)[0].name;
    }
    return this._id;
  }

  public async responses(): Promise<ClientResponseDefinition[]> {
    if (!this._responses) {
      this._responses = [];
      for (const operationName of Object.keys(this.spec.operations)) {
        const operation = this.spec.operations[operationName];

        if (operation.output) {
          this._responses.push({
            declaration: await this.declaration(operation.output.shape),
            operation: operation,
            operationName: operationName,
          });
        }
      }
    }
    return this._responses;
  }

  public async shapes(): Promise<ts.InterfaceDeclaration[]> {
    if (!this._shapes) {
      this._shapes = [];
      for (const resource of (await this.types()).resources) {
        for (const declaration of resource.declarations) {
          if (declaration instanceof ts.InterfaceDeclaration && !(await this.responses()).map(r => r.declaration).includes(declaration) && declaration.name !== 'ClientApiVersions') {
            this._shapes.push(declaration);
          }
        }
      }
    }
    return this._shapes;
  }

  public async typeAliases(): Promise<ts.TypeAliasDeclaration[]> {
    if (!this._typeAliases) {
      this._typeAliases = [];
      for (const resource of (await this.types()).resources) {
        for (const declaration of resource.declarations) {
          if (declaration instanceof ts.TypeAliasDeclaration && declaration.name !== 'ClientConfiguration') {
            this._typeAliases.push(declaration);
          }
        }
      }
    }
    return this._typeAliases;
  }

  public async gen(root: string) {

    const id = await this.id();

    const outputDir = path.join(`${root}/${id.toLowerCase()}`);

    this.code.openFile('shapes.ts');
    await this.generateShapes();
    await this.generateTypeAliases();
    this.code.closeFile('shapes.ts');

    this.code.openFile('responses.ts');
    this.code.line("import * as cdk from '@aws-cdk/core';");
    this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    this.code.line("import * as shapes from './shapes';");
    this.code.line();
    await this.generateResponses();
    this.code!.closeFile('responses.ts');

    this.code.openFile('api.ts');
    this.code.line("import * as cdk from '@aws-cdk/core';");
    this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    this.code.line("import * as responses from './responses';");
    this.code.line("import * as shapes from './shapes';");
    this.code.line();
    await this.generateApi();
    this.code!.closeFile('api.ts');

    this.code.openFile('index.ts');
    this.code.line("export * from './shapes';")
    this.code.line("export * from './api';")
    this.code.line("export * from './responses';")
    this.code.closeFile('index.ts');

    await this.code!.save(outputDir);

  }

  public async generateApi() {

    const id = await this.id();

    this.code.line('/**');
    this.code.line(` * ${this.spec!.metadata.serviceFullName} (apiVersion: ${this.spec!.metadata.apiVersion})`);
    this.code.line(' */');
    this.code.openBlock(`export class ${id} extends cdk.Construct`);
    this.code.line();
    this.code.openBlock('constructor(scope: cdk.Construct, private readonly resources: string[])');
    this.code.line(`super(scope, '${id}');`);
    this.code.closeBlock();
    this.code.line();

    for (const operationName of Object.keys(this.spec!.operations)) {

      const operation = this.spec!.operations[operationName];

      let input = undefined;
      let output = undefined;

      if (operation.input) {
        input = `input: shapes.${operation.input.shape}`;
      }

      if (operation.output) {
        output = `responses.${operation.output.shape}`;
      }

      this.code!.line('/**');
      this.code!.line(` * ${operation.documentation}`);
      this.code!.line(' */');
      this.code!.openBlock(`public ${this.code!.toCamelCase(operationName)}(${input ?? ''}): ${output ?? 'void'}`);

      if (output) {
        if (input) {
          this.code!.line(`return new ${output}(this, this.resources, input);`);
        } else {
          this.code!.line(`return new ${output}(this, this.resources);`);
        }
      } else {
        await this.generateAwsCustomResource(operationName, operation, [], undefined, false);
      }

      this.code!.closeBlock();
      this.code!.line();
    }

    this.code!.closeBlock();

  }

  public async generateTypeAliases() {
    for (const typeAlias of (await this.typeAliases())) {
      this.code!.line(this.typesRaw!.substring(typeAlias.start!, typeAlias.end).replace(/"/g, "'"));
    }
  }

  public async generateShapes() {

    for (const shape of (await this.shapes())) {

      const properties = shape.properties;
      if (!properties) {
        throw new Error(`Unexpected declaration: ${shape.name} should have properties`);
      }

      if (shape.name.startsWith('_')) {
        // private interface, not part of the spec
        continue;
      }

      const specShape = this.spec.shapes[shape.name];
      if (!specShape) {
        throw new Error(`Unable to locate shape in spec: ${shape.name}`);
      }

      this.code.line('/**');
      this.code.line(` * ${specShape.documentation}`);
      this.code.line(' */');
      this.code.openBlock(`export interface ${shape.name}`);
      for (const property of properties) {
        const jsiiCompatible = this.code.toCamelCase(property.name);
        this.code.line('/**');
        this.code.line(` * ${this.tsDocs(property)}`);
        this.code.line(' */');
        this.code.line(`readonly ${jsiiCompatible}${property.isOptional ? '?' : ''}: ${property.type};`);
      }
      this.code.closeBlock();
      this.code.line();

    }
  }

  public async generateResponses() {

    for (const output of (await this.responses())) {

      this.code.line('/**');
      this.code.line(` * Response for ${output.operationName}.`);
      this.code.line(' */');
      this.code.openBlock(`export class ${output.declaration.name}`);

      await this.generateResponse(output.operationName, output.operation, output.declaration, [], [output.declaration.name]);

      this.code.closeBlock();
      this.code.line();

    }

  }

  private async generateResponse(operationName: string, operation: any, response: ts.InterfaceDeclaration, outputPath: string[], typePrefix: string[]) {

    for (const property of response.properties) {

      if (!property.type) {
        throw new Error(`Unexpected propery ${response.name}.${property.name}: no return type`);
      }

      if (await this.isTypeAlias(property)) {
        this.code.line('/**');
        this.code.line(` * ${this.tsDocs(property)}`);
        this.code.line(' */');
        this.code.openBlock(`public get ${this.code!.toCamelCase(property.name)}(): shapes.${property.type}`);
        await this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], `shapes.${property.type}`, true);
        this.code.closeBlock();
      } else if (isPrimitive(property)) {
        this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): ${property.type}`);
        await this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], property.type, true);
        this.code.closeBlock();
      } else {
        this.code.line('/**');
        this.code.line(` * Response for ${[...typePrefix, `${property.name}`].join('.')}`);
        this.code.line(' */');
        this.code.openBlock(`static ${property.name}Response = class`);
        await this.generateResponse(operationName, operation, (await this.declaration(property.type)), [...outputPath, property.name], [...typePrefix, `${property.name}Response`]);
        this.code.closeBlock();
        this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): InstanceType<typeof ${[...typePrefix, `${property.name}Response`].join('.')}>`);
        this.code.line(`return new ${[...typePrefix, `${property.name}Response`].join('.')}(this.scope, this.resources, this.input);`);
        this.code.closeBlock();
        this.code.line();
      }
    }

    const inputShape = operation.input?.shape;

    if (inputShape) {
      this.code!.openBlock(`constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.${inputShape})`);
    } else {
      this.code!.openBlock('constructor(public scope: cdk.Construct, public readonly resources: string[])');
    }
    this.code!.closeBlock();

  }

  private async generateAwsCustomResource(operationName: string, operation: any, outputPath: string[], returnType?: string, thisInput?: boolean) {

    const originalBlockFormatter = this.code!.closeBlockFormatter;
    const id = await this.id();

    this.code!.openBlock('const props: cr.AwsCustomResourceProps =');
    this.code!.openBlock('onUpdate:');
    this.code!.line(`action: '${this.code!.toCamelCase(operationName)}',`);
    this.code!.line(`service: '${id}',`);

    // todo - is this cool?
    this.code!.line(`physicalResourceId: cr.PhysicalResourceId.of('${operationName}.${outputPath.join('.')}'),`);

    if (outputPath.length > 0) {
      this.code!.line(`outputPath: '${outputPath.join('.')}',`);
    }

    function trallingCommaFormatter(s?: string): string | false {
      const orig = originalBlockFormatter(s);
      if (typeof(orig) !== 'string') return orig;
      return `${orig},`;
    }

    function semiColonFormatter(s?: string): string | false {
      const orig = originalBlockFormatter(s);
      if (typeof(orig) !== 'string') return orig;
      return `${orig};`;
    }

    this.code!.closeBlockFormatter = trallingCommaFormatter;

    if (operation.input?.shape) {
      this.code!.openBlock('parameters:');
      await this.createParameters([], await this.declaration(operation.input.shape), thisInput);
      this.code!.closeBlock();
    }

    this.code!.closeBlock();

    this.code!.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');

    this.code!.closeBlockFormatter = semiColonFormatter;
    this.code!.closeBlock();

    if (outputPath.length > 0) {
      this.code!.line(`const request = new cr.AwsCustomResource(this.scope, '${operationName}.${outputPath.join('.')}', props);`);
      this.code!.line(`return request.getResponseField('${outputPath.join('.')}') as unknown as ${returnType};`);
    } else {
      this.code!.line(`new cr.AwsCustomResource(this, '${operationName}', props);`);
    }


    this.code!.closeBlockFormatter = originalBlockFormatter;

  }

  private async isTypeAlias(prop: ts.PropertyDeclaration) {
    return (await this.typeAliases()).map(t => t.name).includes(prop.type!);
  }

  private async declaration(name: string): Promise<ts.InterfaceDeclaration> {
    for (const resource of (await this.types()).resources) {
      for (const declaration of resource.declarations) {
        if (declaration.name === name && declaration instanceof ts.InterfaceDeclaration) {
          return declaration;
        }
      }
    }
    throw new Error(`Shape not found: ${name}`);
  }

  private tsDocs(declaration: ts.Declaration): string {

    const reversed = reverse(this.typesRaw.substring(0, declaration.end));

    const docsStart = reversed.indexOf('/*');
    const docsEnd = reversed.indexOf('**/');

    return reverse(reversed.substring(docsStart + 2, docsEnd - 3)).replace('*', '').trim();
  }

  private async createParameters(propPath: ts.PropertyDeclaration[], shape: ts.InterfaceDeclaration, thisInput?: boolean) {

    for (const property of shape.properties) {

      const newPath = [...propPath, property];

      let a = newPath.map(p => p.isOptional ? `${this.code.toCamelCase(p.name)}?` : this.code.toCamelCase(p.name)).join('.');

      if (a.endsWith('?')) {
        a = a.substring(0, a.length - 1);
      }

      if (isPrimitive(property) || await this.isTypeAlias(property)) {
        this.code.line(`${property.name}: ${thisInput ? 'this.' : ''}input.${a},`);
      } else {
        this.code.openBlock(`${property.name}:`);
        await this.createParameters(newPath, await this.declaration(property.type!), thisInput);
        this.code.closeBlock();
      }
    }
  }

}

function reverse(s: string): string {
  return s.split('').reverse().join('');
}

function isPrimitive(prop: ts.PropertyDeclaration): boolean {
  return ['boolean', 'number', 'string'].includes(prop.type!.toLowerCase());
}

