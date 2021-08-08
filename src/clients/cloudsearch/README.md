# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudSearchClient <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `buildSuggesters` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.buildSuggesters"></a>

```typescript
public buildSuggesters(input: CloudSearchBuildSuggestersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest)

---

##### `createDomain` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.createDomain"></a>

```typescript
public createDomain(input: CloudSearchCreateDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---

##### `defineAnalysisScheme` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.defineAnalysisScheme"></a>

```typescript
public defineAnalysisScheme(input: CloudSearchDefineAnalysisSchemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---

##### `defineExpression` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.defineExpression"></a>

```typescript
public defineExpression(input: CloudSearchDefineExpressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest)

---

##### `defineIndexField` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.defineIndexField"></a>

```typescript
public defineIndexField(input: CloudSearchDefineIndexFieldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---

##### `defineSuggester` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.defineSuggester"></a>

```typescript
public defineSuggester(input: CloudSearchDefineSuggesterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---

##### `deleteAnalysisScheme` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.deleteAnalysisScheme"></a>

```typescript
public deleteAnalysisScheme(input: CloudSearchDeleteAnalysisSchemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---

##### `deleteDomain` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.deleteDomain"></a>

```typescript
public deleteDomain(input: CloudSearchDeleteDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---

##### `deleteExpression` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.deleteExpression"></a>

```typescript
public deleteExpression(input: CloudSearchDeleteExpressionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest)

---

##### `deleteIndexField` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.deleteIndexField"></a>

```typescript
public deleteIndexField(input: CloudSearchDeleteIndexFieldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---

##### `deleteSuggester` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.deleteSuggester"></a>

```typescript
public deleteSuggester(input: CloudSearchDeleteSuggesterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---

##### `describeAnalysisSchemes` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeAnalysisSchemes"></a>

```typescript
public describeAnalysisSchemes(input: CloudSearchDescribeAnalysisSchemesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest)

---

##### `describeAvailabilityOptions` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeAvailabilityOptions"></a>

```typescript
public describeAvailabilityOptions(input: CloudSearchDescribeAvailabilityOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest)

---

##### `describeDomainEndpointOptions` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeDomainEndpointOptions"></a>

```typescript
public describeDomainEndpointOptions(input: CloudSearchDescribeDomainEndpointOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest)

---

##### `describeDomains` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeDomains"></a>

```typescript
public describeDomains(input: CloudSearchDescribeDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest)

---

##### `describeExpressions` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeExpressions"></a>

```typescript
public describeExpressions(input: CloudSearchDescribeExpressionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest)

---

##### `describeIndexFields` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeIndexFields"></a>

```typescript
public describeIndexFields(input: CloudSearchDescribeIndexFieldsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest)

---

##### `describeScalingParameters` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeScalingParameters"></a>

```typescript
public describeScalingParameters(input: CloudSearchDescribeScalingParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest)

---

##### `describeServiceAccessPolicies` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeServiceAccessPolicies"></a>

```typescript
public describeServiceAccessPolicies(input: CloudSearchDescribeServiceAccessPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest)

---

##### `describeSuggesters` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.describeSuggesters"></a>

```typescript
public describeSuggesters(input: CloudSearchDescribeSuggestersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest)

---

##### `indexDocuments` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.indexDocuments"></a>

```typescript
public indexDocuments(input: CloudSearchIndexDocumentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest)

---

##### `listDomainNames` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.listDomainNames"></a>

```typescript
public listDomainNames()
```

##### `updateAvailabilityOptions` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.updateAvailabilityOptions"></a>

```typescript
public updateAvailabilityOptions(input: CloudSearchUpdateAvailabilityOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest)

---

##### `updateDomainEndpointOptions` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.updateDomainEndpointOptions"></a>

```typescript
public updateDomainEndpointOptions(input: CloudSearchUpdateDomainEndpointOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest)

---

##### `updateScalingParameters` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.updateScalingParameters"></a>

```typescript
public updateScalingParameters(input: CloudSearchUpdateScalingParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest)

---

##### `updateServiceAccessPolicies` <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.updateServiceAccessPolicies"></a>

```typescript
public updateServiceAccessPolicies(input: CloudSearchUpdateServiceAccessPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest)

---




## Structs <a name="Structs"></a>

### CloudSearchAccessPoliciesStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchAccessPoliciesStatus: cloudsearch.CloudSearchAccessPoliciesStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchAnalysisOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchAnalysisOptions: cloudsearch.CloudSearchAnalysisOptions = { ... }
```

##### `algorithmicStemming`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions.property.algorithmicStemming"></a>

- *Type:* `string`

---

##### `japaneseTokenizationDictionary`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions.property.japaneseTokenizationDictionary"></a>

- *Type:* `string`

---

##### `stemmingDictionary`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions.property.stemmingDictionary"></a>

- *Type:* `string`

---

##### `stopwords`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions.property.stopwords"></a>

- *Type:* `string`

---

##### `synonyms`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions.property.synonyms"></a>

- *Type:* `string`

---

### CloudSearchAnalysisScheme <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchAnalysisScheme: cloudsearch.CloudSearchAnalysisScheme = { ... }
```

##### `analysisSchemeLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme.property.analysisSchemeLanguage"></a>

- *Type:* `string`

---

##### `analysisSchemeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme.property.analysisSchemeName"></a>

- *Type:* `string`

---

##### `analysisOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme.property.analysisOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisOptions)

---

### CloudSearchAnalysisSchemeStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchAnalysisSchemeStatus: cloudsearch.CloudSearchAnalysisSchemeStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchAvailabilityOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchAvailabilityOptionsStatus: cloudsearch.CloudSearchAvailabilityOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus.property.options"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchBuildSuggestersRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchBuildSuggestersRequest: cloudsearch.CloudSearchBuildSuggestersRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchBuildSuggestersResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchBuildSuggestersResponse: cloudsearch.CloudSearchBuildSuggestersResponse = { ... }
```

##### `fieldNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersResponse.property.fieldNames"></a>

- *Type:* `string`[]

---

### CloudSearchCreateDomainRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchCreateDomainRequest: cloudsearch.CloudSearchCreateDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchCreateDomainResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchCreateDomainResponse: cloudsearch.CloudSearchCreateDomainResponse = { ... }
```

##### `domainStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainResponse.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus)

---

### CloudSearchDateArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDateArrayOptions: cloudsearch.CloudSearchDateArrayOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---

### CloudSearchDateOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDateOptions: cloudsearch.CloudSearchDateOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDateOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchDefineAnalysisSchemeRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineAnalysisSchemeRequest: cloudsearch.CloudSearchDefineAnalysisSchemeRequest = { ... }
```

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest.property.analysisScheme"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisScheme)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchDefineAnalysisSchemeResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineAnalysisSchemeResponse: cloudsearch.CloudSearchDefineAnalysisSchemeResponse = { ... }
```

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeResponse.property.analysisScheme"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus)

---

### CloudSearchDefineExpressionRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineExpressionRequest: cloudsearch.CloudSearchDefineExpressionRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest.property.domainName"></a>

- *Type:* `string`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest.property.expression"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpression`](#aws-cdk-sdk.cloudsearch.CloudSearchExpression)

---

### CloudSearchDefineExpressionResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineExpressionResponse: cloudsearch.CloudSearchDefineExpressionResponse = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionResponse.property.expression"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus)

---

### CloudSearchDefineIndexFieldRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineIndexFieldRequest: cloudsearch.CloudSearchDefineIndexFieldRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest.property.domainName"></a>

- *Type:* `string`

---

##### `indexField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest.property.indexField"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexField`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexField)

---

### CloudSearchDefineIndexFieldResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineIndexFieldResponse: cloudsearch.CloudSearchDefineIndexFieldResponse = { ... }
```

##### `indexField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldResponse.property.indexField"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus)

---

### CloudSearchDefineSuggesterRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineSuggesterRequest: cloudsearch.CloudSearchDefineSuggesterRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest.property.domainName"></a>

- *Type:* `string`

---

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest.property.suggester"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggester`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggester)

---

### CloudSearchDefineSuggesterResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDefineSuggesterResponse: cloudsearch.CloudSearchDefineSuggesterResponse = { ... }
```

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterResponse.property.suggester"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus)

---

### CloudSearchDeleteAnalysisSchemeRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteAnalysisSchemeRequest: cloudsearch.CloudSearchDeleteAnalysisSchemeRequest = { ... }
```

##### `analysisSchemeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest.property.analysisSchemeName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchDeleteAnalysisSchemeResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteAnalysisSchemeResponse: cloudsearch.CloudSearchDeleteAnalysisSchemeResponse = { ... }
```

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeResponse.property.analysisScheme"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus)

---

### CloudSearchDeleteDomainRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteDomainRequest: cloudsearch.CloudSearchDeleteDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchDeleteDomainResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteDomainResponse: cloudsearch.CloudSearchDeleteDomainResponse = { ... }
```

##### `domainStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainResponse.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus)

---

### CloudSearchDeleteExpressionRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteExpressionRequest: cloudsearch.CloudSearchDeleteExpressionRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest.property.domainName"></a>

- *Type:* `string`

---

##### `expressionName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest.property.expressionName"></a>

- *Type:* `string`

---

### CloudSearchDeleteExpressionResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteExpressionResponse: cloudsearch.CloudSearchDeleteExpressionResponse = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionResponse.property.expression"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus)

---

### CloudSearchDeleteIndexFieldRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteIndexFieldRequest: cloudsearch.CloudSearchDeleteIndexFieldRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest.property.domainName"></a>

- *Type:* `string`

---

##### `indexFieldName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest.property.indexFieldName"></a>

- *Type:* `string`

---

### CloudSearchDeleteIndexFieldResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteIndexFieldResponse: cloudsearch.CloudSearchDeleteIndexFieldResponse = { ... }
```

##### `indexField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldResponse.property.indexField"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus)

---

### CloudSearchDeleteSuggesterRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteSuggesterRequest: cloudsearch.CloudSearchDeleteSuggesterRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest.property.domainName"></a>

- *Type:* `string`

---

##### `suggesterName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest.property.suggesterName"></a>

- *Type:* `string`

---

### CloudSearchDeleteSuggesterResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDeleteSuggesterResponse: cloudsearch.CloudSearchDeleteSuggesterResponse = { ... }
```

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterResponse.property.suggester"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus)

---

### CloudSearchDescribeAnalysisSchemesRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeAnalysisSchemesRequest: cloudsearch.CloudSearchDescribeAnalysisSchemesRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest.property.domainName"></a>

- *Type:* `string`

---

##### `analysisSchemeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest.property.analysisSchemeNames"></a>

- *Type:* `string`[]

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest.property.deployed"></a>

- *Type:* `boolean`

---

### CloudSearchDescribeAnalysisSchemesResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeAnalysisSchemesResponse: cloudsearch.CloudSearchDescribeAnalysisSchemesResponse = { ... }
```

##### `analysisSchemes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesResponse.property.analysisSchemes"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus)[]

---

### CloudSearchDescribeAvailabilityOptionsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeAvailabilityOptionsRequest: cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest.property.deployed"></a>

- *Type:* `boolean`

---

### CloudSearchDescribeAvailabilityOptionsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeAvailabilityOptionsResponse: cloudsearch.CloudSearchDescribeAvailabilityOptionsResponse = { ... }
```

##### `availabilityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsResponse.property.availabilityOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus)

---

### CloudSearchDescribeDomainEndpointOptionsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeDomainEndpointOptionsRequest: cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest.property.deployed"></a>

- *Type:* `boolean`

---

### CloudSearchDescribeDomainEndpointOptionsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeDomainEndpointOptionsResponse: cloudsearch.CloudSearchDescribeDomainEndpointOptionsResponse = { ... }
```

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsResponse.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus)

---

### CloudSearchDescribeDomainsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeDomainsRequest: cloudsearch.CloudSearchDescribeDomainsRequest = { ... }
```

##### `domainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest.property.domainNames"></a>

- *Type:* `string`[]

---

### CloudSearchDescribeDomainsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeDomainsResponse: cloudsearch.CloudSearchDescribeDomainsResponse = { ... }
```

##### `domainStatusList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsResponse.property.domainStatusList"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus)[]

---

### CloudSearchDescribeExpressionsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeExpressionsRequest: cloudsearch.CloudSearchDescribeExpressionsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest.property.deployed"></a>

- *Type:* `boolean`

---

##### `expressionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest.property.expressionNames"></a>

- *Type:* `string`[]

---

### CloudSearchDescribeExpressionsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeExpressionsResponse: cloudsearch.CloudSearchDescribeExpressionsResponse = { ... }
```

##### `expressions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsResponse.property.expressions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus)[]

---

### CloudSearchDescribeIndexFieldsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeIndexFieldsRequest: cloudsearch.CloudSearchDescribeIndexFieldsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest.property.deployed"></a>

- *Type:* `boolean`

---

##### `fieldNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest.property.fieldNames"></a>

- *Type:* `string`[]

---

### CloudSearchDescribeIndexFieldsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeIndexFieldsResponse: cloudsearch.CloudSearchDescribeIndexFieldsResponse = { ... }
```

##### `indexFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsResponse.property.indexFields"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus)[]

---

### CloudSearchDescribeScalingParametersRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeScalingParametersRequest: cloudsearch.CloudSearchDescribeScalingParametersRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchDescribeScalingParametersResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeScalingParametersResponse: cloudsearch.CloudSearchDescribeScalingParametersResponse = { ... }
```

##### `scalingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersResponse.property.scalingParameters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus)

