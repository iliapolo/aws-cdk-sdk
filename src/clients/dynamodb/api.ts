import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DynamoDbClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchExecuteStatement(input: shapes.DynamoDbBatchExecuteStatementInput): DynamoDBBatchExecuteStatement {
    return new DynamoDBBatchExecuteStatement(this, 'BatchExecuteStatement', this.__resources, input);
  }

  public batchGetItem(input: shapes.DynamoDbBatchGetItemInput): DynamoDBBatchGetItem {
    return new DynamoDBBatchGetItem(this, 'BatchGetItem', this.__resources, input);
  }

  public batchWriteItem(input: shapes.DynamoDbBatchWriteItemInput): DynamoDBBatchWriteItem {
    return new DynamoDBBatchWriteItem(this, 'BatchWriteItem', this.__resources, input);
  }

  public createBackup(input: shapes.DynamoDbCreateBackupInput): DynamoDBCreateBackup {
    return new DynamoDBCreateBackup(this, 'CreateBackup', this.__resources, input);
  }

  public createGlobalTable(input: shapes.DynamoDbCreateGlobalTableInput): DynamoDBCreateGlobalTable {
    return new DynamoDBCreateGlobalTable(this, 'CreateGlobalTable', this.__resources, input);
  }

  public createTable(input: shapes.DynamoDbCreateTableInput): DynamoDBCreateTable {
    return new DynamoDBCreateTable(this, 'CreateTable', this.__resources, input);
  }

  public deleteBackup(input: shapes.DynamoDbDeleteBackupInput): DynamoDBDeleteBackup {
    return new DynamoDBDeleteBackup(this, 'DeleteBackup', this.__resources, input);
  }

  public deleteItem(input: shapes.DynamoDbDeleteItemInput): DynamoDBDeleteItem {
    return new DynamoDBDeleteItem(this, 'DeleteItem', this.__resources, input);
  }

  public deleteTable(input: shapes.DynamoDbDeleteTableInput): DynamoDBDeleteTable {
    return new DynamoDBDeleteTable(this, 'DeleteTable', this.__resources, input);
  }

  public describeBackup(input: shapes.DynamoDbDescribeBackupInput): DynamoDBDescribeBackup {
    return new DynamoDBDescribeBackup(this, 'DescribeBackup', this.__resources, input);
  }

  public describeContinuousBackups(input: shapes.DynamoDbDescribeContinuousBackupsInput): DynamoDBDescribeContinuousBackups {
    return new DynamoDBDescribeContinuousBackups(this, 'DescribeContinuousBackups', this.__resources, input);
  }

  public describeContributorInsights(input: shapes.DynamoDbDescribeContributorInsightsInput): DynamoDBDescribeContributorInsights {
    return new DynamoDBDescribeContributorInsights(this, 'DescribeContributorInsights', this.__resources, input);
  }

  public describeEndpoints(): DynamoDBDescribeEndpoints {
    return new DynamoDBDescribeEndpoints(this, 'DescribeEndpoints', this.__resources);
  }

  public describeExport(input: shapes.DynamoDbDescribeExportInput): DynamoDBDescribeExport {
    return new DynamoDBDescribeExport(this, 'DescribeExport', this.__resources, input);
  }

  public describeGlobalTable(input: shapes.DynamoDbDescribeGlobalTableInput): DynamoDBDescribeGlobalTable {
    return new DynamoDBDescribeGlobalTable(this, 'DescribeGlobalTable', this.__resources, input);
  }

  public describeGlobalTableSettings(input: shapes.DynamoDbDescribeGlobalTableSettingsInput): DynamoDBDescribeGlobalTableSettings {
    return new DynamoDBDescribeGlobalTableSettings(this, 'DescribeGlobalTableSettings', this.__resources, input);
  }

  public describeKinesisStreamingDestination(input: shapes.DynamoDbDescribeKinesisStreamingDestinationInput): DynamoDBDescribeKinesisStreamingDestination {
    return new DynamoDBDescribeKinesisStreamingDestination(this, 'DescribeKinesisStreamingDestination', this.__resources, input);
  }

  public describeLimits(): DynamoDBDescribeLimits {
    return new DynamoDBDescribeLimits(this, 'DescribeLimits', this.__resources);
  }

  public describeTable(input: shapes.DynamoDbDescribeTableInput): DynamoDBDescribeTable {
    return new DynamoDBDescribeTable(this, 'DescribeTable', this.__resources, input);
  }

  public describeTableReplicaAutoScaling(input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput): DynamoDBDescribeTableReplicaAutoScaling {
    return new DynamoDBDescribeTableReplicaAutoScaling(this, 'DescribeTableReplicaAutoScaling', this.__resources, input);
  }

  public describeTimeToLive(input: shapes.DynamoDbDescribeTimeToLiveInput): DynamoDBDescribeTimeToLive {
    return new DynamoDBDescribeTimeToLive(this, 'DescribeTimeToLive', this.__resources, input);
  }

  public disableKinesisStreamingDestination(input: shapes.DynamoDbKinesisStreamingDestinationInput): DynamoDBDisableKinesisStreamingDestination {
    return new DynamoDBDisableKinesisStreamingDestination(this, 'DisableKinesisStreamingDestination', this.__resources, input);
  }

  public enableKinesisStreamingDestination(input: shapes.DynamoDbKinesisStreamingDestinationInput): DynamoDBEnableKinesisStreamingDestination {
    return new DynamoDBEnableKinesisStreamingDestination(this, 'EnableKinesisStreamingDestination', this.__resources, input);
  }

  public executeStatement(input: shapes.DynamoDbExecuteStatementInput): DynamoDBExecuteStatement {
    return new DynamoDBExecuteStatement(this, 'ExecuteStatement', this.__resources, input);
  }

  public executeTransaction(input: shapes.DynamoDbExecuteTransactionInput): DynamoDBExecuteTransaction {
    return new DynamoDBExecuteTransaction(this, 'ExecuteTransaction', this.__resources, input);
  }

  public exportTableToPointInTime(input: shapes.DynamoDbExportTableToPointInTimeInput): DynamoDBExportTableToPointInTime {
    return new DynamoDBExportTableToPointInTime(this, 'ExportTableToPointInTime', this.__resources, input);
  }

  public fetchItem(input: shapes.DynamoDbGetItemInput): DynamoDBFetchItem {
    return new DynamoDBFetchItem(this, 'FetchItem', this.__resources, input);
  }

  public listBackups(input: shapes.DynamoDbListBackupsInput): DynamoDBListBackups {
    return new DynamoDBListBackups(this, 'ListBackups', this.__resources, input);
  }

  public listContributorInsights(input: shapes.DynamoDbListContributorInsightsInput): DynamoDBListContributorInsights {
    return new DynamoDBListContributorInsights(this, 'ListContributorInsights', this.__resources, input);
  }

  public listExports(input: shapes.DynamoDbListExportsInput): DynamoDBListExports {
    return new DynamoDBListExports(this, 'ListExports', this.__resources, input);
  }

  public listGlobalTables(input: shapes.DynamoDbListGlobalTablesInput): DynamoDBListGlobalTables {
    return new DynamoDBListGlobalTables(this, 'ListGlobalTables', this.__resources, input);
  }

  public listTables(input: shapes.DynamoDbListTablesInput): DynamoDBListTables {
    return new DynamoDBListTables(this, 'ListTables', this.__resources, input);
  }

  public listTagsOfResource(input: shapes.DynamoDbListTagsOfResourceInput): DynamoDBListTagsOfResource {
    return new DynamoDBListTagsOfResource(this, 'ListTagsOfResource', this.__resources, input);
  }

  public putItem(input: shapes.DynamoDbPutItemInput): DynamoDBPutItem {
    return new DynamoDBPutItem(this, 'PutItem', this.__resources, input);
  }

  public query(input: shapes.DynamoDbQueryInput): DynamoDBQuery {
    return new DynamoDBQuery(this, 'Query', this.__resources, input);
  }

  public restoreTableFromBackup(input: shapes.DynamoDbRestoreTableFromBackupInput): DynamoDBRestoreTableFromBackup {
    return new DynamoDBRestoreTableFromBackup(this, 'RestoreTableFromBackup', this.__resources, input);
  }

  public restoreTableToPointInTime(input: shapes.DynamoDbRestoreTableToPointInTimeInput): DynamoDBRestoreTableToPointInTime {
    return new DynamoDBRestoreTableToPointInTime(this, 'RestoreTableToPointInTime', this.__resources, input);
  }

  public scan(input: shapes.DynamoDbScanInput): DynamoDBScan {
    return new DynamoDBScan(this, 'Scan', this.__resources, input);
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

  public transactGetItems(input: shapes.DynamoDbTransactGetItemsInput): DynamoDBTransactGetItems {
    return new DynamoDBTransactGetItems(this, 'TransactGetItems', this.__resources, input);
  }

  public transactWriteItems(input: shapes.DynamoDbTransactWriteItemsInput): DynamoDBTransactWriteItems {
    return new DynamoDBTransactWriteItems(this, 'TransactWriteItems', this.__resources, input);
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

  public updateContinuousBackups(input: shapes.DynamoDbUpdateContinuousBackupsInput): DynamoDBUpdateContinuousBackups {
    return new DynamoDBUpdateContinuousBackups(this, 'UpdateContinuousBackups', this.__resources, input);
  }

  public updateContributorInsights(input: shapes.DynamoDbUpdateContributorInsightsInput): DynamoDBUpdateContributorInsights {
    return new DynamoDBUpdateContributorInsights(this, 'UpdateContributorInsights', this.__resources, input);
  }

  public updateGlobalTable(input: shapes.DynamoDbUpdateGlobalTableInput): DynamoDBUpdateGlobalTable {
    return new DynamoDBUpdateGlobalTable(this, 'UpdateGlobalTable', this.__resources, input);
  }

  public updateGlobalTableSettings(input: shapes.DynamoDbUpdateGlobalTableSettingsInput): DynamoDBUpdateGlobalTableSettings {
    return new DynamoDBUpdateGlobalTableSettings(this, 'UpdateGlobalTableSettings', this.__resources, input);
  }

  public updateItem(input: shapes.DynamoDbUpdateItemInput): DynamoDBUpdateItem {
    return new DynamoDBUpdateItem(this, 'UpdateItem', this.__resources, input);
  }

  public updateTable(input: shapes.DynamoDbUpdateTableInput): DynamoDBUpdateTable {
    return new DynamoDBUpdateTable(this, 'UpdateTable', this.__resources, input);
  }

  public updateTableReplicaAutoScaling(input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput): DynamoDBUpdateTableReplicaAutoScaling {
    return new DynamoDBUpdateTableReplicaAutoScaling(this, 'UpdateTableReplicaAutoScaling', this.__resources, input);
  }

  public updateTimeToLive(input: shapes.DynamoDbUpdateTimeToLiveInput): DynamoDBUpdateTimeToLive {
    return new DynamoDBUpdateTimeToLive(this, 'UpdateTimeToLive', this.__resources, input);
  }

}

export class DynamoDBBatchExecuteStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbBatchExecuteStatementInput) {
    super(scope, id);
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
          Statements: this.input.statements,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchExecuteStatement.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbBatchStatementResponse[];
  }

}

