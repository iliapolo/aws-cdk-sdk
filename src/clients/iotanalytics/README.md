# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTAnalyticsClient <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchPutMessage` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.batchPutMessage"></a>

```typescript
public batchPutMessage(input: IoTAnalyticsBatchPutMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest)

---

##### `cancelPipelineReprocessing` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.cancelPipelineReprocessing"></a>

```typescript
public cancelPipelineReprocessing(input: IoTAnalyticsCancelPipelineReprocessingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest)

---

##### `createChannel` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.createChannel"></a>

```typescript
public createChannel(input: IoTAnalyticsCreateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest)

---

##### `createDataset` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.createDataset"></a>

```typescript
public createDataset(input: IoTAnalyticsCreateDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest)

---

##### `createDatasetContent` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.createDatasetContent"></a>

```typescript
public createDatasetContent(input: IoTAnalyticsCreateDatasetContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest)

---

##### `createDatastore` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.createDatastore"></a>

```typescript
public createDatastore(input: IoTAnalyticsCreateDatastoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest)

---

##### `createPipeline` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.createPipeline"></a>

```typescript
public createPipeline(input: IoTAnalyticsCreatePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest)

---

##### `deleteChannel` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.deleteChannel"></a>

```typescript
public deleteChannel(input: IoTAnalyticsDeleteChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteChannelRequest)

---

##### `deleteDataset` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.deleteDataset"></a>

```typescript
public deleteDataset(input: IoTAnalyticsDeleteDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetRequest)

---

##### `deleteDatasetContent` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.deleteDatasetContent"></a>

```typescript
public deleteDatasetContent(input: IoTAnalyticsDeleteDatasetContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetContentRequest)

---

##### `deleteDatastore` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.deleteDatastore"></a>

```typescript
public deleteDatastore(input: IoTAnalyticsDeleteDatastoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatastoreRequest)

---

##### `deletePipeline` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.deletePipeline"></a>

```typescript
public deletePipeline(input: IoTAnalyticsDeletePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeletePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeletePipelineRequest)

---

##### `describeChannel` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.describeChannel"></a>

```typescript
public describeChannel(input: IoTAnalyticsDescribeChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---

##### `describeDataset` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.describeDataset"></a>

```typescript
public describeDataset(input: IoTAnalyticsDescribeDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest)

---

##### `describeDatastore` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.describeDatastore"></a>

```typescript
public describeDatastore(input: IoTAnalyticsDescribeDatastoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---

##### `describeLoggingOptions` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.describeLoggingOptions"></a>

```typescript
public describeLoggingOptions()
```

##### `describePipeline` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.describePipeline"></a>

```typescript
public describePipeline(input: IoTAnalyticsDescribePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest)

---

##### `fetchDatasetContent` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.fetchDatasetContent"></a>

```typescript
public fetchDatasetContent(input: IoTAnalyticsGetDatasetContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest)

---

##### `listChannels` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listChannels"></a>

```typescript
public listChannels(input: IoTAnalyticsListChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest)

---

##### `listDatasetContents` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listDatasetContents"></a>

```typescript
public listDatasetContents(input: IoTAnalyticsListDatasetContentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest)

---

##### `listDatasets` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listDatasets"></a>

```typescript
public listDatasets(input: IoTAnalyticsListDatasetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest)

---

##### `listDatastores` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listDatastores"></a>

```typescript
public listDatastores(input: IoTAnalyticsListDatastoresRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest)

---

##### `listPipelines` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listPipelines"></a>

```typescript
public listPipelines(input: IoTAnalyticsListPipelinesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoTAnalyticsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest)

---

##### `putLoggingOptions` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.putLoggingOptions"></a>

```typescript
public putLoggingOptions(input: IoTAnalyticsPutLoggingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPutLoggingOptionsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPutLoggingOptionsRequest)

---

##### `runPipelineActivity` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.runPipelineActivity"></a>

```typescript
public runPipelineActivity(input: IoTAnalyticsRunPipelineActivityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest)

---

##### `sampleChannelData` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.sampleChannelData"></a>

```typescript
public sampleChannelData(input: IoTAnalyticsSampleChannelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest)

---

##### `startPipelineReprocessing` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.startPipelineReprocessing"></a>

```typescript
public startPipelineReprocessing(input: IoTAnalyticsStartPipelineReprocessingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.tagResource"></a>

```typescript
public tagResource(input: IoTAnalyticsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.untagResource"></a>

```typescript
public untagResource(input: IoTAnalyticsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceRequest)

---

##### `updateChannel` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.updateChannel"></a>

```typescript
public updateChannel(input: IoTAnalyticsUpdateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest)

---

##### `updateDataset` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.updateDataset"></a>

```typescript
public updateDataset(input: IoTAnalyticsUpdateDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest)

---

##### `updateDatastore` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.updateDatastore"></a>

```typescript
public updateDatastore(input: IoTAnalyticsUpdateDatastoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest)

---

##### `updatePipeline` <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.updatePipeline"></a>

```typescript
public updatePipeline(input: IoTAnalyticsUpdatePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdatePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdatePipelineRequest)

---




## Structs <a name="Structs"></a>

### IoTAnalyticsAddAttributesActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsAddAttributesActivity: iotanalytics.IoTAnalyticsAddAttributesActivity = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsBatchPutMessageErrorEntry <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsBatchPutMessageErrorEntry: iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry.property.messageId"></a>

- *Type:* `string`

---

### IoTAnalyticsBatchPutMessageRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsBatchPutMessageRequest: iotanalytics.IoTAnalyticsBatchPutMessageRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest.property.channelName"></a>

- *Type:* `string`

---

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest.property.messages"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsMessage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsMessage)[]

---

### IoTAnalyticsBatchPutMessageResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsBatchPutMessageResponse: iotanalytics.IoTAnalyticsBatchPutMessageResponse = { ... }
```

##### `batchPutMessageErrorEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageResponse.property.batchPutMessageErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry)[]

