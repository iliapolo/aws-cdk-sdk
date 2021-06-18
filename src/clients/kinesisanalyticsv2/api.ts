import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisAnalyticsV2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest): KinesisAnalyticsV2AddApplicationCloudWatchLoggingOption {
    return new KinesisAnalyticsV2AddApplicationCloudWatchLoggingOption(this, 'AddApplicationCloudWatchLoggingOption', this.__resources, input);
  }

  public addApplicationInput(input: shapes.KinesisAnalyticsV2AddApplicationInputRequest): KinesisAnalyticsV2AddApplicationInput {
    return new KinesisAnalyticsV2AddApplicationInput(this, 'AddApplicationInput', this.__resources, input);
  }

  public addApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest): KinesisAnalyticsV2AddApplicationInputProcessingConfiguration {
    return new KinesisAnalyticsV2AddApplicationInputProcessingConfiguration(this, 'AddApplicationInputProcessingConfiguration', this.__resources, input);
  }

  public addApplicationOutput(input: shapes.KinesisAnalyticsV2AddApplicationOutputRequest): KinesisAnalyticsV2AddApplicationOutput {
    return new KinesisAnalyticsV2AddApplicationOutput(this, 'AddApplicationOutput', this.__resources, input);
  }

  public addApplicationReferenceDataSource(input: shapes.KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest): KinesisAnalyticsV2AddApplicationReferenceDataSource {
    return new KinesisAnalyticsV2AddApplicationReferenceDataSource(this, 'AddApplicationReferenceDataSource', this.__resources, input);
  }

  public addApplicationVpcConfiguration(input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest): KinesisAnalyticsV2AddApplicationVpcConfiguration {
    return new KinesisAnalyticsV2AddApplicationVpcConfiguration(this, 'AddApplicationVpcConfiguration', this.__resources, input);
  }

  public createApplication(input: shapes.KinesisAnalyticsV2CreateApplicationRequest): KinesisAnalyticsV2CreateApplication {
    return new KinesisAnalyticsV2CreateApplication(this, 'CreateApplication', this.__resources, input);
  }

  public createApplicationPresignedUrl(input: shapes.KinesisAnalyticsV2CreateApplicationPresignedUrlRequest): KinesisAnalyticsV2CreateApplicationPresignedUrl {
    return new KinesisAnalyticsV2CreateApplicationPresignedUrl(this, 'CreateApplicationPresignedUrl', this.__resources, input);
  }

  public createApplicationSnapshot(input: shapes.KinesisAnalyticsV2CreateApplicationSnapshotRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplicationSnapshot'),
        parameters: {
          ApplicationName: input.applicationName,
          SnapshotName: input.snapshotName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateApplicationSnapshot', props);
  }

  public deleteApplication(input: shapes.KinesisAnalyticsV2DeleteApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          CreateTimestamp: input.createTimestamp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest): KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOption {
    return new KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOption(this, 'DeleteApplicationCloudWatchLoggingOption', this.__resources, input);
  }

  public deleteApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest): KinesisAnalyticsV2DeleteApplicationInputProcessingConfiguration {
    return new KinesisAnalyticsV2DeleteApplicationInputProcessingConfiguration(this, 'DeleteApplicationInputProcessingConfiguration', this.__resources, input);
  }

  public deleteApplicationOutput(input: shapes.KinesisAnalyticsV2DeleteApplicationOutputRequest): KinesisAnalyticsV2DeleteApplicationOutput {
    return new KinesisAnalyticsV2DeleteApplicationOutput(this, 'DeleteApplicationOutput', this.__resources, input);
  }

  public deleteApplicationReferenceDataSource(input: shapes.KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest): KinesisAnalyticsV2DeleteApplicationReferenceDataSource {
    return new KinesisAnalyticsV2DeleteApplicationReferenceDataSource(this, 'DeleteApplicationReferenceDataSource', this.__resources, input);
  }

  public deleteApplicationSnapshot(input: shapes.KinesisAnalyticsV2DeleteApplicationSnapshotRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationSnapshot'),
        parameters: {
          ApplicationName: input.applicationName,
          SnapshotName: input.snapshotName,
          SnapshotCreationTimestamp: input.snapshotCreationTimestamp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationSnapshot', props);
  }

  public deleteApplicationVpcConfiguration(input: shapes.KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest): KinesisAnalyticsV2DeleteApplicationVpcConfiguration {
    return new KinesisAnalyticsV2DeleteApplicationVpcConfiguration(this, 'DeleteApplicationVpcConfiguration', this.__resources, input);
  }

  public describeApplication(input: shapes.KinesisAnalyticsV2DescribeApplicationRequest): KinesisAnalyticsV2DescribeApplication {
    return new KinesisAnalyticsV2DescribeApplication(this, 'DescribeApplication', this.__resources, input);
  }

  public describeApplicationSnapshot(input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest): KinesisAnalyticsV2DescribeApplicationSnapshot {
    return new KinesisAnalyticsV2DescribeApplicationSnapshot(this, 'DescribeApplicationSnapshot', this.__resources, input);
  }

  public discoverInputSchema(input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest): KinesisAnalyticsV2DiscoverInputSchema {
    return new KinesisAnalyticsV2DiscoverInputSchema(this, 'DiscoverInputSchema', this.__resources, input);
  }

  public listApplicationSnapshots(input: shapes.KinesisAnalyticsV2ListApplicationSnapshotsRequest): KinesisAnalyticsV2ListApplicationSnapshots {
    return new KinesisAnalyticsV2ListApplicationSnapshots(this, 'ListApplicationSnapshots', this.__resources, input);
  }

  public listApplications(input: shapes.KinesisAnalyticsV2ListApplicationsRequest): KinesisAnalyticsV2ListApplications {
    return new KinesisAnalyticsV2ListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisAnalyticsV2ListTagsForResourceRequest): KinesisAnalyticsV2ListTagsForResource {
    return new KinesisAnalyticsV2ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startApplication(input: shapes.KinesisAnalyticsV2StartApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.StartApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          RunConfiguration: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: input.runConfiguration.flinkRunConfiguration?.allowNonRestoredState,
            },
            SqlRunConfigurations: input.runConfiguration.sqlRunConfigurations,
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: input.runConfiguration.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: input.runConfiguration.applicationRestoreConfiguration?.snapshotName,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartApplication', props);
  }

  public stopApplication(input: shapes.KinesisAnalyticsV2StopApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.StopApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          Force: input.force,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopApplication', props);
  }

  public tagResource(input: shapes.KinesisAnalyticsV2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.KinesisAnalyticsV2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.KinesisAnalyticsV2UpdateApplicationRequest): KinesisAnalyticsV2UpdateApplication {
    return new KinesisAnalyticsV2UpdateApplication(this, 'UpdateApplication', this.__resources, input);
  }

}