export class DynamoDBBatchGetItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbBatchGetItemInput) {
    super(scope, id);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetItem.Responses', props);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetItem.UnprocessedKeys', props);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetItem.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

}

export class DynamoDBBatchWriteItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbBatchWriteItemInput) {
    super(scope, id);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchWriteItem.UnprocessedItems', props);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchWriteItem.ItemCollectionMetrics', props);
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
          RequestItems: this.input.requestItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchWriteItem.ConsumedCapacity', props);
    return resource.getResponseField('ConsumedCapacity') as unknown as shapes.DynamoDbConsumedCapacity[];
  }

}

export class DynamoDBCreateBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateBackupInput) {
    super(scope, id);
  }

  public get backupDetails(): DynamoDBCreateBackupBackupDetails {
    return new DynamoDBCreateBackupBackupDetails(this, 'BackupDetails', this.__resources, this.input);
  }

}

export class DynamoDBCreateBackupBackupDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateBackupInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupArn', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupName', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupSizeBytes', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupStatus', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupType', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupCreationDateTime', props);
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
          TableName: this.input.tableName,
          BackupName: this.input.backupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackup.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBCreateGlobalTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateGlobalTableInput) {
    super(scope, id);
  }

  public get globalTableDescription(): DynamoDBCreateGlobalTableGlobalTableDescription {
    return new DynamoDBCreateGlobalTableGlobalTableDescription(this, 'GlobalTableDescription', this.__resources, this.input);
  }

}

export class DynamoDBCreateGlobalTableGlobalTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateGlobalTableInput) {
    super(scope, id);
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
          GlobalTableName: this.input.globalTableName,
          ReplicationGroup: this.input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalTable.GlobalTableDescription.ReplicationGroup', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicationGroup: this.input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalTable.GlobalTableDescription.GlobalTableArn', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicationGroup: this.input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalTable.GlobalTableDescription.CreationDateTime', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicationGroup: this.input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicationGroup: this.input.replicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBCreateTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
  }

  public get tableDescription(): DynamoDBCreateTableTableDescription {
    return new DynamoDBCreateTableTableDescription(this, 'TableDescription', this.__resources, this.input);
  }

}

