import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript-parser';
import * as sdk from './sdk-repository';
import * as j2j from 'json2jsii';
import * as structs from './structs';
import { ApiGenerator } from './api-generator';
import { JSONSchema4 } from 'json-schema';
import logger = require('node-color-log')
import { CodeMaker } from 'codemaker';

export class ClientGenerator {

  private readonly spec: structs.Spec;
  private readonly types: j2j.TypeGenerator;
  private readonly api: ApiGenerator;
  private readonly code: CodeMaker;
  public readonly service: string;
  private readonly memo = new Set<string>();

  constructor(client: sdk.Client) {
    this.types = new j2j.TypeGenerator();
    this.spec = JSON.parse(fs.readFileSync(client.apiPath).toString());
    this.code = new CodeMaker({ indentationLevel: 2 });
    logger.setLevel('info');
    this.service = this.code.toPascalCase(this.spec.metadata.serviceId);

    this.api = new ApiGenerator({
      code: this.code,
      name: this.service,
      service: this.service,
      spec: this.spec,
    });

    for (const operationName of Object.keys(this.spec.operations)) {

      // logger.debug(`Inspecting operation ${operationName}`);

      const operation = this.spec.operations[operationName];

      // logger.debug(`Registering operation ${operationName}`);

      if (operation.input) {
        // logger.info(`Registering input shapes for ${operationName}`);
        this.registerShape(operation.input.shape);
        this.types.emitType(j2j.TypeGenerator.normalizeTypeName(operation.input.shape));
      }

      if (operation.output) {
        // logger.info(`Registering output shapes for ${operationName}`);
        this.registerShape(operation.output.shape);
        this.types.emitType(j2j.TypeGenerator.normalizeTypeName(operation.output.shape));
      }

      this.api.addMethod({
        name: operationName,
        input: operation.input?.shape,
        output: operation.output?.shape,
        outputPath: [],
      })

    }

  }

  private registerShape(name: string) {

    if (this.memo.has(name)) {
      return;
    }

    this.memo.add(name);

    logger.debug(`Registering shape ${name}`);

    const shape = this.spec.shapes[name];
    const normalized = j2j.TypeGenerator.normalizeTypeName(name);

    switch (shape.type) {
      case structs.ShapeType.LIST:

        if (!shape.member) {
          throw new Error(`Shape ${name} should have .member since its type is a ${structs.ShapeType.LIST}`);
        }

        this.registerShape(shape.member.shape);

        this.types.addDefinition(normalized, {
          type: 'array',
          items: {
            $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(shape.member.shape)}`,
          }
        })

        break;
      case structs.ShapeType.STRUCTURE:

        if (!shape.members) {
          throw new Error(`Shape ${name} should have .members since its type is a ${structs.ShapeType.STRUCTURE}`);
        }

        const properties: Record<string, JSONSchema4> = {};
        for (const entry of Object.entries(shape.members ?? {})) {


          properties[entry[0]] = {
            $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(entry[1].shape)}`,
            // description: entry[1].documentation,
          };
          this.registerShape(entry[1].shape);
        }

        this.types.addDefinition(normalized, {
          type: 'object',
          // description: shape.documentation,
          properties,
          required: shape.required?.map(r => this.code.toCamelCase(r)),
        });

        break;
      case structs.ShapeType.BLOB:
        this.types.addDefinition(normalized, {
          type: 'object',
        })
        break;
      case structs.ShapeType.MAP:

        if (!shape.key) {
          throw new Error(`Shape ${name} must have .key since its type is a ${structs.ShapeType.MAP}`);
        }

        if (!shape.value) {
          throw new Error(`Shape ${name} must have .value since its type is a ${structs.ShapeType.MAP}`);
        }

        this.registerShape(shape.key.shape);
        this.registerShape(shape.value.shape);

        this.types.addDefinition(normalized, {
          type: 'object',
          additionalProperties: {
            $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(shape.value.shape)}`,
          }
        })
        break;
      case structs.ShapeType.BOOLEAN:
      case structs.ShapeType.STRING:
        this.types.addDefinition(normalized, { type: shape.type });
        break;
      case structs.ShapeType.INTEGER:
      case structs.ShapeType.DOUBLE:
      case structs.ShapeType.FLOAT:
      case structs.ShapeType.LONG:
        this.types.addDefinition(normalized, { type: 'number' });
        break;
      case structs.ShapeType.TIMESTAMP:
        this.types.addDefinition(normalized, {
          type: 'string',
        })
        break;
      default:
        throw new Error(`Unexpected shape type '${shape.type}' for shape ${name}`);
    }

  }

  public async gen(root: string) {

    fs.mkdirSync(path.join(root, this.api.service), { recursive: true });
    fs.writeFileSync(path.join(root, this.api.service, 'shapes.ts'), this.types.render());

    this.code.openFile(path.join(this.api.service, 'api.ts'));
    this.code.line("import * as cdk from '@aws-cdk/core';");
    this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    this.code.line("import * as shapes from './shapes';");
    this.code.line();
    this.api.render();
    this.code.closeFile(path.join(this.api.service, 'api.ts'));

    this.code.openFile(path.join(this.api.service, 'index.ts'));
    this.code.line("export * from './api';")
    this.code.closeFile(path.join(this.api.service, 'index.ts'));
    await this.code.save(root);
  }

}

