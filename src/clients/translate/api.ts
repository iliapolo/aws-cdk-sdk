import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TranslateClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createParallelData(input: shapes.TranslateCreateParallelDataRequest): TranslateCreateParallelData {
    return new TranslateCreateParallelData(this, 'CreateParallelData', this.__resources, input);
  }

  public deleteParallelData(input: shapes.TranslateDeleteParallelDataRequest): TranslateDeleteParallelData {
    return new TranslateDeleteParallelData(this, 'DeleteParallelData', this.__resources, input);
  }

  public deleteTerminology(input: shapes.TranslateDeleteTerminologyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DeleteTerminology'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTerminology', props);
  }

  public describeTextTranslationJob(input: shapes.TranslateDescribeTextTranslationJobRequest): TranslateDescribeTextTranslationJob {
    return new TranslateDescribeTextTranslationJob(this, 'DescribeTextTranslationJob', this.__resources, input);
  }

  public fetchParallelData(input: shapes.TranslateGetParallelDataRequest): TranslateFetchParallelData {
    return new TranslateFetchParallelData(this, 'FetchParallelData', this.__resources, input);
  }

  public fetchTerminology(input: shapes.TranslateGetTerminologyRequest): TranslateFetchTerminology {
    return new TranslateFetchTerminology(this, 'FetchTerminology', this.__resources, input);
  }

  public importTerminology(input: shapes.TranslateImportTerminologyRequest): TranslateImportTerminology {
    return new TranslateImportTerminology(this, 'ImportTerminology', this.__resources, input);
  }

  public listParallelData(input: shapes.TranslateListParallelDataRequest): TranslateListParallelData {
    return new TranslateListParallelData(this, 'ListParallelData', this.__resources, input);
  }

  public listTerminologies(input: shapes.TranslateListTerminologiesRequest): TranslateListTerminologies {
    return new TranslateListTerminologies(this, 'ListTerminologies', this.__resources, input);
  }

  public listTextTranslationJobs(input: shapes.TranslateListTextTranslationJobsRequest): TranslateListTextTranslationJobs {
    return new TranslateListTextTranslationJobs(this, 'ListTextTranslationJobs', this.__resources, input);
  }

  public startTextTranslationJob(input: shapes.TranslateStartTextTranslationJobRequest): TranslateStartTextTranslationJob {
    return new TranslateStartTextTranslationJob(this, 'StartTextTranslationJob', this.__resources, input);
  }

  public stopTextTranslationJob(input: shapes.TranslateStopTextTranslationJobRequest): TranslateStopTextTranslationJob {
    return new TranslateStopTextTranslationJob(this, 'StopTextTranslationJob', this.__resources, input);
  }

  public translateText(input: shapes.TranslateTranslateTextRequest): TranslateTranslateText {
    return new TranslateTranslateText(this, 'TranslateText', this.__resources, input);
  }

  public updateParallelData(input: shapes.TranslateUpdateParallelDataRequest): TranslateUpdateParallelData {
    return new TranslateUpdateParallelData(this, 'UpdateParallelData', this.__resources, input);
  }

}

export class TranslateCreateParallelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateCreateParallelDataRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.CreateParallelData.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParallelData.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.CreateParallelData.Status'),
        outputPath: 'Status',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParallelData.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class TranslateDeleteParallelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDeleteParallelDataRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DeleteParallelData.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteParallelData.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DeleteParallelData.Status'),
        outputPath: 'Status',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteParallelData.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class TranslateDescribeTextTranslationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDescribeTextTranslationJobRequest) {
    super(scope, id);
  }

  public get textTranslationJobProperties(): TranslateDescribeTextTranslationJobTextTranslationJobProperties {
    return new TranslateDescribeTextTranslationJobTextTranslationJobProperties(this, 'TextTranslationJobProperties', this.__resources, this.input);
  }

}

