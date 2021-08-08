# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ComprehendMedicalClient <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeEntitiesDetectionV2Job` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.describeEntitiesDetectionV2Job"></a>

```typescript
public describeEntitiesDetectionV2Job(input: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)

---

##### `describeIcd10CmInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.describeIcd10CmInferenceJob"></a>

```typescript
public describeIcd10CmInferenceJob(input: ComprehendMedicalDescribeIcd10CmInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest)

---

##### `describePhiDetectionJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.describePhiDetectionJob"></a>

```typescript
public describePhiDetectionJob(input: ComprehendMedicalDescribePhiDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest)

---

##### `describeRxNormInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.describeRxNormInferenceJob"></a>

```typescript
public describeRxNormInferenceJob(input: ComprehendMedicalDescribeRxNormInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest)

---

##### `detectEntities` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.detectEntities"></a>

```typescript
public detectEntities(input: ComprehendMedicalDetectEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest)

---

##### `detectEntitiesV2` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.detectEntitiesV2"></a>

```typescript
public detectEntitiesV2(input: ComprehendMedicalDetectEntitiesV2Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request)

---

##### `detectPhi` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.detectPhi"></a>

```typescript
public detectPhi(input: ComprehendMedicalDetectPhiRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest)

---

##### `inferIcd10Cm` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.inferIcd10Cm"></a>

```typescript
public inferIcd10Cm(input: ComprehendMedicalInferIcd10CmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest)

---

##### `inferRxNorm` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.inferRxNorm"></a>

```typescript
public inferRxNorm(input: ComprehendMedicalInferRxNormRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest)

---

##### `listEntitiesDetectionV2Jobs` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.listEntitiesDetectionV2Jobs"></a>

```typescript
public listEntitiesDetectionV2Jobs(input: ComprehendMedicalListEntitiesDetectionV2JobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest)

---

##### `listIcd10CmInferenceJobs` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.listIcd10CmInferenceJobs"></a>

```typescript
public listIcd10CmInferenceJobs(input: ComprehendMedicalListIcd10CmInferenceJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest)

---

##### `listPhiDetectionJobs` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.listPhiDetectionJobs"></a>

```typescript
public listPhiDetectionJobs(input: ComprehendMedicalListPhiDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest)

---

##### `listRxNormInferenceJobs` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.listRxNormInferenceJobs"></a>

```typescript
public listRxNormInferenceJobs(input: ComprehendMedicalListRxNormInferenceJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest)

---

##### `startEntitiesDetectionV2Job` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.startEntitiesDetectionV2Job"></a>

```typescript
public startEntitiesDetectionV2Job(input: ComprehendMedicalStartEntitiesDetectionV2JobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest)

---

##### `startIcd10CmInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.startIcd10CmInferenceJob"></a>

```typescript
public startIcd10CmInferenceJob(input: ComprehendMedicalStartIcd10CmInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest)

---

##### `startPhiDetectionJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.startPhiDetectionJob"></a>

```typescript
public startPhiDetectionJob(input: ComprehendMedicalStartPhiDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest)

---

##### `startRxNormInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.startRxNormInferenceJob"></a>

```typescript
public startRxNormInferenceJob(input: ComprehendMedicalStartRxNormInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest)

---

##### `stopEntitiesDetectionV2Job` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.stopEntitiesDetectionV2Job"></a>

```typescript
public stopEntitiesDetectionV2Job(input: ComprehendMedicalStopEntitiesDetectionV2JobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest)

---

##### `stopIcd10CmInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.stopIcd10CmInferenceJob"></a>

```typescript
public stopIcd10CmInferenceJob(input: ComprehendMedicalStopIcd10CmInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest)

---

##### `stopPhiDetectionJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.stopPhiDetectionJob"></a>

```typescript
public stopPhiDetectionJob(input: ComprehendMedicalStopPhiDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest)

---

##### `stopRxNormInferenceJob` <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.stopRxNormInferenceJob"></a>

```typescript
public stopRxNormInferenceJob(input: ComprehendMedicalStopRxNormInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest)

