# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudSearchDomainClient <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `search` <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.search"></a>

```typescript
public search(input: CloudSearchDomainSearchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest)

---

##### `suggest` <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.suggest"></a>

```typescript
public suggest(input: CloudSearchDomainSuggestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest)

---

##### `uploadDocuments` <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.uploadDocuments"></a>

```typescript
public uploadDocuments(input: CloudSearchDomainUploadDocumentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest)

---




## Structs <a name="Structs"></a>

### CloudSearchDomainBucket <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainBucket: cloudsearchdomain.CloudSearchDomainBucket = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucket.property.count"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucket.property.value"></a>

- *Type:* `string`

---

### CloudSearchDomainBucketInfo <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainBucketInfo: cloudsearchdomain.CloudSearchDomainBucketInfo = { ... }
```

##### `buckets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo.property.buckets"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucket`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucket)[]

---

### CloudSearchDomainDocumentServiceWarning <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainDocumentServiceWarning: cloudsearchdomain.CloudSearchDomainDocumentServiceWarning = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning.property.message"></a>

- *Type:* `string`

---

### CloudSearchDomainFieldStats <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainFieldStats: cloudsearchdomain.CloudSearchDomainFieldStats = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.count"></a>

- *Type:* `number`

---

##### `max`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.max"></a>

- *Type:* `string`

---

##### `mean`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.mean"></a>

- *Type:* `string`

---

##### `min`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.min"></a>

- *Type:* `string`

---

##### `missing`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.missing"></a>

- *Type:* `number`

---

##### `stddev`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.stddev"></a>

- *Type:* `number`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.sum"></a>

- *Type:* `number`

---

##### `sumOfSquares`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats.property.sumOfSquares"></a>

- *Type:* `number`

---

### CloudSearchDomainHit <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainHit: cloudsearchdomain.CloudSearchDomainHit = { ... }
```

##### `exprs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit.property.exprs"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit.property.fields"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `highlights`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit.property.highlights"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit.property.id"></a>

- *Type:* `string`

---

### CloudSearchDomainHits <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainHits: cloudsearchdomain.CloudSearchDomainHits = { ... }
```

##### `cursor`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits.property.cursor"></a>

- *Type:* `string`

---

##### `found`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits.property.found"></a>

- *Type:* `number`

---

##### `hit`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits.property.hit"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit)[]

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits.property.start"></a>

- *Type:* `number`

---

### CloudSearchDomainSearchRequest <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSearchRequest: cloudsearchdomain.CloudSearchDomainSearchRequest = { ... }
```

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.query"></a>

- *Type:* `string`

---

##### `cursor`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.cursor"></a>

- *Type:* `string`

---

##### `expr`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.expr"></a>

- *Type:* `string`

---

##### `facet`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.facet"></a>

- *Type:* `string`

---

##### `filterQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.filterQuery"></a>

- *Type:* `string`

---

##### `highlight`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.highlight"></a>

- *Type:* `string`

---

##### `partial`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.partial"></a>

- *Type:* `boolean`

---

##### `queryOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.queryOptions"></a>

- *Type:* `string`

---

##### `queryParser`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.queryParser"></a>

- *Type:* `string`

---

##### `return`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.return"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.size"></a>

- *Type:* `number`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.sort"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.start"></a>

- *Type:* `number`

---

##### `stats`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest.property.stats"></a>

- *Type:* `string`

---

### CloudSearchDomainSearchResponse <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSearchResponse: cloudsearchdomain.CloudSearchDomainSearchResponse = { ... }
```

##### `facets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchResponse.property.facets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo)}

---

##### `hits`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchResponse.property.hits"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHits)

---

##### `stats`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchResponse.property.stats"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats)}

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchResponse.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchStatus`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchStatus)

---

### CloudSearchDomainSearchStatus <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSearchStatus: cloudsearchdomain.CloudSearchDomainSearchStatus = { ... }
```

##### `rid`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchStatus.property.rid"></a>

- *Type:* `string`

---

##### `timems`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchStatus.property.timems"></a>

- *Type:* `number`

---

### CloudSearchDomainSuggestionMatch <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSuggestionMatch: cloudsearchdomain.CloudSearchDomainSuggestionMatch = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch.property.id"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch.property.score"></a>

- *Type:* `number`

---

##### `suggestion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch.property.suggestion"></a>

- *Type:* `string`

---

