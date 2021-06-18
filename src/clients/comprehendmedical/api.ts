import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComprehendMedicalClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeEntitiesDetectionV2Job(input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest): ComprehendMedicalDescribeEntitiesDetectionV2Job {
    return new ComprehendMedicalDescribeEntitiesDetectionV2Job(this, 'DescribeEntitiesDetectionV2Job', this.__resources, input);
  }

  public describeIcd10CmInferenceJob(input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest): ComprehendMedicalDescribeIcd10CmInferenceJob {
    return new ComprehendMedicalDescribeIcd10CmInferenceJob(this, 'DescribeIcd10CmInferenceJob', this.__resources, input);
  }

  public describePhiDetectionJob(input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest): ComprehendMedicalDescribePhiDetectionJob {
    return new ComprehendMedicalDescribePhiDetectionJob(this, 'DescribePhiDetectionJob', this.__resources, input);
  }

  public describeRxNormInferenceJob(input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest): ComprehendMedicalDescribeRxNormInferenceJob {
    return new ComprehendMedicalDescribeRxNormInferenceJob(this, 'DescribeRxNormInferenceJob', this.__resources, input);
  }

  public detectEntities(input: shapes.ComprehendMedicalDetectEntitiesRequest): ComprehendMedicalDetectEntities {
    return new ComprehendMedicalDetectEntities(this, 'DetectEntities', this.__resources, input);
  }

  public detectEntitiesV2(input: shapes.ComprehendMedicalDetectEntitiesV2Request): ComprehendMedicalDetectEntitiesV2 {
    return new ComprehendMedicalDetectEntitiesV2(this, 'DetectEntitiesV2', this.__resources, input);
  }

  public detectPhi(input: shapes.ComprehendMedicalDetectPhiRequest): ComprehendMedicalDetectPhi {
    return new ComprehendMedicalDetectPhi(this, 'DetectPhi', this.__resources, input);
  }

  public inferIcd10Cm(input: shapes.ComprehendMedicalInferIcd10CmRequest): ComprehendMedicalInferIcd10Cm {
    return new ComprehendMedicalInferIcd10Cm(this, 'InferIcd10Cm', this.__resources, input);
  }

  public inferRxNorm(input: shapes.ComprehendMedicalInferRxNormRequest): ComprehendMedicalInferRxNorm {
    return new ComprehendMedicalInferRxNorm(this, 'InferRxNorm', this.__resources, input);
  }

  public listEntitiesDetectionV2Jobs(input: shapes.ComprehendMedicalListEntitiesDetectionV2JobsRequest): ComprehendMedicalListEntitiesDetectionV2Jobs {
    return new ComprehendMedicalListEntitiesDetectionV2Jobs(this, 'ListEntitiesDetectionV2Jobs', this.__resources, input);
  }

  public listIcd10CmInferenceJobs(input: shapes.ComprehendMedicalListIcd10CmInferenceJobsRequest): ComprehendMedicalListIcd10CmInferenceJobs {
    return new ComprehendMedicalListIcd10CmInferenceJobs(this, 'ListIcd10CmInferenceJobs', this.__resources, input);
  }

  public listPhiDetectionJobs(input: shapes.ComprehendMedicalListPhiDetectionJobsRequest): ComprehendMedicalListPhiDetectionJobs {
    return new ComprehendMedicalListPhiDetectionJobs(this, 'ListPhiDetectionJobs', this.__resources, input);
  }

  public listRxNormInferenceJobs(input: shapes.ComprehendMedicalListRxNormInferenceJobsRequest): ComprehendMedicalListRxNormInferenceJobs {
    return new ComprehendMedicalListRxNormInferenceJobs(this, 'ListRxNormInferenceJobs', this.__resources, input);
  }

  public startEntitiesDetectionV2Job(input: shapes.ComprehendMedicalStartEntitiesDetectionV2JobRequest): ComprehendMedicalStartEntitiesDetectionV2Job {
    return new ComprehendMedicalStartEntitiesDetectionV2Job(this, 'StartEntitiesDetectionV2Job', this.__resources, input);
  }

  public startIcd10CmInferenceJob(input: shapes.ComprehendMedicalStartIcd10CmInferenceJobRequest): ComprehendMedicalStartIcd10CmInferenceJob {
    return new ComprehendMedicalStartIcd10CmInferenceJob(this, 'StartIcd10CmInferenceJob', this.__resources, input);
  }

  public startPhiDetectionJob(input: shapes.ComprehendMedicalStartPhiDetectionJobRequest): ComprehendMedicalStartPhiDetectionJob {
    return new ComprehendMedicalStartPhiDetectionJob(this, 'StartPhiDetectionJob', this.__resources, input);
  }

  public startRxNormInferenceJob(input: shapes.ComprehendMedicalStartRxNormInferenceJobRequest): ComprehendMedicalStartRxNormInferenceJob {
    return new ComprehendMedicalStartRxNormInferenceJob(this, 'StartRxNormInferenceJob', this.__resources, input);
  }

  public stopEntitiesDetectionV2Job(input: shapes.ComprehendMedicalStopEntitiesDetectionV2JobRequest): ComprehendMedicalStopEntitiesDetectionV2Job {
    return new ComprehendMedicalStopEntitiesDetectionV2Job(this, 'StopEntitiesDetectionV2Job', this.__resources, input);
  }

  public stopIcd10CmInferenceJob(input: shapes.ComprehendMedicalStopIcd10CmInferenceJobRequest): ComprehendMedicalStopIcd10CmInferenceJob {
    return new ComprehendMedicalStopIcd10CmInferenceJob(this, 'StopIcd10CmInferenceJob', this.__resources, input);
  }

  public stopPhiDetectionJob(input: shapes.ComprehendMedicalStopPhiDetectionJobRequest): ComprehendMedicalStopPhiDetectionJob {
    return new ComprehendMedicalStopPhiDetectionJob(this, 'StopPhiDetectionJob', this.__resources, input);
  }

  public stopRxNormInferenceJob(input: shapes.ComprehendMedicalStopRxNormInferenceJobRequest): ComprehendMedicalStopRxNormInferenceJob {
    return new ComprehendMedicalStopRxNormInferenceJob(this, 'StopRxNormInferenceJob', this.__resources, input);
  }

}

