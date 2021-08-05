import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDetectorModel(input: shapes.IoTEventsCreateDetectorModelRequest): IoTEventsResponsesCreateDetectorModel {
    return new IoTEventsResponsesCreateDetectorModel(this, this.__resources, input);
  }

  public createInput(input: shapes.IoTEventsCreateInputRequest): IoTEventsResponsesCreateInput {
    return new IoTEventsResponsesCreateInput(this, this.__resources, input);
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

  public describeDetectorModel(input: shapes.IoTEventsDescribeDetectorModelRequest): IoTEventsResponsesDescribeDetectorModel {
    return new IoTEventsResponsesDescribeDetectorModel(this, this.__resources, input);
  }

  public describeInput(input: shapes.IoTEventsDescribeInputRequest): IoTEventsResponsesDescribeInput {
    return new IoTEventsResponsesDescribeInput(this, this.__resources, input);
  }

  public describeLoggingOptions(): IoTEventsResponsesDescribeLoggingOptions {
    return new IoTEventsResponsesDescribeLoggingOptions(this, this.__resources);
  }

  public listDetectorModelVersions(input: shapes.IoTEventsListDetectorModelVersionsRequest): IoTEventsResponsesListDetectorModelVersions {
    return new IoTEventsResponsesListDetectorModelVersions(this, this.__resources, input);
  }

  public listDetectorModels(input: shapes.IoTEventsListDetectorModelsRequest): IoTEventsResponsesListDetectorModels {
    return new IoTEventsResponsesListDetectorModels(this, this.__resources, input);
  }

  public listInputs(input: shapes.IoTEventsListInputsRequest): IoTEventsResponsesListInputs {
    return new IoTEventsResponsesListInputs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTEventsListTagsForResourceRequest): IoTEventsResponsesListTagsForResource {
    return new IoTEventsResponsesListTagsForResource(this, this.__resources, input);
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

  public updateDetectorModel(input: shapes.IoTEventsUpdateDetectorModelRequest): IoTEventsResponsesUpdateDetectorModel {
    return new IoTEventsResponsesUpdateDetectorModel(this, this.__resources, input);
  }

  public updateInput(input: shapes.IoTEventsUpdateInputRequest): IoTEventsResponsesUpdateInput {
    return new IoTEventsResponsesUpdateInput(this, this.__resources, input);
  }

}

export class IoTEventsResponsesCreateDetectorModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsCreateDetectorModelRequest) {
  }

  public get detectorModelConfiguration(): IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration {
    return new IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsCreateDetectorModelRequest) {
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.detectorModelName', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.detectorModelVersion', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.detectorModelDescription', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.detectorModelArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.roleArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.creationTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.lastUpdateTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.status', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.key', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          key: this.__input.key,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDetectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsResponsesCreateInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsCreateInputRequest) {
  }

  public get inputConfiguration(): IoTEventsResponsesCreateInputInputConfiguration {
    return new IoTEventsResponsesCreateInputInputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesCreateInputInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsCreateInputRequest) {
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.inputName', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.inputDescription', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.inputArn', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.creationTime', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.lastUpdateTime', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInput.inputConfiguration.status', props);
    return resource.getResponseField('inputConfiguration.status') as unknown as string;
  }

}

export class IoTEventsResponsesDescribeDetectorModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeDetectorModelRequest) {
  }

  public get detectorModel(): IoTEventsResponsesDescribeDetectorModelDetectorModel {
    return new IoTEventsResponsesDescribeDetectorModelDetectorModel(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeDetectorModelDetectorModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeDetectorModelRequest) {
  }

  public get detectorModelDefinition(): IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition {
    return new IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition(this.__scope, this.__resources, this.__input);
  }

  public get detectorModelConfiguration(): IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration {
    return new IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeDetectorModelRequest) {
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelDefinition.states', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelDefinition.initialStateName', props);
    return resource.getResponseField('detectorModel.detectorModelDefinition.initialStateName') as unknown as string;
  }

}

