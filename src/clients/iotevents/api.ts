import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAlarmModel(input: shapes.IoTEventsCreateAlarmModelRequest): IoTEventsResponsesCreateAlarmModel {
    return new IoTEventsResponsesCreateAlarmModel(this, this.__resources, input);
  }

  public createDetectorModel(input: shapes.IoTEventsCreateDetectorModelRequest): IoTEventsResponsesCreateDetectorModel {
    return new IoTEventsResponsesCreateDetectorModel(this, this.__resources, input);
  }

  public createInput(input: shapes.IoTEventsCreateInputRequest): IoTEventsResponsesCreateInput {
    return new IoTEventsResponsesCreateInput(this, this.__resources, input);
  }

  public deleteAlarmModel(input: shapes.IoTEventsDeleteAlarmModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DeleteAlarmModel'),
        parameters: {
          alarmModelName: input.alarmModelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlarmModel', props);
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

  public describeAlarmModel(input: shapes.IoTEventsDescribeAlarmModelRequest): IoTEventsResponsesDescribeAlarmModel {
    return new IoTEventsResponsesDescribeAlarmModel(this, this.__resources, input);
  }

  public describeDetectorModel(input: shapes.IoTEventsDescribeDetectorModelRequest): IoTEventsResponsesDescribeDetectorModel {
    return new IoTEventsResponsesDescribeDetectorModel(this, this.__resources, input);
  }

  public describeDetectorModelAnalysis(input: shapes.IoTEventsDescribeDetectorModelAnalysisRequest): IoTEventsResponsesDescribeDetectorModelAnalysis {
    return new IoTEventsResponsesDescribeDetectorModelAnalysis(this, this.__resources, input);
  }

  public describeInput(input: shapes.IoTEventsDescribeInputRequest): IoTEventsResponsesDescribeInput {
    return new IoTEventsResponsesDescribeInput(this, this.__resources, input);
  }

  public describeLoggingOptions(): IoTEventsResponsesDescribeLoggingOptions {
    return new IoTEventsResponsesDescribeLoggingOptions(this, this.__resources);
  }

  public fetchDetectorModelAnalysisResults(input: shapes.IoTEventsGetDetectorModelAnalysisResultsRequest): IoTEventsResponsesFetchDetectorModelAnalysisResults {
    return new IoTEventsResponsesFetchDetectorModelAnalysisResults(this, this.__resources, input);
  }

  public listAlarmModelVersions(input: shapes.IoTEventsListAlarmModelVersionsRequest): IoTEventsResponsesListAlarmModelVersions {
    return new IoTEventsResponsesListAlarmModelVersions(this, this.__resources, input);
  }

  public listAlarmModels(input: shapes.IoTEventsListAlarmModelsRequest): IoTEventsResponsesListAlarmModels {
    return new IoTEventsResponsesListAlarmModels(this, this.__resources, input);
  }

  public listDetectorModelVersions(input: shapes.IoTEventsListDetectorModelVersionsRequest): IoTEventsResponsesListDetectorModelVersions {
    return new IoTEventsResponsesListDetectorModelVersions(this, this.__resources, input);
  }

  public listDetectorModels(input: shapes.IoTEventsListDetectorModelsRequest): IoTEventsResponsesListDetectorModels {
    return new IoTEventsResponsesListDetectorModels(this, this.__resources, input);
  }

  public listInputRoutings(input: shapes.IoTEventsListInputRoutingsRequest): IoTEventsResponsesListInputRoutings {
    return new IoTEventsResponsesListInputRoutings(this, this.__resources, input);
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

  public startDetectorModelAnalysis(input: shapes.IoTEventsStartDetectorModelAnalysisRequest): IoTEventsResponsesStartDetectorModelAnalysis {
    return new IoTEventsResponsesStartDetectorModelAnalysis(this, this.__resources, input);
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

  public updateAlarmModel(input: shapes.IoTEventsUpdateAlarmModelRequest): IoTEventsResponsesUpdateAlarmModel {
    return new IoTEventsResponsesUpdateAlarmModel(this, this.__resources, input);
  }

  public updateDetectorModel(input: shapes.IoTEventsUpdateDetectorModelRequest): IoTEventsResponsesUpdateDetectorModel {
    return new IoTEventsResponsesUpdateDetectorModel(this, this.__resources, input);
  }

  public updateInput(input: shapes.IoTEventsUpdateInputRequest): IoTEventsResponsesUpdateInput {
    return new IoTEventsResponsesUpdateInput(this, this.__resources, input);
  }

}

export class IoTEventsResponsesCreateAlarmModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsCreateAlarmModelRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateAlarmModel.creationTime'),
        outputPath: 'creationTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          key: this.__input.key,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlarmModel.creationTime', props);
    return resource.getResponseField('creationTime') as unknown as string;
  }

  public get alarmModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateAlarmModel.alarmModelArn'),
        outputPath: 'alarmModelArn',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          key: this.__input.key,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlarmModel.alarmModelArn', props);
    return resource.getResponseField('alarmModelArn') as unknown as string;
  }

  public get alarmModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateAlarmModel.alarmModelVersion'),
        outputPath: 'alarmModelVersion',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          key: this.__input.key,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlarmModel.alarmModelVersion', props);
    return resource.getResponseField('alarmModelVersion') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateAlarmModel.lastUpdateTime'),
        outputPath: 'lastUpdateTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          key: this.__input.key,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlarmModel.lastUpdateTime', props);
    return resource.getResponseField('lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.CreateAlarmModel.status'),
        outputPath: 'status',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
          key: this.__input.key,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlarmModel.status', props);
    return resource.getResponseField('status') as unknown as string;
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

export class IoTEventsResponsesDescribeAlarmModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.creationTime'),
        outputPath: 'creationTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.creationTime', props);
    return resource.getResponseField('creationTime') as unknown as string;
  }

  public get alarmModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmModelArn'),
        outputPath: 'alarmModelArn',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmModelArn', props);
    return resource.getResponseField('alarmModelArn') as unknown as string;
  }

  public get alarmModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmModelVersion'),
        outputPath: 'alarmModelVersion',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmModelVersion', props);
    return resource.getResponseField('alarmModelVersion') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.lastUpdateTime'),
        outputPath: 'lastUpdateTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.lastUpdateTime', props);
    return resource.getResponseField('lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.status'),
        outputPath: 'status',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.statusMessage'),
        outputPath: 'statusMessage',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.statusMessage', props);
    return resource.getResponseField('statusMessage') as unknown as string;
  }

  public get alarmModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmModelName'),
        outputPath: 'alarmModelName',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmModelName', props);
    return resource.getResponseField('alarmModelName') as unknown as string;
  }

  public get alarmModelDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmModelDescription'),
        outputPath: 'alarmModelDescription',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmModelDescription', props);
    return resource.getResponseField('alarmModelDescription') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.roleArn'),
        outputPath: 'roleArn',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.key'),
        outputPath: 'key',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.key', props);
    return resource.getResponseField('key') as unknown as string;
  }

  public get severity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.severity'),
        outputPath: 'severity',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.severity', props);
    return resource.getResponseField('severity') as unknown as number;
  }

  public get alarmRule(): IoTEventsResponsesDescribeAlarmModelAlarmRule {
    return new IoTEventsResponsesDescribeAlarmModelAlarmRule(this.__scope, this.__resources, this.__input);
  }

  public get alarmNotification(): IoTEventsResponsesDescribeAlarmModelAlarmNotification {
    return new IoTEventsResponsesDescribeAlarmModelAlarmNotification(this.__scope, this.__resources, this.__input);
  }

  public get alarmEventActions(): IoTEventsResponsesDescribeAlarmModelAlarmEventActions {
    return new IoTEventsResponsesDescribeAlarmModelAlarmEventActions(this.__scope, this.__resources, this.__input);
  }

  public get alarmCapabilities(): IoTEventsResponsesDescribeAlarmModelAlarmCapabilities {
    return new IoTEventsResponsesDescribeAlarmModelAlarmCapabilities(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get simpleRule(): IoTEventsResponsesDescribeAlarmModelAlarmRuleSimpleRule {
    return new IoTEventsResponsesDescribeAlarmModelAlarmRuleSimpleRule(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmRuleSimpleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get inputProperty(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmRule.simpleRule.inputProperty'),
        outputPath: 'alarmRule.simpleRule.inputProperty',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmRule.simpleRule.inputProperty', props);
    return resource.getResponseField('alarmRule.simpleRule.inputProperty') as unknown as string;
  }

  public get comparisonOperator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmRule.simpleRule.comparisonOperator'),
        outputPath: 'alarmRule.simpleRule.comparisonOperator',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmRule.simpleRule.comparisonOperator', props);
    return resource.getResponseField('alarmRule.simpleRule.comparisonOperator') as unknown as string;
  }

  public get threshold(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmRule.simpleRule.threshold'),
        outputPath: 'alarmRule.simpleRule.threshold',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmRule.simpleRule.threshold', props);
    return resource.getResponseField('alarmRule.simpleRule.threshold') as unknown as string;
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get notificationActions(): shapes.IoTEventsNotificationAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmNotification.notificationActions'),
        outputPath: 'alarmNotification.notificationActions',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmNotification.notificationActions', props);
    return resource.getResponseField('alarmNotification.notificationActions') as unknown as shapes.IoTEventsNotificationAction[];
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmEventActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get alarmActions(): shapes.IoTEventsAlarmAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmEventActions.alarmActions'),
        outputPath: 'alarmEventActions.alarmActions',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmEventActions.alarmActions', props);
    return resource.getResponseField('alarmEventActions.alarmActions') as unknown as shapes.IoTEventsAlarmAction[];
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmCapabilities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get initializationConfiguration(): IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesInitializationConfiguration {
    return new IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesInitializationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get acknowledgeFlow(): IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesAcknowledgeFlow {
    return new IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesAcknowledgeFlow(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesInitializationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get disabledOnInitialization(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmCapabilities.initializationConfiguration.disabledOnInitialization'),
        outputPath: 'alarmCapabilities.initializationConfiguration.disabledOnInitialization',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmCapabilities.initializationConfiguration.disabledOnInitialization', props);
    return resource.getResponseField('alarmCapabilities.initializationConfiguration.disabledOnInitialization') as unknown as boolean;
  }

}

export class IoTEventsResponsesDescribeAlarmModelAlarmCapabilitiesAcknowledgeFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeAlarmModelRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeAlarmModel.alarmCapabilities.acknowledgeFlow.enabled'),
        outputPath: 'alarmCapabilities.acknowledgeFlow.enabled',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelVersion: this.__input.alarmModelVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlarmModel.alarmCapabilities.acknowledgeFlow.enabled', props);
    return resource.getResponseField('alarmCapabilities.acknowledgeFlow.enabled') as unknown as boolean;
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

export class IoTEventsResponsesDescribeDetectorModelAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDescribeDetectorModelAnalysisRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetectorModelAnalysis',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.DescribeDetectorModelAnalysis.status'),
        outputPath: 'status',
        parameters: {
          analysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetectorModelAnalysis.status', props);
    return resource.getResponseField('status') as unknown as string;
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

export class IoTEventsResponsesFetchDetectorModelAnalysisResults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsGetDetectorModelAnalysisResultsRequest) {
  }

  public get analysisResults(): shapes.IoTEventsAnalysisResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorModelAnalysisResults',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.GetDetectorModelAnalysisResults.analysisResults'),
        outputPath: 'analysisResults',
        parameters: {
          analysisId: this.__input.analysisId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorModelAnalysisResults.analysisResults', props);
    return resource.getResponseField('analysisResults') as unknown as shapes.IoTEventsAnalysisResult[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDetectorModelAnalysisResults',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.GetDetectorModelAnalysisResults.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          analysisId: this.__input.analysisId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDetectorModelAnalysisResults.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsResponsesListAlarmModelVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListAlarmModelVersionsRequest) {
  }

  public get alarmModelVersionSummaries(): shapes.IoTEventsAlarmModelVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarmModelVersions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListAlarmModelVersions.alarmModelVersionSummaries'),
        outputPath: 'alarmModelVersionSummaries',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarmModelVersions.alarmModelVersionSummaries', props);
    return resource.getResponseField('alarmModelVersionSummaries') as unknown as shapes.IoTEventsAlarmModelVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarmModelVersions',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListAlarmModelVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarmModelVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTEventsResponsesListAlarmModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListAlarmModelsRequest) {
  }

  public get alarmModelSummaries(): shapes.IoTEventsAlarmModelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarmModels',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListAlarmModels.alarmModelSummaries'),
        outputPath: 'alarmModelSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarmModels.alarmModelSummaries', props);
    return resource.getResponseField('alarmModelSummaries') as unknown as shapes.IoTEventsAlarmModelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlarmModels',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListAlarmModels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlarmModels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
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

export class IoTEventsResponsesListInputRoutings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsListInputRoutingsRequest) {
  }

  public get routedResources(): shapes.IoTEventsRoutedResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInputRoutings',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListInputRoutings.routedResources'),
        outputPath: 'routedResources',
        parameters: {
          inputIdentifier: {
            iotEventsInputIdentifier: {
              inputName: this.__input.inputIdentifier.iotEventsInputIdentifier?.inputName,
            },
            iotSiteWiseInputIdentifier: {
              iotSiteWiseAssetModelPropertyIdentifier: {
                assetModelId: this.__input.inputIdentifier.iotSiteWiseInputIdentifier?.iotSiteWiseAssetModelPropertyIdentifier?.assetModelId,
                propertyId: this.__input.inputIdentifier.iotSiteWiseInputIdentifier?.iotSiteWiseAssetModelPropertyIdentifier?.propertyId,
              },
            },
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInputRoutings.routedResources', props);
    return resource.getResponseField('routedResources') as unknown as shapes.IoTEventsRoutedResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInputRoutings',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.ListInputRoutings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          inputIdentifier: {
            iotEventsInputIdentifier: {
              inputName: this.__input.inputIdentifier.iotEventsInputIdentifier?.inputName,
            },
            iotSiteWiseInputIdentifier: {
              iotSiteWiseAssetModelPropertyIdentifier: {
                assetModelId: this.__input.inputIdentifier.iotSiteWiseInputIdentifier?.iotSiteWiseAssetModelPropertyIdentifier?.assetModelId,
                propertyId: this.__input.inputIdentifier.iotSiteWiseInputIdentifier?.iotSiteWiseAssetModelPropertyIdentifier?.propertyId,
              },
            },
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInputRoutings.nextToken', props);
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

export class IoTEventsResponsesStartDetectorModelAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsStartDetectorModelAnalysisRequest) {
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDetectorModelAnalysis',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.StartDetectorModelAnalysis.analysisId'),
        outputPath: 'analysisId',
        parameters: {
          detectorModelDefinition: {
            states: this.__input.detectorModelDefinition.states,
            initialStateName: this.__input.detectorModelDefinition.initialStateName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDetectorModelAnalysis.analysisId', props);
    return resource.getResponseField('analysisId') as unknown as string;
  }

}

export class IoTEventsResponsesUpdateAlarmModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsUpdateAlarmModelRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateAlarmModel.creationTime'),
        outputPath: 'creationTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlarmModel.creationTime', props);
    return resource.getResponseField('creationTime') as unknown as string;
  }

  public get alarmModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateAlarmModel.alarmModelArn'),
        outputPath: 'alarmModelArn',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlarmModel.alarmModelArn', props);
    return resource.getResponseField('alarmModelArn') as unknown as string;
  }

  public get alarmModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateAlarmModel.alarmModelVersion'),
        outputPath: 'alarmModelVersion',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlarmModel.alarmModelVersion', props);
    return resource.getResponseField('alarmModelVersion') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateAlarmModel.lastUpdateTime'),
        outputPath: 'lastUpdateTime',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlarmModel.lastUpdateTime', props);
    return resource.getResponseField('lastUpdateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlarmModel',
        service: 'IoTEvents',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEvents.UpdateAlarmModel.status'),
        outputPath: 'status',
        parameters: {
          alarmModelName: this.__input.alarmModelName,
          alarmModelDescription: this.__input.alarmModelDescription,
          roleArn: this.__input.roleArn,
          severity: this.__input.severity,
          alarmRule: {
            simpleRule: {
              inputProperty: this.__input.alarmRule.simpleRule?.inputProperty,
              comparisonOperator: this.__input.alarmRule.simpleRule?.comparisonOperator,
              threshold: this.__input.alarmRule.simpleRule?.threshold,
            },
          },
          alarmNotification: {
            notificationActions: this.__input.alarmNotification?.notificationActions,
          },
          alarmEventActions: {
            alarmActions: this.__input.alarmEventActions?.alarmActions,
          },
          alarmCapabilities: {
            initializationConfiguration: {
              disabledOnInitialization: this.__input.alarmCapabilities?.initializationConfiguration?.disabledOnInitialization,
            },
            acknowledgeFlow: {
              enabled: this.__input.alarmCapabilities?.acknowledgeFlow?.enabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAlarmModel.status', props);
    return resource.getResponseField('status') as unknown as string;
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

