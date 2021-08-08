# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EbsClient <a name="aws-cdk-sdk.ebs.EbsClient"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EbsClient.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EbsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `completeSnapshot` <a name="aws-cdk-sdk.ebs.EbsClient.completeSnapshot"></a>

```typescript
public completeSnapshot(input: EbsCompleteSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest`](#aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest)

---

##### `fetchSnapshotBlock` <a name="aws-cdk-sdk.ebs.EbsClient.fetchSnapshotBlock"></a>

```typescript
public fetchSnapshotBlock(input: EbsGetSnapshotBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest`](#aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest)

---

##### `listChangedBlocks` <a name="aws-cdk-sdk.ebs.EbsClient.listChangedBlocks"></a>

```typescript
public listChangedBlocks(input: EbsListChangedBlocksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsListChangedBlocksRequest`](#aws-cdk-sdk.ebs.EbsListChangedBlocksRequest)

---

##### `listSnapshotBlocks` <a name="aws-cdk-sdk.ebs.EbsClient.listSnapshotBlocks"></a>

```typescript
public listSnapshotBlocks(input: EbsListSnapshotBlocksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest`](#aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest)

---

##### `putSnapshotBlock` <a name="aws-cdk-sdk.ebs.EbsClient.putSnapshotBlock"></a>

```typescript
public putSnapshotBlock(input: EbsPutSnapshotBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest`](#aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest)

---

##### `startSnapshot` <a name="aws-cdk-sdk.ebs.EbsClient.startSnapshot"></a>

```typescript
public startSnapshot(input: EbsStartSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsStartSnapshotRequest`](#aws-cdk-sdk.ebs.EbsStartSnapshotRequest)

---




## Structs <a name="Structs"></a>

### EbsBlock <a name="aws-cdk-sdk.ebs.EbsBlock"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsBlock: ebs.EbsBlock = { ... }
```

##### `blockIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsBlock.property.blockIndex"></a>

- *Type:* `number`

---

##### `blockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsBlock.property.blockToken"></a>

- *Type:* `string`

---

### EbsChangedBlock <a name="aws-cdk-sdk.ebs.EbsChangedBlock"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsChangedBlock: ebs.EbsChangedBlock = { ... }
```

##### `blockIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsChangedBlock.property.blockIndex"></a>

- *Type:* `number`

---

##### `firstBlockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsChangedBlock.property.firstBlockToken"></a>

- *Type:* `string`

---

##### `secondBlockToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsChangedBlock.property.secondBlockToken"></a>

- *Type:* `string`

---

### EbsCompleteSnapshotRequest <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsCompleteSnapshotRequest: ebs.EbsCompleteSnapshotRequest = { ... }
```

##### `changedBlocksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest.property.changedBlocksCount"></a>

- *Type:* `number`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest.property.snapshotId"></a>

- *Type:* `string`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAggregationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest.property.checksumAggregationMethod"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest.property.checksumAlgorithm"></a>

- *Type:* `string`

---

### EbsCompleteSnapshotResponse <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsCompleteSnapshotResponse: ebs.EbsCompleteSnapshotResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsCompleteSnapshotResponse.property.status"></a>

- *Type:* `string`

---

### EbsGetSnapshotBlockRequest <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsGetSnapshotBlockRequest: ebs.EbsGetSnapshotBlockRequest = { ... }
```

##### `blockIndex`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest.property.blockIndex"></a>

- *Type:* `number`

---

##### `blockToken`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest.property.blockToken"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest.property.snapshotId"></a>

- *Type:* `string`

---

### EbsGetSnapshotBlockResponse <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsGetSnapshotBlockResponse: ebs.EbsGetSnapshotBlockResponse = { ... }
```

##### `blockData`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockResponse.property.blockData"></a>

- *Type:* `any`

---

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockResponse.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockResponse.property.checksumAlgorithm"></a>

- *Type:* `string`

---

##### `dataLength`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsGetSnapshotBlockResponse.property.dataLength"></a>

- *Type:* `number`

---

### EbsListChangedBlocksRequest <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsListChangedBlocksRequest: ebs.EbsListChangedBlocksRequest = { ... }
```

##### `secondSnapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest.property.secondSnapshotId"></a>

- *Type:* `string`

---

##### `firstSnapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest.property.firstSnapshotId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startingBlockIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksRequest.property.startingBlockIndex"></a>

- *Type:* `number`

---

### EbsListChangedBlocksResponse <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsListChangedBlocksResponse: ebs.EbsListChangedBlocksResponse = { ... }
```

##### `blockSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse.property.blockSize"></a>

- *Type:* `number`

---

##### `changedBlocks`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse.property.changedBlocks"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsChangedBlock`](#aws-cdk-sdk.ebs.EbsChangedBlock)[]

---

##### `expiryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse.property.expiryTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListChangedBlocksResponse.property.volumeSize"></a>

- *Type:* `number`

---

### EbsListSnapshotBlocksRequest <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsListSnapshotBlocksRequest: ebs.EbsListSnapshotBlocksRequest = { ... }
```

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest.property.snapshotId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startingBlockIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest.property.startingBlockIndex"></a>

- *Type:* `number`

---

### EbsListSnapshotBlocksResponse <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsListSnapshotBlocksResponse: ebs.EbsListSnapshotBlocksResponse = { ... }
```

##### `blocks`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsBlock`](#aws-cdk-sdk.ebs.EbsBlock)[]

---

##### `blockSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse.property.blockSize"></a>

- *Type:* `number`

---

##### `expiryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse.property.expiryTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsListSnapshotBlocksResponse.property.volumeSize"></a>

- *Type:* `number`

---

### EbsPutSnapshotBlockRequest <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsPutSnapshotBlockRequest: ebs.EbsPutSnapshotBlockRequest = { ... }
```

##### `blockData`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.blockData"></a>

- *Type:* `any`

---

##### `blockIndex`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.blockIndex"></a>

- *Type:* `number`

---

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.checksumAlgorithm"></a>

- *Type:* `string`

---

##### `dataLength`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.dataLength"></a>

- *Type:* `number`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.snapshotId"></a>

- *Type:* `string`

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest.property.progress"></a>

- *Type:* `number`

---

### EbsPutSnapshotBlockResponse <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsPutSnapshotBlockResponse: ebs.EbsPutSnapshotBlockResponse = { ... }
```

##### `checksum`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockResponse.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsPutSnapshotBlockResponse.property.checksumAlgorithm"></a>

- *Type:* `string`

---

### EbsStartSnapshotRequest <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsStartSnapshotRequest: ebs.EbsStartSnapshotRequest = { ... }
```

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.volumeSize"></a>

- *Type:* `number`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.encrypted"></a>

- *Type:* `boolean`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `parentSnapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.parentSnapshotId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsTag`](#aws-cdk-sdk.ebs.EbsTag)[]

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotRequest.property.timeout"></a>

- *Type:* `number`

---

### EbsStartSnapshotResponse <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsStartSnapshotResponse: ebs.EbsStartSnapshotResponse = { ... }
```

##### `blockSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.blockSize"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.ownerId"></a>

- *Type:* `string`

---

##### `parentSnapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.parentSnapshotId"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.snapshotId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsTag`](#aws-cdk-sdk.ebs.EbsTag)[]

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsStartSnapshotResponse.property.volumeSize"></a>

- *Type:* `number`

---

### EbsTag <a name="aws-cdk-sdk.ebs.EbsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

const ebsTag: ebs.EbsTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ebs.EbsTag.property.value"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### EBSResponsesCompleteSnapshot <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesCompleteSnapshot(__scope: Construct, __resources: string[], __input: EbsCompleteSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest`](#aws-cdk-sdk.ebs.EbsCompleteSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesCompleteSnapshot.property.status"></a>

- *Type:* `string`

---


### EBSResponsesFetchSnapshotBlock <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesFetchSnapshotBlock(__scope: Construct, __resources: string[], __input: EbsGetSnapshotBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest`](#aws-cdk-sdk.ebs.EbsGetSnapshotBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `blockData`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.property.blockData"></a>

- *Type:* `any`

---

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.property.checksumAlgorithm"></a>

- *Type:* `string`

---

##### `dataLength`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesFetchSnapshotBlock.property.dataLength"></a>

- *Type:* `number`

---


### EBSResponsesListChangedBlocks <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesListChangedBlocks(__scope: Construct, __resources: string[], __input: EbsListChangedBlocksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsListChangedBlocksRequest`](#aws-cdk-sdk.ebs.EbsListChangedBlocksRequest)

---



#### Properties <a name="Properties"></a>

##### `blockSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.property.blockSize"></a>

- *Type:* `number`

---

##### `changedBlocks`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.property.changedBlocks"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsChangedBlock`](#aws-cdk-sdk.ebs.EbsChangedBlock)[]

---

##### `expiryTime`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.property.expiryTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.property.nextToken"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListChangedBlocks.property.volumeSize"></a>

- *Type:* `number`

---


### EBSResponsesListSnapshotBlocks <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesListSnapshotBlocks(__scope: Construct, __resources: string[], __input: EbsListSnapshotBlocksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest`](#aws-cdk-sdk.ebs.EbsListSnapshotBlocksRequest)

---



#### Properties <a name="Properties"></a>

##### `blocks`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsBlock`](#aws-cdk-sdk.ebs.EbsBlock)[]

---

##### `blockSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.property.blockSize"></a>

- *Type:* `number`

---

##### `expiryTime`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.property.expiryTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.property.nextToken"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesListSnapshotBlocks.property.volumeSize"></a>

- *Type:* `number`

---


### EBSResponsesPutSnapshotBlock <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesPutSnapshotBlock(__scope: Construct, __resources: string[], __input: EbsPutSnapshotBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest`](#aws-cdk-sdk.ebs.EbsPutSnapshotBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `checksum`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.property.checksum"></a>

- *Type:* `string`

---

##### `checksumAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesPutSnapshotBlock.property.checksumAlgorithm"></a>

- *Type:* `string`

---


### EBSResponsesStartSnapshot <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.Initializer"></a>

```typescript
import { ebs } from 'aws-cdk-sdk'

new ebs.EBSResponsesStartSnapshot(__scope: Construct, __resources: string[], __input: EbsStartSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsStartSnapshotRequest`](#aws-cdk-sdk.ebs.EbsStartSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `blockSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.blockSize"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.ownerId"></a>

- *Type:* `string`

---

##### `parentSnapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.parentSnapshotId"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.snapshotId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ebs.EbsTag`](#aws-cdk-sdk.ebs.EbsTag)[]

---

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.ebs.EBSResponsesStartSnapshot.property.volumeSize"></a>

- *Type:* `number`

---



