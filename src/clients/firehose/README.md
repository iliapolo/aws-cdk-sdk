# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### FirehoseClient <a name="aws-cdk-sdk.firehose.FirehoseClient"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseClient.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.createDeliveryStream"></a>

```typescript
public createDeliveryStream(input: FirehoseCreateDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput)

---

##### `deleteDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.deleteDeliveryStream"></a>

```typescript
public deleteDeliveryStream(input: FirehoseDeleteDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamInput)

---

##### `describeDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.describeDeliveryStream"></a>

```typescript
public describeDeliveryStream(input: FirehoseDescribeDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---

##### `listDeliveryStreams` <a name="aws-cdk-sdk.firehose.FirehoseClient.listDeliveryStreams"></a>

```typescript
public listDeliveryStreams(input: FirehoseListDeliveryStreamsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput`](#aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput)

---

##### `listTagsForDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.listTagsForDeliveryStream"></a>

```typescript
public listTagsForDeliveryStream(input: FirehoseListTagsForDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput)

---

##### `putRecord` <a name="aws-cdk-sdk.firehose.FirehoseClient.putRecord"></a>

```typescript
public putRecord(input: FirehosePutRecordInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordInput`](#aws-cdk-sdk.firehose.FirehosePutRecordInput)

---

##### `putRecordBatch` <a name="aws-cdk-sdk.firehose.FirehoseClient.putRecordBatch"></a>

```typescript
public putRecordBatch(input: FirehosePutRecordBatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordBatchInput`](#aws-cdk-sdk.firehose.FirehosePutRecordBatchInput)

---

##### `startDeliveryStreamEncryption` <a name="aws-cdk-sdk.firehose.FirehoseClient.startDeliveryStreamEncryption"></a>

```typescript
public startDeliveryStreamEncryption(input: FirehoseStartDeliveryStreamEncryptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionInput`](#aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionInput)

---

##### `stopDeliveryStreamEncryption` <a name="aws-cdk-sdk.firehose.FirehoseClient.stopDeliveryStreamEncryption"></a>

```typescript
public stopDeliveryStreamEncryption(input: FirehoseStopDeliveryStreamEncryptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseStopDeliveryStreamEncryptionInput`](#aws-cdk-sdk.firehose.FirehoseStopDeliveryStreamEncryptionInput)

---

##### `tagDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.tagDeliveryStream"></a>

```typescript
public tagDeliveryStream(input: FirehoseTagDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamInput)

---

##### `untagDeliveryStream` <a name="aws-cdk-sdk.firehose.FirehoseClient.untagDeliveryStream"></a>

```typescript
public untagDeliveryStream(input: FirehoseUntagDeliveryStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamInput)

---

##### `updateDestination` <a name="aws-cdk-sdk.firehose.FirehoseClient.updateDestination"></a>

```typescript
public updateDestination(input: FirehoseUpdateDestinationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput`](#aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput)

---




## Structs <a name="Structs"></a>

### FirehoseBufferingHints <a name="aws-cdk-sdk.firehose.FirehoseBufferingHints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseBufferingHints: firehose.FirehoseBufferingHints = { ... }
```

##### `intervalInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseBufferingHints.property.intervalInSeconds"></a>

- *Type:* `number`

---

##### `sizeInMBs`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseBufferingHints.property.sizeInMBs"></a>

- *Type:* `number`

---

### FirehoseCloudWatchLoggingOptions <a name="aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseCloudWatchLoggingOptions: firehose.FirehoseCloudWatchLoggingOptions = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions.property.logGroupName"></a>

- *Type:* `string`

---

##### `logStreamName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions.property.logStreamName"></a>

- *Type:* `string`

---

### FirehoseCopyCommand <a name="aws-cdk-sdk.firehose.FirehoseCopyCommand"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseCopyCommand: firehose.FirehoseCopyCommand = { ... }
```

##### `dataTableName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseCopyCommand.property.dataTableName"></a>

- *Type:* `string`

---

##### `copyOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCopyCommand.property.copyOptions"></a>

- *Type:* `string`

---

##### `dataTableColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCopyCommand.property.dataTableColumns"></a>

- *Type:* `string`

---

### FirehoseCreateDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseCreateDeliveryStreamInput: firehose.FirehoseCreateDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `deliveryStreamEncryptionConfigurationInput`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.deliveryStreamEncryptionConfigurationInput"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput`](#aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput)

---

##### `deliveryStreamType`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.deliveryStreamType"></a>

- *Type:* `string`

---

##### `elasticsearchDestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.elasticsearchDestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration)

---

##### `extendedS3DestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.extendedS3DestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration)

---

##### `httpEndpointDestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.httpEndpointDestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration)

---

##### `kinesisStreamSourceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.kinesisStreamSourceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceConfiguration`](#aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceConfiguration)

---

##### `redshiftDestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.redshiftDestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration)

---

##### `s3DestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.s3DestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `splunkDestinationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.splunkDestinationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseTag`](#aws-cdk-sdk.firehose.FirehoseTag)[]

---

### FirehoseCreateDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseCreateDeliveryStreamOutput: firehose.FirehoseCreateDeliveryStreamOutput = { ... }
```

##### `deliveryStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamOutput.property.deliveryStreamArn"></a>

- *Type:* `string`

---

### FirehoseDataFormatConversionConfiguration <a name="aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDataFormatConversionConfiguration: firehose.FirehoseDataFormatConversionConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `inputFormatConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration.property.inputFormatConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseInputFormatConfiguration`](#aws-cdk-sdk.firehose.FirehoseInputFormatConfiguration)

---

##### `outputFormatConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration.property.outputFormatConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseOutputFormatConfiguration`](#aws-cdk-sdk.firehose.FirehoseOutputFormatConfiguration)

---

##### `schemaConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration.property.schemaConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSchemaConfiguration`](#aws-cdk-sdk.firehose.FirehoseSchemaConfiguration)

---

### FirehoseDeleteDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeleteDeliveryStreamInput: firehose.FirehoseDeleteDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `allowForceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamInput.property.allowForceDelete"></a>

- *Type:* `boolean`

---

### FirehoseDeleteDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseDeleteDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeleteDeliveryStreamOutput: firehose.FirehoseDeleteDeliveryStreamOutput = { ... }
```

### FirehoseDeliveryStreamDescription <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeliveryStreamDescription: firehose.FirehoseDeliveryStreamDescription = { ... }
```

##### `deliveryStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.deliveryStreamArn"></a>

- *Type:* `string`

---

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `deliveryStreamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.deliveryStreamStatus"></a>

- *Type:* `string`

---

##### `deliveryStreamType`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.deliveryStreamType"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseDestinationDescription)[]

---

##### `hasMoreDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.hasMoreDestinations"></a>

- *Type:* `boolean`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.versionId"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deliveryStreamEncryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.deliveryStreamEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration)

---

##### `failureDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.failureDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseFailureDescription`](#aws-cdk-sdk.firehose.FirehoseFailureDescription)

---

##### `lastUpdateTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription.property.source"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSourceDescription`](#aws-cdk-sdk.firehose.FirehoseSourceDescription)

---

### FirehoseDeliveryStreamEncryptionConfiguration <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeliveryStreamEncryptionConfiguration: firehose.FirehoseDeliveryStreamEncryptionConfiguration = { ... }
```

##### `failureDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration.property.failureDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseFailureDescription`](#aws-cdk-sdk.firehose.FirehoseFailureDescription)

---

##### `keyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration.property.keyArn"></a>

- *Type:* `string`

---

##### `keyType`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration.property.keyType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfiguration.property.status"></a>

- *Type:* `string`

---

### FirehoseDeliveryStreamEncryptionConfigurationInput <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeliveryStreamEncryptionConfigurationInput: firehose.FirehoseDeliveryStreamEncryptionConfigurationInput = { ... }
```

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput.property.keyType"></a>

- *Type:* `string`

---

##### `keyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput.property.keyArn"></a>

- *Type:* `string`

---

### FirehoseDescribeDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDescribeDeliveryStreamInput: firehose.FirehoseDescribeDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `exclusiveStartDestinationId`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput.property.exclusiveStartDestinationId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput.property.limit"></a>

- *Type:* `number`

---

### FirehoseDescribeDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDescribeDeliveryStreamOutput: firehose.FirehoseDescribeDeliveryStreamOutput = { ... }
```

##### `deliveryStreamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamOutput.property.deliveryStreamDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription`](#aws-cdk-sdk.firehose.FirehoseDeliveryStreamDescription)

---

### FirehoseDeserializer <a name="aws-cdk-sdk.firehose.FirehoseDeserializer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDeserializer: firehose.FirehoseDeserializer = { ... }
```

##### `hiveJsonSerDe`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeserializer.property.hiveJsonSerDe"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHiveJsonSerDe`](#aws-cdk-sdk.firehose.FirehoseHiveJsonSerDe)

---

##### `openXJsonSerDe`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDeserializer.property.openXJsonSerDe"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe`](#aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe)

---

### FirehoseDestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseDestinationDescription: firehose.FirehoseDestinationDescription = { ... }
```

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.destinationId"></a>

- *Type:* `string`

---

##### `elasticsearchDestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.elasticsearchDestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription)

---

##### `extendedS3DestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.extendedS3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription)

---

##### `httpEndpointDestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.httpEndpointDestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription)

---

##### `redshiftDestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.redshiftDestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription)

---

##### `s3DestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.s3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

##### `splunkDestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseDestinationDescription.property.splunkDestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription)

---

### FirehoseElasticsearchBufferingHints <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseElasticsearchBufferingHints: firehose.FirehoseElasticsearchBufferingHints = { ... }
```

##### `intervalInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints.property.intervalInSeconds"></a>

- *Type:* `number`

---

##### `sizeInMBs`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints.property.sizeInMBs"></a>

- *Type:* `number`

---

### FirehoseElasticsearchDestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseElasticsearchDestinationConfiguration: firehose.FirehoseElasticsearchDestinationConfiguration = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.indexName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `s3Configuration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.s3Configuration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints`](#aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.clusterEndpoint"></a>

- *Type:* `string`

---

##### `domainArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.domainArn"></a>

- *Type:* `string`

---

##### `indexRotationPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.indexRotationPeriod"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions`](#aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.typeName"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationConfiguration.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseVpcConfiguration`](#aws-cdk-sdk.firehose.FirehoseVpcConfiguration)

---

### FirehoseElasticsearchDestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseElasticsearchDestinationDescription: firehose.FirehoseElasticsearchDestinationDescription = { ... }
```

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints`](#aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.clusterEndpoint"></a>

- *Type:* `string`

---

##### `domainArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.domainArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.indexName"></a>

- *Type:* `string`

---

##### `indexRotationPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.indexRotationPeriod"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions`](#aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3DestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.s3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.typeName"></a>

- *Type:* `string`

---

##### `vpcConfigurationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationDescription.property.vpcConfigurationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription`](#aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription)

---

### FirehoseElasticsearchDestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseElasticsearchDestinationUpdate: firehose.FirehoseElasticsearchDestinationUpdate = { ... }
```

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints`](#aws-cdk-sdk.firehose.FirehoseElasticsearchBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `clusterEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.clusterEndpoint"></a>

- *Type:* `string`

---

##### `domainArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.domainArn"></a>

- *Type:* `string`

---

##### `indexName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.indexName"></a>

- *Type:* `string`

---

##### `indexRotationPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.indexRotationPeriod"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions`](#aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.roleArn"></a>

- *Type:* `string`

---

##### `s3Update`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.s3Update"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate.property.typeName"></a>

- *Type:* `string`

---

### FirehoseElasticsearchRetryOptions <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseElasticsearchRetryOptions: firehose.FirehoseElasticsearchRetryOptions = { ... }
```

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseElasticsearchRetryOptions.property.durationInSeconds"></a>

- *Type:* `number`

---

### FirehoseEncryptionConfiguration <a name="aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseEncryptionConfiguration: firehose.FirehoseEncryptionConfiguration = { ... }
```

##### `kmsEncryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration.property.kmsEncryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseKmsEncryptionConfig`](#aws-cdk-sdk.firehose.FirehoseKmsEncryptionConfig)

---

##### `noEncryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration.property.noEncryptionConfig"></a>

- *Type:* `string`

---

### FirehoseExtendedS3DestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseExtendedS3DestinationConfiguration: firehose.FirehoseExtendedS3DestinationConfiguration = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.bucketArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `compressionFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.compressionFormat"></a>

- *Type:* `string`

---

##### `dataFormatConversionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.dataFormatConversionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration`](#aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration)

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.prefix"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `s3BackupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.s3BackupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationConfiguration.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseExtendedS3DestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseExtendedS3DestinationDescription: firehose.FirehoseExtendedS3DestinationDescription = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.bucketArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `compressionFormat`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.compressionFormat"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `dataFormatConversionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.dataFormatConversionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration`](#aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.prefix"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `s3BackupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.s3BackupDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationDescription.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseExtendedS3DestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseExtendedS3DestinationUpdate: firehose.FirehoseExtendedS3DestinationUpdate = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.bucketArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `compressionFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.compressionFormat"></a>

- *Type:* `string`

---

##### `dataFormatConversionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.dataFormatConversionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration`](#aws-cdk-sdk.firehose.FirehoseDataFormatConversionConfiguration)

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.prefix"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3BackupUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate.property.s3BackupUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

### FirehoseFailureDescription <a name="aws-cdk-sdk.firehose.FirehoseFailureDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseFailureDescription: firehose.FirehoseFailureDescription = { ... }
```

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseFailureDescription.property.details"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseFailureDescription.property.type"></a>

- *Type:* `string`

---

### FirehoseHiveJsonSerDe <a name="aws-cdk-sdk.firehose.FirehoseHiveJsonSerDe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHiveJsonSerDe: firehose.FirehoseHiveJsonSerDe = { ... }
```

##### `timestampFormats`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHiveJsonSerDe.property.timestampFormats"></a>

- *Type:* `string`[]

---

### FirehoseHttpEndpointBufferingHints <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointBufferingHints: firehose.FirehoseHttpEndpointBufferingHints = { ... }
```

##### `intervalInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints.property.intervalInSeconds"></a>

- *Type:* `number`

---

##### `sizeInMBs`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints.property.sizeInMBs"></a>

- *Type:* `number`

---

### FirehoseHttpEndpointCommonAttribute <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointCommonAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointCommonAttribute: firehose.FirehoseHttpEndpointCommonAttribute = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointCommonAttribute.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointCommonAttribute.property.attributeValue"></a>

- *Type:* `string`

---

### FirehoseHttpEndpointConfiguration <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointConfiguration: firehose.FirehoseHttpEndpointConfiguration = { ... }
```

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration.property.url"></a>

- *Type:* `string`

---

##### `accessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration.property.accessKey"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration.property.name"></a>

- *Type:* `string`

---

### FirehoseHttpEndpointDescription <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointDescription: firehose.FirehoseHttpEndpointDescription = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDescription.property.name"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDescription.property.url"></a>

- *Type:* `string`

---

### FirehoseHttpEndpointDestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointDestinationConfiguration: firehose.FirehoseHttpEndpointDestinationConfiguration = { ... }
```

##### `endpointConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration)

---

##### `s3Configuration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.s3Configuration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `requestConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.requestConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationConfiguration.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseHttpEndpointDestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointDestinationDescription: firehose.FirehoseHttpEndpointDestinationDescription = { ... }
```

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointDescription`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointDescription)

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `requestConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.requestConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3DestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationDescription.property.s3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

### FirehoseHttpEndpointDestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointDestinationUpdate: firehose.FirehoseHttpEndpointDestinationUpdate = { ... }
```

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.endpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointConfiguration)

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `requestConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.requestConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3Update`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate.property.s3Update"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

### FirehoseHttpEndpointRequestConfiguration <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointRequestConfiguration: firehose.FirehoseHttpEndpointRequestConfiguration = { ... }
```

##### `commonAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration.property.commonAttributes"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointCommonAttribute`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointCommonAttribute)[]

---

##### `contentEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointRequestConfiguration.property.contentEncoding"></a>

- *Type:* `string`

---

### FirehoseHttpEndpointRetryOptions <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseHttpEndpointRetryOptions: firehose.FirehoseHttpEndpointRetryOptions = { ... }
```

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseHttpEndpointRetryOptions.property.durationInSeconds"></a>

- *Type:* `number`

---

### FirehoseInputFormatConfiguration <a name="aws-cdk-sdk.firehose.FirehoseInputFormatConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseInputFormatConfiguration: firehose.FirehoseInputFormatConfiguration = { ... }
```

##### `deserializer`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseInputFormatConfiguration.property.deserializer"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeserializer`](#aws-cdk-sdk.firehose.FirehoseDeserializer)

---

### FirehoseKinesisStreamSourceConfiguration <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseKinesisStreamSourceConfiguration: firehose.FirehoseKinesisStreamSourceConfiguration = { ... }
```

##### `kinesisStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceConfiguration.property.kinesisStreamArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceConfiguration.property.roleArn"></a>

- *Type:* `string`

---

### FirehoseKinesisStreamSourceDescription <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseKinesisStreamSourceDescription: firehose.FirehoseKinesisStreamSourceDescription = { ... }
```

##### `deliveryStartTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription.property.deliveryStartTimestamp"></a>

- *Type:* `string`

---

##### `kinesisStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription.property.kinesisStreamArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription.property.roleArn"></a>

- *Type:* `string`

---

### FirehoseKmsEncryptionConfig <a name="aws-cdk-sdk.firehose.FirehoseKmsEncryptionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseKmsEncryptionConfig: firehose.FirehoseKmsEncryptionConfig = { ... }
```

##### `awskmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseKmsEncryptionConfig.property.awskmsKeyArn"></a>

- *Type:* `string`

---

### FirehoseListDeliveryStreamsInput <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseListDeliveryStreamsInput: firehose.FirehoseListDeliveryStreamsInput = { ... }
```

##### `deliveryStreamType`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput.property.deliveryStreamType"></a>

- *Type:* `string`

---

##### `exclusiveStartDeliveryStreamName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput.property.exclusiveStartDeliveryStreamName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput.property.limit"></a>

- *Type:* `number`

---

### FirehoseListDeliveryStreamsOutput <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseListDeliveryStreamsOutput: firehose.FirehoseListDeliveryStreamsOutput = { ... }
```

##### `deliveryStreamNames`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsOutput.property.deliveryStreamNames"></a>

- *Type:* `string`[]

---

##### `hasMoreDeliveryStreams`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsOutput.property.hasMoreDeliveryStreams"></a>

- *Type:* `boolean`

---

### FirehoseListTagsForDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseListTagsForDeliveryStreamInput: firehose.FirehoseListTagsForDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `exclusiveStartTagKey`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput.property.exclusiveStartTagKey"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput.property.limit"></a>

- *Type:* `number`

---

### FirehoseListTagsForDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseListTagsForDeliveryStreamOutput: firehose.FirehoseListTagsForDeliveryStreamOutput = { ... }
```

##### `hasMoreTags`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamOutput.property.hasMoreTags"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseTag`](#aws-cdk-sdk.firehose.FirehoseTag)[]

---

### FirehoseOpenXJsonSerDe <a name="aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseOpenXJsonSerDe: firehose.FirehoseOpenXJsonSerDe = { ... }
```

##### `caseInsensitive`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe.property.caseInsensitive"></a>

- *Type:* `boolean`

---

##### `columnToJsonKeyMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe.property.columnToJsonKeyMappings"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `convertDotsInJsonKeysToUnderscores`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOpenXJsonSerDe.property.convertDotsInJsonKeysToUnderscores"></a>

- *Type:* `boolean`

---

### FirehoseOrcSerDe <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseOrcSerDe: firehose.FirehoseOrcSerDe = { ... }
```

##### `blockSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.blockSizeBytes"></a>

- *Type:* `number`

---

##### `bloomFilterColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.bloomFilterColumns"></a>

- *Type:* `string`[]

---

##### `bloomFilterFalsePositiveProbability`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.bloomFilterFalsePositiveProbability"></a>

- *Type:* `number`

---

##### `compression`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.compression"></a>

- *Type:* `string`

---

##### `dictionaryKeyThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.dictionaryKeyThreshold"></a>

- *Type:* `number`

---

##### `enablePadding`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.enablePadding"></a>

- *Type:* `boolean`

---

##### `formatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.formatVersion"></a>

- *Type:* `string`

---

##### `paddingTolerance`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.paddingTolerance"></a>

- *Type:* `number`

---

##### `rowIndexStride`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.rowIndexStride"></a>

- *Type:* `number`

---

##### `stripeSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOrcSerDe.property.stripeSizeBytes"></a>

- *Type:* `number`

---

### FirehoseOutputFormatConfiguration <a name="aws-cdk-sdk.firehose.FirehoseOutputFormatConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseOutputFormatConfiguration: firehose.FirehoseOutputFormatConfiguration = { ... }
```

##### `serializer`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseOutputFormatConfiguration.property.serializer"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSerializer`](#aws-cdk-sdk.firehose.FirehoseSerializer)

---

### FirehoseParquetSerDe <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseParquetSerDe: firehose.FirehoseParquetSerDe = { ... }
```

##### `blockSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.blockSizeBytes"></a>

- *Type:* `number`

---

##### `compression`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.compression"></a>

- *Type:* `string`

---

##### `enableDictionaryCompression`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.enableDictionaryCompression"></a>

- *Type:* `boolean`

---

##### `maxPaddingBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.maxPaddingBytes"></a>

- *Type:* `number`

---

##### `pageSizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.pageSizeBytes"></a>

- *Type:* `number`

---

##### `writerVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseParquetSerDe.property.writerVersion"></a>

- *Type:* `string`

---

### FirehoseProcessingConfiguration <a name="aws-cdk-sdk.firehose.FirehoseProcessingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseProcessingConfiguration: firehose.FirehoseProcessingConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessingConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `processors`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessingConfiguration.property.processors"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessor`](#aws-cdk-sdk.firehose.FirehoseProcessor)[]

---

### FirehoseProcessor <a name="aws-cdk-sdk.firehose.FirehoseProcessor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseProcessor: firehose.FirehoseProcessor = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessor.property.type"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessor.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessorParameter`](#aws-cdk-sdk.firehose.FirehoseProcessorParameter)[]

---

### FirehoseProcessorParameter <a name="aws-cdk-sdk.firehose.FirehoseProcessorParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseProcessorParameter: firehose.FirehoseProcessorParameter = { ... }
```

##### `parameterName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessorParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseProcessorParameter.property.parameterValue"></a>

- *Type:* `string`

---

### FirehosePutRecordBatchInput <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehosePutRecordBatchInput: firehose.FirehosePutRecordBatchInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchInput.property.records"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRecord`](#aws-cdk-sdk.firehose.FirehoseRecord)[]

---

### FirehosePutRecordBatchOutput <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehosePutRecordBatchOutput: firehose.FirehosePutRecordBatchOutput = { ... }
```

##### `failedPutCount`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchOutput.property.failedPutCount"></a>

- *Type:* `number`

---

##### `requestResponses`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchOutput.property.requestResponses"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry`](#aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry)[]

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchOutput.property.encrypted"></a>

- *Type:* `boolean`

---

### FirehosePutRecordBatchResponseEntry <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehosePutRecordBatchResponseEntry: firehose.FirehosePutRecordBatchResponseEntry = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry.property.errorMessage"></a>

- *Type:* `string`

---

##### `recordId`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry.property.recordId"></a>

- *Type:* `string`

---

### FirehosePutRecordInput <a name="aws-cdk-sdk.firehose.FirehosePutRecordInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehosePutRecordInput: firehose.FirehosePutRecordInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `record`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordInput.property.record"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRecord`](#aws-cdk-sdk.firehose.FirehoseRecord)

---

### FirehosePutRecordOutput <a name="aws-cdk-sdk.firehose.FirehosePutRecordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehosePutRecordOutput: firehose.FirehosePutRecordOutput = { ... }
```

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordOutput.property.recordId"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehosePutRecordOutput.property.encrypted"></a>

- *Type:* `boolean`

---

### FirehoseRecord <a name="aws-cdk-sdk.firehose.FirehoseRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseRecord: firehose.FirehoseRecord = { ... }
```

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRecord.property.data"></a>

- *Type:* `any`

---

### FirehoseRedshiftDestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseRedshiftDestinationConfiguration: firehose.FirehoseRedshiftDestinationConfiguration = { ... }
```

##### `clusterJdbcurl`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.clusterJdbcurl"></a>

- *Type:* `string`

---

##### `copyCommand`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.copyCommand"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCopyCommand`](#aws-cdk-sdk.firehose.FirehoseCopyCommand)

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.password"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `s3Configuration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.s3Configuration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.username"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions`](#aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions)

---

##### `s3BackupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.s3BackupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationConfiguration.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseRedshiftDestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseRedshiftDestinationDescription: firehose.FirehoseRedshiftDestinationDescription = { ... }
```

##### `clusterJdbcurl`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.clusterJdbcurl"></a>

- *Type:* `string`

---

##### `copyCommand`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.copyCommand"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCopyCommand`](#aws-cdk-sdk.firehose.FirehoseCopyCommand)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `s3DestinationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.s3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.username"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions`](#aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions)

---

##### `s3BackupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.s3BackupDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationDescription.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseRedshiftDestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseRedshiftDestinationUpdate: firehose.FirehoseRedshiftDestinationUpdate = { ... }
```

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `clusterJdbcurl`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.clusterJdbcurl"></a>

- *Type:* `string`

---

##### `copyCommand`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.copyCommand"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCopyCommand`](#aws-cdk-sdk.firehose.FirehoseCopyCommand)

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.password"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions`](#aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.roleArn"></a>

- *Type:* `string`

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3BackupUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.s3BackupUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

##### `s3Update`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.s3Update"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate.property.username"></a>

- *Type:* `string`

---

### FirehoseRedshiftRetryOptions <a name="aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseRedshiftRetryOptions: firehose.FirehoseRedshiftRetryOptions = { ... }
```

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseRedshiftRetryOptions.property.durationInSeconds"></a>

- *Type:* `number`

---

### FirehoseS3DestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseS3DestinationConfiguration: firehose.FirehoseS3DestinationConfiguration = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.bucketArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `compressionFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.compressionFormat"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration.property.prefix"></a>

- *Type:* `string`

---

### FirehoseS3DestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseS3DestinationDescription: firehose.FirehoseS3DestinationDescription = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.bucketArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `compressionFormat`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.compressionFormat"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationDescription.property.prefix"></a>

- *Type:* `string`

---

### FirehoseS3DestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseS3DestinationUpdate: firehose.FirehoseS3DestinationUpdate = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.bucketArn"></a>

- *Type:* `string`

---

##### `bufferingHints`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.bufferingHints"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseBufferingHints`](#aws-cdk-sdk.firehose.FirehoseBufferingHints)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `compressionFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.compressionFormat"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseEncryptionConfiguration)

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.errorOutputPrefix"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.prefix"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate.property.roleArn"></a>

- *Type:* `string`

---

### FirehoseSchemaConfiguration <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSchemaConfiguration: firehose.FirehoseSchemaConfiguration = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.databaseName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.region"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.tableName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSchemaConfiguration.property.versionId"></a>

- *Type:* `string`

---

### FirehoseSerializer <a name="aws-cdk-sdk.firehose.FirehoseSerializer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSerializer: firehose.FirehoseSerializer = { ... }
```

##### `orcSerDe`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSerializer.property.orcSerDe"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseOrcSerDe`](#aws-cdk-sdk.firehose.FirehoseOrcSerDe)

---

##### `parquetSerDe`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSerializer.property.parquetSerDe"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseParquetSerDe`](#aws-cdk-sdk.firehose.FirehoseParquetSerDe)

---

### FirehoseSourceDescription <a name="aws-cdk-sdk.firehose.FirehoseSourceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSourceDescription: firehose.FirehoseSourceDescription = { ... }
```

##### `kinesisStreamSourceDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSourceDescription.property.kinesisStreamSourceDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription`](#aws-cdk-sdk.firehose.FirehoseKinesisStreamSourceDescription)

---

### FirehoseSplunkDestinationConfiguration <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSplunkDestinationConfiguration: firehose.FirehoseSplunkDestinationConfiguration = { ... }
```

##### `hecEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.hecEndpoint"></a>

- *Type:* `string`

---

##### `hecEndpointType`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.hecEndpointType"></a>

- *Type:* `string`

---

##### `hecToken`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.hecToken"></a>

- *Type:* `string`

---

##### `s3Configuration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.s3Configuration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration`](#aws-cdk-sdk.firehose.FirehoseS3DestinationConfiguration)

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `hecAcknowledgmentTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.hecAcknowledgmentTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions`](#aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationConfiguration.property.s3BackupMode"></a>

- *Type:* `string`

---

### FirehoseSplunkDestinationDescription <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSplunkDestinationDescription: firehose.FirehoseSplunkDestinationDescription = { ... }
```

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `hecAcknowledgmentTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.hecAcknowledgmentTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `hecEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.hecEndpoint"></a>

- *Type:* `string`

---

##### `hecEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.hecEndpointType"></a>

- *Type:* `string`

---

##### `hecToken`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.hecToken"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions`](#aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3DestinationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationDescription.property.s3DestinationDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationDescription`](#aws-cdk-sdk.firehose.FirehoseS3DestinationDescription)

---

### FirehoseSplunkDestinationUpdate <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSplunkDestinationUpdate: firehose.FirehoseSplunkDestinationUpdate = { ... }
```

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions`](#aws-cdk-sdk.firehose.FirehoseCloudWatchLoggingOptions)

---

##### `hecAcknowledgmentTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.hecAcknowledgmentTimeoutInSeconds"></a>

- *Type:* `number`

---

##### `hecEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.hecEndpoint"></a>

- *Type:* `string`

---

##### `hecEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.hecEndpointType"></a>

- *Type:* `string`

---

##### `hecToken`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.hecToken"></a>

- *Type:* `string`

---

##### `processingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.processingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseProcessingConfiguration`](#aws-cdk-sdk.firehose.FirehoseProcessingConfiguration)

---

##### `retryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.retryOptions"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions`](#aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions)

---

##### `s3BackupMode`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.s3BackupMode"></a>

- *Type:* `string`

---

##### `s3Update`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate.property.s3Update"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

### FirehoseSplunkRetryOptions <a name="aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseSplunkRetryOptions: firehose.FirehoseSplunkRetryOptions = { ... }
```

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseSplunkRetryOptions.property.durationInSeconds"></a>

- *Type:* `number`

---

### FirehoseStartDeliveryStreamEncryptionInput <a name="aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseStartDeliveryStreamEncryptionInput: firehose.FirehoseStartDeliveryStreamEncryptionInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `deliveryStreamEncryptionConfigurationInput`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionInput.property.deliveryStreamEncryptionConfigurationInput"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput`](#aws-cdk-sdk.firehose.FirehoseDeliveryStreamEncryptionConfigurationInput)

---

### FirehoseStartDeliveryStreamEncryptionOutput <a name="aws-cdk-sdk.firehose.FirehoseStartDeliveryStreamEncryptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseStartDeliveryStreamEncryptionOutput: firehose.FirehoseStartDeliveryStreamEncryptionOutput = { ... }
```

### FirehoseStopDeliveryStreamEncryptionInput <a name="aws-cdk-sdk.firehose.FirehoseStopDeliveryStreamEncryptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseStopDeliveryStreamEncryptionInput: firehose.FirehoseStopDeliveryStreamEncryptionInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseStopDeliveryStreamEncryptionInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

### FirehoseStopDeliveryStreamEncryptionOutput <a name="aws-cdk-sdk.firehose.FirehoseStopDeliveryStreamEncryptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseStopDeliveryStreamEncryptionOutput: firehose.FirehoseStopDeliveryStreamEncryptionOutput = { ... }
```

### FirehoseTag <a name="aws-cdk-sdk.firehose.FirehoseTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseTag: firehose.FirehoseTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseTag.property.value"></a>

- *Type:* `string`

---

### FirehoseTagDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseTagDeliveryStreamInput: firehose.FirehoseTagDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseTag`](#aws-cdk-sdk.firehose.FirehoseTag)[]

---

### FirehoseTagDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseTagDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseTagDeliveryStreamOutput: firehose.FirehoseTagDeliveryStreamOutput = { ... }
```

### FirehoseUntagDeliveryStreamInput <a name="aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseUntagDeliveryStreamInput: firehose.FirehoseUntagDeliveryStreamInput = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### FirehoseUntagDeliveryStreamOutput <a name="aws-cdk-sdk.firehose.FirehoseUntagDeliveryStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseUntagDeliveryStreamOutput: firehose.FirehoseUntagDeliveryStreamOutput = { ... }
```

### FirehoseUpdateDestinationInput <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseUpdateDestinationInput: firehose.FirehoseUpdateDestinationInput = { ... }
```

##### `currentDeliveryStreamVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.currentDeliveryStreamVersionId"></a>

- *Type:* `string`

---

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `destinationId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.destinationId"></a>

- *Type:* `string`

---

##### `elasticsearchDestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.elasticsearchDestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseElasticsearchDestinationUpdate)

---

##### `extendedS3DestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.extendedS3DestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseExtendedS3DestinationUpdate)

---

##### `httpEndpointDestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.httpEndpointDestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseHttpEndpointDestinationUpdate)

---

##### `redshiftDestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.redshiftDestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseRedshiftDestinationUpdate)

---

##### `s3DestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.s3DestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseS3DestinationUpdate)

---

##### `splunkDestinationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationInput.property.splunkDestinationUpdate"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate`](#aws-cdk-sdk.firehose.FirehoseSplunkDestinationUpdate)

---

### FirehoseUpdateDestinationOutput <a name="aws-cdk-sdk.firehose.FirehoseUpdateDestinationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseUpdateDestinationOutput: firehose.FirehoseUpdateDestinationOutput = { ... }
```

### FirehoseVpcConfiguration <a name="aws-cdk-sdk.firehose.FirehoseVpcConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseVpcConfiguration: firehose.FirehoseVpcConfiguration = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---

### FirehoseVpcConfigurationDescription <a name="aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

const firehoseVpcConfigurationDescription: firehose.FirehoseVpcConfigurationDescription = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseVpcConfigurationDescription.property.vpcId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### FirehoseResponsesCreateDeliveryStream <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesCreateDeliveryStream(__scope: Construct, __resources: string[], __input: FirehoseCreateDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseCreateDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `deliveryStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesCreateDeliveryStream.property.deliveryStreamArn"></a>