export class TranslateDescribeTextTranslationJobTextTranslationJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDescribeTextTranslationJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobId'),
        outputPath: 'TextTranslationJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobId', props);
    return resource.getResponseField('TextTranslationJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobName'),
        outputPath: 'TextTranslationJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobName', props);
    return resource.getResponseField('TextTranslationJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobStatus'),
        outputPath: 'TextTranslationJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobStatus', props);
    return resource.getResponseField('TextTranslationJobProperties.JobStatus') as unknown as string;
  }

  public get jobDetails(): TranslateDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails {
    return new TranslateDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails(this, 'JobDetails', this.__resources, this.input);
  }

  public get sourceLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.SourceLanguageCode'),
        outputPath: 'TextTranslationJobProperties.SourceLanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.SourceLanguageCode', props);
    return resource.getResponseField('TextTranslationJobProperties.SourceLanguageCode') as unknown as string;
  }

  public get targetLanguageCodes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.TargetLanguageCodes'),
        outputPath: 'TextTranslationJobProperties.TargetLanguageCodes',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.TargetLanguageCodes', props);
    return resource.getResponseField('TextTranslationJobProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get terminologyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.TerminologyNames'),
        outputPath: 'TextTranslationJobProperties.TerminologyNames',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.TerminologyNames', props);
    return resource.getResponseField('TextTranslationJobProperties.TerminologyNames') as unknown as string[];
  }

  public get parallelDataNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.ParallelDataNames'),
        outputPath: 'TextTranslationJobProperties.ParallelDataNames',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.ParallelDataNames', props);
    return resource.getResponseField('TextTranslationJobProperties.ParallelDataNames') as unknown as string[];
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.Message'),
        outputPath: 'TextTranslationJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.Message', props);
    return resource.getResponseField('TextTranslationJobProperties.Message') as unknown as string;
  }

  public get submittedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.SubmittedTime'),
        outputPath: 'TextTranslationJobProperties.SubmittedTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.SubmittedTime', props);
    return resource.getResponseField('TextTranslationJobProperties.SubmittedTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.EndTime'),
        outputPath: 'TextTranslationJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.EndTime', props);
    return resource.getResponseField('TextTranslationJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): TranslateDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig {
    return new TranslateDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): TranslateDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig {
    return new TranslateDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.DataAccessRoleArn'),
        outputPath: 'TextTranslationJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('TextTranslationJobProperties.DataAccessRoleArn') as unknown as string;
  }

}

export class TranslateDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDescribeTextTranslationJobRequest) {
    super(scope, id);
  }

  public get translatedDocumentsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.TranslatedDocumentsCount'),
        outputPath: 'TextTranslationJobProperties.JobDetails.TranslatedDocumentsCount',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.TranslatedDocumentsCount', props);
    return resource.getResponseField('TextTranslationJobProperties.JobDetails.TranslatedDocumentsCount') as unknown as number;
  }

  public get documentsWithErrorsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.DocumentsWithErrorsCount'),
        outputPath: 'TextTranslationJobProperties.JobDetails.DocumentsWithErrorsCount',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.DocumentsWithErrorsCount', props);
    return resource.getResponseField('TextTranslationJobProperties.JobDetails.DocumentsWithErrorsCount') as unknown as number;
  }

  public get inputDocumentsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.InputDocumentsCount'),
        outputPath: 'TextTranslationJobProperties.JobDetails.InputDocumentsCount',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.InputDocumentsCount', props);
    return resource.getResponseField('TextTranslationJobProperties.JobDetails.InputDocumentsCount') as unknown as number;
  }

}

export class TranslateDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDescribeTextTranslationJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'TextTranslationJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('TextTranslationJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.ContentType'),
        outputPath: 'TextTranslationJobProperties.InputDataConfig.ContentType',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.ContentType', props);
    return resource.getResponseField('TextTranslationJobProperties.InputDataConfig.ContentType') as unknown as string;
  }

}

export class TranslateDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateDescribeTextTranslationJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.DescribeTextTranslationJob.TextTranslationJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'TextTranslationJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTextTranslationJob.TextTranslationJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('TextTranslationJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

}