export class IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeDetectorModelRequest) {
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelName', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelVersion', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelDescription', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.detectorModelArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.roleArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.creationTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.lastUpdateTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.status', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.key', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelVersion: this.__input.detectorModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModel.detectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModel.detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsResponsesDescribeInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeInputRequest) {
  }

  public get input(): IoTEventsResponsesDescribeInputInput {
    return new IoTEventsResponsesDescribeInputInput(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeInputInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeInputRequest) {
  }

  public get inputConfiguration(): IoTEventsResponsesDescribeInputInputInputConfiguration {
    return new IoTEventsResponsesDescribeInputInputInputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get inputDefinition(): IoTEventsResponsesDescribeInputInputInputDefinition {
    return new IoTEventsResponsesDescribeInputInputInputDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeInputInputInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeInputRequest) {
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.inputName', props);
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.inputDescription', props);
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.inputArn', props);
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.creationTime', props);
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.lastUpdateTime', props);
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputConfiguration.status', props);
    return resource.getResponseField('input.inputConfiguration.status') as unknown as string;
  }

}

export class IoTEventsResponsesDescribeInputInputInputDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeInputRequest) {
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
          inputName: this.__input.inputName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInput.input.inputDefinition.attributes', props);
    return resource.getResponseField('input.inputDefinition.attributes') as unknown as shapes.IoTEventsAttribute[];
  }

}

export class IoTEventsResponsesDescribeLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get loggingOptions(): IoTEventsResponsesDescribeLoggingOptionsLoggingOptions {
    return new IoTEventsResponsesDescribeLoggingOptionsLoggingOptions(this.__scope, this.__resources);
  }

}

export class IoTEventsResponsesDescribeLoggingOptionsLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.level', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.enabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.detectorDebugOptions', props);
    return resource.getResponseField('loggingOptions.detectorDebugOptions') as unknown as shapes.IoTEventsDetectorDebugOption[];
  }

}

export class IoTEventsResponsesListDetectorModelVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListDetectorModelVersionsRequest) {
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
          detectorModelName: this.__input.detectorModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectorModelVersions.detectorModelVersionSummaries', props);
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
          detectorModelName: this.__input.detectorModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectorModelVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsResponsesListDetectorModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListDetectorModelsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectorModels.detectorModelSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectorModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsResponsesListInputs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListInputsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInputs.inputSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInputs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTEventsTag[];
  }

}

export class IoTEventsResponsesUpdateDetectorModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsUpdateDetectorModelRequest) {
  }

  public get detectorModelConfiguration(): IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration {
    return new IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsUpdateDetectorModelRequest) {
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelName', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelVersion', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelDescription', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.detectorModelArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.roleArn', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.creationTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.lastUpdateTime', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.status', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.key', props);
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
          detectorModelName: this.__input.detectorModelName,
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
          detectorModelDescription: this.__input.detectorModelDescription,
          roleArn: this.__input.roleArn,
          evaluationMethod: this.__input.evaluationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDetectorModel.detectorModelConfiguration.evaluationMethod', props);
    return resource.getResponseField('detectorModelConfiguration.evaluationMethod') as unknown as string;
  }

}

export class IoTEventsResponsesUpdateInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsUpdateInputRequest) {
  }

  public get inputConfiguration(): IoTEventsResponsesUpdateInputInputConfiguration {
    return new IoTEventsResponsesUpdateInputInputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesUpdateInputInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsUpdateInputRequest) {
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.inputName', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.inputDescription', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.inputArn', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.creationTime', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.lastUpdateTime', props);
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
          inputName: this.__input.inputName,
          inputDescription: this.__input.inputDescription,
          inputDefinition: {
            attributes: this.__input.inputDefinition.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInput.inputConfiguration.status', props);
    return resource.getResponseField('inputConfiguration.status') as unknown as string;
  }

}

