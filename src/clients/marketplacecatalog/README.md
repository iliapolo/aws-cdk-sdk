# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MarketplaceCatalogClient <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelChangeSet` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.cancelChangeSet"></a>

```typescript
public cancelChangeSet(input: MarketplaceCatalogCancelChangeSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest)

---

##### `describeChangeSet` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.describeChangeSet"></a>

```typescript
public describeChangeSet(input: MarketplaceCatalogDescribeChangeSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest)

---

##### `describeEntity` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.describeEntity"></a>

```typescript
public describeEntity(input: MarketplaceCatalogDescribeEntityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest)

---

##### `listChangeSets` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.listChangeSets"></a>

```typescript
public listChangeSets(input: MarketplaceCatalogListChangeSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest)

---

##### `listEntities` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.listEntities"></a>

```typescript
public listEntities(input: MarketplaceCatalogListEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest)

---

##### `startChangeSet` <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.startChangeSet"></a>

```typescript
public startChangeSet(input: MarketplaceCatalogStartChangeSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest)

---




## Structs <a name="Structs"></a>

### MarketplaceCatalogCancelChangeSetRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogCancelChangeSetRequest: marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest.property.catalog"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest.property.changeSetId"></a>

- *Type:* `string`

---

### MarketplaceCatalogCancelChangeSetResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogCancelChangeSetResponse: marketplacecatalog.MarketplaceCatalogCancelChangeSetResponse = { ... }
```

##### `changeSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetResponse.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetResponse.property.changeSetId"></a>

- *Type:* `string`

---

### MarketplaceCatalogChange <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogChange: marketplacecatalog.MarketplaceCatalogChange = { ... }
```

##### `changeType`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange.property.changeType"></a>

- *Type:* `string`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange.property.details"></a>

- *Type:* `string`

---

##### `entity`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange.property.entity"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity)

---

### MarketplaceCatalogChangeSetSummaryListItem <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogChangeSetSummaryListItem: marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem = { ... }
```

##### `changeSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.changeSetName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.endTime"></a>

- *Type:* `string`

---

##### `entityIdList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.entityIdList"></a>

- *Type:* `string`[]

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.failureCode"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem.property.status"></a>

- *Type:* `string`

---

### MarketplaceCatalogChangeSummary <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogChangeSummary: marketplacecatalog.MarketplaceCatalogChangeSummary = { ... }
```

##### `changeType`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary.property.changeType"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary.property.details"></a>

- *Type:* `string`

---

##### `entity`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary.property.entity"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity)

---

##### `errorDetailList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary.property.errorDetailList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogErrorDetail`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogErrorDetail)[]

---

### MarketplaceCatalogDescribeChangeSetRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogDescribeChangeSetRequest: marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest.property.catalog"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest.property.changeSetId"></a>

- *Type:* `string`

---

### MarketplaceCatalogDescribeChangeSetResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogDescribeChangeSetResponse: marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse = { ... }
```

##### `changeSet`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.changeSet"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary)[]

---

##### `changeSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.changeSetName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.endTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.failureDescription"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetResponse.property.status"></a>

- *Type:* `string`

---

### MarketplaceCatalogDescribeEntityRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogDescribeEntityRequest: marketplacecatalog.MarketplaceCatalogDescribeEntityRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest.property.catalog"></a>

- *Type:* `string`

---

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest.property.entityId"></a>

- *Type:* `string`

---

### MarketplaceCatalogDescribeEntityResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogDescribeEntityResponse: marketplacecatalog.MarketplaceCatalogDescribeEntityResponse = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse.property.details"></a>

- *Type:* `string`

---

##### `entityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse.property.entityArn"></a>

- *Type:* `string`

---

##### `entityIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse.property.entityIdentifier"></a>

- *Type:* `string`

---

##### `entityType`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse.property.entityType"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

### MarketplaceCatalogEntity <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogEntity: marketplacecatalog.MarketplaceCatalogEntity = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity.property.type"></a>

- *Type:* `string`

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntity.property.identifier"></a>

- *Type:* `string`

---

### MarketplaceCatalogEntitySummary <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogEntitySummary: marketplacecatalog.MarketplaceCatalogEntitySummary = { ... }
```

##### `entityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.entityArn"></a>

- *Type:* `string`

---

##### `entityId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.entityId"></a>

- *Type:* `string`

---

##### `entityType`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.entityType"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.name"></a>

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary.property.visibility"></a>

- *Type:* `string`

---

