import * as fs from 'fs';
import * as path from 'path';
import { CodeMaker } from 'codemaker';
import { JSONSchema4 } from 'json-schema';
import { TypeGenerator } from 'json2jsii';
import { SyncRequestClient } from 'ts-sync-request/dist';
import { TypescriptParser, InterfaceDeclaration, TypeAliasDeclaration, PropertyDeclaration, ClassDeclaration } from 'typescript-parser';

export interface ServiceApiSpec {

  readonly metadata: any;

  readonly operations: any;

  readonly shapes: any;

  readonly documentation: string;
}

export class ServiceGenerator {

  constructor() {}

  public async generate() {

    const outputDir = path.join(`${__dirname}/out`);

    const client = new SyncRequestClient();
    const parser = new TypescriptParser();

    const res = client.get<ServiceApiSpec>('https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/es-2015-01-01.normal.json');
    const serviceTypes = await parser.parseFile('es.d.ts', '/Users/epolon/dev/src/github.com/iliapolo/aws-cdk-sdk');

    const code = new CodeMaker();
    code.indentation = 2;

    const serviceId = serviceTypes.declarations.filter(d => d instanceof ClassDeclaration)[0].name;

    code.openFile('api.ts');
    code.line("import * as cdk from '@aws-cdk/core';");
    code.line("import * as cr from '@aws-cdk/custom-resources';");
    code.line("import * as outputs from './outputs';");
    code.line("import * as shapes from './shapes';");
    code.openBlock(`export class ${serviceId} extends cdk.Construct`);
    code.openBlock('constructor(scope: cdk.Construct, private readonly resources: string[])');
    code.line(`super(scope, '${serviceId}');`);
    code.closeBlock();

    for (const operationName of Object.keys(res.operations)) {

      const operation = res.operations[operationName];

      let input = undefined;
      let output = undefined;

      if (operation.input) {
        input = `input: shapes.${operation.input.shape}`;
      }

      if (operation.output) {
        output = `outputs.${operation.output.shape}`;
      }

      code.line('/**');
      code.line(` * ${operation.documentation}`);
      code.line(' */');
      code.openBlock(`public ${code.toCamelCase(operationName)}(${input ?? ''}): ${output ?? 'void'}`);

      if (output) {
        code.line(`return new ${output}();`);
      } else {

        const originalBlockFormatter = code.closeBlockFormatter;

        // new cr.AwsCustomResource(this.scope, 'ES.addTags', {
        //   onUpdate: {
        //     action: 'addTags',
        //     service: 'ES',
        //     physicalResourceId: cr.PhysicalResourceId.of('needed'),
        //     parameters: input,
        //   },
        //   policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: ['*'] }),
        // });


        code.openBlock('const props: cr.AwsCustomResourceProps =');
        code.openBlock('onUpdate:');
        code.line(`action: '${code.toCamelCase(operationName)}',`);
        code.line(`service: '${serviceId}',`);

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

        code.closeBlockFormatter = trallingCommaFormatter;
        code.closeBlock();

        code.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');

        code.closeBlockFormatter = semiColonFormatter;
        code.closeBlock();
        code.line(`new cr.AwsCustomResource(this, '${operationName}', props);`);

        code.closeBlockFormatter = originalBlockFormatter;

      }

      code.closeBlock();
    }

    code.closeBlock();
    code.closeFile('api.ts');


    await code.save(outputDir);

  }

