# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaPackageClient <a name="aws-cdk-sdk.mediapackage.MediaPackageClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `configureLogs` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.configureLogs"></a>

```typescript
public configureLogs(input: MediaPackageConfigureLogsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest)

---

##### `createChannel` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.createChannel"></a>

```typescript
public createChannel(input: MediaPackageCreateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest)

---

##### `createHarvestJob` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.createHarvestJob"></a>

```typescript
public createHarvestJob(input: MediaPackageCreateHarvestJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest)

---

##### `createOriginEndpoint` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.createOriginEndpoint"></a>

```typescript
public createOriginEndpoint(input: MediaPackageCreateOriginEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---

##### `deleteChannel` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.deleteChannel"></a>

```typescript
public deleteChannel(input: MediaPackageDeleteChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDeleteChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDeleteChannelRequest)

---

##### `deleteOriginEndpoint` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.deleteOriginEndpoint"></a>

```typescript
public deleteOriginEndpoint(input: MediaPackageDeleteOriginEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDeleteOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDeleteOriginEndpointRequest)

---

##### `describeChannel` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.describeChannel"></a>

```typescript
public describeChannel(input: MediaPackageDescribeChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest)

---

##### `describeHarvestJob` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.describeHarvestJob"></a>

```typescript
public describeHarvestJob(input: MediaPackageDescribeHarvestJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest)

---

##### `describeOriginEndpoint` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.describeOriginEndpoint"></a>

```typescript
public describeOriginEndpoint(input: MediaPackageDescribeOriginEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---

##### `listChannels` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.listChannels"></a>

```typescript
public listChannels(input: MediaPackageListChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest)

---

##### `listHarvestJobs` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.listHarvestJobs"></a>

```typescript
public listHarvestJobs(input: MediaPackageListHarvestJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest)

---

##### `listOriginEndpoints` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.listOriginEndpoints"></a>

```typescript
public listOriginEndpoints(input: MediaPackageListOriginEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaPackageListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest)

---

##### `rotateChannelCredentials` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.rotateChannelCredentials"></a>

```typescript
public rotateChannelCredentials(input: MediaPackageRotateChannelCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest)

---

##### `rotateIngestEndpointCredentials` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.rotateIngestEndpointCredentials"></a>

```typescript
public rotateIngestEndpointCredentials(input: MediaPackageRotateIngestEndpointCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.tagResource"></a>

```typescript
public tagResource(input: MediaPackageTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageTagResourceRequest`](#aws-cdk-sdk.mediapackage.MediaPackageTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.untagResource"></a>

```typescript
public untagResource(input: MediaPackageUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUntagResourceRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUntagResourceRequest)

---

##### `updateChannel` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.updateChannel"></a>

```typescript
public updateChannel(input: MediaPackageUpdateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest)

---

##### `updateOriginEndpoint` <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.updateOriginEndpoint"></a>

```typescript
public updateOriginEndpoint(input: MediaPackageUpdateOriginEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---




## Structs <a name="Structs"></a>

### MediaPackageAuthorization <a name="aws-cdk-sdk.mediapackage.MediaPackageAuthorization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageAuthorization: mediapackage.MediaPackageAuthorization = { ... }
```

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---

### MediaPackageChannel <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageChannel: mediapackage.MediaPackageChannel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageCmafEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCmafEncryption: mediapackage.MediaPackageCmafEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider)

---

##### `keyRotationIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

### MediaPackageCmafPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCmafPackage: mediapackage.MediaPackageCmafPackage = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption)

---

##### `hlsManifests`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsManifest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage.property.segmentPrefix"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageStreamSelection)

---

### MediaPackageCmafPackageCreateOrUpdateParameters <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCmafPackageCreateOrUpdateParameters: mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageCmafEncryption)

---

##### `hlsManifests`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters`](#aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters)[]

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters.property.segmentPrefix"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageStreamSelection)

---

### MediaPackageConfigureLogsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageConfigureLogsRequest: mediapackage.MediaPackageConfigureLogsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest.property.id"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

### MediaPackageConfigureLogsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageConfigureLogsResponse: mediapackage.MediaPackageConfigureLogsResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageCreateChannelRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateChannelRequest: mediapackage.MediaPackageCreateChannelRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest.property.id"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageCreateChannelResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateChannelResponse: mediapackage.MediaPackageCreateChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageCreateHarvestJobRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateHarvestJobRequest: mediapackage.MediaPackageCreateHarvestJobRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageS3Destination)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest.property.startTime"></a>

- *Type:* `string`

---

### MediaPackageCreateHarvestJobResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateHarvestJobResponse: mediapackage.MediaPackageCreateHarvestJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.channelId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageS3Destination)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobResponse.property.status"></a>

- *Type:* `string`

---

### MediaPackageCreateOriginEndpointRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateOriginEndpointRequest: mediapackage.MediaPackageCreateOriginEndpointRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.channelId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.id"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest.property.whitelist"></a>

- *Type:* `string`[]

---

### MediaPackageCreateOriginEndpointResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageCreateOriginEndpointResponse: mediapackage.MediaPackageCreateOriginEndpointResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointResponse.property.whitelist"></a>

- *Type:* `string`[]

---

### MediaPackageDashEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageDashEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDashEncryption: mediapackage.MediaPackageDashEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider)

---

##### `keyRotationIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

### MediaPackageDashPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDashPackage: mediapackage.MediaPackageDashPackage = { ... }
```

##### `adsOnDeliveryRestrictions`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageDashEncryption)

---

##### `manifestLayout`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.manifestLayout"></a>

- *Type:* `string`

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `minBufferTimeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.minBufferTimeSeconds"></a>

- *Type:* `number`

---

##### `minUpdatePeriodSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.minUpdatePeriodSeconds"></a>

- *Type:* `number`

---

##### `periodTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.profile"></a>

- *Type:* `string`

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageStreamSelection)

---

##### `suggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.suggestedPresentationDelaySeconds"></a>

- *Type:* `number`

---

##### `utcTiming`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.utcTiming"></a>

- *Type:* `string`

---

##### `utcTimingUri`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDashPackage.property.utcTimingUri"></a>

- *Type:* `string`

---

### MediaPackageDeleteChannelRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDeleteChannelRequest: mediapackage.MediaPackageDeleteChannelRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteChannelRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageDeleteChannelResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDeleteChannelResponse: mediapackage.MediaPackageDeleteChannelResponse = { ... }
```

### MediaPackageDeleteOriginEndpointRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteOriginEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDeleteOriginEndpointRequest: mediapackage.MediaPackageDeleteOriginEndpointRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteOriginEndpointRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageDeleteOriginEndpointResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageDeleteOriginEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDeleteOriginEndpointResponse: mediapackage.MediaPackageDeleteOriginEndpointResponse = { ... }
```

### MediaPackageDescribeChannelRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeChannelRequest: mediapackage.MediaPackageDescribeChannelRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageDescribeChannelResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeChannelResponse: mediapackage.MediaPackageDescribeChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageDescribeHarvestJobRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeHarvestJobRequest: mediapackage.MediaPackageDescribeHarvestJobRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageDescribeHarvestJobResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeHarvestJobResponse: mediapackage.MediaPackageDescribeHarvestJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.channelId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageS3Destination)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobResponse.property.status"></a>

- *Type:* `string`

---

### MediaPackageDescribeOriginEndpointRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeOriginEndpointRequest: mediapackage.MediaPackageDescribeOriginEndpointRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageDescribeOriginEndpointResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageDescribeOriginEndpointResponse: mediapackage.MediaPackageDescribeOriginEndpointResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointResponse.property.whitelist"></a>

- *Type:* `string`[]

---

### MediaPackageEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageEgressAccessLogs: mediapackage.MediaPackageEgressAccessLogs = { ... }
```

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---

### MediaPackageHarvestJob <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHarvestJob: mediapackage.MediaPackageHarvestJob = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.arn"></a>

- *Type:* `string`

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.channelId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.createdAt"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageS3Destination)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHarvestJob.property.status"></a>

- *Type:* `string`

---

### MediaPackageHlsEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHlsEncryption: mediapackage.MediaPackageHlsEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider)

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `keyRotationIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `repeatExtXKey`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption.property.repeatExtXKey"></a>

- *Type:* `boolean`

---

### MediaPackageHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsIngest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHlsIngest: mediapackage.MediaPackageHlsIngest = { ... }
```

##### `ingestEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---

### MediaPackageHlsManifest <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHlsManifest: mediapackage.MediaPackageHlsManifest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.id"></a>

- *Type:* `string`

---

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.adMarkers"></a>

- *Type:* `string`

---

##### `includeIframeOnlyStream`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.manifestName"></a>

- *Type:* `string`

---

##### `playlistType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifest.property.url"></a>

- *Type:* `string`

---

### MediaPackageHlsManifestCreateOrUpdateParameters <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHlsManifestCreateOrUpdateParameters: mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.id"></a>

- *Type:* `string`

---

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.adMarkers"></a>

- *Type:* `string`

---

##### `adsOnDeliveryRestrictions`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `includeIframeOnlyStream`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.manifestName"></a>

- *Type:* `string`

---

##### `playlistType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsManifestCreateOrUpdateParameters.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

### MediaPackageHlsPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageHlsPackage: mediapackage.MediaPackageHlsPackage = { ... }
```

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.adMarkers"></a>

- *Type:* `string`

---

##### `adsOnDeliveryRestrictions`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageHlsEncryption)

---

##### `includeIframeOnlyStream`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `playlistType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageStreamSelection)

