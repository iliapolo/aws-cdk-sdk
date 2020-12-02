
import * as structs from './structs';
import { CodeMaker } from 'codemaker';

export interface ApiGeneratorProps {

  readonly service: string;

  readonly spec: structs.Spec;

  readonly name: string;

  readonly code: CodeMaker;
}

export class ApiGenerator {

  private readonly methods: structs.Method[] = [];
  private readonly properties: structs.Property[] = [];
  private readonly children: ApiGenerator[] = [];

  private readonly spec: structs.Spec;
  private readonly service: string;
  private readonly name: string;
  private readonly code: CodeMaker;

  constructor(props: ApiGeneratorProps) {
    this.spec = props.spec;
    this.name = props.name;
    this.service = props.service;
    this.code = props.code;
  }

  public addMethod(method: structs.Method) {
    this.methods.push(method);

    if (method.output) {
      this.addChildren(method.name, method.output, method.outputPath)
    }

  }

  public addProperty(property: structs.Property) {
    this.properties.push(property);
    this.addChildren(property.action, property.output, property.outputPath);
  }

  private addChildren(action: string, output: string, outputPath: string[]) {

    const shape = this.spec.shapes[output];

    if (!shape) {
      throw new Error(`Unable to locate shape ${output} while adding children to ${this.name}`);
    }
    const shapeApi = new ApiGenerator({
      code: this.code,
      name: `${this.name}_${output}`,
      service: this.service,
      spec: this.spec,
    });

    for (const member of Object.keys(shape.members ?? {})) {
      shapeApi.addProperty({
        name: member,
        output: shape.members[member].shape,
        outputPath: [...outputPath, member],
        action: action,
      })
    }

    this.children.push(shapeApi);
  }

  public async render() {

    const parts = this.name.split('_');
    if (this.isPrimitive(parts[parts.length - 1])) {
      return;
    }

    this.code.openBlock(`export class ${this.name} extends cdk.Construct`);

    this.code.openBlock(`constructor(scope: cdk.Construct, id: string, private readonly resources: string[])`);
    this.code.line('super(scope, id);')
    this.code.closeBlock();

    for (const method of this.methods) {
      this.code.openBlock(`public ${this.code.toCamelCase(method.name)}(${method.input ? `input: shapes.${this.code.toPascalCase(method.input)}` : ''}): ${method.output ? `${this.name}_${method.output}` : 'void'}`);
      if (method.output) {
        this.code.line(`return new ${this.name}_${method.output}(this, '${method.output}', this.resources);`)
      } else {
        this.renderAwsCustomResource(method.name, method.outputPath ?? [], method.output, method.input);
      }
      this.code.closeBlock();
    }

    for (const property of this.properties) {
      this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): ${this.isPrimitive(property.output) ?  this.getTsType(property.output) : `${this.name}_${property.output}`}`);

      if (this.isPrimitive(property.output)) {
        this.renderAwsCustomResource(property.action, property.outputPath, property.output);
      } else {
        this.code.line(`return new ${this.name}_${property.output}(this, '${property.output}', this.resources);`)
      }
      this.code.closeBlock();
    }

    this.code.closeBlock();

    for (const child of this.children) {
      child.render();
    }
  }

  private renderAwsCustomResource(action: string, outputPath: string[], output: string, input?: string) {

    const originalBlockFormatter = this.code.closeBlockFormatter;

    const outputPathString = outputPath.join('.');
    const physicalResourceId = [action, ...outputPath].join('.');

    this.code.openBlock('const props: cr.AwsCustomResourceProps =');
    this.code.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');
    this.code.openBlock('onUpdate:');
    this.code.line(`action: '${this.code.toCamelCase(action)}',`);
    this.code.line(`service: '${this.service}',`);
    this.code.line(`physicalResourceId: cr.PhysicalResourceId.of('${physicalResourceId}'),`);

    if (outputPath.length > 0) {
      this.code.line(`outputPath: '${outputPath.join('.')}',`);
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

    this.code.closeBlockFormatter = trallingCommaFormatter;

    if (input) {
      this.code.openBlock('parameters:');
      this.renderParameters(input, []);
      this.code.closeBlock();
    }
    this.code.closeBlock();

    this.code.closeBlockFormatter = semiColonFormatter;
    this.code.closeBlock();

    if (outputPath.length > 0) {
      this.code.line(`const resource = new cr.AwsCustomResource(this, '${action}.${outputPathString}', props);`);
      this.code.line(`return resource.getResponseField('${outputPathString}') as unknown as ${this.getTsType(output)};`);
    } else {
      this.code.line(`new cr.AwsCustomResource(this, '${action}', props);`);
    }

    this.code.closeBlockFormatter = originalBlockFormatter;

  }

  private renderParameters(input: string, inputPath: string[]) {

    const shape = this.spec.shapes[input];

    if (!shape) {
      throw new Error(`Unable to locate shape ${input} for parameters generation`);
    }

    for (const memberName of Object.keys(shape.members ?? {})) {

      const member = shape.members[memberName];

      const camelCasedMemberName = this.code.toCamelCase(memberName);
      const newInputPath = [...inputPath, camelCasedMemberName];
      const parameterPath = newInputPath.join('.');

      if (this.isPrimitive(member.shape)) {
        this.code.line(`${camelCasedMemberName}: input.${parameterPath},`);
      } else {
        this.code.openBlock(`${camelCasedMemberName}:`);
        this.renderParameters(member.shape, newInputPath);
        this.code.closeBlock();
      }
    }
  }

  private isPrimitive(shape: string): boolean {

    if (shape === this.service) {
      return false;
    }

    const s = this.spec.shapes[shape];

    if (!s) {
      throw new Error(`No shape ${shape}`);
    }

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
    ].includes(s.type);
  }

  private getTsType(sdkType: string): string {

    const s = this.spec.shapes[sdkType];

    if (!s) {
      throw new Error(`No sdk shape ${sdkType}`);
    }


    switch (s.type) {
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
        return `shapes.${this.code.toPascalCase(sdkType)}`;
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
