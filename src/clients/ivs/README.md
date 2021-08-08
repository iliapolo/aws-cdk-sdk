# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IvsClient <a name="aws-cdk-sdk.ivs.IvsClient"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IvsClient.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IvsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchGetChannel` <a name="aws-cdk-sdk.ivs.IvsClient.batchGetChannel"></a>

```typescript
public batchGetChannel(input: IvsBatchGetChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchGetChannelRequest`](#aws-cdk-sdk.ivs.IvsBatchGetChannelRequest)

---

##### `batchGetStreamKey` <a name="aws-cdk-sdk.ivs.IvsClient.batchGetStreamKey"></a>

```typescript
public batchGetStreamKey(input: IvsBatchGetStreamKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest)

---

##### `createChannel` <a name="aws-cdk-sdk.ivs.IvsClient.createChannel"></a>

```typescript
public createChannel(input: IvsCreateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateChannelRequest`](#aws-cdk-sdk.ivs.IvsCreateChannelRequest)

---

##### `createStreamKey` <a name="aws-cdk-sdk.ivs.IvsClient.createStreamKey"></a>

```typescript
public createStreamKey(input: IvsCreateStreamKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest)

---

##### `deleteChannel` <a name="aws-cdk-sdk.ivs.IvsClient.deleteChannel"></a>

```typescript
public deleteChannel(input: IvsDeleteChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsDeleteChannelRequest`](#aws-cdk-sdk.ivs.IvsDeleteChannelRequest)

---

##### `deletePlaybackKeyPair` <a name="aws-cdk-sdk.ivs.IvsClient.deletePlaybackKeyPair"></a>

```typescript
public deletePlaybackKeyPair(input: IvsDeletePlaybackKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsDeletePlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsDeletePlaybackKeyPairRequest)

---

##### `deleteStreamKey` <a name="aws-cdk-sdk.ivs.IvsClient.deleteStreamKey"></a>

```typescript
public deleteStreamKey(input: IvsDeleteStreamKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsDeleteStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsDeleteStreamKeyRequest)

---

##### `fetchChannel` <a name="aws-cdk-sdk.ivs.IvsClient.fetchChannel"></a>

```typescript
public fetchChannel(input: IvsGetChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetChannelRequest`](#aws-cdk-sdk.ivs.IvsGetChannelRequest)

---

##### `fetchPlaybackKeyPair` <a name="aws-cdk-sdk.ivs.IvsClient.fetchPlaybackKeyPair"></a>

```typescript
public fetchPlaybackKeyPair(input: IvsGetPlaybackKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest)

---

##### `fetchStream` <a name="aws-cdk-sdk.ivs.IvsClient.fetchStream"></a>

```typescript
public fetchStream(input: IvsGetStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamRequest`](#aws-cdk-sdk.ivs.IvsGetStreamRequest)

---

##### `fetchStreamKey` <a name="aws-cdk-sdk.ivs.IvsClient.fetchStreamKey"></a>

```typescript
public fetchStreamKey(input: IvsGetStreamKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsGetStreamKeyRequest)

---

##### `importPlaybackKeyPair` <a name="aws-cdk-sdk.ivs.IvsClient.importPlaybackKeyPair"></a>

```typescript
public importPlaybackKeyPair(input: IvsImportPlaybackKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest)

---

##### `listChannels` <a name="aws-cdk-sdk.ivs.IvsClient.listChannels"></a>

```typescript
public listChannels(input: IvsListChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListChannelsRequest`](#aws-cdk-sdk.ivs.IvsListChannelsRequest)

---

##### `listPlaybackKeyPairs` <a name="aws-cdk-sdk.ivs.IvsClient.listPlaybackKeyPairs"></a>

```typescript
public listPlaybackKeyPairs(input: IvsListPlaybackKeyPairsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest`](#aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest)

---

##### `listStreamKeys` <a name="aws-cdk-sdk.ivs.IvsClient.listStreamKeys"></a>

```typescript
public listStreamKeys(input: IvsListStreamKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListStreamKeysRequest`](#aws-cdk-sdk.ivs.IvsListStreamKeysRequest)

---

##### `listStreams` <a name="aws-cdk-sdk.ivs.IvsClient.listStreams"></a>

```typescript
public listStreams(input: IvsListStreamsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListStreamsRequest`](#aws-cdk-sdk.ivs.IvsListStreamsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.ivs.IvsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IvsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListTagsForResourceRequest`](#aws-cdk-sdk.ivs.IvsListTagsForResourceRequest)

---

##### `putMetadata` <a name="aws-cdk-sdk.ivs.IvsClient.putMetadata"></a>

```typescript
public putMetadata(input: IvsPutMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsPutMetadataRequest`](#aws-cdk-sdk.ivs.IvsPutMetadataRequest)

---

##### `stopStream` <a name="aws-cdk-sdk.ivs.IvsClient.stopStream"></a>

```typescript
public stopStream(input: IvsStopStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStopStreamRequest`](#aws-cdk-sdk.ivs.IvsStopStreamRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.ivs.IvsClient.tagResource"></a>

```typescript
public tagResource(input: IvsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsTagResourceRequest`](#aws-cdk-sdk.ivs.IvsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.ivs.IvsClient.untagResource"></a>

```typescript
public untagResource(input: IvsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsUntagResourceRequest`](#aws-cdk-sdk.ivs.IvsUntagResourceRequest)

---

##### `updateChannel` <a name="aws-cdk-sdk.ivs.IvsClient.updateChannel"></a>

```typescript
public updateChannel(input: IvsUpdateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsUpdateChannelRequest`](#aws-cdk-sdk.ivs.IvsUpdateChannelRequest)

---




## Structs <a name="Structs"></a>

### IvsBatchError <a name="aws-cdk-sdk.ivs.IvsBatchError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsBatchError: ivs.IvsBatchError = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchError.property.arn"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchError.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchError.property.message"></a>

- *Type:* `string`

---

### IvsBatchGetChannelRequest <a name="aws-cdk-sdk.ivs.IvsBatchGetChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsBatchGetChannelRequest: ivs.IvsBatchGetChannelRequest = { ... }
```

##### `arns`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetChannelRequest.property.arns"></a>

- *Type:* `string`[]

---

### IvsBatchGetChannelResponse <a name="aws-cdk-sdk.ivs.IvsBatchGetChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsBatchGetChannelResponse: ivs.IvsBatchGetChannelResponse = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetChannelResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannel`](#aws-cdk-sdk.ivs.IvsChannel)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetChannelResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchError`](#aws-cdk-sdk.ivs.IvsBatchError)[]

---

### IvsBatchGetStreamKeyRequest <a name="aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsBatchGetStreamKeyRequest: ivs.IvsBatchGetStreamKeyRequest = { ... }
```

##### `arns`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest.property.arns"></a>

- *Type:* `string`[]

---

### IvsBatchGetStreamKeyResponse <a name="aws-cdk-sdk.ivs.IvsBatchGetStreamKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsBatchGetStreamKeyResponse: ivs.IvsBatchGetStreamKeyResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetStreamKeyResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchError`](#aws-cdk-sdk.ivs.IvsBatchError)[]

---

##### `streamKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsBatchGetStreamKeyResponse.property.streamKeys"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKey`](#aws-cdk-sdk.ivs.IvsStreamKey)[]

---

### IvsChannel <a name="aws-cdk-sdk.ivs.IvsChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsChannel: ivs.IvsChannel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.authorized"></a>

- *Type:* `boolean`

---

##### `ingestEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.ingestEndpoint"></a>

- *Type:* `string`

---

##### `latencyMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.name"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.playbackUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannel.property.type"></a>

- *Type:* `string`

---

### IvsChannelSummary <a name="aws-cdk-sdk.ivs.IvsChannelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsChannelSummary: ivs.IvsChannelSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannelSummary.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannelSummary.property.authorized"></a>

- *Type:* `boolean`

---

##### `latencyMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannelSummary.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannelSummary.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsChannelSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsCreateChannelRequest <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsCreateChannelRequest: ivs.IvsCreateChannelRequest = { ... }
```

##### `authorized`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest.property.authorized"></a>

- *Type:* `boolean`

---

##### `latencyMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelRequest.property.type"></a>

- *Type:* `string`

---

### IvsCreateChannelResponse <a name="aws-cdk-sdk.ivs.IvsCreateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsCreateChannelResponse: ivs.IvsCreateChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannel`](#aws-cdk-sdk.ivs.IvsChannel)

---

##### `streamKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateChannelResponse.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKey`](#aws-cdk-sdk.ivs.IvsStreamKey)

---

### IvsCreateStreamKeyRequest <a name="aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsCreateStreamKeyRequest: ivs.IvsCreateStreamKeyRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsCreateStreamKeyResponse <a name="aws-cdk-sdk.ivs.IvsCreateStreamKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsCreateStreamKeyResponse: ivs.IvsCreateStreamKeyResponse = { ... }
```

##### `streamKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsCreateStreamKeyResponse.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKey`](#aws-cdk-sdk.ivs.IvsStreamKey)

---

### IvsDeleteChannelRequest <a name="aws-cdk-sdk.ivs.IvsDeleteChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsDeleteChannelRequest: ivs.IvsDeleteChannelRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsDeleteChannelRequest.property.arn"></a>

- *Type:* `string`

---

### IvsDeletePlaybackKeyPairRequest <a name="aws-cdk-sdk.ivs.IvsDeletePlaybackKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsDeletePlaybackKeyPairRequest: ivs.IvsDeletePlaybackKeyPairRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsDeletePlaybackKeyPairRequest.property.arn"></a>

- *Type:* `string`

---

### IvsDeletePlaybackKeyPairResponse <a name="aws-cdk-sdk.ivs.IvsDeletePlaybackKeyPairResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsDeletePlaybackKeyPairResponse: ivs.IvsDeletePlaybackKeyPairResponse = { ... }
```

### IvsDeleteStreamKeyRequest <a name="aws-cdk-sdk.ivs.IvsDeleteStreamKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsDeleteStreamKeyRequest: ivs.IvsDeleteStreamKeyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsDeleteStreamKeyRequest.property.arn"></a>

- *Type:* `string`

---

### IvsGetChannelRequest <a name="aws-cdk-sdk.ivs.IvsGetChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetChannelRequest: ivs.IvsGetChannelRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsGetChannelRequest.property.arn"></a>

- *Type:* `string`

---

### IvsGetChannelResponse <a name="aws-cdk-sdk.ivs.IvsGetChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetChannelResponse: ivs.IvsGetChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsGetChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannel`](#aws-cdk-sdk.ivs.IvsChannel)

---

### IvsGetPlaybackKeyPairRequest <a name="aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetPlaybackKeyPairRequest: ivs.IvsGetPlaybackKeyPairRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest.property.arn"></a>

- *Type:* `string`

---

### IvsGetPlaybackKeyPairResponse <a name="aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetPlaybackKeyPairResponse: ivs.IvsGetPlaybackKeyPairResponse = { ... }
```

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairResponse.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsPlaybackKeyPair`](#aws-cdk-sdk.ivs.IvsPlaybackKeyPair)

---

### IvsGetStreamKeyRequest <a name="aws-cdk-sdk.ivs.IvsGetStreamKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetStreamKeyRequest: ivs.IvsGetStreamKeyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsGetStreamKeyRequest.property.arn"></a>

- *Type:* `string`

---

### IvsGetStreamKeyResponse <a name="aws-cdk-sdk.ivs.IvsGetStreamKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetStreamKeyResponse: ivs.IvsGetStreamKeyResponse = { ... }
```

##### `streamKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsGetStreamKeyResponse.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKey`](#aws-cdk-sdk.ivs.IvsStreamKey)

---

### IvsGetStreamRequest <a name="aws-cdk-sdk.ivs.IvsGetStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetStreamRequest: ivs.IvsGetStreamRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsGetStreamRequest.property.channelArn"></a>

- *Type:* `string`

---

### IvsGetStreamResponse <a name="aws-cdk-sdk.ivs.IvsGetStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsGetStreamResponse: ivs.IvsGetStreamResponse = { ... }
```

##### `stream`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsGetStreamResponse.property.stream"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStream`](#aws-cdk-sdk.ivs.IvsStream)

---

### IvsImportPlaybackKeyPairRequest <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsImportPlaybackKeyPairRequest: ivs.IvsImportPlaybackKeyPairRequest = { ... }
```

##### `publicKeyMaterial`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest.property.publicKeyMaterial"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsImportPlaybackKeyPairResponse <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsImportPlaybackKeyPairResponse: ivs.IvsImportPlaybackKeyPairResponse = { ... }
```

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairResponse.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsPlaybackKeyPair`](#aws-cdk-sdk.ivs.IvsPlaybackKeyPair)

---

### IvsListChannelsRequest <a name="aws-cdk-sdk.ivs.IvsListChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListChannelsRequest: ivs.IvsListChannelsRequest = { ... }
```

##### `filterByName`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListChannelsRequest.property.filterByName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListChannelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListChannelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IvsListChannelsResponse <a name="aws-cdk-sdk.ivs.IvsListChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListChannelsResponse: ivs.IvsListChannelsResponse = { ... }
```

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListChannelsResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannelSummary`](#aws-cdk-sdk.ivs.IvsChannelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListChannelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IvsListPlaybackKeyPairsRequest <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListPlaybackKeyPairsRequest: ivs.IvsListPlaybackKeyPairsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IvsListPlaybackKeyPairsResponse <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListPlaybackKeyPairsResponse: ivs.IvsListPlaybackKeyPairsResponse = { ... }
```

##### `keyPairs`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsResponse.property.keyPairs"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary`](#aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IvsListStreamKeysRequest <a name="aws-cdk-sdk.ivs.IvsListStreamKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListStreamKeysRequest: ivs.IvsListStreamKeysRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamKeysRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamKeysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamKeysRequest.property.nextToken"></a>

- *Type:* `string`

---

### IvsListStreamKeysResponse <a name="aws-cdk-sdk.ivs.IvsListStreamKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListStreamKeysResponse: ivs.IvsListStreamKeysResponse = { ... }
```

##### `streamKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamKeysResponse.property.streamKeys"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKeySummary`](#aws-cdk-sdk.ivs.IvsStreamKeySummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamKeysResponse.property.nextToken"></a>

- *Type:* `string`

---

### IvsListStreamsRequest <a name="aws-cdk-sdk.ivs.IvsListStreamsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListStreamsRequest: ivs.IvsListStreamsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IvsListStreamsResponse <a name="aws-cdk-sdk.ivs.IvsListStreamsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListStreamsResponse: ivs.IvsListStreamsResponse = { ... }
```

##### `streams`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamsResponse.property.streams"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamSummary`](#aws-cdk-sdk.ivs.IvsStreamSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListStreamsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IvsListTagsForResourceRequest <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListTagsForResourceRequest: ivs.IvsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### IvsListTagsForResourceResponse <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsListTagsForResourceResponse: ivs.IvsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

### IvsPlaybackKeyPair <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsPlaybackKeyPair: ivs.IvsPlaybackKeyPair = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPair.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPair.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsPlaybackKeyPairSummary <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsPlaybackKeyPairSummary: ivs.IvsPlaybackKeyPairSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsPutMetadataRequest <a name="aws-cdk-sdk.ivs.IvsPutMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsPutMetadataRequest: ivs.IvsPutMetadataRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsPutMetadataRequest.property.channelArn"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsPutMetadataRequest.property.metadata"></a>

- *Type:* `string`

---

### IvsStopStreamRequest <a name="aws-cdk-sdk.ivs.IvsStopStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStopStreamRequest: ivs.IvsStopStreamRequest = { ... }
```

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsStopStreamRequest.property.channelArn"></a>

- *Type:* `string`

---

### IvsStopStreamResponse <a name="aws-cdk-sdk.ivs.IvsStopStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStopStreamResponse: ivs.IvsStopStreamResponse = { ... }
```

### IvsStream <a name="aws-cdk-sdk.ivs.IvsStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStream: ivs.IvsStream = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.channelArn"></a>

- *Type:* `string`

---

##### `health`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.health"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.playbackUrl"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.state"></a>

- *Type:* `string`

---

##### `viewerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStream.property.viewerCount"></a>

- *Type:* `number`

---

### IvsStreamKey <a name="aws-cdk-sdk.ivs.IvsStreamKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStreamKey: ivs.IvsStreamKey = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKey.property.arn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKey.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKey.property.value"></a>

- *Type:* `string`

---

### IvsStreamKeySummary <a name="aws-cdk-sdk.ivs.IvsStreamKeySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStreamKeySummary: ivs.IvsStreamKeySummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKeySummary.property.arn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKeySummary.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamKeySummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsStreamSummary <a name="aws-cdk-sdk.ivs.IvsStreamSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsStreamSummary: ivs.IvsStreamSummary = { ... }
```

##### `channelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamSummary.property.channelArn"></a>

- *Type:* `string`

---

##### `health`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamSummary.property.health"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamSummary.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamSummary.property.state"></a>

- *Type:* `string`

---

##### `viewerCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsStreamSummary.property.viewerCount"></a>

- *Type:* `number`

---

### IvsTagResourceRequest <a name="aws-cdk-sdk.ivs.IvsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsTagResourceRequest: ivs.IvsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### IvsTagResourceResponse <a name="aws-cdk-sdk.ivs.IvsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsTagResourceResponse: ivs.IvsTagResourceResponse = { ... }
```

### IvsUntagResourceRequest <a name="aws-cdk-sdk.ivs.IvsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsUntagResourceRequest: ivs.IvsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IvsUntagResourceResponse <a name="aws-cdk-sdk.ivs.IvsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsUntagResourceResponse: ivs.IvsUntagResourceResponse = { ... }
```

### IvsUpdateChannelRequest <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsUpdateChannelRequest: ivs.IvsUpdateChannelRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest.property.authorized"></a>

- *Type:* `boolean`

---

##### `latencyMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelRequest.property.type"></a>

- *Type:* `string`

---

### IvsUpdateChannelResponse <a name="aws-cdk-sdk.ivs.IvsUpdateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

const ivsUpdateChannelResponse: ivs.IvsUpdateChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.ivs.IvsUpdateChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannel`](#aws-cdk-sdk.ivs.IvsChannel)

---

## Classes <a name="Classes"></a>

### IVSResponsesBatchGetChannel <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesBatchGetChannel(__scope: Construct, __resources: string[], __input: IvsBatchGetChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchGetChannelRequest`](#aws-cdk-sdk.ivs.IvsBatchGetChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.property.channels"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannel`](#aws-cdk-sdk.ivs.IvsChannel)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetChannel.property.errors"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchError`](#aws-cdk-sdk.ivs.IvsBatchError)[]

---


### IVSResponsesBatchGetStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesBatchGetStreamKey(__scope: Construct, __resources: string[], __input: IvsBatchGetStreamKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsBatchGetStreamKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.property.errors"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsBatchError`](#aws-cdk-sdk.ivs.IvsBatchError)[]

---

##### `streamKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesBatchGetStreamKey.property.streamKeys"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKey`](#aws-cdk-sdk.ivs.IvsStreamKey)[]

---


### IVSResponsesCreateChannel <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesCreateChannel(__scope: Construct, __resources: string[], __input: IvsCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateChannelRequest`](#aws-cdk-sdk.ivs.IvsCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel`](#aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel)

---

##### `streamKey`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannel.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey`](#aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey)

---


### IVSResponsesCreateChannelChannel <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesCreateChannelChannel(__scope: Construct, __resources: string[], __input: IvsCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateChannelRequest`](#aws-cdk-sdk.ivs.IvsCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.authorized"></a>

- *Type:* `boolean`

---

##### `ingestEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.ingestEndpoint"></a>

- *Type:* `string`

---

##### `latencyMode`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.playbackUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelChannel.property.type"></a>

- *Type:* `string`

---


### IVSResponsesCreateChannelStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesCreateChannelStreamKey(__scope: Construct, __resources: string[], __input: IvsCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateChannelRequest`](#aws-cdk-sdk.ivs.IvsCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.property.arn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateChannelStreamKey.property.value"></a>

- *Type:* `string`

---


### IVSResponsesCreateStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesCreateStreamKey(__scope: Construct, __resources: string[], __input: IvsCreateStreamKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `streamKey`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKey.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey`](#aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey)

---


### IVSResponsesCreateStreamKeyStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesCreateStreamKeyStreamKey(__scope: Construct, __resources: string[], __input: IvsCreateStreamKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsCreateStreamKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.property.arn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesCreateStreamKeyStreamKey.property.value"></a>

- *Type:* `string`

---


### IVSResponsesFetchChannel <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchChannel(__scope: Construct, __resources: string[], __input: IvsGetChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetChannelRequest`](#aws-cdk-sdk.ivs.IvsGetChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel`](#aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel)

---


### IVSResponsesFetchChannelChannel <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchChannelChannel(__scope: Construct, __resources: string[], __input: IvsGetChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetChannelRequest`](#aws-cdk-sdk.ivs.IvsGetChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.authorized"></a>

- *Type:* `boolean`

---

##### `ingestEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.ingestEndpoint"></a>

- *Type:* `string`

---

##### `latencyMode`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.playbackUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchChannelChannel.property.type"></a>

- *Type:* `string`

---


### IVSResponsesFetchPlaybackKeyPair <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchPlaybackKeyPair(__scope: Construct, __resources: string[], __input: IvsGetPlaybackKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPair.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair`](#aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair)

---


### IVSResponsesFetchPlaybackKeyPairKeyPair <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchPlaybackKeyPairKeyPair(__scope: Construct, __resources: string[], __input: IvsGetPlaybackKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsGetPlaybackKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchPlaybackKeyPairKeyPair.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### IVSResponsesFetchStream <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchStream(__scope: Construct, __resources: string[], __input: IvsGetStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamRequest`](#aws-cdk-sdk.ivs.IvsGetStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `stream`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStream.property.stream"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream`](#aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream)

---


### IVSResponsesFetchStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchStreamKey(__scope: Construct, __resources: string[], __input: IvsGetStreamKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsGetStreamKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `streamKey`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKey.property.streamKey"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey`](#aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey)

---


### IVSResponsesFetchStreamKeyStreamKey <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchStreamKeyStreamKey(__scope: Construct, __resources: string[], __input: IvsGetStreamKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamKeyRequest`](#aws-cdk-sdk.ivs.IvsGetStreamKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.property.arn"></a>

- *Type:* `string`

---

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.property.channelArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamKeyStreamKey.property.value"></a>

- *Type:* `string`

---


### IVSResponsesFetchStreamStream <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesFetchStreamStream(__scope: Construct, __resources: string[], __input: IvsGetStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsGetStreamRequest`](#aws-cdk-sdk.ivs.IvsGetStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `channelArn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.channelArn"></a>

- *Type:* `string`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.health"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.playbackUrl"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.state"></a>

- *Type:* `string`

---

##### `viewerCount`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesFetchStreamStream.property.viewerCount"></a>

- *Type:* `number`

---


### IVSResponsesImportPlaybackKeyPair <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesImportPlaybackKeyPair(__scope: Construct, __resources: string[], __input: IvsImportPlaybackKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPair.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair`](#aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair)

---


### IVSResponsesImportPlaybackKeyPairKeyPair <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesImportPlaybackKeyPairKeyPair(__scope: Construct, __resources: string[], __input: IvsImportPlaybackKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest`](#aws-cdk-sdk.ivs.IvsImportPlaybackKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesImportPlaybackKeyPairKeyPair.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### IVSResponsesListChannels <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesListChannels(__scope: Construct, __resources: string[], __input: IvsListChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListChannelsRequest`](#aws-cdk-sdk.ivs.IvsListChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.property.channels"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsChannelSummary`](#aws-cdk-sdk.ivs.IvsChannelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListChannels.property.nextToken"></a>

- *Type:* `string`

---


### IVSResponsesListPlaybackKeyPairs <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesListPlaybackKeyPairs(__scope: Construct, __resources: string[], __input: IvsListPlaybackKeyPairsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest`](#aws-cdk-sdk.ivs.IvsListPlaybackKeyPairsRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPairs`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.property.keyPairs"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary`](#aws-cdk-sdk.ivs.IvsPlaybackKeyPairSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListPlaybackKeyPairs.property.nextToken"></a>

- *Type:* `string`

---


### IVSResponsesListStreamKeys <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesListStreamKeys(__scope: Construct, __resources: string[], __input: IvsListStreamKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListStreamKeysRequest`](#aws-cdk-sdk.ivs.IvsListStreamKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.property.nextToken"></a>

- *Type:* `string`

---

##### `streamKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreamKeys.property.streamKeys"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamKeySummary`](#aws-cdk-sdk.ivs.IvsStreamKeySummary)[]

---


### IVSResponsesListStreams <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesListStreams(__scope: Construct, __resources: string[], __input: IvsListStreamsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListStreamsRequest`](#aws-cdk-sdk.ivs.IvsListStreamsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.property.nextToken"></a>

- *Type:* `string`

---

##### `streams`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListStreams.property.streams"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsStreamSummary`](#aws-cdk-sdk.ivs.IvsStreamSummary)[]

---


### IVSResponsesListTagsForResource <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IvsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsListTagsForResourceRequest`](#aws-cdk-sdk.ivs.IvsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### IVSResponsesUpdateChannel <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesUpdateChannel(__scope: Construct, __resources: string[], __input: IvsUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsUpdateChannelRequest`](#aws-cdk-sdk.ivs.IvsUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel`](#aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel)

---


### IVSResponsesUpdateChannelChannel <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.Initializer"></a>

```typescript
import { ivs } from 'aws-cdk-sdk'

new ivs.IVSResponsesUpdateChannelChannel(__scope: Construct, __resources: string[], __input: IvsUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ivs.IvsUpdateChannelRequest`](#aws-cdk-sdk.ivs.IvsUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `authorized`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.authorized"></a>

- *Type:* `boolean`

---

##### `ingestEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.ingestEndpoint"></a>

- *Type:* `string`

---

##### `latencyMode`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.latencyMode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `playbackUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.playbackUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ivs.IVSResponsesUpdateChannelChannel.property.type"></a>

- *Type:* `string`

---



