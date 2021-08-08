# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaTailorClient <a name="aws-cdk-sdk.mediatailor.MediaTailorClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deletePlaybackConfiguration` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.deletePlaybackConfiguration"></a>

```typescript
public deletePlaybackConfiguration(input: MediaTailorDeletePlaybackConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorDeletePlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorDeletePlaybackConfigurationRequest)

---

##### `fetchPlaybackConfiguration` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.fetchPlaybackConfiguration"></a>

```typescript
public fetchPlaybackConfiguration(input: MediaTailorGetPlaybackConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---

##### `listPlaybackConfigurations` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.listPlaybackConfigurations"></a>

```typescript
public listPlaybackConfigurations(input: MediaTailorListPlaybackConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest`](#aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaTailorListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest`](#aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest)

---

##### `putPlaybackConfiguration` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.putPlaybackConfiguration"></a>

```typescript
public putPlaybackConfiguration(input: MediaTailorPutPlaybackConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.tagResource"></a>

```typescript
public tagResource(input: MediaTailorTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorTagResourceRequest`](#aws-cdk-sdk.mediatailor.MediaTailorTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.untagResource"></a>

```typescript
public untagResource(input: MediaTailorUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorUntagResourceRequest`](#aws-cdk-sdk.mediatailor.MediaTailorUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### MediaTailorAdMarkerPassthrough <a name="aws-cdk-sdk.mediatailor.MediaTailorAdMarkerPassthrough"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorAdMarkerPassthrough: mediatailor.MediaTailorAdMarkerPassthrough = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorAdMarkerPassthrough.property.enabled"></a>

- *Type:* `boolean`

---

### MediaTailorAvailSuppression <a name="aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorAvailSuppression: mediatailor.MediaTailorAvailSuppression = { ... }
```

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression.property.mode"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression.property.value"></a>

- *Type:* `string`

---

### MediaTailorBumper <a name="aws-cdk-sdk.mediatailor.MediaTailorBumper"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorBumper: mediatailor.MediaTailorBumper = { ... }
```

##### `endUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorBumper.property.endUrl"></a>

- *Type:* `string`

---

##### `startUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorBumper.property.startUrl"></a>

- *Type:* `string`

---

### MediaTailorCdnConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorCdnConfiguration: mediatailor.MediaTailorCdnConfiguration = { ... }
```

##### `adSegmentUrlPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration.property.adSegmentUrlPrefix"></a>

- *Type:* `string`

---

##### `contentSegmentUrlPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration.property.contentSegmentUrlPrefix"></a>

- *Type:* `string`

---

### MediaTailorDashConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorDashConfiguration: mediatailor.MediaTailorDashConfiguration = { ... }
```

##### `manifestEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---

##### `mpdLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration.property.mpdLocation"></a>

- *Type:* `string`

---

##### `originManifestType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration.property.originManifestType"></a>

- *Type:* `string`

---

### MediaTailorDashConfigurationForPut <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfigurationForPut"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorDashConfigurationForPut: mediatailor.MediaTailorDashConfigurationForPut = { ... }
```

##### `mpdLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfigurationForPut.property.mpdLocation"></a>

- *Type:* `string`

---

##### `originManifestType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDashConfigurationForPut.property.originManifestType"></a>

- *Type:* `string`

---

### MediaTailorDeletePlaybackConfigurationRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorDeletePlaybackConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorDeletePlaybackConfigurationRequest: mediatailor.MediaTailorDeletePlaybackConfigurationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorDeletePlaybackConfigurationRequest.property.name"></a>

- *Type:* `string`

---

### MediaTailorDeletePlaybackConfigurationResponse <a name="aws-cdk-sdk.mediatailor.MediaTailorDeletePlaybackConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorDeletePlaybackConfigurationResponse: mediatailor.MediaTailorDeletePlaybackConfigurationResponse = { ... }
```

### MediaTailorGetPlaybackConfigurationRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorGetPlaybackConfigurationRequest: mediatailor.MediaTailorGetPlaybackConfigurationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest.property.name"></a>

- *Type:* `string`

---

### MediaTailorGetPlaybackConfigurationResponse <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorGetPlaybackConfigurationResponse: mediatailor.MediaTailorGetPlaybackConfigurationResponse = { ... }
```

##### `adDecisionServerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression)

---

##### `bumper`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorBumper`](#aws-cdk-sdk.mediatailor.MediaTailorBumper)

---

##### `cdnConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration)

---

##### `dashConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration)

---

##### `hlsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.hlsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration)

---

##### `livePreRollConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.livePreRollConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration)

---

##### `manifestProcessingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `playbackConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.playbackConfigurationArn"></a>

- *Type:* `string`

---

##### `playbackEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.playbackEndpointPrefix"></a>

- *Type:* `string`

---

##### `sessionInitializationEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.sessionInitializationEndpointPrefix"></a>

- *Type:* `string`

---

##### `slateAdUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationResponse.property.videoContentSourceUrl"></a>

- *Type:* `string`

---

### MediaTailorHlsConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorHlsConfiguration: mediatailor.MediaTailorHlsConfiguration = { ... }
```

##### `manifestEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---

### MediaTailorListPlaybackConfigurationsRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorListPlaybackConfigurationsRequest: mediatailor.MediaTailorListPlaybackConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaTailorListPlaybackConfigurationsResponse <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorListPlaybackConfigurationsResponse: mediatailor.MediaTailorListPlaybackConfigurationsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaTailorListTagsForResourceRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorListTagsForResourceRequest: mediatailor.MediaTailorListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MediaTailorListTagsForResourceResponse <a name="aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorListTagsForResourceResponse: mediatailor.MediaTailorListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaTailorLivePreRollConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorLivePreRollConfiguration: mediatailor.MediaTailorLivePreRollConfiguration = { ... }
```

##### `adDecisionServerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `maxDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration.property.maxDurationSeconds"></a>

- *Type:* `number`

---

### MediaTailorManifestProcessingRules <a name="aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorManifestProcessingRules: mediatailor.MediaTailorManifestProcessingRules = { ... }
```

##### `adMarkerPassthrough`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules.property.adMarkerPassthrough"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorAdMarkerPassthrough`](#aws-cdk-sdk.mediatailor.MediaTailorAdMarkerPassthrough)

---

### MediaTailorPlaybackConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorPlaybackConfiguration: mediatailor.MediaTailorPlaybackConfiguration = { ... }
```

##### `adDecisionServerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression)

---

##### `bumper`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorBumper`](#aws-cdk-sdk.mediatailor.MediaTailorBumper)

---

##### `cdnConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration)

---

##### `dashConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration)

---

##### `hlsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.hlsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration)

---

##### `manifestProcessingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `playbackConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.playbackConfigurationArn"></a>

- *Type:* `string`

---

##### `playbackEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.playbackEndpointPrefix"></a>

- *Type:* `string`

---

##### `sessionInitializationEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.sessionInitializationEndpointPrefix"></a>

- *Type:* `string`

---

##### `slateAdUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration.property.videoContentSourceUrl"></a>

- *Type:* `string`

---

### MediaTailorPutPlaybackConfigurationRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorPutPlaybackConfigurationRequest: mediatailor.MediaTailorPutPlaybackConfigurationRequest = { ... }
```

##### `adDecisionServerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression)

---

##### `bumper`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorBumper`](#aws-cdk-sdk.mediatailor.MediaTailorBumper)

---

##### `cdnConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration)

---

##### `dashConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorDashConfigurationForPut`](#aws-cdk-sdk.mediatailor.MediaTailorDashConfigurationForPut)

---

##### `livePreRollConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.livePreRollConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration)

---

##### `manifestProcessingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `slateAdUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest.property.videoContentSourceUrl"></a>

- *Type:* `string`

---

### MediaTailorPutPlaybackConfigurationResponse <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorPutPlaybackConfigurationResponse: mediatailor.MediaTailorPutPlaybackConfigurationResponse = { ... }
```

##### `adDecisionServerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorAvailSuppression)