### CloudSearchDomainSuggestModel <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSuggestModel: cloudsearchdomain.CloudSearchDomainSuggestModel = { ... }
```

##### `found`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel.property.found"></a>

- *Type:* `number`

---

##### `query`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel.property.query"></a>

- *Type:* `string`

---

##### `suggestions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel.property.suggestions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch)[]

---

### CloudSearchDomainSuggestRequest <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSuggestRequest: cloudsearchdomain.CloudSearchDomainSuggestRequest = { ... }
```

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest.property.query"></a>

- *Type:* `string`

---

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest.property.suggester"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest.property.size"></a>

- *Type:* `number`

---

### CloudSearchDomainSuggestResponse <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSuggestResponse: cloudsearchdomain.CloudSearchDomainSuggestResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestResponse.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestStatus`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestStatus)

---

##### `suggest`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestResponse.property.suggest"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestModel)

---

### CloudSearchDomainSuggestStatus <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainSuggestStatus: cloudsearchdomain.CloudSearchDomainSuggestStatus = { ... }
```

##### `rid`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestStatus.property.rid"></a>

- *Type:* `string`

---

##### `timems`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestStatus.property.timems"></a>

- *Type:* `number`

---

### CloudSearchDomainUploadDocumentsRequest <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainUploadDocumentsRequest: cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest = { ... }
```

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest.property.contentType"></a>

- *Type:* `string`

---

##### `documents`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest.property.documents"></a>

- *Type:* `any`

---

### CloudSearchDomainUploadDocumentsResponse <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

const cloudSearchDomainUploadDocumentsResponse: cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse = { ... }
```

##### `adds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse.property.adds"></a>

- *Type:* `number`

---

##### `deletes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse.property.deletes"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse.property.status"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning)[]

---

## Classes <a name="Classes"></a>

### CloudSearchDomainResponsesSearch <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSearch(__scope: Construct, __resources: string[], __input: CloudSearchDomainSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `facets`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.property.facets"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainBucketInfo)}

---

##### `hits`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.property.hits"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits)

---

##### `stats`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.property.stats"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainFieldStats)}

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearch.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus)

---


### CloudSearchDomainResponsesSearchHits <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSearchHits(__scope: Construct, __resources: string[], __input: CloudSearchDomainSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `cursor`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.property.cursor"></a>

- *Type:* `string`

---

##### `found`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.property.found"></a>

- *Type:* `number`

---

##### `hit`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.property.hit"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainHit)[]

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchHits.property.start"></a>

- *Type:* `number`

---


### CloudSearchDomainResponsesSearchStatus <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSearchStatus(__scope: Construct, __resources: string[], __input: CloudSearchDomainSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `rid`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.property.rid"></a>

- *Type:* `string`

---

##### `timems`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSearchStatus.property.timems"></a>

- *Type:* `number`

---


### CloudSearchDomainResponsesSuggest <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSuggest(__scope: Construct, __resources: string[], __input: CloudSearchDomainSuggestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus)

---

##### `suggest`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggest.property.suggest"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest)

---


### CloudSearchDomainResponsesSuggestStatus <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus(__scope: Construct, __resources: string[], __input: CloudSearchDomainSuggestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest)

---



#### Properties <a name="Properties"></a>

##### `rid`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.property.rid"></a>

- *Type:* `string`

---

##### `timems`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestStatus.property.timems"></a>

- *Type:* `number`

---


### CloudSearchDomainResponsesSuggestSuggest <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest(__scope: Construct, __resources: string[], __input: CloudSearchDomainSuggestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestRequest)

---



#### Properties <a name="Properties"></a>

##### `found`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.property.found"></a>

- *Type:* `number`

---

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.property.query"></a>

- *Type:* `string`

---

##### `suggestions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesSuggestSuggest.property.suggestions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainSuggestionMatch)[]

---


### CloudSearchDomainResponsesUploadDocuments <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.Initializer"></a>

```typescript
import { cloudsearchdomain } from 'aws-cdk-sdk'

new cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments(__scope: Construct, __resources: string[], __input: CloudSearchDomainUploadDocumentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainUploadDocumentsRequest)

---



#### Properties <a name="Properties"></a>

##### `adds`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.property.adds"></a>

- *Type:* `number`

---

##### `deletes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.property.deletes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.property.status"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainResponsesUploadDocuments.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning`](#aws-cdk-sdk.cloudsearchdomain.CloudSearchDomainDocumentServiceWarning)[]

---