export class KinesisAnalyticsV2AddApplicationCloudWatchLoggingOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationCloudWatchLoggingOption.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationCloudWatchLoggingOption.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationCloudWatchLoggingOption.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationCloudWatchLoggingOption.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2AddApplicationInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationInputRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInput.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.input.inputSchema.recordEncoding,
              RecordColumns: this.input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInput.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInput.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.input.inputSchema.recordEncoding,
              RecordColumns: this.input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInput.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get inputDescriptions(): shapes.KinesisAnalyticsV2InputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInput.InputDescriptions'),
        outputPath: 'InputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.input.inputSchema.recordEncoding,
              RecordColumns: this.input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInput.InputDescriptions', props);
    return resource.getResponseField('InputDescriptions') as unknown as shapes.KinesisAnalyticsV2InputDescription[];
  }

}

export class KinesisAnalyticsV2AddApplicationInputProcessingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInputProcessingConfiguration.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInputProcessingConfiguration.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get inputId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInputProcessingConfiguration.InputId'),
        outputPath: 'InputId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration.InputId', props);
    return resource.getResponseField('InputId') as unknown as string;
  }

  public get inputProcessingConfigurationDescription(): KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription {
    return new KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription(this, 'InputProcessingConfigurationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
    super(scope, id);
  }

  public get inputLambdaProcessorDescription(): KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription {
    return new KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription(this, 'InputLambdaProcessorDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2AddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN'),
        outputPath: 'InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN', props);
    return resource.getResponseField('InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN'),
        outputPath: 'InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN', props);
    return resource.getResponseField('InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN') as unknown as string;
  }

}