export class TranslateFetchParallelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get parallelDataProperties(): TranslateFetchParallelDataParallelDataProperties {
    return new TranslateFetchParallelDataParallelDataProperties(this, 'ParallelDataProperties', this.__resources, this.input);
  }

  public get dataLocation(): TranslateFetchParallelDataDataLocation {
    return new TranslateFetchParallelDataDataLocation(this, 'DataLocation', this.__resources, this.input);
  }

  public get auxiliaryDataLocation(): TranslateFetchParallelDataAuxiliaryDataLocation {
    return new TranslateFetchParallelDataAuxiliaryDataLocation(this, 'AuxiliaryDataLocation', this.__resources, this.input);
  }

  public get latestUpdateAttemptAuxiliaryDataLocation(): TranslateFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation {
    return new TranslateFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation(this, 'LatestUpdateAttemptAuxiliaryDataLocation', this.__resources, this.input);
  }

}

export class TranslateFetchParallelDataParallelDataProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.Name'),
        outputPath: 'ParallelDataProperties.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.Name', props);
    return resource.getResponseField('ParallelDataProperties.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.Arn'),
        outputPath: 'ParallelDataProperties.Arn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.Arn', props);
    return resource.getResponseField('ParallelDataProperties.Arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.Description'),
        outputPath: 'ParallelDataProperties.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.Description', props);
    return resource.getResponseField('ParallelDataProperties.Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.Status'),
        outputPath: 'ParallelDataProperties.Status',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.Status', props);
    return resource.getResponseField('ParallelDataProperties.Status') as unknown as string;
  }

  public get sourceLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.SourceLanguageCode'),
        outputPath: 'ParallelDataProperties.SourceLanguageCode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.SourceLanguageCode', props);
    return resource.getResponseField('ParallelDataProperties.SourceLanguageCode') as unknown as string;
  }

  public get targetLanguageCodes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.TargetLanguageCodes'),
        outputPath: 'ParallelDataProperties.TargetLanguageCodes',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.TargetLanguageCodes', props);
    return resource.getResponseField('ParallelDataProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get parallelDataConfig(): TranslateFetchParallelDataParallelDataPropertiesParallelDataConfig {
    return new TranslateFetchParallelDataParallelDataPropertiesParallelDataConfig(this, 'ParallelDataConfig', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.Message'),
        outputPath: 'ParallelDataProperties.Message',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.Message', props);
    return resource.getResponseField('ParallelDataProperties.Message') as unknown as string;
  }

  public get importedDataSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.ImportedDataSize'),
        outputPath: 'ParallelDataProperties.ImportedDataSize',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.ImportedDataSize', props);
    return resource.getResponseField('ParallelDataProperties.ImportedDataSize') as unknown as number;
  }

  public get importedRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.ImportedRecordCount'),
        outputPath: 'ParallelDataProperties.ImportedRecordCount',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.ImportedRecordCount', props);
    return resource.getResponseField('ParallelDataProperties.ImportedRecordCount') as unknown as number;
  }

  public get failedRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.FailedRecordCount'),
        outputPath: 'ParallelDataProperties.FailedRecordCount',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.FailedRecordCount', props);
    return resource.getResponseField('ParallelDataProperties.FailedRecordCount') as unknown as number;
  }

  public get skippedRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.SkippedRecordCount'),
        outputPath: 'ParallelDataProperties.SkippedRecordCount',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.SkippedRecordCount', props);
    return resource.getResponseField('ParallelDataProperties.SkippedRecordCount') as unknown as number;
  }

  public get encryptionKey(): TranslateFetchParallelDataParallelDataPropertiesEncryptionKey {
    return new TranslateFetchParallelDataParallelDataPropertiesEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.CreatedAt'),
        outputPath: 'ParallelDataProperties.CreatedAt',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.CreatedAt', props);
    return resource.getResponseField('ParallelDataProperties.CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.LastUpdatedAt'),
        outputPath: 'ParallelDataProperties.LastUpdatedAt',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.LastUpdatedAt', props);
    return resource.getResponseField('ParallelDataProperties.LastUpdatedAt') as unknown as string;
  }

  public get latestUpdateAttemptStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.LatestUpdateAttemptStatus'),
        outputPath: 'ParallelDataProperties.LatestUpdateAttemptStatus',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.LatestUpdateAttemptStatus', props);
    return resource.getResponseField('ParallelDataProperties.LatestUpdateAttemptStatus') as unknown as string;
  }

  public get latestUpdateAttemptAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.LatestUpdateAttemptAt'),
        outputPath: 'ParallelDataProperties.LatestUpdateAttemptAt',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.LatestUpdateAttemptAt', props);
    return resource.getResponseField('ParallelDataProperties.LatestUpdateAttemptAt') as unknown as string;
  }

}

