# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DynamoDbClient <a name="aws-cdk-sdk.dynamodb.DynamoDbClient"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDbClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchExecuteStatement` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.batchExecuteStatement"></a>

```typescript
public batchExecuteStatement(input: DynamoDbBatchExecuteStatementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput)

---

##### `batchGetItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.batchGetItem"></a>

```typescript
public batchGetItem(input: DynamoDbBatchGetItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput)

---

##### `batchWriteItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.batchWriteItem"></a>

```typescript
public batchWriteItem(input: DynamoDbBatchWriteItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput)

---

##### `createBackup` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.createBackup"></a>

```typescript
public createBackup(input: DynamoDbCreateBackupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput)

---

##### `createGlobalTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.createGlobalTable"></a>

```typescript
public createGlobalTable(input: DynamoDbCreateGlobalTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput)

---

##### `createTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.createTable"></a>

```typescript
public createTable(input: DynamoDbCreateTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---

##### `deleteBackup` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.deleteBackup"></a>

```typescript
public deleteBackup(input: DynamoDbDeleteBackupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---

##### `deleteItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.deleteItem"></a>

```typescript
public deleteItem(input: DynamoDbDeleteItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput)

---

##### `deleteTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.deleteTable"></a>

```typescript
public deleteTable(input: DynamoDbDeleteTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---

##### `describeBackup` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeBackup"></a>

```typescript
public describeBackup(input: DynamoDbDescribeBackupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---

##### `describeContinuousBackups` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeContinuousBackups"></a>

```typescript
public describeContinuousBackups(input: DynamoDbDescribeContinuousBackupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput)

---

##### `describeContributorInsights` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeContributorInsights"></a>

```typescript
public describeContributorInsights(input: DynamoDbDescribeContributorInsightsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput)

---

##### `describeEndpoints` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeEndpoints"></a>

```typescript
public describeEndpoints()
```

##### `describeExport` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeExport"></a>

```typescript
public describeExport(input: DynamoDbDescribeExportInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput)

---

##### `describeGlobalTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeGlobalTable"></a>

```typescript
public describeGlobalTable(input: DynamoDbDescribeGlobalTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput)

---

##### `describeGlobalTableSettings` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeGlobalTableSettings"></a>

```typescript
public describeGlobalTableSettings(input: DynamoDbDescribeGlobalTableSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput)

---

##### `describeKinesisStreamingDestination` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeKinesisStreamingDestination"></a>

```typescript
public describeKinesisStreamingDestination(input: DynamoDbDescribeKinesisStreamingDestinationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput)

---

##### `describeLimits` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeLimits"></a>

```typescript
public describeLimits()
```

##### `describeTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeTable"></a>

```typescript
public describeTable(input: DynamoDbDescribeTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---

##### `describeTableReplicaAutoScaling` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeTableReplicaAutoScaling"></a>

```typescript
public describeTableReplicaAutoScaling(input: DynamoDbDescribeTableReplicaAutoScalingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput)

---

##### `describeTimeToLive` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.describeTimeToLive"></a>

```typescript
public describeTimeToLive(input: DynamoDbDescribeTimeToLiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput)

---

##### `disableKinesisStreamingDestination` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.disableKinesisStreamingDestination"></a>

```typescript
public disableKinesisStreamingDestination(input: DynamoDbKinesisStreamingDestinationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput)

---

##### `enableKinesisStreamingDestination` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.enableKinesisStreamingDestination"></a>

```typescript
public enableKinesisStreamingDestination(input: DynamoDbKinesisStreamingDestinationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput)

---

##### `executeStatement` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.executeStatement"></a>

```typescript
public executeStatement(input: DynamoDbExecuteStatementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput`](#aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput)

---

##### `executeTransaction` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.executeTransaction"></a>

```typescript
public executeTransaction(input: DynamoDbExecuteTransactionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput`](#aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput)

---

##### `exportTableToPointInTime` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.exportTableToPointInTime"></a>

```typescript
public exportTableToPointInTime(input: DynamoDbExportTableToPointInTimeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput)

---

##### `fetchItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.fetchItem"></a>

```typescript
public fetchItem(input: DynamoDbGetItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbGetItemInput)

---

##### `listBackups` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listBackups"></a>

```typescript
public listBackups(input: DynamoDbListBackupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput)

---

##### `listContributorInsights` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listContributorInsights"></a>

```typescript
public listContributorInsights(input: DynamoDbListContributorInsightsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput)

---

##### `listExports` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listExports"></a>

```typescript
public listExports(input: DynamoDbListExportsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListExportsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListExportsInput)

---

##### `listGlobalTables` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listGlobalTables"></a>

```typescript
public listGlobalTables(input: DynamoDbListGlobalTablesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput`](#aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput)

---

##### `listTables` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listTables"></a>

```typescript
public listTables(input: DynamoDbListTablesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListTablesInput`](#aws-cdk-sdk.dynamodb.DynamoDbListTablesInput)

---

##### `listTagsOfResource` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.listTagsOfResource"></a>

```typescript
public listTagsOfResource(input: DynamoDbListTagsOfResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput`](#aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput)

---

##### `putItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.putItem"></a>

```typescript
public putItem(input: DynamoDbPutItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbPutItemInput)

---

##### `query` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.query"></a>

```typescript
public query(input: DynamoDbQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbQueryInput`](#aws-cdk-sdk.dynamodb.DynamoDbQueryInput)

---

##### `restoreTableFromBackup` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.restoreTableFromBackup"></a>

```typescript
public restoreTableFromBackup(input: DynamoDbRestoreTableFromBackupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---

##### `restoreTableToPointInTime` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.restoreTableToPointInTime"></a>

```typescript
public restoreTableToPointInTime(input: DynamoDbRestoreTableToPointInTimeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---

##### `scan` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.scan"></a>

```typescript
public scan(input: DynamoDbScanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbScanInput`](#aws-cdk-sdk.dynamodb.DynamoDbScanInput)

---

##### `tagResource` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.tagResource"></a>

```typescript
public tagResource(input: DynamoDbTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTagResourceInput`](#aws-cdk-sdk.dynamodb.DynamoDbTagResourceInput)

---

##### `transactGetItems` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.transactGetItems"></a>

```typescript
public transactGetItems(input: DynamoDbTransactGetItemsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput`](#aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput)

---

##### `transactWriteItems` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.transactWriteItems"></a>

```typescript
public transactWriteItems(input: DynamoDbTransactWriteItemsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput`](#aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput)

---

##### `untagResource` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.untagResource"></a>

```typescript
public untagResource(input: DynamoDbUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUntagResourceInput`](#aws-cdk-sdk.dynamodb.DynamoDbUntagResourceInput)

---

##### `updateContinuousBackups` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateContinuousBackups"></a>

```typescript
public updateContinuousBackups(input: DynamoDbUpdateContinuousBackupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput)

---

##### `updateContributorInsights` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateContributorInsights"></a>

```typescript
public updateContributorInsights(input: DynamoDbUpdateContributorInsightsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput)

---

##### `updateGlobalTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateGlobalTable"></a>

```typescript
public updateGlobalTable(input: DynamoDbUpdateGlobalTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput)

---

##### `updateGlobalTableSettings` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateGlobalTableSettings"></a>

```typescript
public updateGlobalTableSettings(input: DynamoDbUpdateGlobalTableSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput)

---

##### `updateItem` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateItem"></a>

```typescript
public updateItem(input: DynamoDbUpdateItemInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput)

---

##### `updateTable` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateTable"></a>

```typescript
public updateTable(input: DynamoDbUpdateTableInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---

##### `updateTableReplicaAutoScaling` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateTableReplicaAutoScaling"></a>

```typescript
public updateTableReplicaAutoScaling(input: DynamoDbUpdateTableReplicaAutoScalingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput)

---

##### `updateTimeToLive` <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.updateTimeToLive"></a>

```typescript
public updateTimeToLive(input: DynamoDbUpdateTimeToLiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput)

---




## Structs <a name="Structs"></a>

### DynamoDbArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbArchivalSummary: dynamodb.DynamoDbArchivalSummary = { ... }
```

##### `archivalBackupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---

### DynamoDbAttributeDefinition <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAttributeDefinition: dynamodb.DynamoDbAttributeDefinition = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition.property.attributeType"></a>

- *Type:* `string`

---

### DynamoDbAttributeValue <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAttributeValue: dynamodb.DynamoDbAttributeValue = { ... }
```

##### `b`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.b"></a>

- *Type:* `any`

---

##### `bool`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.bool"></a>

- *Type:* `boolean`

---

##### `bs`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.bs"></a>

- *Type:* `any`[]

---

##### `l`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.l"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

##### `m`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.m"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `n`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.n"></a>

- *Type:* `string`

---

##### `ns`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.ns"></a>

- *Type:* `string`[]

---

##### `null`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.null"></a>

- *Type:* `boolean`

---

##### `s`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.s"></a>

- *Type:* `string`

---

##### `ss`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValue.property.ss"></a>

- *Type:* `string`[]

---

### DynamoDbAttributeValueUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValueUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAttributeValueUpdate: dynamodb.DynamoDbAttributeValueUpdate = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValueUpdate.property.action"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAttributeValueUpdate.property.value"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)

---

### DynamoDbAutoScalingPolicyDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingPolicyDescription: dynamodb.DynamoDbAutoScalingPolicyDescription = { ... }
```

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyDescription.property.policyName"></a>

- *Type:* `string`

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyDescription.property.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription)

---

### DynamoDbAutoScalingPolicyUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingPolicyUpdate: dynamodb.DynamoDbAutoScalingPolicyUpdate = { ... }
```

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyUpdate.property.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate)

---

##### `policyName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyUpdate.property.policyName"></a>

- *Type:* `string`

---

### DynamoDbAutoScalingSettingsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingSettingsDescription: dynamodb.DynamoDbAutoScalingSettingsDescription = { ... }
```

##### `autoScalingDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription.property.autoScalingDisabled"></a>

- *Type:* `boolean`

---

##### `autoScalingRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription.property.autoScalingRoleArn"></a>

- *Type:* `string`

---

##### `maximumUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription.property.maximumUnits"></a>

- *Type:* `number`

---

##### `minimumUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription.property.minimumUnits"></a>

- *Type:* `number`

---

##### `scalingPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription.property.scalingPolicies"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyDescription)[]

---

### DynamoDbAutoScalingSettingsUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingSettingsUpdate: dynamodb.DynamoDbAutoScalingSettingsUpdate = { ... }
```

##### `autoScalingDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate.property.autoScalingDisabled"></a>

- *Type:* `boolean`

---

##### `autoScalingRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate.property.autoScalingRoleArn"></a>

- *Type:* `string`

---

##### `maximumUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate.property.maximumUnits"></a>

- *Type:* `number`

---

##### `minimumUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate.property.minimumUnits"></a>

- *Type:* `number`

---

##### `scalingPolicyUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate.property.scalingPolicyUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingPolicyUpdate)

---

### DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription: dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription.property.targetValue"></a>

- *Type:* `number`

---

##### `disableScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription.property.disableScaleIn"></a>

- *Type:* `boolean`

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription.property.scaleInCooldown"></a>

- *Type:* `number`

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationDescription.property.scaleOutCooldown"></a>

- *Type:* `number`

---

### DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate: dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate = { ... }
```

##### `targetValue`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate.property.targetValue"></a>

- *Type:* `number`

---

##### `disableScaleIn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate.property.disableScaleIn"></a>

- *Type:* `boolean`

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate.property.scaleInCooldown"></a>

- *Type:* `number`

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbAutoScalingTargetTrackingScalingPolicyConfigurationUpdate.property.scaleOutCooldown"></a>

- *Type:* `number`

---

### DynamoDbBackupDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBackupDescription: dynamodb.DynamoDbBackupDescription = { ... }
```

##### `backupDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDescription.property.backupDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupDetails`](#aws-cdk-sdk.dynamodb.DynamoDbBackupDetails)

---

##### `sourceTableDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDescription.property.sourceTableDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails`](#aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails)

---

##### `sourceTableFeatureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDescription.property.sourceTableFeatureDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails`](#aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails)

---

### DynamoDbBackupDetails <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBackupDetails: dynamodb.DynamoDbBackupDetails = { ... }
```

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupArn"></a>

- *Type:* `string`

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupCreationDateTime"></a>

- *Type:* `string`

---

##### `backupName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupName"></a>

- *Type:* `string`

---

##### `backupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupStatus"></a>

- *Type:* `string`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupType"></a>

- *Type:* `string`

---

##### `backupExpiryDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupExpiryDateTime"></a>

- *Type:* `string`

---

##### `backupSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupDetails.property.backupSizeBytes"></a>

- *Type:* `number`

---

### DynamoDbBackupSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBackupSummary: dynamodb.DynamoDbBackupSummary = { ... }
```

##### `backupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupArn"></a>

- *Type:* `string`

---

##### `backupCreationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupCreationDateTime"></a>

- *Type:* `string`

---

##### `backupExpiryDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupExpiryDateTime"></a>

- *Type:* `string`

---

##### `backupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupName"></a>

- *Type:* `string`

---

##### `backupSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupSizeBytes"></a>

- *Type:* `number`

---

##### `backupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupStatus"></a>

- *Type:* `string`

---

##### `backupType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.backupType"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBackupSummary.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbBatchExecuteStatementInput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchExecuteStatementInput: dynamodb.DynamoDbBatchExecuteStatementInput = { ... }
```

##### `statements`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput.property.statements"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest`](#aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest)[]

---

### DynamoDbBatchExecuteStatementOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchExecuteStatementOutput: dynamodb.DynamoDbBatchExecuteStatementOutput = { ... }
```

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementOutput.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse`](#aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse)[]

---

### DynamoDbBatchGetItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchGetItemInput: dynamodb.DynamoDbBatchGetItemInput = { ... }
```

##### `requestItems`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput.property.requestItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes`](#aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes)}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

### DynamoDbBatchGetItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchGetItemOutput: dynamodb.DynamoDbBatchGetItemOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemOutput.property.responses"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]}

---

##### `unprocessedKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemOutput.property.unprocessedKeys"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes`](#aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes)}

---

### DynamoDbBatchStatementError <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchStatementError: dynamodb.DynamoDbBatchStatementError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementError.property.message"></a>

- *Type:* `string`

---

### DynamoDbBatchStatementRequest <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchStatementRequest: dynamodb.DynamoDbBatchStatementRequest = { ... }
```

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest.property.statement"></a>

- *Type:* `string`

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

### DynamoDbBatchStatementResponse <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchStatementResponse: dynamodb.DynamoDbBatchStatementResponse = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse.property.error"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchStatementError`](#aws-cdk-sdk.dynamodb.DynamoDbBatchStatementError)

---

##### `item`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbBatchWriteItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchWriteItemInput: dynamodb.DynamoDbBatchWriteItemInput = { ... }
```

##### `requestItems`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput.property.requestItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbWriteRequest`](#aws-cdk-sdk.dynamodb.DynamoDbWriteRequest)[]}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `returnItemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput.property.returnItemCollectionMetrics"></a>

- *Type:* `string`

---

### DynamoDbBatchWriteItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBatchWriteItemOutput: dynamodb.DynamoDbBatchWriteItemOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `itemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemOutput.property.itemCollectionMetrics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)[]}

---

##### `unprocessedItems`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemOutput.property.unprocessedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbWriteRequest`](#aws-cdk-sdk.dynamodb.DynamoDbWriteRequest)[]}

---

### DynamoDbBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbBillingModeSummary: dynamodb.DynamoDbBillingModeSummary = { ... }
```

##### `billingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---

### DynamoDbCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDbCapacity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCapacity: dynamodb.DynamoDbCapacity = { ... }
```

##### `capacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbCondition <a name="aws-cdk-sdk.dynamodb.DynamoDbCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCondition: dynamodb.DynamoDbCondition = { ... }
```

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCondition.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `attributeValueList`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCondition.property.attributeValueList"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

### DynamoDbConditionCheck <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbConditionCheck: dynamodb.DynamoDbConditionCheck = { ... }
```

##### `conditionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.conditionExpression"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.tableName"></a>

- *Type:* `string`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnValuesOnConditionCheckFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConditionCheck.property.returnValuesOnConditionCheckFailure"></a>

- *Type:* `string`

---

### DynamoDbConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbConsumedCapacity: dynamodb.DynamoDbConsumedCapacity = { ... }
```

##### `capacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbContinuousBackupsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbContinuousBackupsDescription: dynamodb.DynamoDbContinuousBackupsDescription = { ... }
```

##### `continuousBackupsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription.property.continuousBackupsStatus"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription.property.pointInTimeRecoveryDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription`](#aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription)

---

### DynamoDbContributorInsightsSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbContributorInsightsSummary: dynamodb.DynamoDbContributorInsightsSummary = { ... }
```

##### `contributorInsightsStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary.property.contributorInsightsStatus"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary.property.indexName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbCreateBackupInput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateBackupInput: dynamodb.DynamoDbCreateBackupInput = { ... }
```

##### `backupName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput.property.backupName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbCreateBackupOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateBackupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateBackupOutput: dynamodb.DynamoDbCreateBackupOutput = { ... }
```

##### `backupDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateBackupOutput.property.backupDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupDetails`](#aws-cdk-sdk.dynamodb.DynamoDbBackupDetails)

---

### DynamoDbCreateGlobalSecondaryIndexAction <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateGlobalSecondaryIndexAction: dynamodb.DynamoDbCreateGlobalSecondaryIndexAction = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

### DynamoDbCreateGlobalTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateGlobalTableInput: dynamodb.DynamoDbCreateGlobalTableInput = { ... }
```

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplica`](#aws-cdk-sdk.dynamodb.DynamoDbReplica)[]

---

### DynamoDbCreateGlobalTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateGlobalTableOutput: dynamodb.DynamoDbCreateGlobalTableOutput = { ... }
```

##### `globalTableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableOutput.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription)

---

### DynamoDbCreateReplicaAction <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicaAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateReplicaAction: dynamodb.DynamoDbCreateReplicaAction = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicaAction.property.regionName"></a>

- *Type:* `string`

---

### DynamoDbCreateReplicationGroupMemberAction <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateReplicationGroupMemberAction: dynamodb.DynamoDbCreateReplicationGroupMemberAction = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction.property.regionName"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex)[]

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride)

---

### DynamoDbCreateTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateTableInput: dynamodb.DynamoDbCreateTableInput = { ... }
```

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.tableName"></a>

- *Type:* `string`

---

##### `billingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.billingMode"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex)[]

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex)[]

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

##### `sseSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.sseSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbsseSpecification)

---

##### `streamSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTag`](#aws-cdk-sdk.dynamodb.DynamoDbTag)[]

---

### DynamoDbCreateTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbCreateTableOutput: dynamodb.DynamoDbCreateTableOutput = { ... }
```

##### `tableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbCreateTableOutput.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbDelete <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDelete: dynamodb.DynamoDbDelete = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.tableName"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnValuesOnConditionCheckFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDelete.property.returnValuesOnConditionCheckFailure"></a>

- *Type:* `string`

---

### DynamoDbDeleteBackupInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteBackupInput: dynamodb.DynamoDbDeleteBackupInput = { ... }
```

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput.property.backupArn"></a>

- *Type:* `string`

---

### DynamoDbDeleteBackupOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteBackupOutput: dynamodb.DynamoDbDeleteBackupOutput = { ... }
```

##### `backupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupOutput.property.backupDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupDescription`](#aws-cdk-sdk.dynamodb.DynamoDbBackupDescription)

---

### DynamoDbDeleteGlobalSecondaryIndexAction <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteGlobalSecondaryIndexAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteGlobalSecondaryIndexAction: dynamodb.DynamoDbDeleteGlobalSecondaryIndexAction = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteGlobalSecondaryIndexAction.property.indexName"></a>

- *Type:* `string`

---

### DynamoDbDeleteItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteItemInput: dynamodb.DynamoDbDeleteItemInput = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.tableName"></a>

- *Type:* `string`

---

##### `conditionalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.conditionalOperator"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expected`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.expected"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue)}

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `returnItemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.returnItemCollectionMetrics"></a>

- *Type:* `string`

---

##### `returnValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput.property.returnValues"></a>

- *Type:* `string`

---

### DynamoDbDeleteItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteItemOutput: dynamodb.DynamoDbDeleteItemOutput = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemOutput.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteItemOutput.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)

---

### DynamoDbDeleteReplicaAction <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicaAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteReplicaAction: dynamodb.DynamoDbDeleteReplicaAction = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicaAction.property.regionName"></a>

- *Type:* `string`

---

### DynamoDbDeleteReplicationGroupMemberAction <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicationGroupMemberAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteReplicationGroupMemberAction: dynamodb.DynamoDbDeleteReplicationGroupMemberAction = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicationGroupMemberAction.property.regionName"></a>

- *Type:* `string`

---

### DynamoDbDeleteRequest <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteRequest: dynamodb.DynamoDbDeleteRequest = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteRequest.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

### DynamoDbDeleteTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteTableInput: dynamodb.DynamoDbDeleteTableInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDeleteTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDeleteTableOutput: dynamodb.DynamoDbDeleteTableOutput = { ... }
```

##### `tableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDeleteTableOutput.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbDescribeBackupInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeBackupInput: dynamodb.DynamoDbDescribeBackupInput = { ... }
```

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput.property.backupArn"></a>

- *Type:* `string`

---

### DynamoDbDescribeBackupOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeBackupOutput: dynamodb.DynamoDbDescribeBackupOutput = { ... }
```

##### `backupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupOutput.property.backupDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupDescription`](#aws-cdk-sdk.dynamodb.DynamoDbBackupDescription)

---

### DynamoDbDescribeContinuousBackupsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeContinuousBackupsInput: dynamodb.DynamoDbDescribeContinuousBackupsInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeContinuousBackupsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeContinuousBackupsOutput: dynamodb.DynamoDbDescribeContinuousBackupsOutput = { ... }
```

##### `continuousBackupsDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsOutput.property.continuousBackupsDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription)

---

### DynamoDbDescribeContributorInsightsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeContributorInsightsInput: dynamodb.DynamoDbDescribeContributorInsightsInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput.property.tableName"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput.property.indexName"></a>

- *Type:* `string`

---

### DynamoDbDescribeContributorInsightsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeContributorInsightsOutput: dynamodb.DynamoDbDescribeContributorInsightsOutput = { ... }
```

##### `contributorInsightsRuleList`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.contributorInsightsRuleList"></a>

- *Type:* `string`[]

---

##### `contributorInsightsStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.contributorInsightsStatus"></a>

- *Type:* `string`

---

##### `failureException`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.failureException"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbFailureException`](#aws-cdk-sdk.dynamodb.DynamoDbFailureException)

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.indexName"></a>

- *Type:* `string`

---

##### `lastUpdateDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.lastUpdateDateTime"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsOutput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeEndpointsRequest <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeEndpointsRequest: dynamodb.DynamoDbDescribeEndpointsRequest = { ... }
```

### DynamoDbDescribeEndpointsResponse <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeEndpointsResponse: dynamodb.DynamoDbDescribeEndpointsResponse = { ... }
```

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeEndpointsResponse.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbEndpoint`](#aws-cdk-sdk.dynamodb.DynamoDbEndpoint)[]

---

### DynamoDbDescribeExportInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeExportInput: dynamodb.DynamoDbDescribeExportInput = { ... }
```

##### `exportArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput.property.exportArn"></a>

- *Type:* `string`

---

### DynamoDbDescribeExportOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeExportOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeExportOutput: dynamodb.DynamoDbDescribeExportOutput = { ... }
```

##### `exportDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeExportOutput.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportDescription`](#aws-cdk-sdk.dynamodb.DynamoDbExportDescription)

---

### DynamoDbDescribeGlobalTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeGlobalTableInput: dynamodb.DynamoDbDescribeGlobalTableInput = { ... }
```

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput.property.globalTableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeGlobalTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeGlobalTableOutput: dynamodb.DynamoDbDescribeGlobalTableOutput = { ... }
```

##### `globalTableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableOutput.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription)

---

### DynamoDbDescribeGlobalTableSettingsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeGlobalTableSettingsInput: dynamodb.DynamoDbDescribeGlobalTableSettingsInput = { ... }
```

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput.property.globalTableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeGlobalTableSettingsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeGlobalTableSettingsOutput: dynamodb.DynamoDbDescribeGlobalTableSettingsOutput = { ... }
```

##### `globalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsOutput.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicaSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsOutput.property.replicaSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription)[]

---

### DynamoDbDescribeKinesisStreamingDestinationInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeKinesisStreamingDestinationInput: dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeKinesisStreamingDestinationOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeKinesisStreamingDestinationOutput: dynamodb.DynamoDbDescribeKinesisStreamingDestinationOutput = { ... }
```

##### `kinesisDataStreamDestinations`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationOutput.property.kinesisDataStreamDestinations"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination)[]

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationOutput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeLimitsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeLimitsInput: dynamodb.DynamoDbDescribeLimitsInput = { ... }
```

### DynamoDbDescribeLimitsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeLimitsOutput: dynamodb.DynamoDbDescribeLimitsOutput = { ... }
```

##### `accountMaxReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsOutput.property.accountMaxReadCapacityUnits"></a>

- *Type:* `number`

---

##### `accountMaxWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsOutput.property.accountMaxWriteCapacityUnits"></a>

- *Type:* `number`

---

##### `tableMaxReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsOutput.property.tableMaxReadCapacityUnits"></a>

- *Type:* `number`

---

##### `tableMaxWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeLimitsOutput.property.tableMaxWriteCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbDescribeTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTableInput: dynamodb.DynamoDbDescribeTableInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTableOutput: dynamodb.DynamoDbDescribeTableOutput = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableOutput.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbDescribeTableReplicaAutoScalingInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTableReplicaAutoScalingInput: dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeTableReplicaAutoScalingOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTableReplicaAutoScalingOutput: dynamodb.DynamoDbDescribeTableReplicaAutoScalingOutput = { ... }
```

##### `tableAutoScalingDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingOutput.property.tableAutoScalingDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription)

---

### DynamoDbDescribeTimeToLiveInput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTimeToLiveInput: dynamodb.DynamoDbDescribeTimeToLiveInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbDescribeTimeToLiveOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbDescribeTimeToLiveOutput: dynamodb.DynamoDbDescribeTimeToLiveOutput = { ... }
```

##### `timeToLiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveOutput.property.timeToLiveDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription)

---

### DynamoDbEndpoint <a name="aws-cdk-sdk.dynamodb.DynamoDbEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbEndpoint: dynamodb.DynamoDbEndpoint = { ... }
```

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbEndpoint.property.address"></a>

- *Type:* `string`

---

##### `cachePeriodInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbEndpoint.property.cachePeriodInMinutes"></a>

- *Type:* `number`

---

### DynamoDbExecuteStatementInput <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExecuteStatementInput: dynamodb.DynamoDbExecuteStatementInput = { ... }
```

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput.property.statement"></a>

- *Type:* `string`

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

### DynamoDbExecuteStatementOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExecuteStatementOutput: dynamodb.DynamoDbExecuteStatementOutput = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementOutput.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementOutput.property.nextToken"></a>

- *Type:* `string`

---

### DynamoDbExecuteTransactionInput <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExecuteTransactionInput: dynamodb.DynamoDbExecuteTransactionInput = { ... }
```

##### `transactStatements`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput.property.transactStatements"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbParameterizedStatement`](#aws-cdk-sdk.dynamodb.DynamoDbParameterizedStatement)[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput.property.clientRequestToken"></a>

- *Type:* `string`

---

### DynamoDbExecuteTransactionOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExecuteTransactionOutput: dynamodb.DynamoDbExecuteTransactionOutput = { ... }
```

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionOutput.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemResponse`](#aws-cdk-sdk.dynamodb.DynamoDbItemResponse)[]

---

### DynamoDbExpectedAttributeValue <a name="aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExpectedAttributeValue: dynamodb.DynamoDbExpectedAttributeValue = { ... }
```

##### `attributeValueList`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue.property.attributeValueList"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `exists`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue.property.exists"></a>

- *Type:* `boolean`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)

---

### DynamoDbExportDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExportDescription: dynamodb.DynamoDbExportDescription = { ... }
```

##### `billedSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.billedSizeBytes"></a>

- *Type:* `number`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.clientToken"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.endTime"></a>

- *Type:* `string`

---

##### `exportArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.exportArn"></a>

- *Type:* `string`

---

##### `exportFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.exportFormat"></a>

- *Type:* `string`

---

##### `exportManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.exportManifest"></a>

- *Type:* `string`

---

##### `exportStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.exportStatus"></a>

- *Type:* `string`

---

##### `exportTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.exportTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.failureCode"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.failureMessage"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.s3BucketOwner"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.s3Prefix"></a>

- *Type:* `string`

---

##### `s3SseAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.s3SseAlgorithm"></a>

- *Type:* `string`

---

##### `s3SseKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.s3SseKmsKeyId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.startTime"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportDescription.property.tableId"></a>

- *Type:* `string`

---

### DynamoDbExportSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbExportSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExportSummary: dynamodb.DynamoDbExportSummary = { ... }
```

##### `exportArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportSummary.property.exportArn"></a>

- *Type:* `string`

---

##### `exportStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportSummary.property.exportStatus"></a>

- *Type:* `string`

---

### DynamoDbExportTableToPointInTimeInput <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExportTableToPointInTimeInput: dynamodb.DynamoDbExportTableToPointInTimeInput = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.s3Bucket"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.tableArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.clientToken"></a>

- *Type:* `string`

---

##### `exportFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.exportFormat"></a>

- *Type:* `string`

---

##### `exportTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.exportTime"></a>

- *Type:* `string`

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.s3BucketOwner"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.s3Prefix"></a>

- *Type:* `string`

---

##### `s3SseAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.s3SseAlgorithm"></a>

- *Type:* `string`

---

##### `s3SseKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput.property.s3SseKmsKeyId"></a>

- *Type:* `string`

---

### DynamoDbExportTableToPointInTimeOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbExportTableToPointInTimeOutput: dynamodb.DynamoDbExportTableToPointInTimeOutput = { ... }
```

##### `exportDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeOutput.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportDescription`](#aws-cdk-sdk.dynamodb.DynamoDbExportDescription)

---

### DynamoDbFailureException <a name="aws-cdk-sdk.dynamodb.DynamoDbFailureException"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbFailureException: dynamodb.DynamoDbFailureException = { ... }
```

##### `exceptionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbFailureException.property.exceptionDescription"></a>

- *Type:* `string`

---

##### `exceptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbFailureException.property.exceptionName"></a>

- *Type:* `string`

---

### DynamoDbGet <a name="aws-cdk-sdk.dynamodb.DynamoDbGet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGet: dynamodb.DynamoDbGet = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGet.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGet.property.tableName"></a>

- *Type:* `string`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGet.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `projectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGet.property.projectionExpression"></a>

- *Type:* `string`

---

### DynamoDbGetItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGetItemInput: dynamodb.DynamoDbGetItemInput = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.tableName"></a>

- *Type:* `string`

---

##### `attributesToGet`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.attributesToGet"></a>

- *Type:* `string`[]

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `projectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.projectionExpression"></a>

- *Type:* `string`

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

### DynamoDbGetItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGetItemOutput: dynamodb.DynamoDbGetItemOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `item`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGetItemOutput.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

### DynamoDbGlobalSecondaryIndex <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalSecondaryIndex: dynamodb.DynamoDbGlobalSecondaryIndex = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

### DynamoDbGlobalSecondaryIndexAutoScalingUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalSecondaryIndexAutoScalingUpdate: dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedWriteCapacityAutoScalingUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate.property.provisionedWriteCapacityAutoScalingUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

### DynamoDbGlobalSecondaryIndexDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalSecondaryIndexDescription: dynamodb.DynamoDbGlobalSecondaryIndexDescription = { ... }
```

##### `backfilling`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.backfilling"></a>

- *Type:* `boolean`

---

##### `indexArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.indexArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.indexName"></a>

- *Type:* `string`

---

##### `indexSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.indexSizeBytes"></a>

- *Type:* `number`

---

##### `indexStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.indexStatus"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription)

---

### DynamoDbGlobalSecondaryIndexInfo <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalSecondaryIndexInfo: dynamodb.DynamoDbGlobalSecondaryIndexInfo = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

### DynamoDbGlobalSecondaryIndexUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalSecondaryIndexUpdate: dynamodb.DynamoDbGlobalSecondaryIndexUpdate = { ... }
```

##### `create`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate.property.create"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction`](#aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalSecondaryIndexAction)

---

##### `delete`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate.property.delete"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteGlobalSecondaryIndexAction`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteGlobalSecondaryIndexAction)

---

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate.property.update"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction)

---

### DynamoDbGlobalTable <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalTable: dynamodb.DynamoDbGlobalTable = { ... }
```

##### `globalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTable.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTable.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplica`](#aws-cdk-sdk.dynamodb.DynamoDbReplica)[]

---

### DynamoDbGlobalTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalTableDescription: dynamodb.DynamoDbGlobalTableDescription = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalTableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription.property.globalTableArn"></a>

- *Type:* `string`

---

##### `globalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription.property.globalTableName"></a>

- *Type:* `string`

---

##### `globalTableStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription.property.globalTableStatus"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

### DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate: dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedWriteCapacityAutoScalingSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate.property.provisionedWriteCapacityAutoScalingSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

##### `provisionedWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate.property.provisionedWriteCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbItemCollectionMetrics <a name="aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbItemCollectionMetrics: dynamodb.DynamoDbItemCollectionMetrics = { ... }
```

##### `itemCollectionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics.property.itemCollectionKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `sizeEstimateRangeGb`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics.property.sizeEstimateRangeGb"></a>

- *Type:* `number`[]

---

### DynamoDbItemResponse <a name="aws-cdk-sdk.dynamodb.DynamoDbItemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbItemResponse: dynamodb.DynamoDbItemResponse = { ... }
```

##### `item`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbItemResponse.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

### DynamoDbKeysAndAttributes <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbKeysAndAttributes: dynamodb.DynamoDbKeysAndAttributes = { ... }
```

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes.property.keys"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `attributesToGet`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes.property.attributesToGet"></a>

- *Type:* `string`[]

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `projectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes.property.projectionExpression"></a>

- *Type:* `string`

---

### DynamoDbKeySchemaElement <a name="aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbKeySchemaElement: dynamodb.DynamoDbKeySchemaElement = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement.property.attributeName"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement.property.keyType"></a>

- *Type:* `string`

---

### DynamoDbKinesisDataStreamDestination <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbKinesisDataStreamDestination: dynamodb.DynamoDbKinesisDataStreamDestination = { ... }
```

##### `destinationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination.property.destinationStatus"></a>

- *Type:* `string`

---

##### `destinationStatusDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination.property.destinationStatusDescription"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination.property.streamArn"></a>

- *Type:* `string`

---

### DynamoDbKinesisStreamingDestinationInput <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbKinesisStreamingDestinationInput: dynamodb.DynamoDbKinesisStreamingDestinationInput = { ... }
```

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput.property.streamArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbKinesisStreamingDestinationOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbKinesisStreamingDestinationOutput: dynamodb.DynamoDbKinesisStreamingDestinationOutput = { ... }
```

##### `destinationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationOutput.property.destinationStatus"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationOutput.property.streamArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationOutput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbListBackupsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListBackupsInput: dynamodb.DynamoDbListBackupsInput = { ... }
```

##### `backupType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.backupType"></a>

- *Type:* `string`

---

##### `exclusiveStartBackupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.exclusiveStartBackupArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.limit"></a>

- *Type:* `number`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.tableName"></a>

- *Type:* `string`

---

##### `timeRangeLowerBound`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.timeRangeLowerBound"></a>

- *Type:* `string`

---

##### `timeRangeUpperBound`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput.property.timeRangeUpperBound"></a>

- *Type:* `string`

---

### DynamoDbListBackupsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListBackupsOutput: dynamodb.DynamoDbListBackupsOutput = { ... }
```

##### `backupSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsOutput.property.backupSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupSummary`](#aws-cdk-sdk.dynamodb.DynamoDbBackupSummary)[]

---

##### `lastEvaluatedBackupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListBackupsOutput.property.lastEvaluatedBackupArn"></a>

- *Type:* `string`

---

### DynamoDbListContributorInsightsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListContributorInsightsInput: dynamodb.DynamoDbListContributorInsightsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbListContributorInsightsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListContributorInsightsOutput: dynamodb.DynamoDbListContributorInsightsOutput = { ... }
```

##### `contributorInsightsSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsOutput.property.contributorInsightsSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary`](#aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsOutput.property.nextToken"></a>

- *Type:* `string`

---

### DynamoDbListExportsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListExportsInput: dynamodb.DynamoDbListExportsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsInput.property.tableArn"></a>

- *Type:* `string`

---

### DynamoDbListExportsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListExportsOutput: dynamodb.DynamoDbListExportsOutput = { ... }
```

##### `exportSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsOutput.property.exportSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportSummary`](#aws-cdk-sdk.dynamodb.DynamoDbExportSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListExportsOutput.property.nextToken"></a>

- *Type:* `string`

---

### DynamoDbListGlobalTablesInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListGlobalTablesInput: dynamodb.DynamoDbListGlobalTablesInput = { ... }
```

##### `exclusiveStartGlobalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput.property.exclusiveStartGlobalTableName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput.property.limit"></a>

- *Type:* `number`

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput.property.regionName"></a>

- *Type:* `string`

---

### DynamoDbListGlobalTablesOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListGlobalTablesOutput: dynamodb.DynamoDbListGlobalTablesOutput = { ... }
```

##### `globalTables`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesOutput.property.globalTables"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTable`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTable)[]

---

##### `lastEvaluatedGlobalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesOutput.property.lastEvaluatedGlobalTableName"></a>

- *Type:* `string`

---

### DynamoDbListTablesInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListTablesInput: dynamodb.DynamoDbListTablesInput = { ... }
```

##### `exclusiveStartTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesInput.property.exclusiveStartTableName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesInput.property.limit"></a>

- *Type:* `number`

---

### DynamoDbListTablesOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListTablesOutput: dynamodb.DynamoDbListTablesOutput = { ... }
```

##### `lastEvaluatedTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesOutput.property.lastEvaluatedTableName"></a>

- *Type:* `string`

---

##### `tableNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTablesOutput.property.tableNames"></a>

- *Type:* `string`[]

---

### DynamoDbListTagsOfResourceInput <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListTagsOfResourceInput: dynamodb.DynamoDbListTagsOfResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### DynamoDbListTagsOfResourceOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbListTagsOfResourceOutput: dynamodb.DynamoDbListTagsOfResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTag`](#aws-cdk-sdk.dynamodb.DynamoDbTag)[]

---

### DynamoDbLocalSecondaryIndex <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbLocalSecondaryIndex: dynamodb.DynamoDbLocalSecondaryIndex = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

### DynamoDbLocalSecondaryIndexDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbLocalSecondaryIndexDescription: dynamodb.DynamoDbLocalSecondaryIndexDescription = { ... }
```

##### `indexArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.indexArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.indexName"></a>

- *Type:* `string`

---

##### `indexSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.indexSizeBytes"></a>

- *Type:* `number`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

### DynamoDbLocalSecondaryIndexInfo <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbLocalSecondaryIndexInfo: dynamodb.DynamoDbLocalSecondaryIndexInfo = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo.property.indexName"></a>

- *Type:* `string`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `projection`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo.property.projection"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProjection`](#aws-cdk-sdk.dynamodb.DynamoDbProjection)

---

### DynamoDbParameterizedStatement <a name="aws-cdk-sdk.dynamodb.DynamoDbParameterizedStatement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbParameterizedStatement: dynamodb.DynamoDbParameterizedStatement = { ... }
```

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbParameterizedStatement.property.statement"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbParameterizedStatement.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)[]

---

### DynamoDbPointInTimeRecoveryDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPointInTimeRecoveryDescription: dynamodb.DynamoDbPointInTimeRecoveryDescription = { ... }
```

##### `earliestRestorableDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription.property.earliestRestorableDateTime"></a>

- *Type:* `string`

---

##### `latestRestorableDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription.property.latestRestorableDateTime"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoveryDescription.property.pointInTimeRecoveryStatus"></a>

- *Type:* `string`

---

### DynamoDbPointInTimeRecoverySpecification <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoverySpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPointInTimeRecoverySpecification: dynamodb.DynamoDbPointInTimeRecoverySpecification = { ... }
```

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled"></a>

- *Type:* `boolean`

---

### DynamoDbProjection <a name="aws-cdk-sdk.dynamodb.DynamoDbProjection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbProjection: dynamodb.DynamoDbProjection = { ... }
```

##### `nonKeyAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProjection.property.nonKeyAttributes"></a>

- *Type:* `string`[]

---

##### `projectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProjection.property.projectionType"></a>

- *Type:* `string`

---

### DynamoDbProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbProvisionedThroughput: dynamodb.DynamoDbProvisionedThroughput = { ... }
```

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbProvisionedThroughputDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbProvisionedThroughputDescription: dynamodb.DynamoDbProvisionedThroughputDescription = { ... }
```

##### `lastDecreaseDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription.property.writeCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbProvisionedThroughputOverride <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbProvisionedThroughputOverride: dynamodb.DynamoDbProvisionedThroughputOverride = { ... }
```

##### `readCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride.property.readCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbPut <a name="aws-cdk-sdk.dynamodb.DynamoDbPut"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPut: dynamodb.DynamoDbPut = { ... }
```

##### `item`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.tableName"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnValuesOnConditionCheckFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPut.property.returnValuesOnConditionCheckFailure"></a>

- *Type:* `string`

---

### DynamoDbPutItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPutItemInput: dynamodb.DynamoDbPutItemInput = { ... }
```

##### `item`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.tableName"></a>

- *Type:* `string`

---

##### `conditionalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.conditionalOperator"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expected`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.expected"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue)}

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `returnItemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.returnItemCollectionMetrics"></a>

- *Type:* `string`

---

##### `returnValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemInput.property.returnValues"></a>

- *Type:* `string`

---

### DynamoDbPutItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPutItemOutput: dynamodb.DynamoDbPutItemOutput = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemOutput.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutItemOutput.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)

---

### DynamoDbPutRequest <a name="aws-cdk-sdk.dynamodb.DynamoDbPutRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbPutRequest: dynamodb.DynamoDbPutRequest = { ... }
```

##### `item`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbPutRequest.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

### DynamoDbQueryInput <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbQueryInput: dynamodb.DynamoDbQueryInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.tableName"></a>

- *Type:* `string`

---

##### `attributesToGet`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.attributesToGet"></a>

- *Type:* `string`[]

---

##### `conditionalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.conditionalOperator"></a>

- *Type:* `string`

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `exclusiveStartKey`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.exclusiveStartKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.filterExpression"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.indexName"></a>

- *Type:* `string`

---

##### `keyConditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.keyConditionExpression"></a>

- *Type:* `string`

---

##### `keyConditions`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.keyConditions"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCondition`](#aws-cdk-sdk.dynamodb.DynamoDbCondition)}

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.limit"></a>

- *Type:* `number`

---

##### `projectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.projectionExpression"></a>

- *Type:* `string`

---

##### `queryFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.queryFilter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCondition`](#aws-cdk-sdk.dynamodb.DynamoDbCondition)}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `scanIndexForward`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.scanIndexForward"></a>

- *Type:* `boolean`

---

##### `select`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryInput.property.select"></a>

- *Type:* `string`

---

### DynamoDbQueryOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbQueryOutput: dynamodb.DynamoDbQueryOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput.property.count"></a>

- *Type:* `number`

---

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `lastEvaluatedKey`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput.property.lastEvaluatedKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `scannedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbQueryOutput.property.scannedCount"></a>

- *Type:* `number`

---

### DynamoDbReplica <a name="aws-cdk-sdk.dynamodb.DynamoDbReplica"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplica: dynamodb.DynamoDbReplica = { ... }
```

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplica.property.regionName"></a>

- *Type:* `string`

---

### DynamoDbReplicaAutoScalingDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaAutoScalingDescription: dynamodb.DynamoDbReplicaAutoScalingDescription = { ... }
```

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription)[]

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription.property.regionName"></a>

- *Type:* `string`

---

##### `replicaProvisionedReadCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription.property.replicaProvisionedReadCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `replicaProvisionedWriteCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription.property.replicaProvisionedWriteCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `replicaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription.property.replicaStatus"></a>

- *Type:* `string`

---

### DynamoDbReplicaAutoScalingUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaAutoScalingUpdate: dynamodb.DynamoDbReplicaAutoScalingUpdate = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate.property.regionName"></a>

- *Type:* `string`

---

##### `replicaGlobalSecondaryIndexUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate.property.replicaGlobalSecondaryIndexUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate)[]

---

##### `replicaProvisionedReadCapacityAutoScalingUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate.property.replicaProvisionedReadCapacityAutoScalingUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

### DynamoDbReplicaDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaDescription: dynamodb.DynamoDbReplicaDescription = { ... }
```

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription)[]

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride)

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.regionName"></a>

- *Type:* `string`

---

##### `replicaInaccessibleDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.replicaInaccessibleDateTime"></a>

- *Type:* `string`

---

##### `replicaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.replicaStatus"></a>

- *Type:* `string`

---

##### `replicaStatusDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.replicaStatusDescription"></a>

- *Type:* `string`

---

##### `replicaStatusPercentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription.property.replicaStatusPercentProgress"></a>

- *Type:* `string`

---

### DynamoDbReplicaGlobalSecondaryIndex <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndex: dynamodb.DynamoDbReplicaGlobalSecondaryIndex = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride)

---

### DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription: dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription.property.indexName"></a>

- *Type:* `string`

---

##### `indexStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription.property.indexStatus"></a>

- *Type:* `string`

---

##### `provisionedReadCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription.property.provisionedReadCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `provisionedWriteCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingDescription.property.provisionedWriteCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

### DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate: dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedReadCapacityAutoScalingUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexAutoScalingUpdate.property.provisionedReadCapacityAutoScalingUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

### DynamoDbReplicaGlobalSecondaryIndexDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndexDescription: dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription = { ... }
```

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexDescription.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride)

---

### DynamoDbReplicaGlobalSecondaryIndexSettingsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndexSettingsDescription: dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.indexName"></a>

- *Type:* `string`

---

##### `indexStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.indexStatus"></a>

- *Type:* `string`

---

##### `provisionedReadCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.provisionedReadCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `provisionedReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.provisionedReadCapacityUnits"></a>

- *Type:* `number`

---

##### `provisionedWriteCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.provisionedWriteCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `provisionedWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription.property.provisionedWriteCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaGlobalSecondaryIndexSettingsUpdate: dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedReadCapacityAutoScalingSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate.property.provisionedReadCapacityAutoScalingSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

##### `provisionedReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate.property.provisionedReadCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbReplicaSettingsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaSettingsDescription: dynamodb.DynamoDbReplicaSettingsDescription = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.regionName"></a>

- *Type:* `string`

---

##### `replicaBillingModeSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaBillingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary)

---

##### `replicaGlobalSecondaryIndexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaGlobalSecondaryIndexSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsDescription)[]

---

##### `replicaProvisionedReadCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaProvisionedReadCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `replicaProvisionedReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaProvisionedReadCapacityUnits"></a>

- *Type:* `number`

---

##### `replicaProvisionedWriteCapacityAutoScalingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaProvisionedWriteCapacityAutoScalingSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsDescription)

---

##### `replicaProvisionedWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaProvisionedWriteCapacityUnits"></a>

- *Type:* `number`

---

##### `replicaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription.property.replicaStatus"></a>

- *Type:* `string`

---

### DynamoDbReplicaSettingsUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaSettingsUpdate: dynamodb.DynamoDbReplicaSettingsUpdate = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate.property.regionName"></a>

- *Type:* `string`

---

##### `replicaGlobalSecondaryIndexSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate.property.replicaGlobalSecondaryIndexSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndexSettingsUpdate)[]

---

##### `replicaProvisionedReadCapacityAutoScalingSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate.property.replicaProvisionedReadCapacityAutoScalingSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

##### `replicaProvisionedReadCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate.property.replicaProvisionedReadCapacityUnits"></a>

- *Type:* `number`

---

### DynamoDbReplicationGroupUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicationGroupUpdate: dynamodb.DynamoDbReplicationGroupUpdate = { ... }
```

##### `create`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate.property.create"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction`](#aws-cdk-sdk.dynamodb.DynamoDbCreateReplicationGroupMemberAction)

---

##### `delete`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate.property.delete"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicationGroupMemberAction`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicationGroupMemberAction)

---

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate.property.update"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction)

---

### DynamoDbReplicaUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbReplicaUpdate: dynamodb.DynamoDbReplicaUpdate = { ... }
```

##### `create`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaUpdate.property.create"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateReplicaAction`](#aws-cdk-sdk.dynamodb.DynamoDbCreateReplicaAction)

---

##### `delete`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbReplicaUpdate.property.delete"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicaAction`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteReplicaAction)

---

### DynamoDbRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbRestoreSummary: dynamodb.DynamoDbRestoreSummary = { ... }
```

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---

### DynamoDbRestoreTableFromBackupInput <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbRestoreTableFromBackupInput: dynamodb.DynamoDbRestoreTableFromBackupInput = { ... }
```

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.backupArn"></a>

- *Type:* `string`

---

##### `targetTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.targetTableName"></a>

- *Type:* `string`

---

##### `billingModeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.billingModeOverride"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.globalSecondaryIndexOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex)[]

---

##### `localSecondaryIndexOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.localSecondaryIndexOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex)[]

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

##### `sseSpecificationOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput.property.sseSpecificationOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbsseSpecification)

---

### DynamoDbRestoreTableFromBackupOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbRestoreTableFromBackupOutput: dynamodb.DynamoDbRestoreTableFromBackupOutput = { ... }
```

##### `tableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupOutput.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbRestoreTableToPointInTimeInput <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbRestoreTableToPointInTimeInput: dynamodb.DynamoDbRestoreTableToPointInTimeInput = { ... }
```

##### `targetTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.targetTableName"></a>

- *Type:* `string`

---

##### `billingModeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.billingModeOverride"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.globalSecondaryIndexOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndex)[]

---

##### `localSecondaryIndexOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.localSecondaryIndexOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndex)[]

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

##### `restoreDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.sourceTableArn"></a>

- *Type:* `string`

---

##### `sourceTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.sourceTableName"></a>

- *Type:* `string`

---

##### `sseSpecificationOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.sseSpecificationOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbsseSpecification)

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput.property.useLatestRestorableTime"></a>

- *Type:* `boolean`

---

### DynamoDbRestoreTableToPointInTimeOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbRestoreTableToPointInTimeOutput: dynamodb.DynamoDbRestoreTableToPointInTimeOutput = { ... }
```

##### `tableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeOutput.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbScanInput <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbScanInput: dynamodb.DynamoDbScanInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.tableName"></a>

- *Type:* `string`

---

##### `attributesToGet`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.attributesToGet"></a>

- *Type:* `string`[]

---

##### `conditionalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.conditionalOperator"></a>

- *Type:* `string`

---

##### `consistentRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.consistentRead"></a>

- *Type:* `boolean`

---

##### `exclusiveStartKey`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.exclusiveStartKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.filterExpression"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.indexName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.limit"></a>

- *Type:* `number`

---

##### `projectionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.projectionExpression"></a>

- *Type:* `string`

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `scanFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.scanFilter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCondition`](#aws-cdk-sdk.dynamodb.DynamoDbCondition)}

---

##### `segment`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.segment"></a>

- *Type:* `number`

---

##### `select`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.select"></a>

- *Type:* `string`

---

##### `totalSegments`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanInput.property.totalSegments"></a>

- *Type:* `number`

---

### DynamoDbScanOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbScanOutput: dynamodb.DynamoDbScanOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput.property.count"></a>

- *Type:* `number`

---

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `lastEvaluatedKey`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput.property.lastEvaluatedKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `scannedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbScanOutput.property.scannedCount"></a>

- *Type:* `number`

---

### DynamoDbSourceTableDetails <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbSourceTableDetails: dynamodb.DynamoDbSourceTableDetails = { ... }
```

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

##### `tableCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.tableCreationDateTime"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.tableName"></a>

- *Type:* `string`

---

##### `billingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.billingMode"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.itemCount"></a>

- *Type:* `number`

---

##### `tableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.tableArn"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableDetails.property.tableSizeBytes"></a>

- *Type:* `number`

---

### DynamoDbSourceTableFeatureDetails <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbSourceTableFeatureDetails: dynamodb.DynamoDbSourceTableFeatureDetails = { ... }
```

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo)[]

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo)[]

---

##### `sseDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseDescription`](#aws-cdk-sdk.dynamodb.DynamoDbsseDescription)

---

##### `streamDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails.property.streamDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification)

---

##### `timeToLiveDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbSourceTableFeatureDetails.property.timeToLiveDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription)

---

### DynamoDbsseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbsseDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbsseDescription: dynamodb.DynamoDbsseDescription = { ... }
```

##### `inaccessibleEncryptionDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseDescription.property.status"></a>

- *Type:* `string`

---

### DynamoDbsseSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDbsseSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbsseSpecification: dynamodb.DynamoDbsseSpecification = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseSpecification.property.enabled"></a>

- *Type:* `boolean`

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseSpecification.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `sseType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbsseSpecification.property.sseType"></a>

- *Type:* `string`

---

### DynamoDbStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbStreamSpecification: dynamodb.DynamoDbStreamSpecification = { ... }
```

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---

### DynamoDbTableAutoScalingDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTableAutoScalingDescription: dynamodb.DynamoDbTableAutoScalingDescription = { ... }
```

##### `replicas`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription)[]

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription.property.tableStatus"></a>

- *Type:* `string`

---

### DynamoDbTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTableDescription: dynamodb.DynamoDbTableDescription = { ... }
```

##### `archivalSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDbArchivalSummary)

---

##### `attributeDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDbBillingModeSummary)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputDescription)

---

##### `replicas`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreSummary)

---

##### `sseDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseDescription`](#aws-cdk-sdk.dynamodb.DynamoDbsseDescription)

---

##### `streamSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification)

---

##### `tableArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTableDescription.property.tableStatus"></a>

- *Type:* `string`

---

### DynamoDbTag <a name="aws-cdk-sdk.dynamodb.DynamoDbTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTag: dynamodb.DynamoDbTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTag.property.value"></a>

- *Type:* `string`

---

### DynamoDbTagResourceInput <a name="aws-cdk-sdk.dynamodb.DynamoDbTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTagResourceInput: dynamodb.DynamoDbTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTag`](#aws-cdk-sdk.dynamodb.DynamoDbTag)[]

---

### DynamoDbTimeToLiveDescription <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTimeToLiveDescription: dynamodb.DynamoDbTimeToLiveDescription = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription.property.attributeName"></a>

- *Type:* `string`

---

##### `timeToLiveStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveDescription.property.timeToLiveStatus"></a>

- *Type:* `string`

---

### DynamoDbTimeToLiveSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTimeToLiveSpecification: dynamodb.DynamoDbTimeToLiveSpecification = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification.property.attributeName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification.property.enabled"></a>

- *Type:* `boolean`

---

### DynamoDbTransactGetItem <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactGetItem: dynamodb.DynamoDbTransactGetItem = { ... }
```

##### `fetch`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItem.property.fetch"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGet`](#aws-cdk-sdk.dynamodb.DynamoDbGet)

---

### DynamoDbTransactGetItemsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactGetItemsInput: dynamodb.DynamoDbTransactGetItemsInput = { ... }
```

##### `transactItems`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput.property.transactItems"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactGetItem`](#aws-cdk-sdk.dynamodb.DynamoDbTransactGetItem)[]

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

### DynamoDbTransactGetItemsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactGetItemsOutput: dynamodb.DynamoDbTransactGetItemsOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `responses`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsOutput.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemResponse`](#aws-cdk-sdk.dynamodb.DynamoDbItemResponse)[]

---

### DynamoDbTransactWriteItem <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactWriteItem: dynamodb.DynamoDbTransactWriteItem = { ... }
```

##### `conditionCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem.property.conditionCheck"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConditionCheck`](#aws-cdk-sdk.dynamodb.DynamoDbConditionCheck)

---

##### `delete`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem.property.delete"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDelete`](#aws-cdk-sdk.dynamodb.DynamoDbDelete)

---

##### `put`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem.property.put"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPut`](#aws-cdk-sdk.dynamodb.DynamoDbPut)

---

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem.property.update"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbUpdate)

---

### DynamoDbTransactWriteItemsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactWriteItemsInput: dynamodb.DynamoDbTransactWriteItemsInput = { ... }
```

##### `transactItems`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput.property.transactItems"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem`](#aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItem)[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `returnItemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput.property.returnItemCollectionMetrics"></a>

- *Type:* `string`

---

### DynamoDbTransactWriteItemsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbTransactWriteItemsOutput: dynamodb.DynamoDbTransactWriteItemsOutput = { ... }
```

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `itemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsOutput.property.itemCollectionMetrics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)[]}

---

### DynamoDbUntagResourceInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUntagResourceInput: dynamodb.DynamoDbUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### DynamoDbUpdate <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdate: dynamodb.DynamoDbUpdate = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.tableName"></a>

- *Type:* `string`

---

##### `updateExpression`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.updateExpression"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnValuesOnConditionCheckFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdate.property.returnValuesOnConditionCheckFailure"></a>

- *Type:* `string`

---

### DynamoDbUpdateContinuousBackupsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateContinuousBackupsInput: dynamodb.DynamoDbUpdateContinuousBackupsInput = { ... }
```

##### `pointInTimeRecoverySpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput.property.pointInTimeRecoverySpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoverySpecification`](#aws-cdk-sdk.dynamodb.DynamoDbPointInTimeRecoverySpecification)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbUpdateContinuousBackupsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateContinuousBackupsOutput: dynamodb.DynamoDbUpdateContinuousBackupsOutput = { ... }
```

##### `continuousBackupsDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsOutput.property.continuousBackupsDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbContinuousBackupsDescription)

---

### DynamoDbUpdateContributorInsightsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateContributorInsightsInput: dynamodb.DynamoDbUpdateContributorInsightsInput = { ... }
```

##### `contributorInsightsAction`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput.property.contributorInsightsAction"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput.property.tableName"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput.property.indexName"></a>

- *Type:* `string`

---

### DynamoDbUpdateContributorInsightsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateContributorInsightsOutput: dynamodb.DynamoDbUpdateContributorInsightsOutput = { ... }
```

##### `contributorInsightsStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsOutput.property.contributorInsightsStatus"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsOutput.property.indexName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsOutput.property.tableName"></a>

- *Type:* `string`

---

### DynamoDbUpdateGlobalSecondaryIndexAction <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateGlobalSecondaryIndexAction: dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction.property.indexName"></a>

- *Type:* `string`

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalSecondaryIndexAction.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

### DynamoDbUpdateGlobalTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateGlobalTableInput: dynamodb.DynamoDbUpdateGlobalTableInput = { ... }
```

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicaUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput.property.replicaUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaUpdate)[]

---

### DynamoDbUpdateGlobalTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateGlobalTableOutput: dynamodb.DynamoDbUpdateGlobalTableOutput = { ... }
```

##### `globalTableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableOutput.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTableDescription)

---

### DynamoDbUpdateGlobalTableSettingsInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateGlobalTableSettingsInput: dynamodb.DynamoDbUpdateGlobalTableSettingsInput = { ... }
```

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.globalTableName"></a>

- *Type:* `string`

---

##### `globalTableBillingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.globalTableBillingMode"></a>

- *Type:* `string`

---

##### `globalTableGlobalSecondaryIndexSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.globalTableGlobalSecondaryIndexSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTableGlobalSecondaryIndexSettingsUpdate)[]

---

##### `globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

##### `globalTableProvisionedWriteCapacityUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.globalTableProvisionedWriteCapacityUnits"></a>

- *Type:* `number`

---

##### `replicaSettingsUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput.property.replicaSettingsUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsUpdate)[]

---

### DynamoDbUpdateGlobalTableSettingsOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateGlobalTableSettingsOutput: dynamodb.DynamoDbUpdateGlobalTableSettingsOutput = { ... }
```

##### `globalTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsOutput.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicaSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsOutput.property.replicaSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription)[]

