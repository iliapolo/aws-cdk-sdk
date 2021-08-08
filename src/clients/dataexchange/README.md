# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataExchangeClient <a name="aws-cdk-sdk.dataexchange.DataExchangeClient"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelJob` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.cancelJob"></a>

```typescript
public cancelJob(input: DataExchangeCancelJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCancelJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCancelJobRequest)

---

##### `createDataSet` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.createDataSet"></a>

```typescript
public createDataSet(input: DataExchangeCreateDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest)

---

##### `createJob` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.createJob"></a>

```typescript
public createJob(input: DataExchangeCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---

##### `createRevision` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.createRevision"></a>

```typescript
public createRevision(input: DataExchangeCreateRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest)

---

##### `deleteAsset` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.deleteAsset"></a>

```typescript
public deleteAsset(input: DataExchangeDeleteAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest)

---

##### `deleteDataSet` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.deleteDataSet"></a>

```typescript
public deleteDataSet(input: DataExchangeDeleteDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDeleteDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeDeleteDataSetRequest)

---

##### `deleteRevision` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.deleteRevision"></a>

```typescript
public deleteRevision(input: DataExchangeDeleteRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDeleteRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeDeleteRevisionRequest)

---

##### `fetchAsset` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.fetchAsset"></a>

```typescript
public fetchAsset(input: DataExchangeGetAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest)

---

##### `fetchDataSet` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.fetchDataSet"></a>

