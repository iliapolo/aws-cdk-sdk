import { CodeMaker } from 'codemaker';
import * as structs from './structs';
import * as sdk from './sdk-repository';

export interface AwsCustomResourceGeneratorProps {

  readonly action: string;

  readonly outputPath: string[];

  readonly output: string;

  readonly input: string;

  readonly code: CodeMaker;

  readonly client: sdk.Client;

  readonly useThisInput: boolean;

}

export class AwsCustomResourceGenerator {

  private readonly props: AwsCustomResourceGeneratorProps;

  constructor(props: AwsCustomResourceGeneratorProps) {
    this.props = props;
  }

  public render() {

    const originalBlockFormatter = this.props.code.closeBlockFormatter;

    const outputPath = this.props.outputPath.join('.');
    const physicalResourceId = [this.props.client.className, this.props.action, ...this.props.outputPath].join('.');

    this.props.code.openBlock('const props: cr.AwsCustomResourceProps =');
    this.props.code.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),');
    this.props.code.openBlock('onUpdate:');
    this.props.code.line(`action: '${this.props.code.toCamelCase(this.props.action)}',`);
    this.props.code.line(`service: '${this.props.client.className}',`);
    this.props.code.line(`physicalResourceId: cr.PhysicalResourceId.of('${physicalResourceId}'),`);

    if (this.props.outputPath.length > 0) {
      this.props.code.line(`outputPath: '${outputPath}',`);
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

    this.props.code.closeBlockFormatter = trallingCommaFormatter;

    if (this.props.input) {
      this.props.code.openBlock('parameters:');
      this.renderParameters(this.props.input, []);
      this.props.code.closeBlock();
    }
    this.props.code.closeBlock();

    this.props.code.closeBlockFormatter = semiColonFormatter;
    this.props.code.closeBlock();

    if (this.props.outputPath.length > 0) {
      this.props.code.line(`const resource = new cr.AwsCustomResource(this, '${this.props.action}.${outputPath}', props);`);
      this.props.code.line(`return resource.getResponseField('${outputPath}') as unknown as ${this.getTsType(this.props.output)};`);
    } else {
      this.props.code.line(`new cr.AwsCustomResource(this, '${this.props.action}', props);`);
    }

    this.props.code.closeBlockFormatter = originalBlockFormatter;

  }

  private renderParameters(input: string, inputPath: string[]) {

    const shape = this.props.client.spec.shapes[input];

    if (!shape) {
      throw new Error(`Unable to locate shape ${input} for parameters generation`);
    }

    for (const memberName of Object.keys(shape.members ?? {})) {

      const member = shape.members[memberName];
      const reqiured = shape.required?.includes(memberName);

      const camelCasedMemberName = this.props.code.toCamelCase(memberName);
      const firstChar = `${memberName.charAt(0)}`;

      const memberNameForInput = firstChar.toUpperCase() === firstChar ? camelCasedMemberName : memberName;
      const newInputPath = [...inputPath, reqiured ? memberNameForInput : `${memberNameForInput}?`];
      let parameterPath = newInputPath.join('.');

      if (parameterPath.endsWith('?')) {
        parameterPath = parameterPath.substring(0, parameterPath.length - 1);
      }

      if (this.isPrimitive(member.shape)) {
        this.props.code.line(`${memberName}: ${this.props.useThisInput ? 'this.' : ''}input.${parameterPath},`);
      } else {
        this.props.code.openBlock(`${memberName}:`);
        this.renderParameters(member.shape, newInputPath);
        this.props.code.closeBlock();
      }
    }
  }

  private isPrimitive(shape: string): boolean {

    if (shape === this.props.client.className) {
      return false;
    }

    const s = this.props.client.spec.shapes[shape];

    const type = s ? s.type : shape;

    return [
      structs.ShapeType.BOOLEAN.toString(),
      structs.ShapeType.DOUBLE.toString(),
      structs.ShapeType.FLOAT.toString(),
      structs.ShapeType.INTEGER.toString(),
      structs.ShapeType.LONG.toString(),
      structs.ShapeType.TIMESTAMP.toString(),
      structs.ShapeType.STRING.toString(),
      structs.ShapeType.LIST.toString(),
      structs.ShapeType.MAP.toString(),
    ].includes(type);
  }

  private getTsType(sdkType: string): string {

    const s = this.props.client.spec.shapes[sdkType];

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
        return `Record<string, ${this.getTsType(s.value.shape)}>`
      default:
        throw new Error(`Unexpected sdk type ${s.type}`);
    }
  }


}