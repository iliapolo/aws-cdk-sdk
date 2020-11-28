import * as fs from 'fs';
import * as path from 'path';
import { CodeMaker } from 'codemaker';
import { SyncRequestClient } from 'ts-sync-request/dist';
import { TypescriptParser, InterfaceDeclaration, TypeAliasDeclaration, PropertyDeclaration, ClassDeclaration, File } from 'typescript-parser';

export interface ServiceApiSpec {

  readonly metadata: any;

  readonly operations: any;

  readonly shapes: any;

  readonly documentation: string;
}

export interface Response {
  readonly declaration: InterfaceDeclaration;
  readonly operationName: string;
  readonly operation: any;
}

export class ServiceGenerator {

  private serviceTypes?: File;
  private serviceSpec?: ServiceApiSpec;
  private serivceTypesRaw?: string;
  private shapes: InterfaceDeclaration[] = [];
  private responses: Response[] = [];
  private typeAliases: TypeAliasDeclaration[] = [];
  private module?: CodeMaker;
  private serviceId?: string;
  private inputsForOutputs: Record<string, string> = {};

  constructor(private readonly schemaUrl: string, private readonly declarationsPath: string) {}

  public async init() {

    const client = new SyncRequestClient();
    const parser = new TypescriptParser();

    this.module = new CodeMaker();
    this.module.indentation = 2;
    this.serviceSpec = client.get<ServiceApiSpec>(this.schemaUrl);
    this.serviceTypes = await parser.parseFile(path.basename(this.declarationsPath), path.dirname(this.declarationsPath));
    this.serivceTypesRaw = fs.readFileSync(this.declarationsPath).toString();
    this.serviceId = this.serviceTypes.declarations.filter(d => d instanceof ClassDeclaration)[0].name;

    for (const operationName of Object.keys(this.serviceSpec.operations)) {
      const operation = this.serviceSpec.operations[operationName];

      if (operation.input && operation.output) {
        this.inputsForOutputs[operation.output.shape] = operation.input.shape;
      }

      if (operation.output) {
        this.responses.push({
          declaration: getShapeDeclaration(operation.output.shape, this.serviceTypes!),
          operation: operation,
          operationName: operationName,
        });
      }
    }

    for (const resource of this.serviceTypes!.resources) {
      for (const declaration of resource.declarations) {
        if (declaration instanceof InterfaceDeclaration && !this.responses.map(r => r.declaration).includes(declaration) && declaration.name !== 'ClientApiVersions') {
          this.shapes.push(declaration);
        }
      }
    }

    for (const resource of this.serviceTypes!.resources) {
      for (const declaration of resource.declarations) {
        if (declaration instanceof TypeAliasDeclaration && declaration.name !== 'ClientConfiguration') {
          this.typeAliases.push(declaration);
        }
      }
    }

  }

  public async gen() {

    if (!this.serviceSpec || !this.serviceTypes || !this.serivceTypesRaw) {
      throw new Error("Uninitialized. Please call '.init()' first");
    }

    const outputDir = path.join(`${__dirname}/services/${this.serviceId!.toLowerCase()}`);

    this.module!.openFile('shapes.ts');
    this.generateShapes();
    this.generateTypeAliases();
    this.module!.closeFile('shapes.ts');

    this.module!.openFile('responses.ts');
    this.module!.line("import * as cdk from '@aws-cdk/core';");
    this.module!.line("import * as cr from '@aws-cdk/custom-resources';");
    this.module!.line("import * as shapes from './shapes';");
    this.generateResponses();
    this.module!.closeFile('responses.ts');

    this.module!.openFile('api.ts');
    this.module!.line("import * as cdk from '@aws-cdk/core';");
    this.module!.line("import * as cr from '@aws-cdk/custom-resources';");
    this.module!.line("import * as responses from './responses';");
    this.module!.line("import * as shapes from './shapes';");
    this.generateApi();
    this.module!.closeFile('api.ts');

    await this.module!.save(outputDir);

  }