export class KinesisAnalyticsV2AddApplicationOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationOutputRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationOutput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationOutput.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Output: {
            Name: this.input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationOutput.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationOutput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationOutput.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Output: {
            Name: this.input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationOutput.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get outputDescriptions(): shapes.KinesisAnalyticsV2OutputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationOutput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationOutput.OutputDescriptions'),
        outputPath: 'OutputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          Output: {
            Name: this.input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationOutput.OutputDescriptions', props);
    return resource.getResponseField('OutputDescriptions') as unknown as shapes.KinesisAnalyticsV2OutputDescription[];
  }

}

export class KinesisAnalyticsV2AddApplicationReferenceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationReferenceDataSource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationReferenceDataSource.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationReferenceDataSource.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationReferenceDataSource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationReferenceDataSource.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationReferenceDataSource.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get referenceDataSourceDescriptions(): shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationReferenceDataSource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationReferenceDataSource.ReferenceDataSourceDescriptions'),
        outputPath: 'ReferenceDataSourceDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationReferenceDataSource.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2AddApplicationVpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get vpcConfigurationDescription(): KinesisAnalyticsV2AddApplicationVpcConfigurationVpcConfigurationDescription {
    return new KinesisAnalyticsV2AddApplicationVpcConfigurationVpcConfigurationDescription(this, 'VpcConfigurationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2AddApplicationVpcConfigurationVpcConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest) {
    super(scope, id);
  }

  public get vpcConfigurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcConfigurationId'),
        outputPath: 'VpcConfigurationDescription.VpcConfigurationId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcConfigurationId', props);
    return resource.getResponseField('VpcConfigurationDescription.VpcConfigurationId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcId'),
        outputPath: 'VpcConfigurationDescription.VpcId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcId', props);
    return resource.getResponseField('VpcConfigurationDescription.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.VpcConfigurationDescription.SubnetIds'),
        outputPath: 'VpcConfigurationDescription.SubnetIds',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.SubnetIds', props);
    return resource.getResponseField('VpcConfigurationDescription.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.AddApplicationVpcConfiguration.VpcConfigurationDescription.SecurityGroupIds'),
        outputPath: 'VpcConfigurationDescription.SecurityGroupIds',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfigurationDescription.SecurityGroupIds') as unknown as string[];
  }

}

export class KinesisAnalyticsV2CreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationDetail(): KinesisAnalyticsV2CreateApplicationApplicationDetail {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetail(this, 'ApplicationDetail', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationARN'),
        outputPath: 'ApplicationDetail.ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationARN') as unknown as string;
  }

  public get applicationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationDescription'),
        outputPath: 'ApplicationDetail.ApplicationDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationDescription') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationName'),
        outputPath: 'ApplicationDetail.ApplicationName',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationName') as unknown as string;
  }

  public get runtimeEnvironment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.RuntimeEnvironment'),
        outputPath: 'ApplicationDetail.RuntimeEnvironment',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.RuntimeEnvironment', props);
    return resource.getResponseField('ApplicationDetail.RuntimeEnvironment') as unknown as string;
  }

  public get serviceExecutionRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ServiceExecutionRole'),
        outputPath: 'ApplicationDetail.ServiceExecutionRole',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ServiceExecutionRole', props);
    return resource.getResponseField('ApplicationDetail.ServiceExecutionRole') as unknown as string;
  }

  public get applicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationStatus'),
        outputPath: 'ApplicationDetail.ApplicationStatus',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationStatus', props);
    return resource.getResponseField('ApplicationDetail.ApplicationStatus') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationVersionId'),
        outputPath: 'ApplicationDetail.ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationDetail.ApplicationVersionId') as unknown as number;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.CreateTimestamp'),
        outputPath: 'ApplicationDetail.CreateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.CreateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.CreateTimestamp') as unknown as string;
  }

  public get lastUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.LastUpdateTimestamp'),
        outputPath: 'ApplicationDetail.LastUpdateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescription(this, 'ApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'ApplicationDetail.CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this, 'SqlApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this, 'ApplicationCodeConfigurationDescription', this.__resources, this.input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this, 'RunConfigurationDescription', this.__resources, this.input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this, 'FlinkApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this, 'EnvironmentPropertyDescriptions', this.__resources, this.input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this, 'ApplicationSnapshotConfigurationDescription', this.__resources, this.input);
  }

  public get vpcConfigurationDescriptions(): shapes.KinesisAnalyticsV2VpcConfigurationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get inputDescriptions(): shapes.KinesisAnalyticsV2InputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions') as unknown as shapes.KinesisAnalyticsV2InputDescription[];
  }

  public get outputDescriptions(): shapes.KinesisAnalyticsV2OutputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions') as unknown as shapes.KinesisAnalyticsV2OutputDescription[];
  }

  public get referenceDataSourceDescriptions(): shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get codeContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this, 'CodeContentDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get textContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent') as unknown as string;
  }

  public get codeMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this, 'S3ApplicationCodeLocationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get bucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN') as unknown as string;
  }

  public get fileKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this, 'ApplicationRestoreConfigurationDescription', this.__resources, this.input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this, 'FlinkRunConfigurationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType') as unknown as string;
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get allowNonRestoredState(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this, 'CheckpointConfigurationDescription', this.__resources, this.input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this, 'MonitoringConfigurationDescription', this.__resources, this.input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this, 'ParallelismConfigurationDescription', this.__resources, this.input);
  }

  public get jobPlanDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get checkpointingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled') as unknown as boolean;
  }

  public get checkpointInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval') as unknown as number;
  }

  public get minPauseBetweenCheckpoints(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get metricsLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get parallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism') as unknown as number;
  }

  public get parallelismPerKpu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU') as unknown as number;
  }

  public get currentParallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism') as unknown as number;
  }

  public get autoScalingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get propertyGroupDescriptions(): shapes.KinesisAnalyticsV2PropertyGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2CreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
    super(scope, id);
  }

  public get snapshotsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          RuntimeEnvironment: this.input.runtimeEnvironment,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2CreateApplicationPresignedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2CreateApplicationPresignedUrlRequest) {
    super(scope, id);
  }

  public get authorizedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplicationPresignedUrl',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.CreateApplicationPresignedUrl.AuthorizedUrl'),
        outputPath: 'AuthorizedUrl',
        parameters: {
          ApplicationName: this.input.applicationName,
          UrlType: this.input.urlType,
          SessionExpirationDurationInSeconds: this.input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplicationPresignedUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationCloudWatchLoggingOption.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationCloudWatchLoggingOption.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationCloudWatchLoggingOption.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationCloudWatchLoggingOption.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2DeleteApplicationInputProcessingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationInputProcessingConfiguration.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationInputProcessingConfiguration.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationInputProcessingConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationInputProcessingConfiguration.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          InputId: this.input.inputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationInputProcessingConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2DeleteApplicationOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DeleteApplicationOutputRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationOutput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationOutput.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          OutputId: this.input.outputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationOutput.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationOutput',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationOutput.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          OutputId: this.input.outputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationOutput.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2DeleteApplicationReferenceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationReferenceDataSource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationReferenceDataSource.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ReferenceId: this.input.referenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationReferenceDataSource.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationReferenceDataSource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationReferenceDataSource.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ReferenceId: this.input.referenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationReferenceDataSource.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2DeleteApplicationVpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationVpcConfiguration.ApplicationARN'),
        outputPath: 'ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfigurationId: this.input.vpcConfigurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationVpcConfiguration.ApplicationARN', props);
    return resource.getResponseField('ApplicationARN') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationVpcConfiguration',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DeleteApplicationVpcConfiguration.ApplicationVersionId'),
        outputPath: 'ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          VpcConfigurationId: this.input.vpcConfigurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplicationVpcConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2DescribeApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationDetail(): KinesisAnalyticsV2DescribeApplicationApplicationDetail {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetail(this, 'ApplicationDetail', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationARN'),
        outputPath: 'ApplicationDetail.ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationARN') as unknown as string;
  }

  public get applicationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationDescription'),
        outputPath: 'ApplicationDetail.ApplicationDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationDescription') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationName'),
        outputPath: 'ApplicationDetail.ApplicationName',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationName') as unknown as string;
  }

  public get runtimeEnvironment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.RuntimeEnvironment'),
        outputPath: 'ApplicationDetail.RuntimeEnvironment',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.RuntimeEnvironment', props);
    return resource.getResponseField('ApplicationDetail.RuntimeEnvironment') as unknown as string;
  }

  public get serviceExecutionRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ServiceExecutionRole'),
        outputPath: 'ApplicationDetail.ServiceExecutionRole',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ServiceExecutionRole', props);
    return resource.getResponseField('ApplicationDetail.ServiceExecutionRole') as unknown as string;
  }

  public get applicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationStatus'),
        outputPath: 'ApplicationDetail.ApplicationStatus',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationStatus', props);
    return resource.getResponseField('ApplicationDetail.ApplicationStatus') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationVersionId'),
        outputPath: 'ApplicationDetail.ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationDetail.ApplicationVersionId') as unknown as number;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.CreateTimestamp'),
        outputPath: 'ApplicationDetail.CreateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.CreateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.CreateTimestamp') as unknown as string;
  }

  public get lastUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.LastUpdateTimestamp'),
        outputPath: 'ApplicationDetail.LastUpdateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescription(this, 'ApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'ApplicationDetail.CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this, 'SqlApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this, 'ApplicationCodeConfigurationDescription', this.__resources, this.input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this, 'RunConfigurationDescription', this.__resources, this.input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this, 'FlinkApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this, 'EnvironmentPropertyDescriptions', this.__resources, this.input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this, 'ApplicationSnapshotConfigurationDescription', this.__resources, this.input);
  }

  public get vpcConfigurationDescriptions(): shapes.KinesisAnalyticsV2VpcConfigurationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get inputDescriptions(): shapes.KinesisAnalyticsV2InputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions') as unknown as shapes.KinesisAnalyticsV2InputDescription[];
  }

  public get outputDescriptions(): shapes.KinesisAnalyticsV2OutputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions') as unknown as shapes.KinesisAnalyticsV2OutputDescription[];
  }

  public get referenceDataSourceDescriptions(): shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get codeContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this, 'CodeContentDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get textContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent') as unknown as string;
  }

  public get codeMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this, 'S3ApplicationCodeLocationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get bucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN') as unknown as string;
  }

  public get fileKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this, 'ApplicationRestoreConfigurationDescription', this.__resources, this.input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this, 'FlinkRunConfigurationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType') as unknown as string;
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get allowNonRestoredState(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this, 'CheckpointConfigurationDescription', this.__resources, this.input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this, 'MonitoringConfigurationDescription', this.__resources, this.input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this, 'ParallelismConfigurationDescription', this.__resources, this.input);
  }

  public get jobPlanDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get checkpointingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled') as unknown as boolean;
  }

  public get checkpointInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval') as unknown as number;
  }

  public get minPauseBetweenCheckpoints(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get metricsLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get parallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism') as unknown as number;
  }

  public get parallelismPerKpu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU') as unknown as number;
  }

  public get currentParallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism') as unknown as number;
  }

  public get autoScalingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get propertyGroupDescriptions(): shapes.KinesisAnalyticsV2PropertyGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2DescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
    super(scope, id);
  }

  public get snapshotsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          IncludeAdditionalDetails: this.input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2DescribeApplicationSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest) {
    super(scope, id);
  }

  public get snapshotDetails(): KinesisAnalyticsV2DescribeApplicationSnapshotSnapshotDetails {
    return new KinesisAnalyticsV2DescribeApplicationSnapshotSnapshotDetails(this, 'SnapshotDetails', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DescribeApplicationSnapshotSnapshotDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest) {
    super(scope, id);
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplicationSnapshot.SnapshotDetails.SnapshotName'),
        outputPath: 'SnapshotDetails.SnapshotName',
        parameters: {
          ApplicationName: this.input.applicationName,
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotName', props);
    return resource.getResponseField('SnapshotDetails.SnapshotName') as unknown as string;
  }

  public get snapshotStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplicationSnapshot.SnapshotDetails.SnapshotStatus'),
        outputPath: 'SnapshotDetails.SnapshotStatus',
        parameters: {
          ApplicationName: this.input.applicationName,
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotStatus', props);
    return resource.getResponseField('SnapshotDetails.SnapshotStatus') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplicationSnapshot.SnapshotDetails.ApplicationVersionId'),
        outputPath: 'SnapshotDetails.ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationSnapshot.SnapshotDetails.ApplicationVersionId', props);
    return resource.getResponseField('SnapshotDetails.ApplicationVersionId') as unknown as number;
  }

  public get snapshotCreationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplicationSnapshot',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DescribeApplicationSnapshot.SnapshotDetails.SnapshotCreationTimestamp'),
        outputPath: 'SnapshotDetails.SnapshotCreationTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotCreationTimestamp', props);
    return resource.getResponseField('SnapshotDetails.SnapshotCreationTimestamp') as unknown as string;
  }

}

