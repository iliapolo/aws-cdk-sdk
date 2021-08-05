import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TranslateClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createParallelData(input: shapes.TranslateCreateParallelDataRequest): TranslateResponsesCreateParallelData {
    return new TranslateResponsesCreateParallelData(this, this.__resources, input);
  }

  public deleteParallelData(input: shapes.TranslateDeleteParallelDataRequest): TranslateResponsesDeleteParallelData {
    return new TranslateResponsesDeleteParallelData(this, this.__resources, input);
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

  public describeTextTranslationJob(input: shapes.TranslateDescribeTextTranslationJobRequest): TranslateResponsesDescribeTextTranslationJob {
    return new TranslateResponsesDescribeTextTranslationJob(this, this.__resources, input);
  }

  public fetchParallelData(input: shapes.TranslateGetParallelDataRequest): TranslateResponsesFetchParallelData {
    return new TranslateResponsesFetchParallelData(this, this.__resources, input);
  }

  public fetchTerminology(input: shapes.TranslateGetTerminologyRequest): TranslateResponsesFetchTerminology {
    return new TranslateResponsesFetchTerminology(this, this.__resources, input);
  }

  public importTerminology(input: shapes.TranslateImportTerminologyRequest): TranslateResponsesImportTerminology {
    return new TranslateResponsesImportTerminology(this, this.__resources, input);
  }

  public listParallelData(input: shapes.TranslateListParallelDataRequest): TranslateResponsesListParallelData {
    return new TranslateResponsesListParallelData(this, this.__resources, input);
  }

  public listTerminologies(input: shapes.TranslateListTerminologiesRequest): TranslateResponsesListTerminologies {
    return new TranslateResponsesListTerminologies(this, this.__resources, input);
  }

  public listTextTranslationJobs(input: shapes.TranslateListTextTranslationJobsRequest): TranslateResponsesListTextTranslationJobs {
    return new TranslateResponsesListTextTranslationJobs(this, this.__resources, input);
  }

  public startTextTranslationJob(input: shapes.TranslateStartTextTranslationJobRequest): TranslateResponsesStartTextTranslationJob {
    return new TranslateResponsesStartTextTranslationJob(this, this.__resources, input);
  }

  public stopTextTranslationJob(input: shapes.TranslateStopTextTranslationJobRequest): TranslateResponsesStopTextTranslationJob {
    return new TranslateResponsesStopTextTranslationJob(this, this.__resources, input);
  }

  public translateText(input: shapes.TranslateTranslateTextRequest): TranslateResponsesTranslateText {
    return new TranslateResponsesTranslateText(this, this.__resources, input);
  }

  public updateParallelData(input: shapes.TranslateUpdateParallelDataRequest): TranslateResponsesUpdateParallelData {
    return new TranslateResponsesUpdateParallelData(this, this.__resources, input);
  }

}

export class TranslateResponsesCreateParallelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateCreateParallelDataRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParallelData.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParallelData.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class TranslateResponsesDeleteParallelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDeleteParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteParallelData.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteParallelData.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class TranslateResponsesDescribeTextTranslationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDescribeTextTranslationJobRequest) {
  }

  public get textTranslationJobProperties(): TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties {
    return new TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDescribeTextTranslationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobStatus', props);
    return resource.getResponseField('TextTranslationJobProperties.JobStatus') as unknown as string;
  }

  public get jobDetails(): TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails {
    return new TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.SourceLanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.TargetLanguageCodes', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.TerminologyNames', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.ParallelDataNames', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.SubmittedTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.EndTime', props);
    return resource.getResponseField('TextTranslationJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig {
    return new TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig {
    return new TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('TextTranslationJobProperties.DataAccessRoleArn') as unknown as string;
  }

}

export class TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDescribeTextTranslationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.TranslatedDocumentsCount', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.DocumentsWithErrorsCount', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.JobDetails.InputDocumentsCount', props);
    return resource.getResponseField('TextTranslationJobProperties.JobDetails.InputDocumentsCount') as unknown as number;
  }

}

export class TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDescribeTextTranslationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.InputDataConfig.ContentType', props);
    return resource.getResponseField('TextTranslationJobProperties.InputDataConfig.ContentType') as unknown as string;
  }

}