  public generateTypeAliases() {

    for (const typeAlias of this.typeAliases) {
      this.module!.line(this.serivceTypesRaw!.substring(typeAlias.start!, typeAlias.end).replace(/"/g, "'"));
    }

  }

  public generateShapes() {

    for (const shape of this.shapes) {

      const properties = shape.properties;
      if (!properties) {
        throw new Error(`Unexpected declaration: ${shape.name} should have properties`);
      }

      if (!this.serviceSpec!.shapes[shape.name]) {
        console.log(`no shape for ${shape.name}`);
      }

      this.module!.line('/**');
      this.module!.line(` * ${this.serviceSpec!.shapes[shape.name].documentation}`);
      this.module!.line(' */');
      this.module!.openBlock(`export interface ${shape.name}`);
      for (const property of properties) {
        const jsiiCompatible = this.module!.toCamelCase(property.name);
        this.module!.line('/**');
        this.module!.line(` * ${docsForProperty(this.serivceTypesRaw!, property)}`);
        this.module!.line(' */');
        this.module!.line(`readonly ${jsiiCompatible}${property.isOptional ? '?' : ''}: ${property.type};`);
      }
      this.module!.closeBlock();

    }
  }

  public generateResponses() {

    for (const output of this.responses) {

      this.module!.openBlock(`export class ${output.declaration.name}`);

      this.generateResponse(output.operationName, output.operation, output.declaration, [], [output.declaration.name]);

      this.module!.closeBlock();

    }

  }

  private generateResponse(operationName: string, operation: any, response: InterfaceDeclaration, outputPath: string[], typePrefix: string[]) {

    for (const property of response.properties) {

      if (!property.type) {
        throw new Error(`Unexpected propery ${response.name}.${property.name}: no return type`);
      }

      if (isTypeAlias(property, this.typeAliases)) {
        this.module!.openBlock(`public get ${this.module!.toCamelCase(property.name)}(): shapes.${property.type}`);
        this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], `shapes.${property.type}`, true);
        this.module!.closeBlock();
      } else if (isPrimitive(property)) {
        this.module!.openBlock(`public get ${this.module!.toCamelCase(property.name)}(): ${property.type}`);
        this.generateAwsCustomResource(operationName, operation, [...outputPath, property.name], property.type, true);
        this.module!.closeBlock();
      } else {
        this.module!.openBlock(`static ${property.name}Response = class`);
        this.generateResponse(operationName, operation, getShapeDeclaration(property.type, this.serviceTypes!), [...outputPath, property.name], [...typePrefix, `${property.name}Response`]);
        this.module!.closeBlock();
        this.module!.openBlock(`public get ${this.module!.toCamelCase(property.name)}(): InstanceType<typeof ${[...typePrefix, `${property.name}Response`].join('.')}>`);
        this.module!.line(`return new ${[...typePrefix, `${property.name}Response`].join('.')}(this.scope, this.resources, this.input);`);
        this.module!.closeBlock();
      }
    }

    const inputShape = operation.input?.shape;

    if (inputShape) {
      this.module!.openBlock(`constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.${inputShape})`);
    } else {
      this.module!.openBlock('constructor(public scope: cdk.Construct, public readonly resources: string[])');
    }
    this.module!.closeBlock();

  }

