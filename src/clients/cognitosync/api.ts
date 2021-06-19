import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CognitoSyncClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public bulkPublish(input: shapes.CognitoSyncBulkPublishRequest): CognitoSyncResponsesBulkPublish {
    return new CognitoSyncResponsesBulkPublish(this, this.__resources, input);
  }

  public deleteDataset(input: shapes.CognitoSyncDeleteDatasetRequest): CognitoSyncResponsesDeleteDataset {
    return new CognitoSyncResponsesDeleteDataset(this, this.__resources, input);
  }

  public describeDataset(input: shapes.CognitoSyncDescribeDatasetRequest): CognitoSyncResponsesDescribeDataset {
    return new CognitoSyncResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeIdentityPoolUsage(input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest): CognitoSyncResponsesDescribeIdentityPoolUsage {
    return new CognitoSyncResponsesDescribeIdentityPoolUsage(this, this.__resources, input);
  }

  public describeIdentityUsage(input: shapes.CognitoSyncDescribeIdentityUsageRequest): CognitoSyncResponsesDescribeIdentityUsage {
    return new CognitoSyncResponsesDescribeIdentityUsage(this, this.__resources, input);
  }

  public fetchBulkPublishDetails(input: shapes.CognitoSyncGetBulkPublishDetailsRequest): CognitoSyncResponsesFetchBulkPublishDetails {
    return new CognitoSyncResponsesFetchBulkPublishDetails(this, this.__resources, input);
  }

  public fetchCognitoEvents(input: shapes.CognitoSyncGetCognitoEventsRequest): CognitoSyncResponsesFetchCognitoEvents {
    return new CognitoSyncResponsesFetchCognitoEvents(this, this.__resources, input);
  }

  public fetchIdentityPoolConfiguration(input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest): CognitoSyncResponsesFetchIdentityPoolConfiguration {
    return new CognitoSyncResponsesFetchIdentityPoolConfiguration(this, this.__resources, input);
  }

  public listDatasets(input: shapes.CognitoSyncListDatasetsRequest): CognitoSyncResponsesListDatasets {
    return new CognitoSyncResponsesListDatasets(this, this.__resources, input);
  }

  public listIdentityPoolUsage(input: shapes.CognitoSyncListIdentityPoolUsageRequest): CognitoSyncResponsesListIdentityPoolUsage {
    return new CognitoSyncResponsesListIdentityPoolUsage(this, this.__resources, input);
  }

  public listRecords(input: shapes.CognitoSyncListRecordsRequest): CognitoSyncResponsesListRecords {
    return new CognitoSyncResponsesListRecords(this, this.__resources, input);
  }

  public registerDevice(input: shapes.CognitoSyncRegisterDeviceRequest): CognitoSyncResponsesRegisterDevice {
    return new CognitoSyncResponsesRegisterDevice(this, this.__resources, input);
  }

  public putCognitoEvents(input: shapes.CognitoSyncSetCognitoEventsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setCognitoEvents',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetCognitoEvents'),
        parameters: {
          IdentityPoolId: input.identityPoolId,
          Events: input.events,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetCognitoEvents', props);
  }

  public putIdentityPoolConfiguration(input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest): CognitoSyncResponsesPutIdentityPoolConfiguration {
    return new CognitoSyncResponsesPutIdentityPoolConfiguration(this, this.__resources, input);
  }

  public subscribeToDataset(input: shapes.CognitoSyncSubscribeToDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'subscribeToDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SubscribeToDataset'),
        parameters: {
          IdentityPoolId: input.identityPoolId,
          IdentityId: input.identityId,
          DatasetName: input.datasetName,
          DeviceId: input.deviceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SubscribeToDataset', props);
  }

  public unsubscribeFromDataset(input: shapes.CognitoSyncUnsubscribeFromDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unsubscribeFromDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.UnsubscribeFromDataset'),
        parameters: {
          IdentityPoolId: input.identityPoolId,
          IdentityId: input.identityId,
          DatasetName: input.datasetName,
          DeviceId: input.deviceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnsubscribeFromDataset', props);
  }

  public updateRecords(input: shapes.CognitoSyncUpdateRecordsRequest): CognitoSyncResponsesUpdateRecords {
    return new CognitoSyncResponsesUpdateRecords(this, this.__resources, input);
  }

}

export class CognitoSyncResponsesBulkPublish {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncBulkPublishRequest) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'bulkPublish',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.BulkPublish.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BulkPublish.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

}

export class CognitoSyncResponsesDeleteDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDeleteDatasetRequest) {
  }

  public get dataset(): CognitoSyncResponsesDeleteDatasetDataset {
    return new CognitoSyncResponsesDeleteDatasetDataset(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesDeleteDatasetDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDeleteDatasetRequest) {
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.IdentityId'),
        outputPath: 'Dataset.IdentityId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.IdentityId', props);
    return resource.getResponseField('Dataset.IdentityId') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.DatasetName'),
        outputPath: 'Dataset.DatasetName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.DatasetName', props);
    return resource.getResponseField('Dataset.DatasetName') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.CreationDate'),
        outputPath: 'Dataset.CreationDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.CreationDate', props);
    return resource.getResponseField('Dataset.CreationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.LastModifiedDate'),
        outputPath: 'Dataset.LastModifiedDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.LastModifiedDate', props);
    return resource.getResponseField('Dataset.LastModifiedDate') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.LastModifiedBy'),
        outputPath: 'Dataset.LastModifiedBy',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.LastModifiedBy', props);
    return resource.getResponseField('Dataset.LastModifiedBy') as unknown as string;
  }

  public get dataStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.DataStorage'),
        outputPath: 'Dataset.DataStorage',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.DataStorage', props);
    return resource.getResponseField('Dataset.DataStorage') as unknown as number;
  }

  public get numRecords(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DeleteDataset.Dataset.NumRecords'),
        outputPath: 'Dataset.NumRecords',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Dataset.NumRecords', props);
    return resource.getResponseField('Dataset.NumRecords') as unknown as number;
  }

}

export class CognitoSyncResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeDatasetRequest) {
  }

  public get dataset(): CognitoSyncResponsesDescribeDatasetDataset {
    return new CognitoSyncResponsesDescribeDatasetDataset(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesDescribeDatasetDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeDatasetRequest) {
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.IdentityId'),
        outputPath: 'Dataset.IdentityId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.IdentityId', props);
    return resource.getResponseField('Dataset.IdentityId') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.DatasetName'),
        outputPath: 'Dataset.DatasetName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.DatasetName', props);
    return resource.getResponseField('Dataset.DatasetName') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.CreationDate'),
        outputPath: 'Dataset.CreationDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.CreationDate', props);
    return resource.getResponseField('Dataset.CreationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.LastModifiedDate'),
        outputPath: 'Dataset.LastModifiedDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.LastModifiedDate', props);
    return resource.getResponseField('Dataset.LastModifiedDate') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.LastModifiedBy'),
        outputPath: 'Dataset.LastModifiedBy',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.LastModifiedBy', props);
    return resource.getResponseField('Dataset.LastModifiedBy') as unknown as string;
  }

  public get dataStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.DataStorage'),
        outputPath: 'Dataset.DataStorage',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.DataStorage', props);
    return resource.getResponseField('Dataset.DataStorage') as unknown as number;
  }

  public get numRecords(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeDataset.Dataset.NumRecords'),
        outputPath: 'Dataset.NumRecords',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Dataset.NumRecords', props);
    return resource.getResponseField('Dataset.NumRecords') as unknown as number;
  }

}

