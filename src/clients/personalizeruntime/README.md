# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PersonalizeRuntimeClient <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient"></a>

#### Initializer <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

new personalizeruntime.PersonalizeRuntimeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchPersonalizedRanking` <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.fetchPersonalizedRanking"></a>

```typescript
public fetchPersonalizedRanking(input: PersonalizeRuntimeGetPersonalizedRankingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest)

---

##### `fetchRecommendations` <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.fetchRecommendations"></a>

```typescript
public fetchRecommendations(input: PersonalizeRuntimeGetRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest)

---




## Structs <a name="Structs"></a>

### PersonalizeRuntimeGetPersonalizedRankingRequest <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

const personalizeRuntimeGetPersonalizedRankingRequest: personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest = { ... }
```

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.campaignArn"></a>

- *Type:* `string`

---

##### `inputList`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.inputList"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.userId"></a>

- *Type:* `string`

---

##### `context`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.context"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.filterArn"></a>

- *Type:* `string`

---

##### `filterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest.property.filterValues"></a>

- *Type:* {[ key: string ]: `string`}

---

### PersonalizeRuntimeGetPersonalizedRankingResponse <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

const personalizeRuntimeGetPersonalizedRankingResponse: personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingResponse = { ... }
```

##### `personalizedRanking`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingResponse.property.personalizedRanking"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem)[]

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingResponse.property.recommendationId"></a>

- *Type:* `string`

---

### PersonalizeRuntimeGetRecommendationsRequest <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

const personalizeRuntimeGetRecommendationsRequest: personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest = { ... }
```

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.campaignArn"></a>

- *Type:* `string`

---

##### `context`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.context"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.filterArn"></a>

- *Type:* `string`

---

##### `filterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.filterValues"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `itemId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.itemId"></a>

- *Type:* `string`

---

##### `numResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.numResults"></a>

- *Type:* `number`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest.property.userId"></a>

- *Type:* `string`

---

### PersonalizeRuntimeGetRecommendationsResponse <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

const personalizeRuntimeGetRecommendationsResponse: personalizeruntime.PersonalizeRuntimeGetRecommendationsResponse = { ... }
```

##### `itemList`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsResponse.property.itemList"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem)[]

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsResponse.property.recommendationId"></a>

- *Type:* `string`

---

### PersonalizeRuntimePredictedItem <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

const personalizeRuntimePredictedItem: personalizeruntime.PersonalizeRuntimePredictedItem = { ... }
```

##### `itemId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem.property.itemId"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem.property.score"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### PersonalizeRuntimeResponsesFetchPersonalizedRanking <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking"></a>

#### Initializer <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

new personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking(__scope: Construct, __resources: string[], __input: PersonalizeRuntimeGetPersonalizedRankingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetPersonalizedRankingRequest)

---



#### Properties <a name="Properties"></a>

##### `personalizedRanking`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.property.personalizedRanking"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem)[]

---

##### `recommendationId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchPersonalizedRanking.property.recommendationId"></a>

- *Type:* `string`

---


### PersonalizeRuntimeResponsesFetchRecommendations <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.Initializer"></a>

```typescript
import { personalizeruntime } from 'aws-cdk-sdk'

new personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations(__scope: Construct, __resources: string[], __input: PersonalizeRuntimeGetRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeGetRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `itemList`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.property.itemList"></a>

- *Type:* [`aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem`](#aws-cdk-sdk.personalizeruntime.PersonalizeRuntimePredictedItem)[]

---

##### `recommendationId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeruntime.PersonalizeRuntimeResponsesFetchRecommendations.property.recommendationId"></a>

- *Type:* `string`

---