---




## Structs <a name="Structs"></a>

### ComprehendMedicalAttribute <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalAttribute: comprehendmedical.ComprehendMedicalAttribute = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.beginOffset"></a>

- *Type:* `number`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.category"></a>

- *Type:* `string`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.endOffset"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.id"></a>

- *Type:* `number`

---

##### `relationshipScore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.relationshipScore"></a>

- *Type:* `number`

---

##### `relationshipType`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.relationshipType"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalComprehendMedicalAsyncJobFilter <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalComprehendMedicalAsyncJobFilter: comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendMedicalComprehendMedicalAsyncJobProperties <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalComprehendMedicalAsyncJobProperties: comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.expirationTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.kmsKey"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `manifestFilePath`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.manifestFilePath"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.message"></a>

- *Type:* `string`

---

##### `modelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.modelVersion"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties.property.submitTime"></a>

- *Type:* `string`

---

### ComprehendMedicalDescribeEntitiesDetectionV2JobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeEntitiesDetectionV2JobRequest: comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalDescribeEntitiesDetectionV2JobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeEntitiesDetectionV2JobResponse: comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobResponse = { ... }
```

##### `comprehendMedicalAsyncJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobResponse.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)

---

### ComprehendMedicalDescribeIcd10CmInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeIcd10CmInferenceJobRequest: comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalDescribeIcd10CmInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeIcd10CmInferenceJobResponse: comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobResponse = { ... }
```

##### `comprehendMedicalAsyncJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobResponse.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)

---

### ComprehendMedicalDescribePhiDetectionJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribePhiDetectionJobRequest: comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalDescribePhiDetectionJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribePhiDetectionJobResponse: comprehendmedical.ComprehendMedicalDescribePhiDetectionJobResponse = { ... }
```

##### `comprehendMedicalAsyncJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobResponse.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)

---

### ComprehendMedicalDescribeRxNormInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeRxNormInferenceJobRequest: comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalDescribeRxNormInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDescribeRxNormInferenceJobResponse: comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobResponse = { ... }
```

##### `comprehendMedicalAsyncJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobResponse.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)

---

### ComprehendMedicalDetectEntitiesRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectEntitiesRequest: comprehendmedical.ComprehendMedicalDetectEntitiesRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendMedicalDetectEntitiesResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectEntitiesResponse: comprehendmedical.ComprehendMedicalDetectEntitiesResponse = { ... }
```

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesResponse.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesResponse.property.paginationToken"></a>

- *Type:* `string`

---

##### `unmappedAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesResponse.property.unmappedAttributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute)[]

---

### ComprehendMedicalDetectEntitiesV2Request <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectEntitiesV2Request: comprehendmedical.ComprehendMedicalDetectEntitiesV2Request = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request.property.text"></a>

- *Type:* `string`

---

### ComprehendMedicalDetectEntitiesV2Response <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Response"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectEntitiesV2Response: comprehendmedical.ComprehendMedicalDetectEntitiesV2Response = { ... }
```

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Response.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Response.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Response.property.paginationToken"></a>

- *Type:* `string`

---

##### `unmappedAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Response.property.unmappedAttributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute)[]

---

### ComprehendMedicalDetectPhiRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectPhiRequest: comprehendmedical.ComprehendMedicalDetectPhiRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendMedicalDetectPhiResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalDetectPhiResponse: comprehendmedical.ComprehendMedicalDetectPhiResponse = { ... }
```

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiResponse.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiResponse.property.paginationToken"></a>

- *Type:* `string`

---

### ComprehendMedicalEntity <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalEntity: comprehendmedical.ComprehendMedicalEntity = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute)[]

---

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.beginOffset"></a>

- *Type:* `number`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.category"></a>

- *Type:* `string`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.endOffset"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.id"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalIcd10CmAttribute <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalIcd10CmAttribute: comprehendmedical.ComprehendMedicalIcd10CmAttribute = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.endOffset"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.id"></a>

- *Type:* `number`

---

##### `relationshipScore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.relationshipScore"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalIcd10CmConcept <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalIcd10CmConcept: comprehendmedical.ComprehendMedicalIcd10CmConcept = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept.property.code"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept.property.description"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept.property.score"></a>

- *Type:* `number`

---

### ComprehendMedicalIcd10CmEntity <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalIcd10CmEntity: comprehendmedical.ComprehendMedicalIcd10CmEntity = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmAttribute)[]

---

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.beginOffset"></a>

- *Type:* `number`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.category"></a>

- *Type:* `string`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.endOffset"></a>

- *Type:* `number`

---

##### `icd10CmConcepts`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.icd10CmConcepts"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmConcept)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.id"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalIcd10CmTrait <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalIcd10CmTrait: comprehendmedical.ComprehendMedicalIcd10CmTrait = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait.property.name"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmTrait.property.score"></a>

- *Type:* `number`

---

### ComprehendMedicalInferIcd10CmRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalInferIcd10CmRequest: comprehendmedical.ComprehendMedicalInferIcd10CmRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendMedicalInferIcd10CmResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalInferIcd10CmResponse: comprehendmedical.ComprehendMedicalInferIcd10CmResponse = { ... }
```

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity)[]

---

##### `modelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmResponse.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmResponse.property.paginationToken"></a>

- *Type:* `string`

---

### ComprehendMedicalInferRxNormRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalInferRxNormRequest: comprehendmedical.ComprehendMedicalInferRxNormRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendMedicalInferRxNormResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalInferRxNormResponse: comprehendmedical.ComprehendMedicalInferRxNormResponse = { ... }
```

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity)[]

---

##### `modelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormResponse.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormResponse.property.paginationToken"></a>

- *Type:* `string`

---

### ComprehendMedicalInputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalInputDataConfig: comprehendmedical.ComprehendMedicalInputDataConfig = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig.property.s3Key"></a>

- *Type:* `string`

---

### ComprehendMedicalListEntitiesDetectionV2JobsRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListEntitiesDetectionV2JobsRequest: comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListEntitiesDetectionV2JobsResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListEntitiesDetectionV2JobsResponse: comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsResponse = { ... }
```

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsResponse.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListIcd10CmInferenceJobsRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListIcd10CmInferenceJobsRequest: comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListIcd10CmInferenceJobsResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListIcd10CmInferenceJobsResponse: comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsResponse = { ... }
```

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsResponse.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListPhiDetectionJobsRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListPhiDetectionJobsRequest: comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListPhiDetectionJobsResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListPhiDetectionJobsResponse: comprehendmedical.ComprehendMedicalListPhiDetectionJobsResponse = { ... }
```

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsResponse.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListRxNormInferenceJobsRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListRxNormInferenceJobsRequest: comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalListRxNormInferenceJobsResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalListRxNormInferenceJobsResponse: comprehendmedical.ComprehendMedicalListRxNormInferenceJobsResponse = { ... }
```

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsResponse.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendMedicalOutputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalOutputDataConfig: comprehendmedical.ComprehendMedicalOutputDataConfig = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig.property.s3Key"></a>

- *Type:* `string`

---

### ComprehendMedicalRxNormAttribute <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalRxNormAttribute: comprehendmedical.ComprehendMedicalRxNormAttribute = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.endOffset"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.id"></a>

- *Type:* `number`

---

##### `relationshipScore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.relationshipScore"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalRxNormConcept <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalRxNormConcept: comprehendmedical.ComprehendMedicalRxNormConcept = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept.property.code"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept.property.description"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept.property.score"></a>

- *Type:* `number`

---

### ComprehendMedicalRxNormEntity <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalRxNormEntity: comprehendmedical.ComprehendMedicalRxNormEntity = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormAttribute)[]

---

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.beginOffset"></a>

