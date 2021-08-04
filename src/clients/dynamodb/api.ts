import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DynamoDbClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchExecuteStatement(input: shapes.DynamoDbBatchExecuteStatementInput): DynamoDBResponsesBatchExecuteStatement {
    return new DynamoDBResponsesBatchExecuteStatement(this, this.__resources, input);
  }

  public batchGetItem(input: shapes.DynamoDbBatchGetItemInput): DynamoDBResponsesBatchGetItem {
    return new DynamoDBResponsesBatchGetItem(this, this.__resources, input);
  }

  public batchWriteItem(input: shapes.DynamoDbBatchWriteItemInput): DynamoDBResponsesBatchWriteItem {
    return new DynamoDBResponsesBatchWriteItem(this, this.__resources, input);
  }

  public createBackup(input: shapes.DynamoDbCreateBackupInput): DynamoDBResponsesCreateBackup {
    return new DynamoDBResponsesCreateBackup(this, this.__resources, input);
  }

  public createGlobalTable(input: shapes.DynamoDbCreateGlobalTableInput): DynamoDBResponsesCreateGlobalTable {
    return new DynamoDBResponsesCreateGlobalTable(this, this.__resources, input);
  }

  public createTable(input: shapes.DynamoDbCreateTableInput): DynamoDBResponsesCreateTable {
    return new DynamoDBResponsesCreateTable(this, this.__resources, input);
  }

  public deleteBackup(input: shapes.DynamoDbDeleteBackupInput): DynamoDBResponsesDeleteBackup {
    return new DynamoDBResponsesDeleteBackup(this, this.__resources, input);
  }

  public deleteItem(input: shapes.DynamoDbDeleteItemInput): DynamoDBResponsesDeleteItem {
    return new DynamoDBResponsesDeleteItem(this, this.__resources, input);
  }

  public deleteTable(input: shapes.DynamoDbDeleteTableInput): DynamoDBResponsesDeleteTable {
    return new DynamoDBResponsesDeleteTable(this, this.__resources, input);
  }

  public describeBackup(input: shapes.DynamoDbDescribeBackupInput): DynamoDBResponsesDescribeBackup {
    return new DynamoDBResponsesDescribeBackup(this, this.__resources, input);
  }

  public describeContinuousBackups(input: shapes.DynamoDbDescribeContinuousBackupsInput): DynamoDBResponsesDescribeContinuousBackups {
    return new DynamoDBResponsesDescribeContinuousBackups(this, this.__resources, input);
  }

  public describeContributorInsights(input: shapes.DynamoDbDescribeContributorInsightsInput): DynamoDBResponsesDescribeContributorInsights {
    return new DynamoDBResponsesDescribeContributorInsights(this, this.__resources, input);
  }

  public describeEndpoints(): DynamoDBResponsesDescribeEndpoints {
    return new DynamoDBResponsesDescribeEndpoints(this, this.__resources);
  }

  public describeExport(input: shapes.DynamoDbDescribeExportInput): DynamoDBResponsesDescribeExport {
    return new DynamoDBResponsesDescribeExport(this, this.__resources, input);
  }

  public describeGlobalTable(input: shapes.DynamoDbDescribeGlobalTableInput): DynamoDBResponsesDescribeGlobalTable {
    return new DynamoDBResponsesDescribeGlobalTable(this, this.__resources, input);
  }

  public describeGlobalTableSettings(input: shapes.DynamoDbDescribeGlobalTableSettingsInput): DynamoDBResponsesDescribeGlobalTableSettings {
    return new DynamoDBResponsesDescribeGlobalTableSettings(this, this.__resources, input);
  }

  public describeKinesisStreamingDestination(input: shapes.DynamoDbDescribeKinesisStreamingDestinationInput): DynamoDBResponsesDescribeKinesisStreamingDestination {
    return new DynamoDBResponsesDescribeKinesisStreamingDestination(this, this.__resources, input);
  }

  public describeLimits(): DynamoDBResponsesDescribeLimits {
    return new DynamoDBResponsesDescribeLimits(this, this.__resources);
  }

  public describeTable(input: shapes.DynamoDbDescribeTableInput): DynamoDBResponsesDescribeTable {
    return new DynamoDBResponsesDescribeTable(this, this.__resources, input);
  }

  public describeTableReplicaAutoScaling(input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput): DynamoDBResponsesDescribeTableReplicaAutoScaling {
    return new DynamoDBResponsesDescribeTableReplicaAutoScaling(this, this.__resources, input);
  }

  public describeTimeToLive(input: shapes.DynamoDbDescribeTimeToLiveInput): DynamoDBResponsesDescribeTimeToLive {
    return new DynamoDBResponsesDescribeTimeToLive(this, this.__resources, input);
  }

  public disableKinesisStreamingDestination(input: shapes.DynamoDbKinesisStreamingDestinationInput): DynamoDBResponsesDisableKinesisStreamingDestination {
    return new DynamoDBResponsesDisableKinesisStreamingDestination(this, this.__resources, input);
  }

  public enableKinesisStreamingDestination(input: shapes.DynamoDbKinesisStreamingDestinationInput): DynamoDBResponsesEnableKinesisStreamingDestination {
    return new DynamoDBResponsesEnableKinesisStreamingDestination(this, this.__resources, input);
  }

  public executeStatement(input: shapes.DynamoDbExecuteStatementInput): DynamoDBResponsesExecuteStatement {
    return new DynamoDBResponsesExecuteStatement(this, this.__resources, input);
  }

  public executeTransaction(input: shapes.DynamoDbExecuteTransactionInput): DynamoDBResponsesExecuteTransaction {
    return new DynamoDBResponsesExecuteTransaction(this, this.__resources, input);
  }

  public exportTableToPointInTime(input: shapes.DynamoDbExportTableToPointInTimeInput): DynamoDBResponsesExportTableToPointInTime {
    return new DynamoDBResponsesExportTableToPointInTime(this, this.__resources, input);
  }

  public fetchItem(input: shapes.DynamoDbGetItemInput): DynamoDBResponsesFetchItem {
    return new DynamoDBResponsesFetchItem(this, this.__resources, input);
  }

  public listBackups(input: shapes.DynamoDbListBackupsInput): DynamoDBResponsesListBackups {
    return new DynamoDBResponsesListBackups(this, this.__resources, input);
  }

  public listContributorInsights(input: shapes.DynamoDbListContributorInsightsInput): DynamoDBResponsesListContributorInsights {
    return new DynamoDBResponsesListContributorInsights(this, this.__resources, input);
  }

  public listExports(input: shapes.DynamoDbListExportsInput): DynamoDBResponsesListExports {
    return new DynamoDBResponsesListExports(this, this.__resources, input);
  }

  public listGlobalTables(input: shapes.DynamoDbListGlobalTablesInput): DynamoDBResponsesListGlobalTables {
    return new DynamoDBResponsesListGlobalTables(this, this.__resources, input);
  }

  public listTables(input: shapes.DynamoDbListTablesInput): DynamoDBResponsesListTables {
    return new DynamoDBResponsesListTables(this, this.__resources, input);
  }

  public listTagsOfResource(input: shapes.DynamoDbListTagsOfResourceInput): DynamoDBResponsesListTagsOfResource {
    return new DynamoDBResponsesListTagsOfResource(this, this.__resources, input);
  }

  public putItem(input: shapes.DynamoDbPutItemInput): DynamoDBResponsesPutItem {
    return new DynamoDBResponsesPutItem(this, this.__resources, input);
  }

  public query(input: shapes.DynamoDbQueryInput): DynamoDBResponsesQuery {
    return new DynamoDBResponsesQuery(this, this.__resources, input);
  }

  public restoreTableFromBackup(input: shapes.DynamoDbRestoreTableFromBackupInput): DynamoDBResponsesRestoreTableFromBackup {
    return new DynamoDBResponsesRestoreTableFromBackup(this, this.__resources, input);
  }

  public restoreTableToPointInTime(input: shapes.DynamoDbRestoreTableToPointInTimeInput): DynamoDBResponsesRestoreTableToPointInTime {
    return new DynamoDBResponsesRestoreTableToPointInTime(this, this.__resources, input);
  }

  public scan(input: shapes.DynamoDbScanInput): DynamoDBResponsesScan {
    return new DynamoDBResponsesScan(this, this.__resources, input);
  }

  public tagResource(input: shapes.DynamoDbTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public transactGetItems(input: shapes.DynamoDbTransactGetItemsInput): DynamoDBResponsesTransactGetItems {
    return new DynamoDBResponsesTransactGetItems(this, this.__resources, input);
  }

  public transactWriteItems(input: shapes.DynamoDbTransactWriteItemsInput): DynamoDBResponsesTransactWriteItems {
    return new DynamoDBResponsesTransactWriteItems(this, this.__resources, input);
  }

  public untagResource(input: shapes.DynamoDbUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateContinuousBackups(input: shapes.DynamoDbUpdateContinuousBackupsInput): DynamoDBResponsesUpdateContinuousBackups {
    return new DynamoDBResponsesUpdateContinuousBackups(this, this.__resources, input);
  }

  public updateContributorInsights(input: shapes.DynamoDbUpdateContributorInsightsInput): DynamoDBResponsesUpdateContributorInsights {
    return new DynamoDBResponsesUpdateContributorInsights(this, this.__resources, input);
  }

  public updateGlobalTable(input: shapes.DynamoDbUpdateGlobalTableInput): DynamoDBResponsesUpdateGlobalTable {
    return new DynamoDBResponsesUpdateGlobalTable(this, this.__resources, input);
  }

  public updateGlobalTableSettings(input: shapes.DynamoDbUpdateGlobalTableSettingsInput): DynamoDBResponsesUpdateGlobalTableSettings {
    return new DynamoDBResponsesUpdateGlobalTableSettings(this, this.__resources, input);
  }

  public updateItem(input: shapes.DynamoDbUpdateItemInput): DynamoDBResponsesUpdateItem {
    return new DynamoDBResponsesUpdateItem(this, this.__resources, input);
  }

  public updateTable(input: shapes.DynamoDbUpdateTableInput): DynamoDBResponsesUpdateTable {
    return new DynamoDBResponsesUpdateTable(this, this.__resources, input);
  }

  public updateTableReplicaAutoScaling(input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput): DynamoDBResponsesUpdateTableReplicaAutoScaling {
    return new DynamoDBResponsesUpdateTableReplicaAutoScaling(this, this.__resources, input);
  }

  public updateTimeToLive(input: shapes.DynamoDbUpdateTimeToLiveInput): DynamoDBResponsesUpdateTimeToLive {
    return new DynamoDBResponsesUpdateTimeToLive(this, this.__resources, input);
  }

}

export class DynamoDBResponsesBatchExecuteStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbBatchExecuteStatementInput) {
  }

  public get responses(): shapes.DynamoDbBatchStatementResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchExecuteStatement',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchExecuteStatement.Responses'),
        outputPath: 'Responses',
        parameters: {
          Statements: this.__input.statements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchExecuteStatement.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbBatchStatementResponse[];
  }

}

export class DynamoDBResponsesBatchGetItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbBatchGetItemInput) {
  }

  public get responses(): Record<string, Record<string, shapes.DynamoDbAttributeValue>[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchGetItem.Responses'),
        outputPath: 'Responses',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetItem.Responses', props);
    return resource.getResponseField('Responses') as unknown as Record<string, Record<string, shapes.DynamoDbAttributeValue>[]>;
  }

  public get unprocessedKeys(): Record<string, shapes.DynamoDbKeysAndAttributes> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchGetItem.UnprocessedKeys'),
        outputPath: 'UnprocessedKeys',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetItem.UnprocessedKeys', props);
    return resource.getResponseField('UnprocessedKeys') as unknown as Record<string, shapes.DynamoDbKeysAndAttributes>;
  }

  public get consumedCapacity(): shapes.DynamoDbConsumedCapacity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchGetItem.ConsumedCapacity'),
        outputPath: 'ConsumedCapacity',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetItem.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

}

export class DynamoDBResponsesBatchWriteItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbBatchWriteItemInput) {
  }

  public get unprocessedItems(): Record<string, shapes.DynamoDbWriteRequest[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchWriteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchWriteItem.UnprocessedItems'),
        outputPath: 'UnprocessedItems',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchWriteItem.UnprocessedItems', props);
    return resource.getResponseField('UnprocessedItems') as unknown as Record<string, shapes.DynamoDbWriteRequest[]>;
  }

  public get itemCollectionMetrics(): Record<string, shapes.DynamoDbItemCollectionMetrics[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchWriteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchWriteItem.ItemCollectionMetrics'),
        outputPath: 'ItemCollectionMetrics',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchWriteItem.ItemCollectionMetrics', props);
    return resource.getResponseField('ItemCollectionMetrics') as unknown as Record<string, shapes.DynamoDbItemCollectionMetrics[]>;
  }

  public get consumedCapacity(): shapes.DynamoDbConsumedCapacity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchWriteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.BatchWriteItem.ConsumedCapacity'),
        outputPath: 'ConsumedCapacity',
        parameters: {
          RequestItems: this.__input.requestItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchWriteItem.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

}

export class DynamoDBResponsesCreateBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateBackupInput) {
  }

  public get backupDetails(): DynamoDBResponsesCreateBackupBackupDetails {
    return new DynamoDBResponsesCreateBackupBackupDetails(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesCreateBackupBackupDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateBackupInput) {
  }

  public get backupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupArn'),
        outputPath: 'BackupDetails.BackupArn',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupArn', props);
    return resource.getResponseField('BackupDetails.BackupArn') as unknown as string;
  }

  public get backupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupName'),
        outputPath: 'BackupDetails.BackupName',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupName', props);
    return resource.getResponseField('BackupDetails.BackupName') as unknown as string;
  }

  public get backupSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupSizeBytes'),
        outputPath: 'BackupDetails.BackupSizeBytes',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupSizeBytes', props);
    return resource.getResponseField('BackupDetails.BackupSizeBytes') as unknown as number;
  }

  public get backupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupStatus'),
        outputPath: 'BackupDetails.BackupStatus',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupStatus', props);
    return resource.getResponseField('BackupDetails.BackupStatus') as unknown as string;
  }

  public get backupType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupType'),
        outputPath: 'BackupDetails.BackupType',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupType', props);
    return resource.getResponseField('BackupDetails.BackupType') as unknown as string;
  }

  public get backupCreationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupCreationDateTime'),
        outputPath: 'BackupDetails.BackupCreationDateTime',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupCreationDateTime', props);
    return resource.getResponseField('BackupDetails.BackupCreationDateTime') as unknown as string;
  }

  public get backupExpiryDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateBackup.BackupDetails.BackupExpiryDateTime'),
        outputPath: 'BackupDetails.BackupExpiryDateTime',
        parameters: {
          TableName: this.__input.tableName,
          BackupName: this.__input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackup.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesCreateGlobalTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateGlobalTableInput) {
  }

  public get globalTableDescription(): DynamoDBResponsesCreateGlobalTableGlobalTableDescription {
    return new DynamoDBResponsesCreateGlobalTableGlobalTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesCreateGlobalTableGlobalTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateGlobalTableInput) {
  }

  public get replicationGroup(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateGlobalTable.GlobalTableDescription.ReplicationGroup'),
        outputPath: 'GlobalTableDescription.ReplicationGroup',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicationGroup: this.__input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalTable.GlobalTableDescription.ReplicationGroup', props);
    return resource.getResponseField('GlobalTableDescription.ReplicationGroup') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get globalTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateGlobalTable.GlobalTableDescription.GlobalTableArn'),
        outputPath: 'GlobalTableDescription.GlobalTableArn',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicationGroup: this.__input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalTable.GlobalTableDescription.GlobalTableArn', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateGlobalTable.GlobalTableDescription.CreationDateTime'),
        outputPath: 'GlobalTableDescription.CreationDateTime',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicationGroup: this.__input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalTable.GlobalTableDescription.CreationDateTime', props);
    return resource.getResponseField('GlobalTableDescription.CreationDateTime') as unknown as string;
  }

  public get globalTableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateGlobalTable.GlobalTableDescription.GlobalTableStatus'),
        outputPath: 'GlobalTableDescription.GlobalTableStatus',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicationGroup: this.__input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableStatus') as unknown as string;
  }

  public get globalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateGlobalTable.GlobalTableDescription.GlobalTableName'),
        outputPath: 'GlobalTableDescription.GlobalTableName',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicationGroup: this.__input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBResponsesCreateTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get tableDescription(): DynamoDBResponsesCreateTableTableDescription {
    return new DynamoDBResponsesCreateTableTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesCreateTableTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.AttributeDefinitions'),
        outputPath: 'TableDescription.AttributeDefinitions',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.AttributeDefinitions', props);
    return resource.getResponseField('TableDescription.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.TableName'),
        outputPath: 'TableDescription.TableName',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.TableName', props);
    return resource.getResponseField('TableDescription.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.KeySchema'),
        outputPath: 'TableDescription.KeySchema',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.KeySchema', props);
    return resource.getResponseField('TableDescription.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.TableStatus'),
        outputPath: 'TableDescription.TableStatus',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.TableStatus', props);
    return resource.getResponseField('TableDescription.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.CreationDateTime'),
        outputPath: 'TableDescription.CreationDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput {
    return new DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.TableSizeBytes'),
        outputPath: 'TableDescription.TableSizeBytes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.TableSizeBytes', props);
    return resource.getResponseField('TableDescription.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ItemCount'),
        outputPath: 'TableDescription.ItemCount',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ItemCount', props);
    return resource.getResponseField('TableDescription.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.TableArn'),
        outputPath: 'TableDescription.TableArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.TableArn', props);
    return resource.getResponseField('TableDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.TableId'),
        outputPath: 'TableDescription.TableId',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary {
    return new DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.LocalSecondaryIndexes'),
        outputPath: 'TableDescription.LocalSecondaryIndexes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.LocalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.GlobalSecondaryIndexes'),
        outputPath: 'TableDescription.GlobalSecondaryIndexes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesCreateTableTableDescriptionStreamSpecification {
    return new DynamoDBResponsesCreateTableTableDescriptionStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.LatestStreamLabel'),
        outputPath: 'TableDescription.LatestStreamLabel',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.LatestStreamLabel', props);
    return resource.getResponseField('TableDescription.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.LatestStreamArn'),
        outputPath: 'TableDescription.LatestStreamArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.LatestStreamArn', props);
    return resource.getResponseField('TableDescription.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.GlobalTableVersion'),
        outputPath: 'TableDescription.GlobalTableVersion',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.GlobalTableVersion', props);
    return resource.getResponseField('TableDescription.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.Replicas'),
        outputPath: 'TableDescription.Replicas',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesCreateTableTableDescriptionRestoreSummary {
    return new DynamoDBResponsesCreateTableTableDescriptionRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesCreateTableTableDescriptionSseDescription {
    return new DynamoDBResponsesCreateTableTableDescriptionSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesCreateTableTableDescriptionArchivalSummary {
    return new DynamoDBResponsesCreateTableTableDescriptionArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'TableDescription.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.BillingModeSummary.BillingMode'),
        outputPath: 'TableDescription.BillingModeSummary.BillingMode',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.StreamSpecification.StreamEnabled'),
        outputPath: 'TableDescription.StreamSpecification.StreamEnabled',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.StreamSpecification.StreamViewType'),
        outputPath: 'TableDescription.StreamSpecification.StreamViewType',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.RestoreSummary.SourceBackupArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceBackupArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.RestoreSummary.SourceTableArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceTableArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.RestoreSummary.RestoreDateTime'),
        outputPath: 'TableDescription.RestoreSummary.RestoreDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.RestoreSummary.RestoreInProgress'),
        outputPath: 'TableDescription.RestoreSummary.RestoreInProgress',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.SSEDescription.Status'),
        outputPath: 'TableDescription.SSEDescription.Status',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.SSEDescription.Status', props);
    return resource.getResponseField('TableDescription.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.SSEDescription.SSEType'),
        outputPath: 'TableDescription.SSEDescription.SSEType',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.SSEDescription.SSEType', props);
    return resource.getResponseField('TableDescription.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'TableDescription.SSEDescription.KMSMasterKeyArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('TableDescription.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'TableDescription.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesCreateTableTableDescriptionArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbCreateTableInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ArchivalSummary.ArchivalReason'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalReason',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.CreateTable.TableDescription.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          KeySchema: this.__input.keySchema,
          LocalSecondaryIndexes: this.__input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.__input.globalSecondaryIndexes,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get backupDescription(): DynamoDBResponsesDeleteBackupBackupDescription {
    return new DynamoDBResponsesDeleteBackupBackupDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get backupDetails(): DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails(this.__scope, this.__resources, this.__input);
  }

  public get sourceTableDetails(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails(this.__scope, this.__resources, this.__input);
  }

  public get sourceTableFeatureDetails(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get backupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupArn'),
        outputPath: 'BackupDescription.BackupDetails.BackupArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupArn', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupArn') as unknown as string;
  }

  public get backupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupName'),
        outputPath: 'BackupDescription.BackupDetails.BackupName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupName', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupName') as unknown as string;
  }

  public get backupSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupSizeBytes'),
        outputPath: 'BackupDescription.BackupDetails.BackupSizeBytes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupSizeBytes', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupSizeBytes') as unknown as number;
  }

  public get backupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupStatus'),
        outputPath: 'BackupDescription.BackupDetails.BackupStatus',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupStatus', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupStatus') as unknown as string;
  }

  public get backupType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupType'),
        outputPath: 'BackupDescription.BackupDetails.BackupType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupType', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupType') as unknown as string;
  }

  public get backupCreationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupCreationDateTime'),
        outputPath: 'BackupDescription.BackupDetails.BackupCreationDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupCreationDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupCreationDateTime') as unknown as string;
  }

  public get backupExpiryDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.BackupDetails.BackupExpiryDateTime'),
        outputPath: 'BackupDescription.BackupDetails.BackupExpiryDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.TableName'),
        outputPath: 'BackupDescription.SourceTableDetails.TableName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.TableName', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableName') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.TableId'),
        outputPath: 'BackupDescription.SourceTableDetails.TableId',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.TableId', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableId') as unknown as string;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.TableArn'),
        outputPath: 'BackupDescription.SourceTableDetails.TableArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.TableArn', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableArn') as unknown as string;
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.TableSizeBytes'),
        outputPath: 'BackupDescription.SourceTableDetails.TableSizeBytes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.TableSizeBytes', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableSizeBytes') as unknown as number;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.KeySchema'),
        outputPath: 'BackupDescription.SourceTableDetails.KeySchema',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.KeySchema', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableCreationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.TableCreationDateTime'),
        outputPath: 'BackupDescription.SourceTableDetails.TableCreationDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.TableCreationDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableCreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.ItemCount'),
        outputPath: 'BackupDescription.SourceTableDetails.ItemCount',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.ItemCount', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ItemCount') as unknown as number;
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.BillingMode'),
        outputPath: 'BackupDescription.SourceTableDetails.BillingMode',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.BillingMode', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.BillingMode') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexInfo[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexInfo[];
  }

  public get streamDescription(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(this.__scope, this.__resources, this.__input);
  }

  public get timeToLiveDescription(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {
    return new DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get timeToLiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus') as unknown as string;
  }

  public get attributeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteBackupInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.Status',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteItemInput) {
  }

  public get attributes(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesDeleteItemConsumedCapacity {
    return new DynamoDBResponsesDeleteItemConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

  public get itemCollectionMetrics(): DynamoDBResponsesDeleteItemItemCollectionMetrics {
    return new DynamoDBResponsesDeleteItemItemCollectionMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteItemConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteItemInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesDeleteItemConsumedCapacityTable {
    return new DynamoDBResponsesDeleteItemConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesDeleteItemConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteItemInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDeleteItemItemCollectionMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteItemInput) {
  }

  public get itemCollectionKey(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ItemCollectionMetrics.ItemCollectionKey'),
        outputPath: 'ItemCollectionMetrics.ItemCollectionKey',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ItemCollectionMetrics.ItemCollectionKey', props);
    return resource.getResponseField('ItemCollectionMetrics.ItemCollectionKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get sizeEstimateRangeGb(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteItem.ItemCollectionMetrics.SizeEstimateRangeGB'),
        outputPath: 'ItemCollectionMetrics.SizeEstimateRangeGB',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBResponsesDeleteTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get tableDescription(): DynamoDBResponsesDeleteTableTableDescription {
    return new DynamoDBResponsesDeleteTableTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteTableTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.AttributeDefinitions'),
        outputPath: 'TableDescription.AttributeDefinitions',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.AttributeDefinitions', props);
    return resource.getResponseField('TableDescription.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.TableName'),
        outputPath: 'TableDescription.TableName',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.TableName', props);
    return resource.getResponseField('TableDescription.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.KeySchema'),
        outputPath: 'TableDescription.KeySchema',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.KeySchema', props);
    return resource.getResponseField('TableDescription.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.TableStatus'),
        outputPath: 'TableDescription.TableStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.TableStatus', props);
    return resource.getResponseField('TableDescription.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.CreationDateTime'),
        outputPath: 'TableDescription.CreationDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput {
    return new DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.TableSizeBytes'),
        outputPath: 'TableDescription.TableSizeBytes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.TableSizeBytes', props);
    return resource.getResponseField('TableDescription.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ItemCount'),
        outputPath: 'TableDescription.ItemCount',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ItemCount', props);
    return resource.getResponseField('TableDescription.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.TableArn'),
        outputPath: 'TableDescription.TableArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.TableArn', props);
    return resource.getResponseField('TableDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.TableId'),
        outputPath: 'TableDescription.TableId',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary {
    return new DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.LocalSecondaryIndexes'),
        outputPath: 'TableDescription.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.LocalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.GlobalSecondaryIndexes'),
        outputPath: 'TableDescription.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification {
    return new DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.LatestStreamLabel'),
        outputPath: 'TableDescription.LatestStreamLabel',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.LatestStreamLabel', props);
    return resource.getResponseField('TableDescription.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.LatestStreamArn'),
        outputPath: 'TableDescription.LatestStreamArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.LatestStreamArn', props);
    return resource.getResponseField('TableDescription.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.GlobalTableVersion'),
        outputPath: 'TableDescription.GlobalTableVersion',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.GlobalTableVersion', props);
    return resource.getResponseField('TableDescription.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.Replicas'),
        outputPath: 'TableDescription.Replicas',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary {
    return new DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesDeleteTableTableDescriptionSseDescription {
    return new DynamoDBResponsesDeleteTableTableDescriptionSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary {
    return new DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'TableDescription.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.BillingModeSummary.BillingMode'),
        outputPath: 'TableDescription.BillingModeSummary.BillingMode',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.StreamSpecification.StreamEnabled'),
        outputPath: 'TableDescription.StreamSpecification.StreamEnabled',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.StreamSpecification.StreamViewType'),
        outputPath: 'TableDescription.StreamSpecification.StreamViewType',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.RestoreSummary.SourceBackupArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceBackupArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.RestoreSummary.SourceTableArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceTableArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.RestoreSummary.RestoreDateTime'),
        outputPath: 'TableDescription.RestoreSummary.RestoreDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.RestoreSummary.RestoreInProgress'),
        outputPath: 'TableDescription.RestoreSummary.RestoreInProgress',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.SSEDescription.Status'),
        outputPath: 'TableDescription.SSEDescription.Status',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.SSEDescription.Status', props);
    return resource.getResponseField('TableDescription.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.SSEDescription.SSEType'),
        outputPath: 'TableDescription.SSEDescription.SSEType',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.SSEDescription.SSEType', props);
    return resource.getResponseField('TableDescription.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'TableDescription.SSEDescription.KMSMasterKeyArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('TableDescription.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'TableDescription.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDeleteTableInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ArchivalSummary.ArchivalReason'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalReason',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DeleteTable.TableDescription.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get backupDescription(): DynamoDBResponsesDescribeBackupBackupDescription {
    return new DynamoDBResponsesDescribeBackupBackupDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get backupDetails(): DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails(this.__scope, this.__resources, this.__input);
  }

  public get sourceTableDetails(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails(this.__scope, this.__resources, this.__input);
  }

  public get sourceTableFeatureDetails(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get backupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupArn'),
        outputPath: 'BackupDescription.BackupDetails.BackupArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupArn', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupArn') as unknown as string;
  }

  public get backupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupName'),
        outputPath: 'BackupDescription.BackupDetails.BackupName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupName', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupName') as unknown as string;
  }

  public get backupSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupSizeBytes'),
        outputPath: 'BackupDescription.BackupDetails.BackupSizeBytes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupSizeBytes', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupSizeBytes') as unknown as number;
  }

  public get backupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupStatus'),
        outputPath: 'BackupDescription.BackupDetails.BackupStatus',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupStatus', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupStatus') as unknown as string;
  }

  public get backupType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupType'),
        outputPath: 'BackupDescription.BackupDetails.BackupType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupType', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupType') as unknown as string;
  }

  public get backupCreationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupCreationDateTime'),
        outputPath: 'BackupDescription.BackupDetails.BackupCreationDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupCreationDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupCreationDateTime') as unknown as string;
  }

  public get backupExpiryDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.BackupDetails.BackupExpiryDateTime'),
        outputPath: 'BackupDescription.BackupDetails.BackupExpiryDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.TableName'),
        outputPath: 'BackupDescription.SourceTableDetails.TableName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.TableName', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableName') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.TableId'),
        outputPath: 'BackupDescription.SourceTableDetails.TableId',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.TableId', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableId') as unknown as string;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.TableArn'),
        outputPath: 'BackupDescription.SourceTableDetails.TableArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.TableArn', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableArn') as unknown as string;
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.TableSizeBytes'),
        outputPath: 'BackupDescription.SourceTableDetails.TableSizeBytes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.TableSizeBytes', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableSizeBytes') as unknown as number;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.KeySchema'),
        outputPath: 'BackupDescription.SourceTableDetails.KeySchema',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.KeySchema', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableCreationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.TableCreationDateTime'),
        outputPath: 'BackupDescription.SourceTableDetails.TableCreationDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.TableCreationDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableCreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.ItemCount'),
        outputPath: 'BackupDescription.SourceTableDetails.ItemCount',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.ItemCount', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ItemCount') as unknown as number;
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.BillingMode'),
        outputPath: 'BackupDescription.SourceTableDetails.BillingMode',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.BillingMode', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.BillingMode') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexInfo[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexInfo[];
  }

  public get streamDescription(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(this.__scope, this.__resources, this.__input);
  }

  public get timeToLiveDescription(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {
    return new DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get timeToLiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus') as unknown as string;
  }

  public get attributeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeBackupInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.Status',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          BackupArn: this.__input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeContinuousBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeContinuousBackupsInput) {
  }

  public get continuousBackupsDescription(): DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription {
    return new DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeContinuousBackupsInput) {
  }

  public get continuousBackupsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus'),
        outputPath: 'ContinuousBackupsDescription.ContinuousBackupsStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.ContinuousBackupsStatus') as unknown as string;
  }

  public get pointInTimeRecoveryDescription(): DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {
    return new DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeContinuousBackupsInput) {
  }

  public get pointInTimeRecoveryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus') as unknown as string;
  }

  public get earliestRestorableDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime') as unknown as string;
  }

  public get latestRestorableDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeContributorInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeContributorInsightsInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.TableName'),
        outputPath: 'TableName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.IndexName'),
        outputPath: 'IndexName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.IndexName', props);
    return resource.getResponseField('IndexName') as unknown as string;
  }

  public get contributorInsightsRuleList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.ContributorInsightsRuleList'),
        outputPath: 'ContributorInsightsRuleList',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.ContributorInsightsRuleList', props);
    return resource.getResponseField('ContributorInsightsRuleList') as unknown as string[];
  }

  public get contributorInsightsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.ContributorInsightsStatus'),
        outputPath: 'ContributorInsightsStatus',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.ContributorInsightsStatus', props);
    return resource.getResponseField('ContributorInsightsStatus') as unknown as string;
  }

  public get lastUpdateDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.LastUpdateDateTime'),
        outputPath: 'LastUpdateDateTime',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.LastUpdateDateTime', props);
    return resource.getResponseField('LastUpdateDateTime') as unknown as string;
  }

  public get failureException(): DynamoDBResponsesDescribeContributorInsightsFailureException {
    return new DynamoDBResponsesDescribeContributorInsightsFailureException(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeContributorInsightsFailureException {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeContributorInsightsInput) {
  }

  public get exceptionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.FailureException.ExceptionName'),
        outputPath: 'FailureException.ExceptionName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.FailureException.ExceptionName', props);
    return resource.getResponseField('FailureException.ExceptionName') as unknown as string;
  }

  public get exceptionDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeContributorInsights.FailureException.ExceptionDescription'),
        outputPath: 'FailureException.ExceptionDescription',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContributorInsights.FailureException.ExceptionDescription', props);
    return resource.getResponseField('FailureException.ExceptionDescription') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get endpoints(): shapes.DynamoDbEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoints',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.DynamoDbEndpoint[];
  }

}

export class DynamoDBResponsesDescribeExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeExportInput) {
  }

  public get exportDescription(): DynamoDBResponsesDescribeExportExportDescription {
    return new DynamoDBResponsesDescribeExportExportDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeExportExportDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeExportInput) {
  }

  public get exportArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ExportArn'),
        outputPath: 'ExportDescription.ExportArn',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ExportArn', props);
    return resource.getResponseField('ExportDescription.ExportArn') as unknown as string;
  }

  public get exportStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ExportStatus'),
        outputPath: 'ExportDescription.ExportStatus',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ExportStatus', props);
    return resource.getResponseField('ExportDescription.ExportStatus') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.StartTime'),
        outputPath: 'ExportDescription.StartTime',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.StartTime', props);
    return resource.getResponseField('ExportDescription.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.EndTime'),
        outputPath: 'ExportDescription.EndTime',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.EndTime', props);
    return resource.getResponseField('ExportDescription.EndTime') as unknown as string;
  }

  public get exportManifest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ExportManifest'),
        outputPath: 'ExportDescription.ExportManifest',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ExportManifest', props);
    return resource.getResponseField('ExportDescription.ExportManifest') as unknown as string;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.TableArn'),
        outputPath: 'ExportDescription.TableArn',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.TableArn', props);
    return resource.getResponseField('ExportDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.TableId'),
        outputPath: 'ExportDescription.TableId',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.TableId', props);
    return resource.getResponseField('ExportDescription.TableId') as unknown as string;
  }

  public get exportTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ExportTime'),
        outputPath: 'ExportDescription.ExportTime',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ExportTime', props);
    return resource.getResponseField('ExportDescription.ExportTime') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ClientToken'),
        outputPath: 'ExportDescription.ClientToken',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ClientToken', props);
    return resource.getResponseField('ExportDescription.ClientToken') as unknown as string;
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.S3Bucket'),
        outputPath: 'ExportDescription.S3Bucket',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.S3Bucket', props);
    return resource.getResponseField('ExportDescription.S3Bucket') as unknown as string;
  }

  public get s3BucketOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.S3BucketOwner'),
        outputPath: 'ExportDescription.S3BucketOwner',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.S3BucketOwner', props);
    return resource.getResponseField('ExportDescription.S3BucketOwner') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.S3Prefix'),
        outputPath: 'ExportDescription.S3Prefix',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.S3Prefix', props);
    return resource.getResponseField('ExportDescription.S3Prefix') as unknown as string;
  }

  public get s3SseAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.S3SseAlgorithm'),
        outputPath: 'ExportDescription.S3SseAlgorithm',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.S3SseAlgorithm', props);
    return resource.getResponseField('ExportDescription.S3SseAlgorithm') as unknown as string;
  }

  public get s3SseKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.S3SseKmsKeyId'),
        outputPath: 'ExportDescription.S3SseKmsKeyId',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.S3SseKmsKeyId', props);
    return resource.getResponseField('ExportDescription.S3SseKmsKeyId') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.FailureCode'),
        outputPath: 'ExportDescription.FailureCode',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.FailureCode', props);
    return resource.getResponseField('ExportDescription.FailureCode') as unknown as string;
  }

  public get failureMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.FailureMessage'),
        outputPath: 'ExportDescription.FailureMessage',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.FailureMessage', props);
    return resource.getResponseField('ExportDescription.FailureMessage') as unknown as string;
  }

  public get exportFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ExportFormat'),
        outputPath: 'ExportDescription.ExportFormat',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ExportFormat', props);
    return resource.getResponseField('ExportDescription.ExportFormat') as unknown as string;
  }

  public get billedSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.BilledSizeBytes'),
        outputPath: 'ExportDescription.BilledSizeBytes',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.BilledSizeBytes', props);
    return resource.getResponseField('ExportDescription.BilledSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExport',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeExport.ExportDescription.ItemCount'),
        outputPath: 'ExportDescription.ItemCount',
        parameters: {
          ExportArn: this.__input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExport.ExportDescription.ItemCount', props);
    return resource.getResponseField('ExportDescription.ItemCount') as unknown as number;
  }

}

export class DynamoDBResponsesDescribeGlobalTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeGlobalTableInput) {
  }

  public get globalTableDescription(): DynamoDBResponsesDescribeGlobalTableGlobalTableDescription {
    return new DynamoDBResponsesDescribeGlobalTableGlobalTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeGlobalTableGlobalTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeGlobalTableInput) {
  }

  public get replicationGroup(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTable.GlobalTableDescription.ReplicationGroup'),
        outputPath: 'GlobalTableDescription.ReplicationGroup',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTable.GlobalTableDescription.ReplicationGroup', props);
    return resource.getResponseField('GlobalTableDescription.ReplicationGroup') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get globalTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTable.GlobalTableDescription.GlobalTableArn'),
        outputPath: 'GlobalTableDescription.GlobalTableArn',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableArn', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTable.GlobalTableDescription.CreationDateTime'),
        outputPath: 'GlobalTableDescription.CreationDateTime',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTable.GlobalTableDescription.CreationDateTime', props);
    return resource.getResponseField('GlobalTableDescription.CreationDateTime') as unknown as string;
  }

  public get globalTableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTable.GlobalTableDescription.GlobalTableStatus'),
        outputPath: 'GlobalTableDescription.GlobalTableStatus',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableStatus') as unknown as string;
  }

  public get globalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTable.GlobalTableDescription.GlobalTableName'),
        outputPath: 'GlobalTableDescription.GlobalTableName',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeGlobalTableSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeGlobalTableSettingsInput) {
  }

  public get globalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTableSettings',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTableSettings.GlobalTableName'),
        outputPath: 'GlobalTableName',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTableSettings.GlobalTableName', props);
    return resource.getResponseField('GlobalTableName') as unknown as string;
  }

  public get replicaSettings(): shapes.DynamoDbReplicaSettingsDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalTableSettings',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeGlobalTableSettings.ReplicaSettings'),
        outputPath: 'ReplicaSettings',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalTableSettings.ReplicaSettings', props);
    return resource.getResponseField('ReplicaSettings') as unknown as shapes.DynamoDbReplicaSettingsDescription[];
  }

}

export class DynamoDBResponsesDescribeKinesisStreamingDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeKinesisStreamingDestinationInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeKinesisStreamingDestination.TableName'),
        outputPath: 'TableName',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKinesisStreamingDestination.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

  public get kinesisDataStreamDestinations(): shapes.DynamoDbKinesisDataStreamDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeKinesisStreamingDestination.KinesisDataStreamDestinations'),
        outputPath: 'KinesisDataStreamDestinations',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKinesisStreamingDestination.KinesisDataStreamDestinations', props);
    return resource.getResponseField('KinesisDataStreamDestinations') as unknown as shapes.DynamoDbKinesisDataStreamDestination[];
  }

}

export class DynamoDBResponsesDescribeLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountMaxReadCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeLimits.AccountMaxReadCapacityUnits'),
        outputPath: 'AccountMaxReadCapacityUnits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.AccountMaxReadCapacityUnits', props);
    return resource.getResponseField('AccountMaxReadCapacityUnits') as unknown as number;
  }

  public get accountMaxWriteCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeLimits.AccountMaxWriteCapacityUnits'),
        outputPath: 'AccountMaxWriteCapacityUnits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.AccountMaxWriteCapacityUnits', props);
    return resource.getResponseField('AccountMaxWriteCapacityUnits') as unknown as number;
  }

  public get tableMaxReadCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeLimits.TableMaxReadCapacityUnits'),
        outputPath: 'TableMaxReadCapacityUnits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.TableMaxReadCapacityUnits', props);
    return resource.getResponseField('TableMaxReadCapacityUnits') as unknown as number;
  }

  public get tableMaxWriteCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLimits',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeLimits.TableMaxWriteCapacityUnits'),
        outputPath: 'TableMaxWriteCapacityUnits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLimits.TableMaxWriteCapacityUnits', props);
    return resource.getResponseField('TableMaxWriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDescribeTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get table(): DynamoDBResponsesDescribeTableTable {
    return new DynamoDBResponsesDescribeTableTable(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeTableTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.AttributeDefinitions'),
        outputPath: 'Table.AttributeDefinitions',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.AttributeDefinitions', props);
    return resource.getResponseField('Table.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.TableName'),
        outputPath: 'Table.TableName',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableName', props);
    return resource.getResponseField('Table.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.KeySchema'),
        outputPath: 'Table.KeySchema',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.KeySchema', props);
    return resource.getResponseField('Table.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.TableStatus'),
        outputPath: 'Table.TableStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.CreationDateTime'),
        outputPath: 'Table.CreationDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.CreationDateTime', props);
    return resource.getResponseField('Table.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesDescribeTableTableProvisionedThroughput {
    return new DynamoDBResponsesDescribeTableTableProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.TableSizeBytes'),
        outputPath: 'Table.TableSizeBytes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableSizeBytes', props);
    return resource.getResponseField('Table.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ItemCount'),
        outputPath: 'Table.ItemCount',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ItemCount', props);
    return resource.getResponseField('Table.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.TableArn'),
        outputPath: 'Table.TableArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableArn', props);
    return resource.getResponseField('Table.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.TableId'),
        outputPath: 'Table.TableId',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableId', props);
    return resource.getResponseField('Table.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesDescribeTableTableBillingModeSummary {
    return new DynamoDBResponsesDescribeTableTableBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.LocalSecondaryIndexes'),
        outputPath: 'Table.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.LocalSecondaryIndexes', props);
    return resource.getResponseField('Table.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.GlobalSecondaryIndexes'),
        outputPath: 'Table.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.GlobalSecondaryIndexes', props);
    return resource.getResponseField('Table.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesDescribeTableTableStreamSpecification {
    return new DynamoDBResponsesDescribeTableTableStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.LatestStreamLabel'),
        outputPath: 'Table.LatestStreamLabel',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.LatestStreamLabel', props);
    return resource.getResponseField('Table.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.LatestStreamArn'),
        outputPath: 'Table.LatestStreamArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.LatestStreamArn', props);
    return resource.getResponseField('Table.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.GlobalTableVersion'),
        outputPath: 'Table.GlobalTableVersion',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.GlobalTableVersion', props);
    return resource.getResponseField('Table.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.Replicas'),
        outputPath: 'Table.Replicas',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.Replicas', props);
    return resource.getResponseField('Table.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesDescribeTableTableRestoreSummary {
    return new DynamoDBResponsesDescribeTableTableRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesDescribeTableTableSseDescription {
    return new DynamoDBResponsesDescribeTableTableSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesDescribeTableTableArchivalSummary {
    return new DynamoDBResponsesDescribeTableTableArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeTableTableProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'Table.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('Table.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'Table.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('Table.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'Table.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('Table.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'Table.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('Table.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'Table.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('Table.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesDescribeTableTableBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.BillingModeSummary.BillingMode'),
        outputPath: 'Table.BillingModeSummary.BillingMode',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('Table.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeTableTableStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.StreamSpecification.StreamEnabled'),
        outputPath: 'Table.StreamSpecification.StreamEnabled',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('Table.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.StreamSpecification.StreamViewType'),
        outputPath: 'Table.StreamSpecification.StreamViewType',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('Table.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeTableTableRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.RestoreSummary.SourceBackupArn'),
        outputPath: 'Table.RestoreSummary.SourceBackupArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('Table.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.RestoreSummary.SourceTableArn'),
        outputPath: 'Table.RestoreSummary.SourceTableArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('Table.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.RestoreSummary.RestoreDateTime'),
        outputPath: 'Table.RestoreSummary.RestoreDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('Table.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.RestoreSummary.RestoreInProgress'),
        outputPath: 'Table.RestoreSummary.RestoreInProgress',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('Table.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesDescribeTableTableSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.SSEDescription.Status'),
        outputPath: 'Table.SSEDescription.Status',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.SSEDescription.Status', props);
    return resource.getResponseField('Table.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.SSEDescription.SSEType'),
        outputPath: 'Table.SSEDescription.SSEType',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.SSEDescription.SSEType', props);
    return resource.getResponseField('Table.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'Table.SSEDescription.KMSMasterKeyArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('Table.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'Table.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('Table.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeTableTableArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'Table.ArchivalSummary.ArchivalDateTime',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('Table.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ArchivalSummary.ArchivalReason'),
        outputPath: 'Table.ArchivalSummary.ArchivalReason',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('Table.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTable.Table.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'Table.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('Table.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesDescribeTableReplicaAutoScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput) {
  }

  public get tableAutoScalingDescription(): DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription {
    return new DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableName'),
        outputPath: 'TableAutoScalingDescription.TableName',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableName', props);
    return resource.getResponseField('TableAutoScalingDescription.TableName') as unknown as string;
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus'),
        outputPath: 'TableAutoScalingDescription.TableStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus', props);
    return resource.getResponseField('TableAutoScalingDescription.TableStatus') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaAutoScalingDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTableReplicaAutoScaling.TableAutoScalingDescription.Replicas'),
        outputPath: 'TableAutoScalingDescription.Replicas',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.Replicas', props);
    return resource.getResponseField('TableAutoScalingDescription.Replicas') as unknown as shapes.DynamoDbReplicaAutoScalingDescription[];
  }

}

export class DynamoDBResponsesDescribeTimeToLive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTimeToLiveInput) {
  }

  public get timeToLiveDescription(): DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription {
    return new DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbDescribeTimeToLiveInput) {
  }

  public get timeToLiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTimeToLive',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTimeToLive.TimeToLiveDescription.TimeToLiveStatus'),
        outputPath: 'TimeToLiveDescription.TimeToLiveStatus',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTimeToLive.TimeToLiveDescription.TimeToLiveStatus', props);
    return resource.getResponseField('TimeToLiveDescription.TimeToLiveStatus') as unknown as string;
  }

  public get attributeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTimeToLive',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DescribeTimeToLive.TimeToLiveDescription.AttributeName'),
        outputPath: 'TimeToLiveDescription.AttributeName',
        parameters: {
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTimeToLive.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBResponsesDisableKinesisStreamingDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbKinesisStreamingDestinationInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DisableKinesisStreamingDestination.TableName'),
        outputPath: 'TableName',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableKinesisStreamingDestination.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DisableKinesisStreamingDestination.StreamArn'),
        outputPath: 'StreamArn',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableKinesisStreamingDestination.StreamArn', props);
    return resource.getResponseField('StreamArn') as unknown as string;
  }

  public get destinationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.DisableKinesisStreamingDestination.DestinationStatus'),
        outputPath: 'DestinationStatus',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableKinesisStreamingDestination.DestinationStatus', props);
    return resource.getResponseField('DestinationStatus') as unknown as string;
  }

}

