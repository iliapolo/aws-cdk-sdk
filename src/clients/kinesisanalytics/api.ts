import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KinesisAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.AddApplicationCloudWatchLoggingOption'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          CloudWatchLoggingOption: {
            LogStreamARN: input.cloudWatchLoggingOption.logStreamArn,
            RoleARN: input.cloudWatchLoggingOption.roleArn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddApplicationCloudWatchLoggingOption', props);
  }

  public addApplicationInput(input: shapes.KinesisAnalyticsAddApplicationInputRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInput',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.AddApplicationInput'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          Input: {
            NamePrefix: input.input.namePrefix,
            InputProcessingConfiguration: {
              InputLambdaProcessor: {
                ResourceARN: input.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
                RoleARN: input.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
              },
            },
            KinesisStreamsInput: {
              ResourceARN: input.input.kinesisStreamsInput?.resourceArn,
              RoleARN: input.input.kinesisStreamsInput?.roleArn,
            },
            KinesisFirehoseInput: {
              ResourceARN: input.input.kinesisFirehoseInput?.resourceArn,
              RoleARN: input.input.kinesisFirehoseInput?.roleArn,
            },
            InputParallelism: {
              Count: input.input.inputParallelism?.count,
            },
            InputSchema: {
              RecordFormat: {
                RecordFormatType: input.input.inputSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: input.input.inputSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: input.input.inputSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: input.input.inputSchema.recordEncoding,
              RecordColumns: input.input.inputSchema.recordColumns,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddApplicationInput', props);
  }

  public addApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationInputProcessingConfiguration',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.AddApplicationInputProcessingConfiguration'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          InputId: input.inputId,
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: input.inputProcessingConfiguration.inputLambdaProcessor.resourceArn,
              RoleARN: input.inputProcessingConfiguration.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddApplicationInputProcessingConfiguration', props);
  }

  public addApplicationOutput(input: shapes.KinesisAnalyticsAddApplicationOutputRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationOutput',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.AddApplicationOutput'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          Output: {
            Name: input.output.name,
            KinesisStreamsOutput: {
              ResourceARN: input.output.kinesisStreamsOutput?.resourceArn,
              RoleARN: input.output.kinesisStreamsOutput?.roleArn,
            },
            KinesisFirehoseOutput: {
              ResourceARN: input.output.kinesisFirehoseOutput?.resourceArn,
              RoleARN: input.output.kinesisFirehoseOutput?.roleArn,
            },
            LambdaOutput: {
              ResourceARN: input.output.lambdaOutput?.resourceArn,
              RoleARN: input.output.lambdaOutput?.roleArn,
            },
            DestinationSchema: {
              RecordFormatType: input.output.destinationSchema.recordFormatType,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddApplicationOutput', props);
  }

  public addApplicationReferenceDataSource(input: shapes.KinesisAnalyticsAddApplicationReferenceDataSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addApplicationReferenceDataSource',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.AddApplicationReferenceDataSource'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          ReferenceDataSource: {
            TableName: input.referenceDataSource.tableName,
            S3ReferenceDataSource: {
              BucketARN: input.referenceDataSource.s3ReferenceDataSource?.bucketArn,
              FileKey: input.referenceDataSource.s3ReferenceDataSource?.fileKey,
              ReferenceRoleARN: input.referenceDataSource.s3ReferenceDataSource?.referenceRoleArn,
            },
            ReferenceSchema: {
              RecordFormat: {
                RecordFormatType: input.referenceDataSource.referenceSchema.recordFormat.recordFormatType,
                MappingParameters: {
                  JSONMappingParameters: {
                    RecordRowPath: input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.jsonMappingParameters?.recordRowPath,
                  },
                  CSVMappingParameters: {
                    RecordRowDelimiter: input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordRowDelimiter,
                    RecordColumnDelimiter: input.referenceDataSource.referenceSchema.recordFormat.mappingParameters?.csvMappingParameters?.recordColumnDelimiter,
                  },
                },
              },
              RecordEncoding: input.referenceDataSource.referenceSchema.recordEncoding,
              RecordColumns: input.referenceDataSource.referenceSchema.recordColumns,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddApplicationReferenceDataSource', props);
  }

  public createApplication(input: shapes.KinesisAnalyticsCreateApplicationRequest): KinesisAnalyticsResponsesCreateApplication {
    return new KinesisAnalyticsResponsesCreateApplication(this, this.__resources, input);
  }

  public deleteApplication(input: shapes.KinesisAnalyticsDeleteApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DeleteApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          CreateTimestamp: input.createTimestamp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteApplicationCloudWatchLoggingOption(input: shapes.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationCloudWatchLoggingOption',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DeleteApplicationCloudWatchLoggingOption'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          CloudWatchLoggingOptionId: input.cloudWatchLoggingOptionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationCloudWatchLoggingOption', props);
  }

  public deleteApplicationInputProcessingConfiguration(input: shapes.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationInputProcessingConfiguration',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DeleteApplicationInputProcessingConfiguration'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          InputId: input.inputId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationInputProcessingConfiguration', props);
  }

  public deleteApplicationOutput(input: shapes.KinesisAnalyticsDeleteApplicationOutputRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationOutput',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DeleteApplicationOutput'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          OutputId: input.outputId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationOutput', props);
  }

  public deleteApplicationReferenceDataSource(input: shapes.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplicationReferenceDataSource',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DeleteApplicationReferenceDataSource'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          ReferenceId: input.referenceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplicationReferenceDataSource', props);
  }

  public describeApplication(input: shapes.KinesisAnalyticsDescribeApplicationRequest): KinesisAnalyticsResponsesDescribeApplication {
    return new KinesisAnalyticsResponsesDescribeApplication(this, this.__resources, input);
  }

  public discoverInputSchema(input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest): KinesisAnalyticsResponsesDiscoverInputSchema {
    return new KinesisAnalyticsResponsesDiscoverInputSchema(this, this.__resources, input);
  }

  public listApplications(input: shapes.KinesisAnalyticsListApplicationsRequest): KinesisAnalyticsResponsesListApplications {
    return new KinesisAnalyticsResponsesListApplications(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisAnalyticsListTagsForResourceRequest): KinesisAnalyticsResponsesListTagsForResource {
    return new KinesisAnalyticsResponsesListTagsForResource(this, this.__resources, input);
  }

  public startApplication(input: shapes.KinesisAnalyticsStartApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.StartApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          InputConfigurations: input.inputConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartApplication', props);
  }

  public stopApplication(input: shapes.KinesisAnalyticsStopApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.StopApplication'),
        parameters: {
          ApplicationName: input.applicationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopApplication', props);
  }

  public tagResource(input: shapes.KinesisAnalyticsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.KinesisAnalyticsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.KinesisAnalyticsUpdateApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.UpdateApplication'),
        parameters: {
          ApplicationName: input.applicationName,
          CurrentApplicationVersionId: input.currentApplicationVersionId,
          ApplicationUpdate: {
            InputUpdates: input.applicationUpdate.inputUpdates,
            ApplicationCodeUpdate: input.applicationUpdate.applicationCodeUpdate,
            OutputUpdates: input.applicationUpdate.outputUpdates,
            ReferenceDataSourceUpdates: input.applicationUpdate.referenceDataSourceUpdates,
            CloudWatchLoggingOptionUpdates: input.applicationUpdate.cloudWatchLoggingOptionUpdates,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateApplication', props);
  }

}

export class KinesisAnalyticsResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsCreateApplicationRequest) {
  }

  public get applicationSummary(): KinesisAnalyticsResponsesCreateApplicationApplicationSummary {
    return new KinesisAnalyticsResponsesCreateApplicationApplicationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsResponsesCreateApplicationApplicationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsCreateApplicationRequest) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.CreateApplication.ApplicationSummary.ApplicationName'),
        outputPath: 'ApplicationSummary.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          Inputs: this.__input.inputs,
          Outputs: this.__input.outputs,
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          ApplicationCode: this.__input.applicationCode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationSummary.ApplicationName', props);
    return resource.getResponseField('ApplicationSummary.ApplicationName') as unknown as string;
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.CreateApplication.ApplicationSummary.ApplicationARN'),
        outputPath: 'ApplicationSummary.ApplicationARN',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          Inputs: this.__input.inputs,
          Outputs: this.__input.outputs,
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          ApplicationCode: this.__input.applicationCode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationSummary.ApplicationARN', props);
    return resource.getResponseField('ApplicationSummary.ApplicationARN') as unknown as string;
  }

  public get applicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.CreateApplication.ApplicationSummary.ApplicationStatus'),
        outputPath: 'ApplicationSummary.ApplicationStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
          ApplicationDescription: this.__input.applicationDescription,
          Inputs: this.__input.inputs,
          Outputs: this.__input.outputs,
          CloudWatchLoggingOptions: this.__input.cloudWatchLoggingOptions,
          ApplicationCode: this.__input.applicationCode,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationSummary.ApplicationStatus', props);
    return resource.getResponseField('ApplicationSummary.ApplicationStatus') as unknown as string;
  }

}

export class KinesisAnalyticsResponsesDescribeApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDescribeApplicationRequest) {
  }

  public get applicationDetail(): KinesisAnalyticsResponsesDescribeApplicationApplicationDetail {
    return new KinesisAnalyticsResponsesDescribeApplicationApplicationDetail(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsResponsesDescribeApplicationApplicationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDescribeApplicationRequest) {
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationName'),
        outputPath: 'ApplicationDetail.ApplicationName',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationName', props);
    return resource.getResponseField('ApplicationDetail.ApplicationName') as unknown as string;
  }

  public get applicationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationDescription'),
        outputPath: 'ApplicationDetail.ApplicationDescription',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationDescription', props);
    return resource.getResponseField('ApplicationDetail.ApplicationDescription') as unknown as string;
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationARN'),
        outputPath: 'ApplicationDetail.ApplicationARN',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationARN', props);
    return resource.getResponseField('ApplicationDetail.ApplicationARN') as unknown as string;
  }

  public get applicationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationStatus'),
        outputPath: 'ApplicationDetail.ApplicationStatus',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationStatus', props);
    return resource.getResponseField('ApplicationDetail.ApplicationStatus') as unknown as string;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.CreateTimestamp'),
        outputPath: 'ApplicationDetail.CreateTimestamp',
        parameters: {
          ApplicationName: this.__input.applicationName,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.LastUpdateTimestamp'),
        outputPath: 'ApplicationDetail.LastUpdateTimestamp',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.LastUpdateTimestamp', props);
    return resource.getResponseField('ApplicationDetail.LastUpdateTimestamp') as unknown as string;
  }

  public get inputDescriptions(): shapes.KinesisAnalyticsInputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.InputDescriptions'),
        outputPath: 'ApplicationDetail.InputDescriptions',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.InputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.InputDescriptions') as unknown as shapes.KinesisAnalyticsInputDescription[];
  }

  public get outputDescriptions(): shapes.KinesisAnalyticsOutputDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.OutputDescriptions'),
        outputPath: 'ApplicationDetail.OutputDescriptions',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.OutputDescriptions', props);
    return resource.getResponseField('ApplicationDetail.OutputDescriptions') as unknown as shapes.KinesisAnalyticsOutputDescription[];
  }

  public get referenceDataSourceDescriptions(): shapes.KinesisAnalyticsReferenceDataSourceDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ReferenceDataSourceDescriptions'),
        outputPath: 'ApplicationDetail.ReferenceDataSourceDescriptions',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ReferenceDataSourceDescriptions', props);
    return resource.getResponseField('ApplicationDetail.ReferenceDataSourceDescriptions') as unknown as shapes.KinesisAnalyticsReferenceDataSourceDescription[];
  }

  public get cloudWatchLoggingOptionDescriptions(): shapes.KinesisAnalyticsCloudWatchLoggingOptionDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions'),
        outputPath: 'ApplicationDetail.CloudWatchLoggingOptionDescriptions',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
    return resource.getResponseField('ApplicationDetail.CloudWatchLoggingOptionDescriptions') as unknown as shapes.KinesisAnalyticsCloudWatchLoggingOptionDescription[];
  }

  public get applicationCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationCode'),
        outputPath: 'ApplicationDetail.ApplicationCode',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationCode', props);
    return resource.getResponseField('ApplicationDetail.ApplicationCode') as unknown as string;
  }

  public get applicationVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.ApplicationVersionId'),
        outputPath: 'ApplicationDetail.ApplicationVersionId',
        parameters: {
          ApplicationName: this.__input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationDetail.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationDetail.ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get inputSchema(): KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema {
    return new KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema(this.__scope, this.__resources, this.__input);
  }

  public get parsedInputRecords(): string[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.ParsedInputRecords'),
        outputPath: 'ParsedInputRecords',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.ProcessedInputRecords'),
        outputPath: 'ProcessedInputRecords',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.RawInputRecords'),
        outputPath: 'RawInputRecords',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.RawInputRecords', props);
    return resource.getResponseField('RawInputRecords') as unknown as string[];
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get recordFormat(): KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat {
    return new KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat(this.__scope, this.__resources, this.__input);
  }

  public get recordEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordEncoding'),
        outputPath: 'InputSchema.RecordEncoding',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordEncoding', props);
    return resource.getResponseField('InputSchema.RecordEncoding') as unknown as string;
  }

  public get recordColumns(): shapes.KinesisAnalyticsRecordColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordColumns'),
        outputPath: 'InputSchema.RecordColumns',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordColumns', props);
    return resource.getResponseField('InputSchema.RecordColumns') as unknown as shapes.KinesisAnalyticsRecordColumn[];
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get recordFormatType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType'),
        outputPath: 'InputSchema.RecordFormat.RecordFormatType',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType', props);
    return resource.getResponseField('InputSchema.RecordFormat.RecordFormatType') as unknown as string;
  }

  public get mappingParameters(): KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters {
    return new KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get jsonMappingParameters(): KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    return new KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters(this.__scope, this.__resources, this.__input);
  }

  public get csvMappingParameters(): KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    return new KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get recordRowPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath') as unknown as string;
  }

}

