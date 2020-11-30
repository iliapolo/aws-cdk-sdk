import * as fs from 'fs';
import * as path from 'path';
import * as maker from 'codemaker';
import * as ts from 'typescript-parser';
import * as sdk from './sdk-repository';
import logger = require('node-color-log')

export enum ShapeType {

  MAP = 'map',

  LIST = 'list',

  STRUCTURE = 'structure',

}

export interface ClientApi {

  readonly metadata: any;

  readonly operations: Record<string, Operation>;

  readonly shapes: Record<string, Shape>;

  readonly documentation: string;
}

export interface Shape {

  readonly members?: Record<string, Member>;

  readonly member?: Member;

  readonly key?: any;

  readonly value?: any;

  readonly eventstream?: boolean;

  readonly type: string;
}

export interface Member {

  readonly shape: string;
}

export interface ClientResponseDefinition {

  readonly declaration: ts.InterfaceDeclaration;

  readonly operationName: string;

  readonly operation: any;
}

export interface Operation {

  readonly output?: Output;

  readonly input: Input;

  readonly documentation: string;

}

export interface Input {

  readonly shape: string;
}

export interface Output {

  readonly shape: string;
}

export interface NamedOperation extends Operation {

  readonly name: string;

}

export interface NamedShape extends Shape {

  readonly name: string;
}

export class ClientGenerator {

  private readonly api: ClientApi;
  private readonly dtsRaw: string;
  private readonly parser: ts.TypescriptParser;
  private readonly code: maker.CodeMaker;
  private readonly operations: NamedOperation[];
  private readonly shapes: Record<string, Shape>;

  private _dts?: ts.File;
  private _id?: string;
  private _responses?: ClientResponseDefinition[];
  private _declarations?: ts.Declaration[];

  constructor(client: sdk.Client) {
    this.parser = new ts.TypescriptParser();
    this.code = new maker.CodeMaker({ indentationLevel: 2 });
    this.api = JSON.parse(fs.readFileSync(client.apiPath).toString());
    this.dtsRaw = fs.readFileSync(client.dtsPath).toString();
    this.operations = [];
    this.shapes = {};
    logger.setLevel('info');

    for (const operationName of Object.keys(this.api.operations)) {

      logger.debug(`Inspecting operation ${operationName}`);

      const operation = this.api.operations[operationName];

      if (operation.output && this.isEventStream(operation.output.shape)) {
        logger.warn(`Operation ${operationName} has an event stream output. These operations are not supported yet. (Ignoring)`)
        continue;
      }

      logger.debug(`Registering operation ${operationName}`);
      this.operations.push({ name: operationName, ...operation });

      if (operation.input) {
        logger.debug(`Registering input shapes for ${operationName}`);
        this.visitShapes(operation.input.shape, (name: string, shape: Shape) => this.shapes[name] = shape );
      }

      if (operation.output) {
        logger.debug(`Registering output shapes for ${operationName}`);
        this.visitShapes(operation.output.shape, (name: string, shape: Shape) => this.shapes[name] = shape );
      }

    }
  }

  private isEventStream(shapeName: string) {

    const shape = this.api.shapes[shapeName];

    let eventStream = shape.eventstream ?? false;

    // a shape is an event stream if any of its references are event streams
    this.visitShapes(shapeName, (_, shape) => {
      eventStream = shape.eventstream ?? false;
    })

    return eventStream;
  }

  private visitShapes(name: string, visitor: (name: string, shape: Shape) => void) {

    const memo = new Set<string>();

    const shapes = this.api.shapes;

    function visit(_name: string) {

      if (memo.has(_name)) {
        return;
      }

      logger.debug(`Visting shape: ${_name}`);

      const shape: Shape = shapes[_name];

      if (_name === 'Date') {
        visitor('_Date', shape);
        memo.add(_name);
        return;
      }

      if (_name === 'Blob') {
        visitor('_Blob', shape);
        memo.add(_name);
        return;
      }

      if (['boolean', 'number', 'integer', 'string'].includes(_name)) {
        // just a primitive
        return;
      }

      const shapeType = shape.type;

      switch (shapeType) {
        case ShapeType.LIST:
          visit(shape.member.shape);
          break;
        case ShapeType.STRUCTURE:
          Object.values(shape.members ?? {}).forEach(m => visit(m.shape));
          break;
        case ShapeType.MAP:
          visit(shape.key.shape);
          visit(shape.value.shape);
          break;
        default:
          // primitives and type aliases ?
          break;
      }
      visitor(_name, shape);
      memo.add(_name);
    }

    visit(name);

  }