export class DynamoDBCreateTableTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.AttributeDefinitions', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.TableName', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.KeySchema', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.TableStatus', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBCreateTableTableDescriptionProvisionedThroughput {
    return new DynamoDBCreateTableTableDescriptionProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.TableSizeBytes', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ItemCount', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.TableArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBCreateTableTableDescriptionBillingModeSummary {
    return new DynamoDBCreateTableTableDescriptionBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.LocalSecondaryIndexes', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBCreateTableTableDescriptionStreamSpecification {
    return new DynamoDBCreateTableTableDescriptionStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.LatestStreamLabel', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.LatestStreamArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.GlobalTableVersion', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBCreateTableTableDescriptionRestoreSummary {
    return new DynamoDBCreateTableTableDescriptionRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBCreateTableTableDescriptionSseDescription {
    return new DynamoDBCreateTableTableDescriptionSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBCreateTableTableDescriptionArchivalSummary {
    return new DynamoDBCreateTableTableDescriptionArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBCreateTableTableDescriptionProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBCreateTableTableDescriptionBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.BillingModeSummary.BillingMode', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBCreateTableTableDescriptionStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.StreamSpecification.StreamEnabled', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBCreateTableTableDescriptionRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.RestoreSummary.SourceBackupArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.RestoreSummary.SourceTableArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.RestoreSummary.RestoreDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBCreateTableTableDescriptionSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.SSEDescription.Status', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.SSEDescription.SSEType', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBCreateTableTableDescriptionArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbCreateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ArchivalSummary.ArchivalReason', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          KeySchema: this.input.keySchema,
          LocalSecondaryIndexes: this.input.localSecondaryIndexes,
          GlobalSecondaryIndexes: this.input.globalSecondaryIndexes,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBDeleteBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
  }

  public get backupDescription(): DynamoDBDeleteBackupBackupDescription {
    return new DynamoDBDeleteBackupBackupDescription(this, 'BackupDescription', this.__resources, this.input);
  }

}

export class DynamoDBDeleteBackupBackupDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
  }

  public get backupDetails(): DynamoDBDeleteBackupBackupDescriptionBackupDetails {
    return new DynamoDBDeleteBackupBackupDescriptionBackupDetails(this, 'BackupDetails', this.__resources, this.input);
  }

  public get sourceTableDetails(): DynamoDBDeleteBackupBackupDescriptionSourceTableDetails {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableDetails(this, 'SourceTableDetails', this.__resources, this.input);
  }

  public get sourceTableFeatureDetails(): DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetails {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetails(this, 'SourceTableFeatureDetails', this.__resources, this.input);
  }

}

export class DynamoDBDeleteBackupBackupDescriptionBackupDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupName', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupSizeBytes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupStatus', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupType', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupCreationDateTime', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.TableName', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.TableId', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.TableArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.TableSizeBytes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.KeySchema', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.TableCreationDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableCreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.ItemCount', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.BillingMode', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.BillingMode') as unknown as string;
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexInfo[];
  }

  public get streamDescription(): DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(this, 'StreamDescription', this.__resources, this.input);
  }

  public get timeToLiveDescription(): DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(this, 'TimeToLiveDescription', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {
    return new DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType') as unknown as string;
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBDeleteItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBDeleteItemConsumedCapacity {
    return new DynamoDBDeleteItemConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

  public get itemCollectionMetrics(): DynamoDBDeleteItemItemCollectionMetrics {
    return new DynamoDBDeleteItemItemCollectionMetrics(this, 'ItemCollectionMetrics', this.__resources, this.input);
  }

}

export class DynamoDBDeleteItemConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBDeleteItemConsumedCapacityTable {
    return new DynamoDBDeleteItemConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBDeleteItemConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBDeleteItemItemCollectionMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ItemCollectionMetrics.ItemCollectionKey', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBDeleteTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
  }

  public get tableDescription(): DynamoDBDeleteTableTableDescription {
    return new DynamoDBDeleteTableTableDescription(this, 'TableDescription', this.__resources, this.input);
  }

}

export class DynamoDBDeleteTableTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.AttributeDefinitions', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.TableName', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.KeySchema', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.TableStatus', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBDeleteTableTableDescriptionProvisionedThroughput {
    return new DynamoDBDeleteTableTableDescriptionProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.TableSizeBytes', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ItemCount', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.TableArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBDeleteTableTableDescriptionBillingModeSummary {
    return new DynamoDBDeleteTableTableDescriptionBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBDeleteTableTableDescriptionStreamSpecification {
    return new DynamoDBDeleteTableTableDescriptionStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.LatestStreamLabel', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.LatestStreamArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.GlobalTableVersion', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBDeleteTableTableDescriptionRestoreSummary {
    return new DynamoDBDeleteTableTableDescriptionRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBDeleteTableTableDescriptionSseDescription {
    return new DynamoDBDeleteTableTableDescriptionSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBDeleteTableTableDescriptionArchivalSummary {
    return new DynamoDBDeleteTableTableDescriptionArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBDeleteTableTableDescriptionProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBDeleteTableTableDescriptionBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.BillingModeSummary.BillingMode', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBDeleteTableTableDescriptionStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.StreamSpecification.StreamEnabled', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBDeleteTableTableDescriptionRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.RestoreSummary.SourceBackupArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.RestoreSummary.SourceTableArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.RestoreSummary.RestoreDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBDeleteTableTableDescriptionSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.SSEDescription.Status', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.SSEDescription.SSEType', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBDeleteTableTableDescriptionArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDeleteTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalReason', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBDescribeBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
  }

  public get backupDescription(): DynamoDBDescribeBackupBackupDescription {
    return new DynamoDBDescribeBackupBackupDescription(this, 'BackupDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeBackupBackupDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
  }

  public get backupDetails(): DynamoDBDescribeBackupBackupDescriptionBackupDetails {
    return new DynamoDBDescribeBackupBackupDescriptionBackupDetails(this, 'BackupDetails', this.__resources, this.input);
  }

  public get sourceTableDetails(): DynamoDBDescribeBackupBackupDescriptionSourceTableDetails {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableDetails(this, 'SourceTableDetails', this.__resources, this.input);
  }

  public get sourceTableFeatureDetails(): DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetails {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetails(this, 'SourceTableFeatureDetails', this.__resources, this.input);
  }

}

export class DynamoDBDescribeBackupBackupDescriptionBackupDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupName', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupSizeBytes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupStatus', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupType', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupCreationDateTime', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.BackupDetails.BackupExpiryDateTime', props);
    return resource.getResponseField('BackupDescription.BackupDetails.BackupExpiryDateTime') as unknown as string;
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.TableName', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.TableId', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.TableArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.TableSizeBytes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.KeySchema', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.TableCreationDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.TableCreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.ItemCount', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.BillingMode', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.BillingMode') as unknown as string;
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.ReadCapacityUnits', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('BackupDescription.SourceTableDetails.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.LocalSecondaryIndexes', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexInfo[];
  }

  public get streamDescription(): DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(this, 'StreamDescription', this.__resources, this.input);
  }

  public get timeToLiveDescription(): DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(this, 'TimeToLiveDescription', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription {
    return new DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamEnabled', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.StreamDescription.StreamViewType') as unknown as string;
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.TimeToLiveStatus', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeBackupInput) {
    super(scope, id);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.Status', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.SSEType', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.KMSMasterKeyArn', props);
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
          BackupArn: this.input.backupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackup.BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('BackupDescription.SourceTableFeatureDetails.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBDescribeContinuousBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeContinuousBackupsInput) {
    super(scope, id);
  }

  public get continuousBackupsDescription(): DynamoDBDescribeContinuousBackupsContinuousBackupsDescription {
    return new DynamoDBDescribeContinuousBackupsContinuousBackupsDescription(this, 'ContinuousBackupsDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeContinuousBackupsContinuousBackupsDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeContinuousBackupsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.ContinuousBackupsStatus') as unknown as string;
  }

  public get pointInTimeRecoveryDescription(): DynamoDBDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {
    return new DynamoDBDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(this, 'PointInTimeRecoveryDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeContinuousBackupsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime') as unknown as string;
  }

}

export class DynamoDBDescribeContributorInsights extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeContributorInsightsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.TableName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.IndexName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.ContributorInsightsRuleList', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.ContributorInsightsStatus', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.LastUpdateDateTime', props);
    return resource.getResponseField('LastUpdateDateTime') as unknown as string;
  }

  public get failureException(): DynamoDBDescribeContributorInsightsFailureException {
    return new DynamoDBDescribeContributorInsightsFailureException(this, 'FailureException', this.__resources, this.input);
  }

}

export class DynamoDBDescribeContributorInsightsFailureException extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeContributorInsightsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.FailureException.ExceptionName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContributorInsights.FailureException.ExceptionDescription', props);
    return resource.getResponseField('FailureException.ExceptionDescription') as unknown as string;
  }

}

export class DynamoDBDescribeEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.DynamoDbEndpoint[];
  }

}

export class DynamoDBDescribeExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeExportInput) {
    super(scope, id);
  }

  public get exportDescription(): DynamoDBDescribeExportExportDescription {
    return new DynamoDBDescribeExportExportDescription(this, 'ExportDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeExportExportDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeExportInput) {
    super(scope, id);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ExportArn', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ExportStatus', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.StartTime', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.EndTime', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ExportManifest', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.TableArn', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.TableId', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ExportTime', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ClientToken', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.S3Bucket', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.S3BucketOwner', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.S3Prefix', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.S3SseAlgorithm', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.S3SseKmsKeyId', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.FailureCode', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.FailureMessage', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ExportFormat', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.BilledSizeBytes', props);
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
          ExportArn: this.input.exportArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExport.ExportDescription.ItemCount', props);
    return resource.getResponseField('ExportDescription.ItemCount') as unknown as number;
  }

}

export class DynamoDBDescribeGlobalTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeGlobalTableInput) {
    super(scope, id);
  }

  public get globalTableDescription(): DynamoDBDescribeGlobalTableGlobalTableDescription {
    return new DynamoDBDescribeGlobalTableGlobalTableDescription(this, 'GlobalTableDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeGlobalTableGlobalTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeGlobalTableInput) {
    super(scope, id);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTable.GlobalTableDescription.ReplicationGroup', props);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableArn', props);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTable.GlobalTableDescription.CreationDateTime', props);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBDescribeGlobalTableSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeGlobalTableSettingsInput) {
    super(scope, id);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTableSettings.GlobalTableName', props);
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
          GlobalTableName: this.input.globalTableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalTableSettings.ReplicaSettings', props);
    return resource.getResponseField('ReplicaSettings') as unknown as shapes.DynamoDbReplicaSettingsDescription[];
  }

}

export class DynamoDBDescribeKinesisStreamingDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeKinesisStreamingDestinationInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKinesisStreamingDestination.TableName', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKinesisStreamingDestination.KinesisDataStreamDestinations', props);
    return resource.getResponseField('KinesisDataStreamDestinations') as unknown as shapes.DynamoDbKinesisDataStreamDestination[];
  }

}

export class DynamoDBDescribeLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.AccountMaxReadCapacityUnits', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.AccountMaxWriteCapacityUnits', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.TableMaxReadCapacityUnits', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLimits.TableMaxWriteCapacityUnits', props);
    return resource.getResponseField('TableMaxWriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBDescribeTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
  }

  public get table(): DynamoDBDescribeTableTable {
    return new DynamoDBDescribeTableTable(this, 'Table', this.__resources, this.input);
  }

}

export class DynamoDBDescribeTableTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.AttributeDefinitions', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableName', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.KeySchema', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableStatus', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.CreationDateTime', props);
    return resource.getResponseField('Table.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBDescribeTableTableProvisionedThroughput {
    return new DynamoDBDescribeTableTableProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableSizeBytes', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ItemCount', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableId', props);
    return resource.getResponseField('Table.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBDescribeTableTableBillingModeSummary {
    return new DynamoDBDescribeTableTableBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.GlobalSecondaryIndexes', props);
    return resource.getResponseField('Table.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBDescribeTableTableStreamSpecification {
    return new DynamoDBDescribeTableTableStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.LatestStreamLabel', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.LatestStreamArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.GlobalTableVersion', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.Replicas', props);
    return resource.getResponseField('Table.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBDescribeTableTableRestoreSummary {
    return new DynamoDBDescribeTableTableRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBDescribeTableTableSseDescription {
    return new DynamoDBDescribeTableTableSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBDescribeTableTableArchivalSummary {
    return new DynamoDBDescribeTableTableArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBDescribeTableTableProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ProvisionedThroughput.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('Table.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBDescribeTableTableBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.BillingModeSummary.BillingMode', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('Table.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBDescribeTableTableStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.StreamSpecification.StreamEnabled', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('Table.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBDescribeTableTableRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RestoreSummary.SourceBackupArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RestoreSummary.SourceTableArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RestoreSummary.RestoreDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('Table.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBDescribeTableTableSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.SSEDescription.Status', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.SSEDescription.SSEType', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.SSEDescription.KMSMasterKeyArn', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('Table.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBDescribeTableTableArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ArchivalSummary.ArchivalDateTime', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ArchivalSummary.ArchivalReason', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('Table.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBDescribeTableReplicaAutoScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput) {
    super(scope, id);
  }

  public get tableAutoScalingDescription(): DynamoDBDescribeTableReplicaAutoScalingTableAutoScalingDescription {
    return new DynamoDBDescribeTableReplicaAutoScalingTableAutoScalingDescription(this, 'TableAutoScalingDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeTableReplicaAutoScalingTableAutoScalingDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTableReplicaAutoScalingInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableName', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTableReplicaAutoScaling.TableAutoScalingDescription.Replicas', props);
    return resource.getResponseField('TableAutoScalingDescription.Replicas') as unknown as shapes.DynamoDbReplicaAutoScalingDescription[];
  }

}

export class DynamoDBDescribeTimeToLive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTimeToLiveInput) {
    super(scope, id);
  }

  public get timeToLiveDescription(): DynamoDBDescribeTimeToLiveTimeToLiveDescription {
    return new DynamoDBDescribeTimeToLiveTimeToLiveDescription(this, 'TimeToLiveDescription', this.__resources, this.input);
  }

}

export class DynamoDBDescribeTimeToLiveTimeToLiveDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbDescribeTimeToLiveInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTimeToLive.TimeToLiveDescription.TimeToLiveStatus', props);
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
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTimeToLive.TimeToLiveDescription.AttributeName', props);
    return resource.getResponseField('TimeToLiveDescription.AttributeName') as unknown as string;
  }

}

export class DynamoDBDisableKinesisStreamingDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbKinesisStreamingDestinationInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableKinesisStreamingDestination.TableName', props);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableKinesisStreamingDestination.StreamArn', props);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableKinesisStreamingDestination.DestinationStatus', props);
    return resource.getResponseField('DestinationStatus') as unknown as string;
  }

}

export class DynamoDBEnableKinesisStreamingDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbKinesisStreamingDestinationInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableKinesisStreamingDestination.TableName', props);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableKinesisStreamingDestination.StreamArn', props);
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
          TableName: this.input.tableName,
          StreamArn: this.input.streamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableKinesisStreamingDestination.DestinationStatus', props);
    return resource.getResponseField('DestinationStatus') as unknown as string;
  }

}

