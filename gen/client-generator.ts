import * as fs from 'fs';
import * as path from 'path';
import * as sdk from './sdk-repository';
import * as j2j from 'json2jsii';
import * as structs from './structs';
import { ApiGenerator } from './api-generator';
import { JSONSchema4 } from 'json-schema';
import { CodeMaker } from 'codemaker';

const FILENAME = 'index.ts';

/**
 * Properties for `ClientGenerator`.
 */
export interface ClientGeneratorProps {

  /**
   * The client to generate.
   */
  readonly client: sdk.Client;

  /**
   * The directory to generate the code to.
   */
  readonly outDir: string;

}

/**
 * Generator for a specific client.
 */
export class ClientGenerator {

  private readonly shapes: j2j.TypeGenerator;
  private readonly api: ApiGenerator;
  private readonly props: ClientGeneratorProps;
  private readonly registeredShapes = new Set<string>();

  constructor(props: ClientGeneratorProps) {
    this.props = props;
    this.shapes = new j2j.TypeGenerator();

    this.api = new ApiGenerator({ client: this.props.client, outDir: this.props.outDir });

    for (const operationName of Object.keys(this.props.client.spec.operations)) {

      const operation = this.props.client.spec.operations[operationName];

      if (operation.input) {
        this.registerShape(operation.input.shape);
        this.shapes.emitType(j2j.TypeGenerator.normalizeTypeName(operation.input.shape));
      }

      if (operation.output) {
        this.registerShape(operation.output.shape);
        this.shapes.emitType(j2j.TypeGenerator.normalizeTypeName(operation.output.shape));
      }

      this.api.addMethod({
        name: operationName,
        inputShape: operation.input?.shape,
        outputShape: operation.output?.shape,
        outputPath: [],
      })

    }

  }

  private registerShape(name: string) {

    if (this.registeredShapes.has(name)) {
      return;
    }

    const shape = this.props.client.spec.shapes[name];
    const normalized = j2j.TypeGenerator.normalizeTypeName(name);

    switch (shape.type) {
      case structs.ShapeType.LIST:

        if (!shape.member) {
          throw new Error(`Shape ${name} should have .member since its type is a ${structs.ShapeType.LIST}`);
        }

        this.registerShape(shape.member.shape);

        this.shapes.addDefinition(normalized, {
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

        this.shapes.addDefinition(normalized, {
          type: 'object',
          // description: shape.documentation,
          properties,
          required: shape.required?.map(r => new CodeMaker().toCamelCase(r)),
        });

        break;
      case structs.ShapeType.BLOB:
        this.shapes.addDefinition(normalized, {
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

        this.shapes.addDefinition(normalized, {
          type: 'object',
          additionalProperties: {
            $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(shape.value.shape)}`,
          }
        })
        break;
      case structs.ShapeType.BOOLEAN:
      case structs.ShapeType.STRING:
        this.shapes.addDefinition(normalized, { type: shape.type });
        break;
      case structs.ShapeType.INTEGER:
      case structs.ShapeType.DOUBLE:
      case structs.ShapeType.FLOAT:
      case structs.ShapeType.LONG:
        this.shapes.addDefinition(normalized, { type: 'number' });
        break;
      case structs.ShapeType.TIMESTAMP:
        this.shapes.addDefinition(normalized, {
          type: 'string',
        })
        break;
      default:
        throw new Error(`Unexpected shape type '${shape.type}' for shape ${name}`);
    }

    this.registeredShapes.add(name);

  }

  public async gen() {

    // generate shapes
    fs.mkdirSync(this.props.outDir, { recursive: true });
    fs.writeFileSync(path.join(this.props.outDir, 'shapes.ts'), this.shapes.render());

    // generate api
    await this.api.render();

    // generate index
    const index = new CodeMaker({ indentationLevel: 2 });
    index.openFile(FILENAME);
    index.line("export * from './api';")
    index.line("export * from './shapes';")
    index.closeFile(FILENAME);
    await index.save(this.props.outDir);

  }

}

