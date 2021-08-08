# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TranslateClient <a name="aws-cdk-sdk.translate.TranslateClient"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateClient.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createParallelData` <a name="aws-cdk-sdk.translate.TranslateClient.createParallelData"></a>

```typescript
public createParallelData(input: TranslateCreateParallelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateCreateParallelDataRequest`](#aws-cdk-sdk.translate.TranslateCreateParallelDataRequest)

---

##### `deleteParallelData` <a name="aws-cdk-sdk.translate.TranslateClient.deleteParallelData"></a>

```typescript
public deleteParallelData(input: TranslateDeleteParallelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest`](#aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest)

---

##### `deleteTerminology` <a name="aws-cdk-sdk.translate.TranslateClient.deleteTerminology"></a>

```typescript
public deleteTerminology(input: TranslateDeleteTerminologyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDeleteTerminologyRequest`](#aws-cdk-sdk.translate.TranslateDeleteTerminologyRequest)

---

##### `describeTextTranslationJob` <a name="aws-cdk-sdk.translate.TranslateClient.describeTextTranslationJob"></a>

```typescript
public describeTextTranslationJob(input: TranslateDescribeTextTranslationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---

##### `fetchParallelData` <a name="aws-cdk-sdk.translate.TranslateClient.fetchParallelData"></a>

```typescript
public fetchParallelData(input: TranslateGetParallelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---

##### `fetchTerminology` <a name="aws-cdk-sdk.translate.TranslateClient.fetchTerminology"></a>

```typescript
public fetchTerminology(input: TranslateGetTerminologyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetTerminologyRequest`](#aws-cdk-sdk.translate.TranslateGetTerminologyRequest)

---

##### `importTerminology` <a name="aws-cdk-sdk.translate.TranslateClient.importTerminology"></a>

```typescript
public importTerminology(input: TranslateImportTerminologyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateImportTerminologyRequest`](#aws-cdk-sdk.translate.TranslateImportTerminologyRequest)

---

##### `listParallelData` <a name="aws-cdk-sdk.translate.TranslateClient.listParallelData"></a>

```typescript
public listParallelData(input: TranslateListParallelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListParallelDataRequest`](#aws-cdk-sdk.translate.TranslateListParallelDataRequest)

---

##### `listTerminologies` <a name="aws-cdk-sdk.translate.TranslateClient.listTerminologies"></a>

```typescript
public listTerminologies(input: TranslateListTerminologiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListTerminologiesRequest`](#aws-cdk-sdk.translate.TranslateListTerminologiesRequest)

---

##### `listTextTranslationJobs` <a name="aws-cdk-sdk.translate.TranslateClient.listTextTranslationJobs"></a>

```typescript
public listTextTranslationJobs(input: TranslateListTextTranslationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest`](#aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest)

---

##### `startTextTranslationJob` <a name="aws-cdk-sdk.translate.TranslateClient.startTextTranslationJob"></a>

```typescript
public startTextTranslationJob(input: TranslateStartTextTranslationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest)

---

##### `stopTextTranslationJob` <a name="aws-cdk-sdk.translate.TranslateClient.stopTextTranslationJob"></a>

```typescript
public stopTextTranslationJob(input: TranslateStopTextTranslationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest)

---

##### `translateText` <a name="aws-cdk-sdk.translate.TranslateClient.translateText"></a>

```typescript
public translateText(input: TranslateTranslateTextRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTranslateTextRequest`](#aws-cdk-sdk.translate.TranslateTranslateTextRequest)

---

##### `updateParallelData` <a name="aws-cdk-sdk.translate.TranslateClient.updateParallelData"></a>

```typescript
public updateParallelData(input: TranslateUpdateParallelDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest`](#aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest)

---




## Structs <a name="Structs"></a>

### TranslateAppliedTerminology <a name="aws-cdk-sdk.translate.TranslateAppliedTerminology"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateAppliedTerminology: translate.TranslateAppliedTerminology = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateAppliedTerminology.property.name"></a>

- *Type:* `string`

---

##### `terms`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateAppliedTerminology.property.terms"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerm`](#aws-cdk-sdk.translate.TranslateTerm)[]

---

### TranslateCreateParallelDataRequest <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateCreateParallelDataRequest: translate.TranslateCreateParallelDataRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest.property.name"></a>

- *Type:* `string`

---

##### `parallelDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest.property.parallelDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataConfig`](#aws-cdk-sdk.translate.TranslateParallelDataConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataRequest.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateEncryptionKey`](#aws-cdk-sdk.translate.TranslateEncryptionKey)

---

### TranslateCreateParallelDataResponse <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateCreateParallelDataResponse: translate.TranslateCreateParallelDataResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateCreateParallelDataResponse.property.status"></a>

- *Type:* `string`

---

### TranslateDeleteParallelDataRequest <a name="aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateDeleteParallelDataRequest: translate.TranslateDeleteParallelDataRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest.property.name"></a>

- *Type:* `string`

---

### TranslateDeleteParallelDataResponse <a name="aws-cdk-sdk.translate.TranslateDeleteParallelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateDeleteParallelDataResponse: translate.TranslateDeleteParallelDataResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateDeleteParallelDataResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateDeleteParallelDataResponse.property.status"></a>

- *Type:* `string`

---

### TranslateDeleteTerminologyRequest <a name="aws-cdk-sdk.translate.TranslateDeleteTerminologyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateDeleteTerminologyRequest: translate.TranslateDeleteTerminologyRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateDeleteTerminologyRequest.property.name"></a>

- *Type:* `string`

---

### TranslateDescribeTextTranslationJobRequest <a name="aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateDescribeTextTranslationJobRequest: translate.TranslateDescribeTextTranslationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest.property.jobId"></a>

- *Type:* `string`

---

### TranslateDescribeTextTranslationJobResponse <a name="aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateDescribeTextTranslationJobResponse: translate.TranslateDescribeTextTranslationJobResponse = { ... }
```

##### `textTranslationJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobResponse.property.textTranslationJobProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTextTranslationJobProperties`](#aws-cdk-sdk.translate.TranslateTextTranslationJobProperties)

---

### TranslateEncryptionKey <a name="aws-cdk-sdk.translate.TranslateEncryptionKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateEncryptionKey: translate.TranslateEncryptionKey = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateEncryptionKey.property.type"></a>

- *Type:* `string`

---

### TranslateGetParallelDataRequest <a name="aws-cdk-sdk.translate.TranslateGetParallelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateGetParallelDataRequest: translate.TranslateGetParallelDataRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateGetParallelDataRequest.property.name"></a>

- *Type:* `string`

---

### TranslateGetParallelDataResponse <a name="aws-cdk-sdk.translate.TranslateGetParallelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateGetParallelDataResponse: translate.TranslateGetParallelDataResponse = { ... }
```

##### `auxiliaryDataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetParallelDataResponse.property.auxiliaryDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataDataLocation`](#aws-cdk-sdk.translate.TranslateParallelDataDataLocation)

---

##### `dataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetParallelDataResponse.property.dataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataDataLocation`](#aws-cdk-sdk.translate.TranslateParallelDataDataLocation)

---

##### `latestUpdateAttemptAuxiliaryDataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetParallelDataResponse.property.latestUpdateAttemptAuxiliaryDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataDataLocation`](#aws-cdk-sdk.translate.TranslateParallelDataDataLocation)

---

##### `parallelDataProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetParallelDataResponse.property.parallelDataProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataProperties`](#aws-cdk-sdk.translate.TranslateParallelDataProperties)

---

### TranslateGetTerminologyRequest <a name="aws-cdk-sdk.translate.TranslateGetTerminologyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateGetTerminologyRequest: translate.TranslateGetTerminologyRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateGetTerminologyRequest.property.name"></a>

- *Type:* `string`

---

##### `terminologyDataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateGetTerminologyRequest.property.terminologyDataFormat"></a>

- *Type:* `string`

---

### TranslateGetTerminologyResponse <a name="aws-cdk-sdk.translate.TranslateGetTerminologyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateGetTerminologyResponse: translate.TranslateGetTerminologyResponse = { ... }
```

##### `terminologyDataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetTerminologyResponse.property.terminologyDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyDataLocation`](#aws-cdk-sdk.translate.TranslateTerminologyDataLocation)

---

##### `terminologyProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateGetTerminologyResponse.property.terminologyProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyProperties`](#aws-cdk-sdk.translate.TranslateTerminologyProperties)

---

### TranslateImportTerminologyRequest <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateImportTerminologyRequest: translate.TranslateImportTerminologyRequest = { ... }
```

##### `mergeStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest.property.mergeStrategy"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest.property.name"></a>

- *Type:* `string`

---

##### `terminologyData`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest.property.terminologyData"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyData`](#aws-cdk-sdk.translate.TranslateTerminologyData)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyRequest.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateEncryptionKey`](#aws-cdk-sdk.translate.TranslateEncryptionKey)

---

### TranslateImportTerminologyResponse <a name="aws-cdk-sdk.translate.TranslateImportTerminologyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateImportTerminologyResponse: translate.TranslateImportTerminologyResponse = { ... }
```

##### `terminologyProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateImportTerminologyResponse.property.terminologyProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyProperties`](#aws-cdk-sdk.translate.TranslateTerminologyProperties)

---

### TranslateInputDataConfig <a name="aws-cdk-sdk.translate.TranslateInputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateInputDataConfig: translate.TranslateInputDataConfig = { ... }
```

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateInputDataConfig.property.contentType"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

### TranslateJobDetails <a name="aws-cdk-sdk.translate.TranslateJobDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateJobDetails: translate.TranslateJobDetails = { ... }
```

##### `documentsWithErrorsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateJobDetails.property.documentsWithErrorsCount"></a>

- *Type:* `number`

---

##### `inputDocumentsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateJobDetails.property.inputDocumentsCount"></a>

- *Type:* `number`

---

##### `translatedDocumentsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateJobDetails.property.translatedDocumentsCount"></a>

- *Type:* `number`

---

### TranslateListParallelDataRequest <a name="aws-cdk-sdk.translate.TranslateListParallelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListParallelDataRequest: translate.TranslateListParallelDataRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListParallelDataRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListParallelDataRequest.property.nextToken"></a>

- *Type:* `string`

---

### TranslateListParallelDataResponse <a name="aws-cdk-sdk.translate.TranslateListParallelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListParallelDataResponse: translate.TranslateListParallelDataResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListParallelDataResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parallelDataPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListParallelDataResponse.property.parallelDataPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataProperties`](#aws-cdk-sdk.translate.TranslateParallelDataProperties)[]

---

### TranslateListTerminologiesRequest <a name="aws-cdk-sdk.translate.TranslateListTerminologiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListTerminologiesRequest: translate.TranslateListTerminologiesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTerminologiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTerminologiesRequest.property.nextToken"></a>

- *Type:* `string`

---

### TranslateListTerminologiesResponse <a name="aws-cdk-sdk.translate.TranslateListTerminologiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListTerminologiesResponse: translate.TranslateListTerminologiesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTerminologiesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `terminologyPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTerminologiesResponse.property.terminologyPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyProperties`](#aws-cdk-sdk.translate.TranslateTerminologyProperties)[]

---

### TranslateListTextTranslationJobsRequest <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListTextTranslationJobsRequest: translate.TranslateListTextTranslationJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTextTranslationJobFilter`](#aws-cdk-sdk.translate.TranslateTextTranslationJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### TranslateListTextTranslationJobsResponse <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateListTextTranslationJobsResponse: translate.TranslateListTextTranslationJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `textTranslationJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateListTextTranslationJobsResponse.property.textTranslationJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTextTranslationJobProperties`](#aws-cdk-sdk.translate.TranslateTextTranslationJobProperties)[]

---

### TranslateOutputDataConfig <a name="aws-cdk-sdk.translate.TranslateOutputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateOutputDataConfig: translate.TranslateOutputDataConfig = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

### TranslateParallelDataConfig <a name="aws-cdk-sdk.translate.TranslateParallelDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateParallelDataConfig: translate.TranslateParallelDataConfig = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataConfig.property.format"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

### TranslateParallelDataDataLocation <a name="aws-cdk-sdk.translate.TranslateParallelDataDataLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateParallelDataDataLocation: translate.TranslateParallelDataDataLocation = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataDataLocation.property.repositoryType"></a>

- *Type:* `string`

---

### TranslateParallelDataProperties <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateParallelDataProperties: translate.TranslateParallelDataProperties = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateEncryptionKey`](#aws-cdk-sdk.translate.TranslateEncryptionKey)

---

##### `failedRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.failedRecordCount"></a>

- *Type:* `number`

---

##### `importedDataSize`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.importedDataSize"></a>

- *Type:* `number`

---

##### `importedRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.importedRecordCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.latestUpdateAttemptAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.latestUpdateAttemptStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.name"></a>

- *Type:* `string`

---

##### `parallelDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.parallelDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataConfig`](#aws-cdk-sdk.translate.TranslateParallelDataConfig)

---

##### `skippedRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.skippedRecordCount"></a>

- *Type:* `number`

---

##### `sourceLanguageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.status"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateParallelDataProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

### TranslateStartTextTranslationJobRequest <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateStartTextTranslationJobRequest: translate.TranslateStartTextTranslationJobRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateInputDataConfig`](#aws-cdk-sdk.translate.TranslateInputDataConfig)

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateOutputDataConfig`](#aws-cdk-sdk.translate.TranslateOutputDataConfig)

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `parallelDataNames`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.parallelDataNames"></a>

- *Type:* `string`[]

---

##### `terminologyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest.property.terminologyNames"></a>

- *Type:* `string`[]

---

### TranslateStartTextTranslationJobResponse <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateStartTextTranslationJobResponse: translate.TranslateStartTextTranslationJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStartTextTranslationJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### TranslateStopTextTranslationJobRequest <a name="aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateStopTextTranslationJobRequest: translate.TranslateStopTextTranslationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest.property.jobId"></a>

- *Type:* `string`

---

### TranslateStopTextTranslationJobResponse <a name="aws-cdk-sdk.translate.TranslateStopTextTranslationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateStopTextTranslationJobResponse: translate.TranslateStopTextTranslationJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStopTextTranslationJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateStopTextTranslationJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### TranslateTerm <a name="aws-cdk-sdk.translate.TranslateTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTerm: translate.TranslateTerm = { ... }
```

##### `sourceText`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerm.property.sourceText"></a>

- *Type:* `string`

---

##### `targetText`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerm.property.targetText"></a>

- *Type:* `string`

---

### TranslateTerminologyData <a name="aws-cdk-sdk.translate.TranslateTerminologyData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTerminologyData: translate.TranslateTerminologyData = { ... }
```

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyData.property.file"></a>

- *Type:* `any`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyData.property.format"></a>

- *Type:* `string`

---

### TranslateTerminologyDataLocation <a name="aws-cdk-sdk.translate.TranslateTerminologyDataLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTerminologyDataLocation: translate.TranslateTerminologyDataLocation = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyDataLocation.property.repositoryType"></a>

- *Type:* `string`

---

### TranslateTerminologyProperties <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTerminologyProperties: translate.TranslateTerminologyProperties = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateEncryptionKey`](#aws-cdk-sdk.translate.TranslateEncryptionKey)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.name"></a>

- *Type:* `string`

---

##### `sizeBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.sizeBytes"></a>

- *Type:* `number`

---

##### `sourceLanguageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `termCount`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTerminologyProperties.property.termCount"></a>

- *Type:* `number`

---

### TranslateTextTranslationJobFilter <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTextTranslationJobFilter: translate.TranslateTextTranslationJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submittedAfterTime`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobFilter.property.submittedAfterTime"></a>

- *Type:* `string`

---

##### `submittedBeforeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobFilter.property.submittedBeforeTime"></a>

- *Type:* `string`

---

### TranslateTextTranslationJobProperties <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTextTranslationJobProperties: translate.TranslateTextTranslationJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateInputDataConfig`](#aws-cdk-sdk.translate.TranslateInputDataConfig)

---

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateJobDetails`](#aws-cdk-sdk.translate.TranslateJobDetails)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateOutputDataConfig`](#aws-cdk-sdk.translate.TranslateOutputDataConfig)

---

##### `parallelDataNames`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.parallelDataNames"></a>

- *Type:* `string`[]

---

##### `sourceLanguageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `submittedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.submittedTime"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `terminologyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTextTranslationJobProperties.property.terminologyNames"></a>

- *Type:* `string`[]

---

### TranslateTranslateTextRequest <a name="aws-cdk-sdk.translate.TranslateTranslateTextRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTranslateTextRequest: translate.TranslateTranslateTextRequest = { ... }
```

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextRequest.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextRequest.property.targetLanguageCode"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextRequest.property.text"></a>

- *Type:* `string`

---

##### `terminologyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextRequest.property.terminologyNames"></a>

- *Type:* `string`[]

---

### TranslateTranslateTextResponse <a name="aws-cdk-sdk.translate.TranslateTranslateTextResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateTranslateTextResponse: translate.TranslateTranslateTextResponse = { ... }
```

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextResponse.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextResponse.property.targetLanguageCode"></a>

- *Type:* `string`

---

##### `translatedText`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextResponse.property.translatedText"></a>

- *Type:* `string`

---

##### `appliedTerminologies`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateTranslateTextResponse.property.appliedTerminologies"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateAppliedTerminology`](#aws-cdk-sdk.translate.TranslateAppliedTerminology)[]

---

### TranslateUpdateParallelDataRequest <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateUpdateParallelDataRequest: translate.TranslateUpdateParallelDataRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest.property.name"></a>

- *Type:* `string`

---

##### `parallelDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest.property.parallelDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataConfig`](#aws-cdk-sdk.translate.TranslateParallelDataConfig)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest.property.description"></a>

- *Type:* `string`

---

### TranslateUpdateParallelDataResponse <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

const translateUpdateParallelDataResponse: translate.TranslateUpdateParallelDataResponse = { ... }
```

##### `latestUpdateAttemptAt`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataResponse.property.latestUpdateAttemptAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataResponse.property.latestUpdateAttemptStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.translate.TranslateUpdateParallelDataResponse.property.status"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### TranslateResponsesCreateParallelData <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesCreateParallelData(__scope: Construct, __resources: string[], __input: TranslateCreateParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateCreateParallelDataRequest`](#aws-cdk-sdk.translate.TranslateCreateParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesCreateParallelData.property.status"></a>

- *Type:* `string`

---


### TranslateResponsesDeleteParallelData <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDeleteParallelData(__scope: Construct, __resources: string[], __input: TranslateDeleteParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest`](#aws-cdk-sdk.translate.TranslateDeleteParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDeleteParallelData.property.status"></a>

- *Type:* `string`

---


### TranslateResponsesDescribeTextTranslationJob <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDescribeTextTranslationJob(__scope: Construct, __resources: string[], __input: TranslateDescribeTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `textTranslationJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJob.property.textTranslationJobProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties`](#aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties)

---


### TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties(__scope: Construct, __resources: string[], __input: TranslateDescribeTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig`](#aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig)

---

##### `jobDetails`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails`](#aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig`](#aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig)

---

##### `parallelDataNames`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.parallelDataNames"></a>

- *Type:* `string`[]

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `submittedTime`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.submittedTime"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `terminologyNames`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobProperties.property.terminologyNames"></a>

- *Type:* `string`[]

---


### TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: TranslateDescribeTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.property.contentType"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails(__scope: Construct, __resources: string[], __input: TranslateDescribeTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `documentsWithErrorsCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.property.documentsWithErrorsCount"></a>

- *Type:* `number`

---

##### `inputDocumentsCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.property.inputDocumentsCount"></a>

- *Type:* `number`

---

##### `translatedDocumentsCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesJobDetails.property.translatedDocumentsCount"></a>

- *Type:* `number`

---


### TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: TranslateDescribeTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateDescribeTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesDescribeTextTranslationJobTextTranslationJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### TranslateResponsesFetchParallelData <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelData(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `auxiliaryDataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.property.auxiliaryDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation)

---

##### `dataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.property.dataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation)

---

##### `latestUpdateAttemptAuxiliaryDataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.property.latestUpdateAttemptAuxiliaryDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation)

---

##### `parallelDataProperties`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelData.property.parallelDataProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties)

---


### TranslateResponsesFetchParallelDataAuxiliaryDataLocation <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataAuxiliaryDataLocation.property.repositoryType"></a>

- *Type:* `string`

---


### TranslateResponsesFetchParallelDataDataLocation <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataDataLocation(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataDataLocation.property.repositoryType"></a>

- *Type:* `string`

---


### TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataLatestUpdateAttemptAuxiliaryDataLocation.property.repositoryType"></a>

- *Type:* `string`

---


### TranslateResponsesFetchParallelDataParallelDataProperties <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataParallelDataProperties(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey)

---

##### `failedRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.failedRecordCount"></a>

- *Type:* `number`

---

##### `importedDataSize`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.importedDataSize"></a>

- *Type:* `number`

---

##### `importedRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.importedRecordCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.latestUpdateAttemptAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptStatus`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.latestUpdateAttemptStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.name"></a>

- *Type:* `string`

---

##### `parallelDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.parallelDataConfig"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig`](#aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig)

---

##### `skippedRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.skippedRecordCount"></a>

- *Type:* `number`

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.status"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---


### TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesEncryptionKey.property.type"></a>

- *Type:* `string`

---


### TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig(__scope: Construct, __resources: string[], __input: TranslateGetParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetParallelDataRequest`](#aws-cdk-sdk.translate.TranslateGetParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.property.format"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchParallelDataParallelDataPropertiesParallelDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### TranslateResponsesFetchTerminology <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchTerminology(__scope: Construct, __resources: string[], __input: TranslateGetTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetTerminologyRequest`](#aws-cdk-sdk.translate.TranslateGetTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `terminologyDataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.property.terminologyDataLocation"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation`](#aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation)

---

##### `terminologyProperties`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminology.property.terminologyProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties`](#aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties)

---


### TranslateResponsesFetchTerminologyTerminologyDataLocation <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchTerminologyTerminologyDataLocation(__scope: Construct, __resources: string[], __input: TranslateGetTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetTerminologyRequest`](#aws-cdk-sdk.translate.TranslateGetTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.property.location"></a>

- *Type:* `string`

---

##### `repositoryType`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyDataLocation.property.repositoryType"></a>

- *Type:* `string`

---


### TranslateResponsesFetchTerminologyTerminologyProperties <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchTerminologyTerminologyProperties(__scope: Construct, __resources: string[], __input: TranslateGetTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetTerminologyRequest`](#aws-cdk-sdk.translate.TranslateGetTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey`](#aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.name"></a>

- *Type:* `string`

---

##### `sizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.sizeBytes"></a>

- *Type:* `number`

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `termCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyProperties.property.termCount"></a>

- *Type:* `number`

---


### TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey(__scope: Construct, __resources: string[], __input: TranslateGetTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateGetTerminologyRequest`](#aws-cdk-sdk.translate.TranslateGetTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesFetchTerminologyTerminologyPropertiesEncryptionKey.property.type"></a>

- *Type:* `string`

---


### TranslateResponsesImportTerminology <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesImportTerminology(__scope: Construct, __resources: string[], __input: TranslateImportTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateImportTerminologyRequest`](#aws-cdk-sdk.translate.TranslateImportTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `terminologyProperties`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminology.property.terminologyProperties"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties`](#aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties)

---


### TranslateResponsesImportTerminologyTerminologyProperties <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesImportTerminologyTerminologyProperties(__scope: Construct, __resources: string[], __input: TranslateImportTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateImportTerminologyRequest`](#aws-cdk-sdk.translate.TranslateImportTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey`](#aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.name"></a>

- *Type:* `string`

---

##### `sizeBytes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.sizeBytes"></a>

- *Type:* `number`

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.targetLanguageCodes"></a>

- *Type:* `string`[]

---

##### `termCount`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyProperties.property.termCount"></a>

- *Type:* `number`

---


### TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey(__scope: Construct, __resources: string[], __input: TranslateImportTerminologyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateImportTerminologyRequest`](#aws-cdk-sdk.translate.TranslateImportTerminologyRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesImportTerminologyTerminologyPropertiesEncryptionKey.property.type"></a>

- *Type:* `string`

---


### TranslateResponsesListParallelData <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesListParallelData(__scope: Construct, __resources: string[], __input: TranslateListParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListParallelDataRequest`](#aws-cdk-sdk.translate.TranslateListParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.property.nextToken"></a>

- *Type:* `string`

---

##### `parallelDataPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListParallelData.property.parallelDataPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateParallelDataProperties`](#aws-cdk-sdk.translate.TranslateParallelDataProperties)[]

---


### TranslateResponsesListTerminologies <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesListTerminologies(__scope: Construct, __resources: string[], __input: TranslateListTerminologiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListTerminologiesRequest`](#aws-cdk-sdk.translate.TranslateListTerminologiesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.property.nextToken"></a>

- *Type:* `string`

---

##### `terminologyPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTerminologies.property.terminologyPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTerminologyProperties`](#aws-cdk-sdk.translate.TranslateTerminologyProperties)[]

---


### TranslateResponsesListTextTranslationJobs <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesListTextTranslationJobs(__scope: Construct, __resources: string[], __input: TranslateListTextTranslationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest`](#aws-cdk-sdk.translate.TranslateListTextTranslationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `textTranslationJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesListTextTranslationJobs.property.textTranslationJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTextTranslationJobProperties`](#aws-cdk-sdk.translate.TranslateTextTranslationJobProperties)[]

---


### TranslateResponsesStartTextTranslationJob <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesStartTextTranslationJob(__scope: Construct, __resources: string[], __input: TranslateStartTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateStartTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStartTextTranslationJob.property.jobStatus"></a>

- *Type:* `string`

---


### TranslateResponsesStopTextTranslationJob <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesStopTextTranslationJob(__scope: Construct, __resources: string[], __input: TranslateStopTextTranslationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest`](#aws-cdk-sdk.translate.TranslateStopTextTranslationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesStopTextTranslationJob.property.jobStatus"></a>

- *Type:* `string`

---


### TranslateResponsesTranslateText <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesTranslateText(__scope: Construct, __resources: string[], __input: TranslateTranslateTextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateTranslateTextRequest`](#aws-cdk-sdk.translate.TranslateTranslateTextRequest)

---



#### Properties <a name="Properties"></a>

##### `appliedTerminologies`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.property.appliedTerminologies"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateAppliedTerminology`](#aws-cdk-sdk.translate.TranslateAppliedTerminology)[]

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.property.sourceLanguageCode"></a>

- *Type:* `string`

---

##### `targetLanguageCode`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.property.targetLanguageCode"></a>

- *Type:* `string`

---

##### `translatedText`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesTranslateText.property.translatedText"></a>

- *Type:* `string`

---


### TranslateResponsesUpdateParallelData <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData"></a>

#### Initializer <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.Initializer"></a>

```typescript
import { translate } from 'aws-cdk-sdk'

new translate.TranslateResponsesUpdateParallelData(__scope: Construct, __resources: string[], __input: TranslateUpdateParallelDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest`](#aws-cdk-sdk.translate.TranslateUpdateParallelDataRequest)

---



#### Properties <a name="Properties"></a>

##### `latestUpdateAttemptAt`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.property.latestUpdateAttemptAt"></a>

- *Type:* `string`

---

##### `latestUpdateAttemptStatus`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.property.latestUpdateAttemptStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.translate.TranslateResponsesUpdateParallelData.property.status"></a>

- *Type:* `string`

---



