# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TimestreamWriteClient <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createDatabase` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.createDatabase"></a>

```typescript
public createDatabase(input: TimestreamWriteCreateDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest)

---

##### `createTable` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.createTable"></a>

```typescript
public createTable(input: TimestreamWriteCreateTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest)

---

##### `deleteDatabase` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.deleteDatabase"></a>

```typescript
public deleteDatabase(input: TimestreamWriteDeleteDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteDatabaseRequest)

---

##### `deleteTable` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.deleteTable"></a>

```typescript
public deleteTable(input: TimestreamWriteDeleteTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteTableRequest)

---

##### `describeDatabase` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.describeDatabase"></a>

```typescript
public describeDatabase(input: TimestreamWriteDescribeDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest)

---

##### `describeEndpoints` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.describeEndpoints"></a>

```typescript
public describeEndpoints()
```

##### `describeTable` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.describeTable"></a>

```typescript
public describeTable(input: TimestreamWriteDescribeTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest)

---

##### `listDatabases` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.listDatabases"></a>

```typescript
public listDatabases(input: TimestreamWriteListDatabasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest)

---

##### `listTables` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.listTables"></a>

```typescript
public listTables(input: TimestreamWriteListTablesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: TimestreamWriteListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.tagResource"></a>

```typescript
public tagResource(input: TimestreamWriteTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.untagResource"></a>

```typescript
public untagResource(input: TimestreamWriteUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceRequest)

---

##### `updateDatabase` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.updateDatabase"></a>

```typescript
public updateDatabase(input: TimestreamWriteUpdateDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest)

---

##### `updateTable` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.updateTable"></a>

```typescript
public updateTable(input: TimestreamWriteUpdateTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest)

---

##### `writeRecords` <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.writeRecords"></a>

```typescript
public writeRecords(input: TimestreamWriteWriteRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest)

---




## Structs <a name="Structs"></a>

### TimestreamWriteCreateDatabaseRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteCreateDatabaseRequest: timestreamwrite.TimestreamWriteCreateDatabaseRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTag`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTag)[]

---

### TimestreamWriteCreateDatabaseResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteCreateDatabaseResponse: timestreamwrite.TimestreamWriteCreateDatabaseResponse = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseResponse.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase)

---

### TimestreamWriteCreateTableRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteCreateTableRequest: timestreamwrite.TimestreamWriteCreateTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest.property.tableName"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTag`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTag)[]

---

### TimestreamWriteCreateTableResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteCreateTableResponse: timestreamwrite.TimestreamWriteCreateTableResponse = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableResponse.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTable)

---

### TimestreamWriteDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDatabase: timestreamwrite.TimestreamWriteDatabase = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `tableCount`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase.property.tableCount"></a>

- *Type:* `number`

---

### TimestreamWriteDeleteDatabaseRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDeleteDatabaseRequest: timestreamwrite.TimestreamWriteDeleteDatabaseRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteDatabaseRequest.property.databaseName"></a>

- *Type:* `string`

---

### TimestreamWriteDeleteTableRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDeleteTableRequest: timestreamwrite.TimestreamWriteDeleteTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDeleteTableRequest.property.tableName"></a>

- *Type:* `string`

---

### TimestreamWriteDescribeDatabaseRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeDatabaseRequest: timestreamwrite.TimestreamWriteDescribeDatabaseRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest.property.databaseName"></a>

- *Type:* `string`

---

### TimestreamWriteDescribeDatabaseResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeDatabaseResponse: timestreamwrite.TimestreamWriteDescribeDatabaseResponse = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseResponse.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase)

---

### TimestreamWriteDescribeEndpointsRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeEndpointsRequest: timestreamwrite.TimestreamWriteDescribeEndpointsRequest = { ... }
```

### TimestreamWriteDescribeEndpointsResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeEndpointsResponse: timestreamwrite.TimestreamWriteDescribeEndpointsResponse = { ... }
```

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeEndpointsResponse.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint)[]

---

### TimestreamWriteDescribeTableRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeTableRequest: timestreamwrite.TimestreamWriteDescribeTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest.property.tableName"></a>

- *Type:* `string`

---

### TimestreamWriteDescribeTableResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDescribeTableResponse: timestreamwrite.TimestreamWriteDescribeTableResponse = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableResponse.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTable)

---

