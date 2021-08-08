# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaStoreClient <a name="aws-cdk-sdk.mediastore.MediaStoreClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreClient.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createContainer` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.createContainer"></a>

```typescript
public createContainer(input: MediaStoreCreateContainerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput)

---

##### `deleteContainer` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.deleteContainer"></a>

```typescript
public deleteContainer(input: MediaStoreDeleteContainerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDeleteContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreDeleteContainerInput)

---

##### `deleteContainerPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.deleteContainerPolicy"></a>

```typescript
public deleteContainerPolicy(input: MediaStoreDeleteContainerPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDeleteContainerPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreDeleteContainerPolicyInput)

---

##### `deleteCorsPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.deleteCorsPolicy"></a>

```typescript
public deleteCorsPolicy(input: MediaStoreDeleteCorsPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDeleteCorsPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreDeleteCorsPolicyInput)

---

##### `deleteLifecyclePolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.deleteLifecyclePolicy"></a>

```typescript
public deleteLifecyclePolicy(input: MediaStoreDeleteLifecyclePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDeleteLifecyclePolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreDeleteLifecyclePolicyInput)

---

##### `deleteMetricPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.deleteMetricPolicy"></a>

```typescript
public deleteMetricPolicy(input: MediaStoreDeleteMetricPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDeleteMetricPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreDeleteMetricPolicyInput)

---

##### `describeContainer` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.describeContainer"></a>

```typescript
public describeContainer(input: MediaStoreDescribeContainerInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput)

---

##### `fetchContainerPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.fetchContainerPolicy"></a>

```typescript
public fetchContainerPolicy(input: MediaStoreGetContainerPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput)

---

##### `fetchCorsPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.fetchCorsPolicy"></a>

```typescript
public fetchCorsPolicy(input: MediaStoreGetCorsPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput)

---

##### `fetchLifecyclePolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.fetchLifecyclePolicy"></a>

```typescript
public fetchLifecyclePolicy(input: MediaStoreGetLifecyclePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput)

---

##### `fetchMetricPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.fetchMetricPolicy"></a>

```typescript
public fetchMetricPolicy(input: MediaStoreGetMetricPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput)

---

##### `listContainers` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.listContainers"></a>

```typescript
public listContainers(input: MediaStoreListContainersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreListContainersInput`](#aws-cdk-sdk.mediastore.MediaStoreListContainersInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaStoreListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput`](#aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput)

---

##### `putContainerPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.putContainerPolicy"></a>

```typescript
public putContainerPolicy(input: MediaStorePutContainerPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyInput`](#aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyInput)

---

##### `putCorsPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.putCorsPolicy"></a>

```typescript
public putCorsPolicy(input: MediaStorePutCorsPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyInput`](#aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyInput)

---

##### `putLifecyclePolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.putLifecyclePolicy"></a>

```typescript
public putLifecyclePolicy(input: MediaStorePutLifecyclePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyInput`](#aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyInput)

---

##### `putMetricPolicy` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.putMetricPolicy"></a>

```typescript
public putMetricPolicy(input: MediaStorePutMetricPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyInput`](#aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyInput)

---

##### `startAccessLogging` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.startAccessLogging"></a>

```typescript
public startAccessLogging(input: MediaStoreStartAccessLoggingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreStartAccessLoggingInput`](#aws-cdk-sdk.mediastore.MediaStoreStartAccessLoggingInput)

---

##### `stopAccessLogging` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.stopAccessLogging"></a>

```typescript
public stopAccessLogging(input: MediaStoreStopAccessLoggingInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreStopAccessLoggingInput`](#aws-cdk-sdk.mediastore.MediaStoreStopAccessLoggingInput)

---

##### `tagResource` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.tagResource"></a>

```typescript
public tagResource(input: MediaStoreTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreTagResourceInput`](#aws-cdk-sdk.mediastore.MediaStoreTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.mediastore.MediaStoreClient.untagResource"></a>

```typescript
public untagResource(input: MediaStoreUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreUntagResourceInput`](#aws-cdk-sdk.mediastore.MediaStoreUntagResourceInput)

---




## Structs <a name="Structs"></a>

### MediaStoreContainer <a name="aws-cdk-sdk.mediastore.MediaStoreContainer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreContainer: mediastore.MediaStoreContainer = { ... }
```

##### `accessLoggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.accessLoggingEnabled"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.creationTime"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.endpoint"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreContainer.property.status"></a>

- *Type:* `string`

---

### MediaStoreCorsRule <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreCorsRule: mediastore.MediaStoreCorsRule = { ... }
```

##### `allowedHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule.property.allowedHeaders"></a>

- *Type:* `string`[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule.property.allowedOrigins"></a>

- *Type:* `string`[]

---

##### `allowedMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule.property.allowedMethods"></a>

- *Type:* `string`[]

---

##### `exposeHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule.property.exposeHeaders"></a>

- *Type:* `string`[]

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCorsRule.property.maxAgeSeconds"></a>

- *Type:* `number`

---

### MediaStoreCreateContainerInput <a name="aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreCreateContainerInput: mediastore.MediaStoreCreateContainerInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput.property.containerName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreTag`](#aws-cdk-sdk.mediastore.MediaStoreTag)[]

---

### MediaStoreCreateContainerOutput <a name="aws-cdk-sdk.mediastore.MediaStoreCreateContainerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreCreateContainerOutput: mediastore.MediaStoreCreateContainerOutput = { ... }
```

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreCreateContainerOutput.property.container"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreContainer`](#aws-cdk-sdk.mediastore.MediaStoreContainer)

---

### MediaStoreDeleteContainerInput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteContainerInput: mediastore.MediaStoreDeleteContainerInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDeleteContainerOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteContainerOutput: mediastore.MediaStoreDeleteContainerOutput = { ... }
```

### MediaStoreDeleteContainerPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteContainerPolicyInput: mediastore.MediaStoreDeleteContainerPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDeleteContainerPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteContainerPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteContainerPolicyOutput: mediastore.MediaStoreDeleteContainerPolicyOutput = { ... }
```

### MediaStoreDeleteCorsPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteCorsPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteCorsPolicyInput: mediastore.MediaStoreDeleteCorsPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteCorsPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDeleteCorsPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteCorsPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteCorsPolicyOutput: mediastore.MediaStoreDeleteCorsPolicyOutput = { ... }
```

### MediaStoreDeleteLifecyclePolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteLifecyclePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteLifecyclePolicyInput: mediastore.MediaStoreDeleteLifecyclePolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteLifecyclePolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDeleteLifecyclePolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteLifecyclePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteLifecyclePolicyOutput: mediastore.MediaStoreDeleteLifecyclePolicyOutput = { ... }
```

### MediaStoreDeleteMetricPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteMetricPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteMetricPolicyInput: mediastore.MediaStoreDeleteMetricPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteMetricPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDeleteMetricPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDeleteMetricPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDeleteMetricPolicyOutput: mediastore.MediaStoreDeleteMetricPolicyOutput = { ... }
```

### MediaStoreDescribeContainerInput <a name="aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDescribeContainerInput: mediastore.MediaStoreDescribeContainerInput = { ... }
```

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreDescribeContainerOutput <a name="aws-cdk-sdk.mediastore.MediaStoreDescribeContainerOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreDescribeContainerOutput: mediastore.MediaStoreDescribeContainerOutput = { ... }
```

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreDescribeContainerOutput.property.container"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreContainer`](#aws-cdk-sdk.mediastore.MediaStoreContainer)

---

### MediaStoreGetContainerPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetContainerPolicyInput: mediastore.MediaStoreGetContainerPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreGetContainerPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetContainerPolicyOutput: mediastore.MediaStoreGetContainerPolicyOutput = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyOutput.property.policy"></a>

- *Type:* `string`

---

### MediaStoreGetCorsPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetCorsPolicyInput: mediastore.MediaStoreGetCorsPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreGetCorsPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetCorsPolicyOutput: mediastore.MediaStoreGetCorsPolicyOutput = { ... }
```

##### `corsPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyOutput.property.corsPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCorsRule`](#aws-cdk-sdk.mediastore.MediaStoreCorsRule)[]

---

### MediaStoreGetLifecyclePolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetLifecyclePolicyInput: mediastore.MediaStoreGetLifecyclePolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreGetLifecyclePolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetLifecyclePolicyOutput: mediastore.MediaStoreGetLifecyclePolicyOutput = { ... }
```

##### `lifecyclePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyOutput.property.lifecyclePolicy"></a>

- *Type:* `string`

---

### MediaStoreGetMetricPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetMetricPolicyInput: mediastore.MediaStoreGetMetricPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreGetMetricPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreGetMetricPolicyOutput: mediastore.MediaStoreGetMetricPolicyOutput = { ... }
```

##### `metricPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyOutput.property.metricPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreMetricPolicy`](#aws-cdk-sdk.mediastore.MediaStoreMetricPolicy)

---

### MediaStoreListContainersInput <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreListContainersInput: mediastore.MediaStoreListContainersInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersInput.property.nextToken"></a>

- *Type:* `string`

---

### MediaStoreListContainersOutput <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreListContainersOutput: mediastore.MediaStoreListContainersOutput = { ... }
```

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersOutput.property.containers"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreContainer`](#aws-cdk-sdk.mediastore.MediaStoreContainer)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListContainersOutput.property.nextToken"></a>

- *Type:* `string`

---

### MediaStoreListTagsForResourceInput <a name="aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreListTagsForResourceInput: mediastore.MediaStoreListTagsForResourceInput = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput.property.resource"></a>

- *Type:* `string`

---

### MediaStoreListTagsForResourceOutput <a name="aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreListTagsForResourceOutput: mediastore.MediaStoreListTagsForResourceOutput = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreTag`](#aws-cdk-sdk.mediastore.MediaStoreTag)[]

---

### MediaStoreMetricPolicy <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreMetricPolicy: mediastore.MediaStoreMetricPolicy = { ... }
```

##### `containerLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicy.property.containerLevelMetrics"></a>

- *Type:* `string`

---

##### `metricPolicyRules`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicy.property.metricPolicyRules"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule`](#aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule)[]

---

### MediaStoreMetricPolicyRule <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreMetricPolicyRule: mediastore.MediaStoreMetricPolicyRule = { ... }
```

##### `objectGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule.property.objectGroup"></a>

- *Type:* `string`

---

##### `objectGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule.property.objectGroupName"></a>

- *Type:* `string`

---

### MediaStorePutContainerPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutContainerPolicyInput: mediastore.MediaStorePutContainerPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyInput.property.containerName"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyInput.property.policy"></a>

- *Type:* `string`

---

### MediaStorePutContainerPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStorePutContainerPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutContainerPolicyOutput: mediastore.MediaStorePutContainerPolicyOutput = { ... }
```

### MediaStorePutCorsPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutCorsPolicyInput: mediastore.MediaStorePutCorsPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyInput.property.containerName"></a>

- *Type:* `string`

---

##### `corsPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyInput.property.corsPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCorsRule`](#aws-cdk-sdk.mediastore.MediaStoreCorsRule)[]

---

### MediaStorePutCorsPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStorePutCorsPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutCorsPolicyOutput: mediastore.MediaStorePutCorsPolicyOutput = { ... }
```

### MediaStorePutLifecyclePolicyInput <a name="aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutLifecyclePolicyInput: mediastore.MediaStorePutLifecyclePolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyInput.property.containerName"></a>

- *Type:* `string`

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyInput.property.lifecyclePolicy"></a>

- *Type:* `string`

---

### MediaStorePutLifecyclePolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStorePutLifecyclePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutLifecyclePolicyOutput: mediastore.MediaStorePutLifecyclePolicyOutput = { ... }
```

### MediaStorePutMetricPolicyInput <a name="aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutMetricPolicyInput: mediastore.MediaStorePutMetricPolicyInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyInput.property.containerName"></a>

- *Type:* `string`

---

##### `metricPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyInput.property.metricPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreMetricPolicy`](#aws-cdk-sdk.mediastore.MediaStoreMetricPolicy)

---

### MediaStorePutMetricPolicyOutput <a name="aws-cdk-sdk.mediastore.MediaStorePutMetricPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStorePutMetricPolicyOutput: mediastore.MediaStorePutMetricPolicyOutput = { ... }
```

### MediaStoreStartAccessLoggingInput <a name="aws-cdk-sdk.mediastore.MediaStoreStartAccessLoggingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreStartAccessLoggingInput: mediastore.MediaStoreStartAccessLoggingInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreStartAccessLoggingInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreStartAccessLoggingOutput <a name="aws-cdk-sdk.mediastore.MediaStoreStartAccessLoggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreStartAccessLoggingOutput: mediastore.MediaStoreStartAccessLoggingOutput = { ... }
```

### MediaStoreStopAccessLoggingInput <a name="aws-cdk-sdk.mediastore.MediaStoreStopAccessLoggingInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreStopAccessLoggingInput: mediastore.MediaStoreStopAccessLoggingInput = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreStopAccessLoggingInput.property.containerName"></a>

- *Type:* `string`

---

### MediaStoreStopAccessLoggingOutput <a name="aws-cdk-sdk.mediastore.MediaStoreStopAccessLoggingOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreStopAccessLoggingOutput: mediastore.MediaStoreStopAccessLoggingOutput = { ... }
```

### MediaStoreTag <a name="aws-cdk-sdk.mediastore.MediaStoreTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreTag: mediastore.MediaStoreTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreTag.property.value"></a>

- *Type:* `string`

---

### MediaStoreTagResourceInput <a name="aws-cdk-sdk.mediastore.MediaStoreTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreTagResourceInput: mediastore.MediaStoreTagResourceInput = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreTagResourceInput.property.resource"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreTag`](#aws-cdk-sdk.mediastore.MediaStoreTag)[]

---

### MediaStoreTagResourceOutput <a name="aws-cdk-sdk.mediastore.MediaStoreTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreTagResourceOutput: mediastore.MediaStoreTagResourceOutput = { ... }
```

### MediaStoreUntagResourceInput <a name="aws-cdk-sdk.mediastore.MediaStoreUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreUntagResourceInput: mediastore.MediaStoreUntagResourceInput = { ... }
```

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreUntagResourceInput.property.resource"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### MediaStoreUntagResourceOutput <a name="aws-cdk-sdk.mediastore.MediaStoreUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

const mediaStoreUntagResourceOutput: mediastore.MediaStoreUntagResourceOutput = { ... }
```

## Classes <a name="Classes"></a>

### MediaStoreResponsesCreateContainer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesCreateContainer(__scope: Construct, __resources: string[], __input: MediaStoreCreateContainerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput)

---



#### Properties <a name="Properties"></a>

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainer.property.container"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer`](#aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer)

---


### MediaStoreResponsesCreateContainerContainer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesCreateContainerContainer(__scope: Construct, __resources: string[], __input: MediaStoreCreateContainerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreCreateContainerInput)

---



#### Properties <a name="Properties"></a>

##### `accessLoggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.accessLoggingEnabled"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.creationTime"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.endpoint"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesCreateContainerContainer.property.status"></a>

- *Type:* `string`

---


### MediaStoreResponsesDescribeContainer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesDescribeContainer(__scope: Construct, __resources: string[], __input: MediaStoreDescribeContainerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput)

---



#### Properties <a name="Properties"></a>

##### `container`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainer.property.container"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer`](#aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer)

---


### MediaStoreResponsesDescribeContainerContainer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesDescribeContainerContainer(__scope: Construct, __resources: string[], __input: MediaStoreDescribeContainerInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput`](#aws-cdk-sdk.mediastore.MediaStoreDescribeContainerInput)

---



#### Properties <a name="Properties"></a>

##### `accessLoggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.accessLoggingEnabled"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.creationTime"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.endpoint"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesDescribeContainerContainer.property.status"></a>

- *Type:* `string`

---


### MediaStoreResponsesFetchContainerPolicy <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesFetchContainerPolicy(__scope: Construct, __resources: string[], __input: MediaStoreGetContainerPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetContainerPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchContainerPolicy.property.policy"></a>

- *Type:* `string`

---


### MediaStoreResponsesFetchCorsPolicy <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesFetchCorsPolicy(__scope: Construct, __resources: string[], __input: MediaStoreGetCorsPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetCorsPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `corsPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchCorsPolicy.property.corsPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreCorsRule`](#aws-cdk-sdk.mediastore.MediaStoreCorsRule)[]

---


### MediaStoreResponsesFetchLifecyclePolicy <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesFetchLifecyclePolicy(__scope: Construct, __resources: string[], __input: MediaStoreGetLifecyclePolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetLifecyclePolicyInput)

---



#### Properties <a name="Properties"></a>

##### `lifecyclePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchLifecyclePolicy.property.lifecyclePolicy"></a>

- *Type:* `string`

---


### MediaStoreResponsesFetchMetricPolicy <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesFetchMetricPolicy(__scope: Construct, __resources: string[], __input: MediaStoreGetMetricPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `metricPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicy.property.metricPolicy"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy`](#aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy)

---


### MediaStoreResponsesFetchMetricPolicyMetricPolicy <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy(__scope: Construct, __resources: string[], __input: MediaStoreGetMetricPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput`](#aws-cdk-sdk.mediastore.MediaStoreGetMetricPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `containerLevelMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.property.containerLevelMetrics"></a>

- *Type:* `string`

---

##### `metricPolicyRules`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesFetchMetricPolicyMetricPolicy.property.metricPolicyRules"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule`](#aws-cdk-sdk.mediastore.MediaStoreMetricPolicyRule)[]

---


### MediaStoreResponsesListContainers <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesListContainers(__scope: Construct, __resources: string[], __input: MediaStoreListContainersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreListContainersInput`](#aws-cdk-sdk.mediastore.MediaStoreListContainersInput)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.property.containers"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreContainer`](#aws-cdk-sdk.mediastore.MediaStoreContainer)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListContainers.property.nextToken"></a>

- *Type:* `string`

---


### MediaStoreResponsesListTagsForResource <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource.Initializer"></a>

```typescript
import { mediastore } from 'aws-cdk-sdk'

new mediastore.MediaStoreResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaStoreListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput`](#aws-cdk-sdk.mediastore.MediaStoreListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediastore.MediaStoreResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.mediastore.MediaStoreTag`](#aws-cdk-sdk.mediastore.MediaStoreTag)[]

---



