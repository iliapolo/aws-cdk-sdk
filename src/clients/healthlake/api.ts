import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HealthLakeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createFhirDatastore(input: shapes.HealthLakeCreateFhirDatastoreRequest): HealthLakeResponsesCreateFhirDatastore {
    return new HealthLakeResponsesCreateFhirDatastore(this, this.__resources, input);
  }

  public deleteFhirDatastore(input: shapes.HealthLakeDeleteFhirDatastoreRequest): HealthLakeResponsesDeleteFhirDatastore {
    return new HealthLakeResponsesDeleteFhirDatastore(this, this.__resources, input);
  }

  public describeFhirDatastore(input: shapes.HealthLakeDescribeFhirDatastoreRequest): HealthLakeResponsesDescribeFhirDatastore {
    return new HealthLakeResponsesDescribeFhirDatastore(this, this.__resources, input);
  }

  public describeFhirExportJob(input: shapes.HealthLakeDescribeFhirExportJobRequest): HealthLakeResponsesDescribeFhirExportJob {
    return new HealthLakeResponsesDescribeFhirExportJob(this, this.__resources, input);
  }

  public describeFhirImportJob(input: shapes.HealthLakeDescribeFhirImportJobRequest): HealthLakeResponsesDescribeFhirImportJob {
    return new HealthLakeResponsesDescribeFhirImportJob(this, this.__resources, input);
  }

  public listFhirDatastores(input: shapes.HealthLakeListFhirDatastoresRequest): HealthLakeResponsesListFhirDatastores {
    return new HealthLakeResponsesListFhirDatastores(this, this.__resources, input);
  }

  public listFhirExportJobs(input: shapes.HealthLakeListFhirExportJobsRequest): HealthLakeResponsesListFhirExportJobs {
    return new HealthLakeResponsesListFhirExportJobs(this, this.__resources, input);
  }

  public listFhirImportJobs(input: shapes.HealthLakeListFhirImportJobsRequest): HealthLakeResponsesListFhirImportJobs {
    return new HealthLakeResponsesListFhirImportJobs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.HealthLakeListTagsForResourceRequest): HealthLakeResponsesListTagsForResource {
    return new HealthLakeResponsesListTagsForResource(this, this.__resources, input);
  }

  public startFhirExportJob(input: shapes.HealthLakeStartFhirExportJobRequest): HealthLakeResponsesStartFhirExportJob {
    return new HealthLakeResponsesStartFhirExportJob(this, this.__resources, input);
  }

  public startFhirImportJob(input: shapes.HealthLakeStartFhirImportJobRequest): HealthLakeResponsesStartFhirImportJob {
    return new HealthLakeResponsesStartFhirImportJob(this, this.__resources, input);
  }

  public tagResource(input: shapes.HealthLakeTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.HealthLakeUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class HealthLakeResponsesCreateFhirDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeCreateFhirDatastoreRequest) {
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.CreateFHIRDatastore.DatastoreId'),
        outputPath: 'DatastoreId',
        parameters: {
          DatastoreName: this.__input.datastoreName,
          DatastoreTypeVersion: this.__input.datastoreTypeVersion,
          SseConfiguration: {
            KmsEncryptionConfig: {
              CmkType: this.__input.sseConfiguration?.kmsEncryptionConfig.cmkType,
              KmsKeyId: this.__input.sseConfiguration?.kmsEncryptionConfig.kmsKeyId,
            },
          },
          PreloadDataConfig: {
            PreloadDataType: this.__input.preloadDataConfig?.preloadDataType,
          },
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFHIRDatastore.DatastoreId', props);
    return resource.getResponseField('DatastoreId') as unknown as string;
  }

  public get datastoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.CreateFHIRDatastore.DatastoreArn'),
        outputPath: 'DatastoreArn',
        parameters: {
          DatastoreName: this.__input.datastoreName,
          DatastoreTypeVersion: this.__input.datastoreTypeVersion,
          SseConfiguration: {
            KmsEncryptionConfig: {
              CmkType: this.__input.sseConfiguration?.kmsEncryptionConfig.cmkType,
              KmsKeyId: this.__input.sseConfiguration?.kmsEncryptionConfig.kmsKeyId,
            },
          },
          PreloadDataConfig: {
            PreloadDataType: this.__input.preloadDataConfig?.preloadDataType,
          },
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFHIRDatastore.DatastoreArn', props);
    return resource.getResponseField('DatastoreArn') as unknown as string;
  }

  public get datastoreStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.CreateFHIRDatastore.DatastoreStatus'),
        outputPath: 'DatastoreStatus',
        parameters: {
          DatastoreName: this.__input.datastoreName,
          DatastoreTypeVersion: this.__input.datastoreTypeVersion,
          SseConfiguration: {
            KmsEncryptionConfig: {
              CmkType: this.__input.sseConfiguration?.kmsEncryptionConfig.cmkType,
              KmsKeyId: this.__input.sseConfiguration?.kmsEncryptionConfig.kmsKeyId,
            },
          },
          PreloadDataConfig: {
            PreloadDataType: this.__input.preloadDataConfig?.preloadDataType,
          },
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFHIRDatastore.DatastoreStatus', props);
    return resource.getResponseField('DatastoreStatus') as unknown as string;
  }

  public get datastoreEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.CreateFHIRDatastore.DatastoreEndpoint'),
        outputPath: 'DatastoreEndpoint',
        parameters: {
          DatastoreName: this.__input.datastoreName,
          DatastoreTypeVersion: this.__input.datastoreTypeVersion,
          SseConfiguration: {
            KmsEncryptionConfig: {
              CmkType: this.__input.sseConfiguration?.kmsEncryptionConfig.cmkType,
              KmsKeyId: this.__input.sseConfiguration?.kmsEncryptionConfig.kmsKeyId,
            },
          },
          PreloadDataConfig: {
            PreloadDataType: this.__input.preloadDataConfig?.preloadDataType,
          },
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFHIRDatastore.DatastoreEndpoint', props);
    return resource.getResponseField('DatastoreEndpoint') as unknown as string;
  }

}

export class HealthLakeResponsesDeleteFhirDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDeleteFhirDatastoreRequest) {
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DeleteFHIRDatastore.DatastoreId'),
        outputPath: 'DatastoreId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFHIRDatastore.DatastoreId', props);
    return resource.getResponseField('DatastoreId') as unknown as string;
  }

  public get datastoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DeleteFHIRDatastore.DatastoreArn'),
        outputPath: 'DatastoreArn',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFHIRDatastore.DatastoreArn', props);
    return resource.getResponseField('DatastoreArn') as unknown as string;
  }

  public get datastoreStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DeleteFHIRDatastore.DatastoreStatus'),
        outputPath: 'DatastoreStatus',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFHIRDatastore.DatastoreStatus', props);
    return resource.getResponseField('DatastoreStatus') as unknown as string;
  }

  public get datastoreEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DeleteFHIRDatastore.DatastoreEndpoint'),
        outputPath: 'DatastoreEndpoint',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFHIRDatastore.DatastoreEndpoint', props);
    return resource.getResponseField('DatastoreEndpoint') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirDatastoreRequest) {
  }

  public get datastoreProperties(): HealthLakeResponsesDescribeFhirDatastoreDatastoreProperties {
    return new HealthLakeResponsesDescribeFhirDatastoreDatastoreProperties(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirDatastoreDatastoreProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirDatastoreRequest) {
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreId'),
        outputPath: 'DatastoreProperties.DatastoreId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreId', props);
    return resource.getResponseField('DatastoreProperties.DatastoreId') as unknown as string;
  }

  public get datastoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreArn'),
        outputPath: 'DatastoreProperties.DatastoreArn',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreArn', props);
    return resource.getResponseField('DatastoreProperties.DatastoreArn') as unknown as string;
  }

  public get datastoreName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreName'),
        outputPath: 'DatastoreProperties.DatastoreName',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreName', props);
    return resource.getResponseField('DatastoreProperties.DatastoreName') as unknown as string;
  }

  public get datastoreStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreStatus'),
        outputPath: 'DatastoreProperties.DatastoreStatus',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreStatus', props);
    return resource.getResponseField('DatastoreProperties.DatastoreStatus') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.CreatedAt'),
        outputPath: 'DatastoreProperties.CreatedAt',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.CreatedAt', props);
    return resource.getResponseField('DatastoreProperties.CreatedAt') as unknown as string;
  }

  public get datastoreTypeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreTypeVersion'),
        outputPath: 'DatastoreProperties.DatastoreTypeVersion',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreTypeVersion', props);
    return resource.getResponseField('DatastoreProperties.DatastoreTypeVersion') as unknown as string;
  }

  public get datastoreEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.DatastoreEndpoint'),
        outputPath: 'DatastoreProperties.DatastoreEndpoint',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.DatastoreEndpoint', props);
    return resource.getResponseField('DatastoreProperties.DatastoreEndpoint') as unknown as string;
  }

  public get sseConfiguration(): HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfiguration {
    return new HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get preloadDataConfig(): HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesPreloadDataConfig {
    return new HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesPreloadDataConfig(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirDatastoreRequest) {
  }

  public get kmsEncryptionConfig(): HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfigurationKmsEncryptionConfig {
    return new HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfigurationKmsEncryptionConfig(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesSseConfigurationKmsEncryptionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirDatastoreRequest) {
  }

  public get cmkType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.SseConfiguration.KmsEncryptionConfig.CmkType'),
        outputPath: 'DatastoreProperties.SseConfiguration.KmsEncryptionConfig.CmkType',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.SseConfiguration.KmsEncryptionConfig.CmkType', props);
    return resource.getResponseField('DatastoreProperties.SseConfiguration.KmsEncryptionConfig.CmkType') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.SseConfiguration.KmsEncryptionConfig.KmsKeyId'),
        outputPath: 'DatastoreProperties.SseConfiguration.KmsEncryptionConfig.KmsKeyId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.SseConfiguration.KmsEncryptionConfig.KmsKeyId', props);
    return resource.getResponseField('DatastoreProperties.SseConfiguration.KmsEncryptionConfig.KmsKeyId') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirDatastoreDatastorePropertiesPreloadDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirDatastoreRequest) {
  }

  public get preloadDataType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirDatastore',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRDatastore.DatastoreProperties.PreloadDataConfig.PreloadDataType'),
        outputPath: 'DatastoreProperties.PreloadDataConfig.PreloadDataType',
        parameters: {
          DatastoreId: this.__input.datastoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRDatastore.DatastoreProperties.PreloadDataConfig.PreloadDataType', props);
    return resource.getResponseField('DatastoreProperties.PreloadDataConfig.PreloadDataType') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirExportJobRequest) {
  }

  public get exportJobProperties(): HealthLakeResponsesDescribeFhirExportJobExportJobProperties {
    return new HealthLakeResponsesDescribeFhirExportJobExportJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirExportJobExportJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirExportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.JobId'),
        outputPath: 'ExportJobProperties.JobId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.JobId', props);
    return resource.getResponseField('ExportJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.JobName'),
        outputPath: 'ExportJobProperties.JobName',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.JobName', props);
    return resource.getResponseField('ExportJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.JobStatus'),
        outputPath: 'ExportJobProperties.JobStatus',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.JobStatus', props);
    return resource.getResponseField('ExportJobProperties.JobStatus') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.SubmitTime'),
        outputPath: 'ExportJobProperties.SubmitTime',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.SubmitTime', props);
    return resource.getResponseField('ExportJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.EndTime'),
        outputPath: 'ExportJobProperties.EndTime',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.EndTime', props);
    return resource.getResponseField('ExportJobProperties.EndTime') as unknown as string;
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.DatastoreId'),
        outputPath: 'ExportJobProperties.DatastoreId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.DatastoreId', props);
    return resource.getResponseField('ExportJobProperties.DatastoreId') as unknown as string;
  }

  public get outputDataConfig(): HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfig {
    return new HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.DataAccessRoleArn'),
        outputPath: 'ExportJobProperties.DataAccessRoleArn',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ExportJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.Message'),
        outputPath: 'ExportJobProperties.Message',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.Message', props);
    return resource.getResponseField('ExportJobProperties.Message') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirExportJobRequest) {
  }

  public get s3Configuration(): HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfigS3Configuration {
    return new HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfigS3Configuration(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirExportJobExportJobPropertiesOutputDataConfigS3Configuration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirExportJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.OutputDataConfig.S3Configuration.S3Uri'),
        outputPath: 'ExportJobProperties.OutputDataConfig.S3Configuration.S3Uri',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.OutputDataConfig.S3Configuration.S3Uri', props);
    return resource.getResponseField('ExportJobProperties.OutputDataConfig.S3Configuration.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRExportJob.ExportJobProperties.OutputDataConfig.S3Configuration.KmsKeyId'),
        outputPath: 'ExportJobProperties.OutputDataConfig.S3Configuration.KmsKeyId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRExportJob.ExportJobProperties.OutputDataConfig.S3Configuration.KmsKeyId', props);
    return resource.getResponseField('ExportJobProperties.OutputDataConfig.S3Configuration.KmsKeyId') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirImportJobRequest) {
  }

  public get importJobProperties(): HealthLakeResponsesDescribeFhirImportJobImportJobProperties {
    return new HealthLakeResponsesDescribeFhirImportJobImportJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirImportJobImportJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirImportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.JobId'),
        outputPath: 'ImportJobProperties.JobId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.JobId', props);
    return resource.getResponseField('ImportJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.JobName'),
        outputPath: 'ImportJobProperties.JobName',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.JobName', props);
    return resource.getResponseField('ImportJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.JobStatus'),
        outputPath: 'ImportJobProperties.JobStatus',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.JobStatus', props);
    return resource.getResponseField('ImportJobProperties.JobStatus') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.SubmitTime'),
        outputPath: 'ImportJobProperties.SubmitTime',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.SubmitTime', props);
    return resource.getResponseField('ImportJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.EndTime'),
        outputPath: 'ImportJobProperties.EndTime',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.EndTime', props);
    return resource.getResponseField('ImportJobProperties.EndTime') as unknown as string;
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.DatastoreId'),
        outputPath: 'ImportJobProperties.DatastoreId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.DatastoreId', props);
    return resource.getResponseField('ImportJobProperties.DatastoreId') as unknown as string;
  }

  public get inputDataConfig(): HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesInputDataConfig {
    return new HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get jobOutputDataConfig(): HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfig {
    return new HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.DataAccessRoleArn'),
        outputPath: 'ImportJobProperties.DataAccessRoleArn',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('ImportJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.Message'),
        outputPath: 'ImportJobProperties.Message',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.Message', props);
    return resource.getResponseField('ImportJobProperties.Message') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirImportJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'ImportJobProperties.InputDataConfig.S3Uri',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('ImportJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

}

export class HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirImportJobRequest) {
  }

  public get s3Configuration(): HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfigS3Configuration {
    return new HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfigS3Configuration(this.__scope, this.__resources, this.__input);
  }

}