export class KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
  }

  public get recordRowDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInputSchema',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordRowDelimiter',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter',
        parameters: {
          ResourceARN: this.__input.resourceArn,
          RoleARN: this.__input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.__input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.__input.s3Configuration?.roleArn,
            BucketARN: this.__input.s3Configuration?.bucketArn,
            FileKey: this.__input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.__input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter') as unknown as string;
  }

}

export class KinesisAnalyticsResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsListApplicationsRequest) {
  }

  public get applicationSummaries(): shapes.KinesisAnalyticsApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.ListApplications.ApplicationSummaries'),
        outputPath: 'ApplicationSummaries',
        parameters: {
          Limit: this.__input.limit,
          ExclusiveStartApplicationName: this.__input.exclusiveStartApplicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.ApplicationSummaries', props);
    return resource.getResponseField('ApplicationSummaries') as unknown as shapes.KinesisAnalyticsApplicationSummary[];
  }

  public get hasMoreApplications(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.ListApplications.HasMoreApplications'),
        outputPath: 'HasMoreApplications',
        parameters: {
          Limit: this.__input.limit,
          ExclusiveStartApplicationName: this.__input.exclusiveStartApplicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.HasMoreApplications', props);
    return resource.getResponseField('HasMoreApplications') as unknown as boolean;
  }

}

export class KinesisAnalyticsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KinesisAnalyticsListTagsForResourceRequest) {
  }

  public get tags(): shapes.KinesisAnalyticsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KinesisAnalyticsTag[];
  }

}

