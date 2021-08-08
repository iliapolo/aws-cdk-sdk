# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RedshiftDataClient <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelStatement` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.cancelStatement"></a>

```typescript
public cancelStatement(input: RedshiftDataCancelStatementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest)

---

##### `describeStatement` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.describeStatement"></a>

```typescript
public describeStatement(input: RedshiftDataDescribeStatementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest)

---

##### `describeTable` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.describeTable"></a>

```typescript
public describeTable(input: RedshiftDataDescribeTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest)

---

##### `executeStatement` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.executeStatement"></a>

```typescript
public executeStatement(input: RedshiftDataExecuteStatementInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput`](#aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput)

---

##### `fetchStatementResult` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.fetchStatementResult"></a>

```typescript
public fetchStatementResult(input: RedshiftDataGetStatementResultRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest)

---

##### `listDatabases` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.listDatabases"></a>

```typescript
public listDatabases(input: RedshiftDataListDatabasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest)

---

##### `listSchemas` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.listSchemas"></a>

```typescript
public listSchemas(input: RedshiftDataListSchemasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest)

---

##### `listStatements` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.listStatements"></a>

```typescript
public listStatements(input: RedshiftDataListStatementsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest)

---

##### `listTables` <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.listTables"></a>

```typescript
public listTables(input: RedshiftDataListTablesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest)

---




## Structs <a name="Structs"></a>

### RedshiftDataCancelStatementRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataCancelStatementRequest: redshiftdata.RedshiftDataCancelStatementRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest.property.id"></a>

- *Type:* `string`

---

### RedshiftDataCancelStatementResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataCancelStatementResponse: redshiftdata.RedshiftDataCancelStatementResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementResponse.property.status"></a>

- *Type:* `boolean`

---

### RedshiftDataColumnMetadata <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataColumnMetadata: redshiftdata.RedshiftDataColumnMetadata = { ... }
```

##### `columnDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.columnDefault"></a>

- *Type:* `string`

---

##### `isCaseSensitive`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.isCaseSensitive"></a>

- *Type:* `boolean`

---

##### `isCurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.isCurrency"></a>

- *Type:* `boolean`

---

##### `isSigned`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.isSigned"></a>

- *Type:* `boolean`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.label"></a>

- *Type:* `string`

---

##### `length`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.length"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.name"></a>

- *Type:* `string`

---

##### `nullable`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.nullable"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.precision"></a>

- *Type:* `number`

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.scale"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.schemaName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.tableName"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata.property.typeName"></a>

- *Type:* `string`

---

### RedshiftDataDescribeStatementRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataDescribeStatementRequest: redshiftdata.RedshiftDataDescribeStatementRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest.property.id"></a>

- *Type:* `string`

---

### RedshiftDataDescribeStatementResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataDescribeStatementResponse: redshiftdata.RedshiftDataDescribeStatementResponse = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.id"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.dbUser"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.duration"></a>

- *Type:* `number`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.error"></a>

- *Type:* `string`

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.queryString"></a>

- *Type:* `string`

---

##### `redshiftPid`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.redshiftPid"></a>

- *Type:* `number`

---

##### `redshiftQueryId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.redshiftQueryId"></a>

- *Type:* `number`

---

##### `resultRows`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.resultRows"></a>

- *Type:* `number`

---

##### `resultSize`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.resultSize"></a>

- *Type:* `number`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.secretArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementResponse.property.updatedAt"></a>

- *Type:* `string`

---

### RedshiftDataDescribeTableRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataDescribeTableRequest: redshiftdata.RedshiftDataDescribeTableRequest = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.dbUser"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.schema"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.secretArn"></a>

- *Type:* `string`

---

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest.property.table"></a>

- *Type:* `string`

---

### RedshiftDataDescribeTableResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataDescribeTableResponse: redshiftdata.RedshiftDataDescribeTableResponse = { ... }
```

##### `columnList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableResponse.property.columnList"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata`](#aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableResponse.property.tableName"></a>

- *Type:* `string`

---

### RedshiftDataExecuteStatementInput <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataExecuteStatementInput: redshiftdata.RedshiftDataExecuteStatementInput = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `sql`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.sql"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.dbUser"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.secretArn"></a>

- *Type:* `string`

---

##### `statementName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.statementName"></a>

- *Type:* `string`

---

##### `withEvent`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput.property.withEvent"></a>

- *Type:* `boolean`

---

### RedshiftDataExecuteStatementOutput <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataExecuteStatementOutput: redshiftdata.RedshiftDataExecuteStatementOutput = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.createdAt"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.dbUser"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.id"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementOutput.property.secretArn"></a>

- *Type:* `string`

---

### RedshiftDataField <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataField: redshiftdata.RedshiftDataField = { ... }
```

##### `blobValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.blobValue"></a>

- *Type:* `any`

---

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.booleanValue"></a>

- *Type:* `boolean`

---

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.doubleValue"></a>

- *Type:* `number`

---

##### `isNull`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.isNull"></a>

- *Type:* `boolean`

---

##### `longValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.longValue"></a>

- *Type:* `number`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataField.property.stringValue"></a>

- *Type:* `string`

---

### RedshiftDataGetStatementResultRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataGetStatementResultRequest: redshiftdata.RedshiftDataGetStatementResultRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest.property.nextToken"></a>

- *Type:* `string`

---

### RedshiftDataGetStatementResultResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataGetStatementResultResponse: redshiftdata.RedshiftDataGetStatementResultResponse = { ... }
```

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultResponse.property.records"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataField`](#aws-cdk-sdk.redshiftdata.RedshiftDataField)[][]

---

##### `columnMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultResponse.property.columnMetadata"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata`](#aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `totalNumRows`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultResponse.property.totalNumRows"></a>

- *Type:* `number`

---

### RedshiftDataListDatabasesRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListDatabasesRequest: redshiftdata.RedshiftDataListDatabasesRequest = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.dbUser"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest.property.secretArn"></a>

- *Type:* `string`

---

### RedshiftDataListDatabasesResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListDatabasesResponse: redshiftdata.RedshiftDataListDatabasesResponse = { ... }
```

##### `databases`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesResponse.property.databases"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### RedshiftDataListSchemasRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListSchemasRequest: redshiftdata.RedshiftDataListSchemasRequest = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.dbUser"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.schemaPattern"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest.property.secretArn"></a>

- *Type:* `string`

---

### RedshiftDataListSchemasResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListSchemasResponse: redshiftdata.RedshiftDataListSchemasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasResponse.property.schemas"></a>

- *Type:* `string`[]

---

### RedshiftDataListStatementsRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListStatementsRequest: redshiftdata.RedshiftDataListStatementsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `statementName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest.property.statementName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest.property.status"></a>

- *Type:* `string`

---

### RedshiftDataListStatementsResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListStatementsResponse: redshiftdata.RedshiftDataListStatementsResponse = { ... }
```

##### `statements`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsResponse.property.statements"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataStatementData`](#aws-cdk-sdk.redshiftdata.RedshiftDataStatementData)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RedshiftDataListTablesRequest <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListTablesRequest: redshiftdata.RedshiftDataListTablesRequest = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.dbUser"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.schemaPattern"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.secretArn"></a>

- *Type:* `string`

---

##### `tablePattern`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest.property.tablePattern"></a>

- *Type:* `string`

---

### RedshiftDataListTablesResponse <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataListTablesResponse: redshiftdata.RedshiftDataListTablesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tables`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataListTablesResponse.property.tables"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataTableMember`](#aws-cdk-sdk.redshiftdata.RedshiftDataTableMember)[]

---

### RedshiftDataStatementData <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataStatementData: redshiftdata.RedshiftDataStatementData = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.id"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.createdAt"></a>

- *Type:* `string`

---

##### `queryString`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.queryString"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.secretArn"></a>

- *Type:* `string`

---

##### `statementName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.statementName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataStatementData.property.updatedAt"></a>

- *Type:* `string`

---

### RedshiftDataTableMember <a name="aws-cdk-sdk.redshiftdata.RedshiftDataTableMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

const redshiftDataTableMember: redshiftdata.RedshiftDataTableMember = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataTableMember.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataTableMember.property.schema"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataTableMember.property.type"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### RedshiftDataResponsesCancelStatement <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesCancelStatement(__scope: Construct, __resources: string[], __input: RedshiftDataCancelStatementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataCancelStatementRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesCancelStatement.property.status"></a>

- *Type:* `boolean`

---


### RedshiftDataResponsesDescribeStatement <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesDescribeStatement(__scope: Construct, __resources: string[], __input: RedshiftDataDescribeStatementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataDescribeStatementRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.createdAt"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.dbUser"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.duration"></a>

- *Type:* `number`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.error"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.id"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.queryString"></a>

- *Type:* `string`

---

##### `redshiftPid`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.redshiftPid"></a>

- *Type:* `number`

---

##### `redshiftQueryId`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.redshiftQueryId"></a>

- *Type:* `number`

---

##### `resultRows`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.resultRows"></a>

- *Type:* `number`

---

##### `resultSize`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.resultSize"></a>

- *Type:* `number`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.secretArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeStatement.property.updatedAt"></a>

- *Type:* `string`

---


### RedshiftDataResponsesDescribeTable <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesDescribeTable(__scope: Construct, __resources: string[], __input: RedshiftDataDescribeTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataDescribeTableRequest)

---



#### Properties <a name="Properties"></a>

##### `columnList`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.property.columnList"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata`](#aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.property.nextToken"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesDescribeTable.property.tableName"></a>

- *Type:* `string`

---


### RedshiftDataResponsesExecuteStatement <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesExecuteStatement(__scope: Construct, __resources: string[], __input: RedshiftDataExecuteStatementInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput`](#aws-cdk-sdk.redshiftdata.RedshiftDataExecuteStatementInput)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.createdAt"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.database"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.dbUser"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.id"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesExecuteStatement.property.secretArn"></a>

- *Type:* `string`

---


### RedshiftDataResponsesFetchStatementResult <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesFetchStatementResult(__scope: Construct, __resources: string[], __input: RedshiftDataGetStatementResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataGetStatementResultRequest)

---



#### Properties <a name="Properties"></a>

##### `columnMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.property.columnMetadata"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata`](#aws-cdk-sdk.redshiftdata.RedshiftDataColumnMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.property.records"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataField`](#aws-cdk-sdk.redshiftdata.RedshiftDataField)[][]

---

##### `totalNumRows`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesFetchStatementResult.property.totalNumRows"></a>

- *Type:* `number`

---


### RedshiftDataResponsesListDatabases <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesListDatabases(__scope: Construct, __resources: string[], __input: RedshiftDataListDatabasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListDatabasesRequest)

---



#### Properties <a name="Properties"></a>

##### `databases`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.property.databases"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListDatabases.property.nextToken"></a>

- *Type:* `string`

---


### RedshiftDataResponsesListSchemas <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesListSchemas(__scope: Construct, __resources: string[], __input: RedshiftDataListSchemasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListSchemasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListSchemas.property.schemas"></a>

- *Type:* `string`[]

---


### RedshiftDataResponsesListStatements <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesListStatements(__scope: Construct, __resources: string[], __input: RedshiftDataListStatementsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListStatementsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.property.nextToken"></a>

- *Type:* `string`

---

##### `statements`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListStatements.property.statements"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataStatementData`](#aws-cdk-sdk.redshiftdata.RedshiftDataStatementData)[]

---


### RedshiftDataResponsesListTables <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables"></a>

#### Initializer <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.Initializer"></a>

```typescript
import { redshiftdata } from 'aws-cdk-sdk'

new redshiftdata.RedshiftDataResponsesListTables(__scope: Construct, __resources: string[], __input: RedshiftDataListTablesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest`](#aws-cdk-sdk.redshiftdata.RedshiftDataListTablesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.property.nextToken"></a>

- *Type:* `string`

---

##### `tables`<sup>Required</sup> <a name="aws-cdk-sdk.redshiftdata.RedshiftDataResponsesListTables.property.tables"></a>

- *Type:* [`aws-cdk-sdk.redshiftdata.RedshiftDataTableMember`](#aws-cdk-sdk.redshiftdata.RedshiftDataTableMember)[]

---