---

### CloudSearchDescribeServiceAccessPoliciesRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeServiceAccessPoliciesRequest: cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest.property.deployed"></a>

- *Type:* `boolean`

---

### CloudSearchDescribeServiceAccessPoliciesResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeServiceAccessPoliciesResponse: cloudsearch.CloudSearchDescribeServiceAccessPoliciesResponse = { ... }
```

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesResponse.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus)

---

### CloudSearchDescribeSuggestersRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeSuggestersRequest: cloudsearch.CloudSearchDescribeSuggestersRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest.property.domainName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest.property.deployed"></a>

- *Type:* `boolean`

---

##### `suggesterNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest.property.suggesterNames"></a>

- *Type:* `string`[]

---

### CloudSearchDescribeSuggestersResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDescribeSuggestersResponse: cloudsearch.CloudSearchDescribeSuggestersResponse = { ... }
```

##### `suggesters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersResponse.property.suggesters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus)[]

---

### CloudSearchDocumentSuggesterOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDocumentSuggesterOptions: cloudsearch.CloudSearchDocumentSuggesterOptions = { ... }
```

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions.property.sourceField"></a>

- *Type:* `string`

---

##### `fuzzyMatching`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions.property.fuzzyMatching"></a>

- *Type:* `string`

---

##### `sortExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions.property.sortExpression"></a>