export class TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateDescribeTextTranslationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTextTranslationJob.TextTranslationJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('TextTranslationJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
  }

  public get parallelDataProperties(): TranslateResponsesFetchParallelDataParallelDataProperties {
    return new TranslateResponsesFetchParallelDataParallelDataProperties(this.__scope, this.__resources, this.__input);
  }

  public get dataLocation(): TranslateResponsesFetchParallelDataDataLocation {
    return new TranslateResponsesFetchParallelDataDataLocation(this.__scope, this.__resources, this.__input);
  }

  public get auxiliaryDataLocation(): TranslateResponsesFetchParallelDataAuxiliaryDataLocation {
    return new TranslateResponsesFetchParallelDataAuxiliaryDataLocation(this.__scope, this.__resources, this.__input);
  }

  public get latestUpdateAttemptAuxiliaryDataLocation(): TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation {
    return new TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation(this.__scope, this.__resources, this.__input);
  }

}

export class TranslateResponsesFetchParallelDataParallelDataProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.Arn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.Description', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.Status', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.SourceLanguageCode', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.TargetLanguageCodes', props);
    return resource.getResponseField('ParallelDataProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get parallelDataConfig(): TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig {
    return new TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.Message', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.ImportedDataSize', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.ImportedRecordCount', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.FailedRecordCount', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.SkippedRecordCount', props);
    return resource.getResponseField('ParallelDataProperties.SkippedRecordCount') as unknown as number;
  }

  public get encryptionKey(): TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey {
    return new TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.CreatedAt', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.LastUpdatedAt', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.LatestUpdateAttemptStatus', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.LatestUpdateAttemptAt', props);
    return resource.getResponseField('ParallelDataProperties.LatestUpdateAttemptAt') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.ParallelDataConfig.S3Uri', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.ParallelDataConfig.Format', props);
    return resource.getResponseField('ParallelDataProperties.ParallelDataConfig.Format') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.EncryptionKey.Type', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.ParallelDataProperties.EncryptionKey.Id', props);
    return resource.getResponseField('ParallelDataProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelDataDataLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.DataLocation.RepositoryType', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.DataLocation.Location', props);
    return resource.getResponseField('DataLocation.Location') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelDataAuxiliaryDataLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.AuxiliaryDataLocation.RepositoryType', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.AuxiliaryDataLocation.Location', props);
    return resource.getResponseField('AuxiliaryDataLocation.Location') as unknown as string;
  }

}

export class TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetParallelDataRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.RepositoryType', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParallelData.LatestUpdateAttemptAuxiliaryDataLocation.Location', props);
    return resource.getResponseField('LatestUpdateAttemptAuxiliaryDataLocation.Location') as unknown as string;
  }

}

export class TranslateResponsesFetchTerminology {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetTerminologyRequest) {
  }

  public get terminologyProperties(): TranslateResponsesFetchTerminologyTerminologyProperties {
    return new TranslateResponsesFetchTerminologyTerminologyProperties(this.__scope, this.__resources, this.__input);
  }

  public get terminologyDataLocation(): TranslateResponsesFetchTerminologyTerminologyDataLocation {
    return new TranslateResponsesFetchTerminologyTerminologyDataLocation(this.__scope, this.__resources, this.__input);
  }

}

export class TranslateResponsesFetchTerminologyTerminologyProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetTerminologyRequest) {
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.Name', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.Description', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.Arn', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.SourceLanguageCode', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.TargetLanguageCodes', props);
    return resource.getResponseField('TerminologyProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get encryptionKey(): TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey {
    return new TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.SizeBytes', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.TermCount', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.CreatedAt', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.LastUpdatedAt', props);
    return resource.getResponseField('TerminologyProperties.LastUpdatedAt') as unknown as string;
  }

}

export class TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetTerminologyRequest) {
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.EncryptionKey.Type', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyProperties.EncryptionKey.Id', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateResponsesFetchTerminologyTerminologyDataLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateGetTerminologyRequest) {
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyDataLocation.RepositoryType', props);
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
          Name: this.__input.name,
          TerminologyDataFormat: this.__input.terminologyDataFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTerminology.TerminologyDataLocation.Location', props);
    return resource.getResponseField('TerminologyDataLocation.Location') as unknown as string;
  }

}

