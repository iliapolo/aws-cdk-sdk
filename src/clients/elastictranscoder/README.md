# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ElasticTranscoderClient <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelJob` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.cancelJob"></a>

```typescript
public cancelJob(input: ElasticTranscoderCancelJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCancelJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCancelJobRequest)

---

##### `createJob` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.createJob"></a>

```typescript
public createJob(input: ElasticTranscoderCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---

##### `createPipeline` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.createPipeline"></a>

```typescript
public createPipeline(input: ElasticTranscoderCreatePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---

##### `createPreset` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.createPreset"></a>

```typescript
public createPreset(input: ElasticTranscoderCreatePresetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---

##### `deletePipeline` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.deletePipeline"></a>

```typescript
public deletePipeline(input: ElasticTranscoderDeletePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePipelineRequest)

---

##### `deletePreset` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.deletePreset"></a>

```typescript
public deletePreset(input: ElasticTranscoderDeletePresetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePresetRequest)

---

##### `listJobsByPipeline` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.listJobsByPipeline"></a>

```typescript
public listJobsByPipeline(input: ElasticTranscoderListJobsByPipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest)

---

##### `listJobsByStatus` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.listJobsByStatus"></a>

```typescript
public listJobsByStatus(input: ElasticTranscoderListJobsByStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest)

---

##### `listPipelines` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.listPipelines"></a>

```typescript
public listPipelines(input: ElasticTranscoderListPipelinesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest)

---

##### `listPresets` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.listPresets"></a>

```typescript
public listPresets(input: ElasticTranscoderListPresetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest)

---

##### `readJob` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.readJob"></a>

```typescript
public readJob(input: ElasticTranscoderReadJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---

##### `readPipeline` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.readPipeline"></a>

```typescript
public readPipeline(input: ElasticTranscoderReadPipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---

##### `readPreset` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.readPreset"></a>

```typescript
public readPreset(input: ElasticTranscoderReadPresetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---

##### `testRole` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.testRole"></a>

```typescript
public testRole(input: ElasticTranscoderTestRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest)

---

##### `updatePipeline` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.updatePipeline"></a>

```typescript
public updatePipeline(input: ElasticTranscoderUpdatePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---

##### `updatePipelineNotifications` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.updatePipelineNotifications"></a>

```typescript
public updatePipelineNotifications(input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---

##### `updatePipelineStatus` <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.updatePipelineStatus"></a>

```typescript
public updatePipelineStatus(input: ElasticTranscoderUpdatePipelineStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---




## Structs <a name="Structs"></a>

### ElasticTranscoderArtwork <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderArtwork: elastictranscoder.ElasticTranscoderArtwork = { ... }
```

##### `albumArtFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.albumArtFormat"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `inputKey`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.inputKey"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork.property.sizingPolicy"></a>

- *Type:* `string`

---

### ElasticTranscoderAudioCodecOptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderAudioCodecOptions: elastictranscoder.ElasticTranscoderAudioCodecOptions = { ... }
```

##### `bitDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions.property.bitDepth"></a>

- *Type:* `string`

---

##### `bitOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions.property.bitOrder"></a>

- *Type:* `string`

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions.property.profile"></a>

- *Type:* `string`

---

##### `signed`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions.property.signed"></a>

- *Type:* `string`

---

### ElasticTranscoderAudioParameters <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderAudioParameters: elastictranscoder.ElasticTranscoderAudioParameters = { ... }
```

##### `audioPackingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.audioPackingMode"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.bitRate"></a>

- *Type:* `string`

---

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.channels"></a>

- *Type:* `string`

---

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.codecOptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioCodecOptions)

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters.property.sampleRate"></a>

- *Type:* `string`

---

### ElasticTranscoderCancelJobRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCancelJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCancelJobRequest: elastictranscoder.ElasticTranscoderCancelJobRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCancelJobRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderCancelJobResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCancelJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCancelJobResponse: elastictranscoder.ElasticTranscoderCancelJobResponse = { ... }
```

### ElasticTranscoderCaptionFormat <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCaptionFormat: elastictranscoder.ElasticTranscoderCaptionFormat = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat.property.format"></a>

- *Type:* `string`

---

##### `pattern`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat.property.pattern"></a>

- *Type:* `string`

---

### ElasticTranscoderCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCaptions: elastictranscoder.ElasticTranscoderCaptions = { ... }
```

##### `captionFormats`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions.property.captionFormats"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat)[]

---

##### `captionSources`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions.property.mergePolicy"></a>

- *Type:* `string`

---

### ElasticTranscoderCaptionSource <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCaptionSource: elastictranscoder.ElasticTranscoderCaptionSource = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource.property.key"></a>

- *Type:* `string`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource.property.label"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource.property.language"></a>

- *Type:* `string`

---

##### `timeOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource.property.timeOffset"></a>

- *Type:* `string`

---

### ElasticTranscoderClip <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderClip: elastictranscoder.ElasticTranscoderClip = { ... }
```

##### `timeSpan`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip.property.timeSpan"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan)

---

### ElasticTranscoderCreateJobOutput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreateJobOutput: elastictranscoder.ElasticTranscoderCreateJobOutput = { ... }
```

##### `albumArt`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.albumArt"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt)

---

##### `captions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.captions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions)

---

##### `composition`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.composition"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip)[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.key"></a>

- *Type:* `string`

---

##### `presetId`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.presetId"></a>

- *Type:* `string`

---

##### `rotate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.rotate"></a>

- *Type:* `string`

---

##### `segmentDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.segmentDuration"></a>

- *Type:* `string`

---

##### `thumbnailEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.thumbnailEncryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `thumbnailPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.thumbnailPattern"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark)[]

---

### ElasticTranscoderCreateJobPlaylist <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreateJobPlaylist: elastictranscoder.ElasticTranscoderCreateJobPlaylist = { ... }
```

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist.property.format"></a>

- *Type:* `string`

---

##### `hlsContentProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist.property.hlsContentProtection"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist.property.name"></a>

- *Type:* `string`

---

##### `outputKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist.property.outputKeys"></a>

- *Type:* `string`[]

---

##### `playReadyDrm`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist.property.playReadyDrm"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm)

---

### ElasticTranscoderCreateJobRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreateJobRequest: elastictranscoder.ElasticTranscoderCreateJobRequest = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.pipelineId"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)[]

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.output"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput)

---

##### `outputKeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.outputKeyPrefix"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobOutput)[]

---

##### `playlists`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.playlists"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobPlaylist)[]

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### ElasticTranscoderCreateJobResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreateJobResponse: elastictranscoder.ElasticTranscoderCreateJobResponse = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobResponse.property.job"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)

---

### ElasticTranscoderCreatePipelineRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreatePipelineRequest: elastictranscoder.ElasticTranscoderCreatePipelineRequest = { ... }
```

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.name"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.role"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications)

---

##### `outputBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.outputBucket"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

### ElasticTranscoderCreatePipelineResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreatePipelineResponse: elastictranscoder.ElasticTranscoderCreatePipelineResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---

### ElasticTranscoderCreatePresetRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreatePresetRequest: elastictranscoder.ElasticTranscoderCreatePresetRequest = { ... }
```

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.container"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.name"></a>

- *Type:* `string`

---

##### `audio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.audio"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.description"></a>

- *Type:* `string`

---

##### `thumbnails`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.thumbnails"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails)

---

##### `video`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters)

---

### ElasticTranscoderCreatePresetResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderCreatePresetResponse: elastictranscoder.ElasticTranscoderCreatePresetResponse = { ... }
```

##### `preset`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetResponse.property.preset"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset)

---

##### `warning`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetResponse.property.warning"></a>

- *Type:* `string`

---

### ElasticTranscoderDeletePipelineRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderDeletePipelineRequest: elastictranscoder.ElasticTranscoderDeletePipelineRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePipelineRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderDeletePipelineResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderDeletePipelineResponse: elastictranscoder.ElasticTranscoderDeletePipelineResponse = { ... }
```

### ElasticTranscoderDeletePresetRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePresetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderDeletePresetRequest: elastictranscoder.ElasticTranscoderDeletePresetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePresetRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderDeletePresetResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDeletePresetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderDeletePresetResponse: elastictranscoder.ElasticTranscoderDeletePresetResponse = { ... }
```

### ElasticTranscoderDetectedProperties <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderDetectedProperties: elastictranscoder.ElasticTranscoderDetectedProperties = { ... }
```

##### `durationMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties.property.durationMillis"></a>

- *Type:* `number`

---

##### `fileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties.property.width"></a>

- *Type:* `number`

---

### ElasticTranscoderEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderEncryption: elastictranscoder.ElasticTranscoderEncryption = { ... }
```

##### `initializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption.property.mode"></a>

- *Type:* `string`

---

### ElasticTranscoderHlsContentProtection <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderHlsContentProtection: elastictranscoder.ElasticTranscoderHlsContentProtection = { ... }
```

##### `initializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.keyMd5"></a>

- *Type:* `string`

---

##### `keyStoragePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.keyStoragePolicy"></a>

- *Type:* `string`

---

##### `licenseAcquisitionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.licenseAcquisitionUrl"></a>

- *Type:* `string`

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection.property.method"></a>

- *Type:* `string`

---

### ElasticTranscoderInputCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderInputCaptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderInputCaptions: elastictranscoder.ElasticTranscoderInputCaptions = { ... }
```

##### `captionSources`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderInputCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderInputCaptions.property.mergePolicy"></a>

- *Type:* `string`

---

### ElasticTranscoderJob <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderJob: elastictranscoder.ElasticTranscoderJob = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.id"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)[]

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.output"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput)

---

##### `outputKeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.outputKeyPrefix"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput)[]

---

##### `pipelineId`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.pipelineId"></a>

- *Type:* `string`

---

##### `playlists`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.playlists"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.status"></a>

- *Type:* `string`

---

##### `timing`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.timing"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming)

---

##### `userMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### ElasticTranscoderJobAlbumArt <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderJobAlbumArt: elastictranscoder.ElasticTranscoderJobAlbumArt = { ... }
```

##### `artwork`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt.property.artwork"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork)[]

---

##### `mergePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt.property.mergePolicy"></a>

- *Type:* `string`

---

### ElasticTranscoderJobInput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderJobInput: elastictranscoder.ElasticTranscoderJobInput = { ... }
```

##### `aspectRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.aspectRatio"></a>

- *Type:* `string`

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.container"></a>

- *Type:* `string`

---

##### `detectedProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.detectedProperties"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderDetectedProperties)

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `frameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.frameRate"></a>

- *Type:* `string`

---

##### `inputCaptions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.inputCaptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderInputCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderInputCaptions)

---

##### `interlaced`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.interlaced"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.key"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.resolution"></a>

- *Type:* `string`

---

##### `timeSpan`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput.property.timeSpan"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan)

---

### ElasticTranscoderJobOutput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderJobOutput: elastictranscoder.ElasticTranscoderJobOutput = { ... }
```

##### `albumArt`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.albumArt"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobAlbumArt)

---

##### `appliedColorSpaceConversion`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.appliedColorSpaceConversion"></a>

- *Type:* `string`

---

##### `captions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.captions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptions)

---

##### `composition`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.composition"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip)[]

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.duration"></a>

- *Type:* `number`

---

##### `durationMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.durationMillis"></a>

- *Type:* `number`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `fileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.height"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.key"></a>

- *Type:* `string`

---

##### `presetId`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.presetId"></a>

- *Type:* `string`

---

##### `rotate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.rotate"></a>

- *Type:* `string`

---

##### `segmentDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.segmentDuration"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.status"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.statusDetail"></a>

- *Type:* `string`

---

##### `thumbnailEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.thumbnailEncryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `thumbnailPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.thumbnailPattern"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark)[]

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput.property.width"></a>

- *Type:* `number`

---

### ElasticTranscoderJobWatermark <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderJobWatermark: elastictranscoder.ElasticTranscoderJobWatermark = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderEncryption)

---

##### `inputKey`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark.property.inputKey"></a>

- *Type:* `string`

---

##### `presetWatermarkId`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark.property.presetWatermarkId"></a>

- *Type:* `string`

---

### ElasticTranscoderListJobsByPipelineRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListJobsByPipelineRequest: elastictranscoder.ElasticTranscoderListJobsByPipelineRequest = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest.property.pipelineId"></a>

- *Type:* `string`

---

##### `ascending`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest.property.ascending"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest.property.pageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListJobsByPipelineResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListJobsByPipelineResponse: elastictranscoder.ElasticTranscoderListJobsByPipelineResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineResponse.property.nextPageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListJobsByStatusRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListJobsByStatusRequest: elastictranscoder.ElasticTranscoderListJobsByStatusRequest = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest.property.status"></a>

- *Type:* `string`

---

##### `ascending`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest.property.ascending"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest.property.pageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListJobsByStatusResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListJobsByStatusResponse: elastictranscoder.ElasticTranscoderListJobsByStatusResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusResponse.property.nextPageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListPipelinesRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListPipelinesRequest: elastictranscoder.ElasticTranscoderListPipelinesRequest = { ... }
```

##### `ascending`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest.property.ascending"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest.property.pageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListPipelinesResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListPipelinesResponse: elastictranscoder.ElasticTranscoderListPipelinesResponse = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesResponse.property.nextPageToken"></a>

- *Type:* `string`

---

##### `pipelines`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesResponse.property.pipelines"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)[]

---

### ElasticTranscoderListPresetsRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListPresetsRequest: elastictranscoder.ElasticTranscoderListPresetsRequest = { ... }
```

##### `ascending`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest.property.ascending"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest.property.pageToken"></a>

- *Type:* `string`

---

### ElasticTranscoderListPresetsResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderListPresetsResponse: elastictranscoder.ElasticTranscoderListPresetsResponse = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsResponse.property.nextPageToken"></a>

- *Type:* `string`

---

##### `presets`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsResponse.property.presets"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset)[]

---

### ElasticTranscoderNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderNotifications: elastictranscoder.ElasticTranscoderNotifications = { ... }
```

##### `completed`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications.property.warning"></a>

- *Type:* `string`

---

### ElasticTranscoderPermission <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPermission: elastictranscoder.ElasticTranscoderPermission = { ... }
```

##### `access`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission.property.access"></a>

- *Type:* `string`[]

---

##### `grantee`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission.property.grantee"></a>

- *Type:* `string`

---

##### `granteeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission.property.granteeType"></a>

- *Type:* `string`

---

### ElasticTranscoderPipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPipeline: elastictranscoder.ElasticTranscoderPipeline = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications)

---

##### `outputBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

### ElasticTranscoderPipelineOutputConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPipelineOutputConfig: elastictranscoder.ElasticTranscoderPipelineOutputConfig = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig.property.storageClass"></a>

- *Type:* `string`

---

### ElasticTranscoderPlaylist <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPlaylist: elastictranscoder.ElasticTranscoderPlaylist = { ... }
```

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.format"></a>

- *Type:* `string`

---

##### `hlsContentProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.hlsContentProtection"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderHlsContentProtection)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.name"></a>

- *Type:* `string`

---

##### `outputKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.outputKeys"></a>

- *Type:* `string`[]

---

##### `playReadyDrm`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.playReadyDrm"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.status"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist.property.statusDetail"></a>

- *Type:* `string`

---

### ElasticTranscoderPlayReadyDrm <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPlayReadyDrm: elastictranscoder.ElasticTranscoderPlayReadyDrm = { ... }
```

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.format"></a>

- *Type:* `string`

---

##### `initializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.key"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.keyId"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.keyMd5"></a>

- *Type:* `string`

---

##### `licenseAcquisitionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlayReadyDrm.property.licenseAcquisitionUrl"></a>

- *Type:* `string`

---

### ElasticTranscoderPreset <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPreset: elastictranscoder.ElasticTranscoderPreset = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.arn"></a>

- *Type:* `string`

---

##### `audio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.audio"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderAudioParameters)

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.container"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.name"></a>

- *Type:* `string`

---

##### `thumbnails`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.thumbnails"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.type"></a>

- *Type:* `string`

---

##### `video`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset.property.video"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters)

---

### ElasticTranscoderPresetWatermark <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderPresetWatermark: elastictranscoder.ElasticTranscoderPresetWatermark = { ... }
```

##### `horizontalAlign`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.horizontalAlign"></a>

- *Type:* `string`

---

##### `horizontalOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.horizontalOffset"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.id"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.maxWidth"></a>

- *Type:* `string`

---

##### `opacity`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.opacity"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.sizingPolicy"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.target"></a>

- *Type:* `string`

---

##### `verticalAlign`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.verticalAlign"></a>

- *Type:* `string`

---

##### `verticalOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark.property.verticalOffset"></a>

- *Type:* `string`

---

### ElasticTranscoderReadJobRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadJobRequest: elastictranscoder.ElasticTranscoderReadJobRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderReadJobResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadJobResponse: elastictranscoder.ElasticTranscoderReadJobResponse = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobResponse.property.job"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)

---

### ElasticTranscoderReadPipelineRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadPipelineRequest: elastictranscoder.ElasticTranscoderReadPipelineRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderReadPipelineResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadPipelineResponse: elastictranscoder.ElasticTranscoderReadPipelineResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---

### ElasticTranscoderReadPresetRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadPresetRequest: elastictranscoder.ElasticTranscoderReadPresetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest.property.id"></a>

- *Type:* `string`

---

### ElasticTranscoderReadPresetResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderReadPresetResponse: elastictranscoder.ElasticTranscoderReadPresetResponse = { ... }
```

##### `preset`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetResponse.property.preset"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset)

---

### ElasticTranscoderTestRoleRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderTestRoleRequest: elastictranscoder.ElasticTranscoderTestRoleRequest = { ... }
```

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest.property.inputBucket"></a>

- *Type:* `string`

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest.property.role"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest.property.topics"></a>

- *Type:* `string`[]

---

### ElasticTranscoderTestRoleResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderTestRoleResponse: elastictranscoder.ElasticTranscoderTestRoleResponse = { ... }
```

##### `messages`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleResponse.property.messages"></a>

- *Type:* `string`[]

---

##### `success`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleResponse.property.success"></a>

- *Type:* `string`

---

### ElasticTranscoderThumbnails <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderThumbnails: elastictranscoder.ElasticTranscoderThumbnails = { ... }
```

##### `aspectRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.aspectRatio"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.format"></a>

- *Type:* `string`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.interval"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderThumbnails.property.sizingPolicy"></a>

- *Type:* `string`

---

### ElasticTranscoderTimeSpan <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderTimeSpan: elastictranscoder.ElasticTranscoderTimeSpan = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan.property.duration"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTimeSpan.property.startTime"></a>

- *Type:* `string`

---

### ElasticTranscoderTiming <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderTiming: elastictranscoder.ElasticTranscoderTiming = { ... }
```

##### `finishTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming.property.finishTimeMillis"></a>

- *Type:* `number`

---

##### `startTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming.property.startTimeMillis"></a>

- *Type:* `number`

---

##### `submitTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderTiming.property.submitTimeMillis"></a>

- *Type:* `number`

---

### ElasticTranscoderUpdatePipelineNotificationsRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineNotificationsRequest: elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest.property.id"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications)

---

### ElasticTranscoderUpdatePipelineNotificationsResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineNotificationsResponse: elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)

---

### ElasticTranscoderUpdatePipelineRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineRequest: elastictranscoder.ElasticTranscoderUpdatePipelineRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.id"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

##### `inputBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderNotifications)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.role"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipelineOutputConfig)

---

### ElasticTranscoderUpdatePipelineResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineResponse: elastictranscoder.ElasticTranscoderUpdatePipelineResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---

### ElasticTranscoderUpdatePipelineStatusRequest <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineStatusRequest: elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest.property.status"></a>

- *Type:* `string`

---

### ElasticTranscoderUpdatePipelineStatusResponse <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderUpdatePipelineStatusResponse: elastictranscoder.ElasticTranscoderUpdatePipelineStatusResponse = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusResponse.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)

---

### ElasticTranscoderVideoParameters <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderVideoParameters: elastictranscoder.ElasticTranscoderVideoParameters = { ... }
```

##### `aspectRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.aspectRatio"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.bitRate"></a>

- *Type:* `string`

---

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.codecOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `displayAspectRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.displayAspectRatio"></a>

- *Type:* `string`

---

##### `fixedGop`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.fixedGop"></a>

- *Type:* `string`

---

##### `frameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.frameRate"></a>

- *Type:* `string`

---

##### `keyframesMaxDist`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.keyframesMaxDist"></a>

- *Type:* `string`

---

##### `maxFrameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.maxFrameRate"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.sizingPolicy"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderVideoParameters.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark)[]

---

### ElasticTranscoderWarning <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

const elasticTranscoderWarning: elastictranscoder.ElasticTranscoderWarning = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning.property.message"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ElasticTranscoderResponsesCreateJob <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJob(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob)

---


### ElasticTranscoderResponsesCreateJobJob <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJob(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.id"></a>

- *Type:* `string`

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput)