```typescript
public fetchDataSet(input: DataExchangeGetDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest)

---

##### `fetchJob` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.fetchJob"></a>

```typescript
public fetchJob(input: DataExchangeGetJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---

##### `fetchRevision` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.fetchRevision"></a>

```typescript
public fetchRevision(input: DataExchangeGetRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest)

---

##### `listDataSetRevisions` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.listDataSetRevisions"></a>

```typescript
public listDataSetRevisions(input: DataExchangeListDataSetRevisionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest)

---

##### `listDataSets` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.listDataSets"></a>

```typescript
public listDataSets(input: DataExchangeListDataSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.listJobs"></a>

```typescript
public listJobs(input: DataExchangeListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest)

---

##### `listRevisionAssets` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.listRevisionAssets"></a>

```typescript
public listRevisionAssets(input: DataExchangeListRevisionAssetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DataExchangeListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest)

---

##### `startJob` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.startJob"></a>

```typescript
public startJob(input: DataExchangeStartJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeStartJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeStartJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.tagResource"></a>

```typescript
public tagResource(input: DataExchangeTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeTagResourceRequest`](#aws-cdk-sdk.dataexchange.DataExchangeTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.untagResource"></a>

```typescript
public untagResource(input: DataExchangeUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUntagResourceRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUntagResourceRequest)

---

##### `updateAsset` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.updateAsset"></a>

```typescript
public updateAsset(input: DataExchangeUpdateAssetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest)

---

##### `updateDataSet` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.updateDataSet"></a>

```typescript
public updateDataSet(input: DataExchangeUpdateDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest)

---

##### `updateRevision` <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.updateRevision"></a>

```typescript
public updateRevision(input: DataExchangeUpdateRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest)

---




## Structs <a name="Structs"></a>

### DataExchangeAssetDestinationEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeAssetDestinationEntry: dataexchange.DataExchangeAssetDestinationEntry = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry.property.assetId"></a>

- *Type:* `string`

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry.property.key"></a>

- *Type:* `string`

---

### DataExchangeAssetDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeAssetDetails: dataexchange.DataExchangeAssetDetails = { ... }
```

##### `s3SnapshotAsset`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetDetails.property.s3SnapshotAsset"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeS3SnapshotAsset`](#aws-cdk-sdk.dataexchange.DataExchangeS3SnapshotAsset)

---

### DataExchangeAssetEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeAssetEntry: dataexchange.DataExchangeAssetEntry = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.arn"></a>

- *Type:* `string`

---

##### `assetDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.assetDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDetails`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDetails)

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.revisionId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.updatedAt"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetEntry.property.sourceId"></a>

- *Type:* `string`

---

### DataExchangeAssetSourceEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeAssetSourceEntry: dataexchange.DataExchangeAssetSourceEntry = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry.property.key"></a>

- *Type:* `string`

---

### DataExchangeCancelJobRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeCancelJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCancelJobRequest: dataexchange.DataExchangeCancelJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCancelJobRequest.property.jobId"></a>

- *Type:* `string`

---

### DataExchangeCreateDataSetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateDataSetRequest: dataexchange.DataExchangeCreateDataSetRequest = { ... }
```

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest.property.assetType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataExchangeCreateDataSetResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateDataSetResponse: dataexchange.DataExchangeCreateDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeOriginDetails)

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeCreateJobRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateJobRequest: dataexchange.DataExchangeCreateJobRequest = { ... }
```

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeRequestDetails`](#aws-cdk-sdk.dataexchange.DataExchangeRequestDetails)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest.property.type"></a>

- *Type:* `string`

---

### DataExchangeCreateJobResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateJobResponse: dataexchange.DataExchangeCreateJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponseDetails)

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobError`](#aws-cdk-sdk.dataexchange.DataExchangeJobError)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateJobResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeCreateRevisionRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateRevisionRequest: dataexchange.DataExchangeCreateRevisionRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest.property.comment"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataExchangeCreateRevisionResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeCreateRevisionResponse: dataexchange.DataExchangeCreateRevisionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeDataSetEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeDataSetEntry: dataexchange.DataExchangeDataSetEntry = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.origin"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.updatedAt"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeOriginDetails)

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry.property.sourceId"></a>

- *Type:* `string`

---

### DataExchangeDeleteAssetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeDeleteAssetRequest: dataexchange.DataExchangeDeleteAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteAssetRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeDeleteDataSetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeDeleteDataSetRequest: dataexchange.DataExchangeDeleteDataSetRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

### DataExchangeDeleteRevisionRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeDeleteRevisionRequest: dataexchange.DataExchangeDeleteRevisionRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteRevisionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDeleteRevisionRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeDetails: dataexchange.DataExchangeDetails = { ... }
```

##### `importAssetFromSignedUrlJobErrorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDetails.property.importAssetFromSignedUrlJobErrorDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlJobErrorDetails`](#aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlJobErrorDetails)

---

##### `importAssetsFromS3JobErrorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeDetails.property.importAssetsFromS3JobErrorDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry)[]

---

### DataExchangeExportAssetsToS3RequestDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeExportAssetsToS3RequestDetails: dataexchange.DataExchangeExportAssetsToS3RequestDetails = { ... }
```

##### `assetDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails.property.assetDestinations"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails.property.revisionId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption`](#aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption)

---

### DataExchangeExportAssetsToS3ResponseDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeExportAssetsToS3ResponseDetails: dataexchange.DataExchangeExportAssetsToS3ResponseDetails = { ... }
```

##### `assetDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails.property.assetDestinations"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails.property.revisionId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption`](#aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption)

---

### DataExchangeExportAssetToSignedUrlRequestDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeExportAssetToSignedUrlRequestDetails: dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeExportAssetToSignedUrlResponseDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeExportAssetToSignedUrlResponseDetails: dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails.property.revisionId"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---

### DataExchangeExportServerSideEncryption <a name="aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeExportServerSideEncryption: dataexchange.DataExchangeExportServerSideEncryption = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption.property.type"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeExportServerSideEncryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

### DataExchangeGetAssetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetAssetRequest: dataexchange.DataExchangeGetAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeGetAssetResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetAssetResponse: dataexchange.DataExchangeGetAssetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.arn"></a>

- *Type:* `string`

---

##### `assetDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.assetDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDetails`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDetails)

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetAssetResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeGetDataSetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetDataSetRequest: dataexchange.DataExchangeGetDataSetRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

### DataExchangeGetDataSetResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetDataSetResponse: dataexchange.DataExchangeGetDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeOriginDetails)

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetDataSetResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeGetJobRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetJobRequest: dataexchange.DataExchangeGetJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest.property.jobId"></a>

- *Type:* `string`

---

### DataExchangeGetJobResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetJobResponse: dataexchange.DataExchangeGetJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponseDetails)

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobError`](#aws-cdk-sdk.dataexchange.DataExchangeJobError)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetJobResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeGetRevisionRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetRevisionRequest: dataexchange.DataExchangeGetRevisionRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeGetRevisionResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeGetRevisionResponse: dataexchange.DataExchangeGetRevisionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeGetRevisionResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeImportAssetFromSignedUrlJobErrorDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlJobErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeImportAssetFromSignedUrlJobErrorDetails: dataexchange.DataExchangeImportAssetFromSignedUrlJobErrorDetails = { ... }
```

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlJobErrorDetails.property.assetName"></a>

- *Type:* `string`

---

### DataExchangeImportAssetFromSignedUrlRequestDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeImportAssetFromSignedUrlRequestDetails: dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails = { ... }
```

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails.property.assetName"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `md5Hash`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails.property.md5Hash"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeImportAssetFromSignedUrlResponseDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeImportAssetFromSignedUrlResponseDetails: dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails = { ... }
```

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.assetName"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.revisionId"></a>

- *Type:* `string`

---

##### `md5Hash`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.md5Hash"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---

### DataExchangeImportAssetsFromS3RequestDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeImportAssetsFromS3RequestDetails: dataexchange.DataExchangeImportAssetsFromS3RequestDetails = { ... }
```

##### `assetSources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails.property.assetSources"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeImportAssetsFromS3ResponseDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeImportAssetsFromS3ResponseDetails: dataexchange.DataExchangeImportAssetsFromS3ResponseDetails = { ... }
```

##### `assetSources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails.property.assetSources"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeJobEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeJobEntry: dataexchange.DataExchangeJobEntry = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.createdAt"></a>

- *Type:* `string`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponseDetails)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.updatedAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobEntry.property.errors"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobError`](#aws-cdk-sdk.dataexchange.DataExchangeJobError)[]

