# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KinesisVideoClient <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createSignalingChannel` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.createSignalingChannel"></a>

```typescript
public createSignalingChannel(input: KinesisVideoCreateSignalingChannelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput)

---

##### `createStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.createStream"></a>

```typescript
public createStream(input: KinesisVideoCreateStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput)

---

##### `deleteSignalingChannel` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.deleteSignalingChannel"></a>

```typescript
public deleteSignalingChannel(input: KinesisVideoDeleteSignalingChannelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelInput)

---

##### `deleteStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.deleteStream"></a>

```typescript
public deleteStream(input: KinesisVideoDeleteStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamInput)

---

##### `describeSignalingChannel` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.describeSignalingChannel"></a>

```typescript
public describeSignalingChannel(input: KinesisVideoDescribeSignalingChannelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput)

---

##### `describeStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.describeStream"></a>

```typescript
public describeStream(input: KinesisVideoDescribeStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput)

---

##### `fetchDataEndpoint` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.fetchDataEndpoint"></a>

```typescript
public fetchDataEndpoint(input: KinesisVideoGetDataEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput)

---

##### `fetchSignalingChannelEndpoint` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.fetchSignalingChannelEndpoint"></a>

```typescript
public fetchSignalingChannelEndpoint(input: KinesisVideoGetSignalingChannelEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput)

---

##### `listSignalingChannels` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.listSignalingChannels"></a>

```typescript
public listSignalingChannels(input: KinesisVideoListSignalingChannelsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput)

---

##### `listStreams` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.listStreams"></a>

```typescript
public listStreams(input: KinesisVideoListStreamsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: KinesisVideoListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput)

---

##### `listTagsForStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.listTagsForStream"></a>

```typescript
public listTagsForStream(input: KinesisVideoListTagsForStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput)

---

##### `tagResource` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.tagResource"></a>

```typescript
public tagResource(input: KinesisVideoTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceInput)

---

##### `tagStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.tagStream"></a>

```typescript
public tagStream(input: KinesisVideoTagStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput)

---

##### `untagResource` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.untagResource"></a>

```typescript
public untagResource(input: KinesisVideoUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceInput)

---

##### `untagStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.untagStream"></a>

```typescript
public untagStream(input: KinesisVideoUntagStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput)

---

##### `updateDataRetention` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.updateDataRetention"></a>

```typescript
public updateDataRetention(input: KinesisVideoUpdateDataRetentionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput)

---

##### `updateSignalingChannel` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.updateSignalingChannel"></a>

```typescript
public updateSignalingChannel(input: KinesisVideoUpdateSignalingChannelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput)

---

##### `updateStream` <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.updateStream"></a>

```typescript
public updateStream(input: KinesisVideoUpdateStreamInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput)

---




## Structs <a name="Structs"></a>

### KinesisVideoChannelInfo <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoChannelInfo: kinesisvideo.KinesisVideoChannelInfo = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.channelName"></a>

- *Type:* `string`

---

##### `channelStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.channelStatus"></a>

- *Type:* `string`

---

##### `channelType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.channelType"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `singleMasterConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.singleMasterConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration`](#aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo.property.version"></a>

- *Type:* `string`

---

### KinesisVideoChannelNameCondition <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelNameCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoChannelNameCondition: kinesisvideo.KinesisVideoChannelNameCondition = { ... }
```

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelNameCondition.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `comparisonValue`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoChannelNameCondition.property.comparisonValue"></a>

- *Type:* `string`

---

### KinesisVideoCreateSignalingChannelInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoCreateSignalingChannelInput: kinesisvideo.KinesisVideoCreateSignalingChannelInput = { ... }
```

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput.property.channelName"></a>

- *Type:* `string`

---

##### `channelType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput.property.channelType"></a>

- *Type:* `string`

---

##### `singleMasterConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput.property.singleMasterConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration`](#aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoTag`](#aws-cdk-sdk.kinesisvideo.KinesisVideoTag)[]

---

### KinesisVideoCreateSignalingChannelOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoCreateSignalingChannelOutput: kinesisvideo.KinesisVideoCreateSignalingChannelOutput = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelOutput.property.channelArn"></a>

- *Type:* `string`

---

### KinesisVideoCreateStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoCreateStreamInput: kinesisvideo.KinesisVideoCreateStreamInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.streamName"></a>

- *Type:* `string`

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.deviceName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `mediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.mediaType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KinesisVideoCreateStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoCreateStreamOutput: kinesisvideo.KinesisVideoCreateStreamOutput = { ... }
```

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamOutput.property.streamArn"></a>

