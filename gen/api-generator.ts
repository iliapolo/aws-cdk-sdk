
import * as structs from './structs';
import * as sdk from './sdk-repository';
import { ResponseGenerator } from './response-generator';
import { AwsCustomResourceGenerator } from './aws-custom-resource-generator';
import { CodeMaker } from 'codemaker';

const FILENAME = 'api.ts';

/**
 * Properties for `ApiGenerator`.
 */
export interface ApiGeneratorProps {

  /**
   * The client to generate the API for.
   */
  readonly client: sdk.Client;

  /**
   * The directory to generate the api to.
   */
  readonly outDir: string;

}

/**
 * Generate the api class for a specific client.
 */
export class ApiGenerator {

  private readonly methods: structs.Method[] = [];
  private readonly props: ApiGeneratorProps;
  private readonly code: CodeMaker;

  constructor(props: ApiGeneratorProps) {
    this.props = props;
    this.code = new CodeMaker({ indentationLevel: 2 });
  }

  /**
   * Add a method definition to this API.
   *
   * @param method The method to generate.
   */
  public addMethod(method: structs.Method) {
    this.methods.push(method);
  }

  /**
   * Render the code.
   */
  public async render() {

    this.code.openFile(FILENAME);

    this.code.line("import * as cdk from '@aws-cdk/core';");
    this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    this.code.line("import * as shapes from './shapes';");
    this.code.line();

    // we need toPascalCase to make it jsii compatible since some sdk class names don't follow that. (ES, DAX, ...)
    // we suffix it with 'Client' to make it more discoverable among all other exports of this package.
    this.code.openBlock(`export class ${this.code.toPascalCase(this.props.client.className)}Client extends cdk.Construct`);

    this.code.openBlock(`constructor(scope: cdk.Construct, id: string, private readonly resources: string[])`);
    this.code.line('super(scope, id);')
    this.code.closeBlock();

    const responseGenerators: ResponseGenerator[] = [];

    for (const method of this.methods) {

      // we prefix with the client class to make it unique across the entire
      // package.
      const responseClassName = `${this.props.client.className}${method.outputShape}`;

      const methodName = method.name.startsWith('Get') ? method.name.replace('Get', 'Fetch') : method.name;

      // some shapes are empty interfaces, in which we case ignore it since it would
      // trigger 'unused' errors.
      const hasInput = method.inputShape && !this.isEmptyShape(method.inputShape);
      const hasOutput = method.outputShape && !this.isEmptyShape(method.outputShape);

      const input = hasInput ? `input: shapes.${this.code.toPascalCase(method.inputShape)}` : '';
      const output = hasOutput ? responseClassName : 'void';

      this.code.openBlock(`public ${this.code.toCamelCase(methodName)}(${input}): ${output}`);

      if (hasOutput) {

        // the method returns a shape, we need to generate a response.
        const responseGenerator = new ResponseGenerator({
          code: this.code,
          client: this.props.client,
          className: responseClassName,
          action: method.name,
          outputShape: method.outputShape,
          inputShape: method.inputShape,
          outputPath: [],
        });

        const resourcesIn = responseGenerator.acceptsResources ? ', this.resources' : '';
        const inputIn = responseGenerator.acceptsInput && !this.isEmptyShape(method.inputShape) ? ', input' : '';

        this.code.line(`return new ${responseClassName}(this, '${method.outputShape}'${resourcesIn}${inputIn});`)
        responseGenerators.push(responseGenerator);
      } else {

        // the method doesn't return anything, generate the custom resource.
        // TODO what about methods that return primtives?
        const awsCustomResourceGenerator = new AwsCustomResourceGenerator({
          action: method.name,
          client: this.props.client,
          code: this.code,
          input: method.inputShape,
          output: method.outputShape,
          outputPath: [],
          useThisInput: false,
        })

        awsCustomResourceGenerator.render();
      }

      this.code.closeBlock();
    }

    this.code.closeBlock();

    // generate all the necessary reponses for this api.
    responseGenerators.forEach(g => g.render());

    this.code.closeFile(FILENAME);
    await this.code.save(this.props.outDir);

  }

  private isEmptyShape(shapeName: string): boolean {
    const shape = this.props.client.spec.shapes[shapeName];
    return shape !== undefined && shape.members !== undefined && Object.keys(shape.members).length === 0;
  }

}
