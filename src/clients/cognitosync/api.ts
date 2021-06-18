import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CognitoSyncClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public bulkPublish(input: shapes.CognitoSyncBulkPublishRequest): CognitoSyncBulkPublish {
    return new CognitoSyncBulkPublish(this, 'BulkPublish', this.__resources, input);
  }

  public deleteDataset(input: shapes.CognitoSyncDeleteDatasetRequest): CognitoSyncDeleteDataset {
    return new CognitoSyncDeleteDataset(this, 'DeleteDataset', this.__resources, input);
  }

  public describeDataset(input: shapes.CognitoSyncDescribeDatasetRequest): CognitoSyncDescribeDataset {
    return new CognitoSyncDescribeDataset(this, 'DescribeDataset', this.__resources, input);
  }

  public describeIdentityPoolUsage(input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest): CognitoSyncDescribeIdentityPoolUsage {
    return new CognitoSyncDescribeIdentityPoolUsage(this, 'DescribeIdentityPoolUsage', this.__resources, input);
  }

  public describeIdentityUsage(input: shapes.CognitoSyncDescribeIdentityUsageRequest): CognitoSyncDescribeIdentityUsage {
    return new CognitoSyncDescribeIdentityUsage(this, 'DescribeIdentityUsage', this.__resources, input);
  }

  public fetchBulkPublishDetails(input: shapes.CognitoSyncGetBulkPublishDetailsRequest): CognitoSyncFetchBulkPublishDetails {
    return new CognitoSyncFetchBulkPublishDetails(this, 'FetchBulkPublishDetails', this.__resources, input);
  }

  public fetchCognitoEvents(input: shapes.CognitoSyncGetCognitoEventsRequest): CognitoSyncFetchCognitoEvents {
    return new CognitoSyncFetchCognitoEvents(this, 'FetchCognitoEvents', this.__resources, input);
  }

  public fetchIdentityPoolConfiguration(input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest): CognitoSyncFetchIdentityPoolConfiguration {
    return new CognitoSyncFetchIdentityPoolConfiguration(this, 'FetchIdentityPoolConfiguration', this.__resources, input);
  }

  public listDatasets(input: shapes.CognitoSyncListDatasetsRequest): CognitoSyncListDatasets {
    return new CognitoSyncListDatasets(this, 'ListDatasets', this.__resources, input);
  }

  public listIdentityPoolUsage(input: shapes.CognitoSyncListIdentityPoolUsageRequest): CognitoSyncListIdentityPoolUsage {
    return new CognitoSyncListIdentityPoolUsage(this, 'ListIdentityPoolUsage', this.__resources, input);
  }

  public listRecords(input: shapes.CognitoSyncListRecordsRequest): CognitoSyncListRecords {
    return new CognitoSyncListRecords(this, 'ListRecords', this.__resources, input);
  }

  public registerDevice(input: shapes.CognitoSyncRegisterDeviceRequest): CognitoSyncRegisterDevice {
    return new CognitoSyncRegisterDevice(this, 'RegisterDevice', this.__resources, input);
  }

  public setCognitoEvents(input: shapes.CognitoSyncSetCognitoEventsRequest): void {
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

  public setIdentityPoolConfiguration(input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest): CognitoSyncSetIdentityPoolConfiguration {
    return new CognitoSyncSetIdentityPoolConfiguration(this, 'SetIdentityPoolConfiguration', this.__resources, input);
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

  public updateRecords(input: shapes.CognitoSyncUpdateRecordsRequest): CognitoSyncUpdateRecords {
    return new CognitoSyncUpdateRecords(this, 'UpdateRecords', this.__resources, input);
  }

}

export class CognitoSyncBulkPublish extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncBulkPublishRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BulkPublish.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

}

export class CognitoSyncDeleteDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDeleteDatasetRequest) {
    super(scope, id);
  }

  public get dataset(): CognitoSyncDeleteDatasetDataset {
    return new CognitoSyncDeleteDatasetDataset(this, 'Dataset', this.__resources, this.input);
  }

}

export class CognitoSyncDeleteDatasetDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDeleteDatasetRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.IdentityId', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.DatasetName', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.CreationDate', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.LastModifiedDate', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.LastModifiedBy', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.DataStorage', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Dataset.NumRecords', props);
    return resource.getResponseField('Dataset.NumRecords') as unknown as number;
  }

}

export class CognitoSyncDescribeDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeDatasetRequest) {
    super(scope, id);
  }

  public get dataset(): CognitoSyncDescribeDatasetDataset {
    return new CognitoSyncDescribeDatasetDataset(this, 'Dataset', this.__resources, this.input);
  }

}

export class CognitoSyncDescribeDatasetDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeDatasetRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.IdentityId', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.DatasetName', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.CreationDate', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.LastModifiedDate', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.LastModifiedBy', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.DataStorage', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Dataset.NumRecords', props);
    return resource.getResponseField('Dataset.NumRecords') as unknown as number;
  }

}

export class CognitoSyncDescribeIdentityPoolUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest) {
    super(scope, id);
  }

  public get identityPoolUsage(): CognitoSyncDescribeIdentityPoolUsageIdentityPoolUsage {
    return new CognitoSyncDescribeIdentityPoolUsageIdentityPoolUsage(this, 'IdentityPoolUsage', this.__resources, this.input);
  }

}

export class CognitoSyncDescribeIdentityPoolUsageIdentityPoolUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeIdentityPoolUsageRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPoolUsage.IdentityPoolUsage.IdentityPoolId', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPoolUsage.IdentityPoolUsage.SyncSessionsCount', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPoolUsage.IdentityPoolUsage.DataStorage', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPoolUsage.IdentityPoolUsage.LastModifiedDate', props);
    return resource.getResponseField('IdentityPoolUsage.LastModifiedDate') as unknown as string;
  }

}

export class CognitoSyncDescribeIdentityUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeIdentityUsageRequest) {
    super(scope, id);
  }

  public get identityUsage(): CognitoSyncDescribeIdentityUsageIdentityUsage {
    return new CognitoSyncDescribeIdentityUsageIdentityUsage(this, 'IdentityUsage', this.__resources, this.input);
  }

}

export class CognitoSyncDescribeIdentityUsageIdentityUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncDescribeIdentityUsageRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityUsage.IdentityUsage.IdentityId', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityUsage.IdentityUsage.IdentityPoolId', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityUsage.IdentityUsage.LastModifiedDate', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityUsage.IdentityUsage.DatasetCount', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityUsage.IdentityUsage.DataStorage', props);
    return resource.getResponseField('IdentityUsage.DataStorage') as unknown as number;
  }

}

export class CognitoSyncFetchBulkPublishDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncGetBulkPublishDetailsRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkPublishDetails.IdentityPoolId', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkPublishDetails.BulkPublishStartTime', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkPublishDetails.BulkPublishCompleteTime', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkPublishDetails.BulkPublishStatus', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBulkPublishDetails.FailureMessage', props);
    return resource.getResponseField('FailureMessage') as unknown as string;
  }

}

export class CognitoSyncFetchCognitoEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncGetCognitoEventsRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCognitoEvents.Events', props);
    return resource.getResponseField('Events') as unknown as Record<string, string>;
  }

}

export class CognitoSyncFetchIdentityPoolConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get pushSync(): CognitoSyncFetchIdentityPoolConfigurationPushSync {
    return new CognitoSyncFetchIdentityPoolConfigurationPushSync(this, 'PushSync', this.__resources, this.input);
  }

  public get cognitoStreams(): CognitoSyncFetchIdentityPoolConfigurationCognitoStreams {
    return new CognitoSyncFetchIdentityPoolConfigurationCognitoStreams(this, 'CognitoStreams', this.__resources, this.input);
  }

}

export class CognitoSyncFetchIdentityPoolConfigurationPushSync extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.PushSync.ApplicationArns', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.PushSync.RoleArn', props);
    return resource.getResponseField('PushSync.RoleArn') as unknown as string;
  }

}

export class CognitoSyncFetchIdentityPoolConfigurationCognitoStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncGetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.CognitoStreams.StreamName', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.CognitoStreams.RoleArn', props);
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
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolConfiguration.CognitoStreams.StreamingStatus', props);
    return resource.getResponseField('CognitoStreams.StreamingStatus') as unknown as string;
  }

}

export class CognitoSyncListDatasets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncListDatasetsRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.Datasets', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.Count', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoSyncListIdentityPoolUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncListIdentityPoolUsageRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPoolUsage.IdentityPoolUsages', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPoolUsage.MaxResults', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPoolUsage.Count', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPoolUsage.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoSyncListRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncListRecordsRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.Records', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.NextToken', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.Count', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.DatasetSyncCount', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.LastModifiedBy', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.MergedDatasetNames', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.DatasetExists', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.DatasetDeletedAfterRequestedSyncCount', props);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          LastSyncCount: this.input.lastSyncCount,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SyncSessionToken: this.input.syncSessionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecords.SyncSessionToken', props);
    return resource.getResponseField('SyncSessionToken') as unknown as string;
  }

}

export class CognitoSyncRegisterDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncRegisterDeviceRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          Platform: this.input.platform,
          Token: this.input.token,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterDevice.DeviceId', props);
    return resource.getResponseField('DeviceId') as unknown as string;
  }

}

export class CognitoSyncSetIdentityPoolConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get pushSync(): CognitoSyncSetIdentityPoolConfigurationPushSync {
    return new CognitoSyncSetIdentityPoolConfigurationPushSync(this, 'PushSync', this.__resources, this.input);
  }

  public get cognitoStreams(): CognitoSyncSetIdentityPoolConfigurationCognitoStreams {
    return new CognitoSyncSetIdentityPoolConfigurationCognitoStreams(this, 'CognitoStreams', this.__resources, this.input);
  }

}

export class CognitoSyncSetIdentityPoolConfigurationPushSync extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.PushSync.ApplicationArns', props);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.PushSync.RoleArn', props);
    return resource.getResponseField('PushSync.RoleArn') as unknown as string;
  }

}

export class CognitoSyncSetIdentityPoolConfigurationCognitoStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncSetIdentityPoolConfigurationRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.CognitoStreams.StreamName', props);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.CognitoStreams.RoleArn', props);
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
          IdentityPoolId: this.input.identityPoolId,
          PushSync: {
            ApplicationArns: this.input.pushSync?.applicationArns,
            RoleArn: this.input.pushSync?.roleArn,
          },
          CognitoStreams: {
            StreamName: this.input.cognitoStreams?.streamName,
            RoleArn: this.input.cognitoStreams?.roleArn,
            StreamingStatus: this.input.cognitoStreams?.streamingStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetIdentityPoolConfiguration.CognitoStreams.StreamingStatus', props);
    return resource.getResponseField('CognitoStreams.StreamingStatus') as unknown as string;
  }

}

export class CognitoSyncUpdateRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoSyncUpdateRecordsRequest) {
    super(scope, id);
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
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DatasetName: this.input.datasetName,
          DeviceId: this.input.deviceId,
          RecordPatches: this.input.recordPatches,
          SyncSessionToken: this.input.syncSessionToken,
          ClientContext: this.input.clientContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecords.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.CognitoSyncRecord[];
  }

}