  private generateAwsCustomResource(operationName: string, operation: any, outputPath: string[], returnType?: string, thisInput?: boolean) {

    const originalBlockFormatter = this.module!.closeBlockFormatter;

    this.module!.openBlock('const props: cr.AwsCustomResourceProps =');
    this.module!.openBlock('onUpdate:');
    this.module!.line(`action: '${this.module!.toCamelCase(operationName)}',`);
    this.module!.line(`service: '${this.serviceId}',`);
    if (outputPath.length > 0) {
      this.module!.line(`outputPath: '${outputPath.join('.')}',`);
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

    this.module!.closeBlockFormatter = trallingCommaFormatter;

    if (operation.input?.shape) {
      this.module!.openBlock('parameters:');
      createParameters([], this.module!, getShapeDeclaration(operation.input.shape, this.serviceTypes!), this.serviceTypes!, this.typeAliases, thisInput);
      this.module!.closeBlock();
    }

    this.module!.closeBlock();

    this.module!.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');

    this.module!.closeBlockFormatter = semiColonFormatter;
    this.module!.closeBlock();

    if (outputPath.length > 0) {
      this.module!.line(`const request = new cr.AwsCustomResource(this.scope, '${operationName}.${outputPath.join('.')}', props);`);
      this.module!.line(`return request.getResponseField('${outputPath.join('.')}') as unknown as ${returnType};`);
    } else {
      this.module!.line(`new cr.AwsCustomResource(this, '${operationName}', props);`);
    }


    this.module!.closeBlockFormatter = originalBlockFormatter;

  }

  public generateApi() {

    this.module!.openBlock(`export class ${this.serviceId} extends cdk.Construct`);
    this.module!.openBlock('constructor(scope: cdk.Construct, private readonly resources: string[])');
    this.module!.line(`super(scope, '${this.serviceId}');`);
    this.module!.closeBlock();

    for (const operationName of Object.keys(this.serviceSpec!.operations)) {

      const operation = this.serviceSpec!.operations[operationName];

      let input = undefined;
      let output = undefined;

      if (operation.input) {
        input = `input: shapes.${operation.input.shape}`;
      }

      if (operation.output) {
        output = `responses.${operation.output.shape}`;
      }

      this.module!.line('/**');
      this.module!.line(` * ${operation.documentation}`);
      this.module!.line(' */');
      this.module!.openBlock(`public ${this.module!.toCamelCase(operationName)}(${input ?? ''}): ${output ?? 'void'}`);

      if (output) {
        if (input) {
          this.module!.line(`return new ${output}(this, this.resources, input);`);
        } else {
          this.module!.line(`return new ${output}(this, this.resources);`);
        }
      } else {
        this.generateAwsCustomResource(operationName, operation, [], undefined, false);
      }

      this.module!.closeBlock();
    }

    this.module!.closeBlock();

  }

}

function docsForProperty(raw: string, declaration: PropertyDeclaration): string {

  const reversed = reverse(raw.substring(0, declaration.end));

  const docsStart = reversed.indexOf('/*');
  const docsEnd = reversed.indexOf('**/');

  return reverse(reversed.substring(docsStart + 2, docsEnd - 3)).replace('*', '').trim();
}

function reverse(s: string): string {
  return s.split('').reverse().join('');
}

function getShapeDeclaration(name: string, parsed: File): InterfaceDeclaration {
  for (const resource of parsed.resources) {
    for (const declaration of resource.declarations) {
      if (declaration.name === name && declaration instanceof InterfaceDeclaration) return declaration;
    }
  }
  throw new Error(`No shape: ${name}`);
}

function createParameters(propPath: PropertyDeclaration[], code: CodeMaker, shape: InterfaceDeclaration, parsed: File, typeAliases: TypeAliasDeclaration[], thisInput?: boolean) {

  for (const property of shape.properties) {

    const newPath = [...propPath, property];

    let a = newPath.map(p => p.isOptional ? `${code.toCamelCase(p.name)}?` : code.toCamelCase(p.name)).join('.');

    if (a.endsWith('?')) {
      a = a.substring(0, a.length - 1);
    }

    if (isPrimitive(property) || isTypeAlias(property, typeAliases)) {
      code.line(`${property.name}: ${thisInput ? 'this.' : ''}input.${a},`);
    } else {
      code.openBlock(`${property.name}:`);
      createParameters(newPath, code, getShapeDeclaration(property.type!, parsed), parsed, typeAliases, thisInput);
      code.closeBlock();
    }
  }
}

function isPrimitive(prop: PropertyDeclaration): boolean {
  return ['boolean', 'number', 'string'].includes(prop.type!.toLowerCase());
}

function isTypeAlias(prop: PropertyDeclaration, typeAlias: TypeAliasDeclaration[]) {
  return typeAlias.map(t => t.name).includes(prop.type!);
}