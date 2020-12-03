
import * as structs from './structs';
import { CodeMaker } from 'codemaker';
import * as crypto from 'crypto';

export interface ApiGeneratorProps {

  readonly service: string;

  readonly spec: structs.Spec;

  readonly name: string;

  readonly code: CodeMaker;
}

export interface ResponseGeneratorProps {

  readonly service: string;

  readonly spec: structs.Spec;

  readonly output: string;

  readonly input: string;

  readonly action: string;

  readonly name: string;

  readonly outputPath: string[];

  readonly code: CodeMaker;
}

export class ResponseGenerator {

  public readonly service: string;
  public readonly acceptsResources: boolean;
  public readonly acceptsInput: boolean;

  private readonly properties: structs.Property[] = [];
  private readonly spec: structs.Spec;
  private readonly name: string;
  private readonly input?: string;
  private readonly code: CodeMaker;
  private readonly action: string;
  private readonly outputPath: string[];

  constructor(props: ResponseGeneratorProps) {
    this.spec = props.spec;
    this.name = props.name;
    this.service = props.service;
    this.code = props.code;
    this.action = props.action;
    this.input = props.input;
    this.outputPath = props.outputPath;

    const shape = this.spec.shapes[props.output];

    if (!shape) {
      throw new Error(`Unable to locate shape ${props.output} while initializing response generator`);
    }

    for (const member of Object.keys(shape.members ?? {})) {
      this.properties.push({
        name: member,
        output: shape.members[member].shape,
        outputPath: [...this.outputPath, member],
        action: props.action,
      })
    }

    this.acceptsResources = this.properties.length > 0;
    this.acceptsInput = this.properties.length > 0 && this.input !== undefined;
  }

  public async renderNop() {
    return;
  }

  public async render() {

    const parts = this.code.toSnakeCase(this.name).split('_');
    if (this.isPrimitive(parts[parts.length - 1])) {
      return;
    }

    this.code.openBlock(`export class ${this.name} extends cdk.Construct`);

    const resourcesArg = this.acceptsResources ? ', private readonly resources: string[]': '';
    const inputArg = this.acceptsInput && !this.isEmptyShape(this.input) ? `, private readonly input: shapes.${this.code.toPascalCase(this.input)}`: '';

    this.code.openBlock(`constructor(scope: cdk.Construct, id: string${resourcesArg}${inputArg})`);
    this.code.line('super(scope, id);')
    this.code.closeBlock();

    const responseGenerators: ResponseGenerator[] = [];
    const responses = new Map<string, ResponseGenerator>();

    for (const property of this.properties) {
      const responseName = `${this.name}${property.output}`;
      this.code.openBlock(`public get ${this.code.toCamelCase(property.name)}(): ${this.isPrimitive(property.output) ?  this.getTsType(property.output) : responseName}`);

      const q = this.isPrimitive(property.output);
      if (this.isPrimitive(property.output)) {
        this.renderAwsCustomResource(property.action, property.outputPath, property.output, this.input);
      } else {
        let responseGenerator = responses.get(responseName);
        if (!responseGenerator) {
          responseGenerator = new ResponseGenerator({
            code: this.code,
            name: responseName,
            service: this.service,
            action: this.action,
            output: property.output,
            input: this.input,
            spec: this.spec,
            outputPath: [...property.outputPath, property.name],
          });
          responseGenerators.push(responseGenerator);
          responses.set(responseName, responseGenerator);
        }
        const resourcesIn = responseGenerator.acceptsResources ? ', this.resources' : '';
        const inputIn = responseGenerator.acceptsInput && !this.isEmptyShape(this.input) ? ', this.input' : '';
        this.code.line(`return new ${responseName}(this, '${property.output}'${resourcesIn}${inputIn});`);
      }
      this.code.closeBlock();
    }

    this.code.closeBlock();

    for (const responseGenerator of responseGenerators) {
      responseGenerator.render();
    }

  }

  private renderAwsCustomResource(action: string, outputPath: string[], output: string, input?: string) {

    const originalBlockFormatter = this.code.closeBlockFormatter;

    const outputPathString = outputPath.slice(2, outputPath.length).join('.');
    const physicalResourceId = [this.service, action, outputPathString].join('.');

    this.code.openBlock('const props: cr.AwsCustomResourceProps =');
    this.code.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');
    this.code.openBlock('onUpdate:');
    this.code.line(`action: '${this.code.toCamelCase(action)}',`);
    this.code.line(`service: '${this.service}',`);
    this.code.line(`physicalResourceId: cr.PhysicalResourceId.of('${physicalResourceId}'),`);

    if (outputPath.length > 0) {
      this.code.line(`outputPath: '${outputPathString}',`);
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
      const reqiured = shape.required?.includes(memberName);

      const camelCasedMemberName = this.code.toCamelCase(memberName);
      const newInputPath = [...inputPath, reqiured ? camelCasedMemberName : `${camelCasedMemberName}?`];
      let parameterPath = newInputPath.join('.');

      if (parameterPath.endsWith('?')) {
        parameterPath = parameterPath.substring(0, parameterPath.length - 1);
      }

      if (this.isPrimitive(member.shape)) {
        this.code.line(`${camelCasedMemberName}: this.input.${parameterPath},`);
      } else {
        this.code.openBlock(`${camelCasedMemberName}:`);
        this.renderParameters(member.shape, newInputPath);
        this.code.closeBlock();
      }
    }
  }

