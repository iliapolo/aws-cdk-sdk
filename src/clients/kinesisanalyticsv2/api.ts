import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisAnalyticsV2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest): KinesisAnalyticsV2ResponsesAddApplicationCloudWatchLoggingOption {
    return new KinesisAnalyticsV2ResponsesAddApplicationCloudWatchLoggingOption(this, this.__resources, input);
  }

  public addApplicationInput(input: shapes.KinesisAnalyticsV2AddApplicationInputRequest): KinesisAnalyticsV2ResponsesAddApplicationInput {
    return new KinesisAnalyticsV2ResponsesAddApplicationInput(this, this.__resources, input);
  }

  public addApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest): KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfiguration {
    return new KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfiguration(this, this.__resources, input);
  }

  public addApplicationOutput(input: shapes.KinesisAnalyticsV2AddApplicationOutputRequest): KinesisAnalyticsV2ResponsesAddApplicationOutput {
    return new KinesisAnalyticsV2ResponsesAddApplicationOutput(this, this.__resources, input);
  }

  public addApplicationReferenceDataSource(input: shapes.KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest): KinesisAnalyticsV2ResponsesAddApplicationReferenceDataSource {
    return new KinesisAnalyticsV2ResponsesAddApplicationReferenceDataSource(this, this.__resources, input);
  }

  public addApplicationVpcConfiguration(input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest): KinesisAnalyticsV2ResponsesAddApplicationVpcConfiguration {
    return new KinesisAnalyticsV2ResponsesAddApplicationVpcConfiguration(this, this.__resources, input);
  }

  public createApplication(input: shapes.KinesisAnalyticsV2CreateApplicationRequest): KinesisAnalyticsV2ResponsesCreateApplication {
    return new KinesisAnalyticsV2ResponsesCreateApplication(this, this.__resources, input);
  }

  public createApplicationPresignedUrl(input: shapes.KinesisAnalyticsV2CreateApplicationPresignedUrlRequest): KinesisAnalyticsV2ResponsesCreateApplicationPresignedUrl {
    return new KinesisAnalyticsV2ResponsesCreateApplicationPresignedUrl(this, this.__resources, input);
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

  public deleteApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest): KinesisAnalyticsV2ResponsesDeleteApplicationCloudWatchLoggingOption {
    return new KinesisAnalyticsV2ResponsesDeleteApplicationCloudWatchLoggingOption(this, this.__resources, input);
  }

  public deleteApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest): KinesisAnalyticsV2ResponsesDeleteApplicationInputProcessingConfiguration {
    return new KinesisAnalyticsV2ResponsesDeleteApplicationInputProcessingConfiguration(this, this.__resources, input);
  }

  public deleteApplicationOutput(input: shapes.KinesisAnalyticsV2DeleteApplicationOutputRequest): KinesisAnalyticsV2ResponsesDeleteApplicationOutput {
    return new KinesisAnalyticsV2ResponsesDeleteApplicationOutput(this, this.__resources, input);
  }

  public deleteApplicationReferenceDataSource(input: shapes.KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest): KinesisAnalyticsV2ResponsesDeleteApplicationReferenceDataSource {
    return new KinesisAnalyticsV2ResponsesDeleteApplicationReferenceDataSource(this, this.__resources, input);
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

  public deleteApplicationVpcConfiguration(input: shapes.KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest): KinesisAnalyticsV2ResponsesDeleteApplicationVpcConfiguration {
    return new KinesisAnalyticsV2ResponsesDeleteApplicationVpcConfiguration(this, this.__resources, input);
  }

  public describeApplication(input: shapes.KinesisAnalyticsV2DescribeApplicationRequest): KinesisAnalyticsV2ResponsesDescribeApplication {
    return new KinesisAnalyticsV2ResponsesDescribeApplication(this, this.__resources, input);
  }

  public describeApplicationSnapshot(input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest): KinesisAnalyticsV2ResponsesDescribeApplicationSnapshot {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationSnapshot(this, this.__resources, input);
  }

  public discoverInputSchema(input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest): KinesisAnalyticsV2ResponsesDiscoverInputSchema {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchema(this, this.__resources, input);
  }

  public listApplicationSnapshots(input: shapes.KinesisAnalyticsV2ListApplicationSnapshotsRequest): KinesisAnalyticsV2ResponsesListApplicationSnapshots {
    return new KinesisAnalyticsV2ResponsesListApplicationSnapshots(this, this.__resources, input);
  }

  public listApplications(input: shapes.KinesisAnalyticsV2ListApplicationsRequest): KinesisAnalyticsV2ResponsesListApplications {
    return new KinesisAnalyticsV2ResponsesListApplications(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisAnalyticsV2ListTagsForResourceRequest): KinesisAnalyticsV2ResponsesListTagsForResource {
    return new KinesisAnalyticsV2ResponsesListTagsForResource(this, this.__resources, input);
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

  public updateApplication(input: shapes.KinesisAnalyticsV2UpdateApplicationRequest): KinesisAnalyticsV2ResponsesUpdateApplication {
    return new KinesisAnalyticsV2ResponsesUpdateApplication(this, this.__resources, input);
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationCloudWatchLoggingOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.__input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationCloudWatchLoggingOption.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.__input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationCloudWatchLoggingOption.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: this.__input.cloudWatchLoggingOption.logStreamArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationInputRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.__input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.__input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.__input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.__input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.__input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.input.inputSchema.recordEncoding,
              RecordColumns: this.__input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInput.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.__input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.__input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.__input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.__input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.__input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.input.inputSchema.recordEncoding,
              RecordColumns: this.__input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInput.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Input: {
            NamePrefix: this.__input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: this.__input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: this.__input.input.kinesisStreamsInput?.resourceArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: this.__input.input.kinesisFirehoseInput?.resourceArn,
            },
            InputParallelism: {
              Count: this.__input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.input.inputSchema.recordEncoding,
              RecordColumns: this.__input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInput.InputDescriptions', props);
    return resource.getResponseField('InputDescriptions') as unknown as shapes.KinesisAnalyticsV2InputDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInputProcessingConfiguration.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInputProcessingConfiguration.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInputProcessingConfiguration.InputId', props);
    return resource.getResponseField('InputId') as unknown as string;
  }

  public get inputProcessingConfigurationDescription(): KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
  }

  public get inputLambdaProcessorDescription(): KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription {
    return new KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationInputProcessingConfigurationInputProcessingConfigurationDescriptionInputLambdaProcessorDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.ResourceARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationInputProcessingConfiguration.InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN', props);
    return resource.getResponseField('InputProcessingConfigurationDescription.InputLambdaProcessorDescription.RoleARN') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationOutputRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Output: {
            Name: this.__input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.__input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.__input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.__input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.__input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationOutput.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Output: {
            Name: this.__input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.__input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.__input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.__input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.__input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationOutput.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          Output: {
            Name: this.__input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: this.__input.output.kinesisStreamsOutput?.resourceArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: this.__input.output.kinesisFirehoseOutput?.resourceArn,
            },
            LambdaOutput: {
              ResourceARN: this.__input.output.lambdaOutput?.resourceArn,
            },
            DestinationSchema: {
              RecordFormatType: this.__input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationOutput.OutputDescriptions', props);
    return resource.getResponseField('OutputDescriptions') as unknown as shapes.KinesisAnalyticsV2OutputDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationReferenceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.__input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.__input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.__input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.__input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationReferenceDataSource.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.__input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.__input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.__input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.__input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationReferenceDataSource.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: this.__input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: this.__input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: this.__input.referenceDataSource.s3ReferenceDataSource?.fileKey,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: this.__input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: this.__input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: this.__input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: this.__input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationReferenceDataSource.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

  public get vpcConfigurationDescription(): KinesisAnalyticsV2ResponsesAddApplicationVpcConfigurationVpcConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesAddApplicationVpcConfigurationVpcConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesAddApplicationVpcConfigurationVpcConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2AddApplicationVpcConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcConfigurationId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.VpcId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.SubnetIds', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfiguration: {
            SubnetIds: this.__input.vpcConfiguration.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration.securityGroupIds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddApplicationVpcConfiguration.VpcConfigurationDescription.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfigurationDescription.SecurityGroupIds') as unknown as string[];
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
  }

  public get applicationDetail(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetail {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetail(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationDescription', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationName', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.RuntimeEnvironment', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ServiceExecutionRole', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationStatus', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.CreateTimestamp', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this.__scope, this.__resources, this.__input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          RuntimeEnvironment: this.__input.runtimeEnvironment,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          ApplicationConfiguration: {
            SqlApplicationConfiguration: {
              Inputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.inputs,
              Outputs: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.outputs,
              ReferenceDataSources: this.__input.applicationConfiguration?.sqlApplicationConfiguration?.referenceDataSources,
            },
            FlinkApplicationConfiguration: {
              CheckpointConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.configurationType,
                CheckpointingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointingEnabled,
                CheckpointInterval: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.checkpointInterval,
                MinPauseBetweenCheckpoints: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.checkpointConfiguration?.minPauseBetweenCheckpoints,
              },
              MonitoringConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.configurationType,
                MetricsLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.metricsLevel,
                LogLevel: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.monitoringConfiguration?.logLevel,
              },
              ParallelismConfiguration: {
                ConfigurationType: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.configurationType,
                Parallelism: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelism,
                ParallelismPerKPU: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.parallelismPerKpu,
                AutoScalingEnabled: this.__input.applicationConfiguration?.flinkApplicationConfiguration?.parallelismConfiguration?.autoScalingEnabled,
              },
            },
            EnvironmentProperties: {
              PropertyGroups: this.__input.applicationConfiguration?.environmentProperties?.propertyGroups,
            },
            ApplicationCodeConfiguration: {
              CodeContent: {
                TextContent: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.textContent,
                ZipFileContent: {
                },
                S3ContentLocation: {
                  BucketARN: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.bucketArn,
                  FileKey: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.fileKey,
                  ObjectVersion: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContent?.s3ContentLocation?.objectVersion,
                },
              },
              CodeContentType: this.__input.applicationConfiguration?.applicationCodeConfiguration.codeContentType,
            },
            ApplicationSnapshotConfiguration: {
              SnapshotsEnabled: this.__input.applicationConfiguration?.applicationSnapshotConfiguration?.snapshotsEnabled,
            },
            VpcConfigurations: this.__input.applicationConfiguration?.vpcConfigurations,
          },
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesCreateApplicationPresignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2CreateApplicationPresignedUrlRequest) {
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
          ApplicationName: this.__input.applicationName,
          UrlType: this.__input.urlType,
          SessionExpirationDurationInSeconds: this.__input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplicationPresignedUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDeleteApplicationCloudWatchLoggingOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.__input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationCloudWatchLoggingOption.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.__input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationCloudWatchLoggingOption.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: this.__input.cloudWatchLoggingOptionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationCloudWatchLoggingOption.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesDeleteApplicationInputProcessingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationInputProcessingConfiguration.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          InputId: this.__input.inputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationInputProcessingConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesDeleteApplicationOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DeleteApplicationOutputRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          OutputId: this.__input.outputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationOutput.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          OutputId: this.__input.outputId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationOutput.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesDeleteApplicationReferenceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ReferenceId: this.__input.referenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationReferenceDataSource.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ReferenceId: this.__input.referenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationReferenceDataSource.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesDeleteApplicationVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfigurationId: this.__input.vpcConfigurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationVpcConfiguration.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          VpcConfigurationId: this.__input.vpcConfigurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplicationVpcConfiguration.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
  }

  public get applicationDetail(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetail {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetail(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationDescription', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationName', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.RuntimeEnvironment', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ServiceExecutionRole', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationStatus', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.CreateTimestamp', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this.__scope, this.__resources, this.__input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          IncludeAdditionalDetails: this.__input.includeAdditionalDetails,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest) {
  }

  public get snapshotDetails(): KinesisAnalyticsV2ResponsesDescribeApplicationSnapshotSnapshotDetails {
    return new KinesisAnalyticsV2ResponsesDescribeApplicationSnapshotSnapshotDetails(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDescribeApplicationSnapshotSnapshotDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DescribeApplicationSnapshotRequest) {
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
          ApplicationName: this.__input.applicationName,
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotName', props);
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
          ApplicationName: this.__input.applicationName,
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotStatus', props);
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
          ApplicationName: this.__input.applicationName,
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationSnapshot.SnapshotDetails.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplicationSnapshot.SnapshotDetails.SnapshotCreationTimestamp', props);
    return resource.getResponseField('SnapshotDetails.SnapshotCreationTimestamp') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
  }

  public get inputSchema(): KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchema {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchema(this.__scope, this.__resources, this.__input);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.ParsedInputRecords', props);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.ProcessedInputRecords', props);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.RawInputRecords', props);
    return resource.getResponseField('RawInputRecords') as unknown as string[];
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
  }

  public get recordFormat(): KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormat {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormat(this.__scope, this.__resources, this.__input);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordEncoding', props);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordColumns', props);
    return resource.getResponseField('InputSchema.RecordColumns') as unknown as shapes.KinesisAnalyticsV2RecordColumn[];
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormat {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType', props);
    return resource.getResponseField('InputSchema.RecordFormat.RecordFormatType') as unknown as string;
  }

  public get mappingParameters(): KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
  }

  public get jsonMappingParameters(): KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters(this.__scope, this.__resources, this.__input);
  }

  public get csvMappingParameters(): KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    return new KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2DiscoverInputSchemaRequest) {
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter', props);
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
          ResourceARN: this.__input.resourceArn,
          ServiceExecutionRole: this.__input.serviceExecutionRole,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesListApplicationSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2ListApplicationSnapshotsRequest) {
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
          ApplicationName: this.__input.applicationName,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplicationSnapshots.SnapshotSummaries', props);
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
          ApplicationName: this.__input.applicationName,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplicationSnapshots.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2ListApplicationsRequest) {
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.ApplicationSummaries', props);
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
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2ListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KinesisAnalyticsV2Tag[];
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
  }

  public get applicationDetail(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetail {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetail(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationDescription', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationName', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.RuntimeEnvironment', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ServiceExecutionRole', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationStatus', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationVersionId', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.CreateTimestamp', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get applicationConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
  }

  public get sqlApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get applicationCodeConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get runConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkApplicationConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get environmentPropertyDescriptions(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions(this.__scope, this.__resources, this.__input);
  }

  public get applicationSnapshotConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.VpcConfigurationDescriptions') as unknown as shapes.KinesisAnalyticsV2VpcConfigurationDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionSqlApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.InputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.OutputDescriptions', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.SqlApplicationConfigurationDescription.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsV2ReferenceDataSourceDescription[];
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentType') as unknown as string;
  }

  public get codeContentDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.TextContent', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeMD5', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.CodeSize') as unknown as number;
  }

  public get s3ApplicationCodeLocationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationCodeConfigurationDescriptionCodeContentDescriptionS3ApplicationCodeLocationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.BucketARN', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.FileKey', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationCodeConfigurationDescription.CodeContentDescription.S3ApplicationCodeLocationDescription.ObjectVersion') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
  }

  public get applicationRestoreConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get flinkRunConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionApplicationRestoreConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.ApplicationRestoreType', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.ApplicationRestoreConfigurationDescription.SnapshotName') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionRunConfigurationDescriptionFlinkRunConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.RunConfigurationDescription.FlinkRunConfigurationDescription.AllowNonRestoredState') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
  }

  public get checkpointConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get monitoringConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription(this.__scope, this.__resources, this.__input);
  }

  public get parallelismConfigurationDescription(): KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {
    return new KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription(this.__scope, this.__resources, this.__input);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.JobPlanDescription') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionCheckpointConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointingEnabled', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.CheckpointInterval', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.CheckpointConfigurationDescription.MinPauseBetweenCheckpoints') as unknown as number;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionMonitoringConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.MetricsLevel', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.MonitoringConfigurationDescription.LogLevel') as unknown as string;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionFlinkApplicationConfigurationDescriptionParallelismConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ConfigurationType', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.Parallelism', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.ParallelismPerKPU', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.CurrentParallelism', props);
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.FlinkApplicationConfigurationDescription.ParallelismConfigurationDescription.AutoScalingEnabled') as unknown as boolean;
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionEnvironmentPropertyDescriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.EnvironmentPropertyDescriptions.PropertyGroupDescriptions') as unknown as shapes.KinesisAnalyticsV2PropertyGroup[];
  }

}