  public async generateShapes() {

    const outputDir = path.join(`${__dirname}/out`);
    const client = new SyncRequestClient();
    const spec = client.get<ServiceApiSpec>('https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/cloudfront-2018-06-18.normal.json');

    const shapeTypes = new TypeGenerator();

    function handlePrimitive(name: string, shape: any) {
      const normalizedName = TypeGenerator.normalizeTypeName(name);
      shapeTypes.addDefinition(normalizedName, {
        description: shape.documentation,
        type: shape.type,
      });
    }

    function handleTimestamp(name: string, shape: any) {
      const normalizedName = TypeGenerator.normalizeTypeName(name);
      shapeTypes.addDefinition(normalizedName, {
        description: shape.documentation,
        type: 'string',
        format: 'date-time',
      });
    }

    function handleList(name: string, shape: any) {
      const normalizedName = TypeGenerator.normalizeTypeName(name);

      const memberShape = shape.member.shape;

      switch (memberShape) {
        case 'timestamp':
          shapeTypes.addDefinition(normalizedName, {
            description: shape.documentation,
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          });
          break;
        case 'string':
        case 'boolean':
        case 'integer':
        case 'long':
          shapeTypes.addDefinition(normalizedName, {
            description: shape.documentation,
            type: 'array',
            items: {
              type: memberShape,
            },
          });
          break;
        default:
          shapeTypes.addDefinition(normalizedName, {
            description: shape.documentation,
            type: 'array',
            items: {
              $ref: `#/definitions/${TypeGenerator.normalizeTypeName(memberShape)}`,
            },
          });

      }
    }

    function handleStructure(name: string, shape: any) {

      const properties: Record<string, JSONSchema4> = {};

      for (const memberName in shape.members) {
        const member = shape.members[memberName];

        const memberShape = member.shape;

        switch (memberShape) {
          case 'timestamp':
            properties[memberName] = {
              type: 'string',
              format: 'date-time',
              description: member.documentation,
            };
            break;
          case 'string':
          case 'boolean':
          case 'integer':
          case 'long':
            properties[memberName] = {
              type: memberShape,
              description: member.documentation,
            };
            break;
          default:
            properties[memberName] = {
              $ref: `#/definitions/${TypeGenerator.normalizeTypeName(memberShape)}`,
              description: member.documentation,
            };
        }

      }

      const normalizedName = TypeGenerator.normalizeTypeName(name);
      shapeTypes.addDefinition(normalizedName, {
        description: shape.documentation,
        type: 'object',
        properties,
        required: shape.required,
      });
    }

    for (const name in spec.shapes) {

      if (['boolean', 'integer', 'long', 'string', 'timestamp'].includes(name)) {
        continue;
      }

      const shape = spec.shapes[name];
      const type = shape.type;

      switch (type) {
        case 'structure':
          handleStructure(name, shape);
          break;
        case 'list':
          handleList(name, shape);
          break;
        case 'timestamp':
          handleTimestamp(name, shape);
          break;
        case 'string':
        case 'boolean':
        case 'integer':
        case 'long':
          handlePrimitive(name, shape);
          break;
        default:
          throw new Error(`Unsupported shape type: ${type} (${name})`);
      }
    }

    for (const name in spec.shapes) {

      if (['boolean', 'integer', 'long', 'string', 'timestamp'].includes(name)) {
        continue;
      }

      const normalizedName = TypeGenerator.normalizeTypeName(name);

      const shape = spec.shapes[name];
      const type = shape.type;

      switch (type) {
        case 'structure':
          shapeTypes.emitType(normalizedName);
          break;
        case 'list':
          shapeTypes.emitType(normalizedName);
          break;
        default:
          break;
      }

    }

    fs.mkdirSync(outputDir);
    fs.writeFileSync(path.join(outputDir, 'shapes.ts'), shapeTypes.render());
  }

  public async tscExperiment() {

    const outputDir = path.join(`${__dirname}/out`);

    const client = new SyncRequestClient();
    const outputsCode = new CodeMaker();
    const parser = new TypescriptParser();
    const shapes = new CodeMaker();
    const serviceApi = client.get<ServiceApiSpec>('https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/es-2015-01-01.normal.json');
    const serviceTypes = await parser.parseFile('es.d.ts', '/Users/epolon/dev/src/github.com/iliapolo/aws-cdk-sdk');
    const serivceTypesRaw = fs.readFileSync('/Users/epolon/dev/src/github.com/iliapolo/aws-cdk-sdk/es.d.ts').toString();

    const inputs: string[] = [];
    const outputs: string[] = [];
    const typeAliases: string[] = [];

    for (const operationName of Object.keys(serviceApi.operations)) {
      const operation = serviceApi.operations[operationName];
      if (operation.input) {
        inputs.push(operation.input.shape);
      }
      if (operation.output) {
        outputs.push(operation.output.shape);
      }
    }

    shapes.indentation = 2;
    shapes.openFile('shapes.ts');
    outputsCode.openFile('outputs.ts');

    for (const resource of serviceTypes.resources) {

      for (const declaration of resource.declarations) {

        if (outputs.includes(declaration.name)) {

          outputsCode.openBlock(`export class ${declaration.name}`);
          outputsCode.closeBlock();
          continue;
        }

        if (declaration.name === 'ClientConfiguration') {
          // skip because it depends on a type from the core module.
          // maybe later.
          continue;
        }

        if (declaration.name === 'ClientApiVersions') {
          // skip because it depends on a type from the core module.
          // maybe later.
          continue;
        }

        if (declaration instanceof TypeAliasDeclaration) {
          typeAliases.push(serivceTypesRaw.substring(declaration.start!, declaration.end));
        }

        if (declaration instanceof InterfaceDeclaration) {
          const properties = declaration.properties;
          if (!properties) {
            throw new Error(`Unexpected declaration: ${declaration.name} should have properties`);
          }
          shapes.line('/**');
          shapes.line(` * ${serviceApi.shapes[declaration.name].documentation}`);
          shapes.line(' */');
          shapes.openBlock(`export interface ${declaration.name}`);
          for (const property of properties) {
            const jsiiCompatible = shapes.toCamelCase(property.name);
            shapes.line('/**');
            shapes.line(` * ${docsForProperty(serivceTypesRaw, property)}`);
            shapes.line(' */');
            shapes.line(`readonly ${jsiiCompatible}${property.isOptional ? '?' : ''}: ${property.type};`);
          }
          shapes.closeBlock();
        }
      }
    }

    for (const typeAlias of typeAliases) {
      shapes.line(typeAlias.replace(/"/g, "'"));
    }

    shapes.closeFile('shapes.ts');
    outputsCode.closeFile('outputs.ts');

    await shapes.save(outputDir);
    await outputsCode.save(outputDir);

    await this.generate();
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