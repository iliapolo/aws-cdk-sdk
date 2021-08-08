# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SavingsPlansClient <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createSavingsPlan` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.createSavingsPlan"></a>

```typescript
public createSavingsPlan(input: SavingsPlansCreateSavingsPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest)

---

##### `deleteQueuedSavingsPlan` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.deleteQueuedSavingsPlan"></a>

```typescript
public deleteQueuedSavingsPlan(input: SavingsPlansDeleteQueuedSavingsPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDeleteQueuedSavingsPlanRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDeleteQueuedSavingsPlanRequest)

---

##### `describeSavingsPlanRates` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.describeSavingsPlanRates"></a>

```typescript
public describeSavingsPlanRates(input: SavingsPlansDescribeSavingsPlanRatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest)

---

##### `describeSavingsPlans` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.describeSavingsPlans"></a>

```typescript
public describeSavingsPlans(input: SavingsPlansDescribeSavingsPlansRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest)

---

##### `describeSavingsPlansOfferingRates` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.describeSavingsPlansOfferingRates"></a>

```typescript
public describeSavingsPlansOfferingRates(input: SavingsPlansDescribeSavingsPlansOfferingRatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest)

---

##### `describeSavingsPlansOfferings` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.describeSavingsPlansOfferings"></a>

```typescript
public describeSavingsPlansOfferings(input: SavingsPlansDescribeSavingsPlansOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SavingsPlansListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.tagResource"></a>

```typescript
public tagResource(input: SavingsPlansTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansTagResourceRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.untagResource"></a>

```typescript
public untagResource(input: SavingsPlansUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### SavingsPlansCreateSavingsPlanRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansCreateSavingsPlanRequest: savingsplans.SavingsPlansCreateSavingsPlanRequest = { ... }
```

##### `commitment`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.commitment"></a>

- *Type:* `string`

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.savingsPlanOfferingId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `purchaseTime`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.purchaseTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `upfrontPaymentAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest.property.upfrontPaymentAmount"></a>

- *Type:* `string`

---

### SavingsPlansCreateSavingsPlanResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansCreateSavingsPlanResponse: savingsplans.SavingsPlansCreateSavingsPlanResponse = { ... }
```

##### `savingsPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanResponse.property.savingsPlanId"></a>

- *Type:* `string`

---

### SavingsPlansDeleteQueuedSavingsPlanRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansDeleteQueuedSavingsPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDeleteQueuedSavingsPlanRequest: savingsplans.SavingsPlansDeleteQueuedSavingsPlanRequest = { ... }
```

##### `savingsPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDeleteQueuedSavingsPlanRequest.property.savingsPlanId"></a>

- *Type:* `string`

---

### SavingsPlansDeleteQueuedSavingsPlanResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansDeleteQueuedSavingsPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDeleteQueuedSavingsPlanResponse: savingsplans.SavingsPlansDeleteQueuedSavingsPlanResponse = { ... }
```

### SavingsPlansDescribeSavingsPlanRatesRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlanRatesRequest: savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest = { ... }
```

##### `savingsPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest.property.savingsPlanId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateFilter`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SavingsPlansDescribeSavingsPlanRatesResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlanRatesResponse: savingsplans.SavingsPlansDescribeSavingsPlanRatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `savingsPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesResponse.property.savingsPlanId"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesResponse.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate)[]

---

### SavingsPlansDescribeSavingsPlansOfferingRatesRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansOfferingRatesRequest: savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.operations"></a>

- *Type:* `string`[]

---

##### `products`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.products"></a>

- *Type:* `string`[]

---

##### `savingsPlanOfferingIds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.savingsPlanOfferingIds"></a>

- *Type:* `string`[]

---

##### `savingsPlanPaymentOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.savingsPlanPaymentOptions"></a>

- *Type:* `string`[]

---

##### `savingsPlanTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.savingsPlanTypes"></a>

- *Type:* `string`[]

---

##### `serviceCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.serviceCodes"></a>

- *Type:* `string`[]

---

##### `usageTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest.property.usageTypes"></a>

- *Type:* `string`[]

---

### SavingsPlansDescribeSavingsPlansOfferingRatesResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansOfferingRatesResponse: savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesResponse.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate)[]

---

### SavingsPlansDescribeSavingsPlansOfferingsRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansOfferingsRequest: savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest = { ... }
```

##### `currencies`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.currencies"></a>

- *Type:* `string`[]

---

##### `descriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.descriptions"></a>

- *Type:* `string`[]

---

##### `durations`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.durations"></a>

- *Type:* `number`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingFilterElement`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingFilterElement)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `offeringIds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.offeringIds"></a>

- *Type:* `string`[]

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.operations"></a>

- *Type:* `string`[]

---

##### `paymentOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.paymentOptions"></a>

- *Type:* `string`[]

---

##### `planTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.planTypes"></a>

- *Type:* `string`[]

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.productType"></a>

- *Type:* `string`

---

##### `serviceCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.serviceCodes"></a>

- *Type:* `string`[]

---

##### `usageTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest.property.usageTypes"></a>

- *Type:* `string`[]

---

### SavingsPlansDescribeSavingsPlansOfferingsResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansOfferingsResponse: savingsplans.SavingsPlansDescribeSavingsPlansOfferingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsResponse.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering)[]

---

### SavingsPlansDescribeSavingsPlansRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansRequest: savingsplans.SavingsPlansDescribeSavingsPlansRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanFilter`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `savingsPlanArns`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.savingsPlanArns"></a>

- *Type:* `string`[]

---

##### `savingsPlanIds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.savingsPlanIds"></a>

- *Type:* `string`[]

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest.property.states"></a>

- *Type:* `string`[]

---

### SavingsPlansDescribeSavingsPlansResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansDescribeSavingsPlansResponse: savingsplans.SavingsPlansDescribeSavingsPlansResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `savingsPlans`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansResponse.property.savingsPlans"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan)[]

---

### SavingsPlansListTagsForResourceRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansListTagsForResourceRequest: savingsplans.SavingsPlansListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SavingsPlansListTagsForResourceResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansListTagsForResourceResponse: savingsplans.SavingsPlansListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SavingsPlansParentSavingsPlanOffering <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansParentSavingsPlanOffering: savingsplans.SavingsPlansParentSavingsPlanOffering = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.currency"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.durationSeconds"></a>

- *Type:* `number`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.offeringId"></a>

- *Type:* `string`

---

##### `paymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.paymentOption"></a>

- *Type:* `string`

---

##### `planDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.planDescription"></a>

- *Type:* `string`

---

##### `planType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering.property.planType"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlan <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlan: savingsplans.SavingsPlansSavingsPlan = { ... }
```

##### `commitment`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.commitment"></a>

- *Type:* `string`

---

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.currency"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.description"></a>

- *Type:* `string`

---

##### `ec2InstanceFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.ec2InstanceFamily"></a>

- *Type:* `string`

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.end"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.offeringId"></a>

- *Type:* `string`

---

##### `paymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.paymentOption"></a>

- *Type:* `string`

---

##### `productTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.productTypes"></a>

- *Type:* `string`[]

---

##### `recurringPaymentAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.recurringPaymentAmount"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.region"></a>

- *Type:* `string`

---

##### `savingsPlanArn`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.savingsPlanArn"></a>

- *Type:* `string`

---

##### `savingsPlanId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.savingsPlanId"></a>

- *Type:* `string`

---

##### `savingsPlanType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.savingsPlanType"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `termDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.termDurationInSeconds"></a>

- *Type:* `number`

---

##### `upfrontPaymentAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan.property.upfrontPaymentAmount"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanFilter <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanFilter: savingsplans.SavingsPlansSavingsPlanFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanFilter.property.values"></a>

- *Type:* `string`[]

---

### SavingsPlansSavingsPlanOffering <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOffering: savingsplans.SavingsPlansSavingsPlanOffering = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.currency"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.description"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.durationSeconds"></a>

- *Type:* `number`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.offeringId"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.operation"></a>

- *Type:* `string`

---

##### `paymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.paymentOption"></a>

- *Type:* `string`

---

##### `planType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.planType"></a>

- *Type:* `string`

---

##### `productTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.productTypes"></a>

- *Type:* `string`[]

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.properties"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingProperty`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingProperty)[]

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.serviceCode"></a>

- *Type:* `string`

---

##### `usageType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering.property.usageType"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanOfferingFilterElement <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingFilterElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOfferingFilterElement: savingsplans.SavingsPlansSavingsPlanOfferingFilterElement = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingFilterElement.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingFilterElement.property.values"></a>

- *Type:* `string`[]

---

### SavingsPlansSavingsPlanOfferingProperty <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOfferingProperty: savingsplans.SavingsPlansSavingsPlanOfferingProperty = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingProperty.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingProperty.property.value"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanOfferingRate <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOfferingRate: savingsplans.SavingsPlansSavingsPlanOfferingRate = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.operation"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.productType"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.properties"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateProperty`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateProperty)[]

---

##### `rate`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.rate"></a>

- *Type:* `string`

---

##### `savingsPlanOffering`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.savingsPlanOffering"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering`](#aws-cdk-sdk.savingsplans.SavingsPlansParentSavingsPlanOffering)

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.serviceCode"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.unit"></a>

- *Type:* `string`

---

##### `usageType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate.property.usageType"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanOfferingRateFilterElement <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOfferingRateFilterElement: savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateFilterElement.property.values"></a>

- *Type:* `string`[]

---

### SavingsPlansSavingsPlanOfferingRateProperty <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanOfferingRateProperty: savingsplans.SavingsPlansSavingsPlanOfferingRateProperty = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateProperty.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRateProperty.property.value"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanRate <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanRate: savingsplans.SavingsPlansSavingsPlanRate = { ... }
```

##### `currency`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.currency"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.operation"></a>

- *Type:* `string`

---

##### `productType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.productType"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.properties"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateProperty`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateProperty)[]

---

##### `rate`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.rate"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.serviceCode"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.unit"></a>

- *Type:* `string`

---

##### `usageType`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate.property.usageType"></a>

- *Type:* `string`

---

### SavingsPlansSavingsPlanRateFilter <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanRateFilter: savingsplans.SavingsPlansSavingsPlanRateFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateFilter.property.values"></a>

- *Type:* `string`[]

---

### SavingsPlansSavingsPlanRateProperty <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansSavingsPlanRateProperty: savingsplans.SavingsPlansSavingsPlanRateProperty = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateProperty.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRateProperty.property.value"></a>

- *Type:* `string`

---

### SavingsPlansTagResourceRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansTagResourceRequest: savingsplans.SavingsPlansTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SavingsPlansTagResourceResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansTagResourceResponse: savingsplans.SavingsPlansTagResourceResponse = { ... }
```

### SavingsPlansUntagResourceRequest <a name="aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansUntagResourceRequest: savingsplans.SavingsPlansUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SavingsPlansUntagResourceResponse <a name="aws-cdk-sdk.savingsplans.SavingsPlansUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

const savingsPlansUntagResourceResponse: savingsplans.SavingsPlansUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### SavingsPlansResponsesCreateSavingsPlan <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesCreateSavingsPlan(__scope: Construct, __resources: string[], __input: SavingsPlansCreateSavingsPlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansCreateSavingsPlanRequest)

---



#### Properties <a name="Properties"></a>

##### `savingsPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesCreateSavingsPlan.property.savingsPlanId"></a>

- *Type:* `string`

---


### SavingsPlansResponsesDescribeSavingsPlanRates <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates(__scope: Construct, __resources: string[], __input: SavingsPlansDescribeSavingsPlanRatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlanRatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.property.nextToken"></a>

- *Type:* `string`

---

##### `savingsPlanId`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.property.savingsPlanId"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlanRates.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanRate)[]

---


### SavingsPlansResponsesDescribeSavingsPlans <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesDescribeSavingsPlans(__scope: Construct, __resources: string[], __input: SavingsPlansDescribeSavingsPlansRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.property.nextToken"></a>

- *Type:* `string`

---

##### `savingsPlans`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlans.property.savingsPlans"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlan)[]

---


### SavingsPlansResponsesDescribeSavingsPlansOfferingRates <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates(__scope: Construct, __resources: string[], __input: SavingsPlansDescribeSavingsPlansOfferingRatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingRatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.property.nextToken"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferingRates.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOfferingRate)[]

---


### SavingsPlansResponsesDescribeSavingsPlansOfferings <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings(__scope: Construct, __resources: string[], __input: SavingsPlansDescribeSavingsPlansOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansDescribeSavingsPlansOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.property.nextToken"></a>

- *Type:* `string`

---

##### `searchResults`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesDescribeSavingsPlansOfferings.property.searchResults"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering`](#aws-cdk-sdk.savingsplans.SavingsPlansSavingsPlanOffering)[]

---


### SavingsPlansResponsesListTagsForResource <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource.Initializer"></a>

```typescript
import { savingsplans } from 'aws-cdk-sdk'

new savingsplans.SavingsPlansResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SavingsPlansListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest`](#aws-cdk-sdk.savingsplans.SavingsPlansListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.savingsplans.SavingsPlansResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