export class KinesisAnalyticsV2ResponsesUpdateApplicationApplicationDetailApplicationConfigurationDescriptionApplicationSnapshotConfigurationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsV2UpdateApplicationRequest) {
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
          ApplicationName: this.__input.applicationName,
          CurrentApplicationVersionId: this.__input.currentApplicationVersionId,
          ApplicationConfigurationUpdate: {
            SqlApplicationConfigurationUpdate: {
              InputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.inputUpdates,
              OutputUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.outputUpdates,
              ReferenceDataSourceUpdates: this.__input.applicationConfigurationUpdate?.sqlApplicationConfigurationUpdate?.referenceDataSourceUpdates,
            },
            ApplicationCodeConfigurationUpdate: {
              CodeContentTypeUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentTypeUpdate,
              CodeContentUpdate: {
                TextContentUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.textContentUpdate,
                ZipFileContentUpdate: {
                },
                S3ContentLocationUpdate: {
                  BucketARNUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.bucketArnUpdate,
                  FileKeyUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.fileKeyUpdate,
                  ObjectVersionUpdate: this.__input.applicationConfigurationUpdate?.applicationCodeConfigurationUpdate?.codeContentUpdate?.s3ContentLocationUpdate?.objectVersionUpdate,
                },
              },
            },
            FlinkApplicationConfigurationUpdate: {
              CheckpointConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.configurationTypeUpdate,
                CheckpointingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointingEnabledUpdate,
                CheckpointIntervalUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.checkpointIntervalUpdate,
                MinPauseBetweenCheckpointsUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.checkpointConfigurationUpdate?.minPauseBetweenCheckpointsUpdate,
              },
              MonitoringConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.configurationTypeUpdate,
                MetricsLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.metricsLevelUpdate,
                LogLevelUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.monitoringConfigurationUpdate?.logLevelUpdate,
              },
              ParallelismConfigurationUpdate: {
                ConfigurationTypeUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.configurationTypeUpdate,
                ParallelismUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismUpdate,
                ParallelismPerKPUUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.parallelismPerKpuUpdate,
                AutoScalingEnabledUpdate: this.__input.applicationConfigurationUpdate?.flinkApplicationConfigurationUpdate?.parallelismConfigurationUpdate?.autoScalingEnabledUpdate,
              },
            },
            EnvironmentPropertyUpdates: {
              PropertyGroups: this.__input.applicationConfigurationUpdate?.environmentPropertyUpdates?.propertyGroups,
            },
            ApplicationSnapshotConfigurationUpdate: {
              SnapshotsEnabledUpdate: this.__input.applicationConfigurationUpdate?.applicationSnapshotConfigurationUpdate?.snapshotsEnabledUpdate,
            },
            VpcConfigurationUpdates: this.__input.applicationConfigurationUpdate?.vpcConfigurationUpdates,
          },
          ServiceExecutionRoleUpdate: this.__input.serviceExecutionRoleUpdate,
          RunConfigurationUpdate: {
            FlinkRunConfiguration: {
              AllowNonRestoredState: this.__input.runConfigurationUpdate?.flinkRunConfiguration?.allowNonRestoredState,
            },
            ApplicationRestoreConfiguration: {
              ApplicationRestoreType: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.applicationRestoreType,
              SnapshotName: this.__input.runConfigurationUpdate?.applicationRestoreConfiguration?.snapshotName,
            },
          },
          CloudWatchLoggingOptionUpdates: this.__input.cloudWatchLoggingOptionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled', props);
    return resource.getResponseField('ApplicationDetail.ApplicationConfigurationDescription.ApplicationSnapshotConfigurationDescription.SnapshotsEnabled') as unknown as boolean;
  }

}