  public async dts(): Promise<ts.File> {
    if (!this._dts) {
      this._dts = await this.parser.parseSource(this.dtsRaw);
    }
    return this._dts;
  }

  public async declarations(): Promise<ts.Declaration[]> {
    if (!this._declarations) {
      this._declarations = [];
      for (const resource of (await this.dts()).resources) {
        for (const declaration of resource.declarations) {
          this._declarations.push(declaration);
        }
      }
    }
    return this._declarations;
  }

  public async id(): Promise<string> {
    if (!this._id) {
      const types = (await this.dts());
      const classDeclarations = types.declarations.filter(d => d instanceof ts.ClassDeclaration);
      if (classDeclarations.length !== 1) {
        throw new Error(`Unable to extract client id -> Unexpected number of class declarations for ${types.filePath}: ${classDeclarations.map(d => d.name).join(',')}`)
      }
      this._id = classDeclarations[0].name;
    }
    return this._id;
  }

  public async responses(): Promise<ClientResponseDefinition[]> {
    if (!this._responses) {
      this._responses = [];
      for (const operation of this.operations) {

        if (operation.output) {

          const outputShape = await this.findDeclaration(operation.output.shape);

          if (!(outputShape instanceof ts.InterfaceDeclaration)) {
            throw new Error(`Unexpcted declaration type for operation '${operation.name}' output ${operation.output.shape}: ${outputShape.constructor.name}`);
          }

          this._responses.push({
            declaration: outputShape,
            operation: operation,
            operationName: operation.name,
          });
        }
      }
    }
    return this._responses;
  }

  public async gen(root: string) {

    const id = await this.id();

    const outputDir = path.join(`${root}/${id.toLowerCase()}`);

    // this.code.openFile('responses.ts');
    // this.code.line("import * as cdk from '@aws-cdk/core';");
    // this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    // this.code.line("import * as shapes from './shapes';");
    // this.code.line();
    // await this.generateResponses();
    // this.code.closeFile('responses.ts');

    // this.code.openFile('api.ts');
    // this.code.line("import * as cdk from '@aws-cdk/core';");
    // this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    // this.code.line("import * as responses from './responses';");
    // this.code.line("import * as shapes from './shapes';");
    // this.code.line();
    // await this.generateApi();
    // this.code.closeFile('api.ts');

    this.code.openFile('shapes.ts');
    await this.generateShapes();
    this.code.closeFile('shapes.ts');

    // this.code.openFile('index.ts');
    // this.code.line("export * from './shapes';")
    // this.code.line("export * from './api';")
    // this.code.line("export * from './responses';")
    // this.code.closeFile('index.ts');

    await this.code!.save(outputDir);

  }

  public async generateApi() {

    const id = await this.id();

    this.code.line('/**');
    this.code.line(` * ${this.api.metadata.serviceFullName} (apiVersion: ${this.api.metadata.apiVersion})`);
    this.code.line(' */');
    this.code.openBlock(`export class ${id} extends cdk.Construct`);
    this.code.line();
    this.code.openBlock('constructor(scope: cdk.Construct, private readonly resources: string[])');
    this.code.line(`super(scope, '${id}');`);
    this.code.closeBlock();
    this.code.line();

    for (const operation of this.operations) {

      let input = undefined;
      let output = undefined;

      if (operation.input) {
        input = `input: shapes.${operation.input.shape}`;
      }

      if (operation.output) {
        output = `responses.${operation.output.shape}Api`;
      }

      this.htmlDocs(operation).forEach(l => this.code.line(l));
      this.code.openBlock(`public ${this.code!.toCamelCase(operation.name)}(${input ?? ''}): ${output ?? 'void'}`);

      if (output) {
        if (input) {
          this.code!.line(`return new ${output}(this, this.resources, input);`);
        } else {
          this.code!.line(`return new ${output}(this, this.resources);`);
        }
      } else {
        await this.generateAwsCustomResource(operation.name, operation, [], undefined, false);
      }

      this.code!.closeBlock();
      this.code!.line();
    }

    this.code!.closeBlock();

  }