export class DynamoDBResponsesEnableKinesisStreamingDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbKinesisStreamingDestinationInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.EnableKinesisStreamingDestination.TableName'),
        outputPath: 'TableName',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableKinesisStreamingDestination.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.EnableKinesisStreamingDestination.StreamArn'),
        outputPath: 'StreamArn',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableKinesisStreamingDestination.StreamArn', props);
    return resource.getResponseField('StreamArn') as unknown as string;
  }

  public get destinationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableKinesisStreamingDestination',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.EnableKinesisStreamingDestination.DestinationStatus'),
        outputPath: 'DestinationStatus',
        parameters: {
          TableName: this.__input.tableName,
          StreamArn: this.__input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableKinesisStreamingDestination.DestinationStatus', props);
    return resource.getResponseField('DestinationStatus') as unknown as string;
  }

}

export class DynamoDBResponsesExecuteStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbExecuteStatementInput) {
  }

  public get items(): Record<string, shapes.DynamoDbAttributeValue>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExecuteStatement.Items'),
        outputPath: 'Items',
        parameters: {
          Statement: this.__input.statement,
          Parameters: this.__input.parameters,
          ConsistentRead: this.__input.consistentRead,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.Items', props);
    return resource.getResponseField('Items') as unknown as Record<string, shapes.DynamoDbAttributeValue>[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExecuteStatement.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Statement: this.__input.statement,
          Parameters: this.__input.parameters,
          ConsistentRead: this.__input.consistentRead,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBResponsesExecuteTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbExecuteTransactionInput) {
  }

  public get responses(): shapes.DynamoDbItemResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeTransaction',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExecuteTransaction.Responses'),
        outputPath: 'Responses',
        parameters: {
          TransactStatements: this.__input.transactStatements,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteTransaction.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbItemResponse[];
  }

}

export class DynamoDBResponsesExportTableToPointInTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbExportTableToPointInTimeInput) {
  }

  public get exportDescription(): DynamoDBResponsesExportTableToPointInTimeExportDescription {
    return new DynamoDBResponsesExportTableToPointInTimeExportDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesExportTableToPointInTimeExportDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbExportTableToPointInTimeInput) {
  }

  public get exportArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ExportArn'),
        outputPath: 'ExportDescription.ExportArn',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ExportArn', props);
    return resource.getResponseField('ExportDescription.ExportArn') as unknown as string;
  }

  public get exportStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ExportStatus'),
        outputPath: 'ExportDescription.ExportStatus',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ExportStatus', props);
    return resource.getResponseField('ExportDescription.ExportStatus') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.StartTime'),
        outputPath: 'ExportDescription.StartTime',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.StartTime', props);
    return resource.getResponseField('ExportDescription.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.EndTime'),
        outputPath: 'ExportDescription.EndTime',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.EndTime', props);
    return resource.getResponseField('ExportDescription.EndTime') as unknown as string;
  }

  public get exportManifest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ExportManifest'),
        outputPath: 'ExportDescription.ExportManifest',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ExportManifest', props);
    return resource.getResponseField('ExportDescription.ExportManifest') as unknown as string;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.TableArn'),
        outputPath: 'ExportDescription.TableArn',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.TableArn', props);
    return resource.getResponseField('ExportDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.TableId'),
        outputPath: 'ExportDescription.TableId',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.TableId', props);
    return resource.getResponseField('ExportDescription.TableId') as unknown as string;
  }

  public get exportTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ExportTime'),
        outputPath: 'ExportDescription.ExportTime',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ExportTime', props);
    return resource.getResponseField('ExportDescription.ExportTime') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ClientToken'),
        outputPath: 'ExportDescription.ClientToken',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ClientToken', props);
    return resource.getResponseField('ExportDescription.ClientToken') as unknown as string;
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.S3Bucket'),
        outputPath: 'ExportDescription.S3Bucket',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.S3Bucket', props);
    return resource.getResponseField('ExportDescription.S3Bucket') as unknown as string;
  }

  public get s3BucketOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.S3BucketOwner'),
        outputPath: 'ExportDescription.S3BucketOwner',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.S3BucketOwner', props);
    return resource.getResponseField('ExportDescription.S3BucketOwner') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.S3Prefix'),
        outputPath: 'ExportDescription.S3Prefix',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.S3Prefix', props);
    return resource.getResponseField('ExportDescription.S3Prefix') as unknown as string;
  }

  public get s3SseAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.S3SseAlgorithm'),
        outputPath: 'ExportDescription.S3SseAlgorithm',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.S3SseAlgorithm', props);
    return resource.getResponseField('ExportDescription.S3SseAlgorithm') as unknown as string;
  }

  public get s3SseKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.S3SseKmsKeyId'),
        outputPath: 'ExportDescription.S3SseKmsKeyId',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.S3SseKmsKeyId', props);
    return resource.getResponseField('ExportDescription.S3SseKmsKeyId') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.FailureCode'),
        outputPath: 'ExportDescription.FailureCode',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.FailureCode', props);
    return resource.getResponseField('ExportDescription.FailureCode') as unknown as string;
  }

  public get failureMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.FailureMessage'),
        outputPath: 'ExportDescription.FailureMessage',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.FailureMessage', props);
    return resource.getResponseField('ExportDescription.FailureMessage') as unknown as string;
  }

  public get exportFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ExportFormat'),
        outputPath: 'ExportDescription.ExportFormat',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ExportFormat', props);
    return resource.getResponseField('ExportDescription.ExportFormat') as unknown as string;
  }

  public get billedSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.BilledSizeBytes'),
        outputPath: 'ExportDescription.BilledSizeBytes',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.BilledSizeBytes', props);
    return resource.getResponseField('ExportDescription.BilledSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ExportTableToPointInTime.ExportDescription.ItemCount'),
        outputPath: 'ExportDescription.ItemCount',
        parameters: {
          TableArn: this.__input.tableArn,
          ExportTime: this.__input.exportTime,
          ClientToken: this.__input.clientToken,
          S3Bucket: this.__input.s3Bucket,
          S3BucketOwner: this.__input.s3BucketOwner,
          S3Prefix: this.__input.s3Prefix,
          S3SseAlgorithm: this.__input.s3SseAlgorithm,
          S3SseKmsKeyId: this.__input.s3SseKmsKeyId,
          ExportFormat: this.__input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportTableToPointInTime.ExportDescription.ItemCount', props);
    return resource.getResponseField('ExportDescription.ItemCount') as unknown as number;
  }

}

export class DynamoDBResponsesFetchItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbGetItemInput) {
  }

  public get item(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.Item'),
        outputPath: 'Item',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.Item', props);
    return resource.getResponseField('Item') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesFetchItemConsumedCapacity {
    return new DynamoDBResponsesFetchItemConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesFetchItemConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbGetItemInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesFetchItemConsumedCapacityTable {
    return new DynamoDBResponsesFetchItemConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesFetchItemConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbGetItemInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.GetItem.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributesToGet: this.__input.attributesToGet,
          ConsistentRead: this.__input.consistentRead,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesListBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListBackupsInput) {
  }

  public get backupSummaries(): shapes.DynamoDbBackupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListBackups.BackupSummaries'),
        outputPath: 'BackupSummaries',
        parameters: {
          TableName: this.__input.tableName,
          Limit: this.__input.limit,
          TimeRangeLowerBound: this.__input.timeRangeLowerBound,
          TimeRangeUpperBound: this.__input.timeRangeUpperBound,
          ExclusiveStartBackupArn: this.__input.exclusiveStartBackupArn,
          BackupType: this.__input.backupType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackups.BackupSummaries', props);
    return resource.getResponseField('BackupSummaries') as unknown as shapes.DynamoDbBackupSummary[];
  }

  public get lastEvaluatedBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListBackups.LastEvaluatedBackupArn'),
        outputPath: 'LastEvaluatedBackupArn',
        parameters: {
          TableName: this.__input.tableName,
          Limit: this.__input.limit,
          TimeRangeLowerBound: this.__input.timeRangeLowerBound,
          TimeRangeUpperBound: this.__input.timeRangeUpperBound,
          ExclusiveStartBackupArn: this.__input.exclusiveStartBackupArn,
          BackupType: this.__input.backupType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackups.LastEvaluatedBackupArn', props);
    return resource.getResponseField('LastEvaluatedBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesListContributorInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListContributorInsightsInput) {
  }

  public get contributorInsightsSummaries(): shapes.DynamoDbContributorInsightsSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListContributorInsights.ContributorInsightsSummaries'),
        outputPath: 'ContributorInsightsSummaries',
        parameters: {
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContributorInsights.ContributorInsightsSummaries', props);
    return resource.getResponseField('ContributorInsightsSummaries') as unknown as shapes.DynamoDbContributorInsightsSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListContributorInsights.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContributorInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBResponsesListExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListExportsInput) {
  }

  public get exportSummaries(): shapes.DynamoDbExportSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExports',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListExports.ExportSummaries'),
        outputPath: 'ExportSummaries',
        parameters: {
          TableArn: this.__input.tableArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExports.ExportSummaries', props);
    return resource.getResponseField('ExportSummaries') as unknown as shapes.DynamoDbExportSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExports',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListExports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TableArn: this.__input.tableArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBResponsesListGlobalTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListGlobalTablesInput) {
  }

  public get globalTables(): shapes.DynamoDbGlobalTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGlobalTables',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListGlobalTables.GlobalTables'),
        outputPath: 'GlobalTables',
        parameters: {
          ExclusiveStartGlobalTableName: this.__input.exclusiveStartGlobalTableName,
          Limit: this.__input.limit,
          RegionName: this.__input.regionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGlobalTables.GlobalTables', props);
    return resource.getResponseField('GlobalTables') as unknown as shapes.DynamoDbGlobalTable[];
  }

  public get lastEvaluatedGlobalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGlobalTables',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListGlobalTables.LastEvaluatedGlobalTableName'),
        outputPath: 'LastEvaluatedGlobalTableName',
        parameters: {
          ExclusiveStartGlobalTableName: this.__input.exclusiveStartGlobalTableName,
          Limit: this.__input.limit,
          RegionName: this.__input.regionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGlobalTables.LastEvaluatedGlobalTableName', props);
    return resource.getResponseField('LastEvaluatedGlobalTableName') as unknown as string;
  }

}

export class DynamoDBResponsesListTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListTablesInput) {
  }

  public get tableNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListTables.TableNames'),
        outputPath: 'TableNames',
        parameters: {
          ExclusiveStartTableName: this.__input.exclusiveStartTableName,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.TableNames', props);
    return resource.getResponseField('TableNames') as unknown as string[];
  }

  public get lastEvaluatedTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListTables.LastEvaluatedTableName'),
        outputPath: 'LastEvaluatedTableName',
        parameters: {
          ExclusiveStartTableName: this.__input.exclusiveStartTableName,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.LastEvaluatedTableName', props);
    return resource.getResponseField('LastEvaluatedTableName') as unknown as string;
  }

}

export class DynamoDBResponsesListTagsOfResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbListTagsOfResourceInput) {
  }

  public get tags(): shapes.DynamoDbTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsOfResource',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListTagsOfResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsOfResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DynamoDbTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsOfResource',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.ListTagsOfResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsOfResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBResponsesPutItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbPutItemInput) {
  }

  public get attributes(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesPutItemConsumedCapacity {
    return new DynamoDBResponsesPutItemConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

  public get itemCollectionMetrics(): DynamoDBResponsesPutItemItemCollectionMetrics {
    return new DynamoDBResponsesPutItemItemCollectionMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesPutItemConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbPutItemInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesPutItemConsumedCapacityTable {
    return new DynamoDBResponsesPutItemConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesPutItemConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbPutItemInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesPutItemItemCollectionMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbPutItemInput) {
  }

  public get itemCollectionKey(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ItemCollectionMetrics.ItemCollectionKey'),
        outputPath: 'ItemCollectionMetrics.ItemCollectionKey',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ItemCollectionMetrics.ItemCollectionKey', props);
    return resource.getResponseField('ItemCollectionMetrics.ItemCollectionKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get sizeEstimateRangeGb(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.PutItem.ItemCollectionMetrics.SizeEstimateRangeGB'),
        outputPath: 'ItemCollectionMetrics.SizeEstimateRangeGB',
        parameters: {
          TableName: this.__input.tableName,
          Item: this.__input.item,
          Expected: this.__input.expected,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ConditionalOperator: this.__input.conditionalOperator,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBResponsesQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbQueryInput) {
  }

  public get items(): Record<string, shapes.DynamoDbAttributeValue>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.Items'),
        outputPath: 'Items',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.Items', props);
    return resource.getResponseField('Items') as unknown as Record<string, shapes.DynamoDbAttributeValue>[];
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.Count'),
        outputPath: 'Count',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

  public get scannedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ScannedCount'),
        outputPath: 'ScannedCount',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ScannedCount', props);
    return resource.getResponseField('ScannedCount') as unknown as number;
  }

  public get lastEvaluatedKey(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.LastEvaluatedKey'),
        outputPath: 'LastEvaluatedKey',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.LastEvaluatedKey', props);
    return resource.getResponseField('LastEvaluatedKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesQueryConsumedCapacity {
    return new DynamoDBResponsesQueryConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesQueryConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbQueryInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesQueryConsumedCapacityTable {
    return new DynamoDBResponsesQueryConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesQueryConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbQueryInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Query.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          Select: this.__input.select,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          ConsistentRead: this.__input.consistentRead,
          KeyConditions: this.__input.keyConditions,
          QueryFilter: this.__input.queryFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ScanIndexForward: this.__input.scanIndexForward,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          KeyConditionExpression: this.__input.keyConditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesRestoreTableFromBackup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get tableDescription(): DynamoDBResponsesRestoreTableFromBackupTableDescription {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.AttributeDefinitions'),
        outputPath: 'TableDescription.AttributeDefinitions',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.AttributeDefinitions', props);
    return resource.getResponseField('TableDescription.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.TableName'),
        outputPath: 'TableDescription.TableName',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.TableName', props);
    return resource.getResponseField('TableDescription.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.KeySchema'),
        outputPath: 'TableDescription.KeySchema',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.KeySchema', props);
    return resource.getResponseField('TableDescription.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.TableStatus'),
        outputPath: 'TableDescription.TableStatus',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.TableStatus', props);
    return resource.getResponseField('TableDescription.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.CreationDateTime'),
        outputPath: 'TableDescription.CreationDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.TableSizeBytes'),
        outputPath: 'TableDescription.TableSizeBytes',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.TableSizeBytes', props);
    return resource.getResponseField('TableDescription.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ItemCount'),
        outputPath: 'TableDescription.ItemCount',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ItemCount', props);
    return resource.getResponseField('TableDescription.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.TableArn'),
        outputPath: 'TableDescription.TableArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.TableArn', props);
    return resource.getResponseField('TableDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.TableId'),
        outputPath: 'TableDescription.TableId',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.LocalSecondaryIndexes'),
        outputPath: 'TableDescription.LocalSecondaryIndexes',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.LocalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.GlobalSecondaryIndexes'),
        outputPath: 'TableDescription.GlobalSecondaryIndexes',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.LatestStreamLabel'),
        outputPath: 'TableDescription.LatestStreamLabel',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.LatestStreamLabel', props);
    return resource.getResponseField('TableDescription.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.LatestStreamArn'),
        outputPath: 'TableDescription.LatestStreamArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.LatestStreamArn', props);
    return resource.getResponseField('TableDescription.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.GlobalTableVersion'),
        outputPath: 'TableDescription.GlobalTableVersion',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.GlobalTableVersion', props);
    return resource.getResponseField('TableDescription.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.Replicas'),
        outputPath: 'TableDescription.Replicas',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary {
    return new DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'TableDescription.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.BillingModeSummary.BillingMode'),
        outputPath: 'TableDescription.BillingModeSummary.BillingMode',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.StreamSpecification.StreamEnabled'),
        outputPath: 'TableDescription.StreamSpecification.StreamEnabled',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.StreamSpecification.StreamViewType'),
        outputPath: 'TableDescription.StreamSpecification.StreamViewType',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.RestoreSummary.SourceBackupArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceBackupArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.RestoreSummary.SourceTableArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceTableArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreDateTime'),
        outputPath: 'TableDescription.RestoreSummary.RestoreDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreInProgress'),
        outputPath: 'TableDescription.RestoreSummary.RestoreInProgress',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.SSEDescription.Status'),
        outputPath: 'TableDescription.SSEDescription.Status',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.SSEDescription.Status', props);
    return resource.getResponseField('TableDescription.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.SSEDescription.SSEType'),
        outputPath: 'TableDescription.SSEDescription.SSEType',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.SSEDescription.SSEType', props);
    return resource.getResponseField('TableDescription.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'TableDescription.SSEDescription.KMSMasterKeyArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('TableDescription.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'TableDescription.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableFromBackupInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalDateTime',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalReason'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalReason',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableFromBackup',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          TargetTableName: this.__input.targetTableName,
          BackupArn: this.__input.backupArn,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get tableDescription(): DynamoDBResponsesRestoreTableToPointInTimeTableDescription {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.AttributeDefinitions'),
        outputPath: 'TableDescription.AttributeDefinitions',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.AttributeDefinitions', props);
    return resource.getResponseField('TableDescription.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.TableName'),
        outputPath: 'TableDescription.TableName',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.TableName', props);
    return resource.getResponseField('TableDescription.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.KeySchema'),
        outputPath: 'TableDescription.KeySchema',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.KeySchema', props);
    return resource.getResponseField('TableDescription.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.TableStatus'),
        outputPath: 'TableDescription.TableStatus',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.TableStatus', props);
    return resource.getResponseField('TableDescription.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.CreationDateTime'),
        outputPath: 'TableDescription.CreationDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.TableSizeBytes'),
        outputPath: 'TableDescription.TableSizeBytes',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.TableSizeBytes', props);
    return resource.getResponseField('TableDescription.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ItemCount'),
        outputPath: 'TableDescription.ItemCount',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ItemCount', props);
    return resource.getResponseField('TableDescription.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.TableArn'),
        outputPath: 'TableDescription.TableArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.TableArn', props);
    return resource.getResponseField('TableDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.TableId'),
        outputPath: 'TableDescription.TableId',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.LocalSecondaryIndexes'),
        outputPath: 'TableDescription.LocalSecondaryIndexes',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.LocalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.GlobalSecondaryIndexes'),
        outputPath: 'TableDescription.GlobalSecondaryIndexes',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.LatestStreamLabel'),
        outputPath: 'TableDescription.LatestStreamLabel',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.LatestStreamLabel', props);
    return resource.getResponseField('TableDescription.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.LatestStreamArn'),
        outputPath: 'TableDescription.LatestStreamArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.LatestStreamArn', props);
    return resource.getResponseField('TableDescription.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.GlobalTableVersion'),
        outputPath: 'TableDescription.GlobalTableVersion',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.GlobalTableVersion', props);
    return resource.getResponseField('TableDescription.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.Replicas'),
        outputPath: 'TableDescription.Replicas',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary {
    return new DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'TableDescription.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.BillingModeSummary.BillingMode'),
        outputPath: 'TableDescription.BillingModeSummary.BillingMode',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamEnabled'),
        outputPath: 'TableDescription.StreamSpecification.StreamEnabled',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamViewType'),
        outputPath: 'TableDescription.StreamSpecification.StreamViewType',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceBackupArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceBackupArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceTableArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceTableArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreDateTime'),
        outputPath: 'TableDescription.RestoreSummary.RestoreDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreInProgress'),
        outputPath: 'TableDescription.RestoreSummary.RestoreInProgress',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.SSEDescription.Status'),
        outputPath: 'TableDescription.SSEDescription.Status',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.SSEDescription.Status', props);
    return resource.getResponseField('TableDescription.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.SSEDescription.SSEType'),
        outputPath: 'TableDescription.SSEDescription.SSEType',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.SSEDescription.SSEType', props);
    return resource.getResponseField('TableDescription.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'TableDescription.SSEDescription.KMSMasterKeyArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('TableDescription.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'TableDescription.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalDateTime',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalReason'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalReason',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreTableToPointInTime',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          SourceTableArn: this.__input.sourceTableArn,
          SourceTableName: this.__input.sourceTableName,
          TargetTableName: this.__input.targetTableName,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          RestoreDateTime: this.__input.restoreDateTime,
          BillingModeOverride: this.__input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.__input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.__input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.__input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.__input.sseSpecificationOverride?.enabled,
            SSEType: this.__input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.__input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesScan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbScanInput) {
  }

  public get items(): Record<string, shapes.DynamoDbAttributeValue>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.Items'),
        outputPath: 'Items',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.Items', props);
    return resource.getResponseField('Items') as unknown as Record<string, shapes.DynamoDbAttributeValue>[];
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.Count'),
        outputPath: 'Count',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.Count', props);
    return resource.getResponseField('Count') as unknown as number;
  }

  public get scannedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ScannedCount'),
        outputPath: 'ScannedCount',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ScannedCount', props);
    return resource.getResponseField('ScannedCount') as unknown as number;
  }

  public get lastEvaluatedKey(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.LastEvaluatedKey'),
        outputPath: 'LastEvaluatedKey',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.LastEvaluatedKey', props);
    return resource.getResponseField('LastEvaluatedKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesScanConsumedCapacity {
    return new DynamoDBResponsesScanConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesScanConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbScanInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesScanConsumedCapacityTable {
    return new DynamoDBResponsesScanConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesScanConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbScanInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scan',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.Scan.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          AttributesToGet: this.__input.attributesToGet,
          Limit: this.__input.limit,
          Select: this.__input.select,
          ScanFilter: this.__input.scanFilter,
          ConditionalOperator: this.__input.conditionalOperator,
          ExclusiveStartKey: this.__input.exclusiveStartKey,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          TotalSegments: this.__input.totalSegments,
          Segment: this.__input.segment,
          ProjectionExpression: this.__input.projectionExpression,
          FilterExpression: this.__input.filterExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
          ConsistentRead: this.__input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Scan.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesTransactGetItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbTransactGetItemsInput) {
  }

  public get consumedCapacity(): shapes.DynamoDbConsumedCapacity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transactGetItems',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.TransactGetItems.ConsumedCapacity'),
        outputPath: 'ConsumedCapacity',
        parameters: {
          TransactItems: this.__input.transactItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransactGetItems.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

  public get responses(): shapes.DynamoDbItemResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transactGetItems',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.TransactGetItems.Responses'),
        outputPath: 'Responses',
        parameters: {
          TransactItems: this.__input.transactItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransactGetItems.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbItemResponse[];
  }

}

export class DynamoDBResponsesTransactWriteItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbTransactWriteItemsInput) {
  }

  public get consumedCapacity(): shapes.DynamoDbConsumedCapacity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transactWriteItems',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.TransactWriteItems.ConsumedCapacity'),
        outputPath: 'ConsumedCapacity',
        parameters: {
          TransactItems: this.__input.transactItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransactWriteItems.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

  public get itemCollectionMetrics(): Record<string, shapes.DynamoDbItemCollectionMetrics[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transactWriteItems',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.TransactWriteItems.ItemCollectionMetrics'),
        outputPath: 'ItemCollectionMetrics',
        parameters: {
          TransactItems: this.__input.transactItems,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransactWriteItems.ItemCollectionMetrics', props);
    return resource.getResponseField('ItemCollectionMetrics') as unknown as Record<string, shapes.DynamoDbItemCollectionMetrics[]>;
  }

}

