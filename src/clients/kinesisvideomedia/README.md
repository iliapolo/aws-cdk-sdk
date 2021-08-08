# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KinesisVideoMediaClient <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.Initializer"></a>

```typescript
import { kinesisvideomedia } from 'aws-cdk-sdk'

new kinesisvideomedia.KinesisVideoMediaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchMedia` <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.fetchMedia"></a>

```typescript
public fetchMedia(input: KinesisVideoMediaGetMediaInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput`](#aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput)

---




## Structs <a name="Structs"></a>

### KinesisVideoMediaGetMediaInput <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideomedia } from 'aws-cdk-sdk'

const kinesisVideoMediaGetMediaInput: kinesisvideomedia.KinesisVideoMediaGetMediaInput = { ... }
```

##### `startSelector`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput.property.startSelector"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector`](#aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector)

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput.property.streamArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput.property.streamName"></a>

- *Type:* `string`

---

### KinesisVideoMediaGetMediaOutput <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideomedia } from 'aws-cdk-sdk'

const kinesisVideoMediaGetMediaOutput: kinesisvideomedia.KinesisVideoMediaGetMediaOutput = { ... }
```

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaOutput.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaOutput.property.payload"></a>

- *Type:* `any`

---

### KinesisVideoMediaStartSelector <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisvideomedia } from 'aws-cdk-sdk'

const kinesisVideoMediaStartSelector: kinesisvideomedia.KinesisVideoMediaStartSelector = { ... }
```

##### `startSelectorType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector.property.startSelectorType"></a>

- *Type:* `string`

---

##### `afterFragmentNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector.property.afterFragmentNumber"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector.property.continuationToken"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaStartSelector.property.startTimestamp"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### KinesisVideoMediaResponsesFetchMedia <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.Initializer"></a>

```typescript
import { kinesisvideomedia } from 'aws-cdk-sdk'

new kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia(__scope: Construct, __resources: string[], __input: KinesisVideoMediaGetMediaInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput`](#aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaGetMediaInput)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.property.contentType"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisvideomedia.KinesisVideoMediaResponsesFetchMedia.property.payload"></a>

- *Type:* `any`

---