---

### IoTAnalyticsCancelPipelineReprocessingRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCancelPipelineReprocessingRequest: iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest.property.pipelineName"></a>

- *Type:* `string`

---

##### `reprocessingId`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingRequest.property.reprocessingId"></a>

- *Type:* `string`

---

### IoTAnalyticsCancelPipelineReprocessingResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCancelPipelineReprocessingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCancelPipelineReprocessingResponse: iotanalytics.IoTAnalyticsCancelPipelineReprocessingResponse = { ... }
```

### IoTAnalyticsChannel <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannel: iotanalytics.IoTAnalyticsChannel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.creationTime"></a>

- *Type:* `string`

---

##### `lastMessageArrivalTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel.property.storage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage)

---

### IoTAnalyticsChannelActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannelActivity: iotanalytics.IoTAnalyticsChannelActivity = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity.property.channelName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsChannelStatistics <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannelStatistics: iotanalytics.IoTAnalyticsChannelStatistics = { ... }
```

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStatistics.property.size"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize)

---

### IoTAnalyticsChannelStorage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannelStorage: iotanalytics.IoTAnalyticsChannelStorage = { ... }
```

##### `customerManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage)

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage.property.serviceManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3Storage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3Storage)

---

### IoTAnalyticsChannelStorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannelStorageSummary: iotanalytics.IoTAnalyticsChannelStorageSummary = { ... }
```

##### `customerManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorageSummary.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary)

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorageSummary.property.serviceManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3StorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3StorageSummary)

---

### IoTAnalyticsChannelSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsChannelSummary: iotanalytics.IoTAnalyticsChannelSummary = { ... }
```

##### `channelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.channelName"></a>

- *Type:* `string`

---

##### `channelStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.channelStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorageSummary)

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `lastMessageArrivalTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary.property.status"></a>

- *Type:* `string`

---

### IoTAnalyticsContainerDatasetAction <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsContainerDatasetAction: iotanalytics.IoTAnalyticsContainerDatasetAction = { ... }
```

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction.property.image"></a>

- *Type:* `string`

---

##### `resourceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction.property.resourceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResourceConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResourceConfiguration)

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction.property.variables"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable)[]

---

### IoTAnalyticsCreateChannelRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateChannelRequest: iotanalytics.IoTAnalyticsCreateChannelRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest.property.channelName"></a>

- *Type:* `string`

---

##### `channelStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest.property.channelStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage)

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

### IoTAnalyticsCreateChannelResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateChannelResponse: iotanalytics.IoTAnalyticsCreateChannelResponse = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelResponse.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelResponse.property.channelName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelResponse.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

### IoTAnalyticsCreateDatasetContentRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatasetContentRequest: iotanalytics.IoTAnalyticsCreateDatasetContentRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest.property.versionId"></a>

- *Type:* `string`

---

### IoTAnalyticsCreateDatasetContentResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatasetContentResponse: iotanalytics.IoTAnalyticsCreateDatasetContentResponse = { ... }
```

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentResponse.property.versionId"></a>

- *Type:* `string`

---

### IoTAnalyticsCreateDatasetRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatasetRequest: iotanalytics.IoTAnalyticsCreateDatasetRequest = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction)[]

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `contentDeliveryRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.contentDeliveryRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule)[]

---

##### `lateDataRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.lateDataRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule)[]

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger)[]

---

##### `versioningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration)

---

### IoTAnalyticsCreateDatasetResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatasetResponse: iotanalytics.IoTAnalyticsCreateDatasetResponse = { ... }
```

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetResponse.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetResponse.property.datasetName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetResponse.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

### IoTAnalyticsCreateDatastoreRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatastoreRequest: iotanalytics.IoTAnalyticsCreateDatastoreRequest = { ... }
```

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest.property.datastoreName"></a>

- *Type:* `string`

---

##### `datastoreStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest.property.datastoreStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage)

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

### IoTAnalyticsCreateDatastoreResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreateDatastoreResponse: iotanalytics.IoTAnalyticsCreateDatastoreResponse = { ... }
```

##### `datastoreArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreResponse.property.datastoreArn"></a>

- *Type:* `string`

---

##### `datastoreName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreResponse.property.datastoreName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreResponse.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

### IoTAnalyticsCreatePipelineRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreatePipelineRequest: iotanalytics.IoTAnalyticsCreatePipelineRequest = { ... }
```

##### `pipelineActivities`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest.property.pipelineActivities"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity)[]

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest.property.pipelineName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

### IoTAnalyticsCreatePipelineResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCreatePipelineResponse: iotanalytics.IoTAnalyticsCreatePipelineResponse = { ... }
```

##### `pipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineResponse.property.pipelineArn"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineResponse.property.pipelineName"></a>

- *Type:* `string`

---