export class TranslateResponsesImportTerminology {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateImportTerminologyRequest) {
  }

  public get terminologyProperties(): TranslateResponsesImportTerminologyTerminologyProperties {
    return new TranslateResponsesImportTerminologyTerminologyProperties(this.__scope, this.__resources, this.__input);
  }

}

export class TranslateResponsesImportTerminologyTerminologyProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateImportTerminologyRequest) {
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.Name', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.Description', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.Arn', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.SourceLanguageCode', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.TargetLanguageCodes', props);
    return resource.getResponseField('TerminologyProperties.TargetLanguageCodes') as unknown as string[];
  }

  public get encryptionKey(): TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey {
    return new TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.SizeBytes', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.TermCount', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.CreatedAt', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.LastUpdatedAt', props);
    return resource.getResponseField('TerminologyProperties.LastUpdatedAt') as unknown as string;
  }

}

export class TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateImportTerminologyRequest) {
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.EncryptionKey.Type', props);
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
          Name: this.__input.name,
          MergeStrategy: this.__input.mergeStrategy,
          Description: this.__input.description,
          TerminologyData: {
            File: {
            },
            Format: this.__input.terminologyData.format,
          },
          EncryptionKey: {
            Type: this.__input.encryptionKey?.type,
            Id: this.__input.encryptionKey?.id,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportTerminology.TerminologyProperties.EncryptionKey.Id', props);
    return resource.getResponseField('TerminologyProperties.EncryptionKey.Id') as unknown as string;
  }

}

export class TranslateResponsesListParallelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateListParallelDataRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParallelData.ParallelDataPropertiesList', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParallelData.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateResponsesListTerminologies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateListTerminologiesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTerminologies.TerminologyPropertiesList', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTerminologies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateResponsesListTextTranslationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateListTextTranslationJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmittedBeforeTime: this.__input.filter?.submittedBeforeTime,
            SubmittedAfterTime: this.__input.filter?.submittedAfterTime,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTextTranslationJobs.TextTranslationJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmittedBeforeTime: this.__input.filter?.submittedBeforeTime,
            SubmittedAfterTime: this.__input.filter?.submittedAfterTime,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTextTranslationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TranslateResponsesStartTextTranslationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateStartTextTranslationJobRequest) {
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
          JobName: this.__input.jobName,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
            ContentType: this.__input.inputDataConfig.contentType,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCodes: this.__input.targetLanguageCodes,
          TerminologyNames: this.__input.terminologyNames,
          ParallelDataNames: this.__input.parallelDataNames,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTextTranslationJob.JobId', props);
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
          JobName: this.__input.jobName,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
            ContentType: this.__input.inputDataConfig.contentType,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCodes: this.__input.targetLanguageCodes,
          TerminologyNames: this.__input.terminologyNames,
          ParallelDataNames: this.__input.parallelDataNames,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTextTranslationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class TranslateResponsesStopTextTranslationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateStopTextTranslationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTextTranslationJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTextTranslationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class TranslateResponsesTranslateText {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateTranslateTextRequest) {
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
          Text: this.__input.text,
          TerminologyNames: this.__input.terminologyNames,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCode: this.__input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TranslateText.TranslatedText', props);
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
          Text: this.__input.text,
          TerminologyNames: this.__input.terminologyNames,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCode: this.__input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TranslateText.SourceLanguageCode', props);
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
          Text: this.__input.text,
          TerminologyNames: this.__input.terminologyNames,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCode: this.__input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TranslateText.TargetLanguageCode', props);
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
          Text: this.__input.text,
          TerminologyNames: this.__input.terminologyNames,
          SourceLanguageCode: this.__input.sourceLanguageCode,
          TargetLanguageCode: this.__input.targetLanguageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TranslateText.AppliedTerminologies', props);
    return resource.getResponseField('AppliedTerminologies') as unknown as shapes.TranslateAppliedTerminology[];
  }

}

export class TranslateResponsesUpdateParallelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TranslateUpdateParallelDataRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParallelData.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParallelData.Status', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParallelData.LatestUpdateAttemptStatus', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ParallelDataConfig: {
            S3Uri: this.__input.parallelDataConfig.s3Uri,
            Format: this.__input.parallelDataConfig.format,
          },
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParallelData.LatestUpdateAttemptAt', props);
    return resource.getResponseField('LatestUpdateAttemptAt') as unknown as string;
  }

}

