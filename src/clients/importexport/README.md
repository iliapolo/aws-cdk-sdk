# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ImportExportClient <a name="aws-cdk-sdk.importexport.ImportExportClient"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportClient.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelJob` <a name="aws-cdk-sdk.importexport.ImportExportClient.cancelJob"></a>

```typescript
public cancelJob(input: ImportExportCancelJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportCancelJobInput`](#aws-cdk-sdk.importexport.ImportExportCancelJobInput)

---

##### `createJob` <a name="aws-cdk-sdk.importexport.ImportExportClient.createJob"></a>

```typescript
public createJob(input: ImportExportCreateJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportCreateJobInput`](#aws-cdk-sdk.importexport.ImportExportCreateJobInput)

---

##### `fetchShippingLabel` <a name="aws-cdk-sdk.importexport.ImportExportClient.fetchShippingLabel"></a>

```typescript
public fetchShippingLabel(input: ImportExportGetShippingLabelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput`](#aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput)

---

##### `fetchStatus` <a name="aws-cdk-sdk.importexport.ImportExportClient.fetchStatus"></a>

```typescript
public fetchStatus(input: ImportExportGetStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportGetStatusInput`](#aws-cdk-sdk.importexport.ImportExportGetStatusInput)

---

##### `listJobs` <a name="aws-cdk-sdk.importexport.ImportExportClient.listJobs"></a>

```typescript
public listJobs(input: ImportExportListJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportListJobsInput`](#aws-cdk-sdk.importexport.ImportExportListJobsInput)

---

##### `updateJob` <a name="aws-cdk-sdk.importexport.ImportExportClient.updateJob"></a>

```typescript
public updateJob(input: ImportExportUpdateJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportUpdateJobInput`](#aws-cdk-sdk.importexport.ImportExportUpdateJobInput)

---




## Structs <a name="Structs"></a>

### ImportExportArtifact <a name="aws-cdk-sdk.importexport.ImportExportArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportArtifact: importexport.ImportExportArtifact = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportArtifact.property.description"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportArtifact.property.url"></a>

- *Type:* `string`

---

### ImportExportCancelJobInput <a name="aws-cdk-sdk.importexport.ImportExportCancelJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportCancelJobInput: importexport.ImportExportCancelJobInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportCancelJobInput.property.jobId"></a>

- *Type:* `string`

---

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCancelJobInput.property.apiVersion"></a>

- *Type:* `string`

---

### ImportExportCancelJobOutput <a name="aws-cdk-sdk.importexport.ImportExportCancelJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportCancelJobOutput: importexport.ImportExportCancelJobOutput = { ... }
```

##### `success`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCancelJobOutput.property.success"></a>

- *Type:* `boolean`

---

### ImportExportCreateJobInput <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportCreateJobInput: importexport.ImportExportCreateJobInput = { ... }
```

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput.property.jobType"></a>

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput.property.manifest"></a>

- *Type:* `string`

---

##### `validateOnly`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput.property.validateOnly"></a>

- *Type:* `boolean`

---

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput.property.apiVersion"></a>

- *Type:* `string`

---

##### `manifestAddendum`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobInput.property.manifestAddendum"></a>

- *Type:* `string`

---

### ImportExportCreateJobOutput <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportCreateJobOutput: importexport.ImportExportCreateJobOutput = { ... }
```

##### `artifactList`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.jobType"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.signature"></a>

- *Type:* `string`

---

##### `signatureFileContents`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.signatureFileContents"></a>

- *Type:* `string`

---

##### `warningMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportCreateJobOutput.property.warningMessage"></a>

- *Type:* `string`

---

### ImportExportGetShippingLabelInput <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportGetShippingLabelInput: importexport.ImportExportGetShippingLabelInput = { ... }
```

##### `jobIds`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.jobIds"></a>

- *Type:* `string`[]

---

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.apiVersion"></a>

- *Type:* `string`

---

##### `city`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.city"></a>

- *Type:* `string`

---

##### `company`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.company"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.country"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.name"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.phoneNumber"></a>

- *Type:* `string`

---

##### `postalCode`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.postalCode"></a>

- *Type:* `string`

---

##### `stateOrProvince`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.stateOrProvince"></a>

- *Type:* `string`

---

##### `street1`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.street1"></a>

- *Type:* `string`

---

##### `street2`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.street2"></a>

- *Type:* `string`

---

##### `street3`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput.property.street3"></a>

- *Type:* `string`

---

### ImportExportGetShippingLabelOutput <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportGetShippingLabelOutput: importexport.ImportExportGetShippingLabelOutput = { ... }
```

##### `shippingLabelUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelOutput.property.shippingLabelUrl"></a>

- *Type:* `string`

---

##### `warning`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetShippingLabelOutput.property.warning"></a>

- *Type:* `string`

---

### ImportExportGetStatusInput <a name="aws-cdk-sdk.importexport.ImportExportGetStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportGetStatusInput: importexport.ImportExportGetStatusInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusInput.property.jobId"></a>

- *Type:* `string`

---

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusInput.property.apiVersion"></a>

- *Type:* `string`

---

### ImportExportGetStatusOutput <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportGetStatusOutput: importexport.ImportExportGetStatusOutput = { ... }
```

##### `artifactList`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `carrier`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.carrier"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.creationDate"></a>

- *Type:* `string`

---

##### `currentManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.currentManifest"></a>

- *Type:* `string`

---

##### `errorCount`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.errorCount"></a>

- *Type:* `number`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.jobType"></a>

- *Type:* `string`

---

##### `locationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.locationCode"></a>

- *Type:* `string`

---

##### `locationMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.locationMessage"></a>

- *Type:* `string`

---

##### `logBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.logBucket"></a>

- *Type:* `string`

---

##### `logKey`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.logKey"></a>

- *Type:* `string`

---

##### `progressCode`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.progressCode"></a>

- *Type:* `string`

---

##### `progressMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.progressMessage"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.signature"></a>

- *Type:* `string`

---

##### `signatureFileContents`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.signatureFileContents"></a>

- *Type:* `string`

---

##### `trackingNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportGetStatusOutput.property.trackingNumber"></a>

- *Type:* `string`

---

### ImportExportJob <a name="aws-cdk-sdk.importexport.ImportExportJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportJob: importexport.ImportExportJob = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportJob.property.creationDate"></a>

- *Type:* `string`

---

##### `isCanceled`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportJob.property.isCanceled"></a>

- *Type:* `boolean`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportJob.property.jobType"></a>

- *Type:* `string`

---

### ImportExportListJobsInput <a name="aws-cdk-sdk.importexport.ImportExportListJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportListJobsInput: importexport.ImportExportListJobsInput = { ... }
```

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportListJobsInput.property.apiVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportListJobsInput.property.marker"></a>

- *Type:* `string`

---

##### `maxJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportListJobsInput.property.maxJobs"></a>

- *Type:* `number`

---

### ImportExportListJobsOutput <a name="aws-cdk-sdk.importexport.ImportExportListJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportListJobsOutput: importexport.ImportExportListJobsOutput = { ... }
```

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportListJobsOutput.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportListJobsOutput.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportJob`](#aws-cdk-sdk.importexport.ImportExportJob)[]

---

### ImportExportUpdateJobInput <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportUpdateJobInput: importexport.ImportExportUpdateJobInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput.property.jobType"></a>

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput.property.manifest"></a>

- *Type:* `string`

---

##### `validateOnly`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput.property.validateOnly"></a>

- *Type:* `boolean`

---

##### `apiVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobInput.property.apiVersion"></a>

- *Type:* `string`

---

### ImportExportUpdateJobOutput <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

const importExportUpdateJobOutput: importexport.ImportExportUpdateJobOutput = { ... }
```

##### `artifactList`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobOutput.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `success`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobOutput.property.success"></a>

- *Type:* `boolean`

---

##### `warningMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.importexport.ImportExportUpdateJobOutput.property.warningMessage"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ImportExportResponsesCancelJob <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesCancelJob(__scope: Construct, __resources: string[], __input: ImportExportCancelJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportCancelJobInput`](#aws-cdk-sdk.importexport.ImportExportCancelJobInput)

---



#### Properties <a name="Properties"></a>

##### `success`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCancelJob.property.success"></a>

- *Type:* `boolean`

---


### ImportExportResponsesCreateJob <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesCreateJob(__scope: Construct, __resources: string[], __input: ImportExportCreateJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportCreateJobInput`](#aws-cdk-sdk.importexport.ImportExportCreateJobInput)

---



#### Properties <a name="Properties"></a>

##### `artifactList`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.jobType"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.signature"></a>

- *Type:* `string`

---

##### `signatureFileContents`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.signatureFileContents"></a>

- *Type:* `string`

---

##### `warningMessage`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesCreateJob.property.warningMessage"></a>

- *Type:* `string`

---


### ImportExportResponsesFetchShippingLabel <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesFetchShippingLabel(__scope: Construct, __resources: string[], __input: ImportExportGetShippingLabelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput`](#aws-cdk-sdk.importexport.ImportExportGetShippingLabelInput)

---



#### Properties <a name="Properties"></a>

##### `shippingLabelUrl`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.property.shippingLabelUrl"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchShippingLabel.property.warning"></a>

- *Type:* `string`

---


### ImportExportResponsesFetchStatus <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesFetchStatus(__scope: Construct, __resources: string[], __input: ImportExportGetStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportGetStatusInput`](#aws-cdk-sdk.importexport.ImportExportGetStatusInput)

---



#### Properties <a name="Properties"></a>

##### `artifactList`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `carrier`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.carrier"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.creationDate"></a>

- *Type:* `string`

---

##### `currentManifest`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.currentManifest"></a>

- *Type:* `string`

---

##### `errorCount`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.errorCount"></a>

- *Type:* `number`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.jobType"></a>

- *Type:* `string`

---

##### `locationCode`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.locationCode"></a>

- *Type:* `string`

---

##### `locationMessage`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.locationMessage"></a>

- *Type:* `string`

---

##### `logBucket`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.logBucket"></a>

- *Type:* `string`

---

##### `logKey`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.logKey"></a>

- *Type:* `string`

---

##### `progressCode`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.progressCode"></a>

- *Type:* `string`

---

##### `progressMessage`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.progressMessage"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.signature"></a>

- *Type:* `string`

---

##### `signatureFileContents`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.signatureFileContents"></a>

- *Type:* `string`

---

##### `trackingNumber`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesFetchStatus.property.trackingNumber"></a>

- *Type:* `string`

---


### ImportExportResponsesListJobs <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesListJobs(__scope: Construct, __resources: string[], __input: ImportExportListJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportListJobsInput`](#aws-cdk-sdk.importexport.ImportExportListJobsInput)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportJob`](#aws-cdk-sdk.importexport.ImportExportJob)[]

---


### ImportExportResponsesUpdateJob <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob"></a>

#### Initializer <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.Initializer"></a>

```typescript
import { importexport } from 'aws-cdk-sdk'

new importexport.ImportExportResponsesUpdateJob(__scope: Construct, __resources: string[], __input: ImportExportUpdateJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportUpdateJobInput`](#aws-cdk-sdk.importexport.ImportExportUpdateJobInput)

---



#### Properties <a name="Properties"></a>

##### `artifactList`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.property.artifactList"></a>

- *Type:* [`aws-cdk-sdk.importexport.ImportExportArtifact`](#aws-cdk-sdk.importexport.ImportExportArtifact)[]

---

##### `success`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.property.success"></a>

- *Type:* `boolean`

---

##### `warningMessage`<sup>Required</sup> <a name="aws-cdk-sdk.importexport.ImportExportResponsesUpdateJob.property.warningMessage"></a>

- *Type:* `string`

---