---

##### `bumper`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorBumper`](#aws-cdk-sdk.mediatailor.MediaTailorBumper)

---

##### `cdnConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorCdnConfiguration)

---

##### `dashConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorDashConfiguration)

---

##### `hlsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.hlsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorHlsConfiguration)

---

##### `livePreRollConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.livePreRollConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorLivePreRollConfiguration)

---

##### `manifestProcessingRules`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorManifestProcessingRules)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `playbackConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.playbackConfigurationArn"></a>

- *Type:* `string`

---

##### `playbackEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.playbackEndpointPrefix"></a>

- *Type:* `string`

---

##### `sessionInitializationEndpointPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.sessionInitializationEndpointPrefix"></a>

- *Type:* `string`

---

##### `slateAdUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationResponse.property.videoContentSourceUrl"></a>

- *Type:* `string`

---

### MediaTailorTagResourceRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorTagResourceRequest: mediatailor.MediaTailorTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaTailorUntagResourceRequest <a name="aws-cdk-sdk.mediatailor.MediaTailorUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

const mediaTailorUntagResourceRequest: mediatailor.MediaTailorUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### MediaTailorResponsesFetchPlaybackConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adDecisionServerUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression)

---

##### `bumper`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper)

---

##### `cdnConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration)