---

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)[]

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.output"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput)

---

##### `outputKeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.outputKeyPrefix"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput)[]

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.pipelineId"></a>

- *Type:* `string`

---

##### `playlists`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.playlists"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.status"></a>

- *Type:* `string`

---

##### `timing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.timing"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming)

---

##### `userMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJob.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---


### ElasticTranscoderResponsesCreateJobJobInput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.aspectRatio"></a>

- *Type:* `string`

---

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.container"></a>

- *Type:* `string`

---

##### `detectedProperties`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.detectedProperties"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties)

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption)

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.frameRate"></a>

- *Type:* `string`

---

##### `inputCaptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.inputCaptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions)

---

##### `interlaced`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.interlaced"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.key"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.resolution"></a>

- *Type:* `string`

---

##### `timeSpan`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInput.property.timeSpan"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan)

---


### ElasticTranscoderResponsesCreateJobJobInputDetectedProperties <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.property.durationMillis"></a>

- *Type:* `number`

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputDetectedProperties.property.width"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesCreateJobJobInputEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobInputInputCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `captionSources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputInputCaptions.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobInputTimeSpan <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.property.duration"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobInputTimeSpan.property.startTime"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobOutput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `albumArt`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.albumArt"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt)

---

##### `appliedColorSpaceConversion`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.appliedColorSpaceConversion"></a>