### TimestreamWriteDimension <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteDimension: timestreamwrite.TimestreamWriteDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension.property.value"></a>

- *Type:* `string`

---

##### `dimensionValueType`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension.property.dimensionValueType"></a>

- *Type:* `string`

---

### TimestreamWriteEndpoint <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteEndpoint: timestreamwrite.TimestreamWriteEndpoint = { ... }
```

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint.property.address"></a>

- *Type:* `string`

---

##### `cachePeriodInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint.property.cachePeriodInMinutes"></a>

- *Type:* `number`

---

### TimestreamWriteListDatabasesRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListDatabasesRequest: timestreamwrite.TimestreamWriteListDatabasesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### TimestreamWriteListDatabasesResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListDatabasesResponse: timestreamwrite.TimestreamWriteListDatabasesResponse = { ... }
```

##### `databases`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesResponse.property.databases"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### TimestreamWriteListTablesRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListTablesRequest: timestreamwrite.TimestreamWriteListTablesRequest = { ... }
```

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest.property.nextToken"></a>

- *Type:* `string`

---

### TimestreamWriteListTablesResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListTablesResponse: timestreamwrite.TimestreamWriteListTablesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tables`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesResponse.property.tables"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTable)[]

---

### TimestreamWriteListTagsForResourceRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListTagsForResourceRequest: timestreamwrite.TimestreamWriteListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### TimestreamWriteListTagsForResourceResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteListTagsForResourceResponse: timestreamwrite.TimestreamWriteListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTag`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTag)[]

---

### TimestreamWriteRecord <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteRecord: timestreamwrite.TimestreamWriteRecord = { ... }
```

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDimension)[]

---

##### `measureName`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.measureName"></a>

- *Type:* `string`

---

##### `measureValue`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.measureValue"></a>

- *Type:* `string`

---

##### `measureValueType`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.measureValueType"></a>

- *Type:* `string`

---

##### `time`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.time"></a>

- *Type:* `string`

---

##### `timeUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.timeUnit"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord.property.version"></a>

- *Type:* `number`

---

### TimestreamWriteRetentionProperties <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteRetentionProperties: timestreamwrite.TimestreamWriteRetentionProperties = { ... }
```

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

- *Type:* `number`

---

### TimestreamWriteTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteTable: timestreamwrite.TimestreamWriteTable = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.databaseName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties)

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTable.property.tableStatus"></a>

- *Type:* `string`

---

### TimestreamWriteTag <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteTag: timestreamwrite.TimestreamWriteTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTag.property.value"></a>

- *Type:* `string`

---

### TimestreamWriteTagResourceRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteTagResourceRequest: timestreamwrite.TimestreamWriteTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTag`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTag)[]

---

### TimestreamWriteTagResourceResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteTagResourceResponse: timestreamwrite.TimestreamWriteTagResourceResponse = { ... }
```

### TimestreamWriteUntagResourceRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUntagResourceRequest: timestreamwrite.TimestreamWriteUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### TimestreamWriteUntagResourceResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUntagResourceResponse: timestreamwrite.TimestreamWriteUntagResourceResponse = { ... }
```

### TimestreamWriteUpdateDatabaseRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUpdateDatabaseRequest: timestreamwrite.TimestreamWriteUpdateDatabaseRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

### TimestreamWriteUpdateDatabaseResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUpdateDatabaseResponse: timestreamwrite.TimestreamWriteUpdateDatabaseResponse = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseResponse.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase)

---

### TimestreamWriteUpdateTableRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUpdateTableRequest: timestreamwrite.TimestreamWriteUpdateTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteRetentionProperties)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest.property.tableName"></a>

- *Type:* `string`

---

### TimestreamWriteUpdateTableResponse <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteUpdateTableResponse: timestreamwrite.TimestreamWriteUpdateTableResponse = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableResponse.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTable)

---

### TimestreamWriteWriteRecordsRequest <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

const timestreamWriteWriteRecordsRequest: timestreamwrite.TimestreamWriteWriteRecordsRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest.property.records"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest.property.tableName"></a>

- *Type:* `string`

---

##### `commonAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteWriteRecordsRequest.property.commonAttributes"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteRecord)

---

## Classes <a name="Classes"></a>

### TimestreamWriteResponsesCreateDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesCreateDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteCreateDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabase.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase)