export class KinesisAnalyticsV2DiscoverInputSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get inputSchema(): KinesisAnalyticsV2DiscoverInputSchemaInputSchema {
    return new KinesisAnalyticsV2DiscoverInputSchemaInputSchema(this, 'InputSchema', this.__resources, this.input);
  }

  public get parsedInputRecords(): string[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.ParsedInputRecords'),
        outputPath: 'ParsedInputRecords',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.ParsedInputRecords', props);
    return resource.getResponseField('ParsedInputRecords') as unknown as string[][];
  }

  public get processedInputRecords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.ProcessedInputRecords'),
        outputPath: 'ProcessedInputRecords',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.ProcessedInputRecords', props);
    return resource.getResponseField('ProcessedInputRecords') as unknown as string[];
  }

  public get rawInputRecords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.RawInputRecords'),
        outputPath: 'RawInputRecords',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.RawInputRecords', props);
    return resource.getResponseField('RawInputRecords') as unknown as string[];
  }

}

export class KinesisAnalyticsV2DiscoverInputSchemaInputSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get recordFormat(): KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormat {
    return new KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormat(this, 'RecordFormat', this.__resources, this.input);
  }

  public get recordEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordEncoding'),
        outputPath: 'InputSchema.RecordEncoding',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordEncoding', props);
    return resource.getResponseField('InputSchema.RecordEncoding') as unknown as string;
  }

  public get recordColumns(): shapes.KinesisAnalyticsV2RecordColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordColumns'),
        outputPath: 'InputSchema.RecordColumns',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordColumns', props);
    return resource.getResponseField('InputSchema.RecordColumns') as unknown as shapes.KinesisAnalyticsV2RecordColumn[];
  }

}