- *Type:* `string`

---

##### `captions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.captions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions)

---

##### `composition`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.composition"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip)[]

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.duration"></a>

- *Type:* `number`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.durationMillis"></a>

- *Type:* `number`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption)

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.height"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.key"></a>

- *Type:* `string`

---

##### `presetId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.presetId"></a>

- *Type:* `string`

---

##### `rotate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.rotate"></a>

- *Type:* `string`

---

##### `segmentDuration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.segmentDuration"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.status"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.statusDetail"></a>

- *Type:* `string`

---

##### `thumbnailEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.thumbnailEncryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption)

---

##### `thumbnailPattern`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.thumbnailPattern"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark)[]

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutput.property.width"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesCreateJobJobOutputAlbumArt <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `artwork`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.property.artwork"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputAlbumArt.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobOutputCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `captionFormats`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.property.captionFormats"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat)[]

---

##### `captionSources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputCaptions.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobOutputEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobOutputThumbnailEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreateJobJobTiming <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `finishTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.property.finishTimeMillis"></a>

- *Type:* `number`

---

##### `startTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.property.startTimeMillis"></a>

- *Type:* `number`

---

##### `submitTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreateJobJobTiming.property.submitTimeMillis"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesCreatePipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline)

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipeline.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---


### ElasticTranscoderResponsesCreatePipelinePipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications)

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig)

