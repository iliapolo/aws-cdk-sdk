import * as fs from 'fs';
import * as path from 'path';
import * as j2j from 'json2jsii';
import * as structs from './structs';
import { JSONSchema4 } from 'json-schema';
import * as sdk from './sdk-repository';
import { CodeMaker } from 'codemaker';

/**
 * Properties for `ShapesGenerator`.
 */
export interface ShapesGeneratorProps {

  /**
   * The client to generate the API for.
   */
   readonly client: sdk.Client;

   /**
    * The directory to generate the api to.
    */
   readonly outDir: string;

  /**
   * The filename of the generated file.
   */
   readonly fileName: string;

}

/**
 * Generate the shapes for a specific client.
 */
export class ShapesGenerator {

  private readonly shapes: j2j.TypeGenerator;
  private readonly registered = new Set<string>();

  private readonly _props: ShapesGeneratorProps;

  constructor(props: ShapesGeneratorProps) {
    this._props = props;

    this.shapes = new j2j.TypeGenerator();

    for (const operationName of Object.keys(this._props.client.spec.operations)) {
      const operation = this._props.client.spec.operations[operationName];
      if (operation.input) {
        this.registerShape(operation.input.shape);
        this.shapes.emitType(j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${operation.input.shape}`));
      }
      if (operation.output) {
        this.registerShape(operation.output.shape);
        this.shapes.emitType(j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${operation.output.shape}`));
      }
    }
  }

  /**
   * Generate the shapes file.
   */
  public async gen() {
    return Promise.resolve(fs.writeFileSync(path.join(this._props.outDir, this._props.fileName), this.shapes.render()));
  }

  private registerShape(name: string) {
    if (this.registered.has(name)) {
      return;
    }
    this.registered.add(name);

    const shape = this._props.client.spec.shapes[name];
    const normalized = j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${name}`);

    switch (shape.type) {
      case structs.ShapeType.LIST:
        this.registerList(name, shape, normalized);
        break;
      case structs.ShapeType.STRUCTURE:
        this.registerStructure(name, shape, normalized);
        break;
      case structs.ShapeType.MAP:
        this.registerMap(name, shape, normalized);
        break;
      case structs.ShapeType.BLOB:
        this.registerBlob(normalized);
        break;
      case structs.ShapeType.BOOLEAN:
        this.registerBoolean(normalized);
        break;
      case structs.ShapeType.STRING:
        this.registerString(normalized);
        break;
      case structs.ShapeType.INTEGER:
      case structs.ShapeType.DOUBLE:
      case structs.ShapeType.FLOAT:
      case structs.ShapeType.LONG:
        this.registerNumber(normalized);
        break;
      case structs.ShapeType.TIMESTAMP:
        this.registerTimestamp(normalized);
        break;
      default:
        throw new Error(`Unexpected shape type '${shape.type}' for shape ${name}`);
    }

  }

  private registerList(name: string, shape: structs.Shape, normalized: string) {
    if (!shape.member) {
      throw new Error(`Shape ${name} should have .member since its type is a ${structs.ShapeType.LIST}`);
    }
    this.registerShape(shape.member.shape);
    this.shapes.addDefinition(normalized, {
      type: 'array',
      items: {
        $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${shape.member.shape}`)}`,
      }
    })
  }

  private registerStructure(name: string, shape: structs.Shape, normalized: string) {
    if (!shape.members) {
      throw new Error(`Shape ${name} should have .members since its type is a ${structs.ShapeType.STRUCTURE}`);
    }
    const properties: Record<string, JSONSchema4> = {};
    for (const entry of Object.entries(shape.members ?? {})) {
      properties[entry[0]] = {
        $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${entry[1].shape}`)}`,
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
  }

  private registerBlob(normalized: string) {
    this.shapes.addDefinition(normalized, {
      type: 'object',
    })
  }

  private registerMap(name: string, shape: structs.Shape, normalized: string) {
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
        $ref: `#/definitions/${j2j.TypeGenerator.normalizeTypeName(`${this._props.client.className}${shape.value.shape}`)}`,
      }
    })
  }

  private registerTimestamp(normalized: string) {
    this.shapes.addDefinition(normalized, { type: 'string' });
  }

  private registerNumber(normalized: string) {
    this.shapes.addDefinition(normalized, { type: 'number' });
  }

  private registerBoolean(normalized: string) {
    this.shapes.addDefinition(normalized, { type: 'boolean' });
  }

  private registerString(normalized: string) {
    this.shapes.addDefinition(normalized, { type: 'string' });
  }

}