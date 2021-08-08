# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SignerClient <a name="aws-cdk-sdk.signer.SignerClient"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerClient.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addProfilePermission` <a name="aws-cdk-sdk.signer.SignerClient.addProfilePermission"></a>

```typescript
public addProfilePermission(input: SignerAddProfilePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerAddProfilePermissionRequest`](#aws-cdk-sdk.signer.SignerAddProfilePermissionRequest)

---

##### `cancelSigningProfile` <a name="aws-cdk-sdk.signer.SignerClient.cancelSigningProfile"></a>

```typescript
public cancelSigningProfile(input: SignerCancelSigningProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerCancelSigningProfileRequest`](#aws-cdk-sdk.signer.SignerCancelSigningProfileRequest)

---

##### `describeSigningJob` <a name="aws-cdk-sdk.signer.SignerClient.describeSigningJob"></a>

```typescript
public describeSigningJob(input: SignerDescribeSigningJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---

##### `fetchSigningPlatform` <a name="aws-cdk-sdk.signer.SignerClient.fetchSigningPlatform"></a>

```typescript
public fetchSigningPlatform(input: SignerGetSigningPlatformRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---

##### `fetchSigningProfile` <a name="aws-cdk-sdk.signer.SignerClient.fetchSigningProfile"></a>

```typescript
public fetchSigningProfile(input: SignerGetSigningProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---

##### `listProfilePermissions` <a name="aws-cdk-sdk.signer.SignerClient.listProfilePermissions"></a>

```typescript
public listProfilePermissions(input: SignerListProfilePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListProfilePermissionsRequest`](#aws-cdk-sdk.signer.SignerListProfilePermissionsRequest)

---

##### `listSigningJobs` <a name="aws-cdk-sdk.signer.SignerClient.listSigningJobs"></a>

```typescript
public listSigningJobs(input: SignerListSigningJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningJobsRequest`](#aws-cdk-sdk.signer.SignerListSigningJobsRequest)

---

##### `listSigningPlatforms` <a name="aws-cdk-sdk.signer.SignerClient.listSigningPlatforms"></a>

```typescript
public listSigningPlatforms(input: SignerListSigningPlatformsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningPlatformsRequest`](#aws-cdk-sdk.signer.SignerListSigningPlatformsRequest)

---

##### `listSigningProfiles` <a name="aws-cdk-sdk.signer.SignerClient.listSigningProfiles"></a>

```typescript
public listSigningProfiles(input: SignerListSigningProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningProfilesRequest`](#aws-cdk-sdk.signer.SignerListSigningProfilesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.signer.SignerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SignerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListTagsForResourceRequest`](#aws-cdk-sdk.signer.SignerListTagsForResourceRequest)

---

##### `putSigningProfile` <a name="aws-cdk-sdk.signer.SignerClient.putSigningProfile"></a>

```typescript
public putSigningProfile(input: SignerPutSigningProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerPutSigningProfileRequest`](#aws-cdk-sdk.signer.SignerPutSigningProfileRequest)

---

##### `removeProfilePermission` <a name="aws-cdk-sdk.signer.SignerClient.removeProfilePermission"></a>

```typescript
public removeProfilePermission(input: SignerRemoveProfilePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest`](#aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest)

---

##### `revokeSignature` <a name="aws-cdk-sdk.signer.SignerClient.revokeSignature"></a>

```typescript
public revokeSignature(input: SignerRevokeSignatureRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerRevokeSignatureRequest`](#aws-cdk-sdk.signer.SignerRevokeSignatureRequest)

---

##### `revokeSigningProfile` <a name="aws-cdk-sdk.signer.SignerClient.revokeSigningProfile"></a>

```typescript
public revokeSigningProfile(input: SignerRevokeSigningProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest`](#aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest)

---

##### `startSigningJob` <a name="aws-cdk-sdk.signer.SignerClient.startSigningJob"></a>

```typescript
public startSigningJob(input: SignerStartSigningJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerStartSigningJobRequest`](#aws-cdk-sdk.signer.SignerStartSigningJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.signer.SignerClient.tagResource"></a>

```typescript
public tagResource(input: SignerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerTagResourceRequest`](#aws-cdk-sdk.signer.SignerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.signer.SignerClient.untagResource"></a>

```typescript
public untagResource(input: SignerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerUntagResourceRequest`](#aws-cdk-sdk.signer.SignerUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### SignerAddProfilePermissionRequest <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerAddProfilePermissionRequest: signer.SignerAddProfilePermissionRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.action"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.profileName"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.statementId"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.profileVersion"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

### SignerAddProfilePermissionResponse <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerAddProfilePermissionResponse: signer.SignerAddProfilePermissionResponse = { ... }
```

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerAddProfilePermissionResponse.property.revisionId"></a>

- *Type:* `string`

---

### SignerCancelSigningProfileRequest <a name="aws-cdk-sdk.signer.SignerCancelSigningProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerCancelSigningProfileRequest: signer.SignerCancelSigningProfileRequest = { ... }
```

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerCancelSigningProfileRequest.property.profileName"></a>

- *Type:* `string`

---

### SignerDescribeSigningJobRequest <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerDescribeSigningJobRequest: signer.SignerDescribeSigningJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobRequest.property.jobId"></a>

- *Type:* `string`

---

### SignerDescribeSigningJobResponse <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerDescribeSigningJobResponse: signer.SignerDescribeSigningJobResponse = { ... }
```

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobInvoker`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.jobInvoker"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.jobOwner"></a>

- *Type:* `string`

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningPlatformOverrides`](#aws-cdk-sdk.signer.SignerSigningPlatformOverrides)

---

##### `platformDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.profileVersion"></a>

- *Type:* `string`

---

##### `requestedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.requestedBy"></a>

- *Type:* `string`

---

##### `revocationRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.revocationRecord"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningJobRevocationRecord`](#aws-cdk-sdk.signer.SignerSigningJobRevocationRecord)

---

##### `signatureExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.signatureExpiresAt"></a>

- *Type:* `string`

---

##### `signedObject`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.signedObject"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSignedObject`](#aws-cdk-sdk.signer.SignerSignedObject)

---

##### `signingMaterial`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningMaterial`](#aws-cdk-sdk.signer.SignerSigningMaterial)

---

##### `signingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.source"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSource`](#aws-cdk-sdk.signer.SignerSource)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDescribeSigningJobResponse.property.statusReason"></a>

- *Type:* `string`

---

### SignerDestination <a name="aws-cdk-sdk.signer.SignerDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerDestination: signer.SignerDestination = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerDestination.property.s3"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerS3Destination`](#aws-cdk-sdk.signer.SignerS3Destination)

---

### SignerEncryptionAlgorithmOptions <a name="aws-cdk-sdk.signer.SignerEncryptionAlgorithmOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerEncryptionAlgorithmOptions: signer.SignerEncryptionAlgorithmOptions = { ... }
```

##### `allowedValues`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerEncryptionAlgorithmOptions.property.allowedValues"></a>

- *Type:* `string`[]

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerEncryptionAlgorithmOptions.property.defaultValue"></a>

- *Type:* `string`

---

### SignerGetSigningPlatformRequest <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerGetSigningPlatformRequest: signer.SignerGetSigningPlatformRequest = { ... }
```

##### `platformId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformRequest.property.platformId"></a>

- *Type:* `string`

---

### SignerGetSigningPlatformResponse <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerGetSigningPlatformResponse: signer.SignerGetSigningPlatformResponse = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.category"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.displayName"></a>

- *Type:* `string`

---

##### `maxSizeInMB`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.maxSizeInMB"></a>

- *Type:* `number`

---

##### `partner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.partner"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.platformId"></a>

- *Type:* `string`

---

##### `revocationSupported`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.revocationSupported"></a>

- *Type:* `boolean`

---

##### `signingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningConfiguration`](#aws-cdk-sdk.signer.SignerSigningConfiguration)

---

##### `signingImageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.signingImageFormat"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningImageFormat`](#aws-cdk-sdk.signer.SignerSigningImageFormat)

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningPlatformResponse.property.target"></a>

- *Type:* `string`

---

### SignerGetSigningProfileRequest <a name="aws-cdk-sdk.signer.SignerGetSigningProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerGetSigningProfileRequest: signer.SignerGetSigningProfileRequest = { ... }
```

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileRequest.property.profileName"></a>

- *Type:* `string`

---

##### `profileOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileRequest.property.profileOwner"></a>

- *Type:* `string`

---

### SignerGetSigningProfileResponse <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerGetSigningProfileResponse: signer.SignerGetSigningProfileResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.arn"></a>

- *Type:* `string`

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningPlatformOverrides`](#aws-cdk-sdk.signer.SignerSigningPlatformOverrides)

---

##### `platformDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.profileVersion"></a>

- *Type:* `string`

---

##### `profileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.profileVersionArn"></a>

- *Type:* `string`

---

##### `revocationRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.revocationRecord"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord`](#aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord)

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.signatureValidityPeriod"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSignatureValidityPeriod`](#aws-cdk-sdk.signer.SignerSignatureValidityPeriod)

---

##### `signingMaterial`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningMaterial`](#aws-cdk-sdk.signer.SignerSigningMaterial)

---

##### `signingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerGetSigningProfileResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SignerHashAlgorithmOptions <a name="aws-cdk-sdk.signer.SignerHashAlgorithmOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerHashAlgorithmOptions: signer.SignerHashAlgorithmOptions = { ... }
```

##### `allowedValues`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerHashAlgorithmOptions.property.allowedValues"></a>

- *Type:* `string`[]

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerHashAlgorithmOptions.property.defaultValue"></a>

- *Type:* `string`

---

### SignerListProfilePermissionsRequest <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListProfilePermissionsRequest: signer.SignerListProfilePermissionsRequest = { ... }
```

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsRequest.property.profileName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SignerListProfilePermissionsResponse <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListProfilePermissionsResponse: signer.SignerListProfilePermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerPermission`](#aws-cdk-sdk.signer.SignerPermission)[]

---

##### `policySizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsResponse.property.policySizeBytes"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListProfilePermissionsResponse.property.revisionId"></a>

- *Type:* `string`

---

### SignerListSigningJobsRequest <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningJobsRequest: signer.SignerListSigningJobsRequest = { ... }
```

##### `isRevoked`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.isRevoked"></a>

- *Type:* `boolean`

---

##### `jobInvoker`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.jobInvoker"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.platformId"></a>

- *Type:* `string`

---

##### `requestedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.requestedBy"></a>

- *Type:* `string`

---

##### `signatureExpiresAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.signatureExpiresAfter"></a>

- *Type:* `string`

---

##### `signatureExpiresBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.signatureExpiresBefore"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsRequest.property.status"></a>

- *Type:* `string`

---

### SignerListSigningJobsResponse <a name="aws-cdk-sdk.signer.SignerListSigningJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningJobsResponse: signer.SignerListSigningJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningJob`](#aws-cdk-sdk.signer.SignerSigningJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SignerListSigningPlatformsRequest <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningPlatformsRequest: signer.SignerListSigningPlatformsRequest = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest.property.category"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `partner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest.property.partner"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsRequest.property.target"></a>

- *Type:* `string`

---

### SignerListSigningPlatformsResponse <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningPlatformsResponse: signer.SignerListSigningPlatformsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `platforms`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningPlatformsResponse.property.platforms"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningPlatform`](#aws-cdk-sdk.signer.SignerSigningPlatform)[]

---

### SignerListSigningProfilesRequest <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningProfilesRequest: signer.SignerListSigningProfilesRequest = { ... }
```

##### `includeCanceled`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest.property.includeCanceled"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest.property.platformId"></a>

- *Type:* `string`

---

##### `statuses`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesRequest.property.statuses"></a>

- *Type:* `string`[]

---

### SignerListSigningProfilesResponse <a name="aws-cdk-sdk.signer.SignerListSigningProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListSigningProfilesResponse: signer.SignerListSigningProfilesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `profiles`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListSigningProfilesResponse.property.profiles"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningProfile`](#aws-cdk-sdk.signer.SignerSigningProfile)[]

---

### SignerListTagsForResourceRequest <a name="aws-cdk-sdk.signer.SignerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListTagsForResourceRequest: signer.SignerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SignerListTagsForResourceResponse <a name="aws-cdk-sdk.signer.SignerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerListTagsForResourceResponse: signer.SignerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SignerPermission <a name="aws-cdk-sdk.signer.SignerPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerPermission: signer.SignerPermission = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPermission.property.action"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPermission.property.principal"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPermission.property.profileVersion"></a>

- *Type:* `string`

---

##### `statementId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPermission.property.statementId"></a>

- *Type:* `string`

---

### SignerPutSigningProfileRequest <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerPutSigningProfileRequest: signer.SignerPutSigningProfileRequest = { ... }
```

##### `platformId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.profileName"></a>

- *Type:* `string`

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningPlatformOverrides`](#aws-cdk-sdk.signer.SignerSigningPlatformOverrides)

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.signatureValidityPeriod"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSignatureValidityPeriod`](#aws-cdk-sdk.signer.SignerSignatureValidityPeriod)

---

##### `signingMaterial`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningMaterial`](#aws-cdk-sdk.signer.SignerSigningMaterial)

---

##### `signingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SignerPutSigningProfileResponse <a name="aws-cdk-sdk.signer.SignerPutSigningProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerPutSigningProfileResponse: signer.SignerPutSigningProfileResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileResponse.property.arn"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileResponse.property.profileVersion"></a>

- *Type:* `string`

---

##### `profileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerPutSigningProfileResponse.property.profileVersionArn"></a>

- *Type:* `string`

---

### SignerRemoveProfilePermissionRequest <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerRemoveProfilePermissionRequest: signer.SignerRemoveProfilePermissionRequest = { ... }
```

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest.property.profileName"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `statementId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest.property.statementId"></a>

- *Type:* `string`

---

### SignerRemoveProfilePermissionResponse <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerRemoveProfilePermissionResponse: signer.SignerRemoveProfilePermissionResponse = { ... }
```

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerRemoveProfilePermissionResponse.property.revisionId"></a>

- *Type:* `string`

---

### SignerRevokeSignatureRequest <a name="aws-cdk-sdk.signer.SignerRevokeSignatureRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerRevokeSignatureRequest: signer.SignerRevokeSignatureRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSignatureRequest.property.jobId"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSignatureRequest.property.reason"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSignatureRequest.property.jobOwner"></a>

- *Type:* `string`

---

### SignerRevokeSigningProfileRequest <a name="aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerRevokeSigningProfileRequest: signer.SignerRevokeSigningProfileRequest = { ... }
```

##### `effectiveTime`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest.property.effectiveTime"></a>

- *Type:* `string`

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest.property.profileVersion"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerRevokeSigningProfileRequest.property.reason"></a>

- *Type:* `string`

---

### SignerS3Destination <a name="aws-cdk-sdk.signer.SignerS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerS3Destination: signer.SignerS3Destination = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerS3Destination.property.prefix"></a>

- *Type:* `string`

---

### SignerS3SignedObject <a name="aws-cdk-sdk.signer.SignerS3SignedObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerS3SignedObject: signer.SignerS3SignedObject = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerS3SignedObject.property.bucketName"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerS3SignedObject.property.key"></a>

- *Type:* `string`

---

### SignerS3Source <a name="aws-cdk-sdk.signer.SignerS3Source"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerS3Source: signer.SignerS3Source = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerS3Source.property.bucketName"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerS3Source.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerS3Source.property.version"></a>

- *Type:* `string`

---

### SignerSignatureValidityPeriod <a name="aws-cdk-sdk.signer.SignerSignatureValidityPeriod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSignatureValidityPeriod: signer.SignerSignatureValidityPeriod = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSignatureValidityPeriod.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSignatureValidityPeriod.property.value"></a>

- *Type:* `number`

---

### SignerSignedObject <a name="aws-cdk-sdk.signer.SignerSignedObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSignedObject: signer.SignerSignedObject = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSignedObject.property.s3"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerS3SignedObject`](#aws-cdk-sdk.signer.SignerS3SignedObject)

---

### SignerSigningConfiguration <a name="aws-cdk-sdk.signer.SignerSigningConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningConfiguration: signer.SignerSigningConfiguration = { ... }
```

##### `encryptionAlgorithmOptions`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerSigningConfiguration.property.encryptionAlgorithmOptions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerEncryptionAlgorithmOptions`](#aws-cdk-sdk.signer.SignerEncryptionAlgorithmOptions)

---

##### `hashAlgorithmOptions`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerSigningConfiguration.property.hashAlgorithmOptions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerHashAlgorithmOptions`](#aws-cdk-sdk.signer.SignerHashAlgorithmOptions)

---

### SignerSigningConfigurationOverrides <a name="aws-cdk-sdk.signer.SignerSigningConfigurationOverrides"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningConfigurationOverrides: signer.SignerSigningConfigurationOverrides = { ... }
```

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningConfigurationOverrides.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningConfigurationOverrides.property.hashAlgorithm"></a>

- *Type:* `string`

---

### SignerSigningImageFormat <a name="aws-cdk-sdk.signer.SignerSigningImageFormat"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningImageFormat: signer.SignerSigningImageFormat = { ... }
```

##### `defaultFormat`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerSigningImageFormat.property.defaultFormat"></a>

- *Type:* `string`

---

##### `supportedFormats`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerSigningImageFormat.property.supportedFormats"></a>

- *Type:* `string`[]

---

### SignerSigningJob <a name="aws-cdk-sdk.signer.SignerSigningJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningJob: signer.SignerSigningJob = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.createdAt"></a>

- *Type:* `string`

---

##### `isRevoked`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.isRevoked"></a>

- *Type:* `boolean`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobInvoker`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.jobInvoker"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.jobOwner"></a>

- *Type:* `string`

---

##### `platformDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.profileVersion"></a>

- *Type:* `string`

---

##### `signatureExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.signatureExpiresAt"></a>

- *Type:* `string`

---

##### `signedObject`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.signedObject"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSignedObject`](#aws-cdk-sdk.signer.SignerSignedObject)

---

##### `signingMaterial`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningMaterial`](#aws-cdk-sdk.signer.SignerSigningMaterial)

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.source"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSource`](#aws-cdk-sdk.signer.SignerSource)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJob.property.status"></a>

- *Type:* `string`

---

### SignerSigningJobRevocationRecord <a name="aws-cdk-sdk.signer.SignerSigningJobRevocationRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningJobRevocationRecord: signer.SignerSigningJobRevocationRecord = { ... }
```

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJobRevocationRecord.property.reason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJobRevocationRecord.property.revokedAt"></a>

- *Type:* `string`

---

##### `revokedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningJobRevocationRecord.property.revokedBy"></a>

- *Type:* `string`

---

### SignerSigningMaterial <a name="aws-cdk-sdk.signer.SignerSigningMaterial"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningMaterial: signer.SignerSigningMaterial = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerSigningMaterial.property.certificateArn"></a>

- *Type:* `string`

---

### SignerSigningPlatform <a name="aws-cdk-sdk.signer.SignerSigningPlatform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningPlatform: signer.SignerSigningPlatform = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.category"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.displayName"></a>

- *Type:* `string`

---

##### `maxSizeInMB`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.maxSizeInMB"></a>

- *Type:* `number`

---

##### `partner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.partner"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.platformId"></a>

- *Type:* `string`

---

##### `revocationSupported`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.revocationSupported"></a>

- *Type:* `boolean`

---

##### `signingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningConfiguration`](#aws-cdk-sdk.signer.SignerSigningConfiguration)

---

##### `signingImageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.signingImageFormat"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningImageFormat`](#aws-cdk-sdk.signer.SignerSigningImageFormat)

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatform.property.target"></a>

- *Type:* `string`

---

### SignerSigningPlatformOverrides <a name="aws-cdk-sdk.signer.SignerSigningPlatformOverrides"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningPlatformOverrides: signer.SignerSigningPlatformOverrides = { ... }
```

##### `signingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatformOverrides.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningConfigurationOverrides`](#aws-cdk-sdk.signer.SignerSigningConfigurationOverrides)

---

##### `signingImageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningPlatformOverrides.property.signingImageFormat"></a>

- *Type:* `string`

---

### SignerSigningProfile <a name="aws-cdk-sdk.signer.SignerSigningProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningProfile: signer.SignerSigningProfile = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.arn"></a>

- *Type:* `string`

---

##### `platformDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.profileVersion"></a>

- *Type:* `string`

---

##### `profileVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.profileVersionArn"></a>

- *Type:* `string`

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.signatureValidityPeriod"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSignatureValidityPeriod`](#aws-cdk-sdk.signer.SignerSignatureValidityPeriod)

---

##### `signingMaterial`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningMaterial`](#aws-cdk-sdk.signer.SignerSigningMaterial)

---

##### `signingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SignerSigningProfileRevocationRecord <a name="aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSigningProfileRevocationRecord: signer.SignerSigningProfileRevocationRecord = { ... }
```

##### `revocationEffectiveFrom`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord.property.revocationEffectiveFrom"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord.property.revokedAt"></a>

- *Type:* `string`

---

##### `revokedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSigningProfileRevocationRecord.property.revokedBy"></a>

- *Type:* `string`

---

### SignerSource <a name="aws-cdk-sdk.signer.SignerSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerSource: signer.SignerSource = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerSource.property.s3"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerS3Source`](#aws-cdk-sdk.signer.SignerS3Source)

---

### SignerStartSigningJobRequest <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerStartSigningJobRequest: signer.SignerStartSigningJobRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest.property.destination"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDestination`](#aws-cdk-sdk.signer.SignerDestination)

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest.property.profileName"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest.property.source"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSource`](#aws-cdk-sdk.signer.SignerSource)

---

##### `profileOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobRequest.property.profileOwner"></a>

- *Type:* `string`

---

### SignerStartSigningJobResponse <a name="aws-cdk-sdk.signer.SignerStartSigningJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerStartSigningJobResponse: signer.SignerStartSigningJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.signer.SignerStartSigningJobResponse.property.jobOwner"></a>

- *Type:* `string`

---

### SignerTagResourceRequest <a name="aws-cdk-sdk.signer.SignerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerTagResourceRequest: signer.SignerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SignerTagResourceResponse <a name="aws-cdk-sdk.signer.SignerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerTagResourceResponse: signer.SignerTagResourceResponse = { ... }
```

### SignerUntagResourceRequest <a name="aws-cdk-sdk.signer.SignerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerUntagResourceRequest: signer.SignerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SignerUntagResourceResponse <a name="aws-cdk-sdk.signer.SignerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

const signerUntagResourceResponse: signer.SignerUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### SignerResponsesAddProfilePermission <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesAddProfilePermission(__scope: Construct, __resources: string[], __input: SignerAddProfilePermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerAddProfilePermissionRequest`](#aws-cdk-sdk.signer.SignerAddProfilePermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesAddProfilePermission.property.revisionId"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJob <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJob(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `completedAt`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.createdAt"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobInvoker`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.jobInvoker"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.jobOwner"></a>

- *Type:* `string`

---

##### `overrides`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides)

---

##### `platformDisplayName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.profileVersion"></a>

- *Type:* `string`

---

##### `requestedBy`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.requestedBy"></a>

- *Type:* `string`

---

##### `revocationRecord`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.revocationRecord"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord)

---

##### `signatureExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.signatureExpiresAt"></a>

- *Type:* `string`

---

##### `signedObject`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.signedObject"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject)

---

##### `signingMaterial`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial)

---

##### `signingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.source"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJob.property.statusReason"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobOverrides <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobOverrides(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `signingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration)

---

##### `signingImageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverrides.property.signingImageFormat"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobOverridesSigningConfiguration <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `hashAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobOverridesSigningConfiguration.property.hashAlgorithm"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobRevocationRecord <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobRevocationRecord(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.property.reason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.property.revokedAt"></a>

- *Type:* `string`

---

##### `revokedBy`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobRevocationRecord.property.revokedBy"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobSignedObject <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobSignedObject(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObject.property.s3"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3)

---


### SignerResponsesDescribeSigningJobSignedObjectS3 <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobSignedObjectS3(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.property.bucketName"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSignedObjectS3.property.key"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobSigningMaterial <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobSigningMaterial(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSigningMaterial.property.certificateArn"></a>

- *Type:* `string`

---


### SignerResponsesDescribeSigningJobSource <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobSource(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSource.property.s3"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3`](#aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3)

---


### SignerResponsesDescribeSigningJobSourceS3 <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesDescribeSigningJobSourceS3(__scope: Construct, __resources: string[], __input: SignerDescribeSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerDescribeSigningJobRequest`](#aws-cdk-sdk.signer.SignerDescribeSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.property.bucketName"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesDescribeSigningJobSourceS3.property.version"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningPlatform <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningPlatform(__scope: Construct, __resources: string[], __input: SignerGetSigningPlatformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---



#### Properties <a name="Properties"></a>

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.category"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.displayName"></a>

- *Type:* `string`

---

##### `maxSizeInMb`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.maxSizeInMb"></a>

- *Type:* `number`

---

##### `partner`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.partner"></a>

- *Type:* `string`

---

##### `platformId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.platformId"></a>

- *Type:* `string`

---

##### `revocationSupported`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.revocationSupported"></a>

- *Type:* `boolean`

---

##### `signingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration)

---

##### `signingImageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.signingImageFormat"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat)

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatform.property.target"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningPlatformSigningConfiguration <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningPlatformSigningConfiguration(__scope: Construct, __resources: string[], __input: SignerGetSigningPlatformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionAlgorithmOptions`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.property.encryptionAlgorithmOptions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions)

---

##### `hashAlgorithmOptions`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfiguration.property.hashAlgorithmOptions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions)

---


### SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions(__scope: Construct, __resources: string[], __input: SignerGetSigningPlatformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedValues`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.property.allowedValues"></a>

- *Type:* `string`[]

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions.property.defaultValue"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions(__scope: Construct, __resources: string[], __input: SignerGetSigningPlatformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedValues`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.property.allowedValues"></a>

- *Type:* `string`[]

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions.property.defaultValue"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningPlatformSigningImageFormat <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningPlatformSigningImageFormat(__scope: Construct, __resources: string[], __input: SignerGetSigningPlatformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningPlatformRequest`](#aws-cdk-sdk.signer.SignerGetSigningPlatformRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultFormat`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.property.defaultFormat"></a>

- *Type:* `string`

---

##### `supportedFormats`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningPlatformSigningImageFormat.property.supportedFormats"></a>

- *Type:* `string`[]

---


### SignerResponsesFetchSigningProfile <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfile(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.arn"></a>

- *Type:* `string`

---

##### `overrides`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides)

---

##### `platformDisplayName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.platformDisplayName"></a>

- *Type:* `string`

---

##### `platformId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.platformId"></a>

- *Type:* `string`

---

##### `profileName`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.profileName"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.profileVersion"></a>

- *Type:* `string`

---

##### `profileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.profileVersionArn"></a>

- *Type:* `string`

---

##### `revocationRecord`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.revocationRecord"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord)

---

##### `signatureValidityPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.signatureValidityPeriod"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod)

---

##### `signingMaterial`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.signingMaterial"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial)

---

##### `signingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.signingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SignerResponsesFetchSigningProfileOverrides <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfileOverrides(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `signingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.property.signingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration`](#aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration)

---

##### `signingImageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverrides.property.signingImageFormat"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningProfileOverridesSigningConfiguration <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `hashAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileOverridesSigningConfiguration.property.hashAlgorithm"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningProfileRevocationRecord <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfileRevocationRecord(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `revocationEffectiveFrom`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.property.revocationEffectiveFrom"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.property.revokedAt"></a>

- *Type:* `string`

---

##### `revokedBy`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileRevocationRecord.property.revokedBy"></a>

- *Type:* `string`

---


### SignerResponsesFetchSigningProfileSignatureValidityPeriod <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSignatureValidityPeriod.property.value"></a>

- *Type:* `number`

---


### SignerResponsesFetchSigningProfileSigningMaterial <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesFetchSigningProfileSigningMaterial(__scope: Construct, __resources: string[], __input: SignerGetSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerGetSigningProfileRequest`](#aws-cdk-sdk.signer.SignerGetSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesFetchSigningProfileSigningMaterial.property.certificateArn"></a>

- *Type:* `string`

---


### SignerResponsesListProfilePermissions <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesListProfilePermissions(__scope: Construct, __resources: string[], __input: SignerListProfilePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListProfilePermissionsRequest`](#aws-cdk-sdk.signer.SignerListProfilePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerPermission`](#aws-cdk-sdk.signer.SignerPermission)[]

---

##### `policySizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.property.policySizeBytes"></a>

- *Type:* `number`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListProfilePermissions.property.revisionId"></a>

- *Type:* `string`

---


### SignerResponsesListSigningJobs <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesListSigningJobs(__scope: Construct, __resources: string[], __input: SignerListSigningJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningJobsRequest`](#aws-cdk-sdk.signer.SignerListSigningJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningJob`](#aws-cdk-sdk.signer.SignerSigningJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningJobs.property.nextToken"></a>

- *Type:* `string`

---


### SignerResponsesListSigningPlatforms <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesListSigningPlatforms(__scope: Construct, __resources: string[], __input: SignerListSigningPlatformsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningPlatformsRequest`](#aws-cdk-sdk.signer.SignerListSigningPlatformsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.property.nextToken"></a>

- *Type:* `string`

---

##### `platforms`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningPlatforms.property.platforms"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningPlatform`](#aws-cdk-sdk.signer.SignerSigningPlatform)[]

---


### SignerResponsesListSigningProfiles <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesListSigningProfiles(__scope: Construct, __resources: string[], __input: SignerListSigningProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListSigningProfilesRequest`](#aws-cdk-sdk.signer.SignerListSigningProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.property.nextToken"></a>

- *Type:* `string`

---

##### `profiles`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListSigningProfiles.property.profiles"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerSigningProfile`](#aws-cdk-sdk.signer.SignerSigningProfile)[]

---


### SignerResponsesListTagsForResource <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SignerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerListTagsForResourceRequest`](#aws-cdk-sdk.signer.SignerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SignerResponsesPutSigningProfile <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesPutSigningProfile(__scope: Construct, __resources: string[], __input: SignerPutSigningProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerPutSigningProfileRequest`](#aws-cdk-sdk.signer.SignerPutSigningProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.property.arn"></a>

- *Type:* `string`

---

##### `profileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.property.profileVersion"></a>

- *Type:* `string`

---

##### `profileVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesPutSigningProfile.property.profileVersionArn"></a>

- *Type:* `string`

---


### SignerResponsesRemoveProfilePermission <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesRemoveProfilePermission(__scope: Construct, __resources: string[], __input: SignerRemoveProfilePermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest`](#aws-cdk-sdk.signer.SignerRemoveProfilePermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesRemoveProfilePermission.property.revisionId"></a>

- *Type:* `string`

---


### SignerResponsesStartSigningJob <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob"></a>

#### Initializer <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.Initializer"></a>

```typescript
import { signer } from 'aws-cdk-sdk'

new signer.SignerResponsesStartSigningJob(__scope: Construct, __resources: string[], __input: SignerStartSigningJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.signer.SignerStartSigningJobRequest`](#aws-cdk-sdk.signer.SignerStartSigningJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobOwner`<sup>Required</sup> <a name="aws-cdk-sdk.signer.SignerResponsesStartSigningJob.property.jobOwner"></a>

- *Type:* `string`

---