---


### ElasticTranscoderResponsesCreatePipelinePipelineContentConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineContentConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePipelinePipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineNotifications.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePipelinePipelineThumbnailConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePreset <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePreset(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `preset`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.property.preset"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset)

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePreset.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePresetPreset <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.arn"></a>

- *Type:* `string`

---

##### `audio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.audio"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio)

---

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.container"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.name"></a>

- *Type:* `string`

---

##### `thumbnails`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.thumbnails"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.type"></a>

- *Type:* `string`

---

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPreset.property.video"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo)

---


### ElasticTranscoderResponsesCreatePresetPresetAudio <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPackingMode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.audioPackingMode"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.bitRate"></a>

- *Type:* `string`

---

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.channels"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.codecOptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions)

---

##### `sampleRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudio.property.sampleRate"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `bitDepth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.property.bitDepth"></a>

- *Type:* `string`

---

##### `bitOrder`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.property.bitOrder"></a>

- *Type:* `string`

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.property.profile"></a>

- *Type:* `string`

---

##### `signed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetAudioCodecOptions.property.signed"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePresetPresetThumbnails <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.aspectRatio"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.format"></a>

- *Type:* `string`

---

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.interval"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetThumbnails.property.sizingPolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesCreatePresetPresetVideo <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo(__scope: Construct, __resources: string[], __input: ElasticTranscoderCreatePresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCreatePresetRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.aspectRatio"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.bitRate"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.codecOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `displayAspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.displayAspectRatio"></a>

