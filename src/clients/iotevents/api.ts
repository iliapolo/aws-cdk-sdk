import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDetectorModel(input: shapes.IoTEventsCreateDetectorModelRequest): IoTEventsCreateDetectorModel {
    return new IoTEventsCreateDetectorModel(this, 'CreateDetectorModel', this.__resources, input);
  }

  public createInput(input: shapes.IoTEventsCreateInputRequest): IoTEventsCreateInput {
    return new IoTEventsCreateInput(this, 'CreateInput', this.__resources, input);
  }

  public deleteDetectorModel(input: shapes.IoTEventsDeleteDetectorModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DeleteDetectorModel'),
        parameters: {
          detectorModelName: input.detectorModelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDetectorModel', props);
  }

  public deleteInput(input: shapes.IoTEventsDeleteInputRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DeleteInput'),
        parameters: {
          inputName: input.inputName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInput', props);
  }

  public describeDetectorModel(input: shapes.IoTEventsDescribeDetectorModelRequest): IoTEventsDescribeDetectorModel {
    return new IoTEventsDescribeDetectorModel(this, 'DescribeDetectorModel', this.__resources, input);
  }

  public describeInput(input: shapes.IoTEventsDescribeInputRequest): IoTEventsDescribeInput {
    return new IoTEventsDescribeInput(this, 'DescribeInput', this.__resources, input);
  }

  public describeLoggingOptions(): IoTEventsDescribeLoggingOptions {
    return new IoTEventsDescribeLoggingOptions(this, 'DescribeLoggingOptions', this.__resources);
  }

  public listDetectorModelVersions(input: shapes.IoTEventsListDetectorModelVersionsRequest): IoTEventsListDetectorModelVersions {
    return new IoTEventsListDetectorModelVersions(this, 'ListDetectorModelVersions', this.__resources, input);
  }

  public listDetectorModels(input: shapes.IoTEventsListDetectorModelsRequest): IoTEventsListDetectorModels {
    return new IoTEventsListDetectorModels(this, 'ListDetectorModels', this.__resources, input);
  }

  public listInputs(input: shapes.IoTEventsListInputsRequest): IoTEventsListInputs {
    return new IoTEventsListInputs(this, 'ListInputs', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTEventsListTagsForResourceRequest): IoTEventsListTagsForResource {
    return new IoTEventsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putLoggingOptions(input: shapes.IoTEventsPutLoggingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingOptions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.PutLoggingOptions'),
        parameters: {
          loggingOptions: {
            roleArn: input.loggingOptions.roleArn,
            level: input.loggingOptions.level,
            enabled: input.loggingOptions.enabled,
            detectorDebugOptions: input.loggingOptions.detectorDebugOptions,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLoggingOptions', props);
  }

  public tagResource(input: shapes.IoTEventsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoTEventsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDetectorModel(input: shapes.IoTEventsUpdateDetectorModelRequest): IoTEventsUpdateDetectorModel {
    return new IoTEventsUpdateDetectorModel(this, 'UpdateDetectorModel', this.__resources, input);
  }

  public updateInput(input: shapes.IoTEventsUpdateInputRequest): IoTEventsUpdateInput {
    return new IoTEventsUpdateInput(this, 'UpdateInput', this.__resources, input);
  }

}

export class IoTEventsCreateDetectorModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsCreateDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelConfiguration(): IoTEventsCreateDetectorModelDetectorModelConfiguration {
    return new IoTEventsCreateDetectorModelDetectorModelConfiguration(this, 'DetectorModelConfiguration', this.__resources, this.input);
  }

}

export class IoTEventsCreateDetectorModelDetectorModelConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsCreateDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.detectorModelName'),
        outputPath: 'detectorModelConfiguration.detectorModelName',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.detectorModelName', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelName') as unknown as string;
  }

  public get detectorModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.detectorModelVersion'),
        outputPath: 'detectorModelConfiguration.detectorModelVersion',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.detectorModelVersion', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelVersion') as unknown as string;
  }

  public get detectorModelDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.detectorModelDescription'),
        outputPath: 'detectorModelConfiguration.detectorModelDescription',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.detectorModelDescription', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelDescription') as unknown as string;
  }

  public get detectorModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.detectorModelArn'),
        outputPath: 'detectorModelConfiguration.detectorModelArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.detectorModelArn', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.roleArn'),
        outputPath: 'detectorModelConfiguration.roleArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.roleArn', props);
    return resource.getResponseField('detectorModelConfiguration.roleArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.creationTime'),
        outputPath: 'detectorModelConfiguration.creationTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.creationTime', props);
    return resource.getResponseField('detectorModelConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.lastUpdateTime'),
        outputPath: 'detectorModelConfiguration.lastUpdateTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.lastUpdateTime', props);
    return resource.getResponseField('detectorModelConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.status'),
        outputPath: 'detectorModelConfiguration.status',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.status', props);
    return resource.getResponseField('detectorModelConfiguration.status') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.key'),
        outputPath: 'detectorModelConfiguration.key',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.key', props);
    return resource.getResponseField('detectorModelConfiguration.key') as unknown as string;
  }

  public get evaluationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateDetectorModel.detectorModelConfiguration.evaluationMethod'),
        outputPath: 'detectorModelConfiguration.evaluationMethod',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          key: this.input.key,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDetectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsCreateInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsCreateInputRequest) {
    super(scope, id);
  }

  public get inputConfiguration(): IoTEventsCreateInputInputConfiguration {
    return new IoTEventsCreateInputInputConfiguration(this, 'InputConfiguration', this.__resources, this.input);
  }

}

export class IoTEventsCreateInputInputConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsCreateInputRequest) {
    super(scope, id);
  }

  public get inputName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.inputName'),
        outputPath: 'inputConfiguration.inputName',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.inputName', props);
    return resource.getResponseField('inputConfiguration.inputName') as unknown as string;
  }

  public get inputDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.inputDescription'),
        outputPath: 'inputConfiguration.inputDescription',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.inputDescription', props);
    return resource.getResponseField('inputConfiguration.inputDescription') as unknown as string;
  }

  public get inputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.inputArn'),
        outputPath: 'inputConfiguration.inputArn',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.inputArn', props);
    return resource.getResponseField('inputConfiguration.inputArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.creationTime'),
        outputPath: 'inputConfiguration.creationTime',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.creationTime', props);
    return resource.getResponseField('inputConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.lastUpdateTime'),
        outputPath: 'inputConfiguration.lastUpdateTime',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.lastUpdateTime', props);
    return resource.getResponseField('inputConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateInput.inputConfiguration.status'),
        outputPath: 'inputConfiguration.status',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInput.inputConfiguration.status', props);
    return resource.getResponseField('inputConfiguration.status') as unknown as string;
  }

}

export class IoTEventsDescribeDetectorModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModel(): IoTEventsDescribeDetectorModelDetectorModel {
    return new IoTEventsDescribeDetectorModelDetectorModel(this, 'DetectorModel', this.__resources, this.input);
  }

}

export class IoTEventsDescribeDetectorModelDetectorModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelDefinition(): IoTEventsDescribeDetectorModelDetectorModelDetectorModelDefinition {
    return new IoTEventsDescribeDetectorModelDetectorModelDetectorModelDefinition(this, 'DetectorModelDefinition', this.__resources, this.input);
  }

  public get detectorModelConfiguration(): IoTEventsDescribeDetectorModelDetectorModelDetectorModelConfiguration {
    return new IoTEventsDescribeDetectorModelDetectorModelDetectorModelConfiguration(this, 'DetectorModelConfiguration', this.__resources, this.input);
  }

}