### MarketplaceCatalogErrorDetail <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogErrorDetail: marketplacecatalog.MarketplaceCatalogErrorDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogErrorDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogErrorDetail.property.errorMessage"></a>

- *Type:* `string`

---

### MarketplaceCatalogFilter <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogFilter: marketplacecatalog.MarketplaceCatalogFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter.property.name"></a>

- *Type:* `string`

---

##### `valueList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter.property.valueList"></a>

- *Type:* `string`[]

---

### MarketplaceCatalogListChangeSetsRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogListChangeSetsRequest: marketplacecatalog.MarketplaceCatalogListChangeSetsRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest.property.catalog"></a>

- *Type:* `string`

---

##### `filterList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest.property.filterList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort)

---

### MarketplaceCatalogListChangeSetsResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogListChangeSetsResponse: marketplacecatalog.MarketplaceCatalogListChangeSetsResponse = { ... }
```

##### `changeSetSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsResponse.property.changeSetSummaryList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MarketplaceCatalogListEntitiesRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogListEntitiesRequest: marketplacecatalog.MarketplaceCatalogListEntitiesRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.catalog"></a>

- *Type:* `string`

---

##### `entityType`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.entityType"></a>

- *Type:* `string`

---

##### `filterList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.filterList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort)

---

### MarketplaceCatalogListEntitiesResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogListEntitiesResponse: marketplacecatalog.MarketplaceCatalogListEntitiesResponse = { ... }
```

##### `entitySummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesResponse.property.entitySummaryList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### MarketplaceCatalogSort <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogSort: marketplacecatalog.MarketplaceCatalogSort = { ... }
```

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogSort.property.sortOrder"></a>

- *Type:* `string`

---

### MarketplaceCatalogStartChangeSetRequest <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogStartChangeSetRequest: marketplacecatalog.MarketplaceCatalogStartChangeSetRequest = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest.property.catalog"></a>

- *Type:* `string`

---

##### `changeSet`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest.property.changeSet"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChange)[]

---

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest.property.changeSetName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### MarketplaceCatalogStartChangeSetResponse <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

const marketplaceCatalogStartChangeSetResponse: marketplacecatalog.MarketplaceCatalogStartChangeSetResponse = { ... }
```

##### `changeSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetResponse.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetResponse.property.changeSetId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MarketplaceCatalogResponsesCancelChangeSet <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet(__scope: Construct, __resources: string[], __input: MarketplaceCatalogCancelChangeSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogCancelChangeSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesCancelChangeSet.property.changeSetId"></a>

- *Type:* `string`

---


### MarketplaceCatalogResponsesDescribeChangeSet <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet(__scope: Construct, __resources: string[], __input: MarketplaceCatalogDescribeChangeSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeChangeSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeSet`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.changeSet"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSummary)[]

---

##### `changeSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.changeSetName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.endTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.failureCode"></a>

- *Type:* `string`

---

##### `failureDescription`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.failureDescription"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeChangeSet.property.status"></a>

- *Type:* `string`

---


### MarketplaceCatalogResponsesDescribeEntity <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity(__scope: Construct, __resources: string[], __input: MarketplaceCatalogDescribeEntityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogDescribeEntityRequest)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.property.details"></a>

- *Type:* `string`

---

##### `entityArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.property.entityArn"></a>

- *Type:* `string`

---

##### `entityIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.property.entityIdentifier"></a>

- *Type:* `string`

---

##### `entityType`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.property.entityType"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesDescribeEntity.property.lastModifiedDate"></a>

- *Type:* `string`

---


### MarketplaceCatalogResponsesListChangeSets <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesListChangeSets(__scope: Construct, __resources: string[], __input: MarketplaceCatalogListChangeSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListChangeSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `changeSetSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.property.changeSetSummaryList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogChangeSetSummaryListItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListChangeSets.property.nextToken"></a>

- *Type:* `string`

---


### MarketplaceCatalogResponsesListEntities <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesListEntities(__scope: Construct, __resources: string[], __input: MarketplaceCatalogListEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogListEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entitySummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.property.entitySummaryList"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogEntitySummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesListEntities.property.nextToken"></a>

- *Type:* `string`

---


### MarketplaceCatalogResponsesStartChangeSet <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.Initializer"></a>

```typescript
import { marketplacecatalog } from 'aws-cdk-sdk'

new marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet(__scope: Construct, __resources: string[], __input: MarketplaceCatalogStartChangeSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest`](#aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogStartChangeSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.property.changeSetArn"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.marketplacecatalog.MarketplaceCatalogResponsesStartChangeSet.property.changeSetId"></a>

- *Type:* `string`

---



