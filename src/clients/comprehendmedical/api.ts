import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComprehendMedicalClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeEntitiesDetectionV2Job(input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest): ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job {
    return new ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job(this, this.__resources, input);
  }

  public describeIcd10CmInferenceJob(input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest): ComprehendMedicalResponsesDescribeIcd10CmInferenceJob {
    return new ComprehendMedicalResponsesDescribeIcd10CmInferenceJob(this, this.__resources, input);
  }

  public describePhiDetectionJob(input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest): ComprehendMedicalResponsesDescribePhiDetectionJob {
    return new ComprehendMedicalResponsesDescribePhiDetectionJob(this, this.__resources, input);
  }

  public describeRxNormInferenceJob(input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest): ComprehendMedicalResponsesDescribeRxNormInferenceJob {
    return new ComprehendMedicalResponsesDescribeRxNormInferenceJob(this, this.__resources, input);
  }

  public detectEntities(input: shapes.ComprehendMedicalDetectEntitiesRequest): ComprehendMedicalResponsesDetectEntities {
    return new ComprehendMedicalResponsesDetectEntities(this, this.__resources, input);
  }

  public detectEntitiesV2(input: shapes.ComprehendMedicalDetectEntitiesV2Request): ComprehendMedicalResponsesDetectEntitiesV2 {
    return new ComprehendMedicalResponsesDetectEntitiesV2(this, this.__resources, input);
  }

  public detectPhi(input: shapes.ComprehendMedicalDetectPhiRequest): ComprehendMedicalResponsesDetectPhi {
    return new ComprehendMedicalResponsesDetectPhi(this, this.__resources, input);
  }

  public inferIcd10Cm(input: shapes.ComprehendMedicalInferIcd10CmRequest): ComprehendMedicalResponsesInferIcd10Cm {
    return new ComprehendMedicalResponsesInferIcd10Cm(this, this.__resources, input);
  }

  public inferRxNorm(input: shapes.ComprehendMedicalInferRxNormRequest): ComprehendMedicalResponsesInferRxNorm {
    return new ComprehendMedicalResponsesInferRxNorm(this, this.__resources, input);
  }

  public listEntitiesDetectionV2Jobs(input: shapes.ComprehendMedicalListEntitiesDetectionV2JobsRequest): ComprehendMedicalResponsesListEntitiesDetectionV2Jobs {
    return new ComprehendMedicalResponsesListEntitiesDetectionV2Jobs(this, this.__resources, input);
  }

  public listIcd10CmInferenceJobs(input: shapes.ComprehendMedicalListIcd10CmInferenceJobsRequest): ComprehendMedicalResponsesListIcd10CmInferenceJobs {
    return new ComprehendMedicalResponsesListIcd10CmInferenceJobs(this, this.__resources, input);
  }

  public listPhiDetectionJobs(input: shapes.ComprehendMedicalListPhiDetectionJobsRequest): ComprehendMedicalResponsesListPhiDetectionJobs {
    return new ComprehendMedicalResponsesListPhiDetectionJobs(this, this.__resources, input);
  }

  public listRxNormInferenceJobs(input: shapes.ComprehendMedicalListRxNormInferenceJobsRequest): ComprehendMedicalResponsesListRxNormInferenceJobs {
    return new ComprehendMedicalResponsesListRxNormInferenceJobs(this, this.__resources, input);
  }

  public startEntitiesDetectionV2Job(input: shapes.ComprehendMedicalStartEntitiesDetectionV2JobRequest): ComprehendMedicalResponsesStartEntitiesDetectionV2Job {
    return new ComprehendMedicalResponsesStartEntitiesDetectionV2Job(this, this.__resources, input);
  }

  public startIcd10CmInferenceJob(input: shapes.ComprehendMedicalStartIcd10CmInferenceJobRequest): ComprehendMedicalResponsesStartIcd10CmInferenceJob {
    return new ComprehendMedicalResponsesStartIcd10CmInferenceJob(this, this.__resources, input);
  }

  public startPhiDetectionJob(input: shapes.ComprehendMedicalStartPhiDetectionJobRequest): ComprehendMedicalResponsesStartPhiDetectionJob {
    return new ComprehendMedicalResponsesStartPhiDetectionJob(this, this.__resources, input);
  }

  public startRxNormInferenceJob(input: shapes.ComprehendMedicalStartRxNormInferenceJobRequest): ComprehendMedicalResponsesStartRxNormInferenceJob {
    return new ComprehendMedicalResponsesStartRxNormInferenceJob(this, this.__resources, input);
  }

  public stopEntitiesDetectionV2Job(input: shapes.ComprehendMedicalStopEntitiesDetectionV2JobRequest): ComprehendMedicalResponsesStopEntitiesDetectionV2Job {
    return new ComprehendMedicalResponsesStopEntitiesDetectionV2Job(this, this.__resources, input);
  }

  public stopIcd10CmInferenceJob(input: shapes.ComprehendMedicalStopIcd10CmInferenceJobRequest): ComprehendMedicalResponsesStopIcd10CmInferenceJob {
    return new ComprehendMedicalResponsesStopIcd10CmInferenceJob(this, this.__resources, input);
  }

  public stopPhiDetectionJob(input: shapes.ComprehendMedicalStopPhiDetectionJobRequest): ComprehendMedicalResponsesStopPhiDetectionJob {
    return new ComprehendMedicalResponsesStopPhiDetectionJob(this, this.__resources, input);
  }

  public stopRxNormInferenceJob(input: shapes.ComprehendMedicalStopRxNormInferenceJobRequest): ComprehendMedicalResponsesStopRxNormInferenceJob {
    return new ComprehendMedicalResponsesStopRxNormInferenceJob(this, this.__resources, input);
  }

}