- *Type:* `string`

---


### FirehoseResponsesDescribeDeliveryStream <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStream(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `deliveryStreamDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStream.property.deliveryStreamDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription)

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.deliveryStreamArn"></a>

- *Type:* `string`

---

##### `deliveryStreamEncryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.deliveryStreamEncryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration)

---

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `deliveryStreamStatus`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.deliveryStreamStatus"></a>

- *Type:* `string`

---

##### `deliveryStreamType`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.deliveryStreamType"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDestinationDescription`](#aws-cdk-sdk.firehose.FirehoseDestinationDescription)[]

---

##### `failureDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.failureDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription)

---

##### `hasMoreDestinations`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.hasMoreDestinations"></a>

- *Type:* `boolean`

---

##### `lastUpdateTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.source"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource)

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescription.property.versionId"></a>

- *Type:* `string`

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `failureDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.property.failureDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription)

---

##### `keyArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.property.keyArn"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.property.keyType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfiguration.property.status"></a>

- *Type:* `string`

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.property.details"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionDeliveryStreamEncryptionConfigurationFailureDescription.property.type"></a>

- *Type:* `string`

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.property.details"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionFailureDescription.property.type"></a>

- *Type:* `string`

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `kinesisStreamSourceDescription`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSource.property.kinesisStreamSourceDescription"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription`](#aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription)