### IoTAnalyticsCustomerManagedChannelS3Storage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCustomerManagedChannelS3Storage: iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage.property.bucket"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage.property.roleArn"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3Storage.property.keyPrefix"></a>

- *Type:* `string`

---

### IoTAnalyticsCustomerManagedChannelS3StorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCustomerManagedChannelS3StorageSummary: iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary.property.bucket"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary.property.keyPrefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedChannelS3StorageSummary.property.roleArn"></a>

- *Type:* `string`

---

### IoTAnalyticsCustomerManagedDatastoreS3Storage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCustomerManagedDatastoreS3Storage: iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage.property.bucket"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage.property.roleArn"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage.property.keyPrefix"></a>

- *Type:* `string`

---

### IoTAnalyticsCustomerManagedDatastoreS3StorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsCustomerManagedDatastoreS3StorageSummary: iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary.property.bucket"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary.property.keyPrefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary.property.roleArn"></a>

- *Type:* `string`

---

### IoTAnalyticsDataset <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDataset: iotanalytics.IoTAnalyticsDataset = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction)[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.arn"></a>

- *Type:* `string`

---

##### `contentDeliveryRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.contentDeliveryRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule)[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `lateDataRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.lateDataRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.status"></a>

- *Type:* `string`

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger)[]

---

##### `versioningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration)

---

### IoTAnalyticsDatasetAction <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetAction: iotanalytics.IoTAnalyticsDatasetAction = { ... }
```

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction.property.actionName"></a>

- *Type:* `string`

---

##### `containerAction`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction.property.containerAction"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsContainerDatasetAction)

---

##### `queryAction`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction.property.queryAction"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsSqlQueryDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsSqlQueryDatasetAction)

---

### IoTAnalyticsDatasetActionSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetActionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetActionSummary: iotanalytics.IoTAnalyticsDatasetActionSummary = { ... }
```

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetActionSummary.property.actionName"></a>

- *Type:* `string`

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetActionSummary.property.actionType"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetContentDeliveryDestination <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetContentDeliveryDestination: iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination = { ... }
```

##### `iotEventsDestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination.property.iotEventsDestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration)

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination.property.s3DestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration)

---

### IoTAnalyticsDatasetContentDeliveryRule <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetContentDeliveryRule: iotanalytics.IoTAnalyticsDatasetContentDeliveryRule = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule.property.destination"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryDestination)

---

##### `entryName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule.property.entryName"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetContentStatus <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetContentStatus: iotanalytics.IoTAnalyticsDatasetContentStatus = { ... }
```

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus.property.reason"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus.property.state"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetContentSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetContentSummary: iotanalytics.IoTAnalyticsDatasetContentSummary = { ... }
```

##### `completionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary.property.completionTime"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `scheduleTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary.property.scheduleTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary.property.version"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetContentVersionValue <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentVersionValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetContentVersionValue: iotanalytics.IoTAnalyticsDatasetContentVersionValue = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentVersionValue.property.datasetName"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetEntry <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetEntry: iotanalytics.IoTAnalyticsDatasetEntry = { ... }
```

##### `dataURI`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry.property.dataURI"></a>

- *Type:* `string`

---

##### `entryName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry.property.entryName"></a>

- *Type:* `string`

---

### IoTAnalyticsDatasetSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetSummary: iotanalytics.IoTAnalyticsDatasetSummary = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetActionSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetActionSummary)[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.datasetName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.status"></a>

- *Type:* `string`

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger)[]

---

### IoTAnalyticsDatasetTrigger <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatasetTrigger: iotanalytics.IoTAnalyticsDatasetTrigger = { ... }
```

##### `dataset`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTriggeringDataset`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTriggeringDataset)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsSchedule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsSchedule)

---

### IoTAnalyticsDatastore <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastore: iotanalytics.IoTAnalyticsDatastore = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.creationTime"></a>

- *Type:* `string`

---

##### `lastMessageArrivalTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore.property.storage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage)

---

### IoTAnalyticsDatastoreActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastoreActivity: iotanalytics.IoTAnalyticsDatastoreActivity = { ... }
```

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreActivity.property.datastoreName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreActivity.property.name"></a>

- *Type:* `string`

---

### IoTAnalyticsDatastoreStatistics <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastoreStatistics: iotanalytics.IoTAnalyticsDatastoreStatistics = { ... }
```

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStatistics.property.size"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize)

---

### IoTAnalyticsDatastoreStorage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastoreStorage: iotanalytics.IoTAnalyticsDatastoreStorage = { ... }
```

##### `customerManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3Storage)

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage.property.serviceManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3Storage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3Storage)

---

### IoTAnalyticsDatastoreStorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastoreStorageSummary: iotanalytics.IoTAnalyticsDatastoreStorageSummary = { ... }
```

##### `customerManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorageSummary.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCustomerManagedDatastoreS3StorageSummary)

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorageSummary.property.serviceManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3StorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3StorageSummary)

---

### IoTAnalyticsDatastoreSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDatastoreSummary: iotanalytics.IoTAnalyticsDatastoreSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `datastoreName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.datastoreName"></a>

- *Type:* `string`

---

##### `datastoreStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.datastoreStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorageSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorageSummary)

---

##### `lastMessageArrivalTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary.property.status"></a>

- *Type:* `string`

---

### IoTAnalyticsDeleteChannelRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeleteChannelRequest: iotanalytics.IoTAnalyticsDeleteChannelRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteChannelRequest.property.channelName"></a>