export class DynamoDBExecuteStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbExecuteStatementInput) {
    super(scope, id);
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
          Statement: this.input.statement,
          Parameters: this.input.parameters,
          ConsistentRead: this.input.consistentRead,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.Items', props);
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
          Statement: this.input.statement,
          Parameters: this.input.parameters,
          ConsistentRead: this.input.consistentRead,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBExecuteTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbExecuteTransactionInput) {
    super(scope, id);
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
          TransactStatements: this.input.transactStatements,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteTransaction.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbItemResponse[];
  }

}

export class DynamoDBExportTableToPointInTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbExportTableToPointInTimeInput) {
    super(scope, id);
  }

  public get exportDescription(): DynamoDBExportTableToPointInTimeExportDescription {
    return new DynamoDBExportTableToPointInTimeExportDescription(this, 'ExportDescription', this.__resources, this.input);
  }

}

export class DynamoDBExportTableToPointInTimeExportDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbExportTableToPointInTimeInput) {
    super(scope, id);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ExportArn', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ExportStatus', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.StartTime', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.EndTime', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ExportManifest', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.TableArn', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.TableId', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ExportTime', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ClientToken', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.S3Bucket', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.S3BucketOwner', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.S3Prefix', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.S3SseAlgorithm', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.S3SseKmsKeyId', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.FailureCode', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.FailureMessage', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ExportFormat', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.BilledSizeBytes', props);
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
          TableArn: this.input.tableArn,
          ExportTime: this.input.exportTime,
          ClientToken: this.input.clientToken,
          S3Bucket: this.input.s3Bucket,
          S3BucketOwner: this.input.s3BucketOwner,
          S3Prefix: this.input.s3Prefix,
          S3SseAlgorithm: this.input.s3SseAlgorithm,
          S3SseKmsKeyId: this.input.s3SseKmsKeyId,
          ExportFormat: this.input.exportFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportTableToPointInTime.ExportDescription.ItemCount', props);
    return resource.getResponseField('ExportDescription.ItemCount') as unknown as number;
  }

}

export class DynamoDBFetchItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbGetItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.Item', props);
    return resource.getResponseField('Item') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBFetchItemConsumedCapacity {
    return new DynamoDBFetchItemConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

}

export class DynamoDBFetchItemConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbGetItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBFetchItemConsumedCapacityTable {
    return new DynamoDBFetchItemConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBFetchItemConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbGetItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributesToGet: this.input.attributesToGet,
          ConsistentRead: this.input.consistentRead,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBListBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListBackupsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Limit: this.input.limit,
          TimeRangeLowerBound: this.input.timeRangeLowerBound,
          TimeRangeUpperBound: this.input.timeRangeUpperBound,
          ExclusiveStartBackupArn: this.input.exclusiveStartBackupArn,
          BackupType: this.input.backupType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackups.BackupSummaries', props);
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
          TableName: this.input.tableName,
          Limit: this.input.limit,
          TimeRangeLowerBound: this.input.timeRangeLowerBound,
          TimeRangeUpperBound: this.input.timeRangeUpperBound,
          ExclusiveStartBackupArn: this.input.exclusiveStartBackupArn,
          BackupType: this.input.backupType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackups.LastEvaluatedBackupArn', props);
    return resource.getResponseField('LastEvaluatedBackupArn') as unknown as string;
  }

}

export class DynamoDBListContributorInsights extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListContributorInsightsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContributorInsights.ContributorInsightsSummaries', props);
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
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContributorInsights.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBListExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListExportsInput) {
    super(scope, id);
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
          TableArn: this.input.tableArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExports.ExportSummaries', props);
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
          TableArn: this.input.tableArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBListGlobalTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListGlobalTablesInput) {
    super(scope, id);
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
          ExclusiveStartGlobalTableName: this.input.exclusiveStartGlobalTableName,
          Limit: this.input.limit,
          RegionName: this.input.regionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGlobalTables.GlobalTables', props);
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
          ExclusiveStartGlobalTableName: this.input.exclusiveStartGlobalTableName,
          Limit: this.input.limit,
          RegionName: this.input.regionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGlobalTables.LastEvaluatedGlobalTableName', props);
    return resource.getResponseField('LastEvaluatedGlobalTableName') as unknown as string;
  }

}

export class DynamoDBListTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListTablesInput) {
    super(scope, id);
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
          ExclusiveStartTableName: this.input.exclusiveStartTableName,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.TableNames', props);
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
          ExclusiveStartTableName: this.input.exclusiveStartTableName,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.LastEvaluatedTableName', props);
    return resource.getResponseField('LastEvaluatedTableName') as unknown as string;
  }

}

export class DynamoDBListTagsOfResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbListTagsOfResourceInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsOfResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsOfResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DynamoDBPutItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbPutItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBPutItemConsumedCapacity {
    return new DynamoDBPutItemConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

  public get itemCollectionMetrics(): DynamoDBPutItemItemCollectionMetrics {
    return new DynamoDBPutItemItemCollectionMetrics(this, 'ItemCollectionMetrics', this.__resources, this.input);
  }

}

export class DynamoDBPutItemConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbPutItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBPutItemConsumedCapacityTable {
    return new DynamoDBPutItemConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBPutItemConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbPutItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBPutItemItemCollectionMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbPutItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ItemCollectionMetrics.ItemCollectionKey', props);
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
          TableName: this.input.tableName,
          Item: this.input.item,
          Expected: this.input.expected,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ConditionalOperator: this.input.conditionalOperator,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbQueryInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.Items', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.Count', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ScannedCount', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.LastEvaluatedKey', props);
    return resource.getResponseField('LastEvaluatedKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBQueryConsumedCapacity {
    return new DynamoDBQueryConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

}

export class DynamoDBQueryConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbQueryInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBQueryConsumedCapacityTable {
    return new DynamoDBQueryConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBQueryConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbQueryInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          Select: this.input.select,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          ConsistentRead: this.input.consistentRead,
          KeyConditions: this.input.keyConditions,
          QueryFilter: this.input.queryFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ScanIndexForward: this.input.scanIndexForward,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          KeyConditionExpression: this.input.keyConditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Query.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBRestoreTableFromBackup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
  }

  public get tableDescription(): DynamoDBRestoreTableFromBackupTableDescription {
    return new DynamoDBRestoreTableFromBackupTableDescription(this, 'TableDescription', this.__resources, this.input);
  }

}

export class DynamoDBRestoreTableFromBackupTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.AttributeDefinitions', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.TableName', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.KeySchema', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.TableStatus', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBRestoreTableFromBackupTableDescriptionProvisionedThroughput {
    return new DynamoDBRestoreTableFromBackupTableDescriptionProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.TableSizeBytes', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ItemCount', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.TableArn', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBRestoreTableFromBackupTableDescriptionBillingModeSummary {
    return new DynamoDBRestoreTableFromBackupTableDescriptionBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.LocalSecondaryIndexes', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBRestoreTableFromBackupTableDescriptionStreamSpecification {
    return new DynamoDBRestoreTableFromBackupTableDescriptionStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.LatestStreamLabel', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.LatestStreamArn', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.GlobalTableVersion', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBRestoreTableFromBackupTableDescriptionRestoreSummary {
    return new DynamoDBRestoreTableFromBackupTableDescriptionRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBRestoreTableFromBackupTableDescriptionSseDescription {
    return new DynamoDBRestoreTableFromBackupTableDescriptionSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBRestoreTableFromBackupTableDescriptionArchivalSummary {
    return new DynamoDBRestoreTableFromBackupTableDescriptionArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.BillingModeSummary.BillingMode', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.StreamSpecification.StreamEnabled', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.RestoreSummary.SourceBackupArn', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.RestoreSummary.SourceTableArn', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreDateTime', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.SSEDescription.Status', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.SSEDescription.SSEType', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.SSEDescription.KMSMasterKeyArn', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBRestoreTableFromBackupTableDescriptionArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableFromBackupInput) {
    super(scope, id);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalDateTime', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalReason', props);
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
          TargetTableName: this.input.targetTableName,
          BackupArn: this.input.backupArn,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableFromBackup.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBRestoreTableToPointInTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
  }

  public get tableDescription(): DynamoDBRestoreTableToPointInTimeTableDescription {
    return new DynamoDBRestoreTableToPointInTimeTableDescription(this, 'TableDescription', this.__resources, this.input);
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.AttributeDefinitions', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.TableName', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.KeySchema', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.TableStatus', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBRestoreTableToPointInTimeTableDescriptionProvisionedThroughput {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.TableSizeBytes', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ItemCount', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.TableArn', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBRestoreTableToPointInTimeTableDescriptionBillingModeSummary {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.LocalSecondaryIndexes', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBRestoreTableToPointInTimeTableDescriptionStreamSpecification {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.LatestStreamLabel', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.LatestStreamArn', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.GlobalTableVersion', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBRestoreTableToPointInTimeTableDescriptionRestoreSummary {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBRestoreTableToPointInTimeTableDescriptionSseDescription {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBRestoreTableToPointInTimeTableDescriptionArchivalSummary {
    return new DynamoDBRestoreTableToPointInTimeTableDescriptionArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.BillingModeSummary.BillingMode', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamEnabled', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceBackupArn', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.SourceTableArn', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreDateTime', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.SSEDescription.Status', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.SSEDescription.SSEType', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.SSEDescription.KMSMasterKeyArn', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBRestoreTableToPointInTimeTableDescriptionArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbRestoreTableToPointInTimeInput) {
    super(scope, id);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalDateTime', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalReason', props);
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
          SourceTableArn: this.input.sourceTableArn,
          SourceTableName: this.input.sourceTableName,
          TargetTableName: this.input.targetTableName,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          RestoreDateTime: this.input.restoreDateTime,
          BillingModeOverride: this.input.billingModeOverride,
          GlobalSecondaryIndexOverride: this.input.globalSecondaryIndexOverride,
          LocalSecondaryIndexOverride: this.input.localSecondaryIndexOverride,
          ProvisionedThroughputOverride: {
            ReadCapacityUnits: this.input.provisionedThroughputOverride?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughputOverride?.writeCapacityUnits,
          },
          SSESpecificationOverride: {
            Enabled: this.input.sseSpecificationOverride?.enabled,
            SSEType: this.input.sseSpecificationOverride?.sseType,
            KMSMasterKeyId: this.input.sseSpecificationOverride?.kmsMasterKeyId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreTableToPointInTime.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBScan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbScanInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.Items', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.Count', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ScannedCount', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.LastEvaluatedKey', props);
    return resource.getResponseField('LastEvaluatedKey') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBScanConsumedCapacity {
    return new DynamoDBScanConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

}

export class DynamoDBScanConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbScanInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBScanConsumedCapacityTable {
    return new DynamoDBScanConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBScanConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbScanInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          AttributesToGet: this.input.attributesToGet,
          Limit: this.input.limit,
          Select: this.input.select,
          ScanFilter: this.input.scanFilter,
          ConditionalOperator: this.input.conditionalOperator,
          ExclusiveStartKey: this.input.exclusiveStartKey,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          TotalSegments: this.input.totalSegments,
          Segment: this.input.segment,
          ProjectionExpression: this.input.projectionExpression,
          FilterExpression: this.input.filterExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
          ConsistentRead: this.input.consistentRead,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Scan.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBTransactGetItems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbTransactGetItemsInput) {
    super(scope, id);
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
          TransactItems: this.input.transactItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransactGetItems.ConsumedCapacity', props);
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
          TransactItems: this.input.transactItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransactGetItems.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.DynamoDbItemResponse[];
  }

}

export class DynamoDBTransactWriteItems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbTransactWriteItemsInput) {
    super(scope, id);
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
          TransactItems: this.input.transactItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransactWriteItems.ConsumedCapacity', props);
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
          TransactItems: this.input.transactItems,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransactWriteItems.ItemCollectionMetrics', props);
    return resource.getResponseField('ItemCollectionMetrics') as unknown as Record<string, shapes.DynamoDbItemCollectionMetrics[]>;
  }

}

export class DynamoDBUpdateContinuousBackups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateContinuousBackupsInput) {
    super(scope, id);
  }

  public get continuousBackupsDescription(): DynamoDBUpdateContinuousBackupsContinuousBackupsDescription {
    return new DynamoDBUpdateContinuousBackupsContinuousBackupsDescription(this, 'ContinuousBackupsDescription', this.__resources, this.input);
  }

}

export class DynamoDBUpdateContinuousBackupsContinuousBackupsDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateContinuousBackupsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContinuousBackups.ContinuousBackupsDescription.ContinuousBackupsStatus', props);
    return resource.getResponseField('ContinuousBackupsDescription.ContinuousBackupsStatus') as unknown as string;
  }

  public get pointInTimeRecoveryDescription(): DynamoDBUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription {
    return new DynamoDBUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(this, 'PointInTimeRecoveryDescription', this.__resources, this.input);
  }

}