- *Type:* `string`

---

##### `fixedGop`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.fixedGop"></a>

- *Type:* `string`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.frameRate"></a>

- *Type:* `string`

---

##### `keyframesMaxDist`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.keyframesMaxDist"></a>

- *Type:* `string`

---

##### `maxFrameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.maxFrameRate"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.sizingPolicy"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesCreatePresetPresetVideo.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark)[]

---


### ElasticTranscoderResponsesListJobsByPipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderListJobsByPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByPipeline.property.nextPageToken"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesListJobsByStatus <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesListJobsByStatus(__scope: Construct, __resources: string[], __input: ElasticTranscoderListJobsByStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListJobsByStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJob)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListJobsByStatus.property.nextPageToken"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesListPipelines <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesListPipelines(__scope: Construct, __resources: string[], __input: ElasticTranscoderListPipelinesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPipelinesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.property.nextPageToken"></a>

- *Type:* `string`

---

##### `pipelines`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPipelines.property.pipelines"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPipeline)[]

---


### ElasticTranscoderResponsesListPresets <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesListPresets(__scope: Construct, __resources: string[], __input: ElasticTranscoderListPresetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderListPresetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.property.nextPageToken"></a>

- *Type:* `string`

---

##### `presets`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesListPresets.property.presets"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPreset)[]