---


### FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription(__scope: Construct, __resources: string[], __input: FirehoseDescribeDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseDescribeDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `deliveryStartTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.property.deliveryStartTimestamp"></a>

- *Type:* `string`

---

##### `kinesisStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.property.kinesisStreamArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesDescribeDeliveryStreamDeliveryStreamDescriptionSourceKinesisStreamSourceDescription.property.roleArn"></a>

- *Type:* `string`

---


### FirehoseResponsesListDeliveryStreams <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesListDeliveryStreams(__scope: Construct, __resources: string[], __input: FirehoseListDeliveryStreamsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput`](#aws-cdk-sdk.firehose.FirehoseListDeliveryStreamsInput)

---



#### Properties <a name="Properties"></a>

##### `deliveryStreamNames`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.property.deliveryStreamNames"></a>

- *Type:* `string`[]

---

##### `hasMoreDeliveryStreams`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListDeliveryStreams.property.hasMoreDeliveryStreams"></a>

- *Type:* `boolean`

---


### FirehoseResponsesListTagsForDeliveryStream <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesListTagsForDeliveryStream(__scope: Construct, __resources: string[], __input: FirehoseListTagsForDeliveryStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput`](#aws-cdk-sdk.firehose.FirehoseListTagsForDeliveryStreamInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreTags`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.property.hasMoreTags"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesListTagsForDeliveryStream.property.tags"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehoseTag`](#aws-cdk-sdk.firehose.FirehoseTag)[]