---

##### `useAudioRenditionGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---

### MediaPackageIngestEndpoint <a name="aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageIngestEndpoint: mediapackage.MediaPackageIngestEndpoint = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint.property.id"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint.property.password"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint.property.url"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint.property.username"></a>

- *Type:* `string`

---

### MediaPackageIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageIngressAccessLogs: mediapackage.MediaPackageIngressAccessLogs = { ... }
```

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---

### MediaPackageListChannelsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListChannelsRequest: mediapackage.MediaPackageListChannelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageListChannelsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListChannelsResponse: mediapackage.MediaPackageListChannelsResponse = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageChannel`](#aws-cdk-sdk.mediapackage.MediaPackageChannel)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListChannelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageListHarvestJobsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListHarvestJobsRequest: mediapackage.MediaPackageListHarvestJobsRequest = { ... }
```

##### `includeChannelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest.property.includeChannelId"></a>

- *Type:* `string`

---

##### `includeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest.property.includeStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageListHarvestJobsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListHarvestJobsResponse: mediapackage.MediaPackageListHarvestJobsResponse = { ... }
```

##### `harvestJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsResponse.property.harvestJobs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHarvestJob`](#aws-cdk-sdk.mediapackage.MediaPackageHarvestJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageListOriginEndpointsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListOriginEndpointsRequest: mediapackage.MediaPackageListOriginEndpointsRequest = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest.property.channelId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaPackageListOriginEndpointsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListOriginEndpointsResponse: mediapackage.MediaPackageListOriginEndpointsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `originEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsResponse.property.originEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint)[]