---


### ElasticTranscoderResponsesReadJob <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJob(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob)

---


### ElasticTranscoderResponsesReadJobJob <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJob(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.id"></a>

- *Type:* `string`

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput)

---

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobInput)[]

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.output"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput)

---

##### `outputKeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.outputKeyPrefix"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobOutput)[]

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.pipelineId"></a>

- *Type:* `string`

---

##### `playlists`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.playlists"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPlaylist)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.status"></a>

- *Type:* `string`

---

##### `timing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.timing"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming)

---

##### `userMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJob.property.userMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---


### ElasticTranscoderResponsesReadJobJobInput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobInput(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.aspectRatio"></a>

- *Type:* `string`

---

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.container"></a>

- *Type:* `string`

---

##### `detectedProperties`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.detectedProperties"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties)

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption)

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.frameRate"></a>

- *Type:* `string`

---

##### `inputCaptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.inputCaptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions)

---

##### `interlaced`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.interlaced"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.key"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.resolution"></a>

- *Type:* `string`

---

##### `timeSpan`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInput.property.timeSpan"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan)

---


### ElasticTranscoderResponsesReadJobJobInputDetectedProperties <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.property.durationMillis"></a>

- *Type:* `number`

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.property.height"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputDetectedProperties.property.width"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesReadJobJobInputEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobInputInputCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `captionSources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputInputCaptions.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobInputTimeSpan <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.property.duration"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobInputTimeSpan.property.startTime"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobOutput <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `albumArt`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.albumArt"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt)

---

##### `appliedColorSpaceConversion`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.appliedColorSpaceConversion"></a>

- *Type:* `string`

---

##### `captions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.captions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions)

