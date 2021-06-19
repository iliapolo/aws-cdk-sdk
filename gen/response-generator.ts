import { CodeMaker } from 'codemaker';
import { responses } from './api-generator';
import { AwsCustomResourceGenerator } from './custom-resource-generator';
import * as sdk from './sdk-repository';
import * as structs from './structs';

export interface ResponseGeneratorProps {

  readonly client: sdk.Client;

  readonly outputShape: string;

  readonly inputShape: string;

  readonly className: string;

  readonly action: string;

  readonly outputPath: string[];

  readonly code: CodeMaker;
}

export class ResponseGenerator {

  public readonly acceptsResources: boolean;
  public readonly acceptsInput: boolean;

  private readonly properties: structs.Property[] = [];
  private readonly props: ResponseGeneratorProps;

  constructor(props: ResponseGeneratorProps) {
    this.props = props;

    const shape = this.props.client.spec.shapes[props.outputShape];

    if (!shape) {
      throw new Error(`Unable to locate shape ${props.outputShape} while initializing response generator`);
    }

    for (const member of Object.keys(shape.members ?? {})) {
      let name = member;
      if (['Build', 'build'].includes(name)) {
        name = 'Build2'
      }
      if (['Equals', 'equals'].includes(name)) {
        name = 'Equals2'
      }
      this.properties.push({
        name: name,
        output: shape.members[member].shape,
        outputPath: [...this.props.outputPath, member],
        action: props.action,
      });
    }

    this.acceptsResources = this.properties.length > 0;
    this.acceptsInput = this.properties.length > 0 && this.props.inputShape !== undefined;
  }

  public async render() {

    this.props.code.openBlock(`export class ${this.props.className}`);

    const resourcesArg = this.acceptsResources ? ', private readonly __resources: string[]': '';
    const inputArg = this.acceptsInput && !this.isEmptyShape(this.props.inputShape) ? `, private readonly __input: shapes.${this.props.code.toPascalCase(`${this.props.client.className}${this.props.inputShape}`)}`: '';

    this.props.code.line();
    this.props.code.openBlock(`constructor(private readonly __scope: cdk.Construct${resourcesArg}${inputArg})`);
    this.props.code.closeBlock();
    this.props.code.line();

    const responseGenerators: ResponseGenerator[] = [];

    for (const property of this.properties) {
      const responseName = `${this.props.className}${this.props.code.toPascalCase(property.name)}`;
      this.props.code.openBlock(`public get ${this.props.code.toCamelCase(property.name)}(): ${this.isPrimitive(property.output) ? this.getTsType(property.output) : responseName}`);

      if (this.isPrimitive(property.output)) {

        const awsCustomResourceGenerator = new AwsCustomResourceGenerator({
          action: property.action,
          client: this.props.client,
          code: this.props.code,
          input: this.props.inputShape,
          output: property.output,
          outputPath: property.outputPath,
          useThisInput: true,
        });

        awsCustomResourceGenerator.render();

      } else {
        let responseGenerator = responses.get(responseName);
        if (!responseGenerator) {
          responseGenerator = new ResponseGenerator({
            code: this.props.code,
            client: this.props.client,
            className: responseName,
            action: this.props.action,
            outputShape: property.output,
            inputShape: this.props.inputShape,
            outputPath: property.outputPath,
          });
          responseGenerators.push(responseGenerator);
          responses.set(responseName, responseGenerator);
        }
        const resourcesIn = responseGenerator.acceptsResources ? ', this.__resources' : '';
        const inputIn = responseGenerator.acceptsInput && !this.isEmptyShape(this.props.inputShape) ? ', this.__input' : '';
        this.props.code.line(`return new ${responseName}(this.__scope${resourcesIn}${inputIn});`);
      }
      this.props.code.closeBlock();
      this.props.code.line();
    }

    this.props.code.closeBlock();
    this.props.code.line();

    for (const responseGenerator of responseGenerators) {
      responseGenerator.render();
    }

  }

  private isEmptyShape(shapeName: string): boolean {

    const shape = this.props.client.spec.shapes[shapeName];

    return shape !== undefined && shape.members !== undefined && Object.keys(shape.members).length === 0;
  }

  private isPrimitive(shape: string): boolean {

    if (shape === this.props.client.className) {
      return false;
    }

    const s = this.props.client.spec.shapes[shape];

    if (s && s.type === structs.ShapeType.STRUCTURE.toString() && Object.keys(s.members).length === 0) {
      return true;
    }

    const type = s ? s.type : shape;

    const result = [
      structs.ShapeType.BOOLEAN.toString(),
      structs.ShapeType.DOUBLE.toString(),
      structs.ShapeType.FLOAT.toString(),
      structs.ShapeType.INTEGER.toString(),
      structs.ShapeType.LONG.toString(),
      structs.ShapeType.TIMESTAMP.toString(),
      structs.ShapeType.STRING.toString(),
      structs.ShapeType.LIST.toString(),
      structs.ShapeType.MAP.toString(),
      structs.ShapeType.BLOB.toString(),
    ].includes(type);

    return result;
  }

  private getTsType(sdkType: string): string {

    const s = this.props.client.spec.shapes[sdkType];

    if (s && s.type === structs.ShapeType.STRUCTURE.toString() && Object.keys(s.members).length === 0) {
      return 'any';
    }

    const type = s ? s.type : sdkType;

    switch (type) {
      case structs.ShapeType.BOOLEAN:
        return 'boolean';
      case structs.ShapeType.BLOB:
        return 'any';
      case structs.ShapeType.DOUBLE:
      case structs.ShapeType.FLOAT:
      case structs.ShapeType.INTEGER:
      case structs.ShapeType.LONG:
        return 'number';
      case structs.ShapeType.STRING:
        return 'string';
      case structs.ShapeType.STRUCTURE:
        return `shapes.${this.props.code.toPascalCase(`${this.props.client.className}${sdkType}`)}`;
      case structs.ShapeType.TIMESTAMP:
        return 'string';
      case structs.ShapeType.LIST:
        return `${this.getTsType(s.member.shape)}[]`;
      case structs.ShapeType.MAP:
        return `Record<string, ${this.getTsType(s.value.shape)}>`;
      default:
        throw new Error(`Unexpected sdk type ${s.type}`);
    }
  }

}