export class DynamoDBUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateContinuousBackupsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.PointInTimeRecoveryStatus', props);
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
          TableName: this.input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.EarliestRestorableDateTime', props);
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
          TableName: this.input.tableName,
          PointInTimeRecoverySpecification: {
            PointInTimeRecoveryEnabled: this.input.pointInTimeRecoverySpecification.pointInTimeRecoveryEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContinuousBackups.ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime', props);
    return resource.getResponseField('ContinuousBackupsDescription.PointInTimeRecoveryDescription.LatestRestorableDateTime') as unknown as string;
  }

}

export class DynamoDBUpdateContributorInsights extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateContributorInsightsInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          ContributorInsightsAction: this.input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContributorInsights.TableName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          ContributorInsightsAction: this.input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContributorInsights.IndexName', props);
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
          TableName: this.input.tableName,
          IndexName: this.input.indexName,
          ContributorInsightsAction: this.input.contributorInsightsAction,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContributorInsights.ContributorInsightsStatus', props);
    return resource.getResponseField('ContributorInsightsStatus') as unknown as string;
  }

}

export class DynamoDBUpdateGlobalTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateGlobalTableInput) {
    super(scope, id);
  }

  public get globalTableDescription(): DynamoDBUpdateGlobalTableGlobalTableDescription {
    return new DynamoDBUpdateGlobalTableGlobalTableDescription(this, 'GlobalTableDescription', this.__resources, this.input);
  }

}

export class DynamoDBUpdateGlobalTableGlobalTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateGlobalTableInput) {
    super(scope, id);
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
          GlobalTableName: this.input.globalTableName,
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTable.GlobalTableDescription.ReplicationGroup', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableArn', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTable.GlobalTableDescription.CreationDateTime', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableStatus', props);
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
          GlobalTableName: this.input.globalTableName,
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTable.GlobalTableDescription.GlobalTableName', props);
    return resource.getResponseField('GlobalTableDescription.GlobalTableName') as unknown as string;
  }

}

export class DynamoDBUpdateGlobalTableSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateGlobalTableSettingsInput) {
    super(scope, id);
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
          GlobalTableName: this.input.globalTableName,
          GlobalTableBillingMode: this.input.globalTableBillingMode,
          GlobalTableProvisionedWriteCapacityUnits: this.input.globalTableProvisionedWriteCapacityUnits,
          GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
            MinimumUnits: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.minimumUnits,
            MaximumUnits: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.maximumUnits,
            AutoScalingDisabled: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          GlobalTableGlobalSecondaryIndexSettingsUpdate: this.input.globalTableGlobalSecondaryIndexSettingsUpdate,
          ReplicaSettingsUpdate: this.input.replicaSettingsUpdate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTableSettings.GlobalTableName', props);
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
          GlobalTableName: this.input.globalTableName,
          GlobalTableBillingMode: this.input.globalTableBillingMode,
          GlobalTableProvisionedWriteCapacityUnits: this.input.globalTableProvisionedWriteCapacityUnits,
          GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
            MinimumUnits: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.minimumUnits,
            MaximumUnits: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.maximumUnits,
            AutoScalingDisabled: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.input.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          GlobalTableGlobalSecondaryIndexSettingsUpdate: this.input.globalTableGlobalSecondaryIndexSettingsUpdate,
          ReplicaSettingsUpdate: this.input.replicaSettingsUpdate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalTableSettings.ReplicaSettings', props);
    return resource.getResponseField('ReplicaSettings') as unknown as shapes.DynamoDbReplicaSettingsDescription[];
  }

}

export class DynamoDBUpdateItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as Record<string, shapes.DynamoDbAttributeValue>;
  }

  public get consumedCapacity(): DynamoDBUpdateItemConsumedCapacity {
    return new DynamoDBUpdateItemConsumedCapacity(this, 'ConsumedCapacity', this.__resources, this.input);
  }

  public get itemCollectionMetrics(): DynamoDBUpdateItemItemCollectionMetrics {
    return new DynamoDBUpdateItemItemCollectionMetrics(this, 'ItemCollectionMetrics', this.__resources, this.input);
  }

}

export class DynamoDBUpdateItemConsumedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.TableName', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.CapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.WriteCapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.WriteCapacityUnits') as unknown as number;
  }

  public get table(): DynamoDBUpdateItemConsumedCapacityTable {
    return new DynamoDBUpdateItemConsumedCapacityTable(this, 'Table', this.__resources, this.input);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.LocalSecondaryIndexes', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.GlobalSecondaryIndexes', props);
    return resource.getResponseField('ConsumedCapacity.GlobalSecondaryIndexes') as unknown as Record<string, shapes.DynamoDbCapacity>;
  }

}

export class DynamoDBUpdateItemConsumedCapacityTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.Table.ReadCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.Table.WriteCapacityUnits', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ConsumedCapacity.Table.CapacityUnits', props);
    return resource.getResponseField('ConsumedCapacity.Table.CapacityUnits') as unknown as number;
  }

}

export class DynamoDBUpdateItemItemCollectionMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateItemInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ItemCollectionMetrics.ItemCollectionKey', props);
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
          TableName: this.input.tableName,
          Key: this.input.key,
          AttributeUpdates: this.input.attributeUpdates,
          Expected: this.input.expected,
          ConditionalOperator: this.input.conditionalOperator,
          ReturnValues: this.input.returnValues,
          ReturnConsumedCapacity: this.input.returnConsumedCapacity,
          ReturnItemCollectionMetrics: this.input.returnItemCollectionMetrics,
          UpdateExpression: this.input.updateExpression,
          ConditionExpression: this.input.conditionExpression,
          ExpressionAttributeNames: this.input.expressionAttributeNames,
          ExpressionAttributeValues: this.input.expressionAttributeValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateItem.ItemCollectionMetrics.SizeEstimateRangeGB', props);
    return resource.getResponseField('ItemCollectionMetrics.SizeEstimateRangeGB') as unknown as number[];
  }

}

export class DynamoDBUpdateTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
  }

  public get tableDescription(): DynamoDBUpdateTableTableDescription {
    return new DynamoDBUpdateTableTableDescription(this, 'TableDescription', this.__resources, this.input);
  }

}

export class DynamoDBUpdateTableTableDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.AttributeDefinitions', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.TableName', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.KeySchema', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.TableStatus', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.CreationDateTime', props);
    return resource.getResponseField('TableDescription.CreationDateTime') as unknown as string;
  }

  public get provisionedThroughput(): DynamoDBUpdateTableTableDescriptionProvisionedThroughput {
    return new DynamoDBUpdateTableTableDescriptionProvisionedThroughput(this, 'ProvisionedThroughput', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.TableSizeBytes', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ItemCount', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.TableArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.TableId', props);
    return resource.getResponseField('TableDescription.TableId') as unknown as string;
  }

  public get billingModeSummary(): DynamoDBUpdateTableTableDescriptionBillingModeSummary {
    return new DynamoDBUpdateTableTableDescriptionBillingModeSummary(this, 'BillingModeSummary', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.LocalSecondaryIndexes', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.GlobalSecondaryIndexes', props);
    return resource.getResponseField('TableDescription.GlobalSecondaryIndexes') as unknown as shapes.DynamoDbGlobalSecondaryIndexDescription[];
  }

  public get streamSpecification(): DynamoDBUpdateTableTableDescriptionStreamSpecification {
    return new DynamoDBUpdateTableTableDescriptionStreamSpecification(this, 'StreamSpecification', this.__resources, this.input);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.LatestStreamLabel', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.LatestStreamArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.GlobalTableVersion', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.Replicas', props);
    return resource.getResponseField('TableDescription.Replicas') as unknown as shapes.DynamoDbReplicaDescription[];
  }

  public get restoreSummary(): DynamoDBUpdateTableTableDescriptionRestoreSummary {
    return new DynamoDBUpdateTableTableDescriptionRestoreSummary(this, 'RestoreSummary', this.__resources, this.input);
  }

  public get sseDescription(): DynamoDBUpdateTableTableDescriptionSseDescription {
    return new DynamoDBUpdateTableTableDescriptionSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

  public get archivalSummary(): DynamoDBUpdateTableTableDescriptionArchivalSummary {
    return new DynamoDBUpdateTableTableDescriptionArchivalSummary(this, 'ArchivalSummary', this.__resources, this.input);
  }

}

export class DynamoDBUpdateTableTableDescriptionProvisionedThroughput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ProvisionedThroughput.LastIncreaseDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ProvisionedThroughput.LastDecreaseDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ProvisionedThroughput.NumberOfDecreasesToday', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ProvisionedThroughput.ReadCapacityUnits', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ProvisionedThroughput.WriteCapacityUnits', props);
    return resource.getResponseField('TableDescription.ProvisionedThroughput.WriteCapacityUnits') as unknown as number;
  }

}

export class DynamoDBUpdateTableTableDescriptionBillingModeSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.BillingModeSummary.BillingMode', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime', props);
    return resource.getResponseField('TableDescription.BillingModeSummary.LastUpdateToPayPerRequestDateTime') as unknown as string;
  }

}

export class DynamoDBUpdateTableTableDescriptionStreamSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.StreamSpecification.StreamEnabled', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.StreamSpecification.StreamViewType', props);
    return resource.getResponseField('TableDescription.StreamSpecification.StreamViewType') as unknown as string;
  }

}

export class DynamoDBUpdateTableTableDescriptionRestoreSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.RestoreSummary.SourceBackupArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.RestoreSummary.SourceTableArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.RestoreSummary.RestoreDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.RestoreSummary.RestoreInProgress', props);
    return resource.getResponseField('TableDescription.RestoreSummary.RestoreInProgress') as unknown as boolean;
  }

}

export class DynamoDBUpdateTableTableDescriptionSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.SSEDescription.Status', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.SSEDescription.SSEType', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.SSEDescription.KMSMasterKeyArn', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.SSEDescription.InaccessibleEncryptionDateTime', props);
    return resource.getResponseField('TableDescription.SSEDescription.InaccessibleEncryptionDateTime') as unknown as string;
  }

}

export class DynamoDBUpdateTableTableDescriptionArchivalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableInput) {
    super(scope, id);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalDateTime', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalReason', props);
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
          AttributeDefinitions: this.input.attributeDefinitions,
          TableName: this.input.tableName,
          BillingMode: this.input.billingMode,
          ProvisionedThroughput: {
            ReadCapacityUnits: this.input.provisionedThroughput?.readCapacityUnits,
            WriteCapacityUnits: this.input.provisionedThroughput?.writeCapacityUnits,
          },
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          StreamSpecification: {
            StreamEnabled: this.input.streamSpecification?.streamEnabled,
            StreamViewType: this.input.streamSpecification?.streamViewType,
          },
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
            SSEType: this.input.sseSpecification?.sseType,
            KMSMasterKeyId: this.input.sseSpecification?.kmsMasterKeyId,
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.TableDescription.ArchivalSummary.ArchivalBackupArn', props);
    return resource.getResponseField('TableDescription.ArchivalSummary.ArchivalBackupArn') as unknown as string;
  }

}

export class DynamoDBUpdateTableReplicaAutoScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput) {
    super(scope, id);
  }

  public get tableAutoScalingDescription(): DynamoDBUpdateTableReplicaAutoScalingTableAutoScalingDescription {
    return new DynamoDBUpdateTableReplicaAutoScalingTableAutoScalingDescription(this, 'TableAutoScalingDescription', this.__resources, this.input);
  }

}

export class DynamoDBUpdateTableReplicaAutoScalingTableAutoScalingDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTableReplicaAutoScalingInput) {
    super(scope, id);
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
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          TableName: this.input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableName', props);
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
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          TableName: this.input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.TableStatus', props);
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
          GlobalSecondaryIndexUpdates: this.input.globalSecondaryIndexUpdates,
          TableName: this.input.tableName,
          ProvisionedWriteCapacityAutoScalingUpdate: {
            MinimumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.minimumUnits,
            MaximumUnits: this.input.provisionedWriteCapacityAutoScalingUpdate?.maximumUnits,
            AutoScalingDisabled: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingDisabled,
            AutoScalingRoleArn: this.input.provisionedWriteCapacityAutoScalingUpdate?.autoScalingRoleArn,
            ScalingPolicyUpdate: {
              PolicyName: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.policyName,
              TargetTrackingScalingPolicyConfiguration: {
                DisableScaleIn: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.disableScaleIn,
                ScaleInCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleInCooldown,
                ScaleOutCooldown: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.scaleOutCooldown,
                TargetValue: this.input.provisionedWriteCapacityAutoScalingUpdate?.scalingPolicyUpdate?.targetTrackingScalingPolicyConfiguration.targetValue,
              },
            },
          },
          ReplicaUpdates: this.input.replicaUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTableReplicaAutoScaling.TableAutoScalingDescription.Replicas', props);
    return resource.getResponseField('TableAutoScalingDescription.Replicas') as unknown as shapes.DynamoDbReplicaAutoScalingDescription[];
  }

}

export class DynamoDBUpdateTimeToLive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTimeToLiveInput) {
    super(scope, id);
  }

  public get timeToLiveSpecification(): DynamoDBUpdateTimeToLiveTimeToLiveSpecification {
    return new DynamoDBUpdateTimeToLiveTimeToLiveSpecification(this, 'TimeToLiveSpecification', this.__resources, this.input);
  }

}

export class DynamoDBUpdateTimeToLiveTimeToLiveSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DynamoDbUpdateTimeToLiveInput) {
    super(scope, id);
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
          TableName: this.input.tableName,
          TimeToLiveSpecification: {
            Enabled: this.input.timeToLiveSpecification.enabled,
            AttributeName: this.input.timeToLiveSpecification.attributeName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTimeToLive.TimeToLiveSpecification.Enabled', props);
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
          TableName: this.input.tableName,
          TimeToLiveSpecification: {
            Enabled: this.input.timeToLiveSpecification.enabled,
            AttributeName: this.input.timeToLiveSpecification.attributeName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTimeToLive.TimeToLiveSpecification.AttributeName', props);
    return resource.getResponseField('TimeToLiveSpecification.AttributeName') as unknown as string;
  }

}