---

### DynamoDbUpdateItemInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateItemInput: dynamodb.DynamoDbUpdateItemInput = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.key"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.tableName"></a>

- *Type:* `string`

---

##### `attributeUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.attributeUpdates"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValueUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValueUpdate)}

---

##### `conditionalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.conditionalOperator"></a>

- *Type:* `string`

---

##### `conditionExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.conditionExpression"></a>

- *Type:* `string`

---

##### `expected`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.expected"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbExpectedAttributeValue)}

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.expressionAttributeNames"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `expressionAttributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.expressionAttributeValues"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `returnConsumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.returnConsumedCapacity"></a>

- *Type:* `string`

---

##### `returnItemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.returnItemCollectionMetrics"></a>

- *Type:* `string`

---

##### `returnValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.returnValues"></a>

- *Type:* `string`

---

##### `updateExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput.property.updateExpression"></a>

- *Type:* `string`

---

### DynamoDbUpdateItemOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateItemOutput: dynamodb.DynamoDbUpdateItemOutput = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemOutput.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemOutput.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateItemOutput.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)

---

### DynamoDbUpdateReplicationGroupMemberAction <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateReplicationGroupMemberAction: dynamodb.DynamoDbUpdateReplicationGroupMemberAction = { ... }
```

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction.property.regionName"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaGlobalSecondaryIndex)[]

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction.property.kmsMasterKeyId"></a>

- *Type:* `string`

---

##### `provisionedThroughputOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateReplicationGroupMemberAction.property.provisionedThroughputOverride"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughputOverride)

---

### DynamoDbUpdateTableInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTableInput: dynamodb.DynamoDbUpdateTableInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.tableName"></a>

- *Type:* `string`

---

##### `attributeDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.billingMode"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.globalSecondaryIndexUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexUpdate)[]

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDbProvisionedThroughput)

---

##### `replicaUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.replicaUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicationGroupUpdate)[]

---

##### `sseSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.sseSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbsseSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbsseSpecification)

---

##### `streamSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbStreamSpecification)

---

### DynamoDbUpdateTableOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTableOutput: dynamodb.DynamoDbUpdateTableOutput = { ... }
```

##### `tableDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableOutput.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableDescription)

---

### DynamoDbUpdateTableReplicaAutoScalingInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTableReplicaAutoScalingInput: dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput.property.tableName"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput.property.globalSecondaryIndexUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexAutoScalingUpdate)[]

---

##### `provisionedWriteCapacityAutoScalingUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput.property.provisionedWriteCapacityAutoScalingUpdate"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbAutoScalingSettingsUpdate)

---

##### `replicaUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput.property.replicaUpdates"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingUpdate)[]

---

### DynamoDbUpdateTableReplicaAutoScalingOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTableReplicaAutoScalingOutput: dynamodb.DynamoDbUpdateTableReplicaAutoScalingOutput = { ... }
```

##### `tableAutoScalingDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingOutput.property.tableAutoScalingDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbTableAutoScalingDescription)

---

### DynamoDbUpdateTimeToLiveInput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTimeToLiveInput: dynamodb.DynamoDbUpdateTimeToLiveInput = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput.property.tableName"></a>

- *Type:* `string`

---

##### `timeToLiveSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput.property.timeToLiveSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification)

---

### DynamoDbUpdateTimeToLiveOutput <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbUpdateTimeToLiveOutput: dynamodb.DynamoDbUpdateTimeToLiveOutput = { ... }
```

##### `timeToLiveSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveOutput.property.timeToLiveSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification`](#aws-cdk-sdk.dynamodb.DynamoDbTimeToLiveSpecification)

---

### DynamoDbWriteRequest <a name="aws-cdk-sdk.dynamodb.DynamoDbWriteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

const dynamoDbWriteRequest: dynamodb.DynamoDbWriteRequest = { ... }
```

##### `deleteRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbWriteRequest.property.deleteRequest"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteRequest`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteRequest)

---

##### `putRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDbWriteRequest.property.putRequest"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutRequest`](#aws-cdk-sdk.dynamodb.DynamoDbPutRequest)

---

## Classes <a name="Classes"></a>

### DynamoDBResponsesBatchExecuteStatement <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesBatchExecuteStatement(__scope: Construct, __resources: string[], __input: DynamoDbBatchExecuteStatementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchExecuteStatementInput)