---

##### `dashConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration)

---

##### `hlsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.hlsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration)

---

##### `livePreRollConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.livePreRollConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration)

---

##### `manifestProcessingRules`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `playbackConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.playbackConfigurationArn"></a>

- *Type:* `string`

---

##### `playbackEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.playbackEndpointPrefix"></a>

- *Type:* `string`

---

##### `sessionInitializationEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.sessionInitializationEndpointPrefix"></a>

- *Type:* `string`

---

##### `slateAdUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfiguration.property.videoContentSourceUrl"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.property.mode"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationAvailSuppression.property.value"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationBumper <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `endUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.property.endUrl"></a>

- *Type:* `string`

---

##### `startUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationBumper.property.startUrl"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adSegmentUrlPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.property.adSegmentUrlPrefix"></a>

- *Type:* `string`

---

##### `contentSegmentUrlPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationCdnConfiguration.property.contentSegmentUrlPrefix"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---

##### `mpdLocation`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.property.mpdLocation"></a>

- *Type:* `string`

---

##### `originManifestType`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationDashConfiguration.property.originManifestType"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationHlsConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---


### MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adDecisionServerUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `maxDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationLivePreRollConfiguration.property.maxDurationSeconds"></a>

- *Type:* `number`

---


### MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adMarkerPassthrough`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRules.property.adMarkerPassthrough"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough)

---


### MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(__scope: Construct, __resources: string[], __input: MediaTailorGetPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorGetPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesFetchPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.property.enabled"></a>

- *Type:* `boolean`

---


### MediaTailorResponsesListPlaybackConfigurations <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesListPlaybackConfigurations(__scope: Construct, __resources: string[], __input: MediaTailorListPlaybackConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest`](#aws-cdk-sdk.mediatailor.MediaTailorListPlaybackConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.property.items"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorPlaybackConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListPlaybackConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### MediaTailorResponsesListTagsForResource <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaTailorListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest`](#aws-cdk-sdk.mediatailor.MediaTailorListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaTailorResponsesPutPlaybackConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adDecisionServerUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `availSuppression`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.availSuppression"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression)

---

##### `bumper`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.bumper"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper)

---

##### `cdnConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.cdnConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration)

---

##### `dashConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.dashConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration)

---

##### `hlsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.hlsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration)

---

##### `livePreRollConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.livePreRollConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration)

---

##### `manifestProcessingRules`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.manifestProcessingRules"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.name"></a>

- *Type:* `string`

---

##### `personalizationThresholdSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.personalizationThresholdSeconds"></a>

- *Type:* `number`

---

##### `playbackConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.playbackConfigurationArn"></a>

- *Type:* `string`

---

##### `playbackEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.playbackEndpointPrefix"></a>

- *Type:* `string`

---

##### `sessionInitializationEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.sessionInitializationEndpointPrefix"></a>

- *Type:* `string`

---

##### `slateAdUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.slateAdUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `transcodeProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.transcodeProfileName"></a>

- *Type:* `string`

---

##### `videoContentSourceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfiguration.property.videoContentSourceUrl"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationAvailSuppression <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.property.mode"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationAvailSuppression.property.value"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationBumper <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `endUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.property.endUrl"></a>

- *Type:* `string`

---

##### `startUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationBumper.property.startUrl"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adSegmentUrlPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.property.adSegmentUrlPrefix"></a>

- *Type:* `string`

---

##### `contentSegmentUrlPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationCdnConfiguration.property.contentSegmentUrlPrefix"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationDashConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---

##### `mpdLocation`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.property.mpdLocation"></a>

- *Type:* `string`

---

##### `originManifestType`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationDashConfiguration.property.originManifestType"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestEndpointPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationHlsConfiguration.property.manifestEndpointPrefix"></a>

- *Type:* `string`

---


### MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adDecisionServerUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.property.adDecisionServerUrl"></a>

- *Type:* `string`

---

##### `maxDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationLivePreRollConfiguration.property.maxDurationSeconds"></a>

- *Type:* `number`

---


### MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `adMarkerPassthrough`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRules.property.adMarkerPassthrough"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough`](#aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough)

---


### MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough"></a>

#### Initializer <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.Initializer"></a>

```typescript
import { mediatailor } from 'aws-cdk-sdk'

new mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough(__scope: Construct, __resources: string[], __input: MediaTailorPutPlaybackConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest`](#aws-cdk-sdk.mediatailor.MediaTailorPutPlaybackConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mediatailor.MediaTailorResponsesPutPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough.property.enabled"></a>

- *Type:* `boolean`

---