---

##### `composition`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.composition"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderClip)[]

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.duration"></a>

- *Type:* `number`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.durationMillis"></a>

- *Type:* `number`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption)

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.fileSize"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.frameRate"></a>

- *Type:* `string`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.height"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.key"></a>

- *Type:* `string`

---

##### `presetId`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.presetId"></a>

- *Type:* `string`

---

##### `rotate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.rotate"></a>

- *Type:* `string`

---

##### `segmentDuration`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.segmentDuration"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.status"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.statusDetail"></a>

- *Type:* `string`

---

##### `thumbnailEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.thumbnailEncryption"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption)

---

##### `thumbnailPattern`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.thumbnailPattern"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderJobWatermark)[]

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutput.property.width"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesReadJobJobOutputAlbumArt <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `artwork`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.property.artwork"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderArtwork)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputAlbumArt.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobOutputCaptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `captionFormats`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.property.captionFormats"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionFormat)[]

---

##### `captionSources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.property.captionSources"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderCaptionSource)[]

---

##### `mergePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputCaptions.property.mergePolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobOutputEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `initializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.property.initializationVector"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.property.key"></a>

- *Type:* `string`

---

##### `keyMd5`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.property.keyMd5"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobOutputThumbnailEncryption.property.mode"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadJobJobTiming <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadJobRequest)

---



#### Properties <a name="Properties"></a>

##### `finishTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.property.finishTimeMillis"></a>

- *Type:* `number`

---

##### `startTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.property.startTimeMillis"></a>

- *Type:* `number`

---

##### `submitTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadJobJobTiming.property.submitTimeMillis"></a>

- *Type:* `number`

---


### ElasticTranscoderResponsesReadPipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline)

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipeline.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---


### ElasticTranscoderResponsesReadPipelinePipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications)

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig)

---