- *Type:* `string`

---

### CloudSearchDomainEndpointOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDomainEndpointOptions: cloudsearch.CloudSearchDomainEndpointOptions = { ... }
```

##### `enforceHttps`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---

### CloudSearchDomainEndpointOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDomainEndpointOptionsStatus: cloudsearch.CloudSearchDomainEndpointOptionsStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchDomainStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDomainStatus: cloudsearch.CloudSearchDomainStatus = { ... }
```

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `requiresIndexDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.requiresIndexDocuments"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `docService`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.docService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint`](#aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint)

---

##### `limits`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.limits"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchLimits`](#aws-cdk-sdk.cloudsearch.CloudSearchLimits)

---

##### `processing`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `searchInstanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.searchInstanceCount"></a>

- *Type:* `number`

---

##### `searchInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.searchInstanceType"></a>

- *Type:* `string`

---

##### `searchPartitionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.searchPartitionCount"></a>

- *Type:* `number`

---

##### `searchService`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus.property.searchService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint`](#aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint)

---

### CloudSearchDoubleArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDoubleArrayOptions: cloudsearch.CloudSearchDoubleArrayOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---

### CloudSearchDoubleOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchDoubleOptions: cloudsearch.CloudSearchDoubleOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchExpression <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpression"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchExpression: cloudsearch.CloudSearchExpression = { ... }
```

##### `expressionName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpression.property.expressionName"></a>

- *Type:* `string`

---

##### `expressionValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpression.property.expressionValue"></a>

- *Type:* `string`

---

### CloudSearchExpressionStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchExpressionStatus: cloudsearch.CloudSearchExpressionStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpression`](#aws-cdk-sdk.cloudsearch.CloudSearchExpression)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchIndexDocumentsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIndexDocumentsRequest: cloudsearch.CloudSearchIndexDocumentsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchIndexDocumentsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIndexDocumentsResponse: cloudsearch.CloudSearchIndexDocumentsResponse = { ... }
```

##### `fieldNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsResponse.property.fieldNames"></a>

- *Type:* `string`[]

---

### CloudSearchIndexField <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIndexField: cloudsearch.CloudSearchIndexField = { ... }
```

##### `indexFieldName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.indexFieldName"></a>

- *Type:* `string`

---

##### `indexFieldType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.indexFieldType"></a>

- *Type:* `string`

---

##### `dateArrayOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.dateArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDateArrayOptions)

---

##### `dateOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.dateOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDateOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDateOptions)

---

##### `doubleArrayOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.doubleArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDoubleArrayOptions)

---

##### `doubleOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.doubleOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDoubleOptions)

---

##### `intArrayOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.intArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions)

---

##### `intOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.intOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIntOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchIntOptions)

---

##### `latLonOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.latLonOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions)

---

##### `literalArrayOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.literalArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions)

---

##### `literalOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.literalOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions)

---

##### `textArrayOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.textArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions)

---

##### `textOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexField.property.textOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchTextOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchTextOptions)

---

### CloudSearchIndexFieldStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIndexFieldStatus: cloudsearch.CloudSearchIndexFieldStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexField`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexField)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchIntArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIntArrayOptions: cloudsearch.CloudSearchIntArrayOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---

### CloudSearchIntOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchIntOptions: cloudsearch.CloudSearchIntOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchIntOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchLatLonOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchLatLonOptions: cloudsearch.CloudSearchLatLonOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLatLonOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchLimits <a name="aws-cdk-sdk.cloudsearch.CloudSearchLimits"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchLimits: cloudsearch.CloudSearchLimits = { ... }
```

##### `maximumPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLimits.property.maximumPartitionCount"></a>

- *Type:* `number`

---

##### `maximumReplicationCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLimits.property.maximumReplicationCount"></a>

- *Type:* `number`

---

### CloudSearchListDomainNamesResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchListDomainNamesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchListDomainNamesResponse: cloudsearch.CloudSearchListDomainNamesResponse = { ... }
```

##### `domainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchListDomainNamesResponse.property.domainNames"></a>

- *Type:* {[ key: string ]: `string`}

---

### CloudSearchLiteralArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchLiteralArrayOptions: cloudsearch.CloudSearchLiteralArrayOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---

### CloudSearchLiteralOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchLiteralOptions: cloudsearch.CloudSearchLiteralOptions = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchLiteralOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchOptionStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchOptionStatus: cloudsearch.CloudSearchOptionStatus = { ... }
```

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `updateVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus.property.updateVersion"></a>

- *Type:* `number`

---

### CloudSearchScalingParameters <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchScalingParameters: cloudsearch.CloudSearchScalingParameters = { ... }
```

##### `desiredInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters.property.desiredInstanceType"></a>

- *Type:* `string`

---

##### `desiredPartitionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters.property.desiredPartitionCount"></a>

- *Type:* `number`

---

##### `desiredReplicationCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters.property.desiredReplicationCount"></a>

- *Type:* `number`

---

### CloudSearchScalingParametersStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchScalingParametersStatus: cloudsearch.CloudSearchScalingParametersStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters`](#aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchServiceEndpoint <a name="aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchServiceEndpoint: cloudsearch.CloudSearchServiceEndpoint = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchServiceEndpoint.property.endpoint"></a>

- *Type:* `string`

---

### CloudSearchSuggester <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggester"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchSuggester: cloudsearch.CloudSearchSuggester = { ... }
```

##### `documentSuggesterOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggester.property.documentSuggesterOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDocumentSuggesterOptions)

