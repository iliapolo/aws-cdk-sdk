# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AthenaClient <a name="aws-cdk-sdk.athena.AthenaClient"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaClient.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchGetNamedQuery` <a name="aws-cdk-sdk.athena.AthenaClient.batchGetNamedQuery"></a>

```typescript
public batchGetNamedQuery(input: AthenaBatchGetNamedQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput`](#aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput)

---

##### `batchGetQueryExecution` <a name="aws-cdk-sdk.athena.AthenaClient.batchGetQueryExecution"></a>

```typescript
public batchGetQueryExecution(input: AthenaBatchGetQueryExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput)

---

##### `createDataCatalog` <a name="aws-cdk-sdk.athena.AthenaClient.createDataCatalog"></a>

```typescript
public createDataCatalog(input: AthenaCreateDataCatalogInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaCreateDataCatalogInput`](#aws-cdk-sdk.athena.AthenaCreateDataCatalogInput)

---

##### `createNamedQuery` <a name="aws-cdk-sdk.athena.AthenaClient.createNamedQuery"></a>

```typescript
public createNamedQuery(input: AthenaCreateNamedQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaCreateNamedQueryInput`](#aws-cdk-sdk.athena.AthenaCreateNamedQueryInput)

---

##### `createWorkGroup` <a name="aws-cdk-sdk.athena.AthenaClient.createWorkGroup"></a>

```typescript
public createWorkGroup(input: AthenaCreateWorkGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaCreateWorkGroupInput`](#aws-cdk-sdk.athena.AthenaCreateWorkGroupInput)

---

##### `deleteDataCatalog` <a name="aws-cdk-sdk.athena.AthenaClient.deleteDataCatalog"></a>

```typescript
public deleteDataCatalog(input: AthenaDeleteDataCatalogInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDeleteDataCatalogInput`](#aws-cdk-sdk.athena.AthenaDeleteDataCatalogInput)

---

##### `deleteNamedQuery` <a name="aws-cdk-sdk.athena.AthenaClient.deleteNamedQuery"></a>

```typescript
public deleteNamedQuery(input: AthenaDeleteNamedQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDeleteNamedQueryInput`](#aws-cdk-sdk.athena.AthenaDeleteNamedQueryInput)

---

##### `deleteWorkGroup` <a name="aws-cdk-sdk.athena.AthenaClient.deleteWorkGroup"></a>

```typescript
public deleteWorkGroup(input: AthenaDeleteWorkGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDeleteWorkGroupInput`](#aws-cdk-sdk.athena.AthenaDeleteWorkGroupInput)

---

##### `fetchDatabase` <a name="aws-cdk-sdk.athena.AthenaClient.fetchDatabase"></a>

```typescript
public fetchDatabase(input: AthenaGetDatabaseInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDatabaseInput`](#aws-cdk-sdk.athena.AthenaGetDatabaseInput)

---

##### `fetchDataCatalog` <a name="aws-cdk-sdk.athena.AthenaClient.fetchDataCatalog"></a>

```typescript
public fetchDataCatalog(input: AthenaGetDataCatalogInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDataCatalogInput`](#aws-cdk-sdk.athena.AthenaGetDataCatalogInput)

---

##### `fetchNamedQuery` <a name="aws-cdk-sdk.athena.AthenaClient.fetchNamedQuery"></a>

```typescript
public fetchNamedQuery(input: AthenaGetNamedQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetNamedQueryInput`](#aws-cdk-sdk.athena.AthenaGetNamedQueryInput)

---

##### `fetchQueryExecution` <a name="aws-cdk-sdk.athena.AthenaClient.fetchQueryExecution"></a>

```typescript
public fetchQueryExecution(input: AthenaGetQueryExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---

##### `fetchQueryResults` <a name="aws-cdk-sdk.athena.AthenaClient.fetchQueryResults"></a>

```typescript
public fetchQueryResults(input: AthenaGetQueryResultsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryResultsInput`](#aws-cdk-sdk.athena.AthenaGetQueryResultsInput)

---

##### `fetchTableMetadata` <a name="aws-cdk-sdk.athena.AthenaClient.fetchTableMetadata"></a>

```typescript
public fetchTableMetadata(input: AthenaGetTableMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetTableMetadataInput`](#aws-cdk-sdk.athena.AthenaGetTableMetadataInput)

---

##### `fetchWorkGroup` <a name="aws-cdk-sdk.athena.AthenaClient.fetchWorkGroup"></a>

```typescript
public fetchWorkGroup(input: AthenaGetWorkGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---

##### `listDatabases` <a name="aws-cdk-sdk.athena.AthenaClient.listDatabases"></a>

```typescript
public listDatabases(input: AthenaListDatabasesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListDatabasesInput`](#aws-cdk-sdk.athena.AthenaListDatabasesInput)

---

##### `listDataCatalogs` <a name="aws-cdk-sdk.athena.AthenaClient.listDataCatalogs"></a>

```typescript
public listDataCatalogs(input: AthenaListDataCatalogsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListDataCatalogsInput`](#aws-cdk-sdk.athena.AthenaListDataCatalogsInput)

---

##### `listNamedQueries` <a name="aws-cdk-sdk.athena.AthenaClient.listNamedQueries"></a>

```typescript
public listNamedQueries(input: AthenaListNamedQueriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListNamedQueriesInput`](#aws-cdk-sdk.athena.AthenaListNamedQueriesInput)

---

##### `listQueryExecutions` <a name="aws-cdk-sdk.athena.AthenaClient.listQueryExecutions"></a>

```typescript
public listQueryExecutions(input: AthenaListQueryExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListQueryExecutionsInput`](#aws-cdk-sdk.athena.AthenaListQueryExecutionsInput)

---

##### `listTableMetadata` <a name="aws-cdk-sdk.athena.AthenaClient.listTableMetadata"></a>

```typescript
public listTableMetadata(input: AthenaListTableMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListTableMetadataInput`](#aws-cdk-sdk.athena.AthenaListTableMetadataInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.athena.AthenaClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AthenaListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListTagsForResourceInput`](#aws-cdk-sdk.athena.AthenaListTagsForResourceInput)

---

##### `listWorkGroups` <a name="aws-cdk-sdk.athena.AthenaClient.listWorkGroups"></a>

```typescript
public listWorkGroups(input: AthenaListWorkGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListWorkGroupsInput`](#aws-cdk-sdk.athena.AthenaListWorkGroupsInput)

---

##### `startQueryExecution` <a name="aws-cdk-sdk.athena.AthenaClient.startQueryExecution"></a>

```typescript
public startQueryExecution(input: AthenaStartQueryExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaStartQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaStartQueryExecutionInput)

---

##### `stopQueryExecution` <a name="aws-cdk-sdk.athena.AthenaClient.stopQueryExecution"></a>

```typescript
public stopQueryExecution(input: AthenaStopQueryExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaStopQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaStopQueryExecutionInput)

---

##### `tagResource` <a name="aws-cdk-sdk.athena.AthenaClient.tagResource"></a>

```typescript
public tagResource(input: AthenaTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTagResourceInput`](#aws-cdk-sdk.athena.AthenaTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.athena.AthenaClient.untagResource"></a>

```typescript
public untagResource(input: AthenaUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUntagResourceInput`](#aws-cdk-sdk.athena.AthenaUntagResourceInput)

---

##### `updateDataCatalog` <a name="aws-cdk-sdk.athena.AthenaClient.updateDataCatalog"></a>

```typescript
public updateDataCatalog(input: AthenaUpdateDataCatalogInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput`](#aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput)

---

##### `updateWorkGroup` <a name="aws-cdk-sdk.athena.AthenaClient.updateWorkGroup"></a>

```typescript
public updateWorkGroup(input: AthenaUpdateWorkGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput`](#aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput)

---




## Structs <a name="Structs"></a>

### AthenaBatchGetNamedQueryInput <a name="aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaBatchGetNamedQueryInput: athena.AthenaBatchGetNamedQueryInput = { ... }
```

##### `namedQueryIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput.property.namedQueryIds"></a>

- *Type:* `string`[]

---

### AthenaBatchGetNamedQueryOutput <a name="aws-cdk-sdk.athena.AthenaBatchGetNamedQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaBatchGetNamedQueryOutput: athena.AthenaBatchGetNamedQueryOutput = { ... }
```

##### `namedQueries`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetNamedQueryOutput.property.namedQueries"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaNamedQuery`](#aws-cdk-sdk.athena.AthenaNamedQuery)[]

---

##### `unprocessedNamedQueryIds`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetNamedQueryOutput.property.unprocessedNamedQueryIds"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId`](#aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId)[]

---

### AthenaBatchGetQueryExecutionInput <a name="aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaBatchGetQueryExecutionInput: athena.AthenaBatchGetQueryExecutionInput = { ... }
```

##### `queryExecutionIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput.property.queryExecutionIds"></a>

- *Type:* `string`[]

---

### AthenaBatchGetQueryExecutionOutput <a name="aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaBatchGetQueryExecutionOutput: athena.AthenaBatchGetQueryExecutionOutput = { ... }
```

##### `queryExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionOutput.property.queryExecutions"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecution`](#aws-cdk-sdk.athena.AthenaQueryExecution)[]

---

##### `unprocessedQueryExecutionIds`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionOutput.property.unprocessedQueryExecutionIds"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId`](#aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId)[]

---

### AthenaColumn <a name="aws-cdk-sdk.athena.AthenaColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaColumn: athena.AthenaColumn = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaColumn.property.name"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumn.property.comment"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumn.property.type"></a>

- *Type:* `string`

---

### AthenaColumnInfo <a name="aws-cdk-sdk.athena.AthenaColumnInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaColumnInfo: athena.AthenaColumnInfo = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.type"></a>

- *Type:* `string`

---

##### `caseSensitive`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.caseSensitive"></a>

- *Type:* `boolean`

---

##### `catalogName`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.catalogName"></a>

- *Type:* `string`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.label"></a>

- *Type:* `string`

---

##### `nullable`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.nullable"></a>

- *Type:* `string`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.precision"></a>

- *Type:* `number`

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.scale"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.schemaName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaColumnInfo.property.tableName"></a>

- *Type:* `string`

---

### AthenaCreateDataCatalogInput <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateDataCatalogInput: athena.AthenaCreateDataCatalogInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTag`](#aws-cdk-sdk.athena.AthenaTag)[]

---

### AthenaCreateDataCatalogOutput <a name="aws-cdk-sdk.athena.AthenaCreateDataCatalogOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateDataCatalogOutput: athena.AthenaCreateDataCatalogOutput = { ... }
```

### AthenaCreateNamedQueryInput <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateNamedQueryInput: athena.AthenaCreateNamedQueryInput = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.name"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.queryString"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.description"></a>

- *Type:* `string`

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryInput.property.workGroup"></a>

- *Type:* `string`

---

### AthenaCreateNamedQueryOutput <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateNamedQueryOutput: athena.AthenaCreateNamedQueryOutput = { ... }
```

##### `namedQueryId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateNamedQueryOutput.property.namedQueryId"></a>

- *Type:* `string`

---

### AthenaCreateWorkGroupInput <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateWorkGroupInput: athena.AthenaCreateWorkGroupInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupInput.property.name"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupInput.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroupConfiguration`](#aws-cdk-sdk.athena.AthenaWorkGroupConfiguration)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTag`](#aws-cdk-sdk.athena.AthenaTag)[]

---

### AthenaCreateWorkGroupOutput <a name="aws-cdk-sdk.athena.AthenaCreateWorkGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaCreateWorkGroupOutput: athena.AthenaCreateWorkGroupOutput = { ... }
```

### AthenaDatabase <a name="aws-cdk-sdk.athena.AthenaDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDatabase: athena.AthenaDatabase = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDatabase.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDatabase.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDatabase.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### AthenaDataCatalog <a name="aws-cdk-sdk.athena.AthenaDataCatalog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDataCatalog: athena.AthenaDataCatalog = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalog.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalog.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalog.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalog.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### AthenaDataCatalogSummary <a name="aws-cdk-sdk.athena.AthenaDataCatalogSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDataCatalogSummary: athena.AthenaDataCatalogSummary = { ... }
```

##### `catalogName`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalogSummary.property.catalogName"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDataCatalogSummary.property.type"></a>

- *Type:* `string`

---

### AthenaDatum <a name="aws-cdk-sdk.athena.AthenaDatum"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDatum: athena.AthenaDatum = { ... }
```

##### `varCharValue`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDatum.property.varCharValue"></a>

- *Type:* `string`

---

### AthenaDeleteDataCatalogInput <a name="aws-cdk-sdk.athena.AthenaDeleteDataCatalogInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteDataCatalogInput: athena.AthenaDeleteDataCatalogInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDeleteDataCatalogInput.property.name"></a>

- *Type:* `string`

---

### AthenaDeleteDataCatalogOutput <a name="aws-cdk-sdk.athena.AthenaDeleteDataCatalogOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteDataCatalogOutput: athena.AthenaDeleteDataCatalogOutput = { ... }
```

### AthenaDeleteNamedQueryInput <a name="aws-cdk-sdk.athena.AthenaDeleteNamedQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteNamedQueryInput: athena.AthenaDeleteNamedQueryInput = { ... }
```

##### `namedQueryId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDeleteNamedQueryInput.property.namedQueryId"></a>

- *Type:* `string`

---

### AthenaDeleteNamedQueryOutput <a name="aws-cdk-sdk.athena.AthenaDeleteNamedQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteNamedQueryOutput: athena.AthenaDeleteNamedQueryOutput = { ... }
```

### AthenaDeleteWorkGroupInput <a name="aws-cdk-sdk.athena.AthenaDeleteWorkGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteWorkGroupInput: athena.AthenaDeleteWorkGroupInput = { ... }
```

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaDeleteWorkGroupInput.property.workGroup"></a>

- *Type:* `string`

---

##### `recursiveDeleteOption`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaDeleteWorkGroupInput.property.recursiveDeleteOption"></a>

- *Type:* `boolean`

---

### AthenaDeleteWorkGroupOutput <a name="aws-cdk-sdk.athena.AthenaDeleteWorkGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaDeleteWorkGroupOutput: athena.AthenaDeleteWorkGroupOutput = { ... }
```

### AthenaEncryptionConfiguration <a name="aws-cdk-sdk.athena.AthenaEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaEncryptionConfiguration: athena.AthenaEncryptionConfiguration = { ... }
```

##### `encryptionOption`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaEncryptionConfiguration.property.encryptionOption"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---

### AthenaGetDatabaseInput <a name="aws-cdk-sdk.athena.AthenaGetDatabaseInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetDatabaseInput: athena.AthenaGetDatabaseInput = { ... }
```

##### `catalogName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetDatabaseInput.property.catalogName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetDatabaseInput.property.databaseName"></a>

- *Type:* `string`

---

### AthenaGetDatabaseOutput <a name="aws-cdk-sdk.athena.AthenaGetDatabaseOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetDatabaseOutput: athena.AthenaGetDatabaseOutput = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetDatabaseOutput.property.database"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDatabase`](#aws-cdk-sdk.athena.AthenaDatabase)

---

### AthenaGetDataCatalogInput <a name="aws-cdk-sdk.athena.AthenaGetDataCatalogInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetDataCatalogInput: athena.AthenaGetDataCatalogInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetDataCatalogInput.property.name"></a>

- *Type:* `string`

---

### AthenaGetDataCatalogOutput <a name="aws-cdk-sdk.athena.AthenaGetDataCatalogOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetDataCatalogOutput: athena.AthenaGetDataCatalogOutput = { ... }
```

##### `dataCatalog`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetDataCatalogOutput.property.dataCatalog"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDataCatalog`](#aws-cdk-sdk.athena.AthenaDataCatalog)

---

### AthenaGetNamedQueryInput <a name="aws-cdk-sdk.athena.AthenaGetNamedQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetNamedQueryInput: athena.AthenaGetNamedQueryInput = { ... }
```

##### `namedQueryId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetNamedQueryInput.property.namedQueryId"></a>

- *Type:* `string`

---

### AthenaGetNamedQueryOutput <a name="aws-cdk-sdk.athena.AthenaGetNamedQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetNamedQueryOutput: athena.AthenaGetNamedQueryOutput = { ... }
```

##### `namedQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetNamedQueryOutput.property.namedQuery"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaNamedQuery`](#aws-cdk-sdk.athena.AthenaNamedQuery)

---

### AthenaGetQueryExecutionInput <a name="aws-cdk-sdk.athena.AthenaGetQueryExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetQueryExecutionInput: athena.AthenaGetQueryExecutionInput = { ... }
```

##### `queryExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryExecutionInput.property.queryExecutionId"></a>

- *Type:* `string`

---

### AthenaGetQueryExecutionOutput <a name="aws-cdk-sdk.athena.AthenaGetQueryExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetQueryExecutionOutput: athena.AthenaGetQueryExecutionOutput = { ... }
```

##### `queryExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryExecutionOutput.property.queryExecution"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecution`](#aws-cdk-sdk.athena.AthenaQueryExecution)

---

### AthenaGetQueryResultsInput <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetQueryResultsInput: athena.AthenaGetQueryResultsInput = { ... }
```

##### `queryExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsInput.property.queryExecutionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaGetQueryResultsOutput <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetQueryResultsOutput: athena.AthenaGetQueryResultsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `resultSet`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsOutput.property.resultSet"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultSet`](#aws-cdk-sdk.athena.AthenaResultSet)

---

##### `updateCount`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetQueryResultsOutput.property.updateCount"></a>

- *Type:* `number`

---

### AthenaGetTableMetadataInput <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetTableMetadataInput: athena.AthenaGetTableMetadataInput = { ... }
```

##### `catalogName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataInput.property.catalogName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataInput.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataInput.property.tableName"></a>

- *Type:* `string`

---

### AthenaGetTableMetadataOutput <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetTableMetadataOutput: athena.AthenaGetTableMetadataOutput = { ... }
```

##### `tableMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetTableMetadataOutput.property.tableMetadata"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTableMetadata`](#aws-cdk-sdk.athena.AthenaTableMetadata)

---

### AthenaGetWorkGroupInput <a name="aws-cdk-sdk.athena.AthenaGetWorkGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetWorkGroupInput: athena.AthenaGetWorkGroupInput = { ... }
```

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaGetWorkGroupInput.property.workGroup"></a>

- *Type:* `string`

---

### AthenaGetWorkGroupOutput <a name="aws-cdk-sdk.athena.AthenaGetWorkGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaGetWorkGroupOutput: athena.AthenaGetWorkGroupOutput = { ... }
```

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaGetWorkGroupOutput.property.workGroup"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroup`](#aws-cdk-sdk.athena.AthenaWorkGroup)

---

### AthenaListDatabasesInput <a name="aws-cdk-sdk.athena.AthenaListDatabasesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListDatabasesInput: athena.AthenaListDatabasesInput = { ... }
```

##### `catalogName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaListDatabasesInput.property.catalogName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDatabasesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDatabasesInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListDatabasesOutput <a name="aws-cdk-sdk.athena.AthenaListDatabasesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListDatabasesOutput: athena.AthenaListDatabasesOutput = { ... }
```

##### `databaseList`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDatabasesOutput.property.databaseList"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDatabase`](#aws-cdk-sdk.athena.AthenaDatabase)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDatabasesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListDataCatalogsInput <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListDataCatalogsInput: athena.AthenaListDataCatalogsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListDataCatalogsOutput <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListDataCatalogsOutput: athena.AthenaListDataCatalogsOutput = { ... }
```

##### `dataCatalogsSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsOutput.property.dataCatalogsSummary"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDataCatalogSummary`](#aws-cdk-sdk.athena.AthenaDataCatalogSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListDataCatalogsOutput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListNamedQueriesInput <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListNamedQueriesInput: athena.AthenaListNamedQueriesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesInput.property.workGroup"></a>

- *Type:* `string`

---

### AthenaListNamedQueriesOutput <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListNamedQueriesOutput: athena.AthenaListNamedQueriesOutput = { ... }
```

##### `namedQueryIds`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesOutput.property.namedQueryIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListNamedQueriesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListQueryExecutionsInput <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListQueryExecutionsInput: athena.AthenaListQueryExecutionsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsInput.property.workGroup"></a>

- *Type:* `string`

---

### AthenaListQueryExecutionsOutput <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListQueryExecutionsOutput: athena.AthenaListQueryExecutionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `queryExecutionIds`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListQueryExecutionsOutput.property.queryExecutionIds"></a>

- *Type:* `string`[]

---

### AthenaListTableMetadataInput <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListTableMetadataInput: athena.AthenaListTableMetadataInput = { ... }
```

##### `catalogName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput.property.catalogName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput.property.databaseName"></a>

- *Type:* `string`

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput.property.expression"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListTableMetadataOutput <a name="aws-cdk-sdk.athena.AthenaListTableMetadataOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListTableMetadataOutput: athena.AthenaListTableMetadataOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tableMetadataList`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTableMetadataOutput.property.tableMetadataList"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTableMetadata`](#aws-cdk-sdk.athena.AthenaTableMetadata)[]

---

### AthenaListTagsForResourceInput <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListTagsForResourceInput: athena.AthenaListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListTagsForResourceOutput <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListTagsForResourceOutput: athena.AthenaListTagsForResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTag`](#aws-cdk-sdk.athena.AthenaTag)[]

---

### AthenaListWorkGroupsInput <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListWorkGroupsInput: athena.AthenaListWorkGroupsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

### AthenaListWorkGroupsOutput <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaListWorkGroupsOutput: athena.AthenaListWorkGroupsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `workGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaListWorkGroupsOutput.property.workGroups"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroupSummary`](#aws-cdk-sdk.athena.AthenaWorkGroupSummary)[]

---

### AthenaNamedQuery <a name="aws-cdk-sdk.athena.AthenaNamedQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaNamedQuery: athena.AthenaNamedQuery = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.database"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.name"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.queryString"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.description"></a>

- *Type:* `string`

---

##### `namedQueryId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.namedQueryId"></a>

- *Type:* `string`

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaNamedQuery.property.workGroup"></a>

- *Type:* `string`

---

### AthenaQueryExecution <a name="aws-cdk-sdk.athena.AthenaQueryExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaQueryExecution: athena.AthenaQueryExecution = { ... }
```

##### `query`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.query"></a>

- *Type:* `string`

---

##### `queryExecutionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.queryExecutionContext"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecutionContext`](#aws-cdk-sdk.athena.AthenaQueryExecutionContext)

---

##### `queryExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.queryExecutionId"></a>

- *Type:* `string`

---

##### `resultConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.resultConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultConfiguration`](#aws-cdk-sdk.athena.AthenaResultConfiguration)

---

##### `statementType`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.statementType"></a>

- *Type:* `string`

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecutionStatistics`](#aws-cdk-sdk.athena.AthenaQueryExecutionStatistics)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.status"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecutionStatus`](#aws-cdk-sdk.athena.AthenaQueryExecutionStatus)

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecution.property.workGroup"></a>

- *Type:* `string`

---

### AthenaQueryExecutionContext <a name="aws-cdk-sdk.athena.AthenaQueryExecutionContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaQueryExecutionContext: athena.AthenaQueryExecutionContext = { ... }
```

##### `catalog`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionContext.property.catalog"></a>

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionContext.property.database"></a>

- *Type:* `string`

---

### AthenaQueryExecutionStatistics <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaQueryExecutionStatistics: athena.AthenaQueryExecutionStatistics = { ... }
```

##### `dataManifestLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.dataManifestLocation"></a>

- *Type:* `string`

---

##### `dataScannedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.dataScannedInBytes"></a>

- *Type:* `number`

---

##### `engineExecutionTimeInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.engineExecutionTimeInMillis"></a>

- *Type:* `number`

---

##### `queryPlanningTimeInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.queryPlanningTimeInMillis"></a>

- *Type:* `number`

---

##### `queryQueueTimeInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.queryQueueTimeInMillis"></a>

- *Type:* `number`

---

##### `serviceProcessingTimeInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.serviceProcessingTimeInMillis"></a>

- *Type:* `number`

---

##### `totalExecutionTimeInMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatistics.property.totalExecutionTimeInMillis"></a>

- *Type:* `number`

---

### AthenaQueryExecutionStatus <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaQueryExecutionStatus: athena.AthenaQueryExecutionStatus = { ... }
```

##### `completionDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatus.property.completionDateTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatus.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatus.property.stateChangeReason"></a>

- *Type:* `string`

---

##### `submissionDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaQueryExecutionStatus.property.submissionDateTime"></a>

- *Type:* `string`

---

### AthenaResultConfiguration <a name="aws-cdk-sdk.athena.AthenaResultConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaResultConfiguration: athena.AthenaResultConfiguration = { ... }
```

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaEncryptionConfiguration`](#aws-cdk-sdk.athena.AthenaEncryptionConfiguration)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfiguration.property.outputLocation"></a>

- *Type:* `string`

---

### AthenaResultConfigurationUpdates <a name="aws-cdk-sdk.athena.AthenaResultConfigurationUpdates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaResultConfigurationUpdates: athena.AthenaResultConfigurationUpdates = { ... }
```

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfigurationUpdates.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaEncryptionConfiguration`](#aws-cdk-sdk.athena.AthenaEncryptionConfiguration)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfigurationUpdates.property.outputLocation"></a>

- *Type:* `string`

---

##### `removeEncryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfigurationUpdates.property.removeEncryptionConfiguration"></a>

- *Type:* `boolean`

---

##### `removeOutputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultConfigurationUpdates.property.removeOutputLocation"></a>

- *Type:* `boolean`

---

### AthenaResultSet <a name="aws-cdk-sdk.athena.AthenaResultSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaResultSet: athena.AthenaResultSet = { ... }
```

##### `resultSetMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultSet.property.resultSetMetadata"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultSetMetadata`](#aws-cdk-sdk.athena.AthenaResultSetMetadata)

---

##### `rows`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultSet.property.rows"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaRow`](#aws-cdk-sdk.athena.AthenaRow)[]

---

### AthenaResultSetMetadata <a name="aws-cdk-sdk.athena.AthenaResultSetMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaResultSetMetadata: athena.AthenaResultSetMetadata = { ... }
```

##### `columnInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaResultSetMetadata.property.columnInfo"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumnInfo`](#aws-cdk-sdk.athena.AthenaColumnInfo)[]

---

### AthenaRow <a name="aws-cdk-sdk.athena.AthenaRow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaRow: athena.AthenaRow = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaRow.property.data"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDatum`](#aws-cdk-sdk.athena.AthenaDatum)[]

---

### AthenaStartQueryExecutionInput <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaStartQueryExecutionInput: athena.AthenaStartQueryExecutionInput = { ... }
```

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput.property.queryString"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `queryExecutionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput.property.queryExecutionContext"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecutionContext`](#aws-cdk-sdk.athena.AthenaQueryExecutionContext)

---

##### `resultConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput.property.resultConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultConfiguration`](#aws-cdk-sdk.athena.AthenaResultConfiguration)

---

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionInput.property.workGroup"></a>

- *Type:* `string`

---

### AthenaStartQueryExecutionOutput <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaStartQueryExecutionOutput: athena.AthenaStartQueryExecutionOutput = { ... }
```

##### `queryExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaStartQueryExecutionOutput.property.queryExecutionId"></a>

- *Type:* `string`

---

### AthenaStopQueryExecutionInput <a name="aws-cdk-sdk.athena.AthenaStopQueryExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaStopQueryExecutionInput: athena.AthenaStopQueryExecutionInput = { ... }
```

##### `queryExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaStopQueryExecutionInput.property.queryExecutionId"></a>

- *Type:* `string`

---

### AthenaStopQueryExecutionOutput <a name="aws-cdk-sdk.athena.AthenaStopQueryExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaStopQueryExecutionOutput: athena.AthenaStopQueryExecutionOutput = { ... }
```

### AthenaTableMetadata <a name="aws-cdk-sdk.athena.AthenaTableMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaTableMetadata: athena.AthenaTableMetadata = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.name"></a>

- *Type:* `string`

---

##### `columns`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.columns"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumn`](#aws-cdk-sdk.athena.AthenaColumn)[]

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.createTime"></a>

- *Type:* `string`

---

##### `lastAccessTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumn`](#aws-cdk-sdk.athena.AthenaColumn)[]

---

##### `tableType`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTableMetadata.property.tableType"></a>

- *Type:* `string`

---

### AthenaTag <a name="aws-cdk-sdk.athena.AthenaTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaTag: athena.AthenaTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaTag.property.value"></a>

- *Type:* `string`

---

### AthenaTagResourceInput <a name="aws-cdk-sdk.athena.AthenaTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaTagResourceInput: athena.AthenaTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTag`](#aws-cdk-sdk.athena.AthenaTag)[]

---

### AthenaTagResourceOutput <a name="aws-cdk-sdk.athena.AthenaTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaTagResourceOutput: athena.AthenaTagResourceOutput = { ... }
```

### AthenaUnprocessedNamedQueryId <a name="aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUnprocessedNamedQueryId: athena.AthenaUnprocessedNamedQueryId = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId.property.errorMessage"></a>

- *Type:* `string`

---

##### `namedQueryId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId.property.namedQueryId"></a>

- *Type:* `string`

---

### AthenaUnprocessedQueryExecutionId <a name="aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUnprocessedQueryExecutionId: athena.AthenaUnprocessedQueryExecutionId = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId.property.errorMessage"></a>

- *Type:* `string`

---

##### `queryExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId.property.queryExecutionId"></a>

- *Type:* `string`

---

### AthenaUntagResourceInput <a name="aws-cdk-sdk.athena.AthenaUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUntagResourceInput: athena.AthenaUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### AthenaUntagResourceOutput <a name="aws-cdk-sdk.athena.AthenaUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUntagResourceOutput: athena.AthenaUntagResourceOutput = { ... }
```

### AthenaUpdateDataCatalogInput <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUpdateDataCatalogInput: athena.AthenaUpdateDataCatalogInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### AthenaUpdateDataCatalogOutput <a name="aws-cdk-sdk.athena.AthenaUpdateDataCatalogOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUpdateDataCatalogOutput: athena.AthenaUpdateDataCatalogOutput = { ... }
```

### AthenaUpdateWorkGroupInput <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUpdateWorkGroupInput: athena.AthenaUpdateWorkGroupInput = { ... }
```

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput.property.workGroup"></a>

- *Type:* `string`

---

##### `configurationUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput.property.configurationUpdates"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates`](#aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput.property.description"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupInput.property.state"></a>

- *Type:* `string`

---

### AthenaUpdateWorkGroupOutput <a name="aws-cdk-sdk.athena.AthenaUpdateWorkGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaUpdateWorkGroupOutput: athena.AthenaUpdateWorkGroupOutput = { ... }
```

### AthenaWorkGroup <a name="aws-cdk-sdk.athena.AthenaWorkGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaWorkGroup: athena.AthenaWorkGroup = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroup.property.name"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroup.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroupConfiguration`](#aws-cdk-sdk.athena.AthenaWorkGroupConfiguration)

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroup.property.description"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroup.property.state"></a>

- *Type:* `string`

---

### AthenaWorkGroupConfiguration <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaWorkGroupConfiguration: athena.AthenaWorkGroupConfiguration = { ... }
```

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

- *Type:* `number`

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

- *Type:* `boolean`

---

##### `publishCloudWatchMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration.property.publishCloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration.property.requesterPaysEnabled"></a>

- *Type:* `boolean`

---

##### `resultConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfiguration.property.resultConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultConfiguration`](#aws-cdk-sdk.athena.AthenaResultConfiguration)

---

### AthenaWorkGroupConfigurationUpdates <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaWorkGroupConfigurationUpdates: athena.AthenaWorkGroupConfigurationUpdates = { ... }
```

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery"></a>

- *Type:* `number`

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration"></a>

- *Type:* `boolean`

---

##### `publishCloudWatchMetricsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.publishCloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `removeBytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery"></a>

- *Type:* `boolean`

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.requesterPaysEnabled"></a>

- *Type:* `boolean`

---

##### `resultConfigurationUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupConfigurationUpdates.property.resultConfigurationUpdates"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResultConfigurationUpdates`](#aws-cdk-sdk.athena.AthenaResultConfigurationUpdates)

---

### AthenaWorkGroupSummary <a name="aws-cdk-sdk.athena.AthenaWorkGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

const athenaWorkGroupSummary: athena.AthenaWorkGroupSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupSummary.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.athena.AthenaWorkGroupSummary.property.state"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AthenaResponsesBatchGetNamedQuery <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesBatchGetNamedQuery(__scope: Construct, __resources: string[], __input: AthenaBatchGetNamedQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput`](#aws-cdk-sdk.athena.AthenaBatchGetNamedQueryInput)

---



#### Properties <a name="Properties"></a>

##### `namedQueries`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.property.namedQueries"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaNamedQuery`](#aws-cdk-sdk.athena.AthenaNamedQuery)[]

---

##### `unprocessedNamedQueryIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetNamedQuery.property.unprocessedNamedQueryIds"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId`](#aws-cdk-sdk.athena.AthenaUnprocessedNamedQueryId)[]

---


### AthenaResponsesBatchGetQueryExecution <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesBatchGetQueryExecution(__scope: Construct, __resources: string[], __input: AthenaBatchGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaBatchGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `queryExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.property.queryExecutions"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaQueryExecution`](#aws-cdk-sdk.athena.AthenaQueryExecution)[]

---

##### `unprocessedQueryExecutionIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesBatchGetQueryExecution.property.unprocessedQueryExecutionIds"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId`](#aws-cdk-sdk.athena.AthenaUnprocessedQueryExecutionId)[]

---


### AthenaResponsesCreateNamedQuery <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesCreateNamedQuery(__scope: Construct, __resources: string[], __input: AthenaCreateNamedQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaCreateNamedQueryInput`](#aws-cdk-sdk.athena.AthenaCreateNamedQueryInput)

---



#### Properties <a name="Properties"></a>

##### `namedQueryId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesCreateNamedQuery.property.namedQueryId"></a>

- *Type:* `string`

---


### AthenaResponsesFetchDatabase <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchDatabase(__scope: Construct, __resources: string[], __input: AthenaGetDatabaseInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDatabaseInput`](#aws-cdk-sdk.athena.AthenaGetDatabaseInput)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabase.property.database"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase`](#aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase)

---


### AthenaResponsesFetchDatabaseDatabase <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchDatabaseDatabase(__scope: Construct, __resources: string[], __input: AthenaGetDatabaseInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDatabaseInput`](#aws-cdk-sdk.athena.AthenaGetDatabaseInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDatabaseDatabase.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---


### AthenaResponsesFetchDataCatalog <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchDataCatalog(__scope: Construct, __resources: string[], __input: AthenaGetDataCatalogInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDataCatalogInput`](#aws-cdk-sdk.athena.AthenaGetDataCatalogInput)

---



#### Properties <a name="Properties"></a>

##### `dataCatalog`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalog.property.dataCatalog"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog`](#aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog)

---


### AthenaResponsesFetchDataCatalogDataCatalog <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchDataCatalogDataCatalog(__scope: Construct, __resources: string[], __input: AthenaGetDataCatalogInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetDataCatalogInput`](#aws-cdk-sdk.athena.AthenaGetDataCatalogInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchDataCatalogDataCatalog.property.type"></a>

- *Type:* `string`

---


### AthenaResponsesFetchNamedQuery <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchNamedQuery(__scope: Construct, __resources: string[], __input: AthenaGetNamedQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetNamedQueryInput`](#aws-cdk-sdk.athena.AthenaGetNamedQueryInput)

---



#### Properties <a name="Properties"></a>

##### `namedQuery`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQuery.property.namedQuery"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery`](#aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery)

---


### AthenaResponsesFetchNamedQueryNamedQuery <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchNamedQueryNamedQuery(__scope: Construct, __resources: string[], __input: AthenaGetNamedQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetNamedQueryInput`](#aws-cdk-sdk.athena.AthenaGetNamedQueryInput)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.database"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.name"></a>

- *Type:* `string`

---

##### `namedQueryId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.namedQueryId"></a>

- *Type:* `string`

---

##### `queryString`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.queryString"></a>

- *Type:* `string`

---

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchNamedQueryNamedQuery.property.workGroup"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryExecution <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecution(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `queryExecution`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecution.property.queryExecution"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution)

---


### AthenaResponsesFetchQueryExecutionQueryExecution <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecution(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.query"></a>

- *Type:* `string`

---

##### `queryExecutionContext`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.queryExecutionContext"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext)

---

##### `queryExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.queryExecutionId"></a>

- *Type:* `string`

---

##### `resultConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.resultConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration)

---

##### `statementType`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.statementType"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.status"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus)

---

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecution.property.workGroup"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.property.catalog"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext.property.database"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration)

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration.property.outputLocation"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionOption`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryExecutionQueryExecutionStatistics <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `dataManifestLocation`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.dataManifestLocation"></a>

- *Type:* `string`

---

##### `dataScannedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.dataScannedInBytes"></a>

- *Type:* `number`

---

##### `engineExecutionTimeInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.engineExecutionTimeInMillis"></a>

- *Type:* `number`

---

##### `queryPlanningTimeInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.queryPlanningTimeInMillis"></a>

- *Type:* `number`

---

##### `queryQueueTimeInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.queryQueueTimeInMillis"></a>

- *Type:* `number`

---

##### `serviceProcessingTimeInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.serviceProcessingTimeInMillis"></a>

- *Type:* `number`

---

##### `totalExecutionTimeInMillis`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatistics.property.totalExecutionTimeInMillis"></a>

- *Type:* `number`

---


### AthenaResponsesFetchQueryExecutionQueryExecutionStatus <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus(__scope: Construct, __resources: string[], __input: AthenaGetQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaGetQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `completionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.property.completionDateTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.property.state"></a>

- *Type:* `string`

---

##### `stateChangeReason`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.property.stateChangeReason"></a>

- *Type:* `string`

---

##### `submissionDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryExecutionQueryExecutionStatus.property.submissionDateTime"></a>

- *Type:* `string`

---


### AthenaResponsesFetchQueryResults <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryResults(__scope: Construct, __resources: string[], __input: AthenaGetQueryResultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryResultsInput`](#aws-cdk-sdk.athena.AthenaGetQueryResultsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.property.nextToken"></a>

- *Type:* `string`

---

##### `resultSet`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.property.resultSet"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet)

---

##### `updateCount`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResults.property.updateCount"></a>

- *Type:* `number`

---


### AthenaResponsesFetchQueryResultsResultSet <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryResultsResultSet(__scope: Construct, __resources: string[], __input: AthenaGetQueryResultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryResultsInput`](#aws-cdk-sdk.athena.AthenaGetQueryResultsInput)

---



#### Properties <a name="Properties"></a>

##### `resultSetMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.property.resultSetMetadata"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata`](#aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata)

---

##### `rows`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSet.property.rows"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaRow`](#aws-cdk-sdk.athena.AthenaRow)[]

---


### AthenaResponsesFetchQueryResultsResultSetResultSetMetadata <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata(__scope: Construct, __resources: string[], __input: AthenaGetQueryResultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetQueryResultsInput`](#aws-cdk-sdk.athena.AthenaGetQueryResultsInput)

---



#### Properties <a name="Properties"></a>

##### `columnInfo`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchQueryResultsResultSetResultSetMetadata.property.columnInfo"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumnInfo`](#aws-cdk-sdk.athena.AthenaColumnInfo)[]

---


### AthenaResponsesFetchTableMetadata <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchTableMetadata(__scope: Construct, __resources: string[], __input: AthenaGetTableMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetTableMetadataInput`](#aws-cdk-sdk.athena.AthenaGetTableMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `tableMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadata.property.tableMetadata"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata`](#aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata)

---


### AthenaResponsesFetchTableMetadataTableMetadata <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchTableMetadataTableMetadata(__scope: Construct, __resources: string[], __input: AthenaGetTableMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetTableMetadataInput`](#aws-cdk-sdk.athena.AthenaGetTableMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.columns"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumn`](#aws-cdk-sdk.athena.AthenaColumn)[]

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.createTime"></a>

- *Type:* `string`

---

##### `lastAccessTime`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaColumn`](#aws-cdk-sdk.athena.AthenaColumn)[]

---

##### `tableType`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchTableMetadataTableMetadata.property.tableType"></a>

- *Type:* `string`

---


### AthenaResponsesFetchWorkGroup <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchWorkGroup(__scope: Construct, __resources: string[], __input: AthenaGetWorkGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---



#### Properties <a name="Properties"></a>

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroup.property.workGroup"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup`](#aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup)

---


### AthenaResponsesFetchWorkGroupWorkGroup <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchWorkGroupWorkGroup(__scope: Construct, __resources: string[], __input: AthenaGetWorkGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration`](#aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration)

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroup.property.state"></a>

- *Type:* `string`

---


### AthenaResponsesFetchWorkGroupWorkGroupConfiguration <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration(__scope: Construct, __resources: string[], __input: AthenaGetWorkGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---



#### Properties <a name="Properties"></a>

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

- *Type:* `number`

---

##### `enforceWorkGroupConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

- *Type:* `boolean`

---

##### `publishCloudWatchMetricsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.property.publishCloudWatchMetricsEnabled"></a>

- *Type:* `boolean`

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled"></a>

- *Type:* `boolean`

---

##### `resultConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfiguration.property.resultConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration`](#aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration)

---


### AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration(__scope: Construct, __resources: string[], __input: AthenaGetWorkGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration`](#aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration)

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation"></a>

- *Type:* `string`

---


### AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration(__scope: Construct, __resources: string[], __input: AthenaGetWorkGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaGetWorkGroupInput`](#aws-cdk-sdk.athena.AthenaGetWorkGroupInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionOption`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---


### AthenaResponsesListDatabases <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListDatabases(__scope: Construct, __resources: string[], __input: AthenaListDatabasesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListDatabasesInput`](#aws-cdk-sdk.athena.AthenaListDatabasesInput)

---



#### Properties <a name="Properties"></a>

##### `databaseList`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.property.databaseList"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDatabase`](#aws-cdk-sdk.athena.AthenaDatabase)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDatabases.property.nextToken"></a>

- *Type:* `string`

---


### AthenaResponsesListDataCatalogs <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListDataCatalogs(__scope: Construct, __resources: string[], __input: AthenaListDataCatalogsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListDataCatalogsInput`](#aws-cdk-sdk.athena.AthenaListDataCatalogsInput)

---



#### Properties <a name="Properties"></a>

##### `dataCatalogsSummary`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.property.dataCatalogsSummary"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaDataCatalogSummary`](#aws-cdk-sdk.athena.AthenaDataCatalogSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListDataCatalogs.property.nextToken"></a>

- *Type:* `string`

---


### AthenaResponsesListNamedQueries <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListNamedQueries(__scope: Construct, __resources: string[], __input: AthenaListNamedQueriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListNamedQueriesInput`](#aws-cdk-sdk.athena.AthenaListNamedQueriesInput)

---



#### Properties <a name="Properties"></a>

##### `namedQueryIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.property.namedQueryIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListNamedQueries.property.nextToken"></a>

- *Type:* `string`

---


### AthenaResponsesListQueryExecutions <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListQueryExecutions(__scope: Construct, __resources: string[], __input: AthenaListQueryExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListQueryExecutionsInput`](#aws-cdk-sdk.athena.AthenaListQueryExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `queryExecutionIds`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListQueryExecutions.property.queryExecutionIds"></a>

- *Type:* `string`[]

---


### AthenaResponsesListTableMetadata <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListTableMetadata(__scope: Construct, __resources: string[], __input: AthenaListTableMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListTableMetadataInput`](#aws-cdk-sdk.athena.AthenaListTableMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.property.nextToken"></a>

- *Type:* `string`

---

##### `tableMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTableMetadata.property.tableMetadataList"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTableMetadata`](#aws-cdk-sdk.athena.AthenaTableMetadata)[]

---


### AthenaResponsesListTagsForResource <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AthenaListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListTagsForResourceInput`](#aws-cdk-sdk.athena.AthenaListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaTag`](#aws-cdk-sdk.athena.AthenaTag)[]

---


### AthenaResponsesListWorkGroups <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesListWorkGroups(__scope: Construct, __resources: string[], __input: AthenaListWorkGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaListWorkGroupsInput`](#aws-cdk-sdk.athena.AthenaListWorkGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `workGroups`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesListWorkGroups.property.workGroups"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaWorkGroupSummary`](#aws-cdk-sdk.athena.AthenaWorkGroupSummary)[]

---


### AthenaResponsesStartQueryExecution <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution"></a>

#### Initializer <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution.Initializer"></a>

```typescript
import { athena } from 'aws-cdk-sdk'

new athena.AthenaResponsesStartQueryExecution(__scope: Construct, __resources: string[], __input: AthenaStartQueryExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.athena.AthenaStartQueryExecutionInput`](#aws-cdk-sdk.athena.AthenaStartQueryExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `queryExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.athena.AthenaResponsesStartQueryExecution.property.queryExecutionId"></a>

- *Type:* `string`

---