- *Type:* `number`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.category"></a>

- *Type:* `string`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.endOffset"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.id"></a>

- *Type:* `number`

---

##### `rxNormConcepts`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.rxNormConcepts"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormConcept)[]

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.text"></a>

- *Type:* `string`

---

##### `traits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.traits"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity.property.type"></a>

- *Type:* `string`

---

### ComprehendMedicalRxNormTrait <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalRxNormTrait: comprehendmedical.ComprehendMedicalRxNormTrait = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait.property.name"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormTrait.property.score"></a>

- *Type:* `number`

---

### ComprehendMedicalStartEntitiesDetectionV2JobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartEntitiesDetectionV2JobRequest: comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest.property.kmsKey"></a>

- *Type:* `string`

---

### ComprehendMedicalStartEntitiesDetectionV2JobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartEntitiesDetectionV2JobResponse: comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStartIcd10CmInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartIcd10CmInferenceJobRequest: comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest.property.kmsKey"></a>

- *Type:* `string`

---

### ComprehendMedicalStartIcd10CmInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartIcd10CmInferenceJobResponse: comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStartPhiDetectionJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartPhiDetectionJobRequest: comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest.property.kmsKey"></a>

- *Type:* `string`

---

### ComprehendMedicalStartPhiDetectionJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartPhiDetectionJobResponse: comprehendmedical.ComprehendMedicalStartPhiDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStartRxNormInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartRxNormInferenceJobRequest: comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest.property.kmsKey"></a>

- *Type:* `string`

---

### ComprehendMedicalStartRxNormInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStartRxNormInferenceJobResponse: comprehendmedical.ComprehendMedicalStartRxNormInferenceJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopEntitiesDetectionV2JobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopEntitiesDetectionV2JobRequest: comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopEntitiesDetectionV2JobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopEntitiesDetectionV2JobResponse: comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopIcd10CmInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopIcd10CmInferenceJobRequest: comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopIcd10CmInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopIcd10CmInferenceJobResponse: comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopPhiDetectionJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopPhiDetectionJobRequest: comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopPhiDetectionJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopPhiDetectionJobResponse: comprehendmedical.ComprehendMedicalStopPhiDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopRxNormInferenceJobRequest <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopRxNormInferenceJobRequest: comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalStopRxNormInferenceJobResponse <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalStopRxNormInferenceJobResponse: comprehendmedical.ComprehendMedicalStopRxNormInferenceJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobResponse.property.jobId"></a>

- *Type:* `string`

---

### ComprehendMedicalTrait <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalTrait: comprehendmedical.ComprehendMedicalTrait = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait.property.name"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalTrait.property.score"></a>

- *Type:* `number`

---

### ComprehendMedicalUnmappedAttribute <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

const comprehendMedicalUnmappedAttribute: comprehendmedical.ComprehendMedicalUnmappedAttribute = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute.property.attribute"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalAttribute)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute.property.type"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2Job.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties)

---


### ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.expirationTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.kmsKey"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `manifestFilePath`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.manifestFilePath"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.message"></a>

- *Type:* `string`

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.modelVersion"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobProperties.property.submitTime"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeEntitiesDetectionV2JobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeIcd10CmInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJob.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties)

---


### ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.expirationTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.kmsKey"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `manifestFilePath`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.manifestFilePath"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.message"></a>

- *Type:* `string`

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.modelVersion"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobProperties.property.submitTime"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeIcd10CmInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribePhiDetectionJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribePhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJob.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties)

---


### ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribePhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.expirationTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.kmsKey"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `manifestFilePath`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.manifestFilePath"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.message"></a>

- *Type:* `string`

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.modelVersion"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobProperties.property.submitTime"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribePhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribePhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribePhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribePhiDetectionJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeRxNormInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJob.property.comprehendMedicalAsyncJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties)

---


### ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `expirationTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.expirationTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.kmsKey"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `manifestFilePath`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.manifestFilePath"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.message"></a>