- *Type:* `string`

---

### IoTAnalyticsDeleteDatasetContentRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeleteDatasetContentRequest: iotanalytics.IoTAnalyticsDeleteDatasetContentRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetContentRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetContentRequest.property.versionId"></a>

- *Type:* `string`

---

### IoTAnalyticsDeleteDatasetRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeleteDatasetRequest: iotanalytics.IoTAnalyticsDeleteDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

### IoTAnalyticsDeleteDatastoreRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatastoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeleteDatastoreRequest: iotanalytics.IoTAnalyticsDeleteDatastoreRequest = { ... }
```

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeleteDatastoreRequest.property.datastoreName"></a>

- *Type:* `string`

---

### IoTAnalyticsDeletePipelineRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeletePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeletePipelineRequest: iotanalytics.IoTAnalyticsDeletePipelineRequest = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeletePipelineRequest.property.pipelineName"></a>

- *Type:* `string`

---

### IoTAnalyticsDeltaTime <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeltaTime: iotanalytics.IoTAnalyticsDeltaTime = { ... }
```

##### `offsetSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTime.property.offsetSeconds"></a>

- *Type:* `number`

---

##### `timeExpression`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTime.property.timeExpression"></a>

- *Type:* `string`

---

### IoTAnalyticsDeltaTimeSessionWindowConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeltaTimeSessionWindowConfiguration: iotanalytics.IoTAnalyticsDeltaTimeSessionWindowConfiguration = { ... }
```

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes"></a>

- *Type:* `number`

---

### IoTAnalyticsDescribeChannelRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeChannelRequest: iotanalytics.IoTAnalyticsDescribeChannelRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest.property.channelName"></a>

- *Type:* `string`

---

##### `includeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest.property.includeStatistics"></a>

- *Type:* `boolean`

---

### IoTAnalyticsDescribeChannelResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeChannelResponse: iotanalytics.IoTAnalyticsDescribeChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannel)

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelResponse.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStatistics`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStatistics)

---

### IoTAnalyticsDescribeDatasetRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeDatasetRequest: iotanalytics.IoTAnalyticsDescribeDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

### IoTAnalyticsDescribeDatasetResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeDatasetResponse: iotanalytics.IoTAnalyticsDescribeDatasetResponse = { ... }
```

##### `dataset`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetResponse.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDataset)

---

### IoTAnalyticsDescribeDatastoreRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeDatastoreRequest: iotanalytics.IoTAnalyticsDescribeDatastoreRequest = { ... }
```

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest.property.datastoreName"></a>

- *Type:* `string`

---

##### `includeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest.property.includeStatistics"></a>

- *Type:* `boolean`

---

### IoTAnalyticsDescribeDatastoreResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeDatastoreResponse: iotanalytics.IoTAnalyticsDescribeDatastoreResponse = { ... }
```

##### `datastore`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreResponse.property.datastore"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastore)

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreResponse.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStatistics`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStatistics)

---

### IoTAnalyticsDescribeLoggingOptionsRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeLoggingOptionsRequest: iotanalytics.IoTAnalyticsDescribeLoggingOptionsRequest = { ... }
```

### IoTAnalyticsDescribeLoggingOptionsResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeLoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribeLoggingOptionsResponse: iotanalytics.IoTAnalyticsDescribeLoggingOptionsResponse = { ... }
```

##### `loggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeLoggingOptionsResponse.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions)

---

### IoTAnalyticsDescribePipelineRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribePipelineRequest: iotanalytics.IoTAnalyticsDescribePipelineRequest = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest.property.pipelineName"></a>

- *Type:* `string`

---

### IoTAnalyticsDescribePipelineResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDescribePipelineResponse: iotanalytics.IoTAnalyticsDescribePipelineResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline)

---

### IoTAnalyticsDeviceRegistryEnrichActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeviceRegistryEnrichActivity: iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity = { ... }
```

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity.property.attribute"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity.property.roleArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity.property.thingName"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsDeviceShadowEnrichActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsDeviceShadowEnrichActivity: iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity = { ... }
```

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity.property.attribute"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity.property.roleArn"></a>

- *Type:* `string`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity.property.thingName"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsEstimatedResourceSize <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsEstimatedResourceSize: iotanalytics.IoTAnalyticsEstimatedResourceSize = { ... }
```

##### `estimatedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize.property.estimatedOn"></a>

- *Type:* `string`

---

##### `estimatedSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsEstimatedResourceSize.property.estimatedSizeInBytes"></a>

- *Type:* `number`

---

### IoTAnalyticsFilterActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsFilterActivity: iotanalytics.IoTAnalyticsFilterActivity = { ... }
```

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity.property.filter"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsGetDatasetContentRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsGetDatasetContentRequest: iotanalytics.IoTAnalyticsGetDatasetContentRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest.property.versionId"></a>

- *Type:* `string`

---

### IoTAnalyticsGetDatasetContentResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsGetDatasetContentResponse: iotanalytics.IoTAnalyticsGetDatasetContentResponse = { ... }
```

##### `entries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentResponse.property.entries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentResponse.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentStatus)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentResponse.property.timestamp"></a>

- *Type:* `string`

---

### IoTAnalyticsGlueConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGlueConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsGlueConfiguration: iotanalytics.IoTAnalyticsGlueConfiguration = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGlueConfiguration.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsGlueConfiguration.property.tableName"></a>