---

##### `suggesterName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggester.property.suggesterName"></a>

- *Type:* `string`

---

### CloudSearchSuggesterStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchSuggesterStatus: cloudsearch.CloudSearchSuggesterStatus = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggester`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggester)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchOptionStatus)

---

### CloudSearchTextArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchTextArrayOptions: cloudsearch.CloudSearchTextArrayOptions = { ... }
```

##### `analysisScheme`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---

### CloudSearchTextOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchTextOptions: cloudsearch.CloudSearchTextOptions = { ... }
```

##### `analysisScheme`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchTextOptions.property.sourceField"></a>

- *Type:* `string`

---

### CloudSearchUpdateAvailabilityOptionsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateAvailabilityOptionsRequest: cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest.property.multiAz"></a>

- *Type:* `boolean`

---

### CloudSearchUpdateAvailabilityOptionsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateAvailabilityOptionsResponse: cloudsearch.CloudSearchUpdateAvailabilityOptionsResponse = { ... }
```

##### `availabilityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsResponse.property.availabilityOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAvailabilityOptionsStatus)

---

### CloudSearchUpdateDomainEndpointOptionsRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateDomainEndpointOptionsRequest: cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest = { ... }
```

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptions)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchUpdateDomainEndpointOptionsResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateDomainEndpointOptionsResponse: cloudsearch.CloudSearchUpdateDomainEndpointOptionsResponse = { ... }
```