export class TranslateFetchParallelDataParallelDataPropertiesParallelDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.ParallelDataConfig.S3Uri'),
        outputPath: 'ParallelDataProperties.ParallelDataConfig.S3Uri',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.ParallelDataConfig.S3Uri', props);
    return resource.getResponseField('ParallelDataProperties.ParallelDataConfig.S3Uri') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.ParallelDataConfig.Format'),
        outputPath: 'ParallelDataProperties.ParallelDataConfig.Format',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.ParallelDataConfig.Format', props);
    return resource.getResponseField('ParallelDataProperties.ParallelDataConfig.Format') as unknown as string;
  }

}

export class TranslateFetchParallelDataParallelDataPropertiesEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.EncryptionKey.Type'),
        outputPath: 'ParallelDataProperties.EncryptionKey.Type',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.EncryptionKey.Type', props);
    return resource.getResponseField('ParallelDataProperties.EncryptionKey.Type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.ParallelDataProperties.EncryptionKey.Id'),
        outputPath: 'ParallelDataProperties.EncryptionKey.Id',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.ParallelDataProperties.EncryptionKey.Id', props);
    return resource.getResponseField('ParallelDataProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateFetchParallelDataDataLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get repositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.DataLocation.RepositoryType'),
        outputPath: 'DataLocation.RepositoryType',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.DataLocation.RepositoryType', props);
    return resource.getResponseField('DataLocation.RepositoryType') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.DataLocation.Location'),
        outputPath: 'DataLocation.Location',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.DataLocation.Location', props);
    return resource.getResponseField('DataLocation.Location') as unknown as string;
  }

}

export class TranslateFetchParallelDataAuxiliaryDataLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get repositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.AuxiliaryDataLocation.RepositoryType'),
        outputPath: 'AuxiliaryDataLocation.RepositoryType',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.AuxiliaryDataLocation.RepositoryType', props);
    return resource.getResponseField('AuxiliaryDataLocation.RepositoryType') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.AuxiliaryDataLocation.Location'),
        outputPath: 'AuxiliaryDataLocation.Location',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.AuxiliaryDataLocation.Location', props);
    return resource.getResponseField('AuxiliaryDataLocation.Location') as unknown as string;
  }

}

export class TranslateFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetParallelDataRequest) {
    super(scope, id);
  }

  public get repositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.RepositoryType'),
        outputPath: 'LatestUpdateAttemptAuxiliaryDataLocation.RepositoryType',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.RepositoryType', props);
    return resource.getResponseField('LatestUpdateAttemptAuxiliaryDataLocation.RepositoryType') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.Location'),
        outputPath: 'LatestUpdateAttemptAuxiliaryDataLocation.Location',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.Location', props);
    return resource.getResponseField('LatestUpdateAttemptAuxiliaryDataLocation.Location') as unknown as string;
  }

}

export class TranslateFetchTerminology extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetTerminologyRequest) {
    super(scope, id);
  }

  public get terminologyProperties(): TranslateFetchTerminologyTerminologyProperties {
    return new TranslateFetchTerminologyTerminologyProperties(this, 'TerminologyProperties', this.__resources, this.input);
  }

  public get terminologyDataLocation(): TranslateFetchTerminologyTerminologyDataLocation {
    return new TranslateFetchTerminologyTerminologyDataLocation(this, 'TerminologyDataLocation', this.__resources, this.input);
  }

}

export class TranslateFetchTerminologyTerminologyProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetTerminologyRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.Name'),
        outputPath: 'TerminologyProperties.Name',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.Name', props);
    return resource.getResponseField('TerminologyProperties.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.Description'),
        outputPath: 'TerminologyProperties.Description',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.Description', props);
    return resource.getResponseField('TerminologyProperties.Description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.Arn'),
        outputPath: 'TerminologyProperties.Arn',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.Arn', props);
    return resource.getResponseField('TerminologyProperties.Arn') as unknown as string;
  }

  public get sourceLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.SourceLanguageCode'),
        outputPath: 'TerminologyProperties.SourceLanguageCode',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.SourceLanguageCode', props);
    return resource.getResponseField('TerminologyProperties.SourceLanguageCode') as unknown as string;
  }

  public get targetLanguageCodes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.TargetLanguageCodes'),
        outputPath: 'TerminologyProperties.TargetLanguageCodes',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.TargetLanguageCodes', props);
    return resource.getResponseField('TerminologyProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get encryptionKey(): TranslateFetchTerminologyTerminologyPropertiesEncryptionKey {
    return new TranslateFetchTerminologyTerminologyPropertiesEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

  public get sizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.SizeBytes'),
        outputPath: 'TerminologyProperties.SizeBytes',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.SizeBytes', props);
    return resource.getResponseField('TerminologyProperties.SizeBytes') as unknown as number;
  }

  public get termCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.TermCount'),
        outputPath: 'TerminologyProperties.TermCount',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.TermCount', props);
    return resource.getResponseField('TerminologyProperties.TermCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.CreatedAt'),
        outputPath: 'TerminologyProperties.CreatedAt',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.CreatedAt', props);
    return resource.getResponseField('TerminologyProperties.CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.LastUpdatedAt'),
        outputPath: 'TerminologyProperties.LastUpdatedAt',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.LastUpdatedAt', props);
    return resource.getResponseField('TerminologyProperties.LastUpdatedAt') as unknown as string;
  }

}

export class TranslateFetchTerminologyTerminologyPropertiesEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetTerminologyRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.EncryptionKey.Type'),
        outputPath: 'TerminologyProperties.EncryptionKey.Type',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.EncryptionKey.Type', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyProperties.EncryptionKey.Id'),
        outputPath: 'TerminologyProperties.EncryptionKey.Id',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyProperties.EncryptionKey.Id', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateFetchTerminologyTerminologyDataLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateGetTerminologyRequest) {
    super(scope, id);
  }

  public get repositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyDataLocation.RepositoryType'),
        outputPath: 'TerminologyDataLocation.RepositoryType',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyDataLocation.RepositoryType', props);
    return resource.getResponseField('TerminologyDataLocation.RepositoryType') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.GetTerminology.TerminologyDataLocation.Location'),
        outputPath: 'TerminologyDataLocation.Location',
        parameters: {
          Name: this.input.name,
          TerminologyDataFormat: this.input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTerminology.TerminologyDataLocation.Location', props);
    return resource.getResponseField('TerminologyDataLocation.Location') as unknown as string;
  }

}

export class TranslateImportTerminology extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateImportTerminologyRequest) {
    super(scope, id);
  }

  public get terminologyProperties(): TranslateImportTerminologyTerminologyProperties {
    return new TranslateImportTerminologyTerminologyProperties(this, 'TerminologyProperties', this.__resources, this.input);
  }

}

export class TranslateImportTerminologyTerminologyProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateImportTerminologyRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.Name'),
        outputPath: 'TerminologyProperties.Name',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.Name', props);
    return resource.getResponseField('TerminologyProperties.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.Description'),
        outputPath: 'TerminologyProperties.Description',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.Description', props);
    return resource.getResponseField('TerminologyProperties.Description') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.Arn'),
        outputPath: 'TerminologyProperties.Arn',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.Arn', props);
    return resource.getResponseField('TerminologyProperties.Arn') as unknown as string;
  }

  public get sourceLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.SourceLanguageCode'),
        outputPath: 'TerminologyProperties.SourceLanguageCode',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.SourceLanguageCode', props);
    return resource.getResponseField('TerminologyProperties.SourceLanguageCode') as unknown as string;
  }

  public get targetLanguageCodes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.TargetLanguageCodes'),
        outputPath: 'TerminologyProperties.TargetLanguageCodes',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.TargetLanguageCodes', props);
    return resource.getResponseField('TerminologyProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get encryptionKey(): TranslateImportTerminologyTerminologyPropertiesEncryptionKey {
    return new TranslateImportTerminologyTerminologyPropertiesEncryptionKey(this, 'EncryptionKey', this.__resources, this.input);
  }

  public get sizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.SizeBytes'),
        outputPath: 'TerminologyProperties.SizeBytes',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.SizeBytes', props);
    return resource.getResponseField('TerminologyProperties.SizeBytes') as unknown as number;
  }

  public get termCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.TermCount'),
        outputPath: 'TerminologyProperties.TermCount',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.TermCount', props);
    return resource.getResponseField('TerminologyProperties.TermCount') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.CreatedAt'),
        outputPath: 'TerminologyProperties.CreatedAt',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.CreatedAt', props);
    return resource.getResponseField('TerminologyProperties.CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.LastUpdatedAt'),
        outputPath: 'TerminologyProperties.LastUpdatedAt',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.LastUpdatedAt', props);
    return resource.getResponseField('TerminologyProperties.LastUpdatedAt') as unknown as string;
  }

}