---

### DataExchangeJobError <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeJobError: dataexchange.DataExchangeJobError = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.message"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDetails`](#aws-cdk-sdk.dataexchange.DataExchangeDetails)

---

##### `limitName`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.limitName"></a>

- *Type:* `string`

---

##### `limitValue`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.limitValue"></a>

- *Type:* `number`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeJobError.property.resourceType"></a>

- *Type:* `string`

---

### DataExchangeListDataSetRevisionsRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListDataSetRevisionsRequest: dataexchange.DataExchangeListDataSetRevisionsRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataExchangeListDataSetRevisionsResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListDataSetRevisionsResponse: dataexchange.DataExchangeListDataSetRevisionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsResponse.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry`](#aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry)[]

---

### DataExchangeListDataSetsRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListDataSetsRequest: dataexchange.DataExchangeListDataSetsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest.property.origin"></a>

- *Type:* `string`

---

### DataExchangeListDataSetsResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListDataSetsResponse: dataexchange.DataExchangeListDataSetsResponse = { ... }
```

##### `dataSets`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsResponse.property.dataSets"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry`](#aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListDataSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataExchangeListJobsRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListJobsRequest: dataexchange.DataExchangeListJobsRequest = { ... }
```

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeListJobsResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListJobsResponse: dataexchange.DataExchangeListJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobEntry`](#aws-cdk-sdk.dataexchange.DataExchangeJobEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataExchangeListRevisionAssetsRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListRevisionAssetsRequest: dataexchange.DataExchangeListRevisionAssetsRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataExchangeListRevisionAssetsResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListRevisionAssetsResponse: dataexchange.DataExchangeListRevisionAssetsResponse = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsResponse.property.assets"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataExchangeListTagsForResourceRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListTagsForResourceRequest: dataexchange.DataExchangeListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### DataExchangeListTagsForResourceResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeListTagsForResourceResponse: dataexchange.DataExchangeListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataExchangeOriginDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeOriginDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeOriginDetails: dataexchange.DataExchangeOriginDetails = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeOriginDetails.property.productId"></a>

- *Type:* `string`

---

### DataExchangeRequestDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeRequestDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeRequestDetails: dataexchange.DataExchangeRequestDetails = { ... }
```

##### `exportAssetsToS3`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRequestDetails.property.exportAssetsToS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails`](#aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3RequestDetails)

---

##### `exportAssetToSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRequestDetails.property.exportAssetToSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails`](#aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlRequestDetails)

---

##### `importAssetFromSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRequestDetails.property.importAssetFromSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails`](#aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlRequestDetails)

---

##### `importAssetsFromS3`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRequestDetails.property.importAssetsFromS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails`](#aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3RequestDetails)

---

### DataExchangeResponseDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeResponseDetails: dataexchange.DataExchangeResponseDetails = { ... }
```

##### `exportAssetsToS3`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponseDetails.property.exportAssetsToS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeExportAssetsToS3ResponseDetails)

---

##### `exportAssetToSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponseDetails.property.exportAssetToSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeExportAssetToSignedUrlResponseDetails)

---

##### `importAssetFromSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponseDetails.property.importAssetFromSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeImportAssetFromSignedUrlResponseDetails)

---

##### `importAssetsFromS3`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponseDetails.property.importAssetsFromS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails`](#aws-cdk-sdk.dataexchange.DataExchangeImportAssetsFromS3ResponseDetails)

---

### DataExchangeRevisionEntry <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeRevisionEntry: dataexchange.DataExchangeRevisionEntry = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.id"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.updatedAt"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.comment"></a>

- *Type:* `string`

---

##### `finalized`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.finalized"></a>

- *Type:* `boolean`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry.property.sourceId"></a>

- *Type:* `string`

---

### DataExchangeS3SnapshotAsset <a name="aws-cdk-sdk.dataexchange.DataExchangeS3SnapshotAsset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeS3SnapshotAsset: dataexchange.DataExchangeS3SnapshotAsset = { ... }
```

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeS3SnapshotAsset.property.size"></a>

- *Type:* `number`

---

### DataExchangeStartJobRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeStartJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeStartJobRequest: dataexchange.DataExchangeStartJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeStartJobRequest.property.jobId"></a>

- *Type:* `string`

---

### DataExchangeStartJobResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeStartJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeStartJobResponse: dataexchange.DataExchangeStartJobResponse = { ... }
```

### DataExchangeTagResourceRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeTagResourceRequest: dataexchange.DataExchangeTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataExchangeUntagResourceRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUntagResourceRequest: dataexchange.DataExchangeUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DataExchangeUpdateAssetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateAssetRequest: dataexchange.DataExchangeUpdateAssetRequest = { ... }
```

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest.property.revisionId"></a>

- *Type:* `string`

---

### DataExchangeUpdateAssetResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateAssetResponse: dataexchange.DataExchangeUpdateAssetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.arn"></a>

- *Type:* `string`

---

##### `assetDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.assetDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDetails`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDetails)

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeUpdateDataSetRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateDataSetRequest: dataexchange.DataExchangeUpdateDataSetRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest.property.name"></a>

- *Type:* `string`

---

### DataExchangeUpdateDataSetResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateDataSetResponse: dataexchange.DataExchangeUpdateDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeOriginDetails)

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetResponse.property.updatedAt"></a>

- *Type:* `string`

---

### DataExchangeUpdateRevisionRequest <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateRevisionRequest: dataexchange.DataExchangeUpdateRevisionRequest = { ... }
```

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest.property.comment"></a>

- *Type:* `string`

---

##### `finalized`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest.property.finalized"></a>

- *Type:* `boolean`

---

### DataExchangeUpdateRevisionResponse <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

