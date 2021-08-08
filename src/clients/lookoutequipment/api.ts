import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LookoutEquipmentClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDataset(input: shapes.LookoutEquipmentCreateDatasetRequest): LookoutEquipmentResponsesCreateDataset {
    return new LookoutEquipmentResponsesCreateDataset(this, this.__resources, input);
  }

  public createInferenceScheduler(input: shapes.LookoutEquipmentCreateInferenceSchedulerRequest): LookoutEquipmentResponsesCreateInferenceScheduler {
    return new LookoutEquipmentResponsesCreateInferenceScheduler(this, this.__resources, input);
  }

  public createModel(input: shapes.LookoutEquipmentCreateModelRequest): LookoutEquipmentResponsesCreateModel {
    return new LookoutEquipmentResponsesCreateModel(this, this.__resources, input);
  }

  public deleteDataset(input: shapes.LookoutEquipmentDeleteDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DeleteDataset'),
        parameters: {
          DatasetName: input.datasetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataset', props);
  }

  public deleteInferenceScheduler(input: shapes.LookoutEquipmentDeleteInferenceSchedulerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DeleteInferenceScheduler'),
        parameters: {
          InferenceSchedulerName: input.inferenceSchedulerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInferenceScheduler', props);
  }

  public deleteModel(input: shapes.LookoutEquipmentDeleteModelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DeleteModel'),
        parameters: {
          ModelName: input.modelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModel', props);
  }

  public describeDataIngestionJob(input: shapes.LookoutEquipmentDescribeDataIngestionJobRequest): LookoutEquipmentResponsesDescribeDataIngestionJob {
    return new LookoutEquipmentResponsesDescribeDataIngestionJob(this, this.__resources, input);
  }

  public describeDataset(input: shapes.LookoutEquipmentDescribeDatasetRequest): LookoutEquipmentResponsesDescribeDataset {
    return new LookoutEquipmentResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeInferenceScheduler(input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest): LookoutEquipmentResponsesDescribeInferenceScheduler {
    return new LookoutEquipmentResponsesDescribeInferenceScheduler(this, this.__resources, input);
  }

  public describeModel(input: shapes.LookoutEquipmentDescribeModelRequest): LookoutEquipmentResponsesDescribeModel {
    return new LookoutEquipmentResponsesDescribeModel(this, this.__resources, input);
  }

  public listDataIngestionJobs(input: shapes.LookoutEquipmentListDataIngestionJobsRequest): LookoutEquipmentResponsesListDataIngestionJobs {
    return new LookoutEquipmentResponsesListDataIngestionJobs(this, this.__resources, input);
  }

  public listDatasets(input: shapes.LookoutEquipmentListDatasetsRequest): LookoutEquipmentResponsesListDatasets {
    return new LookoutEquipmentResponsesListDatasets(this, this.__resources, input);
  }

  public listInferenceExecutions(input: shapes.LookoutEquipmentListInferenceExecutionsRequest): LookoutEquipmentResponsesListInferenceExecutions {
    return new LookoutEquipmentResponsesListInferenceExecutions(this, this.__resources, input);
  }

  public listInferenceSchedulers(input: shapes.LookoutEquipmentListInferenceSchedulersRequest): LookoutEquipmentResponsesListInferenceSchedulers {
    return new LookoutEquipmentResponsesListInferenceSchedulers(this, this.__resources, input);
  }

  public listModels(input: shapes.LookoutEquipmentListModelsRequest): LookoutEquipmentResponsesListModels {
    return new LookoutEquipmentResponsesListModels(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.LookoutEquipmentListTagsForResourceRequest): LookoutEquipmentResponsesListTagsForResource {
    return new LookoutEquipmentResponsesListTagsForResource(this, this.__resources, input);
  }

  public startDataIngestionJob(input: shapes.LookoutEquipmentStartDataIngestionJobRequest): LookoutEquipmentResponsesStartDataIngestionJob {
    return new LookoutEquipmentResponsesStartDataIngestionJob(this, this.__resources, input);
  }

  public startInferenceScheduler(input: shapes.LookoutEquipmentStartInferenceSchedulerRequest): LookoutEquipmentResponsesStartInferenceScheduler {
    return new LookoutEquipmentResponsesStartInferenceScheduler(this, this.__resources, input);
  }

  public stopInferenceScheduler(input: shapes.LookoutEquipmentStopInferenceSchedulerRequest): LookoutEquipmentResponsesStopInferenceScheduler {
    return new LookoutEquipmentResponsesStopInferenceScheduler(this, this.__resources, input);
  }

  public tagResource(input: shapes.LookoutEquipmentTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LookoutEquipmentUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateInferenceScheduler(input: shapes.LookoutEquipmentUpdateInferenceSchedulerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.UpdateInferenceScheduler'),
        parameters: {
          InferenceSchedulerName: input.inferenceSchedulerName,
          DataDelayOffsetInMinutes: input.dataDelayOffsetInMinutes,
          DataUploadFrequency: input.dataUploadFrequency,
          DataInputConfiguration: {
            S3InputConfiguration: {
              Bucket: input.dataInputConfiguration?.s3InputConfiguration?.bucket,
              Prefix: input.dataInputConfiguration?.s3InputConfiguration?.prefix,
            },
            InputTimeZoneOffset: input.dataInputConfiguration?.inputTimeZoneOffset,
            InferenceInputNameConfiguration: {
              TimestampFormat: input.dataInputConfiguration?.inferenceInputNameConfiguration?.timestampFormat,
              ComponentTimestampDelimiter: input.dataInputConfiguration?.inferenceInputNameConfiguration?.componentTimestampDelimiter,
            },
          },
          DataOutputConfiguration: {
            S3OutputConfiguration: {
              Bucket: input.dataOutputConfiguration?.s3OutputConfiguration.bucket,
              Prefix: input.dataOutputConfiguration?.s3OutputConfiguration.prefix,
            },
            KmsKeyId: input.dataOutputConfiguration?.kmsKeyId,
          },
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInferenceScheduler', props);
  }

}

export class LookoutEquipmentResponsesCreateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentCreateDatasetRequest) {
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateDataset.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          DatasetName: this.__input.datasetName,
          DatasetSchema: {
            InlineDataSchema: this.__input.datasetSchema.inlineDataSchema,
          },
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateDataset.DatasetArn'),
        outputPath: 'DatasetArn',
        parameters: {
          DatasetName: this.__input.datasetName,
          DatasetSchema: {
            InlineDataSchema: this.__input.datasetSchema.inlineDataSchema,
          },
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.DatasetArn', props);
    return resource.getResponseField('DatasetArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateDataset.Status'),
        outputPath: 'Status',
        parameters: {
          DatasetName: this.__input.datasetName,
          DatasetSchema: {
            InlineDataSchema: this.__input.datasetSchema.inlineDataSchema,
          },
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutEquipmentResponsesCreateInferenceScheduler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentCreateInferenceSchedulerRequest) {
  }

  public get inferenceSchedulerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateInferenceScheduler.InferenceSchedulerArn'),
        outputPath: 'InferenceSchedulerArn',
        parameters: {
          ModelName: this.__input.modelName,
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
          DataDelayOffsetInMinutes: this.__input.dataDelayOffsetInMinutes,
          DataUploadFrequency: this.__input.dataUploadFrequency,
          DataInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.dataInputConfiguration.s3InputConfiguration?.bucket,
              Prefix: this.__input.dataInputConfiguration.s3InputConfiguration?.prefix,
            },
            InputTimeZoneOffset: this.__input.dataInputConfiguration.inputTimeZoneOffset,
            InferenceInputNameConfiguration: {
              TimestampFormat: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.timestampFormat,
              ComponentTimestampDelimiter: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.componentTimestampDelimiter,
            },
          },
          DataOutputConfiguration: {
            S3OutputConfiguration: {
              Bucket: this.__input.dataOutputConfiguration.s3OutputConfiguration.bucket,
              Prefix: this.__input.dataOutputConfiguration.s3OutputConfiguration.prefix,
            },
            KmsKeyId: this.__input.dataOutputConfiguration.kmsKeyId,
          },
          RoleArn: this.__input.roleArn,
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInferenceScheduler.InferenceSchedulerArn', props);
    return resource.getResponseField('InferenceSchedulerArn') as unknown as string;
  }

  public get inferenceSchedulerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateInferenceScheduler.InferenceSchedulerName'),
        outputPath: 'InferenceSchedulerName',
        parameters: {
          ModelName: this.__input.modelName,
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
          DataDelayOffsetInMinutes: this.__input.dataDelayOffsetInMinutes,
          DataUploadFrequency: this.__input.dataUploadFrequency,
          DataInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.dataInputConfiguration.s3InputConfiguration?.bucket,
              Prefix: this.__input.dataInputConfiguration.s3InputConfiguration?.prefix,
            },
            InputTimeZoneOffset: this.__input.dataInputConfiguration.inputTimeZoneOffset,
            InferenceInputNameConfiguration: {
              TimestampFormat: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.timestampFormat,
              ComponentTimestampDelimiter: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.componentTimestampDelimiter,
            },
          },
          DataOutputConfiguration: {
            S3OutputConfiguration: {
              Bucket: this.__input.dataOutputConfiguration.s3OutputConfiguration.bucket,
              Prefix: this.__input.dataOutputConfiguration.s3OutputConfiguration.prefix,
            },
            KmsKeyId: this.__input.dataOutputConfiguration.kmsKeyId,
          },
          RoleArn: this.__input.roleArn,
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInferenceScheduler.InferenceSchedulerName', props);
    return resource.getResponseField('InferenceSchedulerName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateInferenceScheduler.Status'),
        outputPath: 'Status',
        parameters: {
          ModelName: this.__input.modelName,
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
          DataDelayOffsetInMinutes: this.__input.dataDelayOffsetInMinutes,
          DataUploadFrequency: this.__input.dataUploadFrequency,
          DataInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.dataInputConfiguration.s3InputConfiguration?.bucket,
              Prefix: this.__input.dataInputConfiguration.s3InputConfiguration?.prefix,
            },
            InputTimeZoneOffset: this.__input.dataInputConfiguration.inputTimeZoneOffset,
            InferenceInputNameConfiguration: {
              TimestampFormat: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.timestampFormat,
              ComponentTimestampDelimiter: this.__input.dataInputConfiguration.inferenceInputNameConfiguration?.componentTimestampDelimiter,
            },
          },
          DataOutputConfiguration: {
            S3OutputConfiguration: {
              Bucket: this.__input.dataOutputConfiguration.s3OutputConfiguration.bucket,
              Prefix: this.__input.dataOutputConfiguration.s3OutputConfiguration.prefix,
            },
            KmsKeyId: this.__input.dataOutputConfiguration.kmsKeyId,
          },
          RoleArn: this.__input.roleArn,
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInferenceScheduler.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutEquipmentResponsesCreateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentCreateModelRequest) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateModel.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          ModelName: this.__input.modelName,
          DatasetName: this.__input.datasetName,
          DatasetSchema: {
            InlineDataSchema: this.__input.datasetSchema?.inlineDataSchema,
          },
          LabelsInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.labelsInputConfiguration?.s3InputConfiguration.bucket,
              Prefix: this.__input.labelsInputConfiguration?.s3InputConfiguration.prefix,
            },
          },
          ClientToken: this.__input.clientToken,
          TrainingDataStartTime: this.__input.trainingDataStartTime,
          TrainingDataEndTime: this.__input.trainingDataEndTime,
          EvaluationDataStartTime: this.__input.evaluationDataStartTime,
          EvaluationDataEndTime: this.__input.evaluationDataEndTime,
          RoleArn: this.__input.roleArn,
          DataPreProcessingConfiguration: {
            TargetSamplingRate: this.__input.dataPreProcessingConfiguration?.targetSamplingRate,
          },
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.CreateModel.Status'),
        outputPath: 'Status',
        parameters: {
          ModelName: this.__input.modelName,
          DatasetName: this.__input.datasetName,
          DatasetSchema: {
            InlineDataSchema: this.__input.datasetSchema?.inlineDataSchema,
          },
          LabelsInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.labelsInputConfiguration?.s3InputConfiguration.bucket,
              Prefix: this.__input.labelsInputConfiguration?.s3InputConfiguration.prefix,
            },
          },
          ClientToken: this.__input.clientToken,
          TrainingDataStartTime: this.__input.trainingDataStartTime,
          TrainingDataEndTime: this.__input.trainingDataEndTime,
          EvaluationDataStartTime: this.__input.evaluationDataStartTime,
          EvaluationDataEndTime: this.__input.evaluationDataEndTime,
          RoleArn: this.__input.roleArn,
          DataPreProcessingConfiguration: {
            TargetSamplingRate: this.__input.dataPreProcessingConfiguration?.targetSamplingRate,
          },
          ServerSideKmsKeyId: this.__input.serverSideKmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeDataIngestionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDataIngestionJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.DatasetArn'),
        outputPath: 'DatasetArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.DatasetArn', props);
    return resource.getResponseField('DatasetArn') as unknown as string;
  }

  public get ingestionInputConfiguration(): LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfiguration {
    return new LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.Status'),
        outputPath: 'Status',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get failedReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.FailedReason'),
        outputPath: 'FailedReason',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.FailedReason', props);
    return resource.getResponseField('FailedReason') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDataIngestionJobRequest) {
  }

  public get s3InputConfiguration(): LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfigurationS3InputConfiguration {
    return new LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfigurationS3InputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutEquipmentResponsesDescribeDataIngestionJobIngestionInputConfigurationS3InputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDataIngestionJobRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.IngestionInputConfiguration.S3InputConfiguration.Bucket'),
        outputPath: 'IngestionInputConfiguration.S3InputConfiguration.Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.IngestionInputConfiguration.S3InputConfiguration.Bucket', props);
    return resource.getResponseField('IngestionInputConfiguration.S3InputConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataIngestionJob.IngestionInputConfiguration.S3InputConfiguration.Prefix'),
        outputPath: 'IngestionInputConfiguration.S3InputConfiguration.Prefix',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataIngestionJob.IngestionInputConfiguration.S3InputConfiguration.Prefix', props);
    return resource.getResponseField('IngestionInputConfiguration.S3InputConfiguration.Prefix') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDatasetRequest) {
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.DatasetArn'),
        outputPath: 'DatasetArn',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.DatasetArn', props);
    return resource.getResponseField('DatasetArn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.Status'),
        outputPath: 'Status',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.Schema'),
        outputPath: 'Schema',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

  public get serverSideKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.ServerSideKmsKeyId'),
        outputPath: 'ServerSideKmsKeyId',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.ServerSideKmsKeyId', props);
    return resource.getResponseField('ServerSideKmsKeyId') as unknown as string;
  }

  public get ingestionInputConfiguration(): LookoutEquipmentResponsesDescribeDatasetIngestionInputConfiguration {
    return new LookoutEquipmentResponsesDescribeDatasetIngestionInputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutEquipmentResponsesDescribeDatasetIngestionInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDatasetRequest) {
  }

  public get s3InputConfiguration(): LookoutEquipmentResponsesDescribeDatasetIngestionInputConfigurationS3InputConfiguration {
    return new LookoutEquipmentResponsesDescribeDatasetIngestionInputConfigurationS3InputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutEquipmentResponsesDescribeDatasetIngestionInputConfigurationS3InputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeDatasetRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.IngestionInputConfiguration.S3InputConfiguration.Bucket'),
        outputPath: 'IngestionInputConfiguration.S3InputConfiguration.Bucket',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.IngestionInputConfiguration.S3InputConfiguration.Bucket', props);
    return resource.getResponseField('IngestionInputConfiguration.S3InputConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeDataset.IngestionInputConfiguration.S3InputConfiguration.Prefix'),
        outputPath: 'IngestionInputConfiguration.S3InputConfiguration.Prefix',
        parameters: {
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.IngestionInputConfiguration.S3InputConfiguration.Prefix', props);
    return resource.getResponseField('IngestionInputConfiguration.S3InputConfiguration.Prefix') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeInferenceScheduler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get inferenceSchedulerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.InferenceSchedulerName'),
        outputPath: 'InferenceSchedulerName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.InferenceSchedulerName', props);
    return resource.getResponseField('InferenceSchedulerName') as unknown as string;
  }

  public get inferenceSchedulerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.InferenceSchedulerArn'),
        outputPath: 'InferenceSchedulerArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.InferenceSchedulerArn', props);
    return resource.getResponseField('InferenceSchedulerArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.Status'),
        outputPath: 'Status',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get dataDelayOffsetInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataDelayOffsetInMinutes'),
        outputPath: 'DataDelayOffsetInMinutes',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataDelayOffsetInMinutes', props);
    return resource.getResponseField('DataDelayOffsetInMinutes') as unknown as number;
  }

  public get dataUploadFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataUploadFrequency'),
        outputPath: 'DataUploadFrequency',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataUploadFrequency', props);
    return resource.getResponseField('DataUploadFrequency') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

  public get dataInputConfiguration(): LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfiguration {
    return new LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get dataOutputConfiguration(): LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfiguration {
    return new LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get serverSideKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.ServerSideKmsKeyId'),
        outputPath: 'ServerSideKmsKeyId',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.ServerSideKmsKeyId', props);
    return resource.getResponseField('ServerSideKmsKeyId') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get s3InputConfiguration(): LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationS3InputConfiguration {
    return new LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationS3InputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get inputTimeZoneOffset(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataInputConfiguration.InputTimeZoneOffset'),
        outputPath: 'DataInputConfiguration.InputTimeZoneOffset',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataInputConfiguration.InputTimeZoneOffset', props);
    return resource.getResponseField('DataInputConfiguration.InputTimeZoneOffset') as unknown as string;
  }

  public get inferenceInputNameConfiguration(): LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration {
    return new LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationS3InputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataInputConfiguration.S3InputConfiguration.Bucket'),
        outputPath: 'DataInputConfiguration.S3InputConfiguration.Bucket',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataInputConfiguration.S3InputConfiguration.Bucket', props);
    return resource.getResponseField('DataInputConfiguration.S3InputConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataInputConfiguration.S3InputConfiguration.Prefix'),
        outputPath: 'DataInputConfiguration.S3InputConfiguration.Prefix',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataInputConfiguration.S3InputConfiguration.Prefix', props);
    return resource.getResponseField('DataInputConfiguration.S3InputConfiguration.Prefix') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get timestampFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataInputConfiguration.InferenceInputNameConfiguration.TimestampFormat'),
        outputPath: 'DataInputConfiguration.InferenceInputNameConfiguration.TimestampFormat',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataInputConfiguration.InferenceInputNameConfiguration.TimestampFormat', props);
    return resource.getResponseField('DataInputConfiguration.InferenceInputNameConfiguration.TimestampFormat') as unknown as string;
  }

  public get componentTimestampDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataInputConfiguration.InferenceInputNameConfiguration.ComponentTimestampDelimiter'),
        outputPath: 'DataInputConfiguration.InferenceInputNameConfiguration.ComponentTimestampDelimiter',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataInputConfiguration.InferenceInputNameConfiguration.ComponentTimestampDelimiter', props);
    return resource.getResponseField('DataInputConfiguration.InferenceInputNameConfiguration.ComponentTimestampDelimiter') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get s3OutputConfiguration(): LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfigurationS3OutputConfiguration {
    return new LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfigurationS3OutputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataOutputConfiguration.KmsKeyId'),
        outputPath: 'DataOutputConfiguration.KmsKeyId',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataOutputConfiguration.KmsKeyId', props);
    return resource.getResponseField('DataOutputConfiguration.KmsKeyId') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeInferenceSchedulerDataOutputConfigurationS3OutputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeInferenceSchedulerRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataOutputConfiguration.S3OutputConfiguration.Bucket'),
        outputPath: 'DataOutputConfiguration.S3OutputConfiguration.Bucket',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataOutputConfiguration.S3OutputConfiguration.Bucket', props);
    return resource.getResponseField('DataOutputConfiguration.S3OutputConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeInferenceScheduler.DataOutputConfiguration.S3OutputConfiguration.Prefix'),
        outputPath: 'DataOutputConfiguration.S3OutputConfiguration.Prefix',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInferenceScheduler.DataOutputConfiguration.S3OutputConfiguration.Prefix', props);
    return resource.getResponseField('DataOutputConfiguration.S3OutputConfiguration.Prefix') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeModelRequest) {
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.DatasetArn'),
        outputPath: 'DatasetArn',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.DatasetArn', props);
    return resource.getResponseField('DatasetArn') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.Schema'),
        outputPath: 'Schema',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

  public get labelsInputConfiguration(): LookoutEquipmentResponsesDescribeModelLabelsInputConfiguration {
    return new LookoutEquipmentResponsesDescribeModelLabelsInputConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get trainingDataStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.TrainingDataStartTime'),
        outputPath: 'TrainingDataStartTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.TrainingDataStartTime', props);
    return resource.getResponseField('TrainingDataStartTime') as unknown as string;
  }

  public get trainingDataEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.TrainingDataEndTime'),
        outputPath: 'TrainingDataEndTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.TrainingDataEndTime', props);
    return resource.getResponseField('TrainingDataEndTime') as unknown as string;
  }

  public get evaluationDataStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.EvaluationDataStartTime'),
        outputPath: 'EvaluationDataStartTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.EvaluationDataStartTime', props);
    return resource.getResponseField('EvaluationDataStartTime') as unknown as string;
  }

  public get evaluationDataEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.EvaluationDataEndTime'),
        outputPath: 'EvaluationDataEndTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.EvaluationDataEndTime', props);
    return resource.getResponseField('EvaluationDataEndTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get dataPreProcessingConfiguration(): LookoutEquipmentResponsesDescribeModelDataPreProcessingConfiguration {
    return new LookoutEquipmentResponsesDescribeModelDataPreProcessingConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.Status'),
        outputPath: 'Status',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get trainingExecutionStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.TrainingExecutionStartTime'),
        outputPath: 'TrainingExecutionStartTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.TrainingExecutionStartTime', props);
    return resource.getResponseField('TrainingExecutionStartTime') as unknown as string;
  }

  public get trainingExecutionEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.TrainingExecutionEndTime'),
        outputPath: 'TrainingExecutionEndTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.TrainingExecutionEndTime', props);
    return resource.getResponseField('TrainingExecutionEndTime') as unknown as string;
  }

  public get failedReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.FailedReason'),
        outputPath: 'FailedReason',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.FailedReason', props);
    return resource.getResponseField('FailedReason') as unknown as string;
  }

  public get modelMetrics(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.ModelMetrics'),
        outputPath: 'ModelMetrics',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelMetrics', props);
    return resource.getResponseField('ModelMetrics') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.LastUpdatedTime'),
        outputPath: 'LastUpdatedTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.LastUpdatedTime', props);
    return resource.getResponseField('LastUpdatedTime') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get serverSideKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.ServerSideKmsKeyId'),
        outputPath: 'ServerSideKmsKeyId',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ServerSideKmsKeyId', props);
    return resource.getResponseField('ServerSideKmsKeyId') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeModelLabelsInputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeModelRequest) {
  }

  public get s3InputConfiguration(): LookoutEquipmentResponsesDescribeModelLabelsInputConfigurationS3InputConfiguration {
    return new LookoutEquipmentResponsesDescribeModelLabelsInputConfigurationS3InputConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LookoutEquipmentResponsesDescribeModelLabelsInputConfigurationS3InputConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeModelRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.LabelsInputConfiguration.S3InputConfiguration.Bucket'),
        outputPath: 'LabelsInputConfiguration.S3InputConfiguration.Bucket',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.LabelsInputConfiguration.S3InputConfiguration.Bucket', props);
    return resource.getResponseField('LabelsInputConfiguration.S3InputConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.LabelsInputConfiguration.S3InputConfiguration.Prefix'),
        outputPath: 'LabelsInputConfiguration.S3InputConfiguration.Prefix',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.LabelsInputConfiguration.S3InputConfiguration.Prefix', props);
    return resource.getResponseField('LabelsInputConfiguration.S3InputConfiguration.Prefix') as unknown as string;
  }

}