---



#### Properties <a name="Properties"></a>

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchExecuteStatement.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse`](#aws-cdk-sdk.dynamodb.DynamoDbBatchStatementResponse)[]

---


### DynamoDBResponsesBatchGetItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesBatchGetItem(__scope: Construct, __resources: string[], __input: DynamoDbBatchGetItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchGetItemInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.property.responses"></a>

- *Type:* {[ key: string ]: {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]}

---

##### `unprocessedKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchGetItem.property.unprocessedKeys"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes`](#aws-cdk-sdk.dynamodb.DynamoDbKeysAndAttributes)}

---


### DynamoDBResponsesBatchWriteItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesBatchWriteItem(__scope: Construct, __resources: string[], __input: DynamoDbBatchWriteItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbBatchWriteItemInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `itemCollectionMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.property.itemCollectionMetrics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)[]}

---

##### `unprocessedItems`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesBatchWriteItem.property.unprocessedItems"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbWriteRequest`](#aws-cdk-sdk.dynamodb.DynamoDbWriteRequest)[]}

---


### DynamoDBResponsesCreateBackup <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateBackup(__scope: Construct, __resources: string[], __input: DynamoDbCreateBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackup.property.backupDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails)

---


### DynamoDBResponsesCreateBackupBackupDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateBackupBackupDetails(__scope: Construct, __resources: string[], __input: DynamoDbCreateBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupArn"></a>