const dataExchangeUpdateRevisionResponse: dataexchange.DataExchangeUpdateRevisionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionResponse.property.updatedAt"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DataExchangeResponsesCreateDataSet <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateDataSet(__scope: Construct, __resources: string[], __input: DataExchangeCreateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails)

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSet.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateDataSetOriginDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateDataSetOriginDetails(__scope: Construct, __resources: string[], __input: DataExchangeCreateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateDataSetOriginDetails.property.productId"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJob <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJob(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.createdAt"></a>

- *Type:* `string`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails)

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.errors"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobError`](#aws-cdk-sdk.dataexchange.DataExchangeJobError)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJob.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJobDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetails(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `exportAssetsToS3`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.property.exportAssetsToS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3)

---

##### `exportAssetToSignedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.property.exportAssetToSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl)

---

##### `importAssetFromSignedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.property.importAssetFromSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl)

---

##### `importAssetsFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetails.property.importAssetsFromS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3)

---


### DataExchangeResponsesCreateJobDetailsExportAssetsToS3 <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.property.assetDestinations"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.property.dataSetId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3.property.revisionId"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetsToS3Encryption.property.type"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.property.revisionId"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsExportAssetToSignedUrl.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.assetName"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.dataSetId"></a>

- *Type:* `string`

---

##### `md5Hash`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.md5Hash"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.revisionId"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetFromSignedUrl.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateJobDetailsImportAssetsFromS3 <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3(__scope: Construct, __resources: string[], __input: DataExchangeCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetSources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.property.assetSources"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateJobDetailsImportAssetsFromS3.property.revisionId"></a>

- *Type:* `string`

---


### DataExchangeResponsesCreateRevision <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesCreateRevision(__scope: Construct, __resources: string[], __input: DataExchangeCreateRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeCreateRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesCreateRevision.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchAsset <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchAsset(__scope: Construct, __resources: string[], __input: DataExchangeGetAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.arn"></a>

- *Type:* `string`

---

##### `assetDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.assetDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails)

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.revisionId"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAsset.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchAssetAssetDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchAssetAssetDetails(__scope: Construct, __resources: string[], __input: DataExchangeGetAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `s3SnapshotAsset`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetails.property.s3SnapshotAsset"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset)

---


### DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset(__scope: Construct, __resources: string[], __input: DataExchangeGetAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchAssetAssetDetailsS3SnapshotAsset.property.size"></a>

- *Type:* `number`

---