##### `domainEndpointOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsResponse.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainEndpointOptionsStatus)

---

### CloudSearchUpdateScalingParametersRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateScalingParametersRequest: cloudsearch.CloudSearchUpdateScalingParametersRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest.property.domainName"></a>

- *Type:* `string`

---

##### `scalingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest.property.scalingParameters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters`](#aws-cdk-sdk.cloudsearch.CloudSearchScalingParameters)

---

### CloudSearchUpdateScalingParametersResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateScalingParametersResponse: cloudsearch.CloudSearchUpdateScalingParametersResponse = { ... }
```

##### `scalingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersResponse.property.scalingParameters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchScalingParametersStatus)

---

### CloudSearchUpdateServiceAccessPoliciesRequest <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateServiceAccessPoliciesRequest: cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest = { ... }
```

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest.property.accessPolicies"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest.property.domainName"></a>

- *Type:* `string`

---

### CloudSearchUpdateServiceAccessPoliciesResponse <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

const cloudSearchUpdateServiceAccessPoliciesResponse: cloudsearch.CloudSearchUpdateServiceAccessPoliciesResponse = { ... }
```

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesResponse.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAccessPoliciesStatus)

---

## Classes <a name="Classes"></a>

### CloudSearchResponsesBuildSuggesters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesBuildSuggesters(__scope: Construct, __resources: string[], __input: CloudSearchBuildSuggestersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchBuildSuggestersRequest)

---



#### Properties <a name="Properties"></a>

##### `fieldNames`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesBuildSuggesters.property.fieldNames"></a>

- *Type:* `string`[]

---


### CloudSearchResponsesCreateDomain <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesCreateDomain(__scope: Construct, __resources: string[], __input: CloudSearchCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomain.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus)

---


### CloudSearchResponsesCreateDomainDomainStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesCreateDomainDomainStatus(__scope: Construct, __resources: string[], __input: CloudSearchCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `docService`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.docService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService)

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `limits`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.limits"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits)

---

##### `processing`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `requiresIndexDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.requiresIndexDocuments"></a>

- *Type:* `boolean`

---

##### `searchInstanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.searchInstanceCount"></a>

- *Type:* `number`

---

##### `searchInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.searchInstanceType"></a>

- *Type:* `string`

---

##### `searchPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.searchPartitionCount"></a>

- *Type:* `number`

---

##### `searchService`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatus.property.searchService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService)

---


### CloudSearchResponsesCreateDomainDomainStatusDocService <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService(__scope: Construct, __resources: string[], __input: CloudSearchCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusDocService.property.endpoint"></a>

- *Type:* `string`

---


### CloudSearchResponsesCreateDomainDomainStatusLimits <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits(__scope: Construct, __resources: string[], __input: CloudSearchCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.property.maximumPartitionCount"></a>

- *Type:* `number`

---

##### `maximumReplicationCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusLimits.property.maximumReplicationCount"></a>

- *Type:* `number`

---


### CloudSearchResponsesCreateDomainDomainStatusSearchService <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService(__scope: Construct, __resources: string[], __input: CloudSearchCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesCreateDomainDomainStatusSearchService.property.endpoint"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineAnalysisScheme <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineAnalysisScheme(__scope: Construct, __resources: string[], __input: CloudSearchDefineAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisScheme.property.analysisScheme"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme)

---


### CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme(__scope: Construct, __resources: string[], __input: CloudSearchDefineAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus)

---


### CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.property.analysisOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions)

---

##### `analysisSchemeLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.property.analysisSchemeLanguage"></a>

- *Type:* `string`

---

##### `analysisSchemeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions.property.analysisSchemeName"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmicStemming`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.algorithmicStemming"></a>

- *Type:* `string`

---

##### `japaneseTokenizationDictionary`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.japaneseTokenizationDictionary"></a>

- *Type:* `string`

---