- *Type:* `string`

---

### IoTAnalyticsIotEventsDestinationConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsIotEventsDestinationConfiguration: iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration.property.inputName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsIotEventsDestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

### IoTAnalyticsLambdaActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsLambdaActivity: iotanalytics.IoTAnalyticsLambdaActivity = { ... }
```

##### `batchSize`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity.property.batchSize"></a>

- *Type:* `number`

---

##### `lambdaName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity.property.lambdaName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsLateDataRule <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsLateDataRule: iotanalytics.IoTAnalyticsLateDataRule = { ... }
```

##### `ruleConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule.property.ruleConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRuleConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRuleConfiguration)

---

##### `ruleName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule.property.ruleName"></a>

- *Type:* `string`

---

### IoTAnalyticsLateDataRuleConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRuleConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsLateDataRuleConfiguration: iotanalytics.IoTAnalyticsLateDataRuleConfiguration = { ... }
```

##### `deltaTimeSessionWindowConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRuleConfiguration.property.deltaTimeSessionWindowConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTimeSessionWindowConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTimeSessionWindowConfiguration)

---

### IoTAnalyticsListChannelsRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListChannelsRequest: iotanalytics.IoTAnalyticsListChannelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListChannelsResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListChannelsResponse: iotanalytics.IoTAnalyticsListChannelsResponse = { ... }
```

##### `channelSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsResponse.property.channelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatasetContentsRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatasetContentsRequest: iotanalytics.IoTAnalyticsListDatasetContentsRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest.property.scheduledBefore"></a>

- *Type:* `string`

---

##### `scheduledOnOrAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest.property.scheduledOnOrAfter"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatasetContentsResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatasetContentsResponse: iotanalytics.IoTAnalyticsListDatasetContentsResponse = { ... }
```

##### `datasetContentSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsResponse.property.datasetContentSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatasetsRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatasetsRequest: iotanalytics.IoTAnalyticsListDatasetsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatasetsResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatasetsResponse: iotanalytics.IoTAnalyticsListDatasetsResponse = { ... }
```

##### `datasetSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsResponse.property.datasetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatastoresRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatastoresRequest: iotanalytics.IoTAnalyticsListDatastoresRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListDatastoresResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListDatastoresResponse: iotanalytics.IoTAnalyticsListDatastoresResponse = { ... }
```

##### `datastoreSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresResponse.property.datastoreSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListPipelinesRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListPipelinesRequest: iotanalytics.IoTAnalyticsListPipelinesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTAnalyticsListPipelinesResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListPipelinesResponse: iotanalytics.IoTAnalyticsListPipelinesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelineSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesResponse.property.pipelineSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary)[]

---

### IoTAnalyticsListTagsForResourceRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListTagsForResourceRequest: iotanalytics.IoTAnalyticsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### IoTAnalyticsListTagsForResourceResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsListTagsForResourceResponse: iotanalytics.IoTAnalyticsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

### IoTAnalyticsLoggingOptions <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsLoggingOptions: iotanalytics.IoTAnalyticsLoggingOptions = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions.property.level"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions.property.roleArn"></a>

- *Type:* `string`

---

### IoTAnalyticsMathActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsMathActivity: iotanalytics.IoTAnalyticsMathActivity = { ... }
```

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity.property.attribute"></a>

- *Type:* `string`

---

##### `math`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity.property.math"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsMessage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsMessage: iotanalytics.IoTAnalyticsMessage = { ... }
```

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMessage.property.messageId"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsMessage.property.payload"></a>

- *Type:* `any`

---

### IoTAnalyticsOutputFileUriValue <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsOutputFileUriValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsOutputFileUriValue: iotanalytics.IoTAnalyticsOutputFileUriValue = { ... }
```

##### `fileName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsOutputFileUriValue.property.fileName"></a>

- *Type:* `string`

---

### IoTAnalyticsPipeline <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsPipeline: iotanalytics.IoTAnalyticsPipeline = { ... }
```

##### `activities`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.activities"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity)[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.name"></a>

- *Type:* `string`

---

##### `reprocessingSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipeline.property.reprocessingSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary)[]

---

### IoTAnalyticsPipelineActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsPipelineActivity: iotanalytics.IoTAnalyticsPipelineActivity = { ... }
```

##### `addAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.addAttributes"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsAddAttributesActivity)

---

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.channel"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelActivity)

---

##### `datastore`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.datastore"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreActivity)

---

##### `deviceRegistryEnrich`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.deviceRegistryEnrich"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceRegistryEnrichActivity)

---

##### `deviceShadowEnrich`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.deviceShadowEnrich"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeviceShadowEnrichActivity)

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.filter"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsFilterActivity)

---

##### `lambda`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLambdaActivity)

---

##### `math`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.math"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsMathActivity)

---

##### `removeAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.removeAttributes"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity)

---

##### `selectAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity.property.selectAttributes"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity)

---

### IoTAnalyticsPipelineSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsPipelineSummary: iotanalytics.IoTAnalyticsPipelineSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary.property.pipelineName"></a>

- *Type:* `string`

---

##### `reprocessingSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary.property.reprocessingSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary)[]

---

### IoTAnalyticsPutLoggingOptionsRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPutLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsPutLoggingOptionsRequest: iotanalytics.IoTAnalyticsPutLoggingOptionsRequest = { ... }
```

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsPutLoggingOptionsRequest.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLoggingOptions)

---

### IoTAnalyticsQueryFilter <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsQueryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsQueryFilter: iotanalytics.IoTAnalyticsQueryFilter = { ... }
```

##### `deltaTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsQueryFilter.property.deltaTime"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTime`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDeltaTime)

---

### IoTAnalyticsRemoveAttributesActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsRemoveAttributesActivity: iotanalytics.IoTAnalyticsRemoveAttributesActivity = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity.property.attributes"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRemoveAttributesActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsReprocessingSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsReprocessingSummary: iotanalytics.IoTAnalyticsReprocessingSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary.property.status"></a>

- *Type:* `string`

---

### IoTAnalyticsResourceConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResourceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsResourceConfiguration: iotanalytics.IoTAnalyticsResourceConfiguration = { ... }
```

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResourceConfiguration.property.computeType"></a>

- *Type:* `string`

---

##### `volumeSizeInGB`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResourceConfiguration.property.volumeSizeInGB"></a>

- *Type:* `number`

---

### IoTAnalyticsRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsRetentionPeriod: iotanalytics.IoTAnalyticsRetentionPeriod = { ... }
```

##### `numberOfDays`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---

### IoTAnalyticsRunPipelineActivityRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsRunPipelineActivityRequest: iotanalytics.IoTAnalyticsRunPipelineActivityRequest = { ... }
```

##### `payloads`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest.property.payloads"></a>

- *Type:* `any`[]

---

##### `pipelineActivity`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest.property.pipelineActivity"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity)

---

### IoTAnalyticsRunPipelineActivityResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsRunPipelineActivityResponse: iotanalytics.IoTAnalyticsRunPipelineActivityResponse = { ... }
```

##### `logResult`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityResponse.property.logResult"></a>

- *Type:* `string`

---

##### `payloads`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityResponse.property.payloads"></a>

- *Type:* `any`[]

---

### IoTAnalyticsS3DestinationConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsS3DestinationConfiguration: iotanalytics.IoTAnalyticsS3DestinationConfiguration = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration.property.key"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `glueConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsS3DestinationConfiguration.property.glueConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsGlueConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsGlueConfiguration)

---

### IoTAnalyticsSampleChannelDataRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsSampleChannelDataRequest: iotanalytics.IoTAnalyticsSampleChannelDataRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest.property.channelName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest.property.maxMessages"></a>

- *Type:* `number`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest.property.startTime"></a>

- *Type:* `string`

---

### IoTAnalyticsSampleChannelDataResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsSampleChannelDataResponse: iotanalytics.IoTAnalyticsSampleChannelDataResponse = { ... }
```

##### `payloads`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataResponse.property.payloads"></a>

- *Type:* `any`[]

---

### IoTAnalyticsSchedule <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsSchedule: iotanalytics.IoTAnalyticsSchedule = { ... }
```

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSchedule.property.expression"></a>

- *Type:* `string`

---

### IoTAnalyticsSelectAttributesActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsSelectAttributesActivity: iotanalytics.IoTAnalyticsSelectAttributesActivity = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity.property.attributes"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity.property.name"></a>

- *Type:* `string`

---

##### `next`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSelectAttributesActivity.property.next"></a>

- *Type:* `string`

---

### IoTAnalyticsServiceManagedChannelS3Storage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3Storage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsServiceManagedChannelS3Storage: iotanalytics.IoTAnalyticsServiceManagedChannelS3Storage = { ... }
```

### IoTAnalyticsServiceManagedChannelS3StorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedChannelS3StorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsServiceManagedChannelS3StorageSummary: iotanalytics.IoTAnalyticsServiceManagedChannelS3StorageSummary = { ... }
```

### IoTAnalyticsServiceManagedDatastoreS3Storage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3Storage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsServiceManagedDatastoreS3Storage: iotanalytics.IoTAnalyticsServiceManagedDatastoreS3Storage = { ... }
```

### IoTAnalyticsServiceManagedDatastoreS3StorageSummary <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsServiceManagedDatastoreS3StorageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsServiceManagedDatastoreS3StorageSummary: iotanalytics.IoTAnalyticsServiceManagedDatastoreS3StorageSummary = { ... }
```

### IoTAnalyticsSqlQueryDatasetAction <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSqlQueryDatasetAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsSqlQueryDatasetAction: iotanalytics.IoTAnalyticsSqlQueryDatasetAction = { ... }
```

##### `sqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSqlQueryDatasetAction.property.sqlQuery"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsSqlQueryDatasetAction.property.filters"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsQueryFilter`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsQueryFilter)[]

---

### IoTAnalyticsStartPipelineReprocessingRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsStartPipelineReprocessingRequest: iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest.property.pipelineName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest.property.startTime"></a>

- *Type:* `string`

---

### IoTAnalyticsStartPipelineReprocessingResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsStartPipelineReprocessingResponse: iotanalytics.IoTAnalyticsStartPipelineReprocessingResponse = { ... }
```

##### `reprocessingId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingResponse.property.reprocessingId"></a>

- *Type:* `string`

---

### IoTAnalyticsTag <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsTag: iotanalytics.IoTAnalyticsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTag.property.value"></a>

- *Type:* `string`

---

### IoTAnalyticsTagResourceRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsTagResourceRequest: iotanalytics.IoTAnalyticsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---

### IoTAnalyticsTagResourceResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsTagResourceResponse: iotanalytics.IoTAnalyticsTagResourceResponse = { ... }
```

### IoTAnalyticsTriggeringDataset <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTriggeringDataset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsTriggeringDataset: iotanalytics.IoTAnalyticsTriggeringDataset = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsTriggeringDataset.property.name"></a>

- *Type:* `string`

---

### IoTAnalyticsUntagResourceRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUntagResourceRequest: iotanalytics.IoTAnalyticsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoTAnalyticsUntagResourceResponse <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUntagResourceResponse: iotanalytics.IoTAnalyticsUntagResourceResponse = { ... }
```

### IoTAnalyticsUpdateChannelRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUpdateChannelRequest: iotanalytics.IoTAnalyticsUpdateChannelRequest = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest.property.channelName"></a>

- *Type:* `string`

---

##### `channelStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest.property.channelStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelStorage)

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateChannelRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

### IoTAnalyticsUpdateDatasetRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUpdateDatasetRequest: iotanalytics.IoTAnalyticsUpdateDatasetRequest = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction)[]

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `contentDeliveryRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.contentDeliveryRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule)[]

---

##### `lateDataRules`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.lateDataRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule)[]

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger)[]

---

##### `versioningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatasetRequest.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration)

---

### IoTAnalyticsUpdateDatastoreRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUpdateDatastoreRequest: iotanalytics.IoTAnalyticsUpdateDatastoreRequest = { ... }
```

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest.property.datastoreName"></a>

- *Type:* `string`

---

##### `datastoreStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest.property.datastoreStorage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreStorage)

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdateDatastoreRequest.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRetentionPeriod)

---

### IoTAnalyticsUpdatePipelineRequest <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdatePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsUpdatePipelineRequest: iotanalytics.IoTAnalyticsUpdatePipelineRequest = { ... }
```

##### `pipelineActivities`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdatePipelineRequest.property.pipelineActivities"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity)[]

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsUpdatePipelineRequest.property.pipelineName"></a>

- *Type:* `string`

---

### IoTAnalyticsVariable <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsVariable: iotanalytics.IoTAnalyticsVariable = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable.property.name"></a>

- *Type:* `string`

---

##### `datasetContentVersionValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable.property.datasetContentVersionValue"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentVersionValue`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentVersionValue)

---

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable.property.doubleValue"></a>

- *Type:* `number`

---

##### `outputFileUriValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable.property.outputFileUriValue"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsOutputFileUriValue`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsOutputFileUriValue)

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVariable.property.stringValue"></a>

- *Type:* `string`

---

### IoTAnalyticsVersioningConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

const ioTAnalyticsVersioningConfiguration: iotanalytics.IoTAnalyticsVersioningConfiguration = { ... }
```

##### `maxVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration.property.maxVersions"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Optional</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsVersioningConfiguration.property.unlimited"></a>

- *Type:* `boolean`

---

## Classes <a name="Classes"></a>

### IoTAnalyticsResponsesBatchPutMessage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesBatchPutMessage(__scope: Construct, __resources: string[], __input: IoTAnalyticsBatchPutMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `batchPutMessageErrorEntries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesBatchPutMessage.property.batchPutMessageErrorEntries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsBatchPutMessageErrorEntry)[]

---


### IoTAnalyticsResponsesCreateChannel <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateChannel(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.property.channelName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannel.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod)

---


### IoTAnalyticsResponsesCreateChannelRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateChannelRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesCreateDataset <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateDataset(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.property.datasetName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDataset.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod)

---


### IoTAnalyticsResponsesCreateDatasetContent <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateDatasetContent(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateDatasetContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetContentRequest)

---



#### Properties <a name="Properties"></a>

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetContent.property.versionId"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesCreateDatasetRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatasetRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesCreateDatastore <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateDatastore(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `datastoreArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.property.datastoreArn"></a>

- *Type:* `string`

---

##### `datastoreName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.property.datastoreName"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastore.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod)

---


### IoTAnalyticsResponsesCreateDatastoreRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreateDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreateDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreateDatastoreRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesCreatePipeline <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesCreatePipeline(__scope: Construct, __resources: string[], __input: IoTAnalyticsCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.property.pipelineArn"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesCreatePipeline.property.pipelineName"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesDescribeChannel <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannel(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel)

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannel.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics)

---


### IoTAnalyticsResponsesDescribeChannelChannel <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.creationTime"></a>

- *Type:* `string`

---

##### `lastMessageArrivalTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannel.property.storage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage)

---


### IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesDescribeChannelChannelStorage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `customerManagedS3`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3)

---

##### `serviceManagedS3`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorage.property.serviceManagedS3"></a>

- *Type:* `any`

---


### IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3 <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.property.bucket"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.property.keyPrefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3.property.roleArn"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesDescribeChannelStatistics <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatistics.property.size"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize)

---


### IoTAnalyticsResponsesDescribeChannelStatisticsSize <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `estimatedOn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.property.estimatedOn"></a>

- *Type:* `string`

---

##### `estimatedSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeChannelStatisticsSize.property.estimatedSizeInBytes"></a>

- *Type:* `number`

---


### IoTAnalyticsResponsesDescribeDataset <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDataset(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataset`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDataset.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset)

---


### IoTAnalyticsResponsesDescribeDatasetDataset <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetAction)[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.arn"></a>

- *Type:* `string`

---