---

### MediaPackageListTagsForResourceRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListTagsForResourceRequest: mediapackage.MediaPackageListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MediaPackageListTagsForResourceResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageListTagsForResourceResponse: mediapackage.MediaPackageListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageMssEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageMssEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageMssEncryption: mediapackage.MediaPackageMssEncryption = { ... }
```

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageMssEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider)

---

### MediaPackageMssPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageMssPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageMssPackage: mediapackage.MediaPackageMssPackage = { ... }
```

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageMssEncryption)

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageMssPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageMssPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageStreamSelection)

---

### MediaPackageOriginEndpoint <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageOriginEndpoint: mediapackage.MediaPackageOriginEndpoint = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint.property.whitelist"></a>

- *Type:* `string`[]

---

### MediaPackageRotateChannelCredentialsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageRotateChannelCredentialsRequest: mediapackage.MediaPackageRotateChannelCredentialsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest.property.id"></a>

- *Type:* `string`

---

### MediaPackageRotateChannelCredentialsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageRotateChannelCredentialsResponse: mediapackage.MediaPackageRotateChannelCredentialsResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageRotateIngestEndpointCredentialsRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageRotateIngestEndpointCredentialsRequest: mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest.property.id"></a>

- *Type:* `string`

---

##### `ingestEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest.property.ingestEndpointId"></a>

- *Type:* `string`

---

### MediaPackageRotateIngestEndpointCredentialsResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageRotateIngestEndpointCredentialsResponse: mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageS3Destination <a name="aws-cdk-sdk.mediapackage.MediaPackageS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageS3Destination: mediapackage.MediaPackageS3Destination = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `manifestKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageS3Destination.property.manifestKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageS3Destination.property.roleArn"></a>