---


### TimestreamWriteResponsesCreateDatabaseDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteCreateDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `tableCount`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateDatabaseDatabase.property.tableCount"></a>

- *Type:* `number`

---


### TimestreamWriteResponsesCreateTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesCreateTable(__scope: Construct, __resources: string[], __input: TimestreamWriteCreateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTable.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable)

---


### TimestreamWriteResponsesCreateTableTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesCreateTableTable(__scope: Construct, __resources: string[], __input: TimestreamWriteCreateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.databaseName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTable.property.tableStatus"></a>

- *Type:* `string`

---


### TimestreamWriteResponsesCreateTableTableRetentionProperties <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties(__scope: Construct, __resources: string[], __input: TimestreamWriteCreateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteCreateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesCreateTableTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

- *Type:* `number`

---


### TimestreamWriteResponsesDescribeDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteDescribeDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabase.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase)

---


### TimestreamWriteResponsesDescribeDatabaseDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteDescribeDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `tableCount`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeDatabaseDatabase.property.tableCount"></a>

- *Type:* `number`

---


### TimestreamWriteResponsesDescribeEndpoints <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeEndpoints.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeEndpoints(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeEndpoints.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteEndpoint)[]

---


### TimestreamWriteResponsesDescribeTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeTable(__scope: Construct, __resources: string[], __input: TimestreamWriteDescribeTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTable.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable)

---


### TimestreamWriteResponsesDescribeTableTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeTableTable(__scope: Construct, __resources: string[], __input: TimestreamWriteDescribeTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.databaseName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTable.property.tableStatus"></a>

- *Type:* `string`

---


### TimestreamWriteResponsesDescribeTableTableRetentionProperties <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties(__scope: Construct, __resources: string[], __input: TimestreamWriteDescribeTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDescribeTableRequest)

---



#### Properties <a name="Properties"></a>

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesDescribeTableTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

- *Type:* `number`

---


### TimestreamWriteResponsesListDatabases <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesListDatabases(__scope: Construct, __resources: string[], __input: TimestreamWriteListDatabasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListDatabasesRequest)

---



#### Properties <a name="Properties"></a>

##### `databases`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.property.databases"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteDatabase)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListDatabases.property.nextToken"></a>

- *Type:* `string`

---


### TimestreamWriteResponsesListTables <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesListTables(__scope: Construct, __resources: string[], __input: TimestreamWriteListTablesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListTablesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.property.nextToken"></a>

- *Type:* `string`

---

##### `tables`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTables.property.tables"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTable)[]

---


### TimestreamWriteResponsesListTagsForResource <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: TimestreamWriteListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteTag`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteTag)[]

---


### TimestreamWriteResponsesUpdateDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesUpdateDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteUpdateDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabase.property.database"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase)

---


### TimestreamWriteResponsesUpdateDatabaseDatabase <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase(__scope: Construct, __resources: string[], __input: TimestreamWriteUpdateDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `tableCount`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateDatabaseDatabase.property.tableCount"></a>

- *Type:* `number`

---


### TimestreamWriteResponsesUpdateTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesUpdateTable(__scope: Construct, __resources: string[], __input: TimestreamWriteUpdateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTable.property.table"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable)

---


### TimestreamWriteResponsesUpdateTableTable <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesUpdateTableTable(__scope: Construct, __resources: string[], __input: TimestreamWriteUpdateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.databaseName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `retentionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.retentionProperties"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.tableName"></a>

- *Type:* `string`

---

##### `tableStatus`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTable.property.tableStatus"></a>

- *Type:* `string`

---


### TimestreamWriteResponsesUpdateTableTableRetentionProperties <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties"></a>

#### Initializer <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.Initializer"></a>

```typescript
import { timestreamwrite } from 'aws-cdk-sdk'

new timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties(__scope: Construct, __resources: string[], __input: TimestreamWriteUpdateTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest`](#aws-cdk-sdk.timestreamwrite.TimestreamWriteUpdateTableRequest)

---



#### Properties <a name="Properties"></a>

##### `magneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.property.magneticStoreRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `memoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="aws-cdk-sdk.timestreamwrite.TimestreamWriteResponsesUpdateTableTableRetentionProperties.property.memoryStoreRetentionPeriodInHours"></a>

- *Type:* `number`

---



