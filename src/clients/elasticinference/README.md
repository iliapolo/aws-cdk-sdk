# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ElasticInferenceClient <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient"></a>

#### Initializer <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

new elasticinference.ElasticInferenceClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeAcceleratorOfferings` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.describeAcceleratorOfferings"></a>

```typescript
public describeAcceleratorOfferings(input: ElasticInferenceDescribeAcceleratorOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest)

---

##### `describeAccelerators` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.describeAccelerators"></a>

```typescript
public describeAccelerators(input: ElasticInferenceDescribeAcceleratorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest)

---

##### `describeAcceleratorTypes` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.describeAcceleratorTypes"></a>

```typescript
public describeAcceleratorTypes()
```

##### `listTagsForResource` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ElasticInferenceListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.tagResource"></a>

```typescript
public tagResource(input: ElasticInferenceTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.untagResource"></a>

```typescript
public untagResource(input: ElasticInferenceUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### ElasticInferenceAcceleratorType <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceAcceleratorType: elasticinference.ElasticInferenceAcceleratorType = { ... }
```

##### `acceleratorTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType.property.acceleratorTypeName"></a>

- *Type:* `string`

---

##### `memoryInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType.property.memoryInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceMemoryInfo`](#aws-cdk-sdk.elasticinference.ElasticInferenceMemoryInfo)

---

##### `throughputInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType.property.throughputInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceKeyValuePair`](#aws-cdk-sdk.elasticinference.ElasticInferenceKeyValuePair)[]

---

### ElasticInferenceAcceleratorTypeOffering <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceAcceleratorTypeOffering: elasticinference.ElasticInferenceAcceleratorTypeOffering = { ... }
```

##### `acceleratorType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering.property.acceleratorType"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering.property.location"></a>

- *Type:* `string`

---

##### `locationType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering.property.locationType"></a>

- *Type:* `string`

---

### ElasticInferenceDescribeAcceleratorOfferingsRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorOfferingsRequest: elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest = { ... }
```

##### `locationType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest.property.locationType"></a>

- *Type:* `string`

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest.property.acceleratorTypes"></a>

- *Type:* `string`[]

---

### ElasticInferenceDescribeAcceleratorOfferingsResponse <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorOfferingsResponse: elasticinference.ElasticInferenceDescribeAcceleratorOfferingsResponse = { ... }
```

##### `acceleratorTypeOfferings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsResponse.property.acceleratorTypeOfferings"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering`](#aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering)[]

---

### ElasticInferenceDescribeAcceleratorsRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorsRequest: elasticinference.ElasticInferenceDescribeAcceleratorsRequest = { ... }
```

##### `acceleratorIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest.property.acceleratorIds"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceFilter`](#aws-cdk-sdk.elasticinference.ElasticInferenceFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ElasticInferenceDescribeAcceleratorsResponse <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorsResponse: elasticinference.ElasticInferenceDescribeAcceleratorsResponse = { ... }
```

##### `acceleratorSet`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsResponse.property.acceleratorSet"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator`](#aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ElasticInferenceDescribeAcceleratorTypesRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorTypesRequest: elasticinference.ElasticInferenceDescribeAcceleratorTypesRequest = { ... }
```

### ElasticInferenceDescribeAcceleratorTypesResponse <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceDescribeAcceleratorTypesResponse: elasticinference.ElasticInferenceDescribeAcceleratorTypesResponse = { ... }
```

##### `acceleratorTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorTypesResponse.property.acceleratorTypes"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType`](#aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType)[]

---

### ElasticInferenceElasticInferenceAccelerator <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceElasticInferenceAccelerator: elasticinference.ElasticInferenceElasticInferenceAccelerator = { ... }
```

##### `acceleratorHealth`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator.property.acceleratorHealth"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAcceleratorHealth`](#aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAcceleratorHealth)

---

##### `acceleratorId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator.property.acceleratorId"></a>

- *Type:* `string`

---

##### `acceleratorType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator.property.acceleratorType"></a>

- *Type:* `string`

---

##### `attachedResource`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator.property.attachedResource"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator.property.availabilityZone"></a>

- *Type:* `string`

---

### ElasticInferenceElasticInferenceAcceleratorHealth <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAcceleratorHealth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceElasticInferenceAcceleratorHealth: elasticinference.ElasticInferenceElasticInferenceAcceleratorHealth = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAcceleratorHealth.property.status"></a>

- *Type:* `string`

---

### ElasticInferenceFilter <a name="aws-cdk-sdk.elasticinference.ElasticInferenceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceFilter: elasticinference.ElasticInferenceFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceFilter.property.values"></a>

- *Type:* `string`[]

---

### ElasticInferenceKeyValuePair <a name="aws-cdk-sdk.elasticinference.ElasticInferenceKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceKeyValuePair: elasticinference.ElasticInferenceKeyValuePair = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceKeyValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceKeyValuePair.property.value"></a>

- *Type:* `number`

---

### ElasticInferenceListTagsForResourceRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceListTagsForResourceRequest: elasticinference.ElasticInferenceListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ElasticInferenceListTagsForResourceResult <a name="aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceListTagsForResourceResult: elasticinference.ElasticInferenceListTagsForResourceResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ElasticInferenceMemoryInfo <a name="aws-cdk-sdk.elasticinference.ElasticInferenceMemoryInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceMemoryInfo: elasticinference.ElasticInferenceMemoryInfo = { ... }
```

##### `sizeInMiB`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceMemoryInfo.property.sizeInMiB"></a>

- *Type:* `number`

---

### ElasticInferenceTagResourceRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceTagResourceRequest: elasticinference.ElasticInferenceTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ElasticInferenceTagResourceResult <a name="aws-cdk-sdk.elasticinference.ElasticInferenceTagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceTagResourceResult: elasticinference.ElasticInferenceTagResourceResult = { ... }
```

### ElasticInferenceUntagResourceRequest <a name="aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceUntagResourceRequest: elasticinference.ElasticInferenceUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ElasticInferenceUntagResourceResult <a name="aws-cdk-sdk.elasticinference.ElasticInferenceUntagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

const elasticInferenceUntagResourceResult: elasticinference.ElasticInferenceUntagResourceResult = { ... }
```

## Classes <a name="Classes"></a>

### ElasticInferenceResponsesDescribeAcceleratorOfferings <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings.Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

new elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings(__scope: Construct, __resources: string[], __input: ElasticInferenceDescribeAcceleratorOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorTypeOfferings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorOfferings.property.acceleratorTypeOfferings"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering`](#aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorTypeOffering)[]

---


### ElasticInferenceResponsesDescribeAccelerators <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators"></a>

#### Initializer <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

new elasticinference.ElasticInferenceResponsesDescribeAccelerators(__scope: Construct, __resources: string[], __input: ElasticInferenceDescribeAcceleratorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceDescribeAcceleratorsRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorSet`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.property.acceleratorSet"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator`](#aws-cdk-sdk.elasticinference.ElasticInferenceElasticInferenceAccelerator)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAccelerators.property.nextToken"></a>

- *Type:* `string`

---


### ElasticInferenceResponsesDescribeAcceleratorTypes <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes"></a>

#### Initializer <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes.Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

new elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `acceleratorTypes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesDescribeAcceleratorTypes.property.acceleratorTypes"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType`](#aws-cdk-sdk.elasticinference.ElasticInferenceAcceleratorType)[]

---


### ElasticInferenceResponsesListTagsForResource <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource.Initializer"></a>

```typescript
import { elasticinference } from 'aws-cdk-sdk'

new elasticinference.ElasticInferenceResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ElasticInferenceListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest`](#aws-cdk-sdk.elasticinference.ElasticInferenceListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.elasticinference.ElasticInferenceResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