- *Type:* `string`

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.modelVersion"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobProperties.property.submitTime"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesInputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendMedicalDescribeRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDescribeRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDescribeRxNormInferenceJobComprehendMedicalAsyncJobPropertiesOutputDataConfig.property.s3Key"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesDetectEntities <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDetectEntities(__scope: Construct, __resources: string[], __input: ComprehendMedicalDetectEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.property.paginationToken"></a>

- *Type:* `string`

---

##### `unmappedAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntities.property.unmappedAttributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute)[]

---


### ComprehendMedicalResponsesDetectEntitiesV2 <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2(__scope: Construct, __resources: string[], __input: ComprehendMedicalDetectEntitiesV2Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectEntitiesV2Request)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.property.paginationToken"></a>

- *Type:* `string`

---

##### `unmappedAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectEntitiesV2.property.unmappedAttributes"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalUnmappedAttribute)[]

---


### ComprehendMedicalResponsesDetectPhi <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesDetectPhi(__scope: Construct, __resources: string[], __input: ComprehendMedicalDetectPhiRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalDetectPhiRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesDetectPhi.property.paginationToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesInferIcd10Cm <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm(__scope: Construct, __resources: string[], __input: ComprehendMedicalInferIcd10CmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferIcd10CmRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalIcd10CmEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferIcd10Cm.property.paginationToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesInferRxNorm <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesInferRxNorm(__scope: Construct, __resources: string[], __input: ComprehendMedicalInferRxNormRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalInferRxNormRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalRxNormEntity)[]

---

##### `modelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.property.modelVersion"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesInferRxNorm.property.paginationToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesListEntitiesDetectionV2Jobs <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs(__scope: Construct, __resources: string[], __input: ComprehendMedicalListEntitiesDetectionV2JobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListEntitiesDetectionV2JobsRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListEntitiesDetectionV2Jobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesListIcd10CmInferenceJobs <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs(__scope: Construct, __resources: string[], __input: ComprehendMedicalListIcd10CmInferenceJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListIcd10CmInferenceJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListIcd10CmInferenceJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesListPhiDetectionJobs <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendMedicalListPhiDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListPhiDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListPhiDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesListRxNormInferenceJobs <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs(__scope: Construct, __resources: string[], __input: ComprehendMedicalListRxNormInferenceJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalListRxNormInferenceJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `comprehendMedicalAsyncJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.property.comprehendMedicalAsyncJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalComprehendMedicalAsyncJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesListRxNormInferenceJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStartEntitiesDetectionV2Job <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job(__scope: Construct, __resources: string[], __input: ComprehendMedicalStartEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartEntitiesDetectionV2Job.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStartIcd10CmInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStartIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartIcd10CmInferenceJob.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStartPhiDetectionJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStartPhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartPhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartPhiDetectionJob.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStartRxNormInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStartRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStartRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStartRxNormInferenceJob.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStopEntitiesDetectionV2Job <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job(__scope: Construct, __resources: string[], __input: ComprehendMedicalStopEntitiesDetectionV2JobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopEntitiesDetectionV2JobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopEntitiesDetectionV2Job.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStopIcd10CmInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStopIcd10CmInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopIcd10CmInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopIcd10CmInferenceJob.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStopPhiDetectionJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStopPhiDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopPhiDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopPhiDetectionJob.property.jobId"></a>

- *Type:* `string`

---


### ComprehendMedicalResponsesStopRxNormInferenceJob <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob.Initializer"></a>

```typescript
import { comprehendmedical } from 'aws-cdk-sdk'

new comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob(__scope: Construct, __resources: string[], __input: ComprehendMedicalStopRxNormInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest`](#aws-cdk-sdk.comprehendmedical.ComprehendMedicalStopRxNormInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehendmedical.ComprehendMedicalResponsesStopRxNormInferenceJob.property.jobId"></a>

- *Type:* `string`

---