export class KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormat extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get recordFormatType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType'),
        outputPath: 'InputSchema.RecordFormat.RecordFormatType',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType', props);
    return resource.getResponseField('InputSchema.RecordFormat.RecordFormatType') as unknown as string;
  }

  public get mappingParameters(): KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParameters {
    return new KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParameters(this, 'MappingParameters', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get jsonMappingParameters(): KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    return new KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters(this, 'JsonMappingParameters', this.__resources, this.input);
  }

  public get csvMappingParameters(): KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    return new KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters(this, 'CsvMappingParameters', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get recordRowPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath') as unknown as string;
  }

}

export class KinesisAnalyticsV2DiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get recordRowDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter') as unknown as string;
  }

  public get recordColumnDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter',
        parameters: {
          ResourceARN: this.input.resourceArn,
          ServiceExecutionRole: this.input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter') as unknown as string;
  }

}

export class KinesisAnalyticsV2ListApplicationSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2ListApplicationSnapshotsRequest) {
    super(scope, id);
  }

  public get snapshotSummaries(): shapes.KinesisAnalyticsV2SnapshotDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplicationSnapshots',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.ListApplicationSnapshots.SnapshotSummaries'),
        outputPath: 'SnapshotSummaries',
        parameters: {
          ApplicationName: this.input.applicationName,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplicationSnapshots.SnapshotSummaries', props);
    return resource.getResponseField('SnapshotSummaries') as unknown as shapes.KinesisAnalyticsV2SnapshotDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplicationSnapshots',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.ListApplicationSnapshots.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationName: this.input.applicationName,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplicationSnapshots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisAnalyticsV2ListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2ListApplicationsRequest) {
    super(scope, id);
  }

  public get applicationSummaries(): shapes.KinesisAnalyticsV2ApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.ListApplications.ApplicationSummaries'),
        outputPath: 'ApplicationSummaries',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.ApplicationSummaries', props);
    return resource.getResponseField('ApplicationSummaries') as unknown as shapes.KinesisAnalyticsV2ApplicationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.ListApplications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisAnalyticsV2ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.KinesisAnalyticsV2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KinesisAnalyticsV2Tag[];
  }

}