- *Type:* `string`

---

### MediaPackageSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageSpekeKeyProvider: mediapackage.MediaPackageSpekeKeyProvider = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

### MediaPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageStreamSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageStreamSelection: mediapackage.MediaPackageStreamSelection = { ... }
```

##### `maxVideoBitsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---

### MediaPackageTagResourceRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageTagResourceRequest: mediapackage.MediaPackageTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageUntagResourceRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageUntagResourceRequest: mediapackage.MediaPackageUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MediaPackageUpdateChannelRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageUpdateChannelRequest: mediapackage.MediaPackageUpdateChannelRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest.property.id"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest.property.description"></a>

- *Type:* `string`

---

### MediaPackageUpdateChannelResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageUpdateChannelResponse: mediapackage.MediaPackageUpdateChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageEgressAccessLogs)

---

##### `hlsIngest`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsIngest)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageIngressAccessLogs)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaPackageUpdateOriginEndpointRequest <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageUpdateOriginEndpointRequest: mediapackage.MediaPackageUpdateOriginEndpointRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.id"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackageCreateOrUpdateParameters)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest.property.whitelist"></a>

- *Type:* `string`[]

---

### MediaPackageUpdateOriginEndpointResponse <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

const mediaPackageUpdateOriginEndpointResponse: mediapackage.MediaPackageUpdateOriginEndpointResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageAuthorization)

---

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageCmafPackage)

---

##### `dashPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageDashPackage)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageHlsPackage)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageMssPackage)

---

##### `origination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Optional</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointResponse.property.whitelist"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### MediaPackageResponsesConfigureLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesConfigureLogs(__scope: Construct, __resources: string[], __input: MediaPackageConfigureLogsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogs.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesConfigureLogsEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageConfigureLogsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesConfigureLogsHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesConfigureLogsHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageConfigureLogsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesConfigureLogsIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageConfigureLogsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageConfigureLogsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesConfigureLogsIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateChannel <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateChannel(__scope: Construct, __resources: string[], __input: MediaPackageCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesCreateChannelEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateChannelHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateChannelHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesCreateChannelIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateChannelIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateHarvestJob <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateHarvestJob(__scope: Construct, __resources: string[], __input: MediaPackageCreateHarvestJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.arn"></a>

- *Type:* `string`

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.channelId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.createdAt"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJob.property.status"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateHarvestJobS3Destination <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination(__scope: Construct, __resources: string[], __input: MediaPackageCreateHarvestJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateHarvestJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `manifestKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.property.manifestKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateHarvestJobS3Destination.property.roleArn"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpoint <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpoint(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization)

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage)

---

##### `dashPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage)

---

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpoint.property.whitelist"></a>

- *Type:* `string`[]

---


### MediaPackageResponsesCreateOriginEndpointAuthorization <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointCmafPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsManifest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.property.segmentPrefix"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection)

---


### MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointCmafPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointDashPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption)

---

##### `manifestLayout`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.manifestLayout"></a>

- *Type:* `string`

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.minBufferTimeSeconds"></a>

- *Type:* `number`

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.minUpdatePeriodSeconds"></a>

- *Type:* `number`

---

##### `periodTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.profile"></a>

- *Type:* `string`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection)

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.suggestedPresentationDelaySeconds"></a>

- *Type:* `number`

---

##### `utcTiming`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.utcTiming"></a>

- *Type:* `string`

---

##### `utcTimingUri`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackage.property.utcTimingUri"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointDashPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointDashPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointHlsPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adMarkers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.adMarkers"></a>

- *Type:* `string`

---

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption)

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `playlistType`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection)

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---


### MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `repeatExtXKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.property.repeatExtXKey"></a>

- *Type:* `boolean`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointHlsPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointMssPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption)

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection)

---


### MediaPackageResponsesCreateOriginEndpointMssPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageCreateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageCreateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesCreateOriginEndpointMssPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeChannel <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeChannel(__scope: Construct, __resources: string[], __input: MediaPackageDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesDescribeChannelEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeChannelHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeChannelHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesDescribeChannelIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeChannelIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeHarvestJob <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeHarvestJob(__scope: Construct, __resources: string[], __input: MediaPackageDescribeHarvestJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.arn"></a>

- *Type:* `string`

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.channelId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.createdAt"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.endTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.id"></a>

- *Type:* `string`

---

##### `originEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.originEndpointId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJob.property.status"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeHarvestJobS3Destination <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination(__scope: Construct, __resources: string[], __input: MediaPackageDescribeHarvestJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeHarvestJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `manifestKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.property.manifestKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeHarvestJobS3Destination.property.roleArn"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpoint <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpoint(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization)

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage)

---

##### `dashPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage)

---

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpoint.property.whitelist"></a>

- *Type:* `string`[]

---


### MediaPackageResponsesDescribeOriginEndpointAuthorization <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointCmafPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsManifest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.property.segmentPrefix"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection)

---


### MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointCmafPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointDashPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption)

---

##### `manifestLayout`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.manifestLayout"></a>

- *Type:* `string`

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.minBufferTimeSeconds"></a>

- *Type:* `number`

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.minUpdatePeriodSeconds"></a>

- *Type:* `number`

---

##### `periodTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.profile"></a>

- *Type:* `string`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection)

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.suggestedPresentationDelaySeconds"></a>

- *Type:* `number`

---

##### `utcTiming`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.utcTiming"></a>

- *Type:* `string`

---

##### `utcTimingUri`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackage.property.utcTimingUri"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointDashPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointHlsPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adMarkers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.adMarkers"></a>

- *Type:* `string`

---

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption)

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `playlistType`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection)

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---


### MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `repeatExtXKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.property.repeatExtXKey"></a>

- *Type:* `boolean`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointHlsPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointMssPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption)

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection)

---


### MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageDescribeOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageDescribeOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesDescribeOriginEndpointMssPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesListChannels <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesListChannels(__scope: Construct, __resources: string[], __input: MediaPackageListChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.property.channels"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageChannel`](#aws-cdk-sdk.mediapackage.MediaPackageChannel)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListChannels.property.nextToken"></a>

- *Type:* `string`

---


### MediaPackageResponsesListHarvestJobs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesListHarvestJobs(__scope: Construct, __resources: string[], __input: MediaPackageListHarvestJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListHarvestJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `harvestJobs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.property.harvestJobs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHarvestJob`](#aws-cdk-sdk.mediapackage.MediaPackageHarvestJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListHarvestJobs.property.nextToken"></a>

- *Type:* `string`

---


### MediaPackageResponsesListOriginEndpoints <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesListOriginEndpoints(__scope: Construct, __resources: string[], __input: MediaPackageListOriginEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListOriginEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.property.nextToken"></a>

- *Type:* `string`

---

##### `originEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListOriginEndpoints.property.originEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageOriginEndpoint)[]

---


### MediaPackageResponsesListTagsForResource <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaPackageListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest`](#aws-cdk-sdk.mediapackage.MediaPackageListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesRotateChannelCredentials <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateChannelCredentials(__scope: Construct, __resources: string[], __input: MediaPackageRotateChannelCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentials.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageRotateChannelCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesRotateChannelCredentialsHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageRotateChannelCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageRotateChannelCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateChannelCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateChannelCredentialsIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesRotateIngestEndpointCredentials <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials(__scope: Construct, __resources: string[], __input: MediaPackageRotateIngestEndpointCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentials.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageRotateIngestEndpointCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageRotateIngestEndpointCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageRotateIngestEndpointCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest`](#aws-cdk-sdk.mediapackage.MediaPackageRotateIngestEndpointCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesRotateIngestEndpointCredentialsIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateChannel <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateChannel(__scope: Construct, __resources: string[], __input: MediaPackageUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.description"></a>

- *Type:* `string`

---

##### `egressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.egressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs)

---

##### `hlsIngest`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.hlsIngest"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.id"></a>

- *Type:* `string`

---

##### `ingressAccessLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.ingressAccessLogs"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaPackageResponsesUpdateChannelEgressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelEgressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateChannelHlsIngest <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateChannelHlsIngest(__scope: Construct, __resources: string[], __input: MediaPackageUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelHlsIngest.property.ingestEndpoints"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint`](#aws-cdk-sdk.mediapackage.MediaPackageIngestEndpoint)[]

---


### MediaPackageResponsesUpdateChannelIngressAccessLogs <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs(__scope: Construct, __resources: string[], __input: MediaPackageUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateChannelIngressAccessLogs.property.logGroupName"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpoint <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpoint(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `authorization`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.authorization"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization)

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.channelId"></a>

- *Type:* `string`

---

##### `cmafPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.cmafPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage)

---

##### `dashPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.dashPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.description"></a>

- *Type:* `string`

---

##### `hlsPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.hlsPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.id"></a>

- *Type:* `string`

---

##### `manifestName`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.manifestName"></a>

- *Type:* `string`

---

##### `mssPackage`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.mssPackage"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage)

---

##### `origination`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.origination"></a>

- *Type:* `string`

---

##### `startoverWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.startoverWindowSeconds"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.timeDelaySeconds"></a>

- *Type:* `number`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.url"></a>

- *Type:* `string`

---

##### `whitelist`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpoint.property.whitelist"></a>

- *Type:* `string`[]

---


### MediaPackageResponsesUpdateOriginEndpointAuthorization <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.property.cdnIdentifierSecret"></a>

- *Type:* `string`

---

##### `secretsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointAuthorization.property.secretsRoleArn"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointCmafPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption)

---

##### `hlsManifests`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.property.hlsManifests"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageHlsManifest`](#aws-cdk-sdk.mediapackage.MediaPackageHlsManifest)[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.property.segmentPrefix"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection)

---


### MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointCmafPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointDashPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption)

---

##### `manifestLayout`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.manifestLayout"></a>

- *Type:* `string`

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.minBufferTimeSeconds"></a>

- *Type:* `number`

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.minUpdatePeriodSeconds"></a>

- *Type:* `number`

---

##### `periodTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.periodTriggers"></a>

- *Type:* `string`[]

---

##### `profile`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.profile"></a>

- *Type:* `string`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.segmentTemplateFormat"></a>

- *Type:* `string`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection)

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.suggestedPresentationDelaySeconds"></a>

- *Type:* `number`

---

##### `utcTiming`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.utcTiming"></a>

- *Type:* `string`

---

##### `utcTimingUri`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackage.property.utcTimingUri"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointDashPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointHlsPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `adMarkers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.adMarkers"></a>

- *Type:* `string`

---

##### `adsOnDeliveryRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.adsOnDeliveryRestrictions"></a>

- *Type:* `string`

---

##### `adTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.adTriggers"></a>

- *Type:* `string`[]

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption)

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.includeIframeOnlyStream"></a>

- *Type:* `boolean`

---

##### `playlistType`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.playlistType"></a>

- *Type:* `string`

---

##### `playlistWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.playlistWindowSeconds"></a>

- *Type:* `number`

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.programDateTimeIntervalSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection)

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackage.property.useAudioRenditionGroup"></a>

- *Type:* `boolean`

---


### MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `encryptionMethod`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.property.encryptionMethod"></a>

- *Type:* `string`

---

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.property.keyRotationIntervalSeconds"></a>

- *Type:* `number`

---

##### `repeatExtXKey`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.property.repeatExtXKey"></a>

- *Type:* `boolean`

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointHlsPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointMssPackage <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption)

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.property.manifestWindowSeconds"></a>

- *Type:* `number`

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.property.segmentDurationSeconds"></a>

- *Type:* `number`

---

##### `streamSelection`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackage.property.streamSelection"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection)

---


### MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `spekeKeyProvider`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryption.property.spekeKeyProvider"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider`](#aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider)

---


### MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.certificateArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

- *Type:* `string`

---

##### `systemIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageEncryptionSpekeKeyProvider.property.url"></a>

- *Type:* `string`

---


### MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection"></a>

#### Initializer <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.Initializer"></a>

```typescript
import { mediapackage } from 'aws-cdk-sdk'

new mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection(__scope: Construct, __resources: string[], __input: MediaPackageUpdateOriginEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest`](#aws-cdk-sdk.mediapackage.MediaPackageUpdateOriginEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.property.maxVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.property.minVideoBitsPerSecond"></a>

- *Type:* `number`

---

##### `streamOrder`<sup>Required</sup> <a name="aws-cdk-sdk.mediapackage.MediaPackageResponsesUpdateOriginEndpointMssPackageStreamSelection.property.streamOrder"></a>

- *Type:* `string`

---