- *Type:* `string`

---

### KinesisVideoDeleteSignalingChannelInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDeleteSignalingChannelInput: kinesisvideo.KinesisVideoDeleteSignalingChannelInput = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelInput.property.channelArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelInput.property.currentVersion"></a>

- *Type:* `string`

---

### KinesisVideoDeleteSignalingChannelOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteSignalingChannelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDeleteSignalingChannelOutput: kinesisvideo.KinesisVideoDeleteSignalingChannelOutput = { ... }
```

### KinesisVideoDeleteStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDeleteStreamInput: kinesisvideo.KinesisVideoDeleteStreamInput = { ... }
```

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamInput.property.currentVersion"></a>

- *Type:* `string`

---

### KinesisVideoDeleteStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDeleteStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDeleteStreamOutput: kinesisvideo.KinesisVideoDeleteStreamOutput = { ... }
```

### KinesisVideoDescribeSignalingChannelInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDescribeSignalingChannelInput: kinesisvideo.KinesisVideoDescribeSignalingChannelInput = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput.property.channelName"></a>

- *Type:* `string`

---

### KinesisVideoDescribeSignalingChannelOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDescribeSignalingChannelOutput: kinesisvideo.KinesisVideoDescribeSignalingChannelOutput = { ... }
```

##### `channelInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelOutput.property.channelInfo"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo)

---

### KinesisVideoDescribeStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDescribeStreamInput: kinesisvideo.KinesisVideoDescribeStreamInput = { ... }
```

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoDescribeStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoDescribeStreamOutput: kinesisvideo.KinesisVideoDescribeStreamOutput = { ... }
```

##### `streamInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamOutput.property.streamInfo"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo)

---

### KinesisVideoGetDataEndpointInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoGetDataEndpointInput: kinesisvideo.KinesisVideoGetDataEndpointInput = { ... }
```

##### `apiName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput.property.apiName"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoGetDataEndpointOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoGetDataEndpointOutput: kinesisvideo.KinesisVideoGetDataEndpointOutput = { ... }
```

##### `dataEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointOutput.property.dataEndpoint"></a>

- *Type:* `string`

---

### KinesisVideoGetSignalingChannelEndpointInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoGetSignalingChannelEndpointInput: kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput.property.channelArn"></a>

- *Type:* `string`

---

##### `singleMasterChannelEndpointConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput.property.singleMasterChannelEndpointConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration`](#aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration)

---