export class IoTEventsDescribeDetectorModelDetectorModelDetectorModelDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeDetectorModelRequest) {
    super(scope, id);
  }

  public get states(): shapes.IoTEventsState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelDefinition.states'),
        outputPath: 'detectorModel.detectorModelDefinition.states',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelDefinition.states', props);
    return resource.getResponseField('detectorModel.detectorModelDefinition.states') as unknown as shapes.IoTEventsState[];
  }

  public get initialStateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelDefinition.initialStateName'),
        outputPath: 'detectorModel.detectorModelDefinition.initialStateName',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelDefinition.initialStateName', props);
    return resource.getResponseField('detectorModel.detectorModelDefinition.initialStateName') as unknown as string;
  }

}

export class IoTEventsDescribeDetectorModelDetectorModelDetectorModelConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelName'),
        outputPath: 'detectorModel.detectorModelConfiguration.detectorModelName',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelName', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.detectorModelName') as unknown as string;
  }

  public get detectorModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelVersion'),
        outputPath: 'detectorModel.detectorModelConfiguration.detectorModelVersion',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelVersion', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.detectorModelVersion') as unknown as string;
  }

  public get detectorModelDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelDescription'),
        outputPath: 'detectorModel.detectorModelConfiguration.detectorModelDescription',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelDescription', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.detectorModelDescription') as unknown as string;
  }

  public get detectorModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelArn'),
        outputPath: 'detectorModel.detectorModelConfiguration.detectorModelArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelArn', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.detectorModelArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.roleArn'),
        outputPath: 'detectorModel.detectorModelConfiguration.roleArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.roleArn', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.roleArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.creationTime'),
        outputPath: 'detectorModel.detectorModelConfiguration.creationTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.creationTime', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.lastUpdateTime'),
        outputPath: 'detectorModel.detectorModelConfiguration.lastUpdateTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.lastUpdateTime', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.status'),
        outputPath: 'detectorModel.detectorModelConfiguration.status',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.status', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.status') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.key'),
        outputPath: 'detectorModel.detectorModelConfiguration.key',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.key', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.key') as unknown as string;
  }

  public get evaluationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModel.detectorModel.detectorModelConfiguration.evaluationMethod'),
        outputPath: 'detectorModel.detectorModelConfiguration.evaluationMethod',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelVersion: this.input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsDescribeInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeInputRequest) {
    super(scope, id);
  }

  public get input(): IoTEventsDescribeInputInput {
    return new IoTEventsDescribeInputInput(this, 'Input', this.__resources, this.input);
  }

}

export class IoTEventsDescribeInputInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeInputRequest) {
    super(scope, id);
  }

  public get inputConfiguration(): IoTEventsDescribeInputInputInputConfiguration {
    return new IoTEventsDescribeInputInputInputConfiguration(this, 'InputConfiguration', this.__resources, this.input);
  }

  public get inputDefinition(): IoTEventsDescribeInputInputInputDefinition {
    return new IoTEventsDescribeInputInputInputDefinition(this, 'InputDefinition', this.__resources, this.input);
  }

}

export class IoTEventsDescribeInputInputInputConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeInputRequest) {
    super(scope, id);
  }

  public get inputName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.inputName'),
        outputPath: 'input.inputConfiguration.inputName',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.inputName', props);
    return resource.getResponseField('input.inputConfiguration.inputName') as unknown as string;
  }

  public get inputDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.inputDescription'),
        outputPath: 'input.inputConfiguration.inputDescription',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.inputDescription', props);
    return resource.getResponseField('input.inputConfiguration.inputDescription') as unknown as string;
  }

  public get inputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.inputArn'),
        outputPath: 'input.inputConfiguration.inputArn',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.inputArn', props);
    return resource.getResponseField('input.inputConfiguration.inputArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.creationTime'),
        outputPath: 'input.inputConfiguration.creationTime',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.creationTime', props);
    return resource.getResponseField('input.inputConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.lastUpdateTime'),
        outputPath: 'input.inputConfiguration.lastUpdateTime',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.lastUpdateTime', props);
    return resource.getResponseField('input.inputConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputConfiguration.status'),
        outputPath: 'input.inputConfiguration.status',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputConfiguration.status', props);
    return resource.getResponseField('input.inputConfiguration.status') as unknown as string;
  }

}

export class IoTEventsDescribeInputInputInputDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDescribeInputRequest) {
    super(scope, id);
  }

  public get attributes(): shapes.IoTEventsAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeInput.input.inputDefinition.attributes'),
        outputPath: 'input.inputDefinition.attributes',
        parameters: {
          inputName: this.input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInput.input.inputDefinition.attributes', props);
    return resource.getResponseField('input.inputDefinition.attributes') as unknown as shapes.IoTEventsAttribute[];
  }

}

export class IoTEventsDescribeLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get loggingOptions(): IoTEventsDescribeLoggingOptionsLoggingOptions {
    return new IoTEventsDescribeLoggingOptionsLoggingOptions(this, 'LoggingOptions', this.__resources);
  }

}

export class IoTEventsDescribeLoggingOptionsLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeLoggingOptions.loggingOptions.roleArn'),
        outputPath: 'loggingOptions.roleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.roleArn', props);
    return resource.getResponseField('loggingOptions.roleArn') as unknown as string;
  }

  public get level(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeLoggingOptions.loggingOptions.level'),
        outputPath: 'loggingOptions.level',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.level', props);
    return resource.getResponseField('loggingOptions.level') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeLoggingOptions.loggingOptions.enabled'),
        outputPath: 'loggingOptions.enabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.enabled', props);
    return resource.getResponseField('loggingOptions.enabled') as unknown as boolean;
  }

  public get detectorDebugOptions(): shapes.IoTEventsDetectorDebugOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeLoggingOptions.loggingOptions.detectorDebugOptions'),
        outputPath: 'loggingOptions.detectorDebugOptions',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.detectorDebugOptions', props);
    return resource.getResponseField('loggingOptions.detectorDebugOptions') as unknown as shapes.IoTEventsDetectorDebugOption[];
  }

}

export class IoTEventsListDetectorModelVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsListDetectorModelVersionsRequest) {
    super(scope, id);
  }

  public get detectorModelVersionSummaries(): shapes.IoTEventsDetectorModelVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectorModelVersions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListDetectorModelVersions.detectorModelVersionSummaries'),
        outputPath: 'detectorModelVersionSummaries',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectorModelVersions.detectorModelVersionSummaries', props);
    return resource.getResponseField('detectorModelVersionSummaries') as unknown as shapes.IoTEventsDetectorModelVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectorModelVersions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListDetectorModelVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectorModelVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsListDetectorModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsListDetectorModelsRequest) {
    super(scope, id);
  }

  public get detectorModelSummaries(): shapes.IoTEventsDetectorModelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectorModels',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListDetectorModels.detectorModelSummaries'),
        outputPath: 'detectorModelSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectorModels.detectorModelSummaries', props);
    return resource.getResponseField('detectorModelSummaries') as unknown as shapes.IoTEventsDetectorModelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectorModels',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListDetectorModels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectorModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsListInputs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsListInputsRequest) {
    super(scope, id);
  }

  public get inputSummaries(): shapes.IoTEventsInputSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInputs',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListInputs.inputSummaries'),
        outputPath: 'inputSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInputs.inputSummaries', props);
    return resource.getResponseField('inputSummaries') as unknown as shapes.IoTEventsInputSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInputs',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListInputs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInputs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.IoTEventsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTEventsTag[];
  }

}

export class IoTEventsUpdateDetectorModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsUpdateDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelConfiguration(): IoTEventsUpdateDetectorModelDetectorModelConfiguration {
    return new IoTEventsUpdateDetectorModelDetectorModelConfiguration(this, 'DetectorModelConfiguration', this.__resources, this.input);
  }

}