export class ComprehendMedicalDescribeEntitiesDetectionV2Job extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
    super(scope, id);
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties(this, 'ComprehendMedicalAsyncJobProperties', this.__resources, this.input);
  }

}

export class ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobId', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobName', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.JobStatus', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.Message', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.EndTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.KMSKey', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionV2Job.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribeIcd10CmInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
    super(scope, id);
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties(this, 'ComprehendMedicalAsyncJobProperties', this.__resources, this.input);
  }

}

export class ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobId', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobName', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.Message', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeIcd10CmInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeICD10CMInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribePhiDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
    super(scope, id);
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobProperties(this, 'ComprehendMedicalAsyncJobProperties', this.__resources, this.input);
  }

}

export class ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobId', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobName', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.Message', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribePhiDetectionJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePHIDetectionJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribeRxNormInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
    super(scope, id);
  }

  public get comprehendMedicalAsyncJobProperties(): ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties {
    return new ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties(this, 'ComprehendMedicalAsyncJobProperties', this.__resources, this.input);
  }

}

export class ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobId', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobName', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.JobStatus', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.Message', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.SubmitTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.EndTime', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ExpirationTime', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ExpirationTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig {
    return new ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig {
    return new ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.LanguageCode', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.DataAccessRoleArn', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ManifestFilePath', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.KMSKey', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.ModelVersion', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.InputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDescribeRxNormInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Bucket', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRxNormInferenceJob.ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key', props);
    return resource.getResponseField('ComprehendMedicalAsyncJobProperties.OutputDataConfig.S3Key') as unknown as string;
  }

}

export class ComprehendMedicalDetectEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDetectEntitiesRequest) {
    super(scope, id);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntities.Entities', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntities.UnmappedAttributes', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntities.PaginationToken', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntities.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDetectEntitiesV2 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDetectEntitiesV2Request) {
    super(scope, id);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntitiesV2.Entities', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntitiesV2.UnmappedAttributes', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntitiesV2.PaginationToken', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntitiesV2.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalDetectPhi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalDetectPhiRequest) {
    super(scope, id);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectPHI.Entities', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectPHI.PaginationToken', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectPHI.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalInferIcd10Cm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalInferIcd10CmRequest) {
    super(scope, id);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferICD10CM.Entities', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferICD10CM.PaginationToken', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferICD10CM.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalInferRxNorm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalInferRxNormRequest) {
    super(scope, id);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferRxNorm.Entities', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferRxNorm.PaginationToken', props);
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
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InferRxNorm.ModelVersion', props);
    return resource.getResponseField('ModelVersion') as unknown as string;
  }

}

export class ComprehendMedicalListEntitiesDetectionV2Jobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalListEntitiesDetectionV2JobsRequest) {
    super(scope, id);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesDetectionV2Jobs.ComprehendMedicalAsyncJobPropertiesList', props);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesDetectionV2Jobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalListIcd10CmInferenceJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalListIcd10CmInferenceJobsRequest) {
    super(scope, id);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListICD10CMInferenceJobs.ComprehendMedicalAsyncJobPropertiesList', props);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListICD10CMInferenceJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalListPhiDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalListPhiDetectionJobsRequest) {
    super(scope, id);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPHIDetectionJobs.ComprehendMedicalAsyncJobPropertiesList', props);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPHIDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalListRxNormInferenceJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalListRxNormInferenceJobsRequest) {
    super(scope, id);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRxNormInferenceJobs.ComprehendMedicalAsyncJobPropertiesList', props);
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
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRxNormInferenceJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendMedicalStartEntitiesDetectionV2Job extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStartEntitiesDetectionV2JobRequest) {
    super(scope, id);
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
            S3Bucket: this.input.inputDataConfig.s3Bucket,
            S3Key: this.input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.input.outputDataConfig.s3Bucket,
            S3Key: this.input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          KMSKey: this.input.kmsKey,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartEntitiesDetectionV2Job.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStartIcd10CmInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStartIcd10CmInferenceJobRequest) {
    super(scope, id);
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
            S3Bucket: this.input.inputDataConfig.s3Bucket,
            S3Key: this.input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.input.outputDataConfig.s3Bucket,
            S3Key: this.input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          KMSKey: this.input.kmsKey,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartICD10CMInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStartPhiDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStartPhiDetectionJobRequest) {
    super(scope, id);
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
            S3Bucket: this.input.inputDataConfig.s3Bucket,
            S3Key: this.input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.input.outputDataConfig.s3Bucket,
            S3Key: this.input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          KMSKey: this.input.kmsKey,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartPHIDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStartRxNormInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStartRxNormInferenceJobRequest) {
    super(scope, id);
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
            S3Bucket: this.input.inputDataConfig.s3Bucket,
            S3Key: this.input.inputDataConfig.s3Key,
          },
          OutputDataConfig: {
            S3Bucket: this.input.outputDataConfig.s3Bucket,
            S3Key: this.input.outputDataConfig.s3Key,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          KMSKey: this.input.kmsKey,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartRxNormInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStopEntitiesDetectionV2Job extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStopEntitiesDetectionV2JobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopEntitiesDetectionV2Job.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStopIcd10CmInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStopIcd10CmInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopICD10CMInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStopPhiDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStopPhiDetectionJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopPHIDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class ComprehendMedicalStopRxNormInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendMedicalStopRxNormInferenceJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRxNormInferenceJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