##### `contentDeliveryRules`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.contentDeliveryRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentDeliveryRule)[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `lateDataRules`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.lateDataRules"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsLateDataRule)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.status"></a>

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetTrigger)[]

---

##### `versioningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDataset.property.versioningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration)

---


### IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVersions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.property.maxVersions"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesDescribeDatastore <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastore(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `datastore`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.property.datastore"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore)

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastore.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics)

---


### IoTAnalyticsResponsesDescribeDatastoreDatastore <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.creationTime"></a>

- *Type:* `string`

---

##### `lastMessageArrivalTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.lastMessageArrivalTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.name"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.retentionPeriod"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.status"></a>

- *Type:* `string`

---

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastore.property.storage"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage)

---


### IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `numberOfDays`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.property.numberOfDays"></a>

- *Type:* `number`

---

##### `unlimited`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod.property.unlimited"></a>

- *Type:* `boolean`

---


### IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `customerManagedS3`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.property.customerManagedS3"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3)

---

##### `serviceManagedS3`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage.property.serviceManagedS3"></a>

- *Type:* `any`

---


### IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3 <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.property.bucket"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.property.keyPrefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3.property.roleArn"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesDescribeDatastoreStatistics <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatistics.property.size"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize)

---


### IoTAnalyticsResponsesDescribeDatastoreStatisticsSize <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribeDatastoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribeDatastoreRequest)

---



#### Properties <a name="Properties"></a>

##### `estimatedOn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.property.estimatedOn"></a>

- *Type:* `string`

---

##### `estimatedSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeDatastoreStatisticsSize.property.estimatedSizeInBytes"></a>

- *Type:* `number`

---


### IoTAnalyticsResponsesDescribeLoggingOptions <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptions.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions)

---


### IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.property.level"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions.property.roleArn"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesDescribePipeline <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribePipeline(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline)

---


### IoTAnalyticsResponsesDescribePipelinePipeline <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline(__scope: Construct, __resources: string[], __input: IoTAnalyticsDescribePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDescribePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `activities`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.activities"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineActivity)[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `reprocessingSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesDescribePipelinePipeline.property.reprocessingSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsReprocessingSummary)[]

---


### IoTAnalyticsResponsesFetchDatasetContent <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesFetchDatasetContent(__scope: Construct, __resources: string[], __input: IoTAnalyticsGetDatasetContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest)

---



#### Properties <a name="Properties"></a>

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.property.entries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetEntry)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.property.status"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus)

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContent.property.timestamp"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesFetchDatasetContentStatus <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus(__scope: Construct, __resources: string[], __input: IoTAnalyticsGetDatasetContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsGetDatasetContentRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.property.reason"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesFetchDatasetContentStatus.property.state"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesListChannels <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListChannels(__scope: Construct, __resources: string[], __input: IoTAnalyticsListChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channelSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.property.channelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsChannelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListChannels.property.nextToken"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesListDatasetContents <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListDatasetContents(__scope: Construct, __resources: string[], __input: IoTAnalyticsListDatasetContentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetContentsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetContentSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.property.datasetContentSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetContentSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasetContents.property.nextToken"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesListDatasets <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListDatasets(__scope: Construct, __resources: string[], __input: IoTAnalyticsListDatasetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatasetsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.property.datasetSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatasetSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatasets.property.nextToken"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesListDatastores <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListDatastores(__scope: Construct, __resources: string[], __input: IoTAnalyticsListDatastoresRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListDatastoresRequest)

---



#### Properties <a name="Properties"></a>

##### `datastoreSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.property.datastoreSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsDatastoreSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListDatastores.property.nextToken"></a>

- *Type:* `string`

---


### IoTAnalyticsResponsesListPipelines <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListPipelines(__scope: Construct, __resources: string[], __input: IoTAnalyticsListPipelinesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListPipelinesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelineSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListPipelines.property.pipelineSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsPipelineSummary)[]

---


### IoTAnalyticsResponsesListTagsForResource <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoTAnalyticsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsTag`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsTag)[]

---


### IoTAnalyticsResponsesRunPipelineActivity <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesRunPipelineActivity(__scope: Construct, __resources: string[], __input: IoTAnalyticsRunPipelineActivityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsRunPipelineActivityRequest)

---



#### Properties <a name="Properties"></a>

##### `logResult`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.property.logResult"></a>

- *Type:* `string`

---

##### `payloads`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesRunPipelineActivity.property.payloads"></a>

- *Type:* `any`[]

---


### IoTAnalyticsResponsesSampleChannelData <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesSampleChannelData(__scope: Construct, __resources: string[], __input: IoTAnalyticsSampleChannelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsSampleChannelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `payloads`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesSampleChannelData.property.payloads"></a>

- *Type:* `any`[]

---


### IoTAnalyticsResponsesStartPipelineReprocessing <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing"></a>

#### Initializer <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing.Initializer"></a>

```typescript
import { iotanalytics } from 'aws-cdk-sdk'

new iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing(__scope: Construct, __resources: string[], __input: IoTAnalyticsStartPipelineReprocessingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest`](#aws-cdk-sdk.iotanalytics.IoTAnalyticsStartPipelineReprocessingRequest)

---



#### Properties <a name="Properties"></a>

##### `reprocessingId`<sup>Required</sup> <a name="aws-cdk-sdk.iotanalytics.IoTAnalyticsResponsesStartPipelineReprocessing.property.reprocessingId"></a>

- *Type:* `string`

---