  public async generateTypeAlias(ta: ts.TypeAliasDeclaration) {

    if (this.api.shapes[ta.name]?.eventstream) {
      // not supported at the moment
      logger.warn(`Skipping event stream type alias as they are not supported: ${ta.name}`);
      return;
    }

    if (ta.name === 'ClientConfiguration') {
      // not needed since we are not exposing client config - maybe at some point
      return;
    }

    this.code.line(this.dtsRaw.substring(ta.start!, ta.end)
      // eslint compatible
      .replace(/"/g, "'")

      // Readable is a type from the 'stream' module and corresponds to a 'streaming: true' member in the spec.
      // unsupported at the moment
      .replace('|Readable', '')

      // https://github.com/aws/aws-sdk-js/blob/master/clients/s3.d.ts#L13
      .replace('|Blob', '|{}'));

  }

  public async generateShapes() {

    for (const shapeName of Object.keys(this.shapes)) {

      if (shapeName.startsWith('_')) {
        // private interface, not part of the spec
        continue;
      }

      const shapeDeclaration = await this.findDeclaration(shapeName);

      if (shapeDeclaration instanceof ts.TypeAliasDeclaration) {
        this.generateTypeAlias(shapeDeclaration);
        continue;
      }

      if (!(shapeDeclaration instanceof ts.InterfaceDeclaration)) {
        throw new Error(`Unexpected declaration type for shape ${shapeName}: ${shapeDeclaration.constructor.name}`);
      }

      const properties = shapeDeclaration.properties;
      if (!properties) {
        throw new Error(`Unexpected declaration: ${shapeName} should have properties`);
      }

      this.tsDocs(shapeDeclaration).forEach(t => this.code.line(t));
      this.code.openBlock(`export interface ${shapeName}`);
      for (const property of properties) {
        const jsiiCompatible = this.code.toCamelCase(property.name);
        this.tsDocs(property).forEach(t => this.code.line(t));
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
      this.code.openBlock(`export class ${output.declaration.name}Api`);

      await this.generateResponse(output.operationName, output.operation, output.declaration, [], [`${output.declaration.name}Api`]);

      this.code.closeBlock();
      this.code.line();

    }

  }

  private async generateResponse(operationName: string, operation: any, response: ts.InterfaceDeclaration, outputPath: string[], typePrefix: string[]) {

    const inputShape = operation.input?.shape;

    for (const property of response.properties) {

      if (!property.type) {
        throw new Error(`Unexpected property ${response.name}.${property.name}: no return type`);
      }

      if (isPrimitive(property)) {
        this.tsDocs(property).forEach(t => this.code.line(t));
        this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): ${property.type}`);
        await this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], property.type, true);
        this.code.closeBlock();
        continue;
      }

      const propertyTypeDeclaration = await this.findDeclaration(property.type);

      if (propertyTypeDeclaration instanceof ts.TypeAliasDeclaration) {
        this.tsDocs(property).forEach(t => this.code.line(t));
        this.code.openBlock(`public get ${this.code!.toCamelCase(property.name)}(): shapes.${property.type}`);
        await this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], `shapes.${property.type}`, true);
        this.code.closeBlock();
        continue;
      }

      if (propertyTypeDeclaration instanceof ts.InterfaceDeclaration) {

        this.code.line('/**');
        this.code.line(` * Response for ${[...typePrefix, `${property.name}`].join('.')}`);
        this.code.line(' */');
        this.code.openBlock(`static ${property.name}Api = class`);
        await this.generateResponse(operationName, operation, propertyTypeDeclaration, [...outputPath, property.name], [...typePrefix, `${property.name}Api`]);
        this.code.closeBlock();

        this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): InstanceType<typeof ${[...typePrefix, `${property.name}Api`].join('.')}>`);
        this.code.line(`return new ${[...typePrefix, `${property.name}Api`].join('.')}(this.scope, this.resources${inputShape ? ', this.input' : ''});`);
        this.code.closeBlock();
        this.code.line();
        continue;
      }

      throw new Error(`Unexecpted declaration type for property ${response.name}.${property.name}: ${propertyTypeDeclaration.constructor.name}`);

    }

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

      const inputShapeDeclaration = await this.findDeclaration(operation.input.shape);

      if (!(inputShapeDeclaration instanceof ts.InterfaceDeclaration)) {
        throw new Error(`Unexpected declaration type for operation ${operationName} input: ${inputShapeDeclaration.constructor.name}`);
      }

      await this.createParameters([], inputShapeDeclaration, thisInput);
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

  private async findDeclaration(name: string): Promise<ts.Declaration> {

    const declarations = (await this.declarations()).filter(s => s.name === name);

    if (declarations.length !== 1) {
      throw new Error(`Unexpected number of declarations named ${name}: ${declarations.length}`)
    }

    return declarations[0];
  }

  private tsDocs(declaration: ts.Declaration): string[] {

    const reversed = reverse(this.dtsRaw.substring(0, declaration.end));

    const docsStart = reversed.indexOf('/*');
    const docsEnd = reversed.indexOf('**/');

    let docs = `${declaration.name} Properties.`;
    if (docsStart !== -1) {
      docs = reverse(reversed.substring(docsStart + 2, docsEnd - 3)).replace('*', '').trim();
    }

    // some doc strings are freakshly long (17,000 charaters for https://github.com/aws/aws-sdk-js/blob/master/clients/s3.d.ts#L2002)
    // lets limit to something more sane even at the expense of malformed docs for now
    const firstDot = docs.indexOf('.') + 1;

    return [
      '/**',
      ...docs.substring(0, Math.max(firstDot, 1000)).split('.').filter(s => s.length > 0).map(s => ` * ${s.trim()}.`),
      ' */'
    ];
  }

  private htmlDocs(operation: NamedOperation): string[] {

    const docs = operation.documentation ?? operation.name;
    return [
      '/**',
      ...docs.split('.').filter(s => s.length > 0).map(s => ` * ${s.trim()}.`),
      ' */'
    ];
  }

  private async createParameters(propPath: ts.PropertyDeclaration[], shape: ts.InterfaceDeclaration, thisInput?: boolean) {

    for (const property of shape.properties) {

      if (!property.type) {
        throw new Error(`Unexepcted property ${shape.name}.${property.name}: no return type`)
      }

      const newPath = [...propPath, property];

      let propertyValue = newPath.map(p => p.isOptional ? `${this.code.toCamelCase(p.name)}?` : this.code.toCamelCase(p.name)).join('.');

      if (propertyValue.endsWith('?')) {
        propertyValue = propertyValue.substring(0, propertyValue.length - 1);
      }

      if (isPrimitive(property)) {
        this.code.line(`${property.name}: ${thisInput ? 'this.' : ''}input.${propertyValue},`);
        continue;
      }

      const propertyTypeDeclaration = await this.findDeclaration(property.type);

      if (propertyTypeDeclaration instanceof ts.TypeAliasDeclaration) {
        this.code.line(`${property.name}: ${thisInput ? 'this.' : ''}input.${propertyValue},`);
        continue;
      }

      if (propertyTypeDeclaration instanceof ts.InterfaceDeclaration) {
        this.code.openBlock(`${property.name}:`);
        await this.createParameters(newPath, propertyTypeDeclaration, thisInput);
        this.code.closeBlock();
        continue;
      }

      throw new Error(`Unexpected declaration type for property ${shape.name}.${property.name}: ${propertyTypeDeclaration.constructor.name}`);

    }
  }

}

function reverse(s: string): string {
  return s.split('').reverse().join('');
}

function isPrimitive(prop: ts.PropertyDeclaration): boolean {
  return ['boolean', 'number', 'string'].includes(prop.type!.toLowerCase());
}