export class LookoutEquipmentResponsesDescribeModelDataPreProcessingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentDescribeModelRequest) {
  }

  public get targetSamplingRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.DescribeModel.DataPreProcessingConfiguration.TargetSamplingRate'),
        outputPath: 'DataPreProcessingConfiguration.TargetSamplingRate',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.DataPreProcessingConfiguration.TargetSamplingRate', props);
    return resource.getResponseField('DataPreProcessingConfiguration.TargetSamplingRate') as unknown as string;
  }

}

export class LookoutEquipmentResponsesListDataIngestionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListDataIngestionJobsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataIngestionJobs',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListDataIngestionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DatasetName: this.__input.datasetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataIngestionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get dataIngestionJobSummaries(): shapes.LookoutEquipmentDataIngestionJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataIngestionJobs',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListDataIngestionJobs.DataIngestionJobSummaries'),
        outputPath: 'DataIngestionJobSummaries',
        parameters: {
          DatasetName: this.__input.datasetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataIngestionJobs.DataIngestionJobSummaries', props);
    return resource.getResponseField('DataIngestionJobSummaries') as unknown as shapes.LookoutEquipmentDataIngestionJobSummary[];
  }

}

export class LookoutEquipmentResponsesListDatasets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListDatasetsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListDatasets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DatasetNameBeginsWith: this.__input.datasetNameBeginsWith,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get datasetSummaries(): shapes.LookoutEquipmentDatasetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListDatasets.DatasetSummaries'),
        outputPath: 'DatasetSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DatasetNameBeginsWith: this.__input.datasetNameBeginsWith,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.DatasetSummaries', props);
    return resource.getResponseField('DatasetSummaries') as unknown as shapes.LookoutEquipmentDatasetSummary[];
  }

}

export class LookoutEquipmentResponsesListInferenceExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListInferenceExecutionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInferenceExecutions',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListInferenceExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
          DataStartTimeAfter: this.__input.dataStartTimeAfter,
          DataEndTimeBefore: this.__input.dataEndTimeBefore,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInferenceExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get inferenceExecutionSummaries(): shapes.LookoutEquipmentInferenceExecutionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInferenceExecutions',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListInferenceExecutions.InferenceExecutionSummaries'),
        outputPath: 'InferenceExecutionSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
          DataStartTimeAfter: this.__input.dataStartTimeAfter,
          DataEndTimeBefore: this.__input.dataEndTimeBefore,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInferenceExecutions.InferenceExecutionSummaries', props);
    return resource.getResponseField('InferenceExecutionSummaries') as unknown as shapes.LookoutEquipmentInferenceExecutionSummary[];
  }

}

export class LookoutEquipmentResponsesListInferenceSchedulers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListInferenceSchedulersRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInferenceSchedulers',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListInferenceSchedulers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          InferenceSchedulerNameBeginsWith: this.__input.inferenceSchedulerNameBeginsWith,
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInferenceSchedulers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get inferenceSchedulerSummaries(): shapes.LookoutEquipmentInferenceSchedulerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInferenceSchedulers',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListInferenceSchedulers.InferenceSchedulerSummaries'),
        outputPath: 'InferenceSchedulerSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          InferenceSchedulerNameBeginsWith: this.__input.inferenceSchedulerNameBeginsWith,
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInferenceSchedulers.InferenceSchedulerSummaries', props);
    return resource.getResponseField('InferenceSchedulerSummaries') as unknown as shapes.LookoutEquipmentInferenceSchedulerSummary[];
  }

}

export class LookoutEquipmentResponsesListModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListModelsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListModels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
          ModelNameBeginsWith: this.__input.modelNameBeginsWith,
          DatasetNameBeginsWith: this.__input.datasetNameBeginsWith,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get modelSummaries(): shapes.LookoutEquipmentModelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListModels.ModelSummaries'),
        outputPath: 'ModelSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
          ModelNameBeginsWith: this.__input.modelNameBeginsWith,
          DatasetNameBeginsWith: this.__input.datasetNameBeginsWith,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.ModelSummaries', props);
    return resource.getResponseField('ModelSummaries') as unknown as shapes.LookoutEquipmentModelSummary[];
  }

}

export class LookoutEquipmentResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentListTagsForResourceRequest) {
  }

  public get tags(): shapes.LookoutEquipmentTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.LookoutEquipmentTag[];
  }

}

export class LookoutEquipmentResponsesStartDataIngestionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentStartDataIngestionJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartDataIngestionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          DatasetName: this.__input.datasetName,
          IngestionInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.ingestionInputConfiguration.s3InputConfiguration.bucket,
              Prefix: this.__input.ingestionInputConfiguration.s3InputConfiguration.prefix,
            },
          },
          RoleArn: this.__input.roleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDataIngestionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDataIngestionJob',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartDataIngestionJob.Status'),
        outputPath: 'Status',
        parameters: {
          DatasetName: this.__input.datasetName,
          IngestionInputConfiguration: {
            S3InputConfiguration: {
              Bucket: this.__input.ingestionInputConfiguration.s3InputConfiguration.bucket,
              Prefix: this.__input.ingestionInputConfiguration.s3InputConfiguration.prefix,
            },
          },
          RoleArn: this.__input.roleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDataIngestionJob.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutEquipmentResponsesStartInferenceScheduler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentStartInferenceSchedulerRequest) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartInferenceScheduler.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInferenceScheduler.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartInferenceScheduler.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInferenceScheduler.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get inferenceSchedulerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartInferenceScheduler.InferenceSchedulerName'),
        outputPath: 'InferenceSchedulerName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInferenceScheduler.InferenceSchedulerName', props);
    return resource.getResponseField('InferenceSchedulerName') as unknown as string;
  }

  public get inferenceSchedulerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartInferenceScheduler.InferenceSchedulerArn'),
        outputPath: 'InferenceSchedulerArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInferenceScheduler.InferenceSchedulerArn', props);
    return resource.getResponseField('InferenceSchedulerArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StartInferenceScheduler.Status'),
        outputPath: 'Status',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInferenceScheduler.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LookoutEquipmentResponsesStopInferenceScheduler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LookoutEquipmentStopInferenceSchedulerRequest) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StopInferenceScheduler.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInferenceScheduler.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StopInferenceScheduler.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInferenceScheduler.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get inferenceSchedulerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StopInferenceScheduler.InferenceSchedulerName'),
        outputPath: 'InferenceSchedulerName',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInferenceScheduler.InferenceSchedulerName', props);
    return resource.getResponseField('InferenceSchedulerName') as unknown as string;
  }

  public get inferenceSchedulerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StopInferenceScheduler.InferenceSchedulerArn'),
        outputPath: 'InferenceSchedulerArn',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInferenceScheduler.InferenceSchedulerArn', props);
    return resource.getResponseField('InferenceSchedulerArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInferenceScheduler',
        service: 'LookoutEquipment',
        physicalResourceId: cr.PhysicalResourceId.of('LookoutEquipment.StopInferenceScheduler.Status'),
        outputPath: 'Status',
        parameters: {
          InferenceSchedulerName: this.__input.inferenceSchedulerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInferenceScheduler.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

