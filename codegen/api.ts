
import * as path from 'path';
import { CodeMaker } from 'codemaker';
import { AwsCustomResourceGenerator } from './cr';
import { ResponseGenerator } from './response';
import * as sdk from './sdk-repository';
import * as structs from './structs';

export const responses = new Map<string, ResponseGenerator>();

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

  /**
   * The filename of the generated file.
   */
  readonly fileName: string;

  /**
   * The filename of the shapes file.
   */
  readonly shapesFileName: string;

}

/**
 * Generate the api class for a specific client.
 */
export class ApiGenerator {

  private readonly methods: structs.Method[] = [];
  private readonly code: CodeMaker;

  private readonly _props: ApiGeneratorProps;

  constructor(props: ApiGeneratorProps) {
    this._props = props;
    this.code = new CodeMaker({ indentationLevel: 2 });

    for (const operationName of Object.keys(this._props.client.spec.operations)) {
      const operation = this._props.client.spec.operations[operationName];
      this.methods.push({
        name: operationName,
        inputShape: operation.input?.shape,
        outputShape: operation.output?.shape,
        outputPath: [],
      });
    }

  }

  /**
   * Generator for the api file of a client directory.
   */
  public async gen() {

    this.code.openFile(this._props.fileName);

    this.code.line("import * as cdk from '@aws-cdk/core';");
    this.code.line("import * as cr from '@aws-cdk/custom-resources';");
    this.code.line(`import * as shapes from './${path.basename(this._props.shapesFileName, '.ts')}';`);
    this.code.line();

    // we need toPascalCase to make it jsii compatible since some sdk class names don't follow that. (ES, DAX, ...)
    // we suffix it with 'Client' to make it more discoverable among all other exports of this package.
    this.code.openBlock(`export class ${this.code.toPascalCase(this._props.client.className)}Client extends cdk.Construct`);

    this.code.line();
    this.code.openBlock('constructor(scope: cdk.Construct, id: string, private readonly __resources: string[])');
    this.code.line('super(scope, id);');
    this.code.closeBlock();
    this.code.line();

    const responseGenerators: ResponseGenerator[] = [];

    for (const method of this.methods) {

      // replace `Get` since JSII assumes its a getter and thus can have no inputs.
      let methodName = method.name.startsWith('Get') ? method.name.replace('Get', 'Fetch') : method.name;
      methodName = method.name.startsWith('Set') ? method.name.replace('Set', 'Put') : methodName;

      // we prefix with the client class to make it unique across the entire package.
      const responseClassName = `${this._props.client.className}Responses${this.code.toPascalCase(methodName)}`;

      // some shapes are empty interfaces, in which we case ignore it since it would trigger 'unused' errors.
      const hasInput = method.inputShape && !this.isEmptyShape(method.inputShape);
      const hasOutput = method.outputShape && !this.isEmptyShape(method.outputShape);

      const input = hasInput ? `input: shapes.${this.code.toPascalCase(`${this._props.client.className}${method.inputShape}`)}` : '';
      const output = hasOutput ? responseClassName : 'void';

      this.code.openBlock(`public ${this.code.toCamelCase(methodName)}(${input}): ${output}`);

      if (hasOutput) {

        // the method returns a shape, we need to generate a response.
        let responseGenerator = responses.get(responseClassName);
        if (!responseGenerator) {
          responseGenerator = new ResponseGenerator({
            code: this.code,
            client: this._props.client,
            className: responseClassName,
            action: method.name,
            outputShape: method.outputShape,
            inputShape: method.inputShape,
            outputPath: [],
          });
          responseGenerators.push(responseGenerator);
          responses.set(responseClassName, responseGenerator);
        }

        const resourcesIn = responseGenerator.acceptsResources ? ', this.__resources' : '';
        const inputIn = responseGenerator.acceptsInput && !this.isEmptyShape(method.inputShape) ? ', input' : '';

        this.code.line(`return new ${responseClassName}(this${resourcesIn}${inputIn});`);
      } else {

        // the method doesn't return anything, generate the custom resource.
        const customResourceGenerator = new AwsCustomResourceGenerator({
          action: method.name,
          client: this._props.client,
          code: this.code,
          input: method.inputShape,
          output: method.outputShape,
          outputPath: [],
          useThisInput: false,
        });

        customResourceGenerator.render();
      }

      this.code.closeBlock();
      this.code.line();
    }

    this.code.closeBlock();
    this.code.line();

    responseGenerators.forEach(g => g.render());

    this.code.closeFile(this._props.fileName);
    await this.code.save(this._props.outDir);

  }

  private isEmptyShape(shapeName: string): boolean {
    const shape = this._props.client.spec.shapes[shapeName];
    return shape !== undefined && shape.members !== undefined && Object.keys(shape.members).length === 0;
  }

}