export class IoTEventsUpdateDetectorModelDetectorModelConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsUpdateDetectorModelRequest) {
    super(scope, id);
  }

  public get detectorModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.detectorModelName'),
        outputPath: 'detectorModelConfiguration.detectorModelName',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelName', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelName') as unknown as string;
  }

  public get detectorModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.detectorModelVersion'),
        outputPath: 'detectorModelConfiguration.detectorModelVersion',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelVersion', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelVersion') as unknown as string;
  }

  public get detectorModelDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.detectorModelDescription'),
        outputPath: 'detectorModelConfiguration.detectorModelDescription',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelDescription', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelDescription') as unknown as string;
  }

  public get detectorModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.detectorModelArn'),
        outputPath: 'detectorModelConfiguration.detectorModelArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelArn', props);
    return resource.getResponseField('detectorModelConfiguration.detectorModelArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.roleArn'),
        outputPath: 'detectorModelConfiguration.roleArn',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.roleArn', props);
    return resource.getResponseField('detectorModelConfiguration.roleArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.creationTime'),
        outputPath: 'detectorModelConfiguration.creationTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.creationTime', props);
    return resource.getResponseField('detectorModelConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.lastUpdateTime'),
        outputPath: 'detectorModelConfiguration.lastUpdateTime',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.lastUpdateTime', props);
    return resource.getResponseField('detectorModelConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.status'),
        outputPath: 'detectorModelConfiguration.status',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.status', props);
    return resource.getResponseField('detectorModelConfiguration.status') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.key'),
        outputPath: 'detectorModelConfiguration.key',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.key', props);
    return resource.getResponseField('detectorModelConfiguration.key') as unknown as string;
  }

  public get evaluationMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDetectorModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateDetectorModel.detectorModelConfiguration.evaluationMethod'),
        outputPath: 'detectorModelConfiguration.evaluationMethod',
        parameters: {
          detectorModelName: this.input.detectorModelName,
          detectorModelDefinition: {
            states: this.input.detectorModelDefinition.states,
            initialStateName: this.input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.input.detectorModelDescription,
          roleArn: this.input.roleArn,
          evaluationMethod: this.input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDetectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsUpdateInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsUpdateInputRequest) {
    super(scope, id);
  }

  public get inputConfiguration(): IoTEventsUpdateInputInputConfiguration {
    return new IoTEventsUpdateInputInputConfiguration(this, 'InputConfiguration', this.__resources, this.input);
  }

}

export class IoTEventsUpdateInputInputConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsUpdateInputRequest) {
    super(scope, id);
  }

  public get inputName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.inputName'),
        outputPath: 'inputConfiguration.inputName',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.inputName', props);
    return resource.getResponseField('inputConfiguration.inputName') as unknown as string;
  }

  public get inputDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.inputDescription'),
        outputPath: 'inputConfiguration.inputDescription',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.inputDescription', props);
    return resource.getResponseField('inputConfiguration.inputDescription') as unknown as string;
  }

  public get inputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.inputArn'),
        outputPath: 'inputConfiguration.inputArn',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.inputArn', props);
    return resource.getResponseField('inputConfiguration.inputArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.creationTime'),
        outputPath: 'inputConfiguration.creationTime',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.creationTime', props);
    return resource.getResponseField('inputConfiguration.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.lastUpdateTime'),
        outputPath: 'inputConfiguration.lastUpdateTime',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.lastUpdateTime', props);
    return resource.getResponseField('inputConfiguration.lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInput',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateInput.inputConfiguration.status'),
        outputPath: 'inputConfiguration.status',
        parameters: {
          inputName: this.input.inputName,
          inputDescription: this.input.inputDescription,
          inputDefinition: {
            attributes: this.input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInput.inputConfiguration.status', props);
    return resource.getResponseField('inputConfiguration.status') as unknown as string;
  }

}