### DataExchangeResponsesFetchDataSet <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchDataSet(__scope: Construct, __resources: string[], __input: DataExchangeGetDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails)

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSet.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchDataSetOriginDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchDataSetOriginDetails(__scope: Construct, __resources: string[], __input: DataExchangeGetDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchDataSetOriginDetails.property.productId"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJob <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJob(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.createdAt"></a>

- *Type:* `string`

---

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.details"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails)

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.errors"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobError`](#aws-cdk-sdk.dataexchange.DataExchangeJobError)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.type"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJob.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJobDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetails(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `exportAssetsToS3`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.property.exportAssetsToS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3)

---

##### `exportAssetToSignedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.property.exportAssetToSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl)

---

##### `importAssetFromSignedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.property.importAssetFromSignedUrl"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl)

---

##### `importAssetsFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetails.property.importAssetsFromS3"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3)

---


### DataExchangeResponsesFetchJobDetailsExportAssetsToS3 <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.property.assetDestinations"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetDestinationEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.property.dataSetId"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3.property.revisionId"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetsToS3Encryption.property.type"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.property.assetId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.property.revisionId"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsExportAssetToSignedUrl.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetName`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.assetName"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.dataSetId"></a>

- *Type:* `string`

---

##### `md5Hash`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.md5Hash"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.revisionId"></a>

- *Type:* `string`

---

##### `signedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.signedUrl"></a>

- *Type:* `string`

---

##### `signedUrlExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetFromSignedUrl.property.signedUrlExpiresAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchJobDetailsImportAssetsFromS3 <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3(__scope: Construct, __resources: string[], __input: DataExchangeGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assetSources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.property.assetSources"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetSourceEntry)[]

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.property.dataSetId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchJobDetailsImportAssetsFromS3.property.revisionId"></a>

- *Type:* `string`

---


### DataExchangeResponsesFetchRevision <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesFetchRevision(__scope: Construct, __resources: string[], __input: DataExchangeGetRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeGetRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.sourceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesFetchRevision.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesListDataSetRevisions <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesListDataSetRevisions(__scope: Construct, __resources: string[], __input: DataExchangeListDataSetRevisionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListDataSetRevisionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSetRevisions.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry`](#aws-cdk-sdk.dataexchange.DataExchangeRevisionEntry)[]

---


### DataExchangeResponsesListDataSets <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesListDataSets(__scope: Construct, __resources: string[], __input: DataExchangeListDataSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListDataSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSets`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.property.dataSets"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry`](#aws-cdk-sdk.dataexchange.DataExchangeDataSetEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListDataSets.property.nextToken"></a>

- *Type:* `string`

---


### DataExchangeResponsesListJobs <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesListJobs(__scope: Construct, __resources: string[], __input: DataExchangeListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeJobEntry`](#aws-cdk-sdk.dataexchange.DataExchangeJobEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### DataExchangeResponsesListRevisionAssets <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesListRevisionAssets(__scope: Construct, __resources: string[], __input: DataExchangeListRevisionAssetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListRevisionAssetsRequest)

---



#### Properties <a name="Properties"></a>

##### `assets`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.property.assets"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeAssetEntry`](#aws-cdk-sdk.dataexchange.DataExchangeAssetEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListRevisionAssets.property.nextToken"></a>

- *Type:* `string`

---


### DataExchangeResponsesListTagsForResource <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DataExchangeListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest`](#aws-cdk-sdk.dataexchange.DataExchangeListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataExchangeResponsesUpdateAsset <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateAsset(__scope: Construct, __resources: string[], __input: DataExchangeUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.arn"></a>

- *Type:* `string`

---

##### `assetDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.assetDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails)

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.dataSetId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.revisionId"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAsset.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesUpdateAssetAssetDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateAssetAssetDetails(__scope: Construct, __resources: string[], __input: DataExchangeUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `s3SnapshotAsset`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetails.property.s3SnapshotAsset"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset)

---


### DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset(__scope: Construct, __resources: string[], __input: DataExchangeUpdateAssetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateAssetRequest)

---



#### Properties <a name="Properties"></a>

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateAssetAssetDetailsS3SnapshotAsset.property.size"></a>

- *Type:* `number`

---


### DataExchangeResponsesUpdateDataSet <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateDataSet(__scope: Construct, __resources: string[], __input: DataExchangeUpdateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.arn"></a>

- *Type:* `string`

---

##### `assetType`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.assetType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.origin"></a>

- *Type:* `string`

---

##### `originDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.originDetails"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails`](#aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails)

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSet.property.updatedAt"></a>

- *Type:* `string`

---


### DataExchangeResponsesUpdateDataSetOriginDetails <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails(__scope: Construct, __resources: string[], __input: DataExchangeUpdateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateDataSetOriginDetails.property.productId"></a>

- *Type:* `string`

---


### DataExchangeResponsesUpdateRevision <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision"></a>

#### Initializer <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.Initializer"></a>

```typescript
import { dataexchange } from 'aws-cdk-sdk'

new dataexchange.DataExchangeResponsesUpdateRevision(__scope: Construct, __resources: string[], __input: DataExchangeUpdateRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest`](#aws-cdk-sdk.dataexchange.DataExchangeUpdateRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.arn"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.comment"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.dataSetId"></a>

- *Type:* `string`

---

##### `finalized`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.finalized"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.id"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.sourceId"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.dataexchange.DataExchangeResponsesUpdateRevision.property.updatedAt"></a>

- *Type:* `string`

---