- *Type:* `string`

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupCreationDateTime"></a>

- *Type:* `string`

---

##### `backupExpiryDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupExpiryDateTime"></a>

- *Type:* `string`

---

##### `backupName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupName"></a>

- *Type:* `string`

---

##### `backupSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupSizeBytes"></a>

- *Type:* `number`

---

##### `backupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupStatus"></a>

- *Type:* `string`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateBackupBackupDetails.property.backupType"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateGlobalTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateGlobalTable(__scope: Construct, __resources: string[], __input: DynamoDbCreateGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `globalTableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTable.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription)

---


### DynamoDBResponsesCreateGlobalTableGlobalTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbCreateGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.property.globalTableArn"></a>

- *Type:* `string`

---

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.property.globalTableName"></a>

- *Type:* `string`

---

##### `globalTableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.property.globalTableStatus"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateGlobalTableGlobalTableDescription.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---


### DynamoDBResponsesCreateTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTable(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `tableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTable.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription)

---


### DynamoDBResponsesCreateTableTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateTableTableDescriptionArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesCreateTableTableDescriptionRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateTableTableDescriptionSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesCreateTableTableDescriptionStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbCreateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbCreateTableInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesCreateTableTableDescriptionStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteBackup <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackup(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackup.property.backupDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription)

---


### DynamoDBResponsesDeleteBackupBackupDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.property.backupDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails)

---

##### `sourceTableDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.property.sourceTableDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails)

---

##### `sourceTableFeatureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescription.property.sourceTableFeatureDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails)

---


### DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupArn"></a>

- *Type:* `string`

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupCreationDateTime"></a>

- *Type:* `string`

---

##### `backupExpiryDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupExpiryDateTime"></a>

- *Type:* `string`

---

##### `backupName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupName"></a>

- *Type:* `string`

---

##### `backupSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupSizeBytes"></a>

- *Type:* `number`

---

##### `backupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupStatus"></a>

- *Type:* `string`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionBackupDetails.property.backupType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.billingMode"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.tableArn"></a>

- *Type:* `string`

---

##### `tableCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.tableCreationDateTime"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetails.property.tableSizeBytes"></a>

- *Type:* `number`

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo)[]

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription)

---

##### `streamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.property.streamDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription)

---

##### `timeToLiveDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetails.property.timeToLiveDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription)

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteBackupInput)

---



#### Properties <a name="Properties"></a>

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.property.attributeName"></a>

- *Type:* `string`

---

##### `timeToLiveStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.property.timeToLiveStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteItem(__scope: Construct, __resources: string[], __input: DynamoDbDeleteItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItem.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics)

---


### DynamoDBResponsesDeleteItemConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbDeleteItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDeleteItemConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbDeleteItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDeleteItemItemCollectionMetrics <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics(__scope: Construct, __resources: string[], __input: DynamoDbDeleteItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteItemInput)

---



#### Properties <a name="Properties"></a>

##### `itemCollectionKey`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.property.itemCollectionKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `sizeEstimateRangeGb`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteItemItemCollectionMetrics.property.sizeEstimateRangeGb"></a>

- *Type:* `number`[]

---


### DynamoDBResponsesDeleteTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTable(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `tableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTable.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription)

---


### DynamoDBResponsesDeleteTableTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteTableTableDescriptionSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbDeleteTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDeleteTableInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDeleteTableTableDescriptionStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeBackup <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackup(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackup.property.backupDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription)

---


### DynamoDBResponsesDescribeBackupBackupDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.property.backupDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails)

---

##### `sourceTableDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.property.sourceTableDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails)

---

##### `sourceTableFeatureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescription.property.sourceTableFeatureDetails"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails)

---


### DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupArn"></a>

- *Type:* `string`

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupCreationDateTime"></a>

- *Type:* `string`

---

##### `backupExpiryDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupExpiryDateTime"></a>

- *Type:* `string`

---

##### `backupName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupName"></a>

- *Type:* `string`

---

##### `backupSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupSizeBytes"></a>

- *Type:* `number`

---

##### `backupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupStatus"></a>

- *Type:* `string`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionBackupDetails.property.backupType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.billingMode"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.tableArn"></a>

