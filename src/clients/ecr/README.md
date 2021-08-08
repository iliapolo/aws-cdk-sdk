# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EcrClient <a name="aws-cdk-sdk.ecr.EcrClient"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.EcrClient.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.EcrClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchCheckLayerAvailability` <a name="aws-cdk-sdk.ecr.EcrClient.batchCheckLayerAvailability"></a>

```typescript
public batchCheckLayerAvailability(input: EcrBatchCheckLayerAvailabilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest`](#aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest)

---

##### `batchDeleteImage` <a name="aws-cdk-sdk.ecr.EcrClient.batchDeleteImage"></a>

```typescript
public batchDeleteImage(input: EcrBatchDeleteImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest`](#aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest)

---

##### `batchGetImage` <a name="aws-cdk-sdk.ecr.EcrClient.batchGetImage"></a>

```typescript
public batchGetImage(input: EcrBatchGetImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchGetImageRequest`](#aws-cdk-sdk.ecr.EcrBatchGetImageRequest)

---

##### `completeLayerUpload` <a name="aws-cdk-sdk.ecr.EcrClient.completeLayerUpload"></a>

```typescript
public completeLayerUpload(input: EcrCompleteLayerUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest`](#aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest)

---

##### `createRepository` <a name="aws-cdk-sdk.ecr.EcrClient.createRepository"></a>

```typescript
public createRepository(input: EcrCreateRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCreateRepositoryRequest`](#aws-cdk-sdk.ecr.EcrCreateRepositoryRequest)

---

##### `deleteLifecyclePolicy` <a name="aws-cdk-sdk.ecr.EcrClient.deleteLifecyclePolicy"></a>

```typescript
public deleteLifecyclePolicy(input: EcrDeleteLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest)

---

##### `deleteRepository` <a name="aws-cdk-sdk.ecr.EcrClient.deleteRepository"></a>

```typescript
public deleteRepository(input: EcrDeleteRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest)

---

##### `deleteRepositoryPolicy` <a name="aws-cdk-sdk.ecr.EcrClient.deleteRepositoryPolicy"></a>

```typescript
public deleteRepositoryPolicy(input: EcrDeleteRepositoryPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest)

---

##### `describeImages` <a name="aws-cdk-sdk.ecr.EcrClient.describeImages"></a>

```typescript
public describeImages(input: EcrDescribeImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImagesRequest`](#aws-cdk-sdk.ecr.EcrDescribeImagesRequest)

---

##### `describeImageScanFindings` <a name="aws-cdk-sdk.ecr.EcrClient.describeImageScanFindings"></a>

```typescript
public describeImageScanFindings(input: EcrDescribeImageScanFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest`](#aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest)

---

##### `describeRepositories` <a name="aws-cdk-sdk.ecr.EcrClient.describeRepositories"></a>

```typescript
public describeRepositories(input: EcrDescribeRepositoriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest`](#aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest)

---

##### `fetchAuthorizationToken` <a name="aws-cdk-sdk.ecr.EcrClient.fetchAuthorizationToken"></a>

```typescript
public fetchAuthorizationToken(input: EcrGetAuthorizationTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest`](#aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest)

---

##### `fetchDownloadUrlForLayer` <a name="aws-cdk-sdk.ecr.EcrClient.fetchDownloadUrlForLayer"></a>

```typescript
public fetchDownloadUrlForLayer(input: EcrGetDownloadUrlForLayerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest`](#aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest)

---

##### `fetchLifecyclePolicy` <a name="aws-cdk-sdk.ecr.EcrClient.fetchLifecyclePolicy"></a>

```typescript
public fetchLifecyclePolicy(input: EcrGetLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest)

---

##### `fetchLifecyclePolicyPreview` <a name="aws-cdk-sdk.ecr.EcrClient.fetchLifecyclePolicyPreview"></a>

```typescript
public fetchLifecyclePolicyPreview(input: EcrGetLifecyclePolicyPreviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest`](#aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest)

---

##### `fetchRepositoryPolicy` <a name="aws-cdk-sdk.ecr.EcrClient.fetchRepositoryPolicy"></a>

```typescript
public fetchRepositoryPolicy(input: EcrGetRepositoryPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest)

---

##### `initiateLayerUpload` <a name="aws-cdk-sdk.ecr.EcrClient.initiateLayerUpload"></a>

```typescript
public initiateLayerUpload(input: EcrInitiateLayerUploadRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest`](#aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest)

---

##### `listImages` <a name="aws-cdk-sdk.ecr.EcrClient.listImages"></a>

```typescript
public listImages(input: EcrListImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrListImagesRequest`](#aws-cdk-sdk.ecr.EcrListImagesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.ecr.EcrClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: EcrListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrListTagsForResourceRequest`](#aws-cdk-sdk.ecr.EcrListTagsForResourceRequest)

---

##### `putImage` <a name="aws-cdk-sdk.ecr.EcrClient.putImage"></a>

```typescript
public putImage(input: EcrPutImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageRequest`](#aws-cdk-sdk.ecr.EcrPutImageRequest)

---

##### `putImageScanningConfiguration` <a name="aws-cdk-sdk.ecr.EcrClient.putImageScanningConfiguration"></a>

```typescript
public putImageScanningConfiguration(input: EcrPutImageScanningConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest`](#aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest)

---

##### `putImageTagMutability` <a name="aws-cdk-sdk.ecr.EcrClient.putImageTagMutability"></a>

```typescript
public putImageTagMutability(input: EcrPutImageTagMutabilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest`](#aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest)

---

##### `putLifecyclePolicy` <a name="aws-cdk-sdk.ecr.EcrClient.putLifecyclePolicy"></a>

```typescript
public putLifecyclePolicy(input: EcrPutLifecyclePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest)

---

##### `putRepositoryPolicy` <a name="aws-cdk-sdk.ecr.EcrClient.putRepositoryPolicy"></a>

```typescript
public putRepositoryPolicy(input: EcrSetRepositoryPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest)

---

##### `startImageScan` <a name="aws-cdk-sdk.ecr.EcrClient.startImageScan"></a>

```typescript
public startImageScan(input: EcrStartImageScanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartImageScanRequest`](#aws-cdk-sdk.ecr.EcrStartImageScanRequest)

---

##### `startLifecyclePolicyPreview` <a name="aws-cdk-sdk.ecr.EcrClient.startLifecyclePolicyPreview"></a>

```typescript
public startLifecyclePolicyPreview(input: EcrStartLifecyclePolicyPreviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest`](#aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.ecr.EcrClient.tagResource"></a>

```typescript
public tagResource(input: EcrTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrTagResourceRequest`](#aws-cdk-sdk.ecr.EcrTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.ecr.EcrClient.untagResource"></a>

```typescript
public untagResource(input: EcrUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrUntagResourceRequest`](#aws-cdk-sdk.ecr.EcrUntagResourceRequest)

---

##### `uploadLayerPart` <a name="aws-cdk-sdk.ecr.EcrClient.uploadLayerPart"></a>

```typescript
public uploadLayerPart(input: EcrUploadLayerPartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrUploadLayerPartRequest`](#aws-cdk-sdk.ecr.EcrUploadLayerPartRequest)

---




## Structs <a name="Structs"></a>

### EcrAttribute <a name="aws-cdk-sdk.ecr.EcrAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrAttribute: ecr.EcrAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrAttribute.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrAttribute.property.value"></a>

- *Type:* `string`

---

### EcrAuthorizationData <a name="aws-cdk-sdk.ecr.EcrAuthorizationData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrAuthorizationData: ecr.EcrAuthorizationData = { ... }
```

##### `authorizationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrAuthorizationData.property.authorizationToken"></a>

- *Type:* `string`

---

##### `expiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrAuthorizationData.property.expiresAt"></a>

- *Type:* `string`

---

##### `proxyEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrAuthorizationData.property.proxyEndpoint"></a>

- *Type:* `string`

---

### EcrBatchCheckLayerAvailabilityRequest <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchCheckLayerAvailabilityRequest: ecr.EcrBatchCheckLayerAvailabilityRequest = { ... }
```

##### `layerDigests`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest.property.layerDigests"></a>

- *Type:* `string`[]

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrBatchCheckLayerAvailabilityResponse <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchCheckLayerAvailabilityResponse: ecr.EcrBatchCheckLayerAvailabilityResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLayerFailure`](#aws-cdk-sdk.ecr.EcrLayerFailure)[]

---

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityResponse.property.layers"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLayer`](#aws-cdk-sdk.ecr.EcrLayer)[]

---

### EcrBatchDeleteImageRequest <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchDeleteImageRequest: ecr.EcrBatchDeleteImageRequest = { ... }
```

##### `imageIds`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrBatchDeleteImageResponse <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchDeleteImageResponse: ecr.EcrBatchDeleteImageResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageFailure`](#aws-cdk-sdk.ecr.EcrImageFailure)[]

---

##### `imageIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchDeleteImageResponse.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

### EcrBatchGetImageRequest <a name="aws-cdk-sdk.ecr.EcrBatchGetImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchGetImageRequest: ecr.EcrBatchGetImageRequest = { ... }
```

##### `imageIds`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageRequest.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `acceptedMediaTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageRequest.property.acceptedMediaTypes"></a>

- *Type:* `string`[]

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrBatchGetImageResponse <a name="aws-cdk-sdk.ecr.EcrBatchGetImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrBatchGetImageResponse: ecr.EcrBatchGetImageResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageFailure`](#aws-cdk-sdk.ecr.EcrImageFailure)[]

---

##### `images`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrBatchGetImageResponse.property.images"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImage`](#aws-cdk-sdk.ecr.EcrImage)[]

---

### EcrCompleteLayerUploadRequest <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrCompleteLayerUploadRequest: ecr.EcrCompleteLayerUploadRequest = { ... }
```

##### `layerDigests`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest.property.layerDigests"></a>

- *Type:* `string`[]

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrCompleteLayerUploadResponse <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrCompleteLayerUploadResponse: ecr.EcrCompleteLayerUploadResponse = { ... }
```

##### `layerDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadResponse.property.layerDigest"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadResponse.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCompleteLayerUploadResponse.property.uploadId"></a>

- *Type:* `string`

---

### EcrCreateRepositoryRequest <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrCreateRepositoryRequest: ecr.EcrCreateRepositoryRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrEncryptionConfiguration`](#aws-cdk-sdk.ecr.EcrEncryptionConfiguration)

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanningConfiguration`](#aws-cdk-sdk.ecr.EcrImageScanningConfiguration)

---

##### `imageTagMutability`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrTag`](#aws-cdk-sdk.ecr.EcrTag)[]

---

### EcrCreateRepositoryResponse <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrCreateRepositoryResponse: ecr.EcrCreateRepositoryResponse = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrCreateRepositoryResponse.property.repository"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrRepository`](#aws-cdk-sdk.ecr.EcrRepository)

---

### EcrDeleteLifecyclePolicyRequest <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteLifecyclePolicyRequest: ecr.EcrDeleteLifecyclePolicyRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrDeleteLifecyclePolicyResponse <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteLifecyclePolicyResponse: ecr.EcrDeleteLifecyclePolicyResponse = { ... }
```

##### `lastEvaluatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyResponse.property.lastEvaluatedAt"></a>

- *Type:* `string`

---

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyResponse.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrDeleteRepositoryPolicyRequest <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteRepositoryPolicyRequest: ecr.EcrDeleteRepositoryPolicyRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrDeleteRepositoryPolicyResponse <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteRepositoryPolicyResponse: ecr.EcrDeleteRepositoryPolicyResponse = { ... }
```

##### `policyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyResponse.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrDeleteRepositoryRequest <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteRepositoryRequest: ecr.EcrDeleteRepositoryRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest.property.force"></a>

- *Type:* `boolean`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrDeleteRepositoryResponse <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDeleteRepositoryResponse: ecr.EcrDeleteRepositoryResponse = { ... }
```

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDeleteRepositoryResponse.property.repository"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrRepository`](#aws-cdk-sdk.ecr.EcrRepository)

---

### EcrDescribeImageScanFindingsRequest <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeImageScanFindingsRequest: ecr.EcrDescribeImageScanFindingsRequest = { ... }
```

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrDescribeImageScanFindingsResponse <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeImageScanFindingsResponse: ecr.EcrDescribeImageScanFindingsResponse = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

##### `imageScanFindings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.imageScanFindings"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanFindings`](#aws-cdk-sdk.ecr.EcrImageScanFindings)

---

##### `imageScanStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.imageScanStatus"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanStatus`](#aws-cdk-sdk.ecr.EcrImageScanStatus)

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrDescribeImagesFilter <a name="aws-cdk-sdk.ecr.EcrDescribeImagesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeImagesFilter: ecr.EcrDescribeImagesFilter = { ... }
```

##### `tagStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesFilter.property.tagStatus"></a>

- *Type:* `string`

---

### EcrDescribeImagesRequest <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeImagesRequest: ecr.EcrDescribeImagesRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImagesFilter`](#aws-cdk-sdk.ecr.EcrDescribeImagesFilter)

---

##### `imageIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrDescribeImagesResponse <a name="aws-cdk-sdk.ecr.EcrDescribeImagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeImagesResponse: ecr.EcrDescribeImagesResponse = { ... }
```

##### `imageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesResponse.property.imageDetails"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageDetail`](#aws-cdk-sdk.ecr.EcrImageDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeImagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcrDescribeRepositoriesRequest <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeRepositoriesRequest: ecr.EcrDescribeRepositoriesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryNames`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest.property.repositoryNames"></a>

- *Type:* `string`[]

---

### EcrDescribeRepositoriesResponse <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrDescribeRepositoriesResponse: ecr.EcrDescribeRepositoriesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrDescribeRepositoriesResponse.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrRepository`](#aws-cdk-sdk.ecr.EcrRepository)[]

---

### EcrEncryptionConfiguration <a name="aws-cdk-sdk.ecr.EcrEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrEncryptionConfiguration: ecr.EcrEncryptionConfiguration = { ... }
```

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrEncryptionConfiguration.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---

### EcrGetAuthorizationTokenRequest <a name="aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetAuthorizationTokenRequest: ecr.EcrGetAuthorizationTokenRequest = { ... }
```

##### `registryIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest.property.registryIds"></a>

- *Type:* `string`[]

---

### EcrGetAuthorizationTokenResponse <a name="aws-cdk-sdk.ecr.EcrGetAuthorizationTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetAuthorizationTokenResponse: ecr.EcrGetAuthorizationTokenResponse = { ... }
```

##### `authorizationData`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetAuthorizationTokenResponse.property.authorizationData"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrAuthorizationData`](#aws-cdk-sdk.ecr.EcrAuthorizationData)[]

---

### EcrGetDownloadUrlForLayerRequest <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetDownloadUrlForLayerRequest: ecr.EcrGetDownloadUrlForLayerRequest = { ... }
```

##### `layerDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest.property.layerDigest"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrGetDownloadUrlForLayerResponse <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetDownloadUrlForLayerResponse: ecr.EcrGetDownloadUrlForLayerResponse = { ... }
```

##### `downloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerResponse.property.downloadUrl"></a>

- *Type:* `string`

---

##### `layerDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerResponse.property.layerDigest"></a>

- *Type:* `string`

---

### EcrGetLifecyclePolicyPreviewRequest <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetLifecyclePolicyPreviewRequest: ecr.EcrGetLifecyclePolicyPreviewRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewFilter`](#aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewFilter)

---

##### `imageIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrGetLifecyclePolicyPreviewResponse <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetLifecyclePolicyPreviewResponse: ecr.EcrGetLifecyclePolicyPreviewResponse = { ... }
```

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `previewResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.previewResults"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult`](#aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult)[]

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.repositoryName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewSummary`](#aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewSummary)

---

### EcrGetLifecyclePolicyRequest <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetLifecyclePolicyRequest: ecr.EcrGetLifecyclePolicyRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrGetLifecyclePolicyResponse <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetLifecyclePolicyResponse: ecr.EcrGetLifecyclePolicyResponse = { ... }
```

##### `lastEvaluatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyResponse.property.lastEvaluatedAt"></a>

- *Type:* `string`

---

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyResponse.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetLifecyclePolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrGetRepositoryPolicyRequest <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetRepositoryPolicyRequest: ecr.EcrGetRepositoryPolicyRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrGetRepositoryPolicyResponse <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrGetRepositoryPolicyResponse: ecr.EcrGetRepositoryPolicyResponse = { ... }
```

##### `policyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyResponse.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrGetRepositoryPolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrImage <a name="aws-cdk-sdk.ecr.EcrImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImage: ecr.EcrImage = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImage.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

##### `imageManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImage.property.imageManifest"></a>

- *Type:* `string`

---

##### `imageManifestMediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImage.property.imageManifestMediaType"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImage.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImage.property.repositoryName"></a>

- *Type:* `string`

---

### EcrImageDetail <a name="aws-cdk-sdk.ecr.EcrImageDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageDetail: ecr.EcrImageDetail = { ... }
```

##### `artifactMediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.artifactMediaType"></a>

- *Type:* `string`

---

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageManifestMediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageManifestMediaType"></a>

- *Type:* `string`

---

##### `imagePushedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imagePushedAt"></a>

- *Type:* `string`

---

##### `imageScanFindingsSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageScanFindingsSummary"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanFindingsSummary`](#aws-cdk-sdk.ecr.EcrImageScanFindingsSummary)

---

##### `imageScanStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageScanStatus"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanStatus`](#aws-cdk-sdk.ecr.EcrImageScanStatus)

---

##### `imageSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageSizeInBytes"></a>

- *Type:* `number`

---

##### `imageTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.imageTags"></a>

- *Type:* `string`[]

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageDetail.property.repositoryName"></a>

- *Type:* `string`

---

### EcrImageFailure <a name="aws-cdk-sdk.ecr.EcrImageFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageFailure: ecr.EcrImageFailure = { ... }
```

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageFailure.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageFailure.property.failureReason"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageFailure.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

### EcrImageIdentifier <a name="aws-cdk-sdk.ecr.EcrImageIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageIdentifier: ecr.EcrImageIdentifier = { ... }
```

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageIdentifier.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageTag`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageIdentifier.property.imageTag"></a>

- *Type:* `string`

---

### EcrImageScanFinding <a name="aws-cdk-sdk.ecr.EcrImageScanFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageScanFinding: ecr.EcrImageScanFinding = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFinding.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrAttribute`](#aws-cdk-sdk.ecr.EcrAttribute)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFinding.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFinding.property.name"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFinding.property.severity"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFinding.property.uri"></a>

- *Type:* `string`

---

### EcrImageScanFindings <a name="aws-cdk-sdk.ecr.EcrImageScanFindings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageScanFindings: ecr.EcrImageScanFindings = { ... }
```

##### `findings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanFinding`](#aws-cdk-sdk.ecr.EcrImageScanFinding)[]

---

##### `findingSeverityCounts`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindings.property.findingSeverityCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `imageScanCompletedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindings.property.imageScanCompletedAt"></a>

- *Type:* `string`

---

##### `vulnerabilitySourceUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindings.property.vulnerabilitySourceUpdatedAt"></a>

- *Type:* `string`

---

### EcrImageScanFindingsSummary <a name="aws-cdk-sdk.ecr.EcrImageScanFindingsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageScanFindingsSummary: ecr.EcrImageScanFindingsSummary = { ... }
```

##### `findingSeverityCounts`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindingsSummary.property.findingSeverityCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `imageScanCompletedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindingsSummary.property.imageScanCompletedAt"></a>

- *Type:* `string`

---

##### `vulnerabilitySourceUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanFindingsSummary.property.vulnerabilitySourceUpdatedAt"></a>

- *Type:* `string`

---

### EcrImageScanningConfiguration <a name="aws-cdk-sdk.ecr.EcrImageScanningConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageScanningConfiguration: ecr.EcrImageScanningConfiguration = { ... }
```

##### `scanOnPush`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanningConfiguration.property.scanOnPush"></a>

- *Type:* `boolean`

---

### EcrImageScanStatus <a name="aws-cdk-sdk.ecr.EcrImageScanStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrImageScanStatus: ecr.EcrImageScanStatus = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanStatus.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrImageScanStatus.property.status"></a>

- *Type:* `string`

---

### EcrInitiateLayerUploadRequest <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrInitiateLayerUploadRequest: ecr.EcrInitiateLayerUploadRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrInitiateLayerUploadResponse <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrInitiateLayerUploadResponse: ecr.EcrInitiateLayerUploadResponse = { ... }
```

##### `partSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadResponse.property.partSize"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrInitiateLayerUploadResponse.property.uploadId"></a>

- *Type:* `string`

---

### EcrLayer <a name="aws-cdk-sdk.ecr.EcrLayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLayer: ecr.EcrLayer = { ... }
```

##### `layerAvailability`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayer.property.layerAvailability"></a>

- *Type:* `string`

---

##### `layerDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayer.property.layerDigest"></a>

- *Type:* `string`

---

##### `layerSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayer.property.layerSize"></a>

- *Type:* `number`

---

##### `mediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayer.property.mediaType"></a>

- *Type:* `string`

---

### EcrLayerFailure <a name="aws-cdk-sdk.ecr.EcrLayerFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLayerFailure: ecr.EcrLayerFailure = { ... }
```

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayerFailure.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayerFailure.property.failureReason"></a>

- *Type:* `string`

---

##### `layerDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLayerFailure.property.layerDigest"></a>

- *Type:* `string`

---

### EcrLifecyclePolicyPreviewFilter <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLifecyclePolicyPreviewFilter: ecr.EcrLifecyclePolicyPreviewFilter = { ... }
```

##### `tagStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewFilter.property.tagStatus"></a>

- *Type:* `string`

---

### EcrLifecyclePolicyPreviewResult <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLifecyclePolicyPreviewResult: ecr.EcrLifecyclePolicyPreviewResult = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult.property.action"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLifecyclePolicyRuleAction`](#aws-cdk-sdk.ecr.EcrLifecyclePolicyRuleAction)

---

##### `appliedRulePriority`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult.property.appliedRulePriority"></a>

- *Type:* `number`

---

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult.property.imageDigest"></a>

- *Type:* `string`

---

##### `imagePushedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult.property.imagePushedAt"></a>

- *Type:* `string`

---

##### `imageTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult.property.imageTags"></a>

- *Type:* `string`[]

---

### EcrLifecyclePolicyPreviewSummary <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLifecyclePolicyPreviewSummary: ecr.EcrLifecyclePolicyPreviewSummary = { ... }
```

##### `expiringImageTotalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewSummary.property.expiringImageTotalCount"></a>

- *Type:* `number`

---

### EcrLifecyclePolicyRuleAction <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyRuleAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrLifecyclePolicyRuleAction: ecr.EcrLifecyclePolicyRuleAction = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrLifecyclePolicyRuleAction.property.type"></a>

- *Type:* `string`

---

### EcrListImagesFilter <a name="aws-cdk-sdk.ecr.EcrListImagesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrListImagesFilter: ecr.EcrListImagesFilter = { ... }
```

##### `tagStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesFilter.property.tagStatus"></a>

- *Type:* `string`

---

### EcrListImagesRequest <a name="aws-cdk-sdk.ecr.EcrListImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrListImagesRequest: ecr.EcrListImagesRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrListImagesFilter`](#aws-cdk-sdk.ecr.EcrListImagesFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrListImagesResponse <a name="aws-cdk-sdk.ecr.EcrListImagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrListImagesResponse: ecr.EcrListImagesResponse = { ... }
```

##### `imageIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesResponse.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListImagesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcrListTagsForResourceRequest <a name="aws-cdk-sdk.ecr.EcrListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrListTagsForResourceRequest: ecr.EcrListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### EcrListTagsForResourceResponse <a name="aws-cdk-sdk.ecr.EcrListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrListTagsForResourceResponse: ecr.EcrListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrTag`](#aws-cdk-sdk.ecr.EcrTag)[]

---

### EcrPutImageRequest <a name="aws-cdk-sdk.ecr.EcrPutImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageRequest: ecr.EcrPutImageRequest = { ... }
```

##### `imageManifest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.imageManifest"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageManifestMediaType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.imageManifestMediaType"></a>

- *Type:* `string`

---

##### `imageTag`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.imageTag"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrPutImageResponse <a name="aws-cdk-sdk.ecr.EcrPutImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageResponse: ecr.EcrPutImageResponse = { ... }
```

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageResponse.property.image"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImage`](#aws-cdk-sdk.ecr.EcrImage)

---

### EcrPutImageScanningConfigurationRequest <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageScanningConfigurationRequest: ecr.EcrPutImageScanningConfigurationRequest = { ... }
```

##### `imageScanningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanningConfiguration`](#aws-cdk-sdk.ecr.EcrImageScanningConfiguration)

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrPutImageScanningConfigurationResponse <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageScanningConfigurationResponse: ecr.EcrPutImageScanningConfigurationResponse = { ... }
```

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationResponse.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanningConfiguration`](#aws-cdk-sdk.ecr.EcrImageScanningConfiguration)

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrPutImageTagMutabilityRequest <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageTagMutabilityRequest: ecr.EcrPutImageTagMutabilityRequest = { ... }
```

##### `imageTagMutability`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrPutImageTagMutabilityResponse <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutImageTagMutabilityResponse: ecr.EcrPutImageTagMutabilityResponse = { ... }
```

##### `imageTagMutability`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityResponse.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutImageTagMutabilityResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrPutLifecyclePolicyRequest <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutLifecyclePolicyRequest: ecr.EcrPutLifecyclePolicyRequest = { ... }
```

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrPutLifecyclePolicyResponse <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrPutLifecyclePolicyResponse: ecr.EcrPutLifecyclePolicyResponse = { ... }
```

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyResponse.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrPutLifecyclePolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrRepository <a name="aws-cdk-sdk.ecr.EcrRepository"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrRepository: ecr.EcrRepository = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrEncryptionConfiguration`](#aws-cdk-sdk.ecr.EcrEncryptionConfiguration)

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanningConfiguration`](#aws-cdk-sdk.ecr.EcrImageScanningConfiguration)

---

##### `imageTagMutability`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.repositoryArn"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.repositoryName"></a>

- *Type:* `string`

---

##### `repositoryUri`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrRepository.property.repositoryUri"></a>

- *Type:* `string`

---

### EcrSetRepositoryPolicyRequest <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrSetRepositoryPolicyRequest: ecr.EcrSetRepositoryPolicyRequest = { ... }
```

##### `policyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest.property.policyText"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest.property.force"></a>

- *Type:* `boolean`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrSetRepositoryPolicyResponse <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrSetRepositoryPolicyResponse: ecr.EcrSetRepositoryPolicyResponse = { ... }
```

##### `policyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyResponse.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrSetRepositoryPolicyResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrStartImageScanRequest <a name="aws-cdk-sdk.ecr.EcrStartImageScanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrStartImageScanRequest: ecr.EcrStartImageScanRequest = { ... }
```

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanRequest.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrStartImageScanResponse <a name="aws-cdk-sdk.ecr.EcrStartImageScanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrStartImageScanResponse: ecr.EcrStartImageScanResponse = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanResponse.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)

---

##### `imageScanStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanResponse.property.imageScanStatus"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanStatus`](#aws-cdk-sdk.ecr.EcrImageScanStatus)

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartImageScanResponse.property.repositoryName"></a>

- *Type:* `string`

---

### EcrStartLifecyclePolicyPreviewRequest <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrStartLifecyclePolicyPreviewRequest: ecr.EcrStartLifecyclePolicyPreviewRequest = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrStartLifecyclePolicyPreviewResponse <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrStartLifecyclePolicyPreviewResponse: ecr.EcrStartLifecyclePolicyPreviewResponse = { ... }
```

##### `lifecyclePolicyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewResponse.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewResponse.property.repositoryName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewResponse.property.status"></a>

- *Type:* `string`

---

### EcrTag <a name="aws-cdk-sdk.ecr.EcrTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrTag: ecr.EcrTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrTag.property.value"></a>

- *Type:* `string`

---

### EcrTagResourceRequest <a name="aws-cdk-sdk.ecr.EcrTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrTagResourceRequest: ecr.EcrTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrTag`](#aws-cdk-sdk.ecr.EcrTag)[]

---

### EcrTagResourceResponse <a name="aws-cdk-sdk.ecr.EcrTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrTagResourceResponse: ecr.EcrTagResourceResponse = { ... }
```

### EcrUntagResourceRequest <a name="aws-cdk-sdk.ecr.EcrUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrUntagResourceRequest: ecr.EcrUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### EcrUntagResourceResponse <a name="aws-cdk-sdk.ecr.EcrUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrUntagResourceResponse: ecr.EcrUntagResourceResponse = { ... }
```

### EcrUploadLayerPartRequest <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrUploadLayerPartRequest: ecr.EcrUploadLayerPartRequest = { ... }
```

##### `layerPartBlob`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.layerPartBlob"></a>

- *Type:* `any`

---

##### `partFirstByte`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.partFirstByte"></a>

- *Type:* `number`

---

##### `partLastByte`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.partLastByte"></a>

- *Type:* `number`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.uploadId"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartRequest.property.registryId"></a>

- *Type:* `string`

---

### EcrUploadLayerPartResponse <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

const ecrUploadLayerPartResponse: ecr.EcrUploadLayerPartResponse = { ... }
```

##### `lastByteReceived`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartResponse.property.lastByteReceived"></a>

- *Type:* `number`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartResponse.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartResponse.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecr.EcrUploadLayerPartResponse.property.uploadId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ECRResponsesBatchCheckLayerAvailability <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesBatchCheckLayerAvailability(__scope: Construct, __resources: string[], __input: EcrBatchCheckLayerAvailabilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest`](#aws-cdk-sdk.ecr.EcrBatchCheckLayerAvailabilityRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLayerFailure`](#aws-cdk-sdk.ecr.EcrLayerFailure)[]

---

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchCheckLayerAvailability.property.layers"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLayer`](#aws-cdk-sdk.ecr.EcrLayer)[]

---


### ECRResponsesBatchDeleteImage <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesBatchDeleteImage(__scope: Construct, __resources: string[], __input: EcrBatchDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest`](#aws-cdk-sdk.ecr.EcrBatchDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageFailure`](#aws-cdk-sdk.ecr.EcrImageFailure)[]

---

##### `imageIds`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchDeleteImage.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---


### ECRResponsesBatchGetImage <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesBatchGetImage(__scope: Construct, __resources: string[], __input: EcrBatchGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrBatchGetImageRequest`](#aws-cdk-sdk.ecr.EcrBatchGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageFailure`](#aws-cdk-sdk.ecr.EcrImageFailure)[]

---

##### `images`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesBatchGetImage.property.images"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImage`](#aws-cdk-sdk.ecr.EcrImage)[]

---


### ECRResponsesCompleteLayerUpload <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesCompleteLayerUpload(__scope: Construct, __resources: string[], __input: EcrCompleteLayerUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest`](#aws-cdk-sdk.ecr.EcrCompleteLayerUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `layerDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.property.layerDigest"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCompleteLayerUpload.property.uploadId"></a>

- *Type:* `string`

---


### ECRResponsesCreateRepository <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesCreateRepository(__scope: Construct, __resources: string[], __input: EcrCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCreateRepositoryRequest`](#aws-cdk-sdk.ecr.EcrCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository`](#aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository)

---


### ECRResponsesCreateRepositoryRepository <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesCreateRepositoryRepository(__scope: Construct, __resources: string[], __input: EcrCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCreateRepositoryRequest`](#aws-cdk-sdk.ecr.EcrCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration`](#aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration)

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration`](#aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration)

---

##### `imageTagMutability`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.repositoryArn"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.repositoryName"></a>

- *Type:* `string`

---

##### `repositoryUri`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepository.property.repositoryUri"></a>

- *Type:* `string`

---


### ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration(__scope: Construct, __resources: string[], __input: EcrCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCreateRepositoryRequest`](#aws-cdk-sdk.ecr.EcrCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---


### ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration(__scope: Construct, __resources: string[], __input: EcrCreateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrCreateRepositoryRequest`](#aws-cdk-sdk.ecr.EcrCreateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `scanOnPush`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration.property.scanOnPush"></a>

- *Type:* `boolean`

---


### ECRResponsesDeleteLifecyclePolicy <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteLifecyclePolicy(__scope: Construct, __resources: string[], __input: EcrDeleteLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrDeleteLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `lastEvaluatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.property.lastEvaluatedAt"></a>

- *Type:* `string`

---

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteLifecyclePolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesDeleteRepository <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteRepository(__scope: Construct, __resources: string[], __input: EcrDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepository.property.repository"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository`](#aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository)

---


### ECRResponsesDeleteRepositoryPolicy <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteRepositoryPolicy(__scope: Construct, __resources: string[], __input: EcrDeleteRepositoryPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryPolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesDeleteRepositoryRepository <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteRepositoryRepository(__scope: Construct, __resources: string[], __input: EcrDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration`](#aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration)

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration`](#aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration)

---

##### `imageTagMutability`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.repositoryArn"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.repositoryName"></a>

- *Type:* `string`

---

##### `repositoryUri`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepository.property.repositoryUri"></a>

- *Type:* `string`

---


### ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration(__scope: Construct, __resources: string[], __input: EcrDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.property.encryptionType"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration.property.kmsKey"></a>

- *Type:* `string`

---


### ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration(__scope: Construct, __resources: string[], __input: EcrDeleteRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest`](#aws-cdk-sdk.ecr.EcrDeleteRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `scanOnPush`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration.property.scanOnPush"></a>

- *Type:* `boolean`

---


### ECRResponsesDescribeImages <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeImages(__scope: Construct, __resources: string[], __input: EcrDescribeImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImagesRequest`](#aws-cdk-sdk.ecr.EcrDescribeImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `imageDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.property.imageDetails"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageDetail`](#aws-cdk-sdk.ecr.EcrImageDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImages.property.nextToken"></a>

- *Type:* `string`

---


### ECRResponsesDescribeImageScanFindings <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeImageScanFindings(__scope: Construct, __resources: string[], __input: EcrDescribeImageScanFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest`](#aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId`](#aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId)

---

##### `imageScanFindings`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.imageScanFindings"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings`](#aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings)

---

##### `imageScanStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.imageScanStatus"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus`](#aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus)

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindings.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesDescribeImageScanFindingsImageId <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeImageScanFindingsImageId(__scope: Construct, __resources: string[], __input: EcrDescribeImageScanFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest`](#aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `imageDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageTag`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageId.property.imageTag"></a>

- *Type:* `string`

---


### ECRResponsesDescribeImageScanFindingsImageScanFindings <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings(__scope: Construct, __resources: string[], __input: EcrDescribeImageScanFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest`](#aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageScanFinding`](#aws-cdk-sdk.ecr.EcrImageScanFinding)[]

---

##### `findingSeverityCounts`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.property.findingSeverityCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `imageScanCompletedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.property.imageScanCompletedAt"></a>

- *Type:* `string`

---

##### `vulnerabilitySourceUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanFindings.property.vulnerabilitySourceUpdatedAt"></a>

- *Type:* `string`

---


### ECRResponsesDescribeImageScanFindingsImageScanStatus <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus(__scope: Construct, __resources: string[], __input: EcrDescribeImageScanFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest`](#aws-cdk-sdk.ecr.EcrDescribeImageScanFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeImageScanFindingsImageScanStatus.property.status"></a>

- *Type:* `string`

---


### ECRResponsesDescribeRepositories <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesDescribeRepositories(__scope: Construct, __resources: string[], __input: EcrDescribeRepositoriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest`](#aws-cdk-sdk.ecr.EcrDescribeRepositoriesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesDescribeRepositories.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrRepository`](#aws-cdk-sdk.ecr.EcrRepository)[]

---


### ECRResponsesFetchAuthorizationToken <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchAuthorizationToken(__scope: Construct, __resources: string[], __input: EcrGetAuthorizationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest`](#aws-cdk-sdk.ecr.EcrGetAuthorizationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationData`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchAuthorizationToken.property.authorizationData"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrAuthorizationData`](#aws-cdk-sdk.ecr.EcrAuthorizationData)[]

---


### ECRResponsesFetchDownloadUrlForLayer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchDownloadUrlForLayer(__scope: Construct, __resources: string[], __input: EcrGetDownloadUrlForLayerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest`](#aws-cdk-sdk.ecr.EcrGetDownloadUrlForLayerRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.property.downloadUrl"></a>

- *Type:* `string`

---

##### `layerDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchDownloadUrlForLayer.property.layerDigest"></a>

- *Type:* `string`

---


### ECRResponsesFetchLifecyclePolicy <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchLifecyclePolicy(__scope: Construct, __resources: string[], __input: EcrGetLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrGetLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `lastEvaluatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.property.lastEvaluatedAt"></a>

- *Type:* `string`

---

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesFetchLifecyclePolicyPreview <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchLifecyclePolicyPreview(__scope: Construct, __resources: string[], __input: EcrGetLifecyclePolicyPreviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest`](#aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest)

---



#### Properties <a name="Properties"></a>

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.nextToken"></a>

- *Type:* `string`

---

##### `previewResults`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.previewResults"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult`](#aws-cdk-sdk.ecr.EcrLifecyclePolicyPreviewResult)[]

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.repositoryName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreview.property.summary"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary`](#aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary)

---


### ECRResponsesFetchLifecyclePolicyPreviewSummary <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary(__scope: Construct, __resources: string[], __input: EcrGetLifecyclePolicyPreviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest`](#aws-cdk-sdk.ecr.EcrGetLifecyclePolicyPreviewRequest)

---



#### Properties <a name="Properties"></a>

##### `expiringImageTotalCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchLifecyclePolicyPreviewSummary.property.expiringImageTotalCount"></a>

- *Type:* `number`

---


### ECRResponsesFetchRepositoryPolicy <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesFetchRepositoryPolicy(__scope: Construct, __resources: string[], __input: EcrGetRepositoryPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrGetRepositoryPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesFetchRepositoryPolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesInitiateLayerUpload <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesInitiateLayerUpload(__scope: Construct, __resources: string[], __input: EcrInitiateLayerUploadRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest`](#aws-cdk-sdk.ecr.EcrInitiateLayerUploadRequest)

---



#### Properties <a name="Properties"></a>

##### `partSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.property.partSize"></a>

- *Type:* `number`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesInitiateLayerUpload.property.uploadId"></a>

- *Type:* `string`

---


### ECRResponsesListImages <a name="aws-cdk-sdk.ecr.ECRResponsesListImages"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesListImages(__scope: Construct, __resources: string[], __input: EcrListImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrListImagesRequest`](#aws-cdk-sdk.ecr.EcrListImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `imageIds`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.property.imageIds"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrImageIdentifier`](#aws-cdk-sdk.ecr.EcrImageIdentifier)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListImages.property.nextToken"></a>

- *Type:* `string`

---


### ECRResponsesListTagsForResource <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: EcrListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrListTagsForResourceRequest`](#aws-cdk-sdk.ecr.EcrListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrTag`](#aws-cdk-sdk.ecr.EcrTag)[]

---


### ECRResponsesPutImage <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImage(__scope: Construct, __resources: string[], __input: EcrPutImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageRequest`](#aws-cdk-sdk.ecr.EcrPutImageRequest)

---



#### Properties <a name="Properties"></a>

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImage.property.image"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesPutImageImage`](#aws-cdk-sdk.ecr.ECRResponsesPutImageImage)

---


### ECRResponsesPutImageImage <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImageImage(__scope: Construct, __resources: string[], __input: EcrPutImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageRequest`](#aws-cdk-sdk.ecr.EcrPutImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId`](#aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId)

---

##### `imageManifest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.property.imageManifest"></a>

- *Type:* `string`

---

##### `imageManifestMediaType`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.property.imageManifestMediaType"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImage.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesPutImageImageImageId <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImageImageImageId(__scope: Construct, __resources: string[], __input: EcrPutImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageRequest`](#aws-cdk-sdk.ecr.EcrPutImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageTag`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageImageImageId.property.imageTag"></a>

- *Type:* `string`

---


### ECRResponsesPutImageScanningConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImageScanningConfiguration(__scope: Construct, __resources: string[], __input: EcrPutImageScanningConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest`](#aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `imageScanningConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.property.imageScanningConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration`](#aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration)

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfiguration.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesPutImageScanningConfigurationImageScanningConfiguration <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration(__scope: Construct, __resources: string[], __input: EcrPutImageScanningConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest`](#aws-cdk-sdk.ecr.EcrPutImageScanningConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `scanOnPush`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageScanningConfigurationImageScanningConfiguration.property.scanOnPush"></a>

- *Type:* `boolean`

---


### ECRResponsesPutImageTagMutability <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutImageTagMutability(__scope: Construct, __resources: string[], __input: EcrPutImageTagMutabilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest`](#aws-cdk-sdk.ecr.EcrPutImageTagMutabilityRequest)

---



#### Properties <a name="Properties"></a>

##### `imageTagMutability`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.property.imageTagMutability"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutImageTagMutability.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesPutLifecyclePolicy <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutLifecyclePolicy(__scope: Construct, __resources: string[], __input: EcrPutLifecyclePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest`](#aws-cdk-sdk.ecr.EcrPutLifecyclePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutLifecyclePolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesPutRepositoryPolicy <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesPutRepositoryPolicy(__scope: Construct, __resources: string[], __input: EcrSetRepositoryPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest`](#aws-cdk-sdk.ecr.EcrSetRepositoryPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.property.policyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesPutRepositoryPolicy.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesStartImageScan <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesStartImageScan(__scope: Construct, __resources: string[], __input: EcrStartImageScanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartImageScanRequest`](#aws-cdk-sdk.ecr.EcrStartImageScanRequest)

---



#### Properties <a name="Properties"></a>

##### `imageId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.property.imageId"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId`](#aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId)

---

##### `imageScanStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.property.imageScanStatus"></a>

- *Type:* [`aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus`](#aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus)

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScan.property.repositoryName"></a>

- *Type:* `string`

---


### ECRResponsesStartImageScanImageId <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesStartImageScanImageId(__scope: Construct, __resources: string[], __input: EcrStartImageScanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartImageScanRequest`](#aws-cdk-sdk.ecr.EcrStartImageScanRequest)

---



#### Properties <a name="Properties"></a>

##### `imageDigest`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.property.imageDigest"></a>

- *Type:* `string`

---

##### `imageTag`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageId.property.imageTag"></a>

- *Type:* `string`

---


### ECRResponsesStartImageScanImageScanStatus <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesStartImageScanImageScanStatus(__scope: Construct, __resources: string[], __input: EcrStartImageScanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartImageScanRequest`](#aws-cdk-sdk.ecr.EcrStartImageScanRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartImageScanImageScanStatus.property.status"></a>

- *Type:* `string`

---


### ECRResponsesStartLifecyclePolicyPreview <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesStartLifecyclePolicyPreview(__scope: Construct, __resources: string[], __input: EcrStartLifecyclePolicyPreviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest`](#aws-cdk-sdk.ecr.EcrStartLifecyclePolicyPreviewRequest)

---



#### Properties <a name="Properties"></a>

##### `lifecyclePolicyText`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.property.lifecyclePolicyText"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.property.repositoryName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesStartLifecyclePolicyPreview.property.status"></a>

- *Type:* `string`

---


### ECRResponsesUploadLayerPart <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart"></a>

#### Initializer <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.Initializer"></a>

```typescript
import { ecr } from 'aws-cdk-sdk'

new ecr.ECRResponsesUploadLayerPart(__scope: Construct, __resources: string[], __input: EcrUploadLayerPartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecr.EcrUploadLayerPartRequest`](#aws-cdk-sdk.ecr.EcrUploadLayerPartRequest)

---



#### Properties <a name="Properties"></a>

##### `lastByteReceived`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.property.lastByteReceived"></a>

- *Type:* `number`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.property.registryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.property.repositoryName"></a>

- *Type:* `string`

---

##### `uploadId`<sup>Required</sup> <a name="aws-cdk-sdk.ecr.ECRResponsesUploadLayerPart.property.uploadId"></a>

- *Type:* `string`

---