export class CognitoSyncResponsesDescribeIdentityPoolUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest) {
  }

  public get identityPoolUsage(): CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage {
    return new CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityPoolUsage.IdentityPoolUsage.IdentityPoolId'),
        outputPath: 'IdentityPoolUsage.IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPoolUsage.IdentityPoolUsage.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolUsage.IdentityPoolId') as unknown as string;
  }

  public get syncSessionsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityPoolUsage.IdentityPoolUsage.SyncSessionsCount'),
        outputPath: 'IdentityPoolUsage.SyncSessionsCount',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPoolUsage.IdentityPoolUsage.SyncSessionsCount', props);
    return resource.getResponseField('IdentityPoolUsage.SyncSessionsCount') as unknown as number;
  }

  public get dataStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityPoolUsage.IdentityPoolUsage.DataStorage'),
        outputPath: 'IdentityPoolUsage.DataStorage',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPoolUsage.IdentityPoolUsage.DataStorage', props);
    return resource.getResponseField('IdentityPoolUsage.DataStorage') as unknown as number;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityPoolUsage.IdentityPoolUsage.LastModifiedDate'),
        outputPath: 'IdentityPoolUsage.LastModifiedDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPoolUsage.IdentityPoolUsage.LastModifiedDate', props);
    return resource.getResponseField('IdentityPoolUsage.LastModifiedDate') as unknown as string;
  }

}

export class CognitoSyncResponsesDescribeIdentityUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeIdentityUsageRequest) {
  }

  public get identityUsage(): CognitoSyncResponsesDescribeIdentityUsageIdentityUsage {
    return new CognitoSyncResponsesDescribeIdentityUsageIdentityUsage(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesDescribeIdentityUsageIdentityUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncDescribeIdentityUsageRequest) {
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityUsage.IdentityUsage.IdentityId'),
        outputPath: 'IdentityUsage.IdentityId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityUsage.IdentityUsage.IdentityId', props);
    return resource.getResponseField('IdentityUsage.IdentityId') as unknown as string;
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityUsage.IdentityUsage.IdentityPoolId'),
        outputPath: 'IdentityUsage.IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityUsage.IdentityUsage.IdentityPoolId', props);
    return resource.getResponseField('IdentityUsage.IdentityPoolId') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityUsage.IdentityUsage.LastModifiedDate'),
        outputPath: 'IdentityUsage.LastModifiedDate',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityUsage.IdentityUsage.LastModifiedDate', props);
    return resource.getResponseField('IdentityUsage.LastModifiedDate') as unknown as string;
  }

  public get datasetCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityUsage.IdentityUsage.DatasetCount'),
        outputPath: 'IdentityUsage.DatasetCount',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityUsage.IdentityUsage.DatasetCount', props);
    return resource.getResponseField('IdentityUsage.DatasetCount') as unknown as number;
  }

  public get dataStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.DescribeIdentityUsage.IdentityUsage.DataStorage'),
        outputPath: 'IdentityUsage.DataStorage',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityUsage.IdentityUsage.DataStorage', props);
    return resource.getResponseField('IdentityUsage.DataStorage') as unknown as number;
  }

}

export class CognitoSyncResponsesFetchBulkPublishDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncGetBulkPublishDetailsRequest) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkPublishDetails',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetBulkPublishDetails.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkPublishDetails.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get bulkPublishStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkPublishDetails',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetBulkPublishDetails.BulkPublishStartTime'),
        outputPath: 'BulkPublishStartTime',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkPublishDetails.BulkPublishStartTime', props);
    return resource.getResponseField('BulkPublishStartTime') as unknown as string;
  }

  public get bulkPublishCompleteTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkPublishDetails',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetBulkPublishDetails.BulkPublishCompleteTime'),
        outputPath: 'BulkPublishCompleteTime',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkPublishDetails.BulkPublishCompleteTime', props);
    return resource.getResponseField('BulkPublishCompleteTime') as unknown as string;
  }

  public get bulkPublishStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkPublishDetails',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetBulkPublishDetails.BulkPublishStatus'),
        outputPath: 'BulkPublishStatus',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkPublishDetails.BulkPublishStatus', props);
    return resource.getResponseField('BulkPublishStatus') as unknown as string;
  }

  public get failureMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBulkPublishDetails',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetBulkPublishDetails.FailureMessage'),
        outputPath: 'FailureMessage',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBulkPublishDetails.FailureMessage', props);
    return resource.getResponseField('FailureMessage') as unknown as string;
  }

}

export class CognitoSyncResponsesFetchCognitoEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncGetCognitoEventsRequest) {
  }

  public get events(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCognitoEvents',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetCognitoEvents.Events'),
        outputPath: 'Events',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCognitoEvents.Events', props);
    return resource.getResponseField('Events') as unknown as Record<string, string>;
  }

}

export class CognitoSyncResponsesFetchIdentityPoolConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get pushSync(): CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync {
    return new CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync(this.__scope, this.__resources, this.__input);
  }

  public get cognitoStreams(): CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams {
    return new CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
  }

  public get applicationArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.PushSync.ApplicationArns'),
        outputPath: 'PushSync.ApplicationArns',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.PushSync.ApplicationArns', props);
    return resource.getResponseField('PushSync.ApplicationArns') as unknown as string[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.PushSync.RoleArn'),
        outputPath: 'PushSync.RoleArn',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.PushSync.RoleArn', props);
    return resource.getResponseField('PushSync.RoleArn') as unknown as string;
  }

}

export class CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.CognitoStreams.StreamName'),
        outputPath: 'CognitoStreams.StreamName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.CognitoStreams.StreamName', props);
    return resource.getResponseField('CognitoStreams.StreamName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.CognitoStreams.RoleArn'),
        outputPath: 'CognitoStreams.RoleArn',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.CognitoStreams.RoleArn', props);
    return resource.getResponseField('CognitoStreams.RoleArn') as unknown as string;
  }

  public get streamingStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.GetIdentityPoolConfiguration.CognitoStreams.StreamingStatus'),
        outputPath: 'CognitoStreams.StreamingStatus',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolConfiguration.CognitoStreams.StreamingStatus', props);
    return resource.getResponseField('CognitoStreams.StreamingStatus') as unknown as string;
  }

}

export class CognitoSyncResponsesListDatasets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncListDatasetsRequest) {
  }

  public get datasets(): shapes.CognitoSyncDataset[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListDatasets.Datasets'),
        outputPath: 'Datasets',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.Datasets', props);
    return resource.getResponseField('Datasets') as unknown as shapes.CognitoSyncDataset[];
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListDatasets.Count'),
        outputPath: 'Count',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListDatasets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoSyncResponsesListIdentityPoolUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncListIdentityPoolUsageRequest) {
  }

  public get identityPoolUsages(): shapes.CognitoSyncIdentityPoolUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListIdentityPoolUsage.IdentityPoolUsages'),
        outputPath: 'IdentityPoolUsages',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPoolUsage.IdentityPoolUsages', props);
    return resource.getResponseField('IdentityPoolUsages') as unknown as shapes.CognitoSyncIdentityPoolUsage[];
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListIdentityPoolUsage.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPoolUsage.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListIdentityPoolUsage.Count'),
        outputPath: 'Count',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPoolUsage.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPoolUsage',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListIdentityPoolUsage.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPoolUsage.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoSyncResponsesListRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncListRecordsRequest) {
  }

  public get records(): shapes.CognitoSyncRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.Records'),
        outputPath: 'Records',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.CognitoSyncRecord[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.Count'),
        outputPath: 'Count',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

  public get datasetSyncCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.DatasetSyncCount'),
        outputPath: 'DatasetSyncCount',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.DatasetSyncCount', props);
    return resource.getResponseField('DatasetSyncCount') as unknown as number;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get mergedDatasetNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.MergedDatasetNames'),
        outputPath: 'MergedDatasetNames',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.MergedDatasetNames', props);
    return resource.getResponseField('MergedDatasetNames') as unknown as string[];
  }

  public get datasetExists(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.DatasetExists'),
        outputPath: 'DatasetExists',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.DatasetExists', props);
    return resource.getResponseField('DatasetExists') as unknown as boolean;
  }

  public get datasetDeletedAfterRequestedSyncCount(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.DatasetDeletedAfterRequestedSyncCount'),
        outputPath: 'DatasetDeletedAfterRequestedSyncCount',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.DatasetDeletedAfterRequestedSyncCount', props);
    return resource.getResponseField('DatasetDeletedAfterRequestedSyncCount') as unknown as boolean;
  }

  public get syncSessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.ListRecords.SyncSessionToken'),
        outputPath: 'SyncSessionToken',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          LastSyncCount: this.__input.lastSyncCount,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SyncSessionToken: this.__input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecords.SyncSessionToken', props);
    return resource.getResponseField('SyncSessionToken') as unknown as string;
  }

}

export class CognitoSyncResponsesRegisterDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncRegisterDeviceRequest) {
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerDevice',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.RegisterDevice.DeviceId'),
        outputPath: 'DeviceId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          Platform: this.__input.platform,
          Token: this.__input.token,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterDevice.DeviceId', props);
    return resource.getResponseField('DeviceId') as unknown as string;
  }

}

export class CognitoSyncResponsesPutIdentityPoolConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get pushSync(): CognitoSyncResponsesPutIdentityPoolConfigurationPushSync {
    return new CognitoSyncResponsesPutIdentityPoolConfigurationPushSync(this.__scope, this.__resources, this.__input);
  }

  public get cognitoStreams(): CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams {
    return new CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoSyncResponsesPutIdentityPoolConfigurationPushSync {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
  }

  public get applicationArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.PushSync.ApplicationArns'),
        outputPath: 'PushSync.ApplicationArns',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.PushSync.ApplicationArns', props);
    return resource.getResponseField('PushSync.ApplicationArns') as unknown as string[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.PushSync.RoleArn'),
        outputPath: 'PushSync.RoleArn',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.PushSync.RoleArn', props);
    return resource.getResponseField('PushSync.RoleArn') as unknown as string;
  }

}

export class CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.CognitoStreams.StreamName'),
        outputPath: 'CognitoStreams.StreamName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.CognitoStreams.StreamName', props);
    return resource.getResponseField('CognitoStreams.StreamName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.CognitoStreams.RoleArn'),
        outputPath: 'CognitoStreams.RoleArn',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.CognitoStreams.RoleArn', props);
    return resource.getResponseField('CognitoStreams.RoleArn') as unknown as string;
  }

  public get streamingStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolConfiguration',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.SetIdentityPoolConfiguration.CognitoStreams.StreamingStatus'),
        outputPath: 'CognitoStreams.StreamingStatus',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          PushSync: {
            ApplicationArns: this.__input.pushSync?.applicationArns,
            RoleArn: this.__input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.__input.cognitoStreams?.streamName,
            RoleArn: this.__input.cognitoStreams?.roleArn,
            StreamingStatus: this.__input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIdentityPoolConfiguration.CognitoStreams.StreamingStatus', props);
    return resource.getResponseField('CognitoStreams.StreamingStatus') as unknown as string;
  }

}

export class CognitoSyncResponsesUpdateRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoSyncUpdateRecordsRequest) {
  }

  public get records(): shapes.CognitoSyncRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecords',
        service: 'CognitoSync',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoSync.UpdateRecords.Records'),
        outputPath: 'Records',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DatasetName: this.__input.datasetName,
          DeviceId: this.__input.deviceId,
          RecordPatches: this.__input.recordPatches,
          SyncSessionToken: this.__input.syncSessionToken,
          ClientContext: this.__input.clientContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecords.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.CognitoSyncRecord[];
  }

}

