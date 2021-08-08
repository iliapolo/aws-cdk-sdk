# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ImagebuilderClient <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelImageCreation` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.cancelImageCreation"></a>

```typescript
public cancelImageCreation(input: ImagebuilderCancelImageCreationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest)

---

##### `createComponent` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createComponent"></a>

```typescript
public createComponent(input: ImagebuilderCreateComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest)

---

##### `createDistributionConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createDistributionConfiguration"></a>

```typescript
public createDistributionConfiguration(input: ImagebuilderCreateDistributionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest)

---

##### `createImage` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createImage"></a>

```typescript
public createImage(input: ImagebuilderCreateImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest)

---

##### `createImagePipeline` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createImagePipeline"></a>

```typescript
public createImagePipeline(input: ImagebuilderCreateImagePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest)

---

##### `createImageRecipe` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createImageRecipe"></a>

```typescript
public createImageRecipe(input: ImagebuilderCreateImageRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest)

---

##### `createInfrastructureConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.createInfrastructureConfiguration"></a>

```typescript
public createInfrastructureConfiguration(input: ImagebuilderCreateInfrastructureConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest)

---

##### `deleteComponent` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteComponent"></a>

```typescript
public deleteComponent(input: ImagebuilderDeleteComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest)

---

##### `deleteDistributionConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteDistributionConfiguration"></a>

```typescript
public deleteDistributionConfiguration(input: ImagebuilderDeleteDistributionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest)

---

##### `deleteImage` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteImage"></a>

```typescript
public deleteImage(input: ImagebuilderDeleteImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest)

---

##### `deleteImagePipeline` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteImagePipeline"></a>

```typescript
public deleteImagePipeline(input: ImagebuilderDeleteImagePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest)

---

##### `deleteImageRecipe` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteImageRecipe"></a>

```typescript
public deleteImageRecipe(input: ImagebuilderDeleteImageRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest)

---

##### `deleteInfrastructureConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.deleteInfrastructureConfiguration"></a>

```typescript
public deleteInfrastructureConfiguration(input: ImagebuilderDeleteInfrastructureConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest)

---

##### `fetchComponent` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchComponent"></a>

```typescript
public fetchComponent(input: ImagebuilderGetComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest)

---

##### `fetchComponentPolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchComponentPolicy"></a>

```typescript
public fetchComponentPolicy(input: ImagebuilderGetComponentPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest)

---

##### `fetchDistributionConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchDistributionConfiguration"></a>

```typescript
public fetchDistributionConfiguration(input: ImagebuilderGetDistributionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest)

---

##### `fetchImage` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchImage"></a>

```typescript
public fetchImage(input: ImagebuilderGetImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---

##### `fetchImagePipeline` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchImagePipeline"></a>

```typescript
public fetchImagePipeline(input: ImagebuilderGetImagePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest)

---

##### `fetchImagePolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchImagePolicy"></a>

```typescript
public fetchImagePolicy(input: ImagebuilderGetImagePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest)

---

##### `fetchImageRecipe` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchImageRecipe"></a>

```typescript
public fetchImageRecipe(input: ImagebuilderGetImageRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest)

---

##### `fetchImageRecipePolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchImageRecipePolicy"></a>

```typescript
public fetchImageRecipePolicy(input: ImagebuilderGetImageRecipePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest)

---

##### `fetchInfrastructureConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.fetchInfrastructureConfiguration"></a>

```typescript
public fetchInfrastructureConfiguration(input: ImagebuilderGetInfrastructureConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest)

---

##### `importComponent` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.importComponent"></a>

```typescript
public importComponent(input: ImagebuilderImportComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest)

---

##### `listComponentBuildVersions` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listComponentBuildVersions"></a>

```typescript
public listComponentBuildVersions(input: ImagebuilderListComponentBuildVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest)

---

##### `listComponents` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listComponents"></a>

```typescript
public listComponents(input: ImagebuilderListComponentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest)

---

##### `listDistributionConfigurations` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listDistributionConfigurations"></a>

```typescript
public listDistributionConfigurations(input: ImagebuilderListDistributionConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest)

---

##### `listImageBuildVersions` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listImageBuildVersions"></a>

```typescript
public listImageBuildVersions(input: ImagebuilderListImageBuildVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest)

---

##### `listImagePipelineImages` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listImagePipelineImages"></a>

```typescript
public listImagePipelineImages(input: ImagebuilderListImagePipelineImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest)

---

##### `listImagePipelines` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listImagePipelines"></a>

```typescript
public listImagePipelines(input: ImagebuilderListImagePipelinesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest)

---

##### `listImageRecipes` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listImageRecipes"></a>

```typescript
public listImageRecipes(input: ImagebuilderListImageRecipesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest)

---

##### `listImages` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listImages"></a>

```typescript
public listImages(input: ImagebuilderListImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest)

---

##### `listInfrastructureConfigurations` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listInfrastructureConfigurations"></a>

```typescript
public listInfrastructureConfigurations(input: ImagebuilderListInfrastructureConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ImagebuilderListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest)

---

##### `putComponentPolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.putComponentPolicy"></a>

```typescript
public putComponentPolicy(input: ImagebuilderPutComponentPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest)

---

##### `putImagePolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.putImagePolicy"></a>

```typescript
public putImagePolicy(input: ImagebuilderPutImagePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest)

---

##### `putImageRecipePolicy` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.putImageRecipePolicy"></a>

```typescript
public putImageRecipePolicy(input: ImagebuilderPutImageRecipePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest)

---

##### `startImagePipelineExecution` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.startImagePipelineExecution"></a>

```typescript
public startImagePipelineExecution(input: ImagebuilderStartImagePipelineExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.tagResource"></a>

```typescript
public tagResource(input: ImagebuilderTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.untagResource"></a>

```typescript
public untagResource(input: ImagebuilderUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceRequest)

---

##### `updateDistributionConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.updateDistributionConfiguration"></a>

```typescript
public updateDistributionConfiguration(input: ImagebuilderUpdateDistributionConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest)

---

##### `updateImagePipeline` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.updateImagePipeline"></a>

```typescript
public updateImagePipeline(input: ImagebuilderUpdateImagePipelineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest)

---

##### `updateInfrastructureConfiguration` <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.updateInfrastructureConfiguration"></a>

```typescript
public updateInfrastructureConfiguration(input: ImagebuilderUpdateInfrastructureConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest)

---




## Structs <a name="Structs"></a>

### ImagebuilderAmi <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderAmi: imagebuilder.ImagebuilderAmi = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.accountId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.description"></a>

- *Type:* `string`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.image"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.region"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmi.property.state"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageState`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageState)

---

### ImagebuilderAmiDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderAmiDistributionConfiguration: imagebuilder.ImagebuilderAmiDistributionConfiguration = { ... }
```

##### `amiTags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.amiTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `launchPermission`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.launchPermission"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderLaunchPermissionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderLaunchPermissionConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `targetAccountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration.property.targetAccountIds"></a>

- *Type:* `string`[]

---

### ImagebuilderCancelImageCreationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCancelImageCreationRequest: imagebuilder.ImagebuilderCancelImageCreationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

### ImagebuilderCancelImageCreationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCancelImageCreationResponse: imagebuilder.ImagebuilderCancelImageCreationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationResponse.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderComponent: imagebuilder.ImagebuilderComponent = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.arn"></a>

- *Type:* `string`

---

##### `changeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.changeDescription"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.data"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.encrypted"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.platform"></a>

- *Type:* `string`

---

##### `supportedOsVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.supportedOsVersions"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponent.property.version"></a>

- *Type:* `string`

---

### ImagebuilderComponentConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderComponentConfiguration: imagebuilder.ImagebuilderComponentConfiguration = { ... }
```

##### `componentArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration.property.componentArn"></a>

- *Type:* `string`

---

### ImagebuilderComponentSummary <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderComponentSummary: imagebuilder.ImagebuilderComponentSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.arn"></a>

- *Type:* `string`

---

##### `changeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.changeDescription"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.platform"></a>

- *Type:* `string`

---

##### `supportedOsVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.supportedOsVersions"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary.property.version"></a>

- *Type:* `string`

---

### ImagebuilderComponentVersion <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderComponentVersion: imagebuilder.ImagebuilderComponentVersion = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.platform"></a>

- *Type:* `string`

---

##### `supportedOsVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.supportedOsVersions"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion.property.version"></a>

- *Type:* `string`

---

### ImagebuilderCreateComponentRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateComponentRequest: imagebuilder.ImagebuilderCreateComponentRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.platform"></a>

- *Type:* `string`

---

##### `semanticVersion`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.semanticVersion"></a>

- *Type:* `string`

---

##### `changeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.changeDescription"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.data"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `supportedOsVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.supportedOsVersions"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest.property.uri"></a>

- *Type:* `string`

---

### ImagebuilderCreateComponentResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateComponentResponse: imagebuilder.ImagebuilderCreateComponentResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `componentBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentResponse.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderCreateDistributionConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateDistributionConfigurationRequest: imagebuilder.ImagebuilderCreateDistributionConfigurationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `distributions`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistribution`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistribution)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderCreateDistributionConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateDistributionConfigurationResponse: imagebuilder.ImagebuilderCreateDistributionConfigurationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationResponse.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderCreateImagePipelineRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImagePipelineRequest: imagebuilder.ImagebuilderCreateImagePipelineRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.description"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderSchedule`](#aws-cdk-sdk.imagebuilder.ImagebuilderSchedule)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderCreateImagePipelineResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImagePipelineResponse: imagebuilder.ImagebuilderCreateImagePipelineResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineResponse.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderCreateImageRecipeRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImageRecipeRequest: imagebuilder.ImagebuilderCreateImageRecipeRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `components`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.components"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.name"></a>

- *Type:* `string`

---

##### `parentImage`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.parentImage"></a>

- *Type:* `string`

---

##### `semanticVersion`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.semanticVersion"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping`](#aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `workingDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest.property.workingDirectory"></a>

- *Type:* `string`

---

### ImagebuilderCreateImageRecipeResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImageRecipeResponse: imagebuilder.ImagebuilderCreateImageRecipeResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imageRecipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeResponse.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderCreateImageRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImageRequest: imagebuilder.ImagebuilderCreateImageRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderCreateImageResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateImageResponse: imagebuilder.ImagebuilderCreateImageResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageResponse.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderCreateInfrastructureConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateInfrastructureConfigurationRequest: imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.keyPair"></a>

- *Type:* `string`

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.logging"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderLogging`](#aws-cdk-sdk.imagebuilder.ImagebuilderLogging)

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `terminateInstanceOnFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest.property.terminateInstanceOnFailure"></a>

- *Type:* `boolean`

---

### ImagebuilderCreateInfrastructureConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderCreateInfrastructureConfigurationResponse: imagebuilder.ImagebuilderCreateInfrastructureConfigurationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationResponse.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteComponentRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteComponentRequest: imagebuilder.ImagebuilderDeleteComponentRequest = { ... }
```

##### `componentBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteComponentResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteComponentResponse: imagebuilder.ImagebuilderDeleteComponentResponse = { ... }
```

##### `componentBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentResponse.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteDistributionConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteDistributionConfigurationRequest: imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest = { ... }
```

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteDistributionConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteDistributionConfigurationResponse: imagebuilder.ImagebuilderDeleteDistributionConfigurationResponse = { ... }
```

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationResponse.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImagePipelineRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImagePipelineRequest: imagebuilder.ImagebuilderDeleteImagePipelineRequest = { ... }
```

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest.property.imagePipelineArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImagePipelineResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImagePipelineResponse: imagebuilder.ImagebuilderDeleteImagePipelineResponse = { ... }
```

##### `imagePipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineResponse.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImageRecipeRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImageRecipeRequest: imagebuilder.ImagebuilderDeleteImageRecipeRequest = { ... }
```

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImageRecipeResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImageRecipeResponse: imagebuilder.ImagebuilderDeleteImageRecipeResponse = { ... }
```

##### `imageRecipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeResponse.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImageRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImageRequest: imagebuilder.ImagebuilderDeleteImageRequest = { ... }
```

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteImageResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteImageResponse: imagebuilder.ImagebuilderDeleteImageResponse = { ... }
```

##### `imageBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageResponse.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDeleteInfrastructureConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteInfrastructureConfigurationRequest: imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest = { ... }
```

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

### ImagebuilderDeleteInfrastructureConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDeleteInfrastructureConfigurationResponse: imagebuilder.ImagebuilderDeleteInfrastructureConfigurationResponse = { ... }
```

##### `infrastructureConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationResponse.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderDistribution <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistribution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDistribution: imagebuilder.ImagebuilderDistribution = { ... }
```

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistribution.property.region"></a>

- *Type:* `string`

---

##### `amiDistributionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistribution.property.amiDistributionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderAmiDistributionConfiguration)

---

##### `licenseConfigurationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistribution.property.licenseConfigurationArns"></a>

- *Type:* `string`[]

---

### ImagebuilderDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDistributionConfiguration: imagebuilder.ImagebuilderDistributionConfiguration = { ... }
```

##### `timeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `distributions`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistribution`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistribution)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderDistributionConfigurationSummary <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderDistributionConfigurationSummary: imagebuilder.ImagebuilderDistributionConfigurationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderEbsInstanceBlockDeviceSpecification <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderEbsInstanceBlockDeviceSpecification: imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification = { ... }
```

##### `deleteOnTermination`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.deleteOnTermination"></a>

- *Type:* `boolean`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.encrypted"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification.property.volumeType"></a>

- *Type:* `string`

---

### ImagebuilderFilter <a name="aws-cdk-sdk.imagebuilder.ImagebuilderFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderFilter: imagebuilder.ImagebuilderFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderFilter.property.values"></a>

- *Type:* `string`[]

---

### ImagebuilderGetComponentPolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetComponentPolicyRequest: imagebuilder.ImagebuilderGetComponentPolicyRequest = { ... }
```

##### `componentArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest.property.componentArn"></a>

- *Type:* `string`

---

### ImagebuilderGetComponentPolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetComponentPolicyResponse: imagebuilder.ImagebuilderGetComponentPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetComponentRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetComponentRequest: imagebuilder.ImagebuilderGetComponentRequest = { ... }
```

##### `componentBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

### ImagebuilderGetComponentResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetComponentResponse: imagebuilder.ImagebuilderGetComponentResponse = { ... }
```

##### `component`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentResponse.property.component"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponent`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponent)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetDistributionConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetDistributionConfigurationRequest: imagebuilder.ImagebuilderGetDistributionConfigurationRequest = { ... }
```

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

### ImagebuilderGetDistributionConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetDistributionConfigurationResponse: imagebuilder.ImagebuilderGetDistributionConfigurationResponse = { ... }
```

##### `distributionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationResponse.property.distributionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetImagePipelineRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImagePipelineRequest: imagebuilder.ImagebuilderGetImagePipelineRequest = { ... }
```

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest.property.imagePipelineArn"></a>

- *Type:* `string`

---

### ImagebuilderGetImagePipelineResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImagePipelineResponse: imagebuilder.ImagebuilderGetImagePipelineResponse = { ... }
```

##### `imagePipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineResponse.property.imagePipeline"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline`](#aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetImagePolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImagePolicyRequest: imagebuilder.ImagebuilderGetImagePolicyRequest = { ... }
```

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest.property.imageArn"></a>

- *Type:* `string`

---

### ImagebuilderGetImagePolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImagePolicyResponse: imagebuilder.ImagebuilderGetImagePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetImageRecipePolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageRecipePolicyRequest: imagebuilder.ImagebuilderGetImageRecipePolicyRequest = { ... }
```

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

### ImagebuilderGetImageRecipePolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageRecipePolicyResponse: imagebuilder.ImagebuilderGetImageRecipePolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyResponse.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetImageRecipeRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageRecipeRequest: imagebuilder.ImagebuilderGetImageRecipeRequest = { ... }
```

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

### ImagebuilderGetImageRecipeResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageRecipeResponse: imagebuilder.ImagebuilderGetImageRecipeResponse = { ... }
```

##### `imageRecipe`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeResponse.property.imageRecipe"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetImageRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageRequest: imagebuilder.ImagebuilderGetImageRequest = { ... }
```

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

### ImagebuilderGetImageResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetImageResponse: imagebuilder.ImagebuilderGetImageResponse = { ... }
```

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageResponse.property.image"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImage`](#aws-cdk-sdk.imagebuilder.ImagebuilderImage)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetImageResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderGetInfrastructureConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetInfrastructureConfigurationRequest: imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest = { ... }
```

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

### ImagebuilderGetInfrastructureConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderGetInfrastructureConfigurationResponse: imagebuilder.ImagebuilderGetInfrastructureConfigurationResponse = { ... }
```

##### `infrastructureConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationResponse.property.infrastructureConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderImage <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImage: imagebuilder.ImagebuilderImage = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.dateCreated"></a>

- *Type:* `string`

---

##### `distributionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.distributionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfiguration)

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageRecipe`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.imageRecipe"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe)

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration)

---

##### `infrastructureConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.infrastructureConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.name"></a>

- *Type:* `string`

---

##### `osVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.osVersion"></a>

- *Type:* `string`

---

##### `outputResources`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.outputResources"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources`](#aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources)

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.platform"></a>

- *Type:* `string`

---

##### `sourcePipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.sourcePipelineArn"></a>

- *Type:* `string`

---

##### `sourcePipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.sourcePipelineName"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.state"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageState`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageState)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImage.property.version"></a>

- *Type:* `string`

---

### ImagebuilderImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImagePipeline: imagebuilder.ImagebuilderImagePipeline = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateLastRun`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.dateLastRun"></a>

- *Type:* `string`

---

##### `dateNextRun`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.dateNextRun"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.description"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageRecipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration)

---

##### `infrastructureConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.platform"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderSchedule`](#aws-cdk-sdk.imagebuilder.ImagebuilderSchedule)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageRecipe: imagebuilder.ImagebuilderImageRecipe = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.arn"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping`](#aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping)[]

---

##### `components`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.components"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration)[]

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.owner"></a>

- *Type:* `string`

---

##### `parentImage`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.parentImage"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.platform"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.version"></a>

- *Type:* `string`

---

##### `workingDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipe.property.workingDirectory"></a>

- *Type:* `string`

---

### ImagebuilderImageRecipeSummary <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageRecipeSummary: imagebuilder.ImagebuilderImageRecipeSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.dateCreated"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.owner"></a>

- *Type:* `string`

---

##### `parentImage`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.parentImage"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.platform"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderImageState <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageState: imagebuilder.ImagebuilderImageState = { ... }
```

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageState.property.reason"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageState.property.status"></a>

- *Type:* `string`

---

### ImagebuilderImageSummary <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageSummary: imagebuilder.ImagebuilderImageSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.dateCreated"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.name"></a>

- *Type:* `string`

---

##### `osVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.osVersion"></a>

- *Type:* `string`

---

##### `outputResources`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.outputResources"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources`](#aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources)

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.platform"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.state"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageState`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageState)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary.property.version"></a>

- *Type:* `string`

---

### ImagebuilderImageTestsConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageTestsConfiguration: imagebuilder.ImagebuilderImageTestsConfiguration = { ... }
```

##### `imageTestsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration.property.imageTestsEnabled"></a>

- *Type:* `boolean`

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---

### ImagebuilderImageVersion <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImageVersion: imagebuilder.ImagebuilderImageVersion = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.dateCreated"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.name"></a>

- *Type:* `string`

---

##### `osVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.osVersion"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.platform"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion.property.version"></a>

- *Type:* `string`

---

### ImagebuilderImportComponentRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImportComponentRequest: imagebuilder.ImagebuilderImportComponentRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.format"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.platform"></a>

- *Type:* `string`

---

##### `semanticVersion`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.semanticVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.type"></a>

- *Type:* `string`

---

##### `changeDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.changeDescription"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.data"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest.property.uri"></a>

- *Type:* `string`

---

### ImagebuilderImportComponentResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderImportComponentResponse: imagebuilder.ImagebuilderImportComponentResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `componentBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentResponse.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderInfrastructureConfiguration: imagebuilder.ImagebuilderInfrastructureConfiguration = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.description"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.keyPair"></a>

- *Type:* `string`

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.logging"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderLogging`](#aws-cdk-sdk.imagebuilder.ImagebuilderLogging)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.name"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `terminateInstanceOnFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

- *Type:* `boolean`

---

### ImagebuilderInfrastructureConfigurationSummary <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderInfrastructureConfigurationSummary: imagebuilder.ImagebuilderInfrastructureConfigurationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.name"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderInstanceBlockDeviceMapping <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderInstanceBlockDeviceMapping: imagebuilder.ImagebuilderInstanceBlockDeviceMapping = { ... }
```

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping.property.deviceName"></a>

- *Type:* `string`

---

##### `ebs`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping.property.ebs"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification`](#aws-cdk-sdk.imagebuilder.ImagebuilderEbsInstanceBlockDeviceSpecification)

---

##### `noDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping.property.noDevice"></a>

- *Type:* `string`

---

##### `virtualName`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping.property.virtualName"></a>

- *Type:* `string`

---

### ImagebuilderLaunchPermissionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderLaunchPermissionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderLaunchPermissionConfiguration: imagebuilder.ImagebuilderLaunchPermissionConfiguration = { ... }
```

##### `userGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderLaunchPermissionConfiguration.property.userGroups"></a>

- *Type:* `string`[]

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderLaunchPermissionConfiguration.property.userIds"></a>

- *Type:* `string`[]

---

### ImagebuilderListComponentBuildVersionsRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListComponentBuildVersionsRequest: imagebuilder.ImagebuilderListComponentBuildVersionsRequest = { ... }
```

##### `componentVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest.property.componentVersionArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListComponentBuildVersionsResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListComponentBuildVersionsResponse: imagebuilder.ImagebuilderListComponentBuildVersionsResponse = { ... }
```

##### `componentSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsResponse.property.componentSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListComponentsRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListComponentsRequest: imagebuilder.ImagebuilderListComponentsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest.property.owner"></a>

- *Type:* `string`

---

### ImagebuilderListComponentsResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListComponentsResponse: imagebuilder.ImagebuilderListComponentsResponse = { ... }
```

##### `componentVersionList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsResponse.property.componentVersionList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListDistributionConfigurationsRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListDistributionConfigurationsRequest: imagebuilder.ImagebuilderListDistributionConfigurationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListDistributionConfigurationsResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListDistributionConfigurationsResponse: imagebuilder.ImagebuilderListDistributionConfigurationsResponse = { ... }
```

##### `distributionConfigurationSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsResponse.property.distributionConfigurationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListImageBuildVersionsRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImageBuildVersionsRequest: imagebuilder.ImagebuilderListImageBuildVersionsRequest = { ... }
```

##### `imageVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest.property.imageVersionArn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListImageBuildVersionsResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImageBuildVersionsResponse: imagebuilder.ImagebuilderListImageBuildVersionsResponse = { ... }
```

##### `imageSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsResponse.property.imageSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListImagePipelineImagesRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagePipelineImagesRequest: imagebuilder.ImagebuilderListImagePipelineImagesRequest = { ... }
```

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListImagePipelineImagesResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagePipelineImagesResponse: imagebuilder.ImagebuilderListImagePipelineImagesResponse = { ... }
```

##### `imageSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesResponse.property.imageSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListImagePipelinesRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagePipelinesRequest: imagebuilder.ImagebuilderListImagePipelinesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListImagePipelinesResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagePipelinesResponse: imagebuilder.ImagebuilderListImagePipelinesResponse = { ... }
```

##### `imagePipelineList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesResponse.property.imagePipelineList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline`](#aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListImageRecipesRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImageRecipesRequest: imagebuilder.ImagebuilderListImageRecipesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest.property.owner"></a>

- *Type:* `string`

---

### ImagebuilderListImageRecipesResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImageRecipesResponse: imagebuilder.ImagebuilderListImageRecipesResponse = { ... }
```

##### `imageRecipeSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesResponse.property.imageRecipeSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListImagesRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagesRequest: imagebuilder.ImagebuilderListImagesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest.property.owner"></a>

- *Type:* `string`

---

### ImagebuilderListImagesResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListImagesResponse: imagebuilder.ImagebuilderListImagesResponse = { ... }
```

##### `imageVersionList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesResponse.property.imageVersionList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListImagesResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListInfrastructureConfigurationsRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListInfrastructureConfigurationsRequest: imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderFilter`](#aws-cdk-sdk.imagebuilder.ImagebuilderFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ImagebuilderListInfrastructureConfigurationsResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListInfrastructureConfigurationsResponse: imagebuilder.ImagebuilderListInfrastructureConfigurationsResponse = { ... }
```

##### `infrastructureConfigurationSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsResponse.property.infrastructureConfigurationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderListTagsForResourceRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListTagsForResourceRequest: imagebuilder.ImagebuilderListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ImagebuilderListTagsForResourceResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderListTagsForResourceResponse: imagebuilder.ImagebuilderListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderLogging <a name="aws-cdk-sdk.imagebuilder.ImagebuilderLogging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderLogging: imagebuilder.ImagebuilderLogging = { ... }
```

##### `s3Logs`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderLogging.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderS3Logs`](#aws-cdk-sdk.imagebuilder.ImagebuilderS3Logs)

---

### ImagebuilderOutputResources <a name="aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderOutputResources: imagebuilder.ImagebuilderOutputResources = { ... }
```

##### `amis`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderOutputResources.property.amis"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderAmi`](#aws-cdk-sdk.imagebuilder.ImagebuilderAmi)[]

---

### ImagebuilderPutComponentPolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutComponentPolicyRequest: imagebuilder.ImagebuilderPutComponentPolicyRequest = { ... }
```

##### `componentArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest.property.componentArn"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest.property.policy"></a>

- *Type:* `string`

---

### ImagebuilderPutComponentPolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutComponentPolicyResponse: imagebuilder.ImagebuilderPutComponentPolicyResponse = { ... }
```

##### `componentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyResponse.property.componentArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderPutImagePolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutImagePolicyRequest: imagebuilder.ImagebuilderPutImagePolicyRequest = { ... }
```

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest.property.imageArn"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest.property.policy"></a>

- *Type:* `string`

---

### ImagebuilderPutImagePolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutImagePolicyResponse: imagebuilder.ImagebuilderPutImagePolicyResponse = { ... }
```

##### `imageArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyResponse.property.imageArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderPutImageRecipePolicyRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutImageRecipePolicyRequest: imagebuilder.ImagebuilderPutImageRecipePolicyRequest = { ... }
```

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest.property.policy"></a>

- *Type:* `string`

---

### ImagebuilderPutImageRecipePolicyResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderPutImageRecipePolicyResponse: imagebuilder.ImagebuilderPutImageRecipePolicyResponse = { ... }
```

##### `imageRecipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyResponse.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderS3Logs <a name="aws-cdk-sdk.imagebuilder.ImagebuilderS3Logs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderS3Logs: imagebuilder.ImagebuilderS3Logs = { ... }
```

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderS3Logs.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderS3Logs.property.s3KeyPrefix"></a>

- *Type:* `string`

---

### ImagebuilderSchedule <a name="aws-cdk-sdk.imagebuilder.ImagebuilderSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderSchedule: imagebuilder.ImagebuilderSchedule = { ... }
```

##### `pipelineExecutionStartCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderSchedule.property.pipelineExecutionStartCondition"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---

### ImagebuilderStartImagePipelineExecutionRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderStartImagePipelineExecutionRequest: imagebuilder.ImagebuilderStartImagePipelineExecutionRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest.property.imagePipelineArn"></a>

- *Type:* `string`

---

### ImagebuilderStartImagePipelineExecutionResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderStartImagePipelineExecutionResponse: imagebuilder.ImagebuilderStartImagePipelineExecutionResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionResponse.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderTagResourceRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderTagResourceRequest: imagebuilder.ImagebuilderTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ImagebuilderTagResourceResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderTagResourceResponse: imagebuilder.ImagebuilderTagResourceResponse = { ... }
```

### ImagebuilderUntagResourceRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUntagResourceRequest: imagebuilder.ImagebuilderUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ImagebuilderUntagResourceResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUntagResourceResponse: imagebuilder.ImagebuilderUntagResourceResponse = { ... }
```

### ImagebuilderUpdateDistributionConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateDistributionConfigurationRequest: imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `distributions`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistribution`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistribution)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest.property.description"></a>

- *Type:* `string`

---

### ImagebuilderUpdateDistributionConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateDistributionConfigurationResponse: imagebuilder.ImagebuilderUpdateDistributionConfigurationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationResponse.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderUpdateImagePipelineRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateImagePipelineRequest: imagebuilder.ImagebuilderUpdateImagePipelineRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.description"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageTestsConfiguration)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderSchedule`](#aws-cdk-sdk.imagebuilder.ImagebuilderSchedule)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest.property.status"></a>

- *Type:* `string`

---

### ImagebuilderUpdateImagePipelineResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateImagePipelineResponse: imagebuilder.ImagebuilderUpdateImagePipelineResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineResponse.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineResponse.property.requestId"></a>

- *Type:* `string`

---

### ImagebuilderUpdateInfrastructureConfigurationRequest <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateInfrastructureConfigurationRequest: imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.keyPair"></a>

- *Type:* `string`

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.logging"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderLogging`](#aws-cdk-sdk.imagebuilder.ImagebuilderLogging)

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `terminateInstanceOnFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest.property.terminateInstanceOnFailure"></a>

- *Type:* `boolean`

---

### ImagebuilderUpdateInfrastructureConfigurationResponse <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

const imagebuilderUpdateInfrastructureConfigurationResponse: imagebuilder.ImagebuilderUpdateInfrastructureConfigurationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationResponse.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationResponse.property.requestId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ImagebuilderResponsesCancelImageCreation <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCancelImageCreation(__scope: Construct, __resources: string[], __input: ImagebuilderCancelImageCreationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCancelImageCreationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCancelImageCreation.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateComponent(__scope: Construct, __resources: string[], __input: ImagebuilderCreateComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.property.clientToken"></a>

- *Type:* `string`

---

##### `componentBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateComponent.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderCreateDistributionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateDistributionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.property.clientToken"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateDistributionConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateImage <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateImage(__scope: Construct, __resources: string[], __input: ImagebuilderCreateImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImage.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateImagePipeline(__scope: Construct, __resources: string[], __input: ImagebuilderCreateImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImagePipeline.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateImageRecipe(__scope: Construct, __resources: string[], __input: ImagebuilderCreateImageRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateImageRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.property.clientToken"></a>

- *Type:* `string`

---

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateImageRecipe.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesCreateInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderCreateInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderCreateInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.property.clientToken"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesCreateInfrastructureConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteComponent(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `componentBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteComponent.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteDistributionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteDistributionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteDistributionConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteImage <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteImage(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImage.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteImagePipeline(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImagePipeline.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteImageRecipe(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteImageRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteImageRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteImageRecipe.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesDeleteInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderDeleteInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderDeleteInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesDeleteInfrastructureConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchComponent(__scope: Construct, __resources: string[], __input: ImagebuilderGetComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `component`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.property.component"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponent.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchComponentComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchComponentComponent(__scope: Construct, __resources: string[], __input: ImagebuilderGetComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.arn"></a>

- *Type:* `string`

---

##### `changeDescription`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.changeDescription"></a>

- *Type:* `string`

---

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.data"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.encrypted"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.owner"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.platform"></a>

- *Type:* `string`

---

##### `supportedOsVersions`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.supportedOsVersions"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentComponent.property.version"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchComponentPolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchComponentPolicy(__scope: Construct, __resources: string[], __input: ImagebuilderGetComponentPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetComponentPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchComponentPolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetDistributionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `distributionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.property.distributionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetDistributionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetDistributionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `distributions`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistribution`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistribution)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchDistributionConfigurationDistributionConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---


### ImagebuilderResponsesFetchImage <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImage(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.property.image"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImage.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageImage <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImage(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.dateCreated"></a>

- *Type:* `string`

---

##### `distributionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.distributionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration)

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageRecipe`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.imageRecipe"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe)

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration)

---

##### `infrastructureConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.infrastructureConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.name"></a>

- *Type:* `string`

---

##### `osVersion`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.osVersion"></a>

- *Type:* `string`

---

##### `outputResources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.outputResources"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources)

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.platform"></a>

- *Type:* `string`

---

##### `sourcePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.sourcePipelineArn"></a>

- *Type:* `string`

---

##### `sourcePipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.sourcePipelineName"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.state"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImage.property.version"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageImageDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.description"></a>

- *Type:* `string`

---

##### `distributions`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistribution`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistribution)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageDistributionConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---


### ImagebuilderResponsesFetchImageImageImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.arn"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping`](#aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping)[]

---

##### `components`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.components"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration)[]

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.owner"></a>

- *Type:* `string`

---

##### `parentImage`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.parentImage"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.platform"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.version"></a>

- *Type:* `string`

---

##### `workingDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageRecipe.property.workingDirectory"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageImageImageTestsConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `imageTestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.property.imageTestsEnabled"></a>

- *Type:* `boolean`

---

##### `timeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageImageTestsConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---


### ImagebuilderResponsesFetchImageImageInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.description"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.keyPair"></a>

- *Type:* `string`

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.logging"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.name"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `terminateInstanceOnFailure`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

- *Type:* `boolean`

---


### ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLogging.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs)

---


### ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageImageOutputResources <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `amis`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageOutputResources.property.amis"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderAmi`](#aws-cdk-sdk.imagebuilder.ImagebuilderAmi)[]

---


### ImagebuilderResponsesFetchImageImageState <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageImageState(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.property.reason"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageImageState.property.status"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImagePipeline(__scope: Construct, __resources: string[], __input: ImagebuilderGetImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `imagePipeline`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.property.imagePipeline"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipeline.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImagePipelineImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline(__scope: Construct, __resources: string[], __input: ImagebuilderGetImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateLastRun`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.dateLastRun"></a>

- *Type:* `string`

---

##### `dateNextRun`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.dateNextRun"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.description"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.enhancedImageMetadataEnabled"></a>

- *Type:* `boolean`

---

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.imageTestsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration)

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.platform"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipeline.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `imageTestsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

- *Type:* `boolean`

---

##### `timeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

- *Type:* `number`

---


### ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule(__scope: Construct, __resources: string[], __input: ImagebuilderGetImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `pipelineExecutionStartCondition`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

- *Type:* `string`

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePipelineImagePipelineSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImagePolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImagePolicy(__scope: Construct, __resources: string[], __input: ImagebuilderGetImagePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImagePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImagePolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageRecipe(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `imageRecipe`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.property.imageRecipe"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipe.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageRecipeImageRecipe <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.arn"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping`](#aws-cdk-sdk.imagebuilder.ImagebuilderInstanceBlockDeviceMapping)[]

---

##### `components`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.components"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentConfiguration)[]

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.dateCreated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.owner"></a>

- *Type:* `string`

---

##### `parentImage`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.parentImage"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.platform"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.version"></a>

- *Type:* `string`

---

##### `workingDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipeImageRecipe.property.workingDirectory"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchImageRecipePolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy(__scope: Construct, __resources: string[], __input: ImagebuilderGetImageRecipePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetImageRecipePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.property.policy"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchImageRecipePolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `infrastructureConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.property.infrastructureConfiguration"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderGetInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.description"></a>

- *Type:* `string`

---

##### `instanceProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.instanceProfileName"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.keyPair"></a>

- *Type:* `string`

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.logging"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.name"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.resourceTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `terminateInstanceOnFailure`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

- *Type:* `boolean`

---


### ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging(__scope: Construct, __resources: string[], __input: ImagebuilderGetInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLogging.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs`](#aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs)

---


### ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs(__scope: Construct, __resources: string[], __input: ImagebuilderGetInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderGetInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesFetchInfrastructureConfigurationInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

- *Type:* `string`

---


### ImagebuilderResponsesImportComponent <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesImportComponent(__scope: Construct, __resources: string[], __input: ImagebuilderImportComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderImportComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.property.clientToken"></a>

- *Type:* `string`

---

##### `componentBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.property.componentBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesImportComponent.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListComponentBuildVersions <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListComponentBuildVersions(__scope: Construct, __resources: string[], __input: ImagebuilderListComponentBuildVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListComponentBuildVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `componentSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.property.componentSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponentBuildVersions.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListComponents <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListComponents(__scope: Construct, __resources: string[], __input: ImagebuilderListComponentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListComponentsRequest)

---



#### Properties <a name="Properties"></a>

##### `componentVersionList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.property.componentVersionList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion`](#aws-cdk-sdk.imagebuilder.ImagebuilderComponentVersion)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListComponents.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListDistributionConfigurations <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListDistributionConfigurations(__scope: Construct, __resources: string[], __input: ImagebuilderListDistributionConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListDistributionConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `distributionConfigurationSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.property.distributionConfigurationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderDistributionConfigurationSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListDistributionConfigurations.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListImageBuildVersions <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListImageBuildVersions(__scope: Construct, __resources: string[], __input: ImagebuilderListImageBuildVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImageBuildVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `imageSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.property.imageSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageBuildVersions.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListImagePipelineImages <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListImagePipelineImages(__scope: Construct, __resources: string[], __input: ImagebuilderListImagePipelineImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelineImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `imageSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.property.imageSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelineImages.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListImagePipelines <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListImagePipelines(__scope: Construct, __resources: string[], __input: ImagebuilderListImagePipelinesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagePipelinesRequest)

---



#### Properties <a name="Properties"></a>

##### `imagePipelineList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.property.imagePipelineList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline`](#aws-cdk-sdk.imagebuilder.ImagebuilderImagePipeline)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImagePipelines.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListImageRecipes <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListImageRecipes(__scope: Construct, __resources: string[], __input: ImagebuilderListImageRecipesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImageRecipesRequest)

---



#### Properties <a name="Properties"></a>

##### `imageRecipeSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.property.imageRecipeSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageRecipeSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImageRecipes.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListImages <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListImages(__scope: Construct, __resources: string[], __input: ImagebuilderListImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `imageVersionList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.property.imageVersionList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion`](#aws-cdk-sdk.imagebuilder.ImagebuilderImageVersion)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListImages.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListInfrastructureConfigurations <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations(__scope: Construct, __resources: string[], __input: ImagebuilderListInfrastructureConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListInfrastructureConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `infrastructureConfigurationSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.property.infrastructureConfigurationSummaryList"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary`](#aws-cdk-sdk.imagebuilder.ImagebuilderInfrastructureConfigurationSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListInfrastructureConfigurations.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesListTagsForResource <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ImagebuilderListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ImagebuilderResponsesPutComponentPolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesPutComponentPolicy(__scope: Construct, __resources: string[], __input: ImagebuilderPutComponentPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutComponentPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `componentArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.property.componentArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutComponentPolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesPutImagePolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesPutImagePolicy(__scope: Construct, __resources: string[], __input: ImagebuilderPutImagePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutImagePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `imageArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.property.imageArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImagePolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesPutImageRecipePolicy <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesPutImageRecipePolicy(__scope: Construct, __resources: string[], __input: ImagebuilderPutImageRecipePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderPutImageRecipePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `imageRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.property.imageRecipeArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesPutImageRecipePolicy.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesStartImagePipelineExecution <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesStartImagePipelineExecution(__scope: Construct, __resources: string[], __input: ImagebuilderStartImagePipelineExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderStartImagePipelineExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.property.clientToken"></a>

- *Type:* `string`

---

##### `imageBuildVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.property.imageBuildVersionArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesStartImagePipelineExecution.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesUpdateDistributionConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderUpdateDistributionConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateDistributionConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.property.clientToken"></a>

- *Type:* `string`

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.property.distributionConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateDistributionConfiguration.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesUpdateImagePipeline <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesUpdateImagePipeline(__scope: Construct, __resources: string[], __input: ImagebuilderUpdateImagePipelineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateImagePipelineRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.property.clientToken"></a>

- *Type:* `string`

---

##### `imagePipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.property.imagePipelineArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateImagePipeline.property.requestId"></a>

- *Type:* `string`

---


### ImagebuilderResponsesUpdateInfrastructureConfiguration <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.Initializer"></a>

```typescript
import { imagebuilder } from 'aws-cdk-sdk'

new imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration(__scope: Construct, __resources: string[], __input: ImagebuilderUpdateInfrastructureConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest`](#aws-cdk-sdk.imagebuilder.ImagebuilderUpdateInfrastructureConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.property.clientToken"></a>

- *Type:* `string`

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.property.infrastructureConfigurationArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.imagebuilder.ImagebuilderResponsesUpdateInfrastructureConfiguration.property.requestId"></a>

- *Type:* `string`

---