##### `stemmingDictionary`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.stemmingDictionary"></a>

- *Type:* `string`

---

##### `stopwords`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.stopwords"></a>

- *Type:* `string`

---

##### `synonyms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.synonyms"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus(__scope: Construct, __resources: string[], __input: CloudSearchDefineAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDefineExpression <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineExpression(__scope: Construct, __resources: string[], __input: CloudSearchDefineExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpression.property.expression"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression)

---


### CloudSearchResponsesDefineExpressionExpression <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineExpressionExpression(__scope: Construct, __resources: string[], __input: CloudSearchDefineExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpression.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus)

---


### CloudSearchResponsesDefineExpressionExpressionOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `expressionName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.property.expressionName"></a>

- *Type:* `string`

---

##### `expressionValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionOptions.property.expressionValue"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineExpressionExpressionStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus(__scope: Construct, __resources: string[], __input: CloudSearchDefineExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineExpressionExpressionStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDefineIndexField <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexField(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `indexField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexField.property.indexField"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField)

---


### CloudSearchResponsesDefineIndexFieldIndexField <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexField.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus)

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `dateArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.dateArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions)

---

##### `dateOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.dateOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions)

---

##### `doubleArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.doubleArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions)

---

##### `doubleOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.doubleOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions)

---

##### `indexFieldName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.indexFieldName"></a>

- *Type:* `string`

---

##### `indexFieldType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.indexFieldType"></a>

- *Type:* `string`

---

##### `intArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.intArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions)

---

##### `intOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.intOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions)

---

##### `latLonOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.latLonOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions)

---

##### `literalArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.literalArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions)

---

##### `literalOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.literalOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions)

---

##### `textArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.textArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions)

---

