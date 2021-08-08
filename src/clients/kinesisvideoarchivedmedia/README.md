# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KinesisVideoArchivedMediaClient <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchClip` <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.fetchClip"></a>

```typescript
public fetchClip(input: KinesisVideoArchivedMediaGetClipInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput)

---

##### `fetchDashStreamingSessionUrl` <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.fetchDashStreamingSessionUrl"></a>

```typescript
public fetchDashStreamingSessionUrl(input: KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput)

---

##### `fetchHlsStreamingSessionUrl` <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.fetchHlsStreamingSessionUrl"></a>

```typescript
public fetchHlsStreamingSessionUrl(input: KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput)

---

##### `fetchMediaForFragmentList` <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.fetchMediaForFragmentList"></a>

```typescript
public fetchMediaForFragmentList(input: KinesisVideoArchivedMediaGetMediaForFragmentListInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput)

---

##### `listFragments` <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.listFragments"></a>

```typescript
public listFragments(input: KinesisVideoArchivedMediaListFragmentsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput)

---




## Structs <a name="Structs"></a>

### KinesisVideoArchivedMediaClipFragmentSelector <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaClipFragmentSelector: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector = { ... }
```

##### `fragmentSelectorType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector.property.fragmentSelectorType"></a>

- *Type:* `string`

---

##### `timestampRange`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector.property.timestampRange"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange)

---

### KinesisVideoArchivedMediaClipTimestampRange <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaClipTimestampRange: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange = { ... }
```

##### `endTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange.property.endTimestamp"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipTimestampRange.property.startTimestamp"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaDashFragmentSelector <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaDashFragmentSelector: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector = { ... }
```

##### `fragmentSelectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector.property.fragmentSelectorType"></a>

- *Type:* `string`

---

##### `timestampRange`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector.property.timestampRange"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange)

---

### KinesisVideoArchivedMediaDashTimestampRange <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaDashTimestampRange: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange = { ... }
```

##### `endTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange.property.endTimestamp"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashTimestampRange.property.startTimestamp"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaFragment <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaFragment: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment = { ... }
```

##### `fragmentLengthInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment.property.fragmentLengthInMilliseconds"></a>

- *Type:* `number`

---

##### `fragmentNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment.property.fragmentNumber"></a>

- *Type:* `string`

---

##### `fragmentSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment.property.fragmentSizeInBytes"></a>

- *Type:* `number`

---

##### `producerTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment.property.producerTimestamp"></a>

- *Type:* `string`

---

##### `serverTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment.property.serverTimestamp"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaFragmentSelector <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaFragmentSelector: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector = { ... }
```

##### `fragmentSelectorType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector.property.fragmentSelectorType"></a>

- *Type:* `string`

---

##### `timestampRange`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector.property.timestampRange"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange)

---

### KinesisVideoArchivedMediaGetClipInput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetClipInput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput = { ... }
```

##### `clipFragmentSelector`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput.property.clipFragmentSelector"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaClipFragmentSelector)

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetClipOutput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetClipOutput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipOutput = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipOutput.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipOutput.property.payload"></a>

- *Type:* `any`

---

### KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetDashStreamingSessionUrlInput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput = { ... }
```

##### `dashFragmentSelector`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.dashFragmentSelector"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaDashFragmentSelector)

---

##### `displayFragmentNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.displayFragmentNumber"></a>

- *Type:* `string`

---

##### `displayFragmentTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.displayFragmentTimestamp"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.expires"></a>

- *Type:* `number`

---

##### `maxManifestFragmentResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.maxManifestFragmentResults"></a>

- *Type:* `number`

---

##### `playbackMode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.playbackMode"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput = { ... }
```

##### `dashStreamingSessionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlOutput.property.dashStreamingSessionUrl"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput = { ... }
```

##### `containerFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.containerFormat"></a>

- *Type:* `string`

---

##### `discontinuityMode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.discontinuityMode"></a>

- *Type:* `string`

---

##### `displayFragmentTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.displayFragmentTimestamp"></a>

- *Type:* `string`

---

##### `expires`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.expires"></a>

- *Type:* `number`

---

##### `hlsFragmentSelector`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.hlsFragmentSelector"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector)

---

##### `maxMediaPlaylistFragmentResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.maxMediaPlaylistFragmentResults"></a>

- *Type:* `number`

---

##### `playbackMode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.playbackMode"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput = { ... }
```

##### `hlsStreamingSessionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlOutput.property.hlsStreamingSessionUrl"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetMediaForFragmentListInput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetMediaForFragmentListInput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput = { ... }
```

##### `fragments`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput.property.fragments"></a>

- *Type:* `string`[]

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaGetMediaForFragmentListOutput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaGetMediaForFragmentListOutput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListOutput = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListOutput.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListOutput.property.payload"></a>

- *Type:* `any`

---

### KinesisVideoArchivedMediaHlsFragmentSelector <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaHlsFragmentSelector: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector = { ... }
```

##### `fragmentSelectorType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector.property.fragmentSelectorType"></a>

- *Type:* `string`

---

##### `timestampRange`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsFragmentSelector.property.timestampRange"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange)

---

### KinesisVideoArchivedMediaHlsTimestampRange <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaHlsTimestampRange: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange = { ... }
```

##### `endTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange.property.endTimestamp"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaHlsTimestampRange.property.startTimestamp"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaListFragmentsInput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaListFragmentsInput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput = { ... }
```

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput.property.streamName"></a>

- *Type:* `string`

---

##### `fragmentSelector`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput.property.fragmentSelector"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragmentSelector)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaListFragmentsOutput <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaListFragmentsOutput: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsOutput = { ... }
```

##### `fragments`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsOutput.property.fragments"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsOutput.property.nextToken"></a>

- *Type:* `string`

---

### KinesisVideoArchivedMediaTimestampRange <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

const kinesisVideoArchivedMediaTimestampRange: kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange = { ... }
```

##### `endTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange.property.endTimestamp"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaTimestampRange.property.startTimestamp"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### KinesisVideoArchivedMediaResponsesFetchClip <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip(__scope: Construct, __resources: string[], __input: KinesisVideoArchivedMediaGetClipInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetClipInput)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchClip.property.payload"></a>

- *Type:* `any`

---


### KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl(__scope: Construct, __resources: string[], __input: KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetDashStreamingSessionUrlInput)

---



#### Properties <a name="Properties"></a>

##### `dashStreamingSessionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchDashStreamingSessionUrl.property.dashStreamingSessionUrl"></a>

- *Type:* `string`

---


### KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl(__scope: Construct, __resources: string[], __input: KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetHlsStreamingSessionUrlInput)

---



#### Properties <a name="Properties"></a>

##### `hlsStreamingSessionUrl`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchHlsStreamingSessionUrl.property.hlsStreamingSessionUrl"></a>

- *Type:* `string`

---


### KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList(__scope: Construct, __resources: string[], __input: KinesisVideoArchivedMediaGetMediaForFragmentListInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaGetMediaForFragmentListInput)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesFetchMediaForFragmentList.property.payload"></a>

- *Type:* `any`

---


### KinesisVideoArchivedMediaResponsesListFragments <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.Initializer"></a>

```typescript
import { kinesisvideoarchivedmedia } from 'aws-cdk-sdk'

new kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments(__scope: Construct, __resources: string[], __input: KinesisVideoArchivedMediaListFragmentsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaListFragmentsInput)

---



#### Properties <a name="Properties"></a>

##### `fragments`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.property.fragments"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment`](#aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaFragment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideoarchivedmedia.KinesisVideoArchivedMediaResponsesListFragments.property.nextToken"></a>

- *Type:* `string`

---