---


### FirehoseResponsesPutRecord <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesPutRecord(__scope: Construct, __resources: string[], __input: FirehosePutRecordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordInput`](#aws-cdk-sdk.firehose.FirehosePutRecordInput)

---



#### Properties <a name="Properties"></a>

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.property.encrypted"></a>

- *Type:* `boolean`

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecord.property.recordId"></a>

- *Type:* `string`

---


### FirehoseResponsesPutRecordBatch <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch"></a>

#### Initializer <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.Initializer"></a>

```typescript
import { firehose } from 'aws-cdk-sdk'

new firehose.FirehoseResponsesPutRecordBatch(__scope: Construct, __resources: string[], __input: FirehosePutRecordBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordBatchInput`](#aws-cdk-sdk.firehose.FirehosePutRecordBatchInput)

---



#### Properties <a name="Properties"></a>

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.property.encrypted"></a>

- *Type:* `boolean`

---

##### `failedPutCount`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.property.failedPutCount"></a>

- *Type:* `number`

---

##### `requestResponses`<sup>Required</sup> <a name="aws-cdk-sdk.firehose.FirehoseResponsesPutRecordBatch.property.requestResponses"></a>

- *Type:* [`aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry`](#aws-cdk-sdk.firehose.FirehosePutRecordBatchResponseEntry)[]

---