export class ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobId'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobId', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobName'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobName',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobName', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobStatus'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobStatus',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobStatus', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.Message'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.Message',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.Message', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.SubmitTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.SubmitTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.EndTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.EndTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.EndTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.EndTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ExpirationTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ExpirationTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.LanguageCode'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.LanguageCode',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get manifestFilePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ManifestFilePath'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ManifestFilePath',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ManifestFilePath') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.KMSKey'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.KMSKey',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.KMSKey', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.KMSKey') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ModelVersion'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ModelVersion',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeIcd10CmInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobId'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobId', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobName'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobName',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobName', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobStatus',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.Message'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.Message',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.Message', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.SubmitTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.EndTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.EndTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ExpirationTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.LanguageCode',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get manifestFilePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ManifestFilePath',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ManifestFilePath') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.KMSKey',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.KMSKey') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ModelVersion',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribePhiDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobId'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobId', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobName'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobName',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobName', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobStatus'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobStatus',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.Message'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.Message',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.Message', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.SubmitTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.SubmitTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.EndTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.EndTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.EndTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ExpirationTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ExpirationTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.LanguageCode'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.LanguageCode',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get manifestFilePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ManifestFilePath',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ManifestFilePath') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.KMSKey'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.KMSKey',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.KMSKey') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ModelVersion'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ModelVersion',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeRxNormInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobId'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobId', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobName'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobName',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobName', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.JobStatus',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.Message'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.Message',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.Message', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.SubmitTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.EndTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.EndTime') as unknown as string;
  }

  public get expirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ExpirationTime',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.LanguageCode',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get manifestFilePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ManifestFilePath',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ManifestFilePath') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.KMSKey',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.KMSKey') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.ModelVersion',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket') as unknown as string;
  }

  public get s3Key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key'),
        outputPath: 'ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDetectEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDetectEntitiesRequest) {
  }

  public get entities(): shapes.ComprehendMedicalEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntities',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntities.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntities.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendMedicalEntity[];
  }

  public get unmappedAttributes(): shapes.ComprehendMedicalUnmappedAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntities',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntities.UnmappedAttributes'),
        outputPath: 'UnmappedAttributes',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntities.UnmappedAttributes', props);
    return resource.getResponseField('UnmappedAttributes') as unknown as shapes.ComprehendMedicalUnmappedAttribute[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntities',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntities.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntities.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntities',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntities.ModelVersion'),
        outputPath: 'ModelVersion',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntities.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDetectEntitiesV2 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDetectEntitiesV2Request) {
  }

  public get entities(): shapes.ComprehendMedicalEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntitiesV2',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntitiesV2.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntitiesV2.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendMedicalEntity[];
  }

  public get unmappedAttributes(): shapes.ComprehendMedicalUnmappedAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntitiesV2',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntitiesV2.UnmappedAttributes'),
        outputPath: 'UnmappedAttributes',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntitiesV2.UnmappedAttributes', props);
    return resource.getResponseField('UnmappedAttributes') as unknown as shapes.ComprehendMedicalUnmappedAttribute[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntitiesV2',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntitiesV2.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntitiesV2.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntitiesV2',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectEntitiesV2.ModelVersion'),
        outputPath: 'ModelVersion',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntitiesV2.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesDetectPhi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalDetectPhiRequest) {
  }

  public get entities(): shapes.ComprehendMedicalEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectPhi',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectPHI.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectPHI.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendMedicalEntity[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectPhi',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectPHI.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectPHI.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectPhi',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.DetectPHI.ModelVersion'),
        outputPath: 'ModelVersion',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectPHI.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesInferIcd10Cm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalInferIcd10CmRequest) {
  }

  public get entities(): shapes.ComprehendMedicalIcd10CmEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferIcd10Cm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferICD10CM.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferICD10CM.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendMedicalIcd10CmEntity[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferIcd10Cm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferICD10CM.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferICD10CM.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferIcd10Cm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferICD10CM.ModelVersion'),
        outputPath: 'ModelVersion',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferICD10CM.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesInferRxNorm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalInferRxNormRequest) {
  }

  public get entities(): shapes.ComprehendMedicalRxNormEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferRxNorm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferRxNorm.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferRxNorm.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendMedicalRxNormEntity[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferRxNorm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferRxNorm.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferRxNorm.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get modelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'inferRxNorm',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.InferRxNorm.ModelVersion'),
        outputPath: 'ModelVersion',
        parameters: {
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InferRxNorm.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalResponsesListEntitiesDetectionV2Jobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalListEntitiesDetectionV2JobsRequest) {
  }

  public get comprehendMedicalAsyncJobPropertiesList(): shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesDetectionV2Jobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListEntitiesDetectionV2Jobs.ComprehendMedicalAsyncJobPropertiesList'),
        outputPath: 'ComprehendMedicalAsyncJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesDetectionV2Jobs.ComprehendMedicalAsyncJobPropertiesList', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobPropertiesList') as unknown as shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesDetectionV2Jobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListEntitiesDetectionV2Jobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesDetectionV2Jobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalResponsesListIcd10CmInferenceJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalListIcd10CmInferenceJobsRequest) {
  }

  public get comprehendMedicalAsyncJobPropertiesList(): shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIcd10CmInferenceJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListICD10CMInferenceJobs.ComprehendMedicalAsyncJobPropertiesList'),
        outputPath: 'ComprehendMedicalAsyncJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListICD10CMInferenceJobs.ComprehendMedicalAsyncJobPropertiesList', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobPropertiesList') as unknown as shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIcd10CmInferenceJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListICD10CMInferenceJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListICD10CMInferenceJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalResponsesListPhiDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalListPhiDetectionJobsRequest) {
  }

  public get comprehendMedicalAsyncJobPropertiesList(): shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhiDetectionJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListPHIDetectionJobs.ComprehendMedicalAsyncJobPropertiesList'),
        outputPath: 'ComprehendMedicalAsyncJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPHIDetectionJobs.ComprehendMedicalAsyncJobPropertiesList', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobPropertiesList') as unknown as shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPhiDetectionJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListPHIDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPHIDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalResponsesListRxNormInferenceJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalListRxNormInferenceJobsRequest) {
  }

  public get comprehendMedicalAsyncJobPropertiesList(): shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRxNormInferenceJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListRxNormInferenceJobs.ComprehendMedicalAsyncJobPropertiesList'),
        outputPath: 'ComprehendMedicalAsyncJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRxNormInferenceJobs.ComprehendMedicalAsyncJobPropertiesList', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobPropertiesList') as unknown as shapes.ComprehendMedicalComprehendMedicalAsyncJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRxNormInferenceJobs',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.ListRxNormInferenceJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRxNormInferenceJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStartEntitiesDetectionV2Job {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStartEntitiesDetectionV2JobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StartEntitiesDetectionV2Job.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Bucket: this.__input.inputDataConfig.s3Bucket,
            S3Key: this.__input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.__input.outputDataConfig.s3Bucket,
            S3Key: this.__input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          KMSKey: this.__input.kmsKey,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEntitiesDetectionV2Job.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStartIcd10CmInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStartIcd10CmInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StartICD10CMInferenceJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Bucket: this.__input.inputDataConfig.s3Bucket,
            S3Key: this.__input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.__input.outputDataConfig.s3Bucket,
            S3Key: this.__input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          KMSKey: this.__input.kmsKey,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartICD10CMInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStartPhiDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStartPhiDetectionJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StartPHIDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Bucket: this.__input.inputDataConfig.s3Bucket,
            S3Key: this.__input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.__input.outputDataConfig.s3Bucket,
            S3Key: this.__input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          KMSKey: this.__input.kmsKey,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPHIDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStartRxNormInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStartRxNormInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StartRxNormInferenceJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Bucket: this.__input.inputDataConfig.s3Bucket,
            S3Key: this.__input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.__input.outputDataConfig.s3Bucket,
            S3Key: this.__input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          KMSKey: this.__input.kmsKey,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartRxNormInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStopEntitiesDetectionV2Job {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStopEntitiesDetectionV2JobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEntitiesDetectionV2Job',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StopEntitiesDetectionV2Job.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopEntitiesDetectionV2Job.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStopIcd10CmInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStopIcd10CmInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopIcd10CmInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StopICD10CMInferenceJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopICD10CMInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStopPhiDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStopPhiDetectionJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopPhiDetectionJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StopPHIDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopPHIDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalResponsesStopRxNormInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendMedicalStopRxNormInferenceJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRxNormInferenceJob',
        service: 'ComprehendMedical',
        physicalResourceId: cr.PhysicalResourceId.of('ComprehendMedical.StopRxNormInferenceJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRxNormInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