export class TranslateImportTerminologyTerminologyPropertiesEncryptionKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateImportTerminologyRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.EncryptionKey.Type'),
        outputPath: 'TerminologyProperties.EncryptionKey.Type',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.EncryptionKey.Type', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importTerminology',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ImportTerminology.TerminologyProperties.EncryptionKey.Id'),
        outputPath: 'TerminologyProperties.EncryptionKey.Id',
        parameters: {
          Name: this.input.name,
          MergeStrategy: this.input.mergeStrategy,
          Description: this.input.description,
          TerminologyData: {
            File: {
            },
            Format: this.input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.input.encryptionKey?.type,
            Id: this.input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportTerminology.TerminologyProperties.EncryptionKey.Id', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateListParallelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateListParallelDataRequest) {
    super(scope, id);
  }

  public get parallelDataPropertiesList(): shapes.TranslateParallelDataProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListParallelData.ParallelDataPropertiesList'),
        outputPath: 'ParallelDataPropertiesList',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParallelData.ParallelDataPropertiesList', props);
    return resource.getResponseField('ParallelDataPropertiesList') as unknown as shapes.TranslateParallelDataProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListParallelData.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParallelData.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateListTerminologies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateListTerminologiesRequest) {
    super(scope, id);
  }

  public get terminologyPropertiesList(): shapes.TranslateTerminologyProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTerminologies',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListTerminologies.TerminologyPropertiesList'),
        outputPath: 'TerminologyPropertiesList',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTerminologies.TerminologyPropertiesList', props);
    return resource.getResponseField('TerminologyPropertiesList') as unknown as shapes.TranslateTerminologyProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTerminologies',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListTerminologies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTerminologies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateListTextTranslationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateListTextTranslationJobsRequest) {
    super(scope, id);
  }

  public get textTranslationJobPropertiesList(): shapes.TranslateTextTranslationJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTextTranslationJobs',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListTextTranslationJobs.TextTranslationJobPropertiesList'),
        outputPath: 'TextTranslationJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmittedBeforeTime: this.input.filter?.submittedBeforeTime,
            SubmittedAfterTime: this.input.filter?.submittedAfterTime,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTextTranslationJobs.TextTranslationJobPropertiesList', props);
    return resource.getResponseField('TextTranslationJobPropertiesList') as unknown as shapes.TranslateTextTranslationJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTextTranslationJobs',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.ListTextTranslationJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmittedBeforeTime: this.input.filter?.submittedBeforeTime,
            SubmittedAfterTime: this.input.filter?.submittedAfterTime,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTextTranslationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateStartTextTranslationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateStartTextTranslationJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.StartTextTranslationJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobName: this.input.jobName,
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            ContentType: this.input.inputDataConfig.contentType,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCodes: this.input.targetLanguageCodes,
          TerminologyNames: this.input.terminologyNames,
          ParallelDataNames: this.input.parallelDataNames,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTextTranslationJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.StartTextTranslationJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobName: this.input.jobName,
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            ContentType: this.input.inputDataConfig.contentType,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCodes: this.input.targetLanguageCodes,
          TerminologyNames: this.input.terminologyNames,
          ParallelDataNames: this.input.parallelDataNames,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTextTranslationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class TranslateStopTextTranslationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateStopTextTranslationJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.StopTextTranslationJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTextTranslationJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTextTranslationJob',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.StopTextTranslationJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTextTranslationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class TranslateTranslateText extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateTranslateTextRequest) {
    super(scope, id);
  }

  public get translatedText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'translateText',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.TranslateText.TranslatedText'),
        outputPath: 'TranslatedText',
        parameters: {
          Text: this.input.text,
          TerminologyNames: this.input.terminologyNames,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCode: this.input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TranslateText.TranslatedText', props);
    return resource.getResponseField('TranslatedText') as unknown as string;
  }

  public get sourceLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'translateText',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.TranslateText.SourceLanguageCode'),
        outputPath: 'SourceLanguageCode',
        parameters: {
          Text: this.input.text,
          TerminologyNames: this.input.terminologyNames,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCode: this.input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TranslateText.SourceLanguageCode', props);
    return resource.getResponseField('SourceLanguageCode') as unknown as string;
  }

  public get targetLanguageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'translateText',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.TranslateText.TargetLanguageCode'),
        outputPath: 'TargetLanguageCode',
        parameters: {
          Text: this.input.text,
          TerminologyNames: this.input.terminologyNames,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCode: this.input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TranslateText.TargetLanguageCode', props);
    return resource.getResponseField('TargetLanguageCode') as unknown as string;
  }

  public get appliedTerminologies(): shapes.TranslateAppliedTerminology[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'translateText',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.TranslateText.AppliedTerminologies'),
        outputPath: 'AppliedTerminologies',
        parameters: {
          Text: this.input.text,
          TerminologyNames: this.input.terminologyNames,
          SourceLanguageCode: this.input.sourceLanguageCode,
          TargetLanguageCode: this.input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TranslateText.AppliedTerminologies', props);
    return resource.getResponseField('AppliedTerminologies') as unknown as shapes.TranslateAppliedTerminology[];
  }

}

export class TranslateUpdateParallelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TranslateUpdateParallelDataRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.UpdateParallelData.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParallelData.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.UpdateParallelData.Status'),
        outputPath: 'Status',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParallelData.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get latestUpdateAttemptStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.UpdateParallelData.LatestUpdateAttemptStatus'),
        outputPath: 'LatestUpdateAttemptStatus',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParallelData.LatestUpdateAttemptStatus', props);
    return resource.getResponseField('LatestUpdateAttemptStatus') as unknown as string;
  }

  public get latestUpdateAttemptAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParallelData',
        service: 'Translate',
        physicalResourceId: cr.PhysicalResourceId.of('Translate.UpdateParallelData.LatestUpdateAttemptAt'),
        outputPath: 'LatestUpdateAttemptAt',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ParallelDataConfig: {
            S3Uri: this.input.parallelDataConfig.s3Uri,
            Format: this.input.parallelDataConfig.format,
          },
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParallelData.LatestUpdateAttemptAt', props);
    return resource.getResponseField('LatestUpdateAttemptAt') as unknown as string;
  }

}