- *Type:* `string`

---

##### `tableCreationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.tableCreationDateTime"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetails.property.tableSizeBytes"></a>

- *Type:* `number`

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableDetailsProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexInfo)[]

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexInfo)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription)

---

##### `streamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.property.streamDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription)

---

##### `timeToLiveDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetails.property.timeToLiveDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription)

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsStreamDescription.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeBackupInput)

---



#### Properties <a name="Properties"></a>

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.property.attributeName"></a>

- *Type:* `string`

---

##### `timeToLiveStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeBackupBackupDescriptionSourceTableFeatureDetailsTimeToLiveDescription.property.timeToLiveStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeContinuousBackups <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeContinuousBackups(__scope: Construct, __resources: string[], __input: DynamoDbDescribeContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `continuousBackupsDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackups.property.continuousBackupsDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription)

---


### DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `continuousBackupsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.property.continuousBackupsStatus"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescription.property.pointInTimeRecoveryDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription)

---


### DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `earliestRestorableDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.earliestRestorableDateTime"></a>

- *Type:* `string`

---

##### `latestRestorableDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.latestRestorableDateTime"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.pointInTimeRecoveryStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeContributorInsights <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeContributorInsights(__scope: Construct, __resources: string[], __input: DynamoDbDescribeContributorInsightsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput)

---



#### Properties <a name="Properties"></a>

##### `contributorInsightsRuleList`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.contributorInsightsRuleList"></a>

- *Type:* `string`[]

---

##### `contributorInsightsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.contributorInsightsStatus"></a>

- *Type:* `string`

---

##### `failureException`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.failureException"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException)

---

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.indexName"></a>

- *Type:* `string`

---

##### `lastUpdateDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.lastUpdateDateTime"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsights.property.tableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeContributorInsightsFailureException <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException(__scope: Construct, __resources: string[], __input: DynamoDbDescribeContributorInsightsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeContributorInsightsInput)

---



#### Properties <a name="Properties"></a>

##### `exceptionDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.property.exceptionDescription"></a>

- *Type:* `string`

---

##### `exceptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeContributorInsightsFailureException.property.exceptionName"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeEndpoints <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeEndpoints.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeEndpoints(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeEndpoints.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbEndpoint`](#aws-cdk-sdk.dynamodb.DynamoDbEndpoint)[]

---


### DynamoDBResponsesDescribeExport <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeExport(__scope: Construct, __resources: string[], __input: DynamoDbDescribeExportInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput)

---



#### Properties <a name="Properties"></a>

##### `exportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExport.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription)

---


### DynamoDBResponsesDescribeExportExportDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeExportExportDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeExportInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeExportInput)

---



#### Properties <a name="Properties"></a>

##### `billedSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.billedSizeBytes"></a>

- *Type:* `number`

---

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.clientToken"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.endTime"></a>

- *Type:* `string`

---

##### `exportArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.exportArn"></a>

- *Type:* `string`

---

##### `exportFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.exportFormat"></a>

- *Type:* `string`

---

##### `exportManifest`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.exportManifest"></a>

- *Type:* `string`

---

##### `exportStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.exportStatus"></a>

- *Type:* `string`

---

##### `exportTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.exportTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.failureCode"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.failureMessage"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3BucketOwner`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.s3BucketOwner"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.s3Prefix"></a>

- *Type:* `string`

---

##### `s3SseAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.s3SseAlgorithm"></a>

- *Type:* `string`

---

##### `s3SseKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.s3SseKmsKeyId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.startTime"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeExportExportDescription.property.tableId"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeGlobalTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeGlobalTable(__scope: Construct, __resources: string[], __input: DynamoDbDescribeGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `globalTableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTable.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription)

---


### DynamoDBResponsesDescribeGlobalTableGlobalTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.property.globalTableArn"></a>

- *Type:* `string`

---

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.property.globalTableName"></a>

- *Type:* `string`

---

##### `globalTableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.property.globalTableStatus"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableGlobalTableDescription.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---


### DynamoDBResponsesDescribeGlobalTableSettings <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeGlobalTableSettings(__scope: Construct, __resources: string[], __input: DynamoDbDescribeGlobalTableSettingsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeGlobalTableSettingsInput)

---



#### Properties <a name="Properties"></a>

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicaSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeGlobalTableSettings.property.replicaSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription)[]

---


### DynamoDBResponsesDescribeKinesisStreamingDestination <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination(__scope: Construct, __resources: string[], __input: DynamoDbDescribeKinesisStreamingDestinationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeKinesisStreamingDestinationInput)

---



#### Properties <a name="Properties"></a>

##### `kinesisDataStreamDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.property.kinesisDataStreamDestinations"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisDataStreamDestination)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeKinesisStreamingDestination.property.tableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeLimits <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountMaxReadCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.property.accountMaxReadCapacityUnits"></a>

- *Type:* `number`

---

##### `accountMaxWriteCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.property.accountMaxWriteCapacityUnits"></a>

- *Type:* `number`

---

##### `tableMaxReadCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.property.tableMaxReadCapacityUnits"></a>

- *Type:* `number`

---

##### `tableMaxWriteCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeLimits.property.tableMaxWriteCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDescribeTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTable(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTable.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable)

---


### DynamoDBResponsesDescribeTableReplicaAutoScaling <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableReplicaAutoScalingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput)

---



#### Properties <a name="Properties"></a>

##### `tableAutoScalingDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScaling.property.tableAutoScalingDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription)

---


### DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableReplicaAutoScalingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableReplicaAutoScalingInput)

---



#### Properties <a name="Properties"></a>

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableReplicaAutoScalingTableAutoScalingDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTable(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTable.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTableArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTableBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTableProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesDescribeTableTableRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTableSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTableTableStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTableInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTableTableStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesDescribeTimeToLive <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTimeToLive(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTimeToLiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput)

---



#### Properties <a name="Properties"></a>

##### `timeToLiveDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLive.property.timeToLiveDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription)

---


### DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription(__scope: Construct, __resources: string[], __input: DynamoDbDescribeTimeToLiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbDescribeTimeToLiveInput)

---



#### Properties <a name="Properties"></a>

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.property.attributeName"></a>

- *Type:* `string`

---

##### `timeToLiveStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDescribeTimeToLiveTimeToLiveDescription.property.timeToLiveStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesDisableKinesisStreamingDestination <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination(__scope: Construct, __resources: string[], __input: DynamoDbKinesisStreamingDestinationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput)

---



#### Properties <a name="Properties"></a>

##### `destinationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.property.destinationStatus"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.property.streamArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesDisableKinesisStreamingDestination.property.tableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesEnableKinesisStreamingDestination <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination(__scope: Construct, __resources: string[], __input: DynamoDbKinesisStreamingDestinationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput`](#aws-cdk-sdk.dynamodb.DynamoDbKinesisStreamingDestinationInput)

---



#### Properties <a name="Properties"></a>

##### `destinationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.property.destinationStatus"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.property.streamArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesEnableKinesisStreamingDestination.property.tableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesExecuteStatement <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesExecuteStatement(__scope: Construct, __resources: string[], __input: DynamoDbExecuteStatementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput`](#aws-cdk-sdk.dynamodb.DynamoDbExecuteStatementInput)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteStatement.property.nextToken"></a>

- *Type:* `string`

---


### DynamoDBResponsesExecuteTransaction <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesExecuteTransaction(__scope: Construct, __resources: string[], __input: DynamoDbExecuteTransactionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput`](#aws-cdk-sdk.dynamodb.DynamoDbExecuteTransactionInput)

---



#### Properties <a name="Properties"></a>

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExecuteTransaction.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemResponse`](#aws-cdk-sdk.dynamodb.DynamoDbItemResponse)[]

---


### DynamoDBResponsesExportTableToPointInTime <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesExportTableToPointInTime(__scope: Construct, __resources: string[], __input: DynamoDbExportTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `exportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTime.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription)

---


### DynamoDBResponsesExportTableToPointInTimeExportDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription(__scope: Construct, __resources: string[], __input: DynamoDbExportTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbExportTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `billedSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.billedSizeBytes"></a>

- *Type:* `number`

---

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.clientToken"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.endTime"></a>

- *Type:* `string`

---

##### `exportArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.exportArn"></a>

- *Type:* `string`

---

##### `exportFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.exportFormat"></a>

- *Type:* `string`

---

##### `exportManifest`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.exportManifest"></a>

- *Type:* `string`

---

##### `exportStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.exportStatus"></a>

- *Type:* `string`

---

##### `exportTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.exportTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.failureCode"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.failureMessage"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3BucketOwner`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.s3BucketOwner"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.s3Prefix"></a>

- *Type:* `string`

---

##### `s3SseAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.s3SseAlgorithm"></a>

- *Type:* `string`

---

##### `s3SseKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.s3SseKmsKeyId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.startTime"></a>

- *Type:* `string`

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesExportTableToPointInTimeExportDescription.property.tableId"></a>

- *Type:* `string`

---


### DynamoDBResponsesFetchItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesFetchItem(__scope: Construct, __resources: string[], __input: DynamoDbGetItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbGetItemInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity)

---

##### `item`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItem.property.item"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---


### DynamoDBResponsesFetchItemConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesFetchItemConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbGetItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbGetItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesFetchItemConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbGetItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGetItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbGetItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesFetchItemConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesListBackups <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListBackups(__scope: Construct, __resources: string[], __input: DynamoDbListBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `backupSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.property.backupSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbBackupSummary`](#aws-cdk-sdk.dynamodb.DynamoDbBackupSummary)[]

---

##### `lastEvaluatedBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListBackups.property.lastEvaluatedBackupArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesListContributorInsights <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListContributorInsights(__scope: Construct, __resources: string[], __input: DynamoDbListContributorInsightsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListContributorInsightsInput)

---



#### Properties <a name="Properties"></a>

##### `contributorInsightsSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.property.contributorInsightsSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary`](#aws-cdk-sdk.dynamodb.DynamoDbContributorInsightsSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListContributorInsights.property.nextToken"></a>

- *Type:* `string`

---


### DynamoDBResponsesListExports <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListExports(__scope: Construct, __resources: string[], __input: DynamoDbListExportsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListExportsInput`](#aws-cdk-sdk.dynamodb.DynamoDbListExportsInput)

---



#### Properties <a name="Properties"></a>

##### `exportSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.property.exportSummaries"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbExportSummary`](#aws-cdk-sdk.dynamodb.DynamoDbExportSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListExports.property.nextToken"></a>

- *Type:* `string`

---


### DynamoDBResponsesListGlobalTables <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListGlobalTables(__scope: Construct, __resources: string[], __input: DynamoDbListGlobalTablesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput`](#aws-cdk-sdk.dynamodb.DynamoDbListGlobalTablesInput)

---



#### Properties <a name="Properties"></a>

##### `globalTables`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.property.globalTables"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalTable`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalTable)[]

---

##### `lastEvaluatedGlobalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListGlobalTables.property.lastEvaluatedGlobalTableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesListTables <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListTables(__scope: Construct, __resources: string[], __input: DynamoDbListTablesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListTablesInput`](#aws-cdk-sdk.dynamodb.DynamoDbListTablesInput)

---



#### Properties <a name="Properties"></a>

##### `lastEvaluatedTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.property.lastEvaluatedTableName"></a>

- *Type:* `string`

---

##### `tableNames`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTables.property.tableNames"></a>

- *Type:* `string`[]

---


### DynamoDBResponsesListTagsOfResource <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesListTagsOfResource(__scope: Construct, __resources: string[], __input: DynamoDbListTagsOfResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput`](#aws-cdk-sdk.dynamodb.DynamoDbListTagsOfResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesListTagsOfResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTag`](#aws-cdk-sdk.dynamodb.DynamoDbTag)[]

---


### DynamoDBResponsesPutItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesPutItem(__scope: Construct, __resources: string[], __input: DynamoDbPutItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbPutItemInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItem.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics)

---


### DynamoDBResponsesPutItemConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesPutItemConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbPutItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbPutItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesPutItemConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbPutItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbPutItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesPutItemItemCollectionMetrics <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics(__scope: Construct, __resources: string[], __input: DynamoDbPutItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbPutItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbPutItemInput)

---



#### Properties <a name="Properties"></a>

##### `itemCollectionKey`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.property.itemCollectionKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `sizeEstimateRangeGb`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesPutItemItemCollectionMetrics.property.sizeEstimateRangeGb"></a>

- *Type:* `number`[]

---


### DynamoDBResponsesQuery <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesQuery(__scope: Construct, __resources: string[], __input: DynamoDbQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbQueryInput`](#aws-cdk-sdk.dynamodb.DynamoDbQueryInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity)

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.property.count"></a>

- *Type:* `number`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `lastEvaluatedKey`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.property.lastEvaluatedKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `scannedCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQuery.property.scannedCount"></a>

- *Type:* `number`

---


### DynamoDBResponsesQueryConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesQueryConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbQueryInput`](#aws-cdk-sdk.dynamodb.DynamoDbQueryInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesQueryConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesQueryConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbQueryInput`](#aws-cdk-sdk.dynamodb.DynamoDbQueryInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesQueryConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesRestoreTableFromBackup <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackup(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `tableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackup.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription)

---


### DynamoDBResponsesRestoreTableFromBackupTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableFromBackupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableFromBackupInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableFromBackupTableDescriptionStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTime <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTime(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `tableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTime.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription)

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbRestoreTableToPointInTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput`](#aws-cdk-sdk.dynamodb.DynamoDbRestoreTableToPointInTimeInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesRestoreTableToPointInTimeTableDescriptionStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesScan <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesScan(__scope: Construct, __resources: string[], __input: DynamoDbScanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbScanInput`](#aws-cdk-sdk.dynamodb.DynamoDbScanInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity)

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.property.count"></a>

- *Type:* `number`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.property.items"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}[]

---

##### `lastEvaluatedKey`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.property.lastEvaluatedKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `scannedCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScan.property.scannedCount"></a>

- *Type:* `number`

---


### DynamoDBResponsesScanConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesScanConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbScanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbScanInput`](#aws-cdk-sdk.dynamodb.DynamoDbScanInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesScanConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesScanConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbScanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbScanInput`](#aws-cdk-sdk.dynamodb.DynamoDbScanInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesScanConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesTransactGetItems <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesTransactGetItems(__scope: Construct, __resources: string[], __input: DynamoDbTransactGetItemsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput`](#aws-cdk-sdk.dynamodb.DynamoDbTransactGetItemsInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `responses`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactGetItems.property.responses"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbItemResponse`](#aws-cdk-sdk.dynamodb.DynamoDbItemResponse)[]

---


### DynamoDBResponsesTransactWriteItems <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesTransactWriteItems(__scope: Construct, __resources: string[], __input: DynamoDbTransactWriteItemsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput`](#aws-cdk-sdk.dynamodb.DynamoDbTransactWriteItemsInput)

---



#### Properties <a name="Properties"></a>

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbConsumedCapacity)[]

---

##### `itemCollectionMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesTransactWriteItems.property.itemCollectionMetrics"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDbItemCollectionMetrics)[]}

---


### DynamoDBResponsesUpdateContinuousBackups <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateContinuousBackups(__scope: Construct, __resources: string[], __input: DynamoDbUpdateContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `continuousBackupsDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackups.property.continuousBackupsDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription)

---


### DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `continuousBackupsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.property.continuousBackupsStatus"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescription.property.pointInTimeRecoveryDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription)

---


### DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateContinuousBackupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContinuousBackupsInput)

---



#### Properties <a name="Properties"></a>

##### `earliestRestorableDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.earliestRestorableDateTime"></a>

- *Type:* `string`

---

##### `latestRestorableDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.latestRestorableDateTime"></a>

- *Type:* `string`

---

##### `pointInTimeRecoveryStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContinuousBackupsContinuousBackupsDescriptionPointInTimeRecoveryDescription.property.pointInTimeRecoveryStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateContributorInsights <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateContributorInsights(__scope: Construct, __resources: string[], __input: DynamoDbUpdateContributorInsightsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateContributorInsightsInput)

---



#### Properties <a name="Properties"></a>

##### `contributorInsightsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.property.contributorInsightsStatus"></a>

- *Type:* `string`

---

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.property.indexName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateContributorInsights.property.tableName"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateGlobalTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateGlobalTable(__scope: Construct, __resources: string[], __input: DynamoDbUpdateGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `globalTableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTable.property.globalTableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription)

---


### DynamoDBResponsesUpdateGlobalTableGlobalTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateGlobalTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableInput)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.property.globalTableArn"></a>

- *Type:* `string`

---

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.property.globalTableName"></a>

- *Type:* `string`

---

##### `globalTableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.property.globalTableStatus"></a>

- *Type:* `string`

---

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableGlobalTableDescription.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---


### DynamoDBResponsesUpdateGlobalTableSettings <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateGlobalTableSettings(__scope: Construct, __resources: string[], __input: DynamoDbUpdateGlobalTableSettingsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateGlobalTableSettingsInput)

---



#### Properties <a name="Properties"></a>

##### `globalTableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.property.globalTableName"></a>

- *Type:* `string`

---

##### `replicaSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateGlobalTableSettings.property.replicaSettings"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaSettingsDescription)[]

---


### DynamoDBResponsesUpdateItem <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateItem(__scope: Construct, __resources: string[], __input: DynamoDbUpdateItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.property.attributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `consumedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.property.consumedCapacity"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity)

---

##### `itemCollectionMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItem.property.itemCollectionMetrics"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics)

---


### DynamoDBResponsesUpdateItemConsumedCapacity <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity(__scope: Construct, __resources: string[], __input: DynamoDbUpdateItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.capacityUnits"></a>

- *Type:* `number`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.globalSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.localSecondaryIndexes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbCapacity`](#aws-cdk-sdk.dynamodb.DynamoDbCapacity)}

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.table"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.tableName"></a>

- *Type:* `string`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacity.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesUpdateItemConsumedCapacityTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable(__scope: Construct, __resources: string[], __input: DynamoDbUpdateItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput)

---



#### Properties <a name="Properties"></a>

##### `capacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.property.capacityUnits"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemConsumedCapacityTable.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesUpdateItemItemCollectionMetrics <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics(__scope: Construct, __resources: string[], __input: DynamoDbUpdateItemInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateItemInput)

---



#### Properties <a name="Properties"></a>

##### `itemCollectionKey`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.property.itemCollectionKey"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.dynamodb.DynamoDbAttributeValue`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeValue)}

---

##### `sizeEstimateRangeGb`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateItemItemCollectionMetrics.property.sizeEstimateRangeGb"></a>

- *Type:* `number`[]

---


### DynamoDBResponsesUpdateTable <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTable(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `tableDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTable.property.tableDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription)

---


### DynamoDBResponsesUpdateTableReplicaAutoScaling <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableReplicaAutoScalingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput)

---



#### Properties <a name="Properties"></a>

##### `tableAutoScalingDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScaling.property.tableAutoScalingDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription)

---


### DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableReplicaAutoScalingInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableReplicaAutoScalingInput)

---



#### Properties <a name="Properties"></a>

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaAutoScalingDescription)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableReplicaAutoScalingTableAutoScalingDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.archivalSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary)

---

##### `attributeDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.attributeDefinitions"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition`](#aws-cdk-sdk.dynamodb.DynamoDbAttributeDefinition)[]

---

##### `billingModeSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.billingModeSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.creationDateTime"></a>

- *Type:* `string`

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.globalSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbGlobalSecondaryIndexDescription)[]

---

##### `globalTableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.globalTableVersion"></a>

- *Type:* `string`

---

##### `itemCount`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.itemCount"></a>

- *Type:* `number`

---

##### `keySchema`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.keySchema"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement`](#aws-cdk-sdk.dynamodb.DynamoDbKeySchemaElement)[]

---

##### `latestStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.latestStreamArn"></a>

- *Type:* `string`

---

##### `latestStreamLabel`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.latestStreamLabel"></a>

- *Type:* `string`

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.localSecondaryIndexes"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription`](#aws-cdk-sdk.dynamodb.DynamoDbLocalSecondaryIndexDescription)[]

---

##### `provisionedThroughput`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.provisionedThroughput"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput)

---

##### `replicas`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.replicas"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription`](#aws-cdk-sdk.dynamodb.DynamoDbReplicaDescription)[]

---

##### `restoreSummary`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.restoreSummary"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary)

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription)

---

##### `streamSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.streamSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification)

---

##### `tableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.tableArn"></a>

- *Type:* `string`

---

##### `tableId`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.tableId"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.tableName"></a>

- *Type:* `string`

---

##### `tableSizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.tableSizeBytes"></a>

- *Type:* `number`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescription.property.tableStatus"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `archivalBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.property.archivalBackupArn"></a>

- *Type:* `string`

---

##### `archivalDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.property.archivalDateTime"></a>

- *Type:* `string`

---

##### `archivalReason`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionArchivalSummary.property.archivalReason"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `billingMode`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.property.billingMode"></a>

- *Type:* `string`

---

##### `lastUpdateToPayPerRequestDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionBillingModeSummary.property.lastUpdateToPayPerRequestDateTime"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `lastDecreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.property.lastDecreaseDateTime"></a>

- *Type:* `string`

---

##### `lastIncreaseDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.property.lastIncreaseDateTime"></a>

- *Type:* `string`

---

##### `numberOfDecreasesToday`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.property.numberOfDecreasesToday"></a>

- *Type:* `number`

---

##### `readCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.property.readCapacityUnits"></a>

- *Type:* `number`

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionProvisionedThroughput.property.writeCapacityUnits"></a>

- *Type:* `number`

---


### DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `restoreDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.property.restoreDateTime"></a>

- *Type:* `string`

---

##### `restoreInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.property.restoreInProgress"></a>

- *Type:* `boolean`

---

##### `sourceBackupArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.property.sourceBackupArn"></a>

- *Type:* `string`

---

##### `sourceTableArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionRestoreSummary.property.sourceTableArn"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescriptionSseDescription <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `inaccessibleEncryptionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.property.inaccessibleEncryptionDateTime"></a>

- *Type:* `string`

---

##### `kmsMasterKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.property.kmsMasterKeyArn"></a>

- *Type:* `string`

---

##### `sseType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.property.sseType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionSseDescription.property.status"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTableInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTableInput)

---



#### Properties <a name="Properties"></a>

##### `streamEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.property.streamEnabled"></a>

- *Type:* `boolean`

---

##### `streamViewType`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTableTableDescriptionStreamSpecification.property.streamViewType"></a>

- *Type:* `string`

---


### DynamoDBResponsesUpdateTimeToLive <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTimeToLive(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTimeToLiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput)

---



#### Properties <a name="Properties"></a>

##### `timeToLiveSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLive.property.timeToLiveSpecification"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification`](#aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification)

---


### DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.Initializer"></a>

```typescript
import { dynamodb } from 'aws-cdk-sdk'

new dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification(__scope: Construct, __resources: string[], __input: DynamoDbUpdateTimeToLiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput`](#aws-cdk-sdk.dynamodb.DynamoDbUpdateTimeToLiveInput)

---



#### Properties <a name="Properties"></a>

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.property.attributeName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dynamodb.DynamoDBResponsesUpdateTimeToLiveTimeToLiveSpecification.property.enabled"></a>

- *Type:* `boolean`

---