##### `textOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptions.property.textOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions)

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineIndexFieldIndexFieldStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus(__scope: Construct, __resources: string[], __input: CloudSearchDefineIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineIndexFieldIndexFieldStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDefineSuggester <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineSuggester(__scope: Construct, __resources: string[], __input: CloudSearchDefineSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggester.property.suggester"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester)

---


### CloudSearchResponsesDefineSuggesterSuggester <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineSuggesterSuggester(__scope: Construct, __resources: string[], __input: CloudSearchDefineSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggester.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus)

---


### CloudSearchResponsesDefineSuggesterSuggesterOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `documentSuggesterOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.property.documentSuggesterOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions)

---

##### `suggesterName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptions.property.suggesterName"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions(__scope: Construct, __resources: string[], __input: CloudSearchDefineSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `fuzzyMatching`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.property.fuzzyMatching"></a>

- *Type:* `string`

---

##### `sortExpression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.property.sortExpression"></a>

- *Type:* `string`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDefineSuggesterSuggesterStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus(__scope: Construct, __resources: string[], __input: CloudSearchDefineSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDefineSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDefineSuggesterSuggesterStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDeleteAnalysisScheme <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteAnalysisScheme(__scope: Construct, __resources: string[], __input: CloudSearchDeleteAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisScheme.property.analysisScheme"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme)

---


### CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme(__scope: Construct, __resources: string[], __input: CloudSearchDeleteAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus)

---


### CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.property.analysisOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions)

---

##### `analysisSchemeLanguage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.property.analysisSchemeLanguage"></a>

- *Type:* `string`

---

##### `analysisSchemeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions.property.analysisSchemeName"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmicStemming`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.algorithmicStemming"></a>

- *Type:* `string`

---

##### `japaneseTokenizationDictionary`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.japaneseTokenizationDictionary"></a>

- *Type:* `string`

---

##### `stemmingDictionary`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.stemmingDictionary"></a>

- *Type:* `string`

---

##### `stopwords`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.stopwords"></a>

- *Type:* `string`

---

##### `synonyms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions.property.synonyms"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus(__scope: Construct, __resources: string[], __input: CloudSearchDeleteAnalysisSchemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteAnalysisSchemeRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDeleteDomain <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteDomain(__scope: Construct, __resources: string[], __input: CloudSearchDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomain.property.domainStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus)

---


### CloudSearchResponsesDeleteDomainDomainStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus(__scope: Construct, __resources: string[], __input: CloudSearchDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.created"></a>

- *Type:* `boolean`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.deleted"></a>

- *Type:* `boolean`

---

##### `docService`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.docService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService)

---

##### `domainId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.domainId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.domainName"></a>

- *Type:* `string`

---

##### `limits`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.limits"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits)

---

##### `processing`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.processing"></a>

- *Type:* `boolean`

---

##### `requiresIndexDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.requiresIndexDocuments"></a>

- *Type:* `boolean`

---

##### `searchInstanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.searchInstanceCount"></a>

- *Type:* `number`

---

##### `searchInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.searchInstanceType"></a>

- *Type:* `string`

---

##### `searchPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.searchPartitionCount"></a>

- *Type:* `number`

---

##### `searchService`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatus.property.searchService"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService)

---


### CloudSearchResponsesDeleteDomainDomainStatusDocService <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService(__scope: Construct, __resources: string[], __input: CloudSearchDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusDocService.property.endpoint"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteDomainDomainStatusLimits <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits(__scope: Construct, __resources: string[], __input: CloudSearchDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.property.maximumPartitionCount"></a>

- *Type:* `number`

---

##### `maximumReplicationCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusLimits.property.maximumReplicationCount"></a>

- *Type:* `number`

---


### CloudSearchResponsesDeleteDomainDomainStatusSearchService <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService(__scope: Construct, __resources: string[], __input: CloudSearchDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteDomainDomainStatusSearchService.property.endpoint"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteExpression <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteExpression(__scope: Construct, __resources: string[], __input: CloudSearchDeleteExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpression.property.expression"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression)

---


### CloudSearchResponsesDeleteExpressionExpression <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteExpressionExpression(__scope: Construct, __resources: string[], __input: CloudSearchDeleteExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpression.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus)

---


### CloudSearchResponsesDeleteExpressionExpressionOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `expressionName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.property.expressionName"></a>

- *Type:* `string`

---

##### `expressionValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionOptions.property.expressionValue"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteExpressionExpressionStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus(__scope: Construct, __resources: string[], __input: CloudSearchDeleteExpressionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteExpressionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteExpressionExpressionStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDeleteIndexField <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexField(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `indexField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexField.property.indexField"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField)

---


### CloudSearchResponsesDeleteIndexFieldIndexField <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexField.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus)

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `dateArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.dateArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions)

---

##### `dateOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.dateOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions)

---

##### `doubleArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.doubleArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions)

---

##### `doubleOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.doubleOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions)

---

##### `indexFieldName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.indexFieldName"></a>

- *Type:* `string`

---

##### `indexFieldType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.indexFieldType"></a>

- *Type:* `string`

---

##### `intArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.intArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions)

---

##### `intOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.intOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions)

---

##### `latLonOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.latLonOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions)

---

##### `literalArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.literalArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions)

---

##### `literalOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.literalOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions)

---

##### `textArrayOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.textArrayOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions)

---

##### `textOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptions.property.textOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions)

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.defaultValue"></a>

- *Type:* `number`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `facetEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.facetEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `searchEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.searchEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sourceFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions.property.sourceFields"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisScheme`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.analysisScheme"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.defaultValue"></a>

- *Type:* `string`

---

##### `highlightEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.highlightEnabled"></a>

- *Type:* `boolean`

---

##### `returnEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.returnEnabled"></a>

- *Type:* `boolean`

---

##### `sortEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.sortEnabled"></a>

- *Type:* `boolean`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteIndexFieldIndexFieldStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus(__scope: Construct, __resources: string[], __input: CloudSearchDeleteIndexFieldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteIndexFieldRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteIndexFieldIndexFieldStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDeleteSuggester <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteSuggester(__scope: Construct, __resources: string[], __input: CloudSearchDeleteSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `suggester`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggester.property.suggester"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester)

---


### CloudSearchResponsesDeleteSuggesterSuggester <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester(__scope: Construct, __resources: string[], __input: CloudSearchDeleteSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggester.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus)

---


### CloudSearchResponsesDeleteSuggesterSuggesterOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `documentSuggesterOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.property.documentSuggesterOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions)

---

##### `suggesterName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptions.property.suggesterName"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions(__scope: Construct, __resources: string[], __input: CloudSearchDeleteSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `fuzzyMatching`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.property.fuzzyMatching"></a>

- *Type:* `string`

---

##### `sortExpression`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.property.sortExpression"></a>

- *Type:* `string`

---

##### `sourceField`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions.property.sourceField"></a>

- *Type:* `string`

---


### CloudSearchResponsesDeleteSuggesterSuggesterStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus(__scope: Construct, __resources: string[], __input: CloudSearchDeleteSuggesterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDeleteSuggesterRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDeleteSuggesterSuggesterStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeAnalysisSchemes <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes(__scope: Construct, __resources: string[], __input: CloudSearchDescribeAnalysisSchemesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAnalysisSchemesRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisSchemes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAnalysisSchemes.property.analysisSchemes"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchAnalysisSchemeStatus)[]

---


### CloudSearchResponsesDescribeAvailabilityOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptions.property.availabilityOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions)

---


### CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.property.options"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus)

---


### CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus(__scope: Construct, __resources: string[], __input: CloudSearchDescribeAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeDomainEndpointOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptions.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions)

---


### CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus)

---


### CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus(__scope: Construct, __resources: string[], __input: CloudSearchDescribeDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeDomains <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeDomains(__scope: Construct, __resources: string[], __input: CloudSearchDescribeDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainStatusList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeDomains.property.domainStatusList"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchDomainStatus)[]

---


### CloudSearchResponsesDescribeExpressions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeExpressions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeExpressionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeExpressionsRequest)

---



#### Properties <a name="Properties"></a>

##### `expressions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeExpressions.property.expressions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchExpressionStatus)[]

---


### CloudSearchResponsesDescribeIndexFields <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeIndexFields(__scope: Construct, __resources: string[], __input: CloudSearchDescribeIndexFieldsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeIndexFieldsRequest)

---



#### Properties <a name="Properties"></a>

##### `indexFields`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeIndexFields.property.indexFields"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexFieldStatus)[]

---


### CloudSearchResponsesDescribeScalingParameters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeScalingParameters(__scope: Construct, __resources: string[], __input: CloudSearchDescribeScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `scalingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParameters.property.scalingParameters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters)

---


### CloudSearchResponsesDescribeScalingParametersScalingParameters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters(__scope: Construct, __resources: string[], __input: CloudSearchDescribeScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParameters.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus)

---


### CloudSearchResponsesDescribeScalingParametersScalingParametersOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions(__scope: Construct, __resources: string[], __input: CloudSearchDescribeScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `desiredInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.property.desiredInstanceType"></a>

- *Type:* `string`

---

##### `desiredPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.property.desiredPartitionCount"></a>

- *Type:* `number`

---

##### `desiredReplicationCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersOptions.property.desiredReplicationCount"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeScalingParametersScalingParametersStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus(__scope: Construct, __resources: string[], __input: CloudSearchDescribeScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeScalingParametersScalingParametersStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeServiceAccessPolicies <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies(__scope: Construct, __resources: string[], __input: CloudSearchDescribeServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPolicies.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies)

---


### CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies(__scope: Construct, __resources: string[], __input: CloudSearchDescribeServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus)

---


### CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus(__scope: Construct, __resources: string[], __input: CloudSearchDescribeServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesDescribeSuggesters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesDescribeSuggesters(__scope: Construct, __resources: string[], __input: CloudSearchDescribeSuggestersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchDescribeSuggestersRequest)

---



#### Properties <a name="Properties"></a>

##### `suggesters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesDescribeSuggesters.property.suggesters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchSuggesterStatus)[]

---


### CloudSearchResponsesIndexDocuments <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesIndexDocuments(__scope: Construct, __resources: string[], __input: CloudSearchIndexDocumentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchIndexDocumentsRequest)

---



#### Properties <a name="Properties"></a>

##### `fieldNames`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesIndexDocuments.property.fieldNames"></a>

- *Type:* `string`[]

---


### CloudSearchResponsesListDomainNames <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesListDomainNames"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesListDomainNames.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesListDomainNames(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesListDomainNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesListDomainNames.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `domainNames`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesListDomainNames.property.domainNames"></a>

- *Type:* {[ key: string ]: `string`}

---


### CloudSearchResponsesUpdateAvailabilityOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptions.property.availabilityOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions)

---


### CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.property.options"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus)

---


### CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus(__scope: Construct, __resources: string[], __input: CloudSearchUpdateAvailabilityOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateAvailabilityOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesUpdateDomainEndpointOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainEndpointOptions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptions.property.domainEndpointOptions"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions)

---


### CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus)

---


### CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `enforceHttps`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.property.enforceHttps"></a>

- *Type:* `boolean`

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions.property.tlsSecurityPolicy"></a>

- *Type:* `string`

---


### CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus(__scope: Construct, __resources: string[], __input: CloudSearchUpdateDomainEndpointOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateDomainEndpointOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesUpdateScalingParameters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateScalingParameters(__scope: Construct, __resources: string[], __input: CloudSearchUpdateScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `scalingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParameters.property.scalingParameters"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters)

---


### CloudSearchResponsesUpdateScalingParametersScalingParameters <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters(__scope: Construct, __resources: string[], __input: CloudSearchUpdateScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.property.options"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParameters.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus)

---


### CloudSearchResponsesUpdateScalingParametersScalingParametersOptions <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions(__scope: Construct, __resources: string[], __input: CloudSearchUpdateScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `desiredInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.property.desiredInstanceType"></a>

- *Type:* `string`

---

##### `desiredPartitionCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.property.desiredPartitionCount"></a>

- *Type:* `number`

---

##### `desiredReplicationCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersOptions.property.desiredReplicationCount"></a>

- *Type:* `number`

---


### CloudSearchResponsesUpdateScalingParametersScalingParametersStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus(__scope: Construct, __resources: string[], __input: CloudSearchUpdateScalingParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateScalingParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateScalingParametersScalingParametersStatus.property.updateVersion"></a>

- *Type:* `number`

---


### CloudSearchResponsesUpdateServiceAccessPolicies <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies(__scope: Construct, __resources: string[], __input: CloudSearchUpdateServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `accessPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPolicies.property.accessPolicies"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies)

---


### CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies(__scope: Construct, __resources: string[], __input: CloudSearchUpdateServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.property.options"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies.property.status"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus`](#aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus)

---


### CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.Initializer"></a>

```typescript
import { cloudsearch } from 'aws-cdk-sdk'

new cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus(__scope: Construct, __resources: string[], __input: CloudSearchUpdateServiceAccessPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest`](#aws-cdk-sdk.cloudsearch.CloudSearchUpdateServiceAccessPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `pendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.property.pendingDeletion"></a>

- *Type:* `boolean`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.property.state"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.property.updateDate"></a>

- *Type:* `string`

---

##### `updateVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudsearch.CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus.property.updateVersion"></a>

- *Type:* `number`

---



