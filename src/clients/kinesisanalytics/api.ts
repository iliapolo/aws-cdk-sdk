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

  public createApplication(input: shapes.KinesisAnalyticsCreateApplicationRequest): KinesisAnalyticsCreateApplication {
    return new KinesisAnalyticsCreateApplication(this, 'CreateApplication', this.__resources, input);
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

  public describeApplication(input: shapes.KinesisAnalyticsDescribeApplicationRequest): KinesisAnalyticsDescribeApplication {
    return new KinesisAnalyticsDescribeApplication(this, 'DescribeApplication', this.__resources, input);
  }

  public discoverInputSchema(input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest): KinesisAnalyticsDiscoverInputSchema {
    return new KinesisAnalyticsDiscoverInputSchema(this, 'DiscoverInputSchema', this.__resources, input);
  }

  public listApplications(input: shapes.KinesisAnalyticsListApplicationsRequest): KinesisAnalyticsListApplications {
    return new KinesisAnalyticsListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listTagsForResource(input: shapes.KinesisAnalyticsListTagsForResourceRequest): KinesisAnalyticsListTagsForResource {
    return new KinesisAnalyticsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class KinesisAnalyticsCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsCreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationSummary(): KinesisAnalyticsCreateApplicationApplicationSummary {
    return new KinesisAnalyticsCreateApplicationApplicationSummary(this, 'ApplicationSummary', this.__resources, this.input);
  }

}

export class KinesisAnalyticsCreateApplicationApplicationSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsCreateApplicationRequest) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          Inputs: this.input.inputs,
          Outputs: this.input.outputs,
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          ApplicationCode: this.input.applicationCode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationSummary.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          Inputs: this.input.inputs,
          Outputs: this.input.outputs,
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          ApplicationCode: this.input.applicationCode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationSummary.ApplicationARN', props);
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
          ApplicationName: this.input.applicationName,
          ApplicationDescription: this.input.applicationDescription,
          Inputs: this.input.inputs,
          Outputs: this.input.outputs,
          CloudWatchLoggingOptions: this.input.cloudWatchLoggingOptions,
          ApplicationCode: this.input.applicationCode,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationSummary.ApplicationStatus', props);
    return resource.getResponseField('ApplicationSummary.ApplicationStatus') as unknown as string;
  }

}

export class KinesisAnalyticsDescribeApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationDetail(): KinesisAnalyticsDescribeApplicationApplicationDetail {
    return new KinesisAnalyticsDescribeApplicationApplicationDetail(this, 'ApplicationDetail', this.__resources, this.input);
  }

}

export class KinesisAnalyticsDescribeApplicationApplicationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDescribeApplicationRequest) {
    super(scope, id);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationName', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationDescription', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationARN', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationStatus', props);
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
          ApplicationName: this.input.applicationName,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DescribeApplication.ApplicationDetail.LastUpdateTimestamp'),
        outputPath: 'ApplicationDetail.LastUpdateTimestamp',
        parameters: {
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.LastUpdateTimestamp', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.InputDescriptions', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.OutputDescriptions', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ReferenceDataSourceDescriptions', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.CloudWatchLoggingOptionDescriptions', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationCode', props);
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
          ApplicationName: this.input.applicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationDetail.ApplicationVersionId', props);
    return resource.getResponseField('ApplicationDetail.ApplicationVersionId') as unknown as number;
  }

}

export class KinesisAnalyticsDiscoverInputSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get inputSchema(): KinesisAnalyticsDiscoverInputSchemaInputSchema {
    return new KinesisAnalyticsDiscoverInputSchemaInputSchema(this, 'InputSchema', this.__resources, this.input);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.ProcessedInputRecords'),
        outputPath: 'ProcessedInputRecords',
        parameters: {
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.RawInputRecords'),
        outputPath: 'RawInputRecords',
        parameters: {
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.RawInputRecords', props);
    return resource.getResponseField('RawInputRecords') as unknown as string[];
  }

}

export class KinesisAnalyticsDiscoverInputSchemaInputSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get recordFormat(): KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormat {
    return new KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormat(this, 'RecordFormat', this.__resources, this.input);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordEncoding', props);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordColumns', props);
    return resource.getResponseField('InputSchema.RecordColumns') as unknown as shapes.KinesisAnalyticsRecordColumn[];
  }

}

export class KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormat extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.RecordFormatType', props);
    return resource.getResponseField('InputSchema.RecordFormat.RecordFormatType') as unknown as string;
  }

  public get mappingParameters(): KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParameters {
    return new KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParameters(this, 'MappingParameters', this.__resources, this.input);
  }

}

export class KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
  }

  public get jsonMappingParameters(): KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    return new KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters(this, 'JsonMappingParameters', this.__resources, this.input);
  }

  public get csvMappingParameters(): KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    return new KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters(this, 'CsvMappingParameters', this.__resources, this.input);
  }

}

export class KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.JSONMappingParameters.RecordRowPath') as unknown as string;
  }

}

export class KinesisAnalyticsDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsDiscoverInputSchemaRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
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
        service: 'KinesisAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('KinesisAnalytics.DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter'),
        outputPath: 'InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter',
        parameters: {
          ResourceARN: this.input.resourceArn,
          RoleARN: this.input.roleArn,
          InputStartingPositionConfiguration: {
            InputStartingPosition: this.input.inputStartingPositionConfiguration?.inputStartingPosition,
          },
          S3Configuration: {
            RoleARN: this.input.s3Configuration?.roleArn,
            BucketARN: this.input.s3Configuration?.bucketArn,
            FileKey: this.input.s3Configuration?.fileKey,
          },
          InputProcessingConfiguration: {
            InputLambdaProcessor: {
              ResourceARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.resourceArn,
              RoleARN: this.input.inputProcessingConfiguration?.inputLambdaProcessor.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInputSchema.InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter', props);
    return resource.getResponseField('InputSchema.RecordFormat.MappingParameters.CSVMappingParameters.RecordColumnDelimiter') as unknown as string;
  }

}

export class KinesisAnalyticsListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsListApplicationsRequest) {
    super(scope, id);
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
          Limit: this.input.limit,
          ExclusiveStartApplicationName: this.input.exclusiveStartApplicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.ApplicationSummaries', props);
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
          Limit: this.input.limit,
          ExclusiveStartApplicationName: this.input.exclusiveStartApplicationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.HasMoreApplications', props);
    return resource.getResponseField('HasMoreApplications') as unknown as boolean;
  }

}

export class KinesisAnalyticsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KinesisAnalyticsListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KinesisAnalyticsTag[];
  }

}

