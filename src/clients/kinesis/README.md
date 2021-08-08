# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KinesisClient <a name="aws-cdk-sdk.kinesis.KinesisClient"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisClient.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.addTagsToStream"></a>

```typescript
public addTagsToStream(input: KinesisAddTagsToStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisAddTagsToStreamInput`](#aws-cdk-sdk.kinesis.KinesisAddTagsToStreamInput)

---

##### `createStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.createStream"></a>

```typescript
public createStream(input: KinesisCreateStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisCreateStreamInput`](#aws-cdk-sdk.kinesis.KinesisCreateStreamInput)

---

##### `decreaseStreamRetentionPeriod` <a name="aws-cdk-sdk.kinesis.KinesisClient.decreaseStreamRetentionPeriod"></a>

```typescript
public decreaseStreamRetentionPeriod(input: KinesisDecreaseStreamRetentionPeriodInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDecreaseStreamRetentionPeriodInput`](#aws-cdk-sdk.kinesis.KinesisDecreaseStreamRetentionPeriodInput)

---

##### `deleteStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.deleteStream"></a>

```typescript
public deleteStream(input: KinesisDeleteStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDeleteStreamInput`](#aws-cdk-sdk.kinesis.KinesisDeleteStreamInput)

---

##### `deregisterStreamConsumer` <a name="aws-cdk-sdk.kinesis.KinesisClient.deregisterStreamConsumer"></a>

```typescript
public deregisterStreamConsumer(input: KinesisDeregisterStreamConsumerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput)

---

##### `describeLimits` <a name="aws-cdk-sdk.kinesis.KinesisClient.describeLimits"></a>

```typescript
public describeLimits()
```

##### `describeStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.describeStream"></a>

```typescript
public describeStream(input: KinesisDescribeStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamInput)

---

##### `describeStreamConsumer` <a name="aws-cdk-sdk.kinesis.KinesisClient.describeStreamConsumer"></a>

```typescript
public describeStreamConsumer(input: KinesisDescribeStreamConsumerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput)

---

##### `describeStreamSummary` <a name="aws-cdk-sdk.kinesis.KinesisClient.describeStreamSummary"></a>

```typescript
public describeStreamSummary(input: KinesisDescribeStreamSummaryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput)

---

##### `disableEnhancedMonitoring` <a name="aws-cdk-sdk.kinesis.KinesisClient.disableEnhancedMonitoring"></a>

```typescript
public disableEnhancedMonitoring(input: KinesisDisableEnhancedMonitoringInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput`](#aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput)

---

##### `enableEnhancedMonitoring` <a name="aws-cdk-sdk.kinesis.KinesisClient.enableEnhancedMonitoring"></a>

```typescript
public enableEnhancedMonitoring(input: KinesisEnableEnhancedMonitoringInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput`](#aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput)

---

##### `fetchRecords` <a name="aws-cdk-sdk.kinesis.KinesisClient.fetchRecords"></a>

```typescript
public fetchRecords(input: KinesisGetRecordsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisGetRecordsInput`](#aws-cdk-sdk.kinesis.KinesisGetRecordsInput)

---

##### `fetchShardIterator` <a name="aws-cdk-sdk.kinesis.KinesisClient.fetchShardIterator"></a>

```typescript
public fetchShardIterator(input: KinesisGetShardIteratorInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput`](#aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput)

---

##### `increaseStreamRetentionPeriod` <a name="aws-cdk-sdk.kinesis.KinesisClient.increaseStreamRetentionPeriod"></a>

```typescript
public increaseStreamRetentionPeriod(input: KinesisIncreaseStreamRetentionPeriodInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisIncreaseStreamRetentionPeriodInput`](#aws-cdk-sdk.kinesis.KinesisIncreaseStreamRetentionPeriodInput)

---

##### `listShards` <a name="aws-cdk-sdk.kinesis.KinesisClient.listShards"></a>

```typescript
public listShards(input: KinesisListShardsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListShardsInput`](#aws-cdk-sdk.kinesis.KinesisListShardsInput)

---

##### `listStreamConsumers` <a name="aws-cdk-sdk.kinesis.KinesisClient.listStreamConsumers"></a>

```typescript
public listStreamConsumers(input: KinesisListStreamConsumersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput`](#aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput)

---

##### `listStreams` <a name="aws-cdk-sdk.kinesis.KinesisClient.listStreams"></a>

```typescript
public listStreams(input: KinesisListStreamsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListStreamsInput`](#aws-cdk-sdk.kinesis.KinesisListStreamsInput)

---

##### `listTagsForStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.listTagsForStream"></a>

```typescript
public listTagsForStream(input: KinesisListTagsForStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput`](#aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput)

---

##### `mergeShards` <a name="aws-cdk-sdk.kinesis.KinesisClient.mergeShards"></a>

```typescript
public mergeShards(input: KinesisMergeShardsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisMergeShardsInput`](#aws-cdk-sdk.kinesis.KinesisMergeShardsInput)

---

##### `putRecord` <a name="aws-cdk-sdk.kinesis.KinesisClient.putRecord"></a>

```typescript
public putRecord(input: KinesisPutRecordInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordInput`](#aws-cdk-sdk.kinesis.KinesisPutRecordInput)

---

##### `putRecords` <a name="aws-cdk-sdk.kinesis.KinesisClient.putRecords"></a>

```typescript
public putRecords(input: KinesisPutRecordsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordsInput`](#aws-cdk-sdk.kinesis.KinesisPutRecordsInput)

---

##### `registerStreamConsumer` <a name="aws-cdk-sdk.kinesis.KinesisClient.registerStreamConsumer"></a>

```typescript
public registerStreamConsumer(input: KinesisRegisterStreamConsumerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput)

---

##### `removeTagsFromStream` <a name="aws-cdk-sdk.kinesis.KinesisClient.removeTagsFromStream"></a>

```typescript
public removeTagsFromStream(input: KinesisRemoveTagsFromStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRemoveTagsFromStreamInput`](#aws-cdk-sdk.kinesis.KinesisRemoveTagsFromStreamInput)

---

##### `splitShard` <a name="aws-cdk-sdk.kinesis.KinesisClient.splitShard"></a>

```typescript
public splitShard(input: KinesisSplitShardInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisSplitShardInput`](#aws-cdk-sdk.kinesis.KinesisSplitShardInput)

---

##### `startStreamEncryption` <a name="aws-cdk-sdk.kinesis.KinesisClient.startStreamEncryption"></a>

```typescript
public startStreamEncryption(input: KinesisStartStreamEncryptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput`](#aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput)

---

##### `stopStreamEncryption` <a name="aws-cdk-sdk.kinesis.KinesisClient.stopStreamEncryption"></a>

```typescript
public stopStreamEncryption(input: KinesisStopStreamEncryptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput`](#aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput)

---

##### `updateShardCount` <a name="aws-cdk-sdk.kinesis.KinesisClient.updateShardCount"></a>

```typescript
public updateShardCount(input: KinesisUpdateShardCountInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput`](#aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput)

---




## Structs <a name="Structs"></a>

### KinesisAddTagsToStreamInput <a name="aws-cdk-sdk.kinesis.KinesisAddTagsToStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisAddTagsToStreamInput: kinesis.KinesisAddTagsToStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisAddTagsToStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisAddTagsToStreamInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KinesisChildShard <a name="aws-cdk-sdk.kinesis.KinesisChildShard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisChildShard: kinesis.KinesisChildShard = { ... }
```

##### `hashKeyRange`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisChildShard.property.hashKeyRange"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisHashKeyRange`](#aws-cdk-sdk.kinesis.KinesisHashKeyRange)

---

##### `parentShards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisChildShard.property.parentShards"></a>

- *Type:* `string`[]

---

##### `shardId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisChildShard.property.shardId"></a>

- *Type:* `string`

---

### KinesisConsumer <a name="aws-cdk-sdk.kinesis.KinesisConsumer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisConsumer: kinesis.KinesisConsumer = { ... }
```

##### `consumerArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumer.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumer.property.consumerCreationTimestamp"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumer.property.consumerName"></a>

- *Type:* `string`

---

##### `consumerStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumer.property.consumerStatus"></a>

- *Type:* `string`

---

### KinesisConsumerDescription <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisConsumerDescription: kinesis.KinesisConsumerDescription = { ... }
```

##### `consumerArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription.property.consumerCreationTimestamp"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription.property.consumerName"></a>

- *Type:* `string`

---

##### `consumerStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription.property.consumerStatus"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisConsumerDescription.property.streamArn"></a>

- *Type:* `string`

---

### KinesisCreateStreamInput <a name="aws-cdk-sdk.kinesis.KinesisCreateStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisCreateStreamInput: kinesis.KinesisCreateStreamInput = { ... }
```

##### `shardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisCreateStreamInput.property.shardCount"></a>

- *Type:* `number`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisCreateStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisDecreaseStreamRetentionPeriodInput <a name="aws-cdk-sdk.kinesis.KinesisDecreaseStreamRetentionPeriodInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDecreaseStreamRetentionPeriodInput: kinesis.KinesisDecreaseStreamRetentionPeriodInput = { ... }
```

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDecreaseStreamRetentionPeriodInput.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDecreaseStreamRetentionPeriodInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisDeleteStreamInput <a name="aws-cdk-sdk.kinesis.KinesisDeleteStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDeleteStreamInput: kinesis.KinesisDeleteStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDeleteStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `enforceConsumerDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDeleteStreamInput.property.enforceConsumerDeletion"></a>

- *Type:* `boolean`

---

### KinesisDeregisterStreamConsumerInput <a name="aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDeregisterStreamConsumerInput: kinesis.KinesisDeregisterStreamConsumerInput = { ... }
```

##### `consumerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput.property.consumerName"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDeregisterStreamConsumerInput.property.streamArn"></a>

- *Type:* `string`

---

### KinesisDescribeLimitsInput <a name="aws-cdk-sdk.kinesis.KinesisDescribeLimitsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeLimitsInput: kinesis.KinesisDescribeLimitsInput = { ... }
```

### KinesisDescribeLimitsOutput <a name="aws-cdk-sdk.kinesis.KinesisDescribeLimitsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeLimitsOutput: kinesis.KinesisDescribeLimitsOutput = { ... }
```

##### `openShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeLimitsOutput.property.openShardCount"></a>

- *Type:* `number`

---

##### `shardLimit`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeLimitsOutput.property.shardLimit"></a>

- *Type:* `number`

---

### KinesisDescribeStreamConsumerInput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamConsumerInput: kinesis.KinesisDescribeStreamConsumerInput = { ... }
```

##### `consumerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput.property.consumerName"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput.property.streamArn"></a>

- *Type:* `string`

---

### KinesisDescribeStreamConsumerOutput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamConsumerOutput: kinesis.KinesisDescribeStreamConsumerOutput = { ... }
```

##### `consumerDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerOutput.property.consumerDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisConsumerDescription`](#aws-cdk-sdk.kinesis.KinesisConsumerDescription)

---

### KinesisDescribeStreamInput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamInput: kinesis.KinesisDescribeStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `exclusiveStartShardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamInput.property.exclusiveStartShardId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamInput.property.limit"></a>

- *Type:* `number`

---

### KinesisDescribeStreamOutput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamOutput: kinesis.KinesisDescribeStreamOutput = { ... }
```

##### `streamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamOutput.property.streamDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisStreamDescription`](#aws-cdk-sdk.kinesis.KinesisStreamDescription)

---

### KinesisDescribeStreamSummaryInput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamSummaryInput: kinesis.KinesisDescribeStreamSummaryInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisDescribeStreamSummaryOutput <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDescribeStreamSummaryOutput: kinesis.KinesisDescribeStreamSummaryOutput = { ... }
```

##### `streamDescriptionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryOutput.property.streamDescriptionSummary"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary`](#aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary)

---

### KinesisDisableEnhancedMonitoringInput <a name="aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisDisableEnhancedMonitoringInput: kinesis.KinesisDisableEnhancedMonitoringInput = { ... }
```

##### `shardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput.property.shardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisEnableEnhancedMonitoringInput <a name="aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisEnableEnhancedMonitoringInput: kinesis.KinesisEnableEnhancedMonitoringInput = { ... }
```

##### `shardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput.property.shardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisEnhancedMetrics <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisEnhancedMetrics: kinesis.KinesisEnhancedMetrics = { ... }
```

##### `shardLevelMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMetrics.property.shardLevelMetrics"></a>

- *Type:* `string`[]

---

### KinesisEnhancedMonitoringOutput <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMonitoringOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisEnhancedMonitoringOutput: kinesis.KinesisEnhancedMonitoringOutput = { ... }
```

##### `currentShardLevelMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMonitoringOutput.property.currentShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `desiredShardLevelMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMonitoringOutput.property.desiredShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisEnhancedMonitoringOutput.property.streamName"></a>

- *Type:* `string`

---

### KinesisGetRecordsInput <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisGetRecordsInput: kinesis.KinesisGetRecordsInput = { ... }
```

##### `shardIterator`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsInput.property.shardIterator"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsInput.property.limit"></a>

- *Type:* `number`

---

### KinesisGetRecordsOutput <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisGetRecordsOutput: kinesis.KinesisGetRecordsOutput = { ... }
```

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsOutput.property.records"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRecord`](#aws-cdk-sdk.kinesis.KinesisRecord)[]

---

##### `childShards`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsOutput.property.childShards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisChildShard`](#aws-cdk-sdk.kinesis.KinesisChildShard)[]

---

##### `millisBehindLatest`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsOutput.property.millisBehindLatest"></a>

- *Type:* `number`

---

##### `nextShardIterator`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetRecordsOutput.property.nextShardIterator"></a>

- *Type:* `string`

---

### KinesisGetShardIteratorInput <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisGetShardIteratorInput: kinesis.KinesisGetShardIteratorInput = { ... }
```

##### `shardId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput.property.shardId"></a>

- *Type:* `string`

---

##### `shardIteratorType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput.property.shardIteratorType"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput.property.streamName"></a>

- *Type:* `string`

---

##### `startingSequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput.property.startingSequenceNumber"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput.property.timestamp"></a>

- *Type:* `string`

---

### KinesisGetShardIteratorOutput <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisGetShardIteratorOutput: kinesis.KinesisGetShardIteratorOutput = { ... }
```

##### `shardIterator`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisGetShardIteratorOutput.property.shardIterator"></a>

- *Type:* `string`

---

### KinesisHashKeyRange <a name="aws-cdk-sdk.kinesis.KinesisHashKeyRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisHashKeyRange: kinesis.KinesisHashKeyRange = { ... }
```

##### `endingHashKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisHashKeyRange.property.endingHashKey"></a>

- *Type:* `string`

---

##### `startingHashKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisHashKeyRange.property.startingHashKey"></a>

- *Type:* `string`

---

### KinesisIncreaseStreamRetentionPeriodInput <a name="aws-cdk-sdk.kinesis.KinesisIncreaseStreamRetentionPeriodInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisIncreaseStreamRetentionPeriodInput: kinesis.KinesisIncreaseStreamRetentionPeriodInput = { ... }
```

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisIncreaseStreamRetentionPeriodInput.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisIncreaseStreamRetentionPeriodInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisListShardsInput <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListShardsInput: kinesis.KinesisListShardsInput = { ... }
```

##### `exclusiveStartShardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.exclusiveStartShardId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `shardFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.shardFilter"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisShardFilter`](#aws-cdk-sdk.kinesis.KinesisShardFilter)

---

##### `streamCreationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisListShardsOutput <a name="aws-cdk-sdk.kinesis.KinesisListShardsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListShardsOutput: kinesis.KinesisListShardsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `shards`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListShardsOutput.property.shards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisShard`](#aws-cdk-sdk.kinesis.KinesisShard)[]

---

### KinesisListStreamConsumersInput <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListStreamConsumersInput: kinesis.KinesisListStreamConsumersInput = { ... }
```

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput.property.streamArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput.property.nextToken"></a>

- *Type:* `string`

---

##### `streamCreationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

### KinesisListStreamConsumersOutput <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListStreamConsumersOutput: kinesis.KinesisListStreamConsumersOutput = { ... }
```

##### `consumers`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersOutput.property.consumers"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisConsumer`](#aws-cdk-sdk.kinesis.KinesisConsumer)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamConsumersOutput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisListStreamsInput <a name="aws-cdk-sdk.kinesis.KinesisListStreamsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListStreamsInput: kinesis.KinesisListStreamsInput = { ... }
```

##### `exclusiveStartStreamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamsInput.property.exclusiveStartStreamName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamsInput.property.limit"></a>

- *Type:* `number`

---

### KinesisListStreamsOutput <a name="aws-cdk-sdk.kinesis.KinesisListStreamsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListStreamsOutput: kinesis.KinesisListStreamsOutput = { ... }
```

##### `hasMoreStreams`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamsOutput.property.hasMoreStreams"></a>

- *Type:* `boolean`

---

##### `streamNames`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListStreamsOutput.property.streamNames"></a>

- *Type:* `string`[]

---

### KinesisListTagsForStreamInput <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListTagsForStreamInput: kinesis.KinesisListTagsForStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `exclusiveStartTagKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput.property.exclusiveStartTagKey"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput.property.limit"></a>

- *Type:* `number`

---

### KinesisListTagsForStreamOutput <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisListTagsForStreamOutput: kinesis.KinesisListTagsForStreamOutput = { ... }
```

##### `hasMoreTags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamOutput.property.hasMoreTags"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisListTagsForStreamOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisTag`](#aws-cdk-sdk.kinesis.KinesisTag)[]

---

### KinesisMergeShardsInput <a name="aws-cdk-sdk.kinesis.KinesisMergeShardsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisMergeShardsInput: kinesis.KinesisMergeShardsInput = { ... }
```

##### `adjacentShardToMerge`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisMergeShardsInput.property.adjacentShardToMerge"></a>

- *Type:* `string`

---

##### `shardToMerge`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisMergeShardsInput.property.shardToMerge"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisMergeShardsInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisPutRecordInput <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordInput: kinesis.KinesisPutRecordInput = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput.property.data"></a>

- *Type:* `any`

---

##### `partitionKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput.property.partitionKey"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput.property.streamName"></a>

- *Type:* `string`

---

##### `explicitHashKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput.property.explicitHashKey"></a>

- *Type:* `string`

---

##### `sequenceNumberForOrdering`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordInput.property.sequenceNumberForOrdering"></a>

- *Type:* `string`

---

### KinesisPutRecordOutput <a name="aws-cdk-sdk.kinesis.KinesisPutRecordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordOutput: kinesis.KinesisPutRecordOutput = { ... }
```

##### `sequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordOutput.property.sequenceNumber"></a>

- *Type:* `string`

---

##### `shardId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordOutput.property.shardId"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordOutput.property.encryptionType"></a>

- *Type:* `string`

---

### KinesisPutRecordsInput <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordsInput: kinesis.KinesisPutRecordsInput = { ... }
```

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsInput.property.records"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry`](#aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry)[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisPutRecordsOutput <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordsOutput: kinesis.KinesisPutRecordsOutput = { ... }
```

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsOutput.property.records"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry`](#aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry)[]

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsOutput.property.encryptionType"></a>

- *Type:* `string`

---

##### `failedRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsOutput.property.failedRecordCount"></a>

- *Type:* `number`

---

### KinesisPutRecordsRequestEntry <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordsRequestEntry: kinesis.KinesisPutRecordsRequestEntry = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry.property.data"></a>

- *Type:* `any`

---

##### `partitionKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry.property.partitionKey"></a>

- *Type:* `string`

---

##### `explicitHashKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsRequestEntry.property.explicitHashKey"></a>

- *Type:* `string`

---

### KinesisPutRecordsResultEntry <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisPutRecordsResultEntry: kinesis.KinesisPutRecordsResultEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry.property.sequenceNumber"></a>

- *Type:* `string`

---

##### `shardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry.property.shardId"></a>

- *Type:* `string`

---

### KinesisRecord <a name="aws-cdk-sdk.kinesis.KinesisRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisRecord: kinesis.KinesisRecord = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRecord.property.data"></a>

- *Type:* `any`

---

##### `partitionKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRecord.property.partitionKey"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRecord.property.sequenceNumber"></a>

- *Type:* `string`

---

##### `approximateArrivalTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisRecord.property.approximateArrivalTimestamp"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisRecord.property.encryptionType"></a>

- *Type:* `string`

---

### KinesisRegisterStreamConsumerInput <a name="aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisRegisterStreamConsumerInput: kinesis.KinesisRegisterStreamConsumerInput = { ... }
```

##### `consumerName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput.property.consumerName"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput.property.streamArn"></a>

- *Type:* `string`

---

### KinesisRegisterStreamConsumerOutput <a name="aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisRegisterStreamConsumerOutput: kinesis.KinesisRegisterStreamConsumerOutput = { ... }
```

##### `consumer`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerOutput.property.consumer"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisConsumer`](#aws-cdk-sdk.kinesis.KinesisConsumer)

---

### KinesisRemoveTagsFromStreamInput <a name="aws-cdk-sdk.kinesis.KinesisRemoveTagsFromStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisRemoveTagsFromStreamInput: kinesis.KinesisRemoveTagsFromStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRemoveTagsFromStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisRemoveTagsFromStreamInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### KinesisSequenceNumberRange <a name="aws-cdk-sdk.kinesis.KinesisSequenceNumberRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisSequenceNumberRange: kinesis.KinesisSequenceNumberRange = { ... }
```

##### `startingSequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisSequenceNumberRange.property.startingSequenceNumber"></a>

- *Type:* `string`

---

##### `endingSequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisSequenceNumberRange.property.endingSequenceNumber"></a>

- *Type:* `string`

---

### KinesisShard <a name="aws-cdk-sdk.kinesis.KinesisShard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisShard: kinesis.KinesisShard = { ... }
```

##### `hashKeyRange`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisShard.property.hashKeyRange"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisHashKeyRange`](#aws-cdk-sdk.kinesis.KinesisHashKeyRange)

---

##### `sequenceNumberRange`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisShard.property.sequenceNumberRange"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisSequenceNumberRange`](#aws-cdk-sdk.kinesis.KinesisSequenceNumberRange)

---

##### `shardId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisShard.property.shardId"></a>

- *Type:* `string`

---

##### `adjacentParentShardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisShard.property.adjacentParentShardId"></a>

- *Type:* `string`

---

##### `parentShardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisShard.property.parentShardId"></a>

- *Type:* `string`

---

### KinesisShardFilter <a name="aws-cdk-sdk.kinesis.KinesisShardFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisShardFilter: kinesis.KinesisShardFilter = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisShardFilter.property.type"></a>

- *Type:* `string`

---

##### `shardId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisShardFilter.property.shardId"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisShardFilter.property.timestamp"></a>

- *Type:* `string`

---

### KinesisSplitShardInput <a name="aws-cdk-sdk.kinesis.KinesisSplitShardInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisSplitShardInput: kinesis.KinesisSplitShardInput = { ... }
```

##### `newStartingHashKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisSplitShardInput.property.newStartingHashKey"></a>

- *Type:* `string`

---

##### `shardToSplit`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisSplitShardInput.property.shardToSplit"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisSplitShardInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisStartStreamEncryptionInput <a name="aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisStartStreamEncryptionInput: kinesis.KinesisStartStreamEncryptionInput = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput.property.keyId"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStartStreamEncryptionInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisStopStreamEncryptionInput <a name="aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisStopStreamEncryptionInput: kinesis.KinesisStopStreamEncryptionInput = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput.property.keyId"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStopStreamEncryptionInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisStreamDescription <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisStreamDescription: kinesis.KinesisStreamDescription = { ... }
```

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.enhancedMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnhancedMetrics`](#aws-cdk-sdk.kinesis.KinesisEnhancedMetrics)[]

---

##### `hasMoreShards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.hasMoreShards"></a>

- *Type:* `boolean`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `shards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.shards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisShard`](#aws-cdk-sdk.kinesis.KinesisShard)[]

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.streamArn"></a>

- *Type:* `string`

---

##### `streamCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.streamName"></a>

- *Type:* `string`

---

##### `streamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.streamStatus"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescription.property.keyId"></a>

- *Type:* `string`

---

### KinesisStreamDescriptionSummary <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisStreamDescriptionSummary: kinesis.KinesisStreamDescriptionSummary = { ... }
```

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.enhancedMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnhancedMetrics`](#aws-cdk-sdk.kinesis.KinesisEnhancedMetrics)[]

---

##### `openShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.openShardCount"></a>

- *Type:* `number`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.streamArn"></a>

- *Type:* `string`

---

##### `streamCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.streamName"></a>

- *Type:* `string`

---

##### `streamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.streamStatus"></a>

- *Type:* `string`

---

##### `consumerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.consumerCount"></a>

- *Type:* `number`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.encryptionType"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisStreamDescriptionSummary.property.keyId"></a>

- *Type:* `string`

---

### KinesisTag <a name="aws-cdk-sdk.kinesis.KinesisTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisTag: kinesis.KinesisTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisTag.property.value"></a>

- *Type:* `string`

---

### KinesisUpdateShardCountInput <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisUpdateShardCountInput: kinesis.KinesisUpdateShardCountInput = { ... }
```

##### `scalingType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput.property.scalingType"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput.property.streamName"></a>

- *Type:* `string`

---

##### `targetShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput.property.targetShardCount"></a>

- *Type:* `number`

---

### KinesisUpdateShardCountOutput <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

const kinesisUpdateShardCountOutput: kinesis.KinesisUpdateShardCountOutput = { ... }
```

##### `currentShardCount`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountOutput.property.currentShardCount"></a>

- *Type:* `number`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountOutput.property.streamName"></a>

- *Type:* `string`

---

##### `targetShardCount`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesis.KinesisUpdateShardCountOutput.property.targetShardCount"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### KinesisResponsesDescribeLimits <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeLimits(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `openShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits.property.openShardCount"></a>

- *Type:* `number`

---

##### `shardLimit`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeLimits.property.shardLimit"></a>

- *Type:* `number`

---


### KinesisResponsesDescribeStream <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStream(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamInput)

---



#### Properties <a name="Properties"></a>

##### `streamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStream.property.streamDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription`](#aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription)

---


### KinesisResponsesDescribeStreamConsumer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStreamConsumer(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamConsumerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput)

---



#### Properties <a name="Properties"></a>

##### `consumerDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumer.property.consumerDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription`](#aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription)

---


### KinesisResponsesDescribeStreamConsumerConsumerDescription <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamConsumerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamConsumerInput)

---



#### Properties <a name="Properties"></a>

##### `consumerArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.property.consumerCreationTimestamp"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.property.consumerName"></a>

- *Type:* `string`

---

##### `consumerStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.property.consumerStatus"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamConsumerConsumerDescription.property.streamArn"></a>

- *Type:* `string`

---


### KinesisResponsesDescribeStreamStreamDescription <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStreamStreamDescription(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.enhancedMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnhancedMetrics`](#aws-cdk-sdk.kinesis.KinesisEnhancedMetrics)[]

---

##### `hasMoreShards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.hasMoreShards"></a>

- *Type:* `boolean`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.keyId"></a>

- *Type:* `string`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `shards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.shards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisShard`](#aws-cdk-sdk.kinesis.KinesisShard)[]

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.streamArn"></a>

- *Type:* `string`

---

##### `streamCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.streamName"></a>

- *Type:* `string`

---

##### `streamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamStreamDescription.property.streamStatus"></a>

- *Type:* `string`

---


### KinesisResponsesDescribeStreamSummary <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStreamSummary(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamSummaryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput)

---



#### Properties <a name="Properties"></a>

##### `streamDescriptionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummary.property.streamDescriptionSummary"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary`](#aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary)

---


### KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary(__scope: Construct, __resources: string[], __input: KinesisDescribeStreamSummaryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput`](#aws-cdk-sdk.kinesis.KinesisDescribeStreamSummaryInput)

---



#### Properties <a name="Properties"></a>

##### `consumerCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.consumerCount"></a>

- *Type:* `number`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.enhancedMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnhancedMetrics`](#aws-cdk-sdk.kinesis.KinesisEnhancedMetrics)[]

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.keyId"></a>

- *Type:* `string`

---

##### `openShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.openShardCount"></a>

- *Type:* `number`

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.retentionPeriodHours"></a>

- *Type:* `number`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.streamArn"></a>

- *Type:* `string`

---

##### `streamCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.streamCreationTimestamp"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.streamName"></a>

- *Type:* `string`

---

##### `streamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDescribeStreamSummaryStreamDescriptionSummary.property.streamStatus"></a>

- *Type:* `string`

---


### KinesisResponsesDisableEnhancedMonitoring <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesDisableEnhancedMonitoring(__scope: Construct, __resources: string[], __input: KinesisDisableEnhancedMonitoringInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput`](#aws-cdk-sdk.kinesis.KinesisDisableEnhancedMonitoringInput)

---



#### Properties <a name="Properties"></a>

##### `currentShardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.property.currentShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `desiredShardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.property.desiredShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesDisableEnhancedMonitoring.property.streamName"></a>

- *Type:* `string`

---


### KinesisResponsesEnableEnhancedMonitoring <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesEnableEnhancedMonitoring(__scope: Construct, __resources: string[], __input: KinesisEnableEnhancedMonitoringInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput`](#aws-cdk-sdk.kinesis.KinesisEnableEnhancedMonitoringInput)

---



#### Properties <a name="Properties"></a>

##### `currentShardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.property.currentShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `desiredShardLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.property.desiredShardLevelMetrics"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesEnableEnhancedMonitoring.property.streamName"></a>

- *Type:* `string`

---


### KinesisResponsesFetchRecords <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesFetchRecords(__scope: Construct, __resources: string[], __input: KinesisGetRecordsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisGetRecordsInput`](#aws-cdk-sdk.kinesis.KinesisGetRecordsInput)

---



#### Properties <a name="Properties"></a>

##### `childShards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.property.childShards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisChildShard`](#aws-cdk-sdk.kinesis.KinesisChildShard)[]

---

##### `millisBehindLatest`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.property.millisBehindLatest"></a>

- *Type:* `number`

---

##### `nextShardIterator`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.property.nextShardIterator"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchRecords.property.records"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRecord`](#aws-cdk-sdk.kinesis.KinesisRecord)[]

---


### KinesisResponsesFetchShardIterator <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesFetchShardIterator(__scope: Construct, __resources: string[], __input: KinesisGetShardIteratorInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput`](#aws-cdk-sdk.kinesis.KinesisGetShardIteratorInput)

---



#### Properties <a name="Properties"></a>

##### `shardIterator`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesFetchShardIterator.property.shardIterator"></a>

- *Type:* `string`

---


### KinesisResponsesListShards <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesListShards(__scope: Construct, __resources: string[], __input: KinesisListShardsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListShardsInput`](#aws-cdk-sdk.kinesis.KinesisListShardsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.property.nextToken"></a>

- *Type:* `string`

---

##### `shards`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListShards.property.shards"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisShard`](#aws-cdk-sdk.kinesis.KinesisShard)[]

---


### KinesisResponsesListStreamConsumers <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesListStreamConsumers(__scope: Construct, __resources: string[], __input: KinesisListStreamConsumersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput`](#aws-cdk-sdk.kinesis.KinesisListStreamConsumersInput)

---



#### Properties <a name="Properties"></a>

##### `consumers`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.property.consumers"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisConsumer`](#aws-cdk-sdk.kinesis.KinesisConsumer)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreamConsumers.property.nextToken"></a>

- *Type:* `string`

---


### KinesisResponsesListStreams <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesListStreams(__scope: Construct, __resources: string[], __input: KinesisListStreamsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListStreamsInput`](#aws-cdk-sdk.kinesis.KinesisListStreamsInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreStreams`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.property.hasMoreStreams"></a>

- *Type:* `boolean`

---

##### `streamNames`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListStreams.property.streamNames"></a>

- *Type:* `string`[]

---


### KinesisResponsesListTagsForStream <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesListTagsForStream(__scope: Construct, __resources: string[], __input: KinesisListTagsForStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput`](#aws-cdk-sdk.kinesis.KinesisListTagsForStreamInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreTags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.property.hasMoreTags"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesListTagsForStream.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisTag`](#aws-cdk-sdk.kinesis.KinesisTag)[]

---


### KinesisResponsesPutRecord <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesPutRecord(__scope: Construct, __resources: string[], __input: KinesisPutRecordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordInput`](#aws-cdk-sdk.kinesis.KinesisPutRecordInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.property.encryptionType"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.property.sequenceNumber"></a>

- *Type:* `string`

---

##### `shardId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecord.property.shardId"></a>

- *Type:* `string`

---


### KinesisResponsesPutRecords <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesPutRecords(__scope: Construct, __resources: string[], __input: KinesisPutRecordsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordsInput`](#aws-cdk-sdk.kinesis.KinesisPutRecordsInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.property.encryptionType"></a>

- *Type:* `string`

---

##### `failedRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.property.failedRecordCount"></a>

- *Type:* `number`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesPutRecords.property.records"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry`](#aws-cdk-sdk.kinesis.KinesisPutRecordsResultEntry)[]

---


### KinesisResponsesRegisterStreamConsumer <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesRegisterStreamConsumer(__scope: Construct, __resources: string[], __input: KinesisRegisterStreamConsumerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput)

---



#### Properties <a name="Properties"></a>

##### `consumer`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumer.property.consumer"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer`](#aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer)

---


### KinesisResponsesRegisterStreamConsumerConsumer <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesRegisterStreamConsumerConsumer(__scope: Construct, __resources: string[], __input: KinesisRegisterStreamConsumerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput`](#aws-cdk-sdk.kinesis.KinesisRegisterStreamConsumerInput)

---



#### Properties <a name="Properties"></a>

##### `consumerArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.property.consumerArn"></a>

- *Type:* `string`

---

##### `consumerCreationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.property.consumerCreationTimestamp"></a>

- *Type:* `string`

---

##### `consumerName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.property.consumerName"></a>

- *Type:* `string`

---

##### `consumerStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesRegisterStreamConsumerConsumer.property.consumerStatus"></a>

- *Type:* `string`

---


### KinesisResponsesUpdateShardCount <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount"></a>

#### Initializer <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.Initializer"></a>

```typescript
import { kinesis } from 'aws-cdk-sdk'

new kinesis.KinesisResponsesUpdateShardCount(__scope: Construct, __resources: string[], __input: KinesisUpdateShardCountInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput`](#aws-cdk-sdk.kinesis.KinesisUpdateShardCountInput)

---



#### Properties <a name="Properties"></a>

##### `currentShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.property.currentShardCount"></a>

- *Type:* `number`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.property.streamName"></a>

- *Type:* `string`

---

##### `targetShardCount`<sup>Required</sup> <a name="aws-cdk-sdk.kinesis.KinesisResponsesUpdateShardCount.property.targetShardCount"></a>

- *Type:* `number`

---