export class DynamoDBResponsesUpdateContinuousBackups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateContinuousBackupsInput) {
  }

  public get continuousBackupsDescription(): DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription {
    return new DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateContinuousBackupsInput) {
  }

  public get continuousBackupsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus'),
        outputPath: 'ContinuousBackupsDescription.ContinuousBackupsStatus',
        parameters: {
          TableName: this.__input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.__input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.ContinuousBackupsStatus') as unknown as string;
  }

  public get pointInTimeRecoveryDescription(): DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {
    return new DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateContinuousBackupsInput) {
  }

  public get pointInTimeRecoveryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus',
        parameters: {
          TableName: this.__input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.__input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus') as unknown as string;
  }

  public get earliestRestorableDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime',
        parameters: {
          TableName: this.__input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.__input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime') as unknown as string;
  }

  public get latestRestorableDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContinuousBackups',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime'),
        outputPath: 'ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime',
        parameters: {
          TableName: this.__input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.__input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateContributorInsights {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateContributorInsightsInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContributorInsights.TableName'),
        outputPath: 'TableName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          ContributorInsightsAction: this.__input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContributorInsights.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContributorInsights.IndexName'),
        outputPath: 'IndexName',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          ContributorInsightsAction: this.__input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContributorInsights.IndexName', props);
    return resource.getResponseField('IndexName') as unknown as string;
  }

  public get contributorInsightsStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContributorInsights',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateContributorInsights.ContributorInsightsStatus'),
        outputPath: 'ContributorInsightsStatus',
        parameters: {
          TableName: this.__input.tableName,
          IndexName: this.__input.indexName,
          ContributorInsightsAction: this.__input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContributorInsights.ContributorInsightsStatus', props);
    return resource.getResponseField('ContributorInsightsStatus') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateGlobalTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateGlobalTableInput) {
  }

  public get globalTableDescription(): DynamoDBResponsesUpdateGlobalTableGlobalTableDescription {
    return new DynamoDBResponsesUpdateGlobalTableGlobalTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateGlobalTableGlobalTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateGlobalTableInput) {
  }

  public get replicationGroup(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTable.GlobalTableDescription.ReplicationGroup'),
        outputPath: 'GlobalTableDescription.ReplicationGroup',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTable.GlobalTableDescription.ReplicationGroup', props);
    return resource.getResponseField('GlobalTableDescription.ReplicationGroup') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get globalTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTable.GlobalTableDescription.GlobalTableArn'),
        outputPath: 'GlobalTableDescription.GlobalTableArn',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableArn', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTable.GlobalTableDescription.CreationDateTime'),
        outputPath: 'GlobalTableDescription.CreationDateTime',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTable.GlobalTableDescription.CreationDateTime', props);
    return resource.getResponseField('GlobalTableDescription.CreationDateTime') as unknown as string;
  }

  public get globalTableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTable.GlobalTableDescription.GlobalTableStatus'),
        outputPath: 'GlobalTableDescription.GlobalTableStatus',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableStatus') as unknown as string;
  }

  public get globalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTable.GlobalTableDescription.GlobalTableName'),
        outputPath: 'GlobalTableDescription.GlobalTableName',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateGlobalTableSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateGlobalTableSettingsInput) {
  }

  public get globalTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTableSettings',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTableSettings.GlobalTableName'),
        outputPath: 'GlobalTableName',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          GlobalTableBillingMode: this.__input.globalTableBillingMode,
          GlobalTableProvisionedWriteCapacityUnits: this.__input.globalTableProvisionedWriteCapacityUnits,
          GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
            MinimumUnits: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.minimumUnits,
            MaximumUnits: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.maximumUnits,
            AutoScalingDisabled: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          GlobalTableGlobalSecondaryIndexSettingsUpdate: this.__input.globalTableGlobalSecondaryIndexSettingsUpdate,
          ReplicaSettingsUpdate: this.__input.replicaSettingsUpdate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTableSettings.GlobalTableName', props);
    return resource.getResponseField('GlobalTableName') as unknown as string;
  }

  public get replicaSettings(): shapes.DynamoDbReplicaSettingsDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalTableSettings',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateGlobalTableSettings.ReplicaSettings'),
        outputPath: 'ReplicaSettings',
        parameters: {
          GlobalTableName: this.__input.globalTableName,
          GlobalTableBillingMode: this.__input.globalTableBillingMode,
          GlobalTableProvisionedWriteCapacityUnits: this.__input.globalTableProvisionedWriteCapacityUnits,
          GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
            MinimumUnits: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.minimumUnits,
            MaximumUnits: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.maximumUnits,
            AutoScalingDisabled: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.__input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          GlobalTableGlobalSecondaryIndexSettingsUpdate: this.__input.globalTableGlobalSecondaryIndexSettingsUpdate,
          ReplicaSettingsUpdate: this.__input.replicaSettingsUpdate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalTableSettings.ReplicaSettings', props);
    return resource.getResponseField('ReplicaSettings') as unknown as shapes.DynamoDbReplicaSettingsDescription[];
  }

}

export class DynamoDBResponsesUpdateItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateItemInput) {
  }

  public get attributes(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBResponsesUpdateItemConsumedCapacity {
    return new DynamoDBResponsesUpdateItemConsumedCapacity(this.__scope, this.__resources, this.__input);
  }

  public get itemCollectionMetrics(): DynamoDBResponsesUpdateItemItemCollectionMetrics {
    return new DynamoDBResponsesUpdateItemItemCollectionMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateItemConsumedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateItemInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.TableName'),
        outputPath: 'ConsumedCapacity.TableName',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.TableName', props);
    return resource.getResponseField('ConsumedCapacity.TableName') as unknown as string;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.CapacityUnits'),
        outputPath: 'ConsumedCapacity.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.CapacityUnits') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBResponsesUpdateItemConsumedCapacityTable {
    return new DynamoDBResponsesUpdateItemConsumedCapacityTable(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.LocalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.LocalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.LocalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.LocalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

  public get globalSecondaryIndexes(): Record<string, shapes.DynamoDbCapacity> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.GlobalSecondaryIndexes'),
        outputPath: 'ConsumedCapacity.GlobalSecondaryIndexes',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBResponsesUpdateItemConsumedCapacityTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateItemInput) {
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.Table.ReadCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.ReadCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.Table.WriteCapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.WriteCapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.WriteCapacityUnits') as unknown as number;
  }

  public get capacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ConsumedCapacity.Table.CapacityUnits'),
        outputPath: 'ConsumedCapacity.Table.CapacityUnits',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesUpdateItemItemCollectionMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateItemInput) {
  }

  public get itemCollectionKey(): Record<string, shapes.DynamoDbAttributeValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ItemCollectionMetrics.ItemCollectionKey'),
        outputPath: 'ItemCollectionMetrics.ItemCollectionKey',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ItemCollectionMetrics.ItemCollectionKey', props);
    return resource.getResponseField('ItemCollectionMetrics.ItemCollectionKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get sizeEstimateRangeGb(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateItem',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateItem.ItemCollectionMetrics.SizeEstimateRangeGB'),
        outputPath: 'ItemCollectionMetrics.SizeEstimateRangeGB',
        parameters: {
          TableName: this.__input.tableName,
          Key: this.__input.key,
          AttributeUpdates: this.__input.attributeUpdates,
          Expected: this.__input.expected,
          ConditionalOperator: this.__input.conditionalOperator,
          ReturnValues: this.__input.returnValues,
          ReturnConsumedCapacity: this.__input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.__input.returnItemCollectionMetrics,
          UpdateExpression: this.__input.updateExpression,
          ConditionExpression: this.__input.conditionExpression,
          ExpressionAttributeNames: this.__input.expressionAttributeNames,
          ExpressionAttributeValues: this.__input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBResponsesUpdateTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get tableDescription(): DynamoDBResponsesUpdateTableTableDescription {
    return new DynamoDBResponsesUpdateTableTableDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateTableTableDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get attributeDefinitions(): shapes.DynamoDbAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.AttributeDefinitions'),
        outputPath: 'TableDescription.AttributeDefinitions',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.AttributeDefinitions', props);
    return resource.getResponseField('TableDescription.AttributeDefinitions') as unknown as shapes.DynamoDbAttributeDefinition[];
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.TableName'),
        outputPath: 'TableDescription.TableName',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.TableName', props);
    return resource.getResponseField('TableDescription.TableName') as unknown as string;
  }

  public get keySchema(): shapes.DynamoDbKeySchemaElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.KeySchema'),
        outputPath: 'TableDescription.KeySchema',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.KeySchema', props);
    return resource.getResponseField('TableDescription.KeySchema') as unknown as shapes.DynamoDbKeySchemaElement[];
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.TableStatus'),
        outputPath: 'TableDescription.TableStatus',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.TableStatus', props);
    return resource.getResponseField('TableDescription.TableStatus') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.CreationDateTime'),
        outputPath: 'TableDescription.CreationDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput {
    return new DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput(this.__scope, this.__resources, this.__input);
  }

  public get tableSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.TableSizeBytes'),
        outputPath: 'TableDescription.TableSizeBytes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.TableSizeBytes', props);
    return resource.getResponseField('TableDescription.TableSizeBytes') as unknown as number;
  }

  public get itemCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ItemCount'),
        outputPath: 'TableDescription.ItemCount',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ItemCount', props);
    return resource.getResponseField('TableDescription.ItemCount') as unknown as number;
  }

  public get tableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.TableArn'),
        outputPath: 'TableDescription.TableArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.TableArn', props);
    return resource.getResponseField('TableDescription.TableArn') as unknown as string;
  }

  public get tableId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.TableId'),
        outputPath: 'TableDescription.TableId',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary {
    return new DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary(this.__scope, this.__resources, this.__input);
  }

  public get localSecondaryIndexes(): shapes.DynamoDbLocalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.LocalSecondaryIndexes'),
        outputPath: 'TableDescription.LocalSecondaryIndexes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.LocalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.LocalSecondaryIndexes') as unknown as shapes.DynamoDbLocalSecondaryIndexDescription[];
  }

  public get globalSecondaryIndexes(): shapes.DynamoDbGlobalSecondaryIndexDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.GlobalSecondaryIndexes'),
        outputPath: 'TableDescription.GlobalSecondaryIndexes',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification {
    return new DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification(this.__scope, this.__resources, this.__input);
  }

  public get latestStreamLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.LatestStreamLabel'),
        outputPath: 'TableDescription.LatestStreamLabel',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.LatestStreamLabel', props);
    return resource.getResponseField('TableDescription.LatestStreamLabel') as unknown as string;
  }

  public get latestStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.LatestStreamArn'),
        outputPath: 'TableDescription.LatestStreamArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.LatestStreamArn', props);
    return resource.getResponseField('TableDescription.LatestStreamArn') as unknown as string;
  }

  public get globalTableVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.GlobalTableVersion'),
        outputPath: 'TableDescription.GlobalTableVersion',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.GlobalTableVersion', props);
    return resource.getResponseField('TableDescription.GlobalTableVersion') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.Replicas'),
        outputPath: 'TableDescription.Replicas',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary {
    return new DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DynamoDBResponsesUpdateTableTableDescriptionSseDescription {
    return new DynamoDBResponsesUpdateTableTableDescriptionSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get archivalSummary(): DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary {
    return new DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get lastIncreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastIncreaseDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastIncreaseDateTime') as unknown as string;
  }

  public get lastDecreaseDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime'),
        outputPath: 'TableDescription.ProvisionedThroughput.LastDecreaseDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.LastDecreaseDateTime') as unknown as string;
  }

  public get numberOfDecreasesToday(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday'),
        outputPath: 'TableDescription.ProvisionedThroughput.NumberOfDecreasesToday',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.NumberOfDecreasesToday') as unknown as number;
  }

  public get readCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.ReadCapacityUnits',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.ReadCapacityUnits') as unknown as number;
  }

  public get writeCapacityUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits'),
        outputPath: 'TableDescription.ProvisionedThroughput.WriteCapacityUnits',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get billingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.BillingModeSummary.BillingMode'),
        outputPath: 'TableDescription.BillingModeSummary.BillingMode',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.BillingModeSummary.BillingMode', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.BillingMode') as unknown as string;
  }

  public get lastUpdateToPayPerRequestDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime'),
        outputPath: 'TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get streamEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.StreamSpecification.StreamEnabled'),
        outputPath: 'TableDescription.StreamSpecification.StreamEnabled',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.StreamSpecification.StreamEnabled', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamEnabled') as unknown as boolean;
  }

  public get streamViewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.StreamSpecification.StreamViewType'),
        outputPath: 'TableDescription.StreamSpecification.StreamViewType',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get sourceBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.RestoreSummary.SourceBackupArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceBackupArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.RestoreSummary.SourceBackupArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceBackupArn') as unknown as string;
  }

  public get sourceTableArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.RestoreSummary.SourceTableArn'),
        outputPath: 'TableDescription.RestoreSummary.SourceTableArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.RestoreSummary.SourceTableArn', props);
    return resource.getResponseField('TableDescription.RestoreSummary.SourceTableArn') as unknown as string;
  }

  public get restoreDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.RestoreSummary.RestoreDateTime'),
        outputPath: 'TableDescription.RestoreSummary.RestoreDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.RestoreSummary.RestoreDateTime', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreDateTime') as unknown as string;
  }

  public get restoreInProgress(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.RestoreSummary.RestoreInProgress'),
        outputPath: 'TableDescription.RestoreSummary.RestoreInProgress',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.SSEDescription.Status'),
        outputPath: 'TableDescription.SSEDescription.Status',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.SSEDescription.Status', props);
    return resource.getResponseField('TableDescription.SSEDescription.Status') as unknown as string;
  }

  public get sseType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.SSEDescription.SSEType'),
        outputPath: 'TableDescription.SSEDescription.SSEType',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.SSEDescription.SSEType', props);
    return resource.getResponseField('TableDescription.SSEDescription.SSEType') as unknown as string;
  }

  public get kmsMasterKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.SSEDescription.KMSMasterKeyArn'),
        outputPath: 'TableDescription.SSEDescription.KMSMasterKeyArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
    return resource.getResponseField('TableDescription.SSEDescription.KMSMasterKeyArn') as unknown as string;
  }

  public get inaccessibleEncryptionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime'),
        outputPath: 'TableDescription.SSEDescription.InaccessibleEncryptionDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableInput) {
  }

  public get archivalDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ArchivalSummary.ArchivalDateTime'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalDateTime',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalDateTime') as unknown as string;
  }

  public get archivalReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ArchivalSummary.ArchivalReason'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalReason',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalReason', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalReason') as unknown as string;
  }

  public get archivalBackupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTable.TableDescription.ArchivalSummary.ArchivalBackupArn'),
        outputPath: 'TableDescription.ArchivalSummary.ArchivalBackupArn',
        parameters: {
          AttributeDefinitions: this.__input.attributeDefinitions,
          TableName: this.__input.tableName,
          BillingMode: this.__input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.__input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.__input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.__input.streamSpecification?.streamEnabled,
            StreamViewType: this.__input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
            SSEType: this.__input.sseSpecification?.sseType,
            KMSMasterKeyId: this.__input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBResponsesUpdateTableReplicaAutoScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput) {
  }

  public get tableAutoScalingDescription(): DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription {
    return new DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput) {
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableName'),
        outputPath: 'TableAutoScalingDescription.TableName',
        parameters: {
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          TableName: this.__input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableName', props);
    return resource.getResponseField('TableAutoScalingDescription.TableName') as unknown as string;
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus'),
        outputPath: 'TableAutoScalingDescription.TableStatus',
        parameters: {
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          TableName: this.__input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus', props);
    return resource.getResponseField('TableAutoScalingDescription.TableStatus') as unknown as string;
  }

  public get replicas(): shapes.DynamoDbReplicaAutoScalingDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTableReplicaAutoScaling',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTableReplicaAutoScaling.TableAutoScalingDescription.Replicas'),
        outputPath: 'TableAutoScalingDescription.Replicas',
        parameters: {
          GlobalSecondaryIndexUpdates: this.__input.globalSecondaryIndexUpdates,
          TableName: this.__input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.__input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.__input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.__input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.Replicas', props);
    return resource.getResponseField('TableAutoScalingDescription.Replicas') as unknown as shapes.DynamoDbReplicaAutoScalingDescription[];
  }

}

export class DynamoDBResponsesUpdateTimeToLive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTimeToLiveInput) {
  }

  public get timeToLiveSpecification(): DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification {
    return new DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification(this.__scope, this.__resources, this.__input);
  }

}

export class DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DynamoDbUpdateTimeToLiveInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTimeToLive',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTimeToLive.TimeToLiveSpecification.Enabled'),
        outputPath: 'TimeToLiveSpecification.Enabled',
        parameters: {
          TableName: this.__input.tableName,
          TimeToLiveSpecification: {
            Enabled: this.__input.timeToLiveSpecification.enabled,
            AttributeName: this.__input.timeToLiveSpecification.attributeName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTimeToLive.TimeToLiveSpecification.Enabled', props);
    return resource.getResponseField('TimeToLiveSpecification.Enabled') as unknown as boolean;
  }

  public get attributeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTimeToLive',
        service: 'DynamoDB',
        physicalResourceId: cr.PhysicalResourceId.of('DynamoDB.UpdateTimeToLive.TimeToLiveSpecification.AttributeName'),
        outputPath: 'TimeToLiveSpecification.AttributeName',
        parameters: {
          TableName: this.__input.tableName,
          TimeToLiveSpecification: {
            Enabled: this.__input.timeToLiveSpecification.enabled,
            AttributeName: this.__input.timeToLiveSpecification.attributeName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTimeToLive.TimeToLiveSpecification.AttributeName', props);
    return resource.getResponseField('TimeToLiveSpecification.AttributeName') as unknown as string;
  }

}