### KinesisVideoGetSignalingChannelEndpointOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoGetSignalingChannelEndpointOutput: kinesisvideo.KinesisVideoGetSignalingChannelEndpointOutput = { ... }
```

##### `resourceEndpointList`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointOutput.property.resourceEndpointList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem`](#aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem)[]

---

### KinesisVideoListSignalingChannelsInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListSignalingChannelsInput: kinesisvideo.KinesisVideoListSignalingChannelsInput = { ... }
```

##### `channelNameCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput.property.channelNameCondition"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoChannelNameCondition`](#aws-cdk-sdk.kinesisvideo.KinesisVideoChannelNameCondition)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisVideoListSignalingChannelsOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListSignalingChannelsOutput: kinesisvideo.KinesisVideoListSignalingChannelsOutput = { ... }
```

##### `channelInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsOutput.property.channelInfoList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsOutput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisVideoListStreamsInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListStreamsInput: kinesisvideo.KinesisVideoListStreamsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `streamNameCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput.property.streamNameCondition"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoStreamNameCondition`](#aws-cdk-sdk.kinesisvideo.KinesisVideoStreamNameCondition)

---

### KinesisVideoListStreamsOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListStreamsOutput: kinesisvideo.KinesisVideoListStreamsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `streamInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsOutput.property.streamInfoList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo)[]

---

### KinesisVideoListTagsForResourceInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListTagsForResourceInput: kinesisvideo.KinesisVideoListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisVideoListTagsForResourceOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListTagsForResourceOutput: kinesisvideo.KinesisVideoListTagsForResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KinesisVideoListTagsForStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListTagsForStreamInput: kinesisvideo.KinesisVideoListTagsForStreamInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput.property.nextToken"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoListTagsForStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoListTagsForStreamOutput: kinesisvideo.KinesisVideoListTagsForStreamOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KinesisVideoResourceEndpointListItem <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoResourceEndpointListItem: kinesisvideo.KinesisVideoResourceEndpointListItem = { ... }
```

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem.property.protocol"></a>

- *Type:* `string`

---

##### `resourceEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem.property.resourceEndpoint"></a>

- *Type:* `string`

---

### KinesisVideoSingleMasterChannelEndpointConfiguration <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoSingleMasterChannelEndpointConfiguration: kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration = { ... }
```

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration.property.protocols"></a>

- *Type:* `string`[]

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterChannelEndpointConfiguration.property.role"></a>

- *Type:* `string`

---

### KinesisVideoSingleMasterConfiguration <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoSingleMasterConfiguration: kinesisvideo.KinesisVideoSingleMasterConfiguration = { ... }
```

##### `messageTtlSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration.property.messageTtlSeconds"></a>

- *Type:* `number`

---

### KinesisVideoStreamInfo <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoStreamInfo: kinesisvideo.KinesisVideoStreamInfo = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.deviceName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `mediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.mediaType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.status"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.streamName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo.property.version"></a>

- *Type:* `string`

---

### KinesisVideoStreamNameCondition <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamNameCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoStreamNameCondition: kinesisvideo.KinesisVideoStreamNameCondition = { ... }
```

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamNameCondition.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `comparisonValue`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoStreamNameCondition.property.comparisonValue"></a>

- *Type:* `string`

---

### KinesisVideoTag <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoTag: kinesisvideo.KinesisVideoTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTag.property.value"></a>

- *Type:* `string`

---

### KinesisVideoTagResourceInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoTagResourceInput: kinesisvideo.KinesisVideoTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoTag`](#aws-cdk-sdk.kinesisvideo.KinesisVideoTag)[]

---

### KinesisVideoTagResourceOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoTagResourceOutput: kinesisvideo.KinesisVideoTagResourceOutput = { ... }
```

### KinesisVideoTagStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoTagStreamInput: kinesisvideo.KinesisVideoTagStreamInput = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoTagStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoTagStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoTagStreamOutput: kinesisvideo.KinesisVideoTagStreamOutput = { ... }
```

### KinesisVideoUntagResourceInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUntagResourceInput: kinesisvideo.KinesisVideoUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceInput.property.tagKeyList"></a>

- *Type:* `string`[]

---

### KinesisVideoUntagResourceOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUntagResourceOutput: kinesisvideo.KinesisVideoUntagResourceOutput = { ... }
```

### KinesisVideoUntagStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUntagStreamInput: kinesisvideo.KinesisVideoUntagStreamInput = { ... }
```

##### `tagKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput.property.tagKeyList"></a>

- *Type:* `string`[]

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoUntagStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUntagStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUntagStreamOutput: kinesisvideo.KinesisVideoUntagStreamOutput = { ... }
```

### KinesisVideoUpdateDataRetentionInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateDataRetentionInput: kinesisvideo.KinesisVideoUpdateDataRetentionInput = { ... }
```

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput.property.currentVersion"></a>

- *Type:* `string`

---

##### `dataRetentionChangeInHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput.property.dataRetentionChangeInHours"></a>

- *Type:* `number`

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput.property.operation"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoUpdateDataRetentionOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateDataRetentionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateDataRetentionOutput: kinesisvideo.KinesisVideoUpdateDataRetentionOutput = { ... }
```

### KinesisVideoUpdateSignalingChannelInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateSignalingChannelInput: kinesisvideo.KinesisVideoUpdateSignalingChannelInput = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput.property.channelArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput.property.currentVersion"></a>

- *Type:* `string`

---

##### `singleMasterConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelInput.property.singleMasterConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration`](#aws-cdk-sdk.kinesisvideo.KinesisVideoSingleMasterConfiguration)

---

### KinesisVideoUpdateSignalingChannelOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateSignalingChannelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateSignalingChannelOutput: kinesisvideo.KinesisVideoUpdateSignalingChannelOutput = { ... }
```

### KinesisVideoUpdateStreamInput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateStreamInput: kinesisvideo.KinesisVideoUpdateStreamInput = { ... }
```

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput.property.currentVersion"></a>

- *Type:* `string`

---

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput.property.deviceName"></a>

- *Type:* `string`

---

##### `mediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput.property.mediaType"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoUpdateStreamOutput <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoUpdateStreamOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

const kinesisVideoUpdateStreamOutput: kinesisvideo.KinesisVideoUpdateStreamOutput = { ... }
```

## Classes <a name="Classes"></a>

### KinesisVideoResponsesCreateSignalingChannel <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesCreateSignalingChannel(__scope: Construct, __resources: string[], __input: KinesisVideoCreateSignalingChannelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoCreateSignalingChannelInput)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateSignalingChannel.property.channelArn"></a>

- *Type:* `string`

---


### KinesisVideoResponsesCreateStream <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesCreateStream(__scope: Construct, __resources: string[], __input: KinesisVideoCreateStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoCreateStreamInput)

---



#### Properties <a name="Properties"></a>

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesCreateStream.property.streamArn"></a>

- *Type:* `string`

---


### KinesisVideoResponsesDescribeSignalingChannel <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel(__scope: Construct, __resources: string[], __input: KinesisVideoDescribeSignalingChannelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput)

---



#### Properties <a name="Properties"></a>

##### `channelInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannel.property.channelInfo"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo)

---


### KinesisVideoResponsesDescribeSignalingChannelChannelInfo <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo(__scope: Construct, __resources: string[], __input: KinesisVideoDescribeSignalingChannelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.channelArn"></a>

- *Type:* `string`

---

##### `channelName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.channelName"></a>

- *Type:* `string`

---

##### `channelStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.channelStatus"></a>

- *Type:* `string`

---

##### `channelType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.channelType"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `singleMasterConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.singleMasterConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration`](#aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfo.property.version"></a>

- *Type:* `string`

---


### KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration(__scope: Construct, __resources: string[], __input: KinesisVideoDescribeSignalingChannelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeSignalingChannelInput)

---



#### Properties <a name="Properties"></a>

##### `messageTtlSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeSignalingChannelChannelInfoSingleMasterConfiguration.property.messageTtlSeconds"></a>

- *Type:* `number`

---


### KinesisVideoResponsesDescribeStream <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesDescribeStream(__scope: Construct, __resources: string[], __input: KinesisVideoDescribeStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput)

---



#### Properties <a name="Properties"></a>

##### `streamInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStream.property.streamInfo"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo)

---


### KinesisVideoResponsesDescribeStreamStreamInfo <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo(__scope: Construct, __resources: string[], __input: KinesisVideoDescribeStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoDescribeStreamInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `dataRetentionInHours`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.dataRetentionInHours"></a>

- *Type:* `number`

---

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.deviceName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `mediaType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.mediaType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.status"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.streamName"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesDescribeStreamStreamInfo.property.version"></a>

- *Type:* `string`

---


### KinesisVideoResponsesFetchDataEndpoint <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesFetchDataEndpoint(__scope: Construct, __resources: string[], __input: KinesisVideoGetDataEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoGetDataEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `dataEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchDataEndpoint.property.dataEndpoint"></a>

- *Type:* `string`

---


### KinesisVideoResponsesFetchSignalingChannelEndpoint <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint(__scope: Construct, __resources: string[], __input: KinesisVideoGetSignalingChannelEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoGetSignalingChannelEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `resourceEndpointList`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesFetchSignalingChannelEndpoint.property.resourceEndpointList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem`](#aws-cdk-sdk.kinesisvideo.KinesisVideoResourceEndpointListItem)[]

---


### KinesisVideoResponsesListSignalingChannels <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesListSignalingChannels(__scope: Construct, __resources: string[], __input: KinesisVideoListSignalingChannelsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListSignalingChannelsInput)

---



#### Properties <a name="Properties"></a>

##### `channelInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.property.channelInfoList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoChannelInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListSignalingChannels.property.nextToken"></a>

- *Type:* `string`

---


### KinesisVideoResponsesListStreams <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesListStreams(__scope: Construct, __resources: string[], __input: KinesisVideoListStreamsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListStreamsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.property.nextToken"></a>

- *Type:* `string`

---

##### `streamInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListStreams.property.streamInfoList"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo`](#aws-cdk-sdk.kinesisvideo.KinesisVideoStreamInfo)[]

---


### KinesisVideoResponsesListTagsForResource <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: KinesisVideoListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### KinesisVideoResponsesListTagsForStream <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.Initializer"></a>

```typescript
import { kinesisvideo } from 'aws-cdk-sdk'

new kinesisvideo.KinesisVideoResponsesListTagsForStream(__scope: Construct, __resources: string[], __input: KinesisVideoListTagsForStreamInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput`](#aws-cdk-sdk.kinesisvideo.KinesisVideoListTagsForStreamInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideo.KinesisVideoResponsesListTagsForStream.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