### ElasticTranscoderResponsesReadPipelinePipelineContentConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineContentConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPipelinePipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineNotifications.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPipelinePipelineThumbnailConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPreset <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPreset(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `preset`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPreset.property.preset"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset)

---


### ElasticTranscoderResponsesReadPresetPreset <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPresetPreset(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.arn"></a>

- *Type:* `string`

---

##### `audio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.audio"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio)

---

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.container"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.name"></a>

- *Type:* `string`

---

##### `thumbnails`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.thumbnails"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.type"></a>

- *Type:* `string`

---

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPreset.property.video"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo)

---


### ElasticTranscoderResponsesReadPresetPresetAudio <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPackingMode`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.audioPackingMode"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.bitRate"></a>

- *Type:* `string`

---

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.channels"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.codecOptions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions)

---

##### `sampleRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudio.property.sampleRate"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `bitDepth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.property.bitDepth"></a>

- *Type:* `string`

---

##### `bitOrder`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.property.bitOrder"></a>

- *Type:* `string`

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.property.profile"></a>

- *Type:* `string`

---

##### `signed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetAudioCodecOptions.property.signed"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPresetPresetThumbnails <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.aspectRatio"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.format"></a>

- *Type:* `string`

---

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.interval"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetThumbnails.property.sizingPolicy"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesReadPresetPresetVideo <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo(__scope: Construct, __resources: string[], __input: ElasticTranscoderReadPresetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderReadPresetRequest)

---



#### Properties <a name="Properties"></a>

##### `aspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.aspectRatio"></a>

- *Type:* `string`

---

##### `bitRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.bitRate"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.codec"></a>

- *Type:* `string`

---

##### `codecOptions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.codecOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `displayAspectRatio`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.displayAspectRatio"></a>

- *Type:* `string`

---

##### `fixedGop`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.fixedGop"></a>

- *Type:* `string`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.frameRate"></a>

- *Type:* `string`

---

##### `keyframesMaxDist`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.keyframesMaxDist"></a>

- *Type:* `string`

---

##### `maxFrameRate`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.maxFrameRate"></a>

- *Type:* `string`

---

##### `maxHeight`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.maxHeight"></a>

- *Type:* `string`

---

##### `maxWidth`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.maxWidth"></a>

- *Type:* `string`

---

##### `paddingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.paddingPolicy"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.resolution"></a>

- *Type:* `string`

---

##### `sizingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.sizingPolicy"></a>

- *Type:* `string`

---

##### `watermarks`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesReadPresetPresetVideo.property.watermarks"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPresetWatermark)[]

---


### ElasticTranscoderResponsesTestRole <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesTestRole(__scope: Construct, __resources: string[], __input: ElasticTranscoderTestRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderTestRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.property.messages"></a>

- *Type:* `string`[]

---

##### `success`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesTestRole.property.success"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline)

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipeline.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderWarning)[]

---


### ElasticTranscoderResponsesUpdatePipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotifications.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline)

---


### ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications)

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig)

---


### ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineContentConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineNotifications.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineNotificationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineNotificationsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineNotificationsPipelineThumbnailConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelinePipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications)

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig)

---


### ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineContentConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelinePipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineNotifications.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelinePipelineThumbnailConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelineStatus <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatus.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline)

---


### ElasticTranscoderResponsesUpdatePipelineStatusPipeline <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.arn"></a>

- *Type:* `string`

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.awsKmsKeyArn"></a>

- *Type:* `string`

---

##### `contentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.contentConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.id"></a>

- *Type:* `string`

---

##### `inputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.inputBucket"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.name"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications)

---

##### `outputBucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.outputBucket"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.status"></a>

- *Type:* `string`

---

##### `thumbnailConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipeline.property.thumbnailConfig"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig)

---


### ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineContentConfig.property.storageClass"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `completed`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.property.completed"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.property.error"></a>

- *Type:* `string`

---

##### `progressing`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.property.progressing"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineNotifications.property.warning"></a>

- *Type:* `string`

---


### ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoder } from 'aws-cdk-sdk'

new elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig(__scope: Construct, __resources: string[], __input: ElasticTranscoderUpdatePipelineStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderUpdatePipelineStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.property.bucket"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission`](#aws-cdk-sdk.elastictranscoder.ElasticTranscoderPermission)[]

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.elastictranscoder.ElasticTranscoderResponsesUpdatePipelineStatusPipelineThumbnailConfig.property.storageClass"></a>

- *Type:* `string`

---