export class HealthLakeResponsesDescribeFhirImportJobImportJobPropertiesJobOutputDataConfigS3Configuration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeDescribeFhirImportJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.JobOutputDataConfig.S3Configuration.S3Uri'),
        outputPath: 'ImportJobProperties.JobOutputDataConfig.S3Configuration.S3Uri',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.JobOutputDataConfig.S3Configuration.S3Uri', props);
    return resource.getResponseField('ImportJobProperties.JobOutputDataConfig.S3Configuration.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.DescribeFHIRImportJob.ImportJobProperties.JobOutputDataConfig.S3Configuration.KmsKeyId'),
        outputPath: 'ImportJobProperties.JobOutputDataConfig.S3Configuration.KmsKeyId',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFHIRImportJob.ImportJobProperties.JobOutputDataConfig.S3Configuration.KmsKeyId', props);
    return resource.getResponseField('ImportJobProperties.JobOutputDataConfig.S3Configuration.KmsKeyId') as unknown as string;
  }

}

export class HealthLakeResponsesListFhirDatastores {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeListFhirDatastoresRequest) {
  }

  public get datastorePropertiesList(): shapes.HealthLakeDatastoreProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirDatastores',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRDatastores.DatastorePropertiesList'),
        outputPath: 'DatastorePropertiesList',
        parameters: {
          Filter: {
            DatastoreName: this.__input.filter?.datastoreName,
            DatastoreStatus: this.__input.filter?.datastoreStatus,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRDatastores.DatastorePropertiesList', props);
    return resource.getResponseField('DatastorePropertiesList') as unknown as shapes.HealthLakeDatastoreProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirDatastores',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRDatastores.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            DatastoreName: this.__input.filter?.datastoreName,
            DatastoreStatus: this.__input.filter?.datastoreStatus,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRDatastores.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class HealthLakeResponsesListFhirExportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeListFhirExportJobsRequest) {
  }

  public get exportJobPropertiesList(): shapes.HealthLakeExportJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirExportJobs',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRExportJobs.ExportJobPropertiesList'),
        outputPath: 'ExportJobPropertiesList',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          JobName: this.__input.jobName,
          JobStatus: this.__input.jobStatus,
          SubmittedBefore: this.__input.submittedBefore,
          SubmittedAfter: this.__input.submittedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRExportJobs.ExportJobPropertiesList', props);
    return resource.getResponseField('ExportJobPropertiesList') as unknown as shapes.HealthLakeExportJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirExportJobs',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRExportJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          JobName: this.__input.jobName,
          JobStatus: this.__input.jobStatus,
          SubmittedBefore: this.__input.submittedBefore,
          SubmittedAfter: this.__input.submittedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRExportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class HealthLakeResponsesListFhirImportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeListFhirImportJobsRequest) {
  }

  public get importJobPropertiesList(): shapes.HealthLakeImportJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirImportJobs',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRImportJobs.ImportJobPropertiesList'),
        outputPath: 'ImportJobPropertiesList',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          JobName: this.__input.jobName,
          JobStatus: this.__input.jobStatus,
          SubmittedBefore: this.__input.submittedBefore,
          SubmittedAfter: this.__input.submittedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRImportJobs.ImportJobPropertiesList', props);
    return resource.getResponseField('ImportJobPropertiesList') as unknown as shapes.HealthLakeImportJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFhirImportJobs',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListFHIRImportJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DatastoreId: this.__input.datastoreId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          JobName: this.__input.jobName,
          JobStatus: this.__input.jobStatus,
          SubmittedBefore: this.__input.submittedBefore,
          SubmittedAfter: this.__input.submittedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFHIRImportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class HealthLakeResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeListTagsForResourceRequest) {
  }

  public get tags(): shapes.HealthLakeTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.HealthLakeTag[];
  }

}

export class HealthLakeResponsesStartFhirExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeStartFhirExportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRExportJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobName: this.__input.jobName,
          OutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.outputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.outputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRExportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRExportJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobName: this.__input.jobName,
          OutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.outputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.outputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRExportJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirExportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRExportJob.DatastoreId'),
        outputPath: 'DatastoreId',
        parameters: {
          JobName: this.__input.jobName,
          OutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.outputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.outputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRExportJob.DatastoreId', props);
    return resource.getResponseField('DatastoreId') as unknown as string;
  }

}

export class HealthLakeResponsesStartFhirImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HealthLakeStartFhirImportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRImportJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobName: this.__input.jobName,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
          },
          JobOutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.jobOutputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.jobOutputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRImportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRImportJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobName: this.__input.jobName,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
          },
          JobOutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.jobOutputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.jobOutputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRImportJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get datastoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFhirImportJob',
        service: 'HealthLake',
        physicalResourceId: cr.PhysicalResourceId.of('HealthLake.StartFHIRImportJob.DatastoreId'),
        outputPath: 'DatastoreId',
        parameters: {
          JobName: this.__input.jobName,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
          },
          JobOutputDataConfig: {
            S3Configuration: {
              S3Uri: this.__input.jobOutputDataConfig.s3Configuration?.s3Uri,
              KmsKeyId: this.__input.jobOutputDataConfig.s3Configuration?.kmsKeyId,
            },
          },
          DatastoreId: this.__input.datastoreId,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFHIRImportJob.DatastoreId', props);
    return resource.getResponseField('DatastoreId') as unknown as string;
  }

}