export class KinesisAnalyticsV2UpdateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get applicationDetail(): KinesisAnalyticsV2UpdateApplicationApplicationDetail {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetail(this, 'ApplicationDetail', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationARN'),
        outputPath: 'ApplicationDetail.ApplicationARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationARN') as unknown as string;
  }

  public get applicationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationDescription'),
        outputPath: 'ApplicationDetail.ApplicationDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationDescription') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationName'),
        outputPath: 'ApplicationDetail.ApplicationName',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationName') as unknown as string;
  }

  public get runtimeEnvironment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.RuntimeEnvironment'),
        outputPath: 'ApplicationDetail.RuntimeEnvironment',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.RuntimeEnvironment', props);
    return resource.getResponseField('ApplicationDetail.RuntimeEnvironment') as unknown as string;
  }

  public get serviceExecutionRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ServiceExecutionRole'),
        outputPath: 'ApplicationDetail.ServiceExecutionRole',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ServiceExecutionRole', props);
    return resource.getResponseField('ApplicationDetail.ServiceExecutionRole') as unknown as string;
  }

  public get applicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationStatus'),
        outputPath: 'ApplicationDetail.ApplicationStatus',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationStatus', props);
    return resource.getResponseField('ApplicationDetail.ApplicationStatus') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationVersionId'),
        outputPath: 'ApplicationDetail.ApplicationVersionId',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationDetail.ApplicationVersionId') as unknown as number;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.CreateTimestamp'),
        outputPath: 'ApplicationDetail.CreateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.CreateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.CreateTimestamp') as unknown as string;
  }

  public get lastUpdateTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.LastUpdateTimestamp'),
        outputPath: 'ApplicationDetail.LastUpdateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescription(this, 'ApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'ApplicationDetail.CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this, 'SqlApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this, 'ApplicationCodeConfigurationDescription', this.__resources, this.input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this, 'RunConfigurationDescription', this.__resources, this.input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this, 'FlinkApplicationConfigurationDescription', this.__resources, this.input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this, 'EnvironmentPropertyDescriptions', this.__resources, this.input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this, 'ApplicationSnapshotConfigurationDescription', this.__resources, this.input);
  }

  public get vpcConfigurationDescriptions(): shapes.KinesisAnalyticsV2VpcConfigurationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get inputDescriptions(): shapes.KinesisAnalyticsV2InputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions') as unknown as shapes.KinesisAnalyticsV2InputDescription[];
  }

  public get outputDescriptions(): shapes.KinesisAnalyticsV2OutputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions') as unknown as shapes.KinesisAnalyticsV2OutputDescription[];
  }

  public get referenceDataSourceDescriptions(): shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get codeContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this, 'CodeContentDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get textContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent') as unknown as string;
  }

  public get codeMd5(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5') as unknown as string;
  }

  public get codeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this, 'S3ApplicationCodeLocationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get bucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN') as unknown as string;
  }

  public get fileKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey') as unknown as string;
  }

  public get objectVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this, 'ApplicationRestoreConfigurationDescription', this.__resources, this.input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this, 'FlinkRunConfigurationDescription', this.__resources, this.input);
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get applicationRestoreType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType') as unknown as string;
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get allowNonRestoredState(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this, 'CheckpointConfigurationDescription', this.__resources, this.input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this, 'MonitoringConfigurationDescription', this.__resources, this.input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this, 'ParallelismConfigurationDescription', this.__resources, this.input);
  }

  public get jobPlanDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get checkpointingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled') as unknown as boolean;
  }

  public get checkpointInterval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval') as unknown as number;
  }

  public get minPauseBetweenCheckpoints(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get metricsLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get configurationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType') as unknown as string;
  }

  public get parallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism') as unknown as number;
  }

  public get parallelismPerKpu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU') as unknown as number;
  }

  public get currentParallelism(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism') as unknown as number;
  }

  public get autoScalingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get propertyGroupDescriptions(): shapes.KinesisAnalyticsV2PropertyGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2UpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
    super(scope, id);
  }

  public get snapshotsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalyticsV2',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalyticsV2.UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled'),
        outputPath: 'ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled',
        parameters: {
          ApplicationName: this.input.applicationName,
          CurrentApplicationVersionId: this.input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

