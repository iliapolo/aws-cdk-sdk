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

export class ServiceGenerator {

  private serviceTypes?: File;
  private serviceSpec?: ServiceApiSpec;
  private serivceTypesRaw?: string;
  private shapes: InterfaceDeclaration[] = [];
  private responses: InterfaceDeclaration[] = [];
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

    this.module.openFile(`${this.serviceId.toLowerCase()}.ts`);

    for (const operationName of Object.keys(this.serviceSpec.operations)) {
      const operation = this.serviceSpec.operations[operationName];

      if (operation.input && operation.output) {
        this.inputsForOutputs[operation.output.shape] = operation.input.shape;
      }

      if (operation.output) {
        this.responses.push(getShapeDeclaration(operation.output.shape, this.serviceTypes!));
      }
    }

    for (const resource of this.serviceTypes!.resources) {
      for (const declaration of resource.declarations) {
        if (declaration instanceof InterfaceDeclaration && !this.responses.includes(declaration) && declaration.name !== 'ClientApiVersions') {
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

    const outputDir = path.join(`${__dirname}/services`);

    this.generateImports();
    this.generateShapes();
    this.generateResponses();
    this.generateApi();
    this.generateTypeAliases();

    this.module!.closeFile(`${this.serviceId!.toLowerCase()}.ts`);

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

      const argumentType = this.inputsForOutputs[output.name];

      this.module!.openBlock(`export class ${output.name}`);

      for (const property of output.properties) {

        if (!property.type) {
          throw new Error(`Unexpected propery ${output}.${property.name}: no return type`);
        }

        this.module!.line(`public get ${this.module!.toCamelCase(property.name)}(): ${property.type} {}`);
      }

      this.module!.openBlock(`constructor(scope: cdk.Construct${argumentType ? `, input: ${argumentType}`: ''})`);
      this.module!.closeBlock();
      this.module!.closeBlock();

    }

  }

  public generateImports() {
    this.module!.line("import * as cdk from '@aws-cdk/core';");
    this.module!.line("import * as cr from '@aws-cdk/custom-resources';");
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
        input = `input: ${operation.input.shape}`;
      }

      if (operation.output) {
        output = operation.output.shape;
      }

      this.module!.line('/**');
      this.module!.line(` * ${operation.documentation}`);
      this.module!.line(' */');
      this.module!.openBlock(`public ${this.module!.toCamelCase(operationName)}(${input ?? ''}): ${output ?? 'void'}`);

      if (output) {

        if (input) {
          this.module!.line(`return new ${output}(this, input);`);
        } else {
          this.module!.line(`return new ${output}(this);`);
        }
      } else {

        const originalBlockFormatter = this.module!.closeBlockFormatter;

        this.module!.openBlock('const props: cr.AwsCustomResourceProps =');
        this.module!.openBlock('onUpdate:');
        this.module!.line(`action: '${this.module!.toCamelCase(operationName)}',`);
        this.module!.line(`service: '${this.serviceId}',`);

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
          createParameters(this.module!, getShapeDeclaration(operation.input.shape, this.serviceTypes!), this.serviceTypes!, this.typeAliases);
          this.module!.closeBlock();
        }

        this.module!.closeBlock();

        this.module!.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');

        this.module!.closeBlockFormatter = semiColonFormatter;
        this.module!.closeBlock();
        this.module!.line(`new cr.AwsCustomResource(this, '${operationName}', props);`);

        this.module!.closeBlockFormatter = originalBlockFormatter;

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

function createParameters(code: CodeMaker, shape: InterfaceDeclaration, parsed: File, typeAliases: TypeAliasDeclaration[]) {

  for (const property of shape.properties) {

    if (isPrimitive(property) || isTypeAlias(property, typeAliases)) {
      code.line(`${property.name}: input.${code.toCamelCase(property.name)},`);
    } else {
      code.openBlock(`${property.name}:`);
      createParameters(code, getShapeDeclaration(property.type!, parsed), parsed, typeAliases);
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