# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PricingClient <a name="aws-cdk-sdk.pricing.PricingClient"></a>

#### Initializer <a name="aws-cdk-sdk.pricing.PricingClient.Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

new pricing.PricingClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeServices` <a name="aws-cdk-sdk.pricing.PricingClient.describeServices"></a>

```typescript
public describeServices(input: PricingDescribeServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingDescribeServicesRequest`](#aws-cdk-sdk.pricing.PricingDescribeServicesRequest)

---

##### `fetchAttributeValues` <a name="aws-cdk-sdk.pricing.PricingClient.fetchAttributeValues"></a>

```typescript
public fetchAttributeValues(input: PricingGetAttributeValuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest`](#aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest)

---

##### `fetchProducts` <a name="aws-cdk-sdk.pricing.PricingClient.fetchProducts"></a>

```typescript
public fetchProducts(input: PricingGetProductsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingGetProductsRequest`](#aws-cdk-sdk.pricing.PricingGetProductsRequest)

---




## Structs <a name="Structs"></a>

### PricingAttributeValue <a name="aws-cdk-sdk.pricing.PricingAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingAttributeValue: pricing.PricingAttributeValue = { ... }
```

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingAttributeValue.property.value"></a>

- *Type:* `string`

---

### PricingDescribeServicesRequest <a name="aws-cdk-sdk.pricing.PricingDescribeServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingDescribeServicesRequest: pricing.PricingDescribeServicesRequest = { ... }
```

##### `formatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesRequest.property.formatVersion"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesRequest.property.serviceCode"></a>

- *Type:* `string`

---

### PricingDescribeServicesResponse <a name="aws-cdk-sdk.pricing.PricingDescribeServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingDescribeServicesResponse: pricing.PricingDescribeServicesResponse = { ... }
```

##### `formatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesResponse.property.formatVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingDescribeServicesResponse.property.services"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingService`](#aws-cdk-sdk.pricing.PricingService)[]

---

### PricingFilter <a name="aws-cdk-sdk.pricing.PricingFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingFilter: pricing.PricingFilter = { ... }
```

##### `field`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingFilter.property.field"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingFilter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingFilter.property.value"></a>

- *Type:* `string`

---

### PricingGetAttributeValuesRequest <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingGetAttributeValuesRequest: pricing.PricingGetAttributeValuesRequest = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest.property.attributeName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest.property.nextToken"></a>

- *Type:* `string`

---

### PricingGetAttributeValuesResponse <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingGetAttributeValuesResponse: pricing.PricingGetAttributeValuesResponse = { ... }
```

##### `attributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesResponse.property.attributeValues"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingAttributeValue`](#aws-cdk-sdk.pricing.PricingAttributeValue)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetAttributeValuesResponse.property.nextToken"></a>

- *Type:* `string`

---

### PricingGetProductsRequest <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingGetProductsRequest: pricing.PricingGetProductsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingFilter`](#aws-cdk-sdk.pricing.PricingFilter)[]

---

##### `formatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest.property.formatVersion"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsRequest.property.serviceCode"></a>

- *Type:* `string`

---

### PricingGetProductsResponse <a name="aws-cdk-sdk.pricing.PricingGetProductsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingGetProductsResponse: pricing.PricingGetProductsResponse = { ... }
```

##### `formatVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsResponse.property.formatVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `priceList`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingGetProductsResponse.property.priceList"></a>

- *Type:* `string`[]

---

### PricingService <a name="aws-cdk-sdk.pricing.PricingService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

const pricingService: pricing.PricingService = { ... }
```

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingService.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.pricing.PricingService.property.serviceCode"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### PricingResponsesDescribeServices <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices"></a>

#### Initializer <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

new pricing.PricingResponsesDescribeServices(__scope: Construct, __resources: string[], __input: PricingDescribeServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingDescribeServicesRequest`](#aws-cdk-sdk.pricing.PricingDescribeServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `formatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.property.formatVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesDescribeServices.property.services"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingService`](#aws-cdk-sdk.pricing.PricingService)[]

---


### PricingResponsesFetchAttributeValues <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues"></a>

#### Initializer <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

new pricing.PricingResponsesFetchAttributeValues(__scope: Construct, __resources: string[], __input: PricingGetAttributeValuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest`](#aws-cdk-sdk.pricing.PricingGetAttributeValuesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeValues`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.property.attributeValues"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingAttributeValue`](#aws-cdk-sdk.pricing.PricingAttributeValue)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchAttributeValues.property.nextToken"></a>

- *Type:* `string`

---


### PricingResponsesFetchProducts <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts"></a>

#### Initializer <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.Initializer"></a>

```typescript
import { pricing } from 'aws-cdk-sdk'

new pricing.PricingResponsesFetchProducts(__scope: Construct, __resources: string[], __input: PricingGetProductsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.pricing.PricingGetProductsRequest`](#aws-cdk-sdk.pricing.PricingGetProductsRequest)

---



#### Properties <a name="Properties"></a>

##### `formatVersion`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.property.formatVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.property.nextToken"></a>

- *Type:* `string`

---

##### `priceList`<sup>Required</sup> <a name="aws-cdk-sdk.pricing.PricingResponsesFetchProducts.property.priceList"></a>

- *Type:* `string`[]

---



