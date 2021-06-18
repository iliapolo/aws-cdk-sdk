import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DataExchangeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJob(input: shapes.DataExchangeCancelJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CancelJob'),
        parameters: {
          JobId: input.jobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelJob', props);
  }

  public createDataSet(input: shapes.DataExchangeCreateDataSetRequest): DataExchangeCreateDataSet {
    return new DataExchangeCreateDataSet(this, 'CreateDataSet', this.__resources, input);
  }

  public createJob(input: shapes.DataExchangeCreateJobRequest): DataExchangeCreateJob {
    return new DataExchangeCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public createRevision(input: shapes.DataExchangeCreateRevisionRequest): DataExchangeCreateRevision {
    return new DataExchangeCreateRevision(this, 'CreateRevision', this.__resources, input);
  }

  public deleteAsset(input: shapes.DataExchangeDeleteAssetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.DeleteAsset'),
        parameters: {
          AssetId: input.assetId,
          DataSetId: input.dataSetId,
          RevisionId: input.revisionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAsset', props);
  }

  public deleteDataSet(input: shapes.DataExchangeDeleteDataSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.DeleteDataSet'),
        parameters: {
          DataSetId: input.dataSetId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataSet', props);
  }

  public deleteRevision(input: shapes.DataExchangeDeleteRevisionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.DeleteRevision'),
        parameters: {
          DataSetId: input.dataSetId,
          RevisionId: input.revisionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRevision', props);
  }

  public fetchAsset(input: shapes.DataExchangeGetAssetRequest): DataExchangeFetchAsset {
    return new DataExchangeFetchAsset(this, 'FetchAsset', this.__resources, input);
  }

  public fetchDataSet(input: shapes.DataExchangeGetDataSetRequest): DataExchangeFetchDataSet {
    return new DataExchangeFetchDataSet(this, 'FetchDataSet', this.__resources, input);
  }

  public fetchJob(input: shapes.DataExchangeGetJobRequest): DataExchangeFetchJob {
    return new DataExchangeFetchJob(this, 'FetchJob', this.__resources, input);
  }

  public fetchRevision(input: shapes.DataExchangeGetRevisionRequest): DataExchangeFetchRevision {
    return new DataExchangeFetchRevision(this, 'FetchRevision', this.__resources, input);
  }

  public listDataSetRevisions(input: shapes.DataExchangeListDataSetRevisionsRequest): DataExchangeListDataSetRevisions {
    return new DataExchangeListDataSetRevisions(this, 'ListDataSetRevisions', this.__resources, input);
  }

  public listDataSets(input: shapes.DataExchangeListDataSetsRequest): DataExchangeListDataSets {
    return new DataExchangeListDataSets(this, 'ListDataSets', this.__resources, input);
  }

  public listJobs(input: shapes.DataExchangeListJobsRequest): DataExchangeListJobs {
    return new DataExchangeListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listRevisionAssets(input: shapes.DataExchangeListRevisionAssetsRequest): DataExchangeListRevisionAssets {
    return new DataExchangeListRevisionAssets(this, 'ListRevisionAssets', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataExchangeListTagsForResourceRequest): DataExchangeListTagsForResource {
    return new DataExchangeListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startJob(input: shapes.DataExchangeStartJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.StartJob'),
        parameters: {
          JobId: input.jobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartJob', props);
  }

  public tagResource(input: shapes.DataExchangeTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DataExchangeUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAsset(input: shapes.DataExchangeUpdateAssetRequest): DataExchangeUpdateAsset {
    return new DataExchangeUpdateAsset(this, 'UpdateAsset', this.__resources, input);
  }

  public updateDataSet(input: shapes.DataExchangeUpdateDataSetRequest): DataExchangeUpdateDataSet {
    return new DataExchangeUpdateDataSet(this, 'UpdateDataSet', this.__resources, input);
  }

  public updateRevision(input: shapes.DataExchangeUpdateRevisionRequest): DataExchangeUpdateRevision {
    return new DataExchangeUpdateRevision(this, 'UpdateRevision', this.__resources, input);
  }

}

export class DataExchangeCreateDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateDataSetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.AssetType'),
        outputPath: 'AssetType',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.AssetType', props);
    return resource.getResponseField('AssetType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Description'),
        outputPath: 'Description',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Id'),
        outputPath: 'Id',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Name'),
        outputPath: 'Name',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get origin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Origin'),
        outputPath: 'Origin',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeCreateDataSetOriginDetails {
    return new DataExchangeCreateDataSetOriginDetails(this, 'OriginDetails', this.__resources, this.input);
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeCreateDataSetOriginDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateDataSetRequest) {
    super(scope, id);
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateDataSet.OriginDetails.ProductId'),
        outputPath: 'OriginDetails.ProductId',
        parameters: {
          AssetType: this.input.assetType,
          Description: this.input.description,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Arn'),
        outputPath: 'Arn',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get details(): DataExchangeCreateJobDetails {
    return new DataExchangeCreateJobDetails(this, 'Details', this.__resources, this.input);
  }

  public get errors(): shapes.DataExchangeJobError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Errors'),
        outputPath: 'Errors',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.DataExchangeJobError[];
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Id'),
        outputPath: 'Id',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.State'),
        outputPath: 'State',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Type'),
        outputPath: 'Type',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeCreateJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get exportAssetToSignedUrl(): DataExchangeCreateJobDetailsExportAssetToSignedUrl {
    return new DataExchangeCreateJobDetailsExportAssetToSignedUrl(this, 'ExportAssetToSignedUrl', this.__resources, this.input);
  }

  public get exportAssetsToS3(): DataExchangeCreateJobDetailsExportAssetsToS3 {
    return new DataExchangeCreateJobDetailsExportAssetsToS3(this, 'ExportAssetsToS3', this.__resources, this.input);
  }

  public get importAssetFromSignedUrl(): DataExchangeCreateJobDetailsImportAssetFromSignedUrl {
    return new DataExchangeCreateJobDetailsImportAssetFromSignedUrl(this, 'ImportAssetFromSignedUrl', this.__resources, this.input);
  }

  public get importAssetsFromS3(): DataExchangeCreateJobDetailsImportAssetsFromS3 {
    return new DataExchangeCreateJobDetailsImportAssetsFromS3(this, 'ImportAssetsFromS3', this.__resources, this.input);
  }

}

export class DataExchangeCreateJobDetailsExportAssetToSignedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get assetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetToSignedUrl.AssetId'),
        outputPath: 'Details.ExportAssetToSignedUrl.AssetId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetToSignedUrl.AssetId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.AssetId') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetToSignedUrl.DataSetId'),
        outputPath: 'Details.ExportAssetToSignedUrl.DataSetId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetToSignedUrl.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.DataSetId') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetToSignedUrl.RevisionId'),
        outputPath: 'Details.ExportAssetToSignedUrl.RevisionId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetToSignedUrl.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.RevisionId') as unknown as string;
  }

  public get signedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetToSignedUrl.SignedUrl'),
        outputPath: 'Details.ExportAssetToSignedUrl.SignedUrl',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetToSignedUrl.SignedUrl', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrl') as unknown as string;
  }

  public get signedUrlExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt'),
        outputPath: 'Details.ExportAssetToSignedUrl.SignedUrlExpiresAt',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeCreateJobDetailsExportAssetsToS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get assetDestinations(): shapes.DataExchangeAssetDestinationEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetsToS3.AssetDestinations'),
        outputPath: 'Details.ExportAssetsToS3.AssetDestinations',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetsToS3.AssetDestinations', props);
    return resource.getResponseField('Details.ExportAssetsToS3.AssetDestinations') as unknown as shapes.DataExchangeAssetDestinationEntry[];
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetsToS3.DataSetId'),
        outputPath: 'Details.ExportAssetsToS3.DataSetId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetsToS3.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.DataSetId') as unknown as string;
  }

  public get encryption(): DataExchangeCreateJobDetailsExportAssetsToS3Encryption {
    return new DataExchangeCreateJobDetailsExportAssetsToS3Encryption(this, 'Encryption', this.__resources, this.input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetsToS3.RevisionId'),
        outputPath: 'Details.ExportAssetsToS3.RevisionId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetsToS3.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeCreateJobDetailsExportAssetsToS3Encryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn'),
        outputPath: 'Details.ExportAssetsToS3.Encryption.KmsKeyArn',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.KmsKeyArn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ExportAssetsToS3.Encryption.Type'),
        outputPath: 'Details.ExportAssetsToS3.Encryption.Type',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ExportAssetsToS3.Encryption.Type', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.Type') as unknown as string;
  }

}

export class DataExchangeCreateJobDetailsImportAssetFromSignedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get assetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.AssetName'),
        outputPath: 'Details.ImportAssetFromSignedUrl.AssetName',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.AssetName', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.AssetName') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.DataSetId'),
        outputPath: 'Details.ImportAssetFromSignedUrl.DataSetId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.DataSetId', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.DataSetId') as unknown as string;
  }

  public get md5Hash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.Md5Hash'),
        outputPath: 'Details.ImportAssetFromSignedUrl.Md5Hash',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.Md5Hash', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.Md5Hash') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.RevisionId'),
        outputPath: 'Details.ImportAssetFromSignedUrl.RevisionId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.RevisionId') as unknown as string;
  }

  public get signedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.SignedUrl'),
        outputPath: 'Details.ImportAssetFromSignedUrl.SignedUrl',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.SignedUrl', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrl') as unknown as string;
  }

  public get signedUrlExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt'),
        outputPath: 'Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeCreateJobDetailsImportAssetsFromS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateJobRequest) {
    super(scope, id);
  }

  public get assetSources(): shapes.DataExchangeAssetSourceEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetsFromS3.AssetSources'),
        outputPath: 'Details.ImportAssetsFromS3.AssetSources',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetsFromS3.AssetSources', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.AssetSources') as unknown as shapes.DataExchangeAssetSourceEntry[];
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetsFromS3.DataSetId'),
        outputPath: 'Details.ImportAssetsFromS3.DataSetId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetsFromS3.DataSetId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.DataSetId') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateJob.Details.ImportAssetsFromS3.RevisionId'),
        outputPath: 'Details.ImportAssetsFromS3.RevisionId',
        parameters: {
          Details: {
            ExportAssetToSignedUrl: {
              AssetId: this.input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Details.ImportAssetsFromS3.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeCreateRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeCreateRevisionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.Arn'),
        outputPath: 'Arn',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.Comment'),
        outputPath: 'Comment',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.Comment', props);
    return resource.getResponseField('Comment') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get finalized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.Finalized'),
        outputPath: 'Finalized',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.Finalized', props);
    return resource.getResponseField('Finalized') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.Id'),
        outputPath: 'Id',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.Tags'),
        outputPath: 'Tags',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.CreateRevision.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeFetchAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetAssetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.Arn'),
        outputPath: 'Arn',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetDetails(): DataExchangeFetchAssetAssetDetails {
    return new DataExchangeFetchAssetAssetDetails(this, 'AssetDetails', this.__resources, this.input);
  }

  public get assetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.AssetType'),
        outputPath: 'AssetType',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.AssetType', props);
    return resource.getResponseField('AssetType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.Id'),
        outputPath: 'Id',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.Name'),
        outputPath: 'Name',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeFetchAssetAssetDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetAssetRequest) {
    super(scope, id);
  }

  public get s3SnapshotAsset(): DataExchangeFetchAssetAssetDetailsS3SnapshotAsset {
    return new DataExchangeFetchAssetAssetDetailsS3SnapshotAsset(this, 'S3SnapshotAsset', this.__resources, this.input);
  }

}

export class DataExchangeFetchAssetAssetDetailsS3SnapshotAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetAssetRequest) {
    super(scope, id);
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetAsset.AssetDetails.S3SnapshotAsset.Size'),
        outputPath: 'AssetDetails.S3SnapshotAsset.Size',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAsset.AssetDetails.S3SnapshotAsset.Size', props);
    return resource.getResponseField('AssetDetails.S3SnapshotAsset.Size') as unknown as number;
  }

}

export class DataExchangeFetchDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetDataSetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.AssetType'),
        outputPath: 'AssetType',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.AssetType', props);
    return resource.getResponseField('AssetType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Description'),
        outputPath: 'Description',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Id'),
        outputPath: 'Id',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Name'),
        outputPath: 'Name',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get origin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Origin'),
        outputPath: 'Origin',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeFetchDataSetOriginDetails {
    return new DataExchangeFetchDataSetOriginDetails(this, 'OriginDetails', this.__resources, this.input);
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeFetchDataSetOriginDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetDataSetRequest) {
    super(scope, id);
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetDataSet.OriginDetails.ProductId'),
        outputPath: 'OriginDetails.ProductId',
        parameters: {
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeFetchJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Arn'),
        outputPath: 'Arn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get details(): DataExchangeFetchJobDetails {
    return new DataExchangeFetchJobDetails(this, 'Details', this.__resources, this.input);
  }

  public get errors(): shapes.DataExchangeJobError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Errors'),
        outputPath: 'Errors',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.DataExchangeJobError[];
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Id'),
        outputPath: 'Id',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.State'),
        outputPath: 'State',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Type'),
        outputPath: 'Type',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeFetchJobDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get exportAssetToSignedUrl(): DataExchangeFetchJobDetailsExportAssetToSignedUrl {
    return new DataExchangeFetchJobDetailsExportAssetToSignedUrl(this, 'ExportAssetToSignedUrl', this.__resources, this.input);
  }

  public get exportAssetsToS3(): DataExchangeFetchJobDetailsExportAssetsToS3 {
    return new DataExchangeFetchJobDetailsExportAssetsToS3(this, 'ExportAssetsToS3', this.__resources, this.input);
  }

  public get importAssetFromSignedUrl(): DataExchangeFetchJobDetailsImportAssetFromSignedUrl {
    return new DataExchangeFetchJobDetailsImportAssetFromSignedUrl(this, 'ImportAssetFromSignedUrl', this.__resources, this.input);
  }

  public get importAssetsFromS3(): DataExchangeFetchJobDetailsImportAssetsFromS3 {
    return new DataExchangeFetchJobDetailsImportAssetsFromS3(this, 'ImportAssetsFromS3', this.__resources, this.input);
  }

}

export class DataExchangeFetchJobDetailsExportAssetToSignedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get assetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetToSignedUrl.AssetId'),
        outputPath: 'Details.ExportAssetToSignedUrl.AssetId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetToSignedUrl.AssetId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.AssetId') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetToSignedUrl.DataSetId'),
        outputPath: 'Details.ExportAssetToSignedUrl.DataSetId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetToSignedUrl.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.DataSetId') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetToSignedUrl.RevisionId'),
        outputPath: 'Details.ExportAssetToSignedUrl.RevisionId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetToSignedUrl.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.RevisionId') as unknown as string;
  }

  public get signedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetToSignedUrl.SignedUrl'),
        outputPath: 'Details.ExportAssetToSignedUrl.SignedUrl',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetToSignedUrl.SignedUrl', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrl') as unknown as string;
  }

  public get signedUrlExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt'),
        outputPath: 'Details.ExportAssetToSignedUrl.SignedUrlExpiresAt',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeFetchJobDetailsExportAssetsToS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get assetDestinations(): shapes.DataExchangeAssetDestinationEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetsToS3.AssetDestinations'),
        outputPath: 'Details.ExportAssetsToS3.AssetDestinations',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetsToS3.AssetDestinations', props);
    return resource.getResponseField('Details.ExportAssetsToS3.AssetDestinations') as unknown as shapes.DataExchangeAssetDestinationEntry[];
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetsToS3.DataSetId'),
        outputPath: 'Details.ExportAssetsToS3.DataSetId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetsToS3.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.DataSetId') as unknown as string;
  }

  public get encryption(): DataExchangeFetchJobDetailsExportAssetsToS3Encryption {
    return new DataExchangeFetchJobDetailsExportAssetsToS3Encryption(this, 'Encryption', this.__resources, this.input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetsToS3.RevisionId'),
        outputPath: 'Details.ExportAssetsToS3.RevisionId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetsToS3.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeFetchJobDetailsExportAssetsToS3Encryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn'),
        outputPath: 'Details.ExportAssetsToS3.Encryption.KmsKeyArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.KmsKeyArn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ExportAssetsToS3.Encryption.Type'),
        outputPath: 'Details.ExportAssetsToS3.Encryption.Type',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ExportAssetsToS3.Encryption.Type', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.Type') as unknown as string;
  }

}

export class DataExchangeFetchJobDetailsImportAssetFromSignedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get assetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.AssetName'),
        outputPath: 'Details.ImportAssetFromSignedUrl.AssetName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.AssetName', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.AssetName') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.DataSetId'),
        outputPath: 'Details.ImportAssetFromSignedUrl.DataSetId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.DataSetId', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.DataSetId') as unknown as string;
  }

  public get md5Hash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.Md5Hash'),
        outputPath: 'Details.ImportAssetFromSignedUrl.Md5Hash',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.Md5Hash', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.Md5Hash') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.RevisionId'),
        outputPath: 'Details.ImportAssetFromSignedUrl.RevisionId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.RevisionId') as unknown as string;
  }

  public get signedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.SignedUrl'),
        outputPath: 'Details.ImportAssetFromSignedUrl.SignedUrl',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.SignedUrl', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrl') as unknown as string;
  }

  public get signedUrlExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt'),
        outputPath: 'Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeFetchJobDetailsImportAssetsFromS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetJobRequest) {
    super(scope, id);
  }

  public get assetSources(): shapes.DataExchangeAssetSourceEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetsFromS3.AssetSources'),
        outputPath: 'Details.ImportAssetsFromS3.AssetSources',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetsFromS3.AssetSources', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.AssetSources') as unknown as shapes.DataExchangeAssetSourceEntry[];
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetsFromS3.DataSetId'),
        outputPath: 'Details.ImportAssetsFromS3.DataSetId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetsFromS3.DataSetId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.DataSetId') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetJob.Details.ImportAssetsFromS3.RevisionId'),
        outputPath: 'Details.ImportAssetsFromS3.RevisionId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Details.ImportAssetsFromS3.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeFetchRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeGetRevisionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.Arn'),
        outputPath: 'Arn',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.Comment'),
        outputPath: 'Comment',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Comment', props);
    return resource.getResponseField('Comment') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get finalized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.Finalized'),
        outputPath: 'Finalized',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Finalized', props);
    return resource.getResponseField('Finalized') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.Id'),
        outputPath: 'Id',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.Tags'),
        outputPath: 'Tags',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.GetRevision.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeListDataSetRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeListDataSetRevisionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSetRevisions',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListDataSetRevisions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSetRevisions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get revisions(): shapes.DataExchangeRevisionEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSetRevisions',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListDataSetRevisions.Revisions'),
        outputPath: 'Revisions',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSetRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.DataExchangeRevisionEntry[];
  }

}

export class DataExchangeListDataSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeListDataSetsRequest) {
    super(scope, id);
  }

  public get dataSets(): shapes.DataExchangeDataSetEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListDataSets.DataSets'),
        outputPath: 'DataSets',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Origin: this.input.origin,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.DataSets', props);
    return resource.getResponseField('DataSets') as unknown as shapes.DataExchangeDataSetEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListDataSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Origin: this.input.origin,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeListJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.DataExchangeJobEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.DataExchangeJobEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeListRevisionAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeListRevisionAssetsRequest) {
    super(scope, id);
  }

  public get assets(): shapes.DataExchangeAssetEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRevisionAssets',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListRevisionAssets.Assets'),
        outputPath: 'Assets',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRevisionAssets.Assets', props);
    return resource.getResponseField('Assets') as unknown as shapes.DataExchangeAssetEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRevisionAssets',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListRevisionAssets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DataSetId: this.input.dataSetId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRevisionAssets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class DataExchangeUpdateAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateAssetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.Arn'),
        outputPath: 'Arn',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetDetails(): DataExchangeUpdateAssetAssetDetails {
    return new DataExchangeUpdateAssetAssetDetails(this, 'AssetDetails', this.__resources, this.input);
  }

  public get assetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.AssetType'),
        outputPath: 'AssetType',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.AssetType', props);
    return resource.getResponseField('AssetType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.Id'),
        outputPath: 'Id',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.Name'),
        outputPath: 'Name',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeUpdateAssetAssetDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateAssetRequest) {
    super(scope, id);
  }

  public get s3SnapshotAsset(): DataExchangeUpdateAssetAssetDetailsS3SnapshotAsset {
    return new DataExchangeUpdateAssetAssetDetailsS3SnapshotAsset(this, 'S3SnapshotAsset', this.__resources, this.input);
  }

}

export class DataExchangeUpdateAssetAssetDetailsS3SnapshotAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateAssetRequest) {
    super(scope, id);
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAsset',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateAsset.AssetDetails.S3SnapshotAsset.Size'),
        outputPath: 'AssetDetails.S3SnapshotAsset.Size',
        parameters: {
          AssetId: this.input.assetId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAsset.AssetDetails.S3SnapshotAsset.Size', props);
    return resource.getResponseField('AssetDetails.S3SnapshotAsset.Size') as unknown as number;
  }

}

export class DataExchangeUpdateDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateDataSetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.AssetType'),
        outputPath: 'AssetType',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.AssetType', props);
    return resource.getResponseField('AssetType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.Description'),
        outputPath: 'Description',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.Id'),
        outputPath: 'Id',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.Name'),
        outputPath: 'Name',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get origin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.Origin'),
        outputPath: 'Origin',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeUpdateDataSetOriginDetails {
    return new DataExchangeUpdateDataSetOriginDetails(this, 'OriginDetails', this.__resources, this.input);
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeUpdateDataSetOriginDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateDataSetRequest) {
    super(scope, id);
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateDataSet.OriginDetails.ProductId'),
        outputPath: 'OriginDetails.ProductId',
        parameters: {
          DataSetId: this.input.dataSetId,
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeUpdateRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataExchangeUpdateRevisionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.Arn'),
        outputPath: 'Arn',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.Comment'),
        outputPath: 'Comment',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.Comment', props);
    return resource.getResponseField('Comment') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get finalized(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.Finalized'),
        outputPath: 'Finalized',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.Finalized', props);
    return resource.getResponseField('Finalized') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.Id'),
        outputPath: 'Id',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get sourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.SourceId'),
        outputPath: 'SourceId',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.SourceId', props);
    return resource.getResponseField('SourceId') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRevision',
        service: 'DataExchange',
        physicalResourceId: cr.PhysicalResourceId.of('DataExchange.UpdateRevision.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          Comment: this.input.comment,
          DataSetId: this.input.dataSetId,
          Finalized: this.input.finalized,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