  public isEmptyShape(shapeName: string): boolean {

    const shape = this.spec.shapes[shapeName];

    return shape !== undefined && shape.members !== undefined && Object.keys(shape.members).length === 0;
  }

  private isPrimitive(shape: string): boolean {

    if (shape === this.service) {
      return false;
    }

    const s = this.spec.shapes[shape];

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
    ].includes(type);

    return result;
  }

  private getTsType(sdkType: string): string {

    const s = this.spec.shapes[sdkType];

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

export class ApiGenerator {

  public readonly service: string;

  private readonly methods: structs.Method[] = [];
  private readonly spec: structs.Spec;
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
  }

  public isEmptyShape(shapeName: string): boolean {

    const shape = this.spec.shapes[shapeName];

    return shape !== undefined && shape.members !== undefined && Object.keys(shape.members).length === 0;
  }

  public async render() {

    const parts = this.code.toSnakeCase(this.name).split('_');
    if (this.isPrimitive(parts[parts.length - 1])) {
      return;
    }

    this.code.openBlock(`export class ${this.name} extends cdk.Construct`);

    this.code.openBlock(`constructor(scope: cdk.Construct, id: string, private readonly resources: string[])`);
    this.code.line('super(scope, id);')
    this.code.closeBlock();

    const responseGenerators: ResponseGenerator[] = [];

    for (const method of this.methods) {
      const responseName = `${this.name}${method.output}`;

      let methodName = method.name;

      if (methodName.startsWith('Get')) {
        methodName = methodName.replace('Get', 'Fetch');
      }
      this.code.openBlock(`public ${this.code.toCamelCase(methodName)}(${method.input && !this.isEmptyShape(method.input) ? `input: shapes.${this.code.toPascalCase(method.input)}` : ''}): ${method.output && !this.isEmptyShape(method.output) ? responseName : 'void'}`);
      if (method.output && !this.isEmptyShape(method.output)) {
        const responseGenerator = new ResponseGenerator({
          code: this.code,
          name: responseName,
          service: this.service,
          action: method.name,
          output: method.output,
          spec: this.spec,
          input: method.input,
          outputPath: [method.output],
        });

        const resourcesIn = responseGenerator.acceptsResources ? ', this.resources' : '';
        const inputIn = responseGenerator.acceptsInput && !this.isEmptyShape(method.input) ? ', input' : '';

        this.code.line(`return new ${responseName}(this, '${method.output}'${resourcesIn}${inputIn});`)
        responseGenerators.push(responseGenerator);
      } else {
        this.renderAwsCustomResource(method.name, method.outputPath ?? [], method.output, method.input);
      }
      this.code.closeBlock();
    }

    this.code.closeBlock();

    for (const responseGenerator of responseGenerators) {
      responseGenerator.render();
    }
  }

  private renderAwsCustomResource(action: string, outputPath: string[], output: string, input?: string) {

    const originalBlockFormatter = this.code.closeBlockFormatter;

    const outputPathString = outputPath.slice(2, outputPath.length).join('.');
    const physicalResourceId = [this.service, action, outputPathString].join('.');

    this.code.openBlock('const props: cr.AwsCustomResourceProps =');
    this.code.line('policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),');
    this.code.openBlock('onUpdate:');
    this.code.line(`action: '${this.code.toCamelCase(action)}',`);
    this.code.line(`service: '${this.service}',`);
    this.code.line(`physicalResourceId: cr.PhysicalResourceId.of('${physicalResourceId}'),`);

    if (outputPath.length > 0) {
      this.code.line(`outputPath: '${outputPathString}',`);
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
      const reqiured = shape.required?.includes(memberName);

      const camelCasedMemberName = this.code.toCamelCase(memberName);
      const newInputPath = [...inputPath, reqiured ? camelCasedMemberName : `${camelCasedMemberName}?`];
      let parameterPath = newInputPath.join('.');

      if (parameterPath.endsWith('?')) {
        parameterPath = parameterPath.substring(0, parameterPath.length - 1);
      }

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

    const s = this.spec.shapes[sdkType];

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

function hash(s: string) {
  return crypto.createHash('md5').update(s).digest("hex");
}