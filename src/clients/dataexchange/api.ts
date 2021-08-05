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

  public createDataSet(input: shapes.DataExchangeCreateDataSetRequest): DataExchangeResponsesCreateDataSet {
    return new DataExchangeResponsesCreateDataSet(this, this.__resources, input);
  }

  public createJob(input: shapes.DataExchangeCreateJobRequest): DataExchangeResponsesCreateJob {
    return new DataExchangeResponsesCreateJob(this, this.__resources, input);
  }

  public createRevision(input: shapes.DataExchangeCreateRevisionRequest): DataExchangeResponsesCreateRevision {
    return new DataExchangeResponsesCreateRevision(this, this.__resources, input);
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

  public fetchAsset(input: shapes.DataExchangeGetAssetRequest): DataExchangeResponsesFetchAsset {
    return new DataExchangeResponsesFetchAsset(this, this.__resources, input);
  }

  public fetchDataSet(input: shapes.DataExchangeGetDataSetRequest): DataExchangeResponsesFetchDataSet {
    return new DataExchangeResponsesFetchDataSet(this, this.__resources, input);
  }

  public fetchJob(input: shapes.DataExchangeGetJobRequest): DataExchangeResponsesFetchJob {
    return new DataExchangeResponsesFetchJob(this, this.__resources, input);
  }

  public fetchRevision(input: shapes.DataExchangeGetRevisionRequest): DataExchangeResponsesFetchRevision {
    return new DataExchangeResponsesFetchRevision(this, this.__resources, input);
  }

  public listDataSetRevisions(input: shapes.DataExchangeListDataSetRevisionsRequest): DataExchangeResponsesListDataSetRevisions {
    return new DataExchangeResponsesListDataSetRevisions(this, this.__resources, input);
  }

  public listDataSets(input: shapes.DataExchangeListDataSetsRequest): DataExchangeResponsesListDataSets {
    return new DataExchangeResponsesListDataSets(this, this.__resources, input);
  }

  public listJobs(input: shapes.DataExchangeListJobsRequest): DataExchangeResponsesListJobs {
    return new DataExchangeResponsesListJobs(this, this.__resources, input);
  }

  public listRevisionAssets(input: shapes.DataExchangeListRevisionAssetsRequest): DataExchangeResponsesListRevisionAssets {
    return new DataExchangeResponsesListRevisionAssets(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataExchangeListTagsForResourceRequest): DataExchangeResponsesListTagsForResource {
    return new DataExchangeResponsesListTagsForResource(this, this.__resources, input);
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

  public updateAsset(input: shapes.DataExchangeUpdateAssetRequest): DataExchangeResponsesUpdateAsset {
    return new DataExchangeResponsesUpdateAsset(this, this.__resources, input);
  }

  public updateDataSet(input: shapes.DataExchangeUpdateDataSetRequest): DataExchangeResponsesUpdateDataSet {
    return new DataExchangeResponsesUpdateDataSet(this, this.__resources, input);
  }

  public updateRevision(input: shapes.DataExchangeUpdateRevisionRequest): DataExchangeResponsesUpdateRevision {
    return new DataExchangeResponsesUpdateRevision(this, this.__resources, input);
  }

}

export class DataExchangeResponsesCreateDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateDataSetRequest) {
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Arn', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.AssetType', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.CreatedAt', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Description', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Id', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Name', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeResponsesCreateDataSetOriginDetails {
    return new DataExchangeResponsesCreateDataSetOriginDetails(this.__scope, this.__resources, this.__input);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.SourceId', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Tags', props);
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesCreateDataSetOriginDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateDataSetRequest) {
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
          AssetType: this.__input.assetType,
          Description: this.__input.description,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Arn', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get details(): DataExchangeResponsesCreateJobDetails {
    return new DataExchangeResponsesCreateJobDetails(this.__scope, this.__resources, this.__input);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Errors', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Id', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.State', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Type', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
  }

  public get exportAssetToSignedUrl(): DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl {
    return new DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl(this.__scope, this.__resources, this.__input);
  }

  public get exportAssetsToS3(): DataExchangeResponsesCreateJobDetailsExportAssetsToS3 {
    return new DataExchangeResponsesCreateJobDetailsExportAssetsToS3(this.__scope, this.__resources, this.__input);
  }

  public get importAssetFromSignedUrl(): DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl {
    return new DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl(this.__scope, this.__resources, this.__input);
  }

  public get importAssetsFromS3(): DataExchangeResponsesCreateJobDetailsImportAssetsFromS3 {
    return new DataExchangeResponsesCreateJobDetailsImportAssetsFromS3(this.__scope, this.__resources, this.__input);
  }

}

export class DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetToSignedUrl.AssetId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetToSignedUrl.DataSetId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetToSignedUrl.RevisionId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetToSignedUrl.SignedUrl', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJobDetailsExportAssetsToS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetsToS3.AssetDestinations', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetsToS3.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.DataSetId') as unknown as string;
  }

  public get encryption(): DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption {
    return new DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption(this.__scope, this.__resources, this.__input);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetsToS3.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ExportAssetsToS3.Encryption.Type', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.Type') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.AssetName', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.DataSetId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.Md5Hash', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.RevisionId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.SignedUrl', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeResponsesCreateJobDetailsImportAssetsFromS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateJobRequest) {
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetsFromS3.AssetSources', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetsFromS3.DataSetId', props);
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
              AssetId: this.__input.details.exportAssetToSignedUrl?.assetId,
              DataSetId: this.__input.details.exportAssetToSignedUrl?.dataSetId,
              RevisionId: this.__input.details.exportAssetToSignedUrl?.revisionId,
            },
            ExportAssetsToS3: {
              AssetDestinations: this.__input.details.exportAssetsToS3?.assetDestinations,
              DataSetId: this.__input.details.exportAssetsToS3?.dataSetId,
              Encryption: {
                KmsKeyArn: this.__input.details.exportAssetsToS3?.encryption?.kmsKeyArn,
                Type: this.__input.details.exportAssetsToS3?.encryption?.type,
              },
              RevisionId: this.__input.details.exportAssetsToS3?.revisionId,
            },
            ImportAssetFromSignedUrl: {
              AssetName: this.__input.details.importAssetFromSignedUrl?.assetName,
              DataSetId: this.__input.details.importAssetFromSignedUrl?.dataSetId,
              Md5Hash: this.__input.details.importAssetFromSignedUrl?.md5Hash,
              RevisionId: this.__input.details.importAssetFromSignedUrl?.revisionId,
            },
            ImportAssetsFromS3: {
              AssetSources: this.__input.details.importAssetsFromS3?.assetSources,
              DataSetId: this.__input.details.importAssetsFromS3?.dataSetId,
              RevisionId: this.__input.details.importAssetsFromS3?.revisionId,
            },
          },
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Details.ImportAssetsFromS3.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeResponsesCreateRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeCreateRevisionRequest) {
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.Arn', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.Comment', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.CreatedAt', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.DataSetId', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.Finalized', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.Id', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.SourceId', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.Tags', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetAssetRequest) {
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetDetails(): DataExchangeResponsesFetchAssetAssetDetails {
    return new DataExchangeResponsesFetchAssetAssetDetails(this.__scope, this.__resources, this.__input);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.AssetType', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.CreatedAt', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.DataSetId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.Id', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.Name', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.RevisionId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.SourceId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchAssetAssetDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetAssetRequest) {
  }

  public get s3SnapshotAsset(): DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset {
    return new DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset(this.__scope, this.__resources, this.__input);
  }

}

export class DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetAssetRequest) {
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAsset.AssetDetails.S3SnapshotAsset.Size', props);
    return resource.getResponseField('AssetDetails.S3SnapshotAsset.Size') as unknown as number;
  }

}

export class DataExchangeResponsesFetchDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetDataSetRequest) {
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Arn', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.AssetType', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.CreatedAt', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Description', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Id', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Name', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeResponsesFetchDataSetOriginDetails {
    return new DataExchangeResponsesFetchDataSetOriginDetails(this.__scope, this.__resources, this.__input);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.SourceId', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.Tags', props);
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchDataSetOriginDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetDataSetRequest) {
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
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Arn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get details(): DataExchangeResponsesFetchJobDetails {
    return new DataExchangeResponsesFetchJobDetails(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Errors', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Id', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.State', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Type', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
  }

  public get exportAssetToSignedUrl(): DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl {
    return new DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl(this.__scope, this.__resources, this.__input);
  }

  public get exportAssetsToS3(): DataExchangeResponsesFetchJobDetailsExportAssetsToS3 {
    return new DataExchangeResponsesFetchJobDetailsExportAssetsToS3(this.__scope, this.__resources, this.__input);
  }

  public get importAssetFromSignedUrl(): DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl {
    return new DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl(this.__scope, this.__resources, this.__input);
  }

  public get importAssetsFromS3(): DataExchangeResponsesFetchJobDetailsImportAssetsFromS3 {
    return new DataExchangeResponsesFetchJobDetailsImportAssetsFromS3(this.__scope, this.__resources, this.__input);
  }

}

export class DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetToSignedUrl.AssetId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetToSignedUrl.DataSetId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetToSignedUrl.RevisionId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetToSignedUrl.SignedUrl', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetToSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ExportAssetToSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJobDetailsExportAssetsToS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetsToS3.AssetDestinations', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetsToS3.DataSetId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.DataSetId') as unknown as string;
  }

  public get encryption(): DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption {
    return new DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetsToS3.RevisionId', props);
    return resource.getResponseField('Details.ExportAssetsToS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetsToS3.Encryption.KmsKeyArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ExportAssetsToS3.Encryption.Type', props);
    return resource.getResponseField('Details.ExportAssetsToS3.Encryption.Type') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.AssetName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.DataSetId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.Md5Hash', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.RevisionId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.SignedUrl', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt', props);
    return resource.getResponseField('Details.ImportAssetFromSignedUrl.SignedUrlExpiresAt') as unknown as string;
  }

}

export class DataExchangeResponsesFetchJobDetailsImportAssetsFromS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetsFromS3.AssetSources', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetsFromS3.DataSetId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Details.ImportAssetsFromS3.RevisionId', props);
    return resource.getResponseField('Details.ImportAssetsFromS3.RevisionId') as unknown as string;
  }

}

export class DataExchangeResponsesFetchRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeGetRevisionRequest) {
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Arn', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Comment', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.CreatedAt', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.DataSetId', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Finalized', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Id', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.SourceId', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Tags', props);
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
          DataSetId: this.__input.dataSetId,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesListDataSetRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeListDataSetRevisionsRequest) {
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSetRevisions.NextToken', props);
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSetRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.DataExchangeRevisionEntry[];
  }

}

export class DataExchangeResponsesListDataSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeListDataSetsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Origin: this.__input.origin,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.DataSets', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Origin: this.__input.origin,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeListJobsRequest) {
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.Jobs', props);
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeResponsesListRevisionAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeListRevisionAssetsRequest) {
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRevisionAssets.Assets', props);
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
          DataSetId: this.__input.dataSetId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRevisionAssets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataExchangeResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class DataExchangeResponsesUpdateAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateAssetRequest) {
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get assetDetails(): DataExchangeResponsesUpdateAssetAssetDetails {
    return new DataExchangeResponsesUpdateAssetAssetDetails(this.__scope, this.__resources, this.__input);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.AssetType', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.CreatedAt', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.DataSetId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.Id', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.Name', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.RevisionId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.SourceId', props);
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesUpdateAssetAssetDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateAssetRequest) {
  }

  public get s3SnapshotAsset(): DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset {
    return new DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset(this.__scope, this.__resources, this.__input);
  }

}

export class DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateAssetRequest) {
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
          AssetId: this.__input.assetId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAsset.AssetDetails.S3SnapshotAsset.Size', props);
    return resource.getResponseField('AssetDetails.S3SnapshotAsset.Size') as unknown as number;
  }

}

export class DataExchangeResponsesUpdateDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateDataSetRequest) {
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Arn', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.AssetType', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.CreatedAt', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Description', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Id', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Name', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Origin', props);
    return resource.getResponseField('Origin') as unknown as string;
  }

  public get originDetails(): DataExchangeResponsesUpdateDataSetOriginDetails {
    return new DataExchangeResponsesUpdateDataSetOriginDetails(this.__scope, this.__resources, this.__input);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.SourceId', props);
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class DataExchangeResponsesUpdateDataSetOriginDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateDataSetRequest) {
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
          DataSetId: this.__input.dataSetId,
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.OriginDetails.ProductId', props);
    return resource.getResponseField('OriginDetails.ProductId') as unknown as string;
  }

}

export class DataExchangeResponsesUpdateRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataExchangeUpdateRevisionRequest) {
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.Arn', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.Comment', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.CreatedAt', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.DataSetId', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.Finalized', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.Id', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.SourceId', props);
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
          Comment: this.__input.comment,
          DataSetId: this.__input.dataSetId,
          Finalized: this.__input.finalized,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRevision.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

