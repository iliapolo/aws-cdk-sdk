# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MachineLearningClient <a name="aws-cdk-sdk.machinelearning.MachineLearningClient"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTags` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.addTags"></a>

```typescript
public addTags(input: MachineLearningAddTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput)

---

##### `createBatchPrediction` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createBatchPrediction"></a>

```typescript
public createBatchPrediction(input: MachineLearningCreateBatchPredictionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput)

---

##### `createDataSourceFromRds` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createDataSourceFromRds"></a>

```typescript
public createDataSourceFromRds(input: MachineLearningCreateDataSourceFromRdsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput)

---

##### `createDataSourceFromRedshift` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createDataSourceFromRedshift"></a>

```typescript
public createDataSourceFromRedshift(input: MachineLearningCreateDataSourceFromRedshiftInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput)

---

##### `createDataSourceFromS3` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createDataSourceFromS3"></a>

```typescript
public createDataSourceFromS3(input: MachineLearningCreateDataSourceFromS3Input)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input)

---

##### `createEvaluation` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createEvaluation"></a>

```typescript
public createEvaluation(input: MachineLearningCreateEvaluationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput)

---

##### `createMlModel` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createMlModel"></a>

```typescript
public createMlModel(input: MachineLearningCreateMlModelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput)

---

##### `createRealtimeEndpoint` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.createRealtimeEndpoint"></a>

```typescript
public createRealtimeEndpoint(input: MachineLearningCreateRealtimeEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput)

---

##### `deleteBatchPrediction` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteBatchPrediction"></a>

```typescript
public deleteBatchPrediction(input: MachineLearningDeleteBatchPredictionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput)

---

##### `deleteDataSource` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteDataSource"></a>

```typescript
public deleteDataSource(input: MachineLearningDeleteDataSourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput)

---

##### `deleteEvaluation` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteEvaluation"></a>

```typescript
public deleteEvaluation(input: MachineLearningDeleteEvaluationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput)

---

##### `deleteMlModel` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteMlModel"></a>

```typescript
public deleteMlModel(input: MachineLearningDeleteMlModelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput)

---

##### `deleteRealtimeEndpoint` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteRealtimeEndpoint"></a>

```typescript
public deleteRealtimeEndpoint(input: MachineLearningDeleteRealtimeEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput)

---

##### `deleteTags` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.deleteTags"></a>

```typescript
public deleteTags(input: MachineLearningDeleteTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput)

---

##### `describeBatchPredictions` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.describeBatchPredictions"></a>

```typescript
public describeBatchPredictions(input: MachineLearningDescribeBatchPredictionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput)

---

##### `describeDataSources` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.describeDataSources"></a>

```typescript
public describeDataSources(input: MachineLearningDescribeDataSourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput)

---

##### `describeEvaluations` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.describeEvaluations"></a>

```typescript
public describeEvaluations(input: MachineLearningDescribeEvaluationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput)

---

##### `describeMlModels` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.describeMlModels"></a>

```typescript
public describeMlModels(input: MachineLearningDescribeMlModelsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput)

---

##### `describeTags` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.describeTags"></a>

```typescript
public describeTags(input: MachineLearningDescribeTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput)

---

##### `fetchBatchPrediction` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.fetchBatchPrediction"></a>

```typescript
public fetchBatchPrediction(input: MachineLearningGetBatchPredictionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput)

---

##### `fetchDataSource` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.fetchDataSource"></a>

```typescript
public fetchDataSource(input: MachineLearningGetDataSourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---

##### `fetchEvaluation` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.fetchEvaluation"></a>

```typescript
public fetchEvaluation(input: MachineLearningGetEvaluationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput)

---

##### `fetchMlModel` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.fetchMlModel"></a>

```typescript
public fetchMlModel(input: MachineLearningGetMlModelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput)

---

##### `predict` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.predict"></a>

```typescript
public predict(input: MachineLearningPredictInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPredictInput`](#aws-cdk-sdk.machinelearning.MachineLearningPredictInput)

---

##### `updateBatchPrediction` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.updateBatchPrediction"></a>

```typescript
public updateBatchPrediction(input: MachineLearningUpdateBatchPredictionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput)

---

##### `updateDataSource` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.updateDataSource"></a>

```typescript
public updateDataSource(input: MachineLearningUpdateDataSourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput)

---

##### `updateEvaluation` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.updateEvaluation"></a>

```typescript
public updateEvaluation(input: MachineLearningUpdateEvaluationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput)

---

##### `updateMlModel` <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.updateMlModel"></a>

```typescript
public updateMlModel(input: MachineLearningUpdateMlModelInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput)

---




## Structs <a name="Structs"></a>

### MachineLearningAddTagsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningAddTagsInput: machinelearning.MachineLearningAddTagsInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningTag`](#aws-cdk-sdk.machinelearning.MachineLearningTag)[]

---

### MachineLearningAddTagsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningAddTagsOutput: machinelearning.MachineLearningAddTagsOutput = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsOutput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningAddTagsOutput.property.resourceType"></a>

- *Type:* `string`

---

### MachineLearningBatchPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningBatchPrediction: machinelearning.MachineLearningBatchPrediction = { ... }
```

##### `batchPredictionDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.batchPredictionDataSourceId"></a>

- *Type:* `string`

---

##### `batchPredictionId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.batchPredictionId"></a>

- *Type:* `string`

---

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `invalidRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.invalidRecordCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.name"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.outputUri"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.status"></a>

- *Type:* `string`

---

##### `totalRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction.property.totalRecordCount"></a>

- *Type:* `number`

---

### MachineLearningCreateBatchPredictionInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateBatchPredictionInput: machinelearning.MachineLearningCreateBatchPredictionInput = { ... }
```

##### `batchPredictionDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput.property.batchPredictionDataSourceId"></a>

- *Type:* `string`

---

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput.property.batchPredictionId"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput.property.outputUri"></a>

- *Type:* `string`

---

##### `batchPredictionName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput.property.batchPredictionName"></a>

- *Type:* `string`

---

### MachineLearningCreateBatchPredictionOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateBatchPredictionOutput: machinelearning.MachineLearningCreateBatchPredictionOutput = { ... }
```

##### `batchPredictionId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionOutput.property.batchPredictionId"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromRdsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromRdsInput: machinelearning.MachineLearningCreateDataSourceFromRdsInput = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput.property.dataSourceId"></a>

- *Type:* `string`

---

##### `rdsData`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput.property.rdsData"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec`](#aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput.property.roleArn"></a>

- *Type:* `string`

---

##### `computeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput.property.dataSourceName"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromRdsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromRdsOutput: machinelearning.MachineLearningCreateDataSourceFromRdsOutput = { ... }
```

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsOutput.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromRedshiftInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromRedshiftInput: machinelearning.MachineLearningCreateDataSourceFromRedshiftInput = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSpec`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput.property.dataSpec"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput.property.roleArn"></a>

- *Type:* `string`

---

##### `computeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput.property.dataSourceName"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromRedshiftOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromRedshiftOutput: machinelearning.MachineLearningCreateDataSourceFromRedshiftOutput = { ... }
```

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftOutput.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromS3Input <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromS3Input: machinelearning.MachineLearningCreateDataSourceFromS3Input = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSpec`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input.property.dataSpec"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec`](#aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec)

---

##### `computeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `dataSourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input.property.dataSourceName"></a>

- *Type:* `string`

---

### MachineLearningCreateDataSourceFromS3Output <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Output"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateDataSourceFromS3Output: machinelearning.MachineLearningCreateDataSourceFromS3Output = { ... }
```

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Output.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningCreateEvaluationInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateEvaluationInput: machinelearning.MachineLearningCreateEvaluationInput = { ... }
```

##### `evaluationDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput.property.evaluationDataSourceId"></a>

- *Type:* `string`

---

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput.property.evaluationId"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `evaluationName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput.property.evaluationName"></a>

- *Type:* `string`

---

### MachineLearningCreateEvaluationOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateEvaluationOutput: machinelearning.MachineLearningCreateEvaluationOutput = { ... }
```

##### `evaluationId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationOutput.property.evaluationId"></a>

- *Type:* `string`

---

### MachineLearningCreateMlModelInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateMlModelInput: machinelearning.MachineLearningCreateMlModelInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `mlModelType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.mlModelType"></a>

- *Type:* `string`

---

##### `trainingDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.trainingDataSourceId"></a>

- *Type:* `string`

---

##### `mlModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.mlModelName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `recipe`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.recipe"></a>

- *Type:* `string`

---

##### `recipeUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput.property.recipeUri"></a>

- *Type:* `string`

---

### MachineLearningCreateMlModelOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateMlModelOutput: machinelearning.MachineLearningCreateMlModelOutput = { ... }
```

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelOutput.property.mlModelId"></a>

- *Type:* `string`

---

### MachineLearningCreateRealtimeEndpointInput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateRealtimeEndpointInput: machinelearning.MachineLearningCreateRealtimeEndpointInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput.property.mlModelId"></a>

- *Type:* `string`

---

### MachineLearningCreateRealtimeEndpointOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningCreateRealtimeEndpointOutput: machinelearning.MachineLearningCreateRealtimeEndpointOutput = { ... }
```

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointOutput.property.mlModelId"></a>

- *Type:* `string`

---

##### `realtimeEndpointInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointOutput.property.realtimeEndpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo)

---

### MachineLearningDataSource <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDataSource: machinelearning.MachineLearningDataSource = { ... }
```

##### `computeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `dataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.dataLocationS3"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.dataSizeInBytes"></a>

- *Type:* `number`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.finishedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.name"></a>

- *Type:* `string`

---

##### `numberOfFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.numberOfFiles"></a>

- *Type:* `number`

---

##### `rdsMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.rdsMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata)

---

##### `redshiftMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.redshiftMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.roleArn"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDataSource.property.status"></a>

- *Type:* `string`

---

### MachineLearningDeleteBatchPredictionInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteBatchPredictionInput: machinelearning.MachineLearningDeleteBatchPredictionInput = { ... }
```

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput.property.batchPredictionId"></a>

- *Type:* `string`

---

### MachineLearningDeleteBatchPredictionOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteBatchPredictionOutput: machinelearning.MachineLearningDeleteBatchPredictionOutput = { ... }
```

##### `batchPredictionId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionOutput.property.batchPredictionId"></a>

- *Type:* `string`

---

### MachineLearningDeleteDataSourceInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteDataSourceInput: machinelearning.MachineLearningDeleteDataSourceInput = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningDeleteDataSourceOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteDataSourceOutput: machinelearning.MachineLearningDeleteDataSourceOutput = { ... }
```

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceOutput.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningDeleteEvaluationInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteEvaluationInput: machinelearning.MachineLearningDeleteEvaluationInput = { ... }
```

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput.property.evaluationId"></a>

- *Type:* `string`

---

### MachineLearningDeleteEvaluationOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteEvaluationOutput: machinelearning.MachineLearningDeleteEvaluationOutput = { ... }
```

##### `evaluationId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationOutput.property.evaluationId"></a>

- *Type:* `string`

---

### MachineLearningDeleteMlModelInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteMlModelInput: machinelearning.MachineLearningDeleteMlModelInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput.property.mlModelId"></a>

- *Type:* `string`

---

### MachineLearningDeleteMlModelOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteMlModelOutput: machinelearning.MachineLearningDeleteMlModelOutput = { ... }
```

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelOutput.property.mlModelId"></a>

- *Type:* `string`

---

### MachineLearningDeleteRealtimeEndpointInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteRealtimeEndpointInput: machinelearning.MachineLearningDeleteRealtimeEndpointInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput.property.mlModelId"></a>

- *Type:* `string`

---

### MachineLearningDeleteRealtimeEndpointOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteRealtimeEndpointOutput: machinelearning.MachineLearningDeleteRealtimeEndpointOutput = { ... }
```

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointOutput.property.mlModelId"></a>

- *Type:* `string`

---

##### `realtimeEndpointInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointOutput.property.realtimeEndpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo)

---

### MachineLearningDeleteTagsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteTagsInput: machinelearning.MachineLearningDeleteTagsInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput.property.resourceType"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### MachineLearningDeleteTagsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDeleteTagsOutput: machinelearning.MachineLearningDeleteTagsOutput = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsOutput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsOutput.property.resourceType"></a>

- *Type:* `string`

---

### MachineLearningDescribeBatchPredictionsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeBatchPredictionsInput: machinelearning.MachineLearningDescribeBatchPredictionsInput = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.eq"></a>

- *Type:* `string`

---

##### `filterVariable`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.filterVariable"></a>

- *Type:* `string`

---

##### `ge`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.ge"></a>

- *Type:* `string`

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.gt"></a>

- *Type:* `string`

---

##### `le`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.le"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.limit"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.lt"></a>

- *Type:* `string`

---

##### `ne`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.ne"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.prefix"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput.property.sortOrder"></a>

- *Type:* `string`

---

### MachineLearningDescribeBatchPredictionsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeBatchPredictionsOutput: machinelearning.MachineLearningDescribeBatchPredictionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsOutput.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction`](#aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction)[]

---

### MachineLearningDescribeDataSourcesInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeDataSourcesInput: machinelearning.MachineLearningDescribeDataSourcesInput = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.eq"></a>

- *Type:* `string`

---

##### `filterVariable`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.filterVariable"></a>

- *Type:* `string`

---

##### `ge`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.ge"></a>

- *Type:* `string`

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.gt"></a>

- *Type:* `string`

---

##### `le`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.le"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.limit"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.lt"></a>

- *Type:* `string`

---

##### `ne`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.ne"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.prefix"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput.property.sortOrder"></a>

- *Type:* `string`

---

### MachineLearningDescribeDataSourcesOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeDataSourcesOutput: machinelearning.MachineLearningDescribeDataSourcesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesOutput.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDataSource`](#aws-cdk-sdk.machinelearning.MachineLearningDataSource)[]

---

### MachineLearningDescribeEvaluationsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeEvaluationsInput: machinelearning.MachineLearningDescribeEvaluationsInput = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.eq"></a>

- *Type:* `string`

---

##### `filterVariable`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.filterVariable"></a>

- *Type:* `string`

---

##### `ge`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.ge"></a>

- *Type:* `string`

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.gt"></a>

- *Type:* `string`

---

##### `le`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.le"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.limit"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.lt"></a>

- *Type:* `string`

---

##### `ne`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.ne"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.prefix"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput.property.sortOrder"></a>

- *Type:* `string`

---

### MachineLearningDescribeEvaluationsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeEvaluationsOutput: machinelearning.MachineLearningDescribeEvaluationsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsOutput.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningEvaluation`](#aws-cdk-sdk.machinelearning.MachineLearningEvaluation)[]

---

### MachineLearningDescribeMlModelsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeMlModelsInput: machinelearning.MachineLearningDescribeMlModelsInput = { ... }
```

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.eq"></a>

- *Type:* `string`

---

##### `filterVariable`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.filterVariable"></a>

- *Type:* `string`

---

##### `ge`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.ge"></a>

- *Type:* `string`

---

##### `gt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.gt"></a>

- *Type:* `string`

---

##### `le`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.le"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.limit"></a>

- *Type:* `number`

---

##### `lt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.lt"></a>

- *Type:* `string`

---

##### `ne`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.ne"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.prefix"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput.property.sortOrder"></a>

- *Type:* `string`

---

### MachineLearningDescribeMlModelsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeMlModelsOutput: machinelearning.MachineLearningDescribeMlModelsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsOutput.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningMlModel`](#aws-cdk-sdk.machinelearning.MachineLearningMlModel)[]

---

### MachineLearningDescribeTagsInput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeTagsInput: machinelearning.MachineLearningDescribeTagsInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput.property.resourceType"></a>

- *Type:* `string`

---

### MachineLearningDescribeTagsOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningDescribeTagsOutput: machinelearning.MachineLearningDescribeTagsOutput = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsOutput.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsOutput.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningTag`](#aws-cdk-sdk.machinelearning.MachineLearningTag)[]

---

### MachineLearningEvaluation <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningEvaluation: machinelearning.MachineLearningEvaluation = { ... }
```

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `evaluationDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.evaluationDataSourceId"></a>

- *Type:* `string`

---

##### `evaluationId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.evaluationId"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.name"></a>

- *Type:* `string`

---

##### `performanceMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.performanceMetrics"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics`](#aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics)

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningEvaluation.property.status"></a>

- *Type:* `string`

---

### MachineLearningGetBatchPredictionInput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetBatchPredictionInput: machinelearning.MachineLearningGetBatchPredictionInput = { ... }
```

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput.property.batchPredictionId"></a>

- *Type:* `string`

---

### MachineLearningGetBatchPredictionOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetBatchPredictionOutput: machinelearning.MachineLearningGetBatchPredictionOutput = { ... }
```

##### `batchPredictionDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.batchPredictionDataSourceId"></a>

- *Type:* `string`

---

##### `batchPredictionId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.batchPredictionId"></a>

- *Type:* `string`

---

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `invalidRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.invalidRecordCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.name"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.outputUri"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.status"></a>

- *Type:* `string`

---

##### `totalRecordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionOutput.property.totalRecordCount"></a>

- *Type:* `number`

---

### MachineLearningGetDataSourceInput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetDataSourceInput: machinelearning.MachineLearningGetDataSourceInput = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput.property.dataSourceId"></a>

- *Type:* `string`

---

##### `verbose`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput.property.verbose"></a>

- *Type:* `boolean`

---

### MachineLearningGetDataSourceOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetDataSourceOutput: machinelearning.MachineLearningGetDataSourceOutput = { ... }
```

##### `computeStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `dataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.dataLocationS3"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.dataSizeInBytes"></a>

- *Type:* `number`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSourceSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.dataSourceSchema"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.finishedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.name"></a>

- *Type:* `string`

---

##### `numberOfFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.numberOfFiles"></a>

- *Type:* `number`

---

##### `rdsMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.rdsMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata)

---

##### `redshiftMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.redshiftMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.roleArn"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceOutput.property.status"></a>

- *Type:* `string`

---

### MachineLearningGetEvaluationInput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetEvaluationInput: machinelearning.MachineLearningGetEvaluationInput = { ... }
```

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput.property.evaluationId"></a>

- *Type:* `string`

---

### MachineLearningGetEvaluationOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetEvaluationOutput: machinelearning.MachineLearningGetEvaluationOutput = { ... }
```

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `evaluationDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.evaluationDataSourceId"></a>

- *Type:* `string`

---

##### `evaluationId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.evaluationId"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.name"></a>

- *Type:* `string`

---

##### `performanceMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.performanceMetrics"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics`](#aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics)

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationOutput.property.status"></a>

- *Type:* `string`

---

### MachineLearningGetMlModelInput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetMlModelInput: machinelearning.MachineLearningGetMlModelInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `verbose`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput.property.verbose"></a>

- *Type:* `boolean`

---

### MachineLearningGetMlModelOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningGetMlModelOutput: machinelearning.MachineLearningGetMlModelOutput = { ... }
```

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `endpointInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.endpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo)

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.mlModelId"></a>

- *Type:* `string`

---

##### `mlModelType`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.mlModelType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.name"></a>

- *Type:* `string`

---

##### `recipe`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.recipe"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.schema"></a>

- *Type:* `string`

---

##### `scoreThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.scoreThreshold"></a>

- *Type:* `number`

---

##### `scoreThresholdLastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.scoreThresholdLastUpdatedAt"></a>

- *Type:* `string`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.trainingDataSourceId"></a>

- *Type:* `string`

---

##### `trainingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningGetMlModelOutput.property.trainingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### MachineLearningMlModel <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningMlModel: machinelearning.MachineLearningMlModel = { ... }
```

##### `algorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.algorithm"></a>

- *Type:* `string`

---

##### `computeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `endpointInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.endpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo)

---

##### `finishedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.mlModelId"></a>

- *Type:* `string`

---

##### `mlModelType`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.mlModelType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.name"></a>

- *Type:* `string`

---

##### `scoreThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.scoreThreshold"></a>

- *Type:* `number`

---

##### `scoreThresholdLastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.scoreThresholdLastUpdatedAt"></a>

- *Type:* `string`

---

##### `sizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.trainingDataSourceId"></a>

- *Type:* `string`

---

##### `trainingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningMlModel.property.trainingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### MachineLearningPerformanceMetrics <a name="aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningPerformanceMetrics: machinelearning.MachineLearningPerformanceMetrics = { ... }
```

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPerformanceMetrics.property.properties"></a>

- *Type:* {[ key: string ]: `string`}

---

### MachineLearningPredictInput <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningPredictInput: machinelearning.MachineLearningPredictInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `predictEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictInput.property.predictEndpoint"></a>

- *Type:* `string`

---

##### `record`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictInput.property.record"></a>

- *Type:* {[ key: string ]: `string`}

---

### MachineLearningPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningPrediction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningPrediction: machinelearning.MachineLearningPrediction = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPrediction.property.details"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `predictedLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPrediction.property.predictedLabel"></a>

- *Type:* `string`

---

##### `predictedScores`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPrediction.property.predictedScores"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `predictedValue`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPrediction.property.predictedValue"></a>

- *Type:* `number`

---

### MachineLearningPredictOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningPredictOutput: machinelearning.MachineLearningPredictOutput = { ... }
```

##### `prediction`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningPredictOutput.property.prediction"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPrediction`](#aws-cdk-sdk.machinelearning.MachineLearningPrediction)

---

### MachineLearningRdsDatabase <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRdsDatabase: machinelearning.MachineLearningRdsDatabase = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `instanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase.property.instanceIdentifier"></a>

- *Type:* `string`

---

### MachineLearningRdsDatabaseCredentials <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabaseCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRdsDatabaseCredentials: machinelearning.MachineLearningRdsDatabaseCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabaseCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDatabaseCredentials.property.username"></a>

- *Type:* `string`

---

### MachineLearningRdsDataSpec <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRdsDataSpec: machinelearning.MachineLearningRdsDataSpec = { ... }
```

##### `databaseCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.databaseCredentials"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsDatabaseCredentials`](#aws-cdk-sdk.machinelearning.MachineLearningRdsDatabaseCredentials)

---

##### `databaseInformation`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.databaseInformation"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase)

---

##### `resourceRole`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.resourceRole"></a>

- *Type:* `string`

---

##### `s3StagingLocation`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.s3StagingLocation"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `selectSqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.selectSqlQuery"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.serviceRole"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.subnetId"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.dataSchema"></a>

- *Type:* `string`

---

##### `dataSchemaUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsDataSpec.property.dataSchemaUri"></a>

- *Type:* `string`

---

### MachineLearningRdsMetadata <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRdsMetadata: machinelearning.MachineLearningRdsMetadata = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.database"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningRdsDatabase)

---

##### `databaseUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.databaseUserName"></a>

- *Type:* `string`

---

##### `dataPipelineId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.dataPipelineId"></a>

- *Type:* `string`

---

##### `resourceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.resourceRole"></a>

- *Type:* `string`

---

##### `selectSqlQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.selectSqlQuery"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRdsMetadata.property.serviceRole"></a>

- *Type:* `string`

---

### MachineLearningRealtimeEndpointInfo <a name="aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRealtimeEndpointInfo: machinelearning.MachineLearningRealtimeEndpointInfo = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `endpointStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo.property.endpointStatus"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo.property.endpointUrl"></a>

- *Type:* `string`

---

##### `peakRequestsPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRealtimeEndpointInfo.property.peakRequestsPerSecond"></a>

- *Type:* `number`

---

### MachineLearningRedshiftDatabase <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRedshiftDatabase: machinelearning.MachineLearningRedshiftDatabase = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase.property.databaseName"></a>

- *Type:* `string`

---

### MachineLearningRedshiftDatabaseCredentials <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabaseCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRedshiftDatabaseCredentials: machinelearning.MachineLearningRedshiftDatabaseCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabaseCredentials.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabaseCredentials.property.username"></a>

- *Type:* `string`

---

### MachineLearningRedshiftDataSpec <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRedshiftDataSpec: machinelearning.MachineLearningRedshiftDataSpec = { ... }
```

##### `databaseCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.databaseCredentials"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabaseCredentials`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabaseCredentials)

---

##### `databaseInformation`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.databaseInformation"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase)

---

##### `s3StagingLocation`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.s3StagingLocation"></a>

- *Type:* `string`

---

##### `selectSqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.selectSqlQuery"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.dataSchema"></a>

- *Type:* `string`

---

##### `dataSchemaUri`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftDataSpec.property.dataSchemaUri"></a>

- *Type:* `string`

---

### MachineLearningRedshiftMetadata <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningRedshiftMetadata: machinelearning.MachineLearningRedshiftMetadata = { ... }
```

##### `databaseUserName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata.property.databaseUserName"></a>

- *Type:* `string`

---

##### `redshiftDatabase`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata.property.redshiftDatabase"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningRedshiftDatabase)

---

##### `selectSqlQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningRedshiftMetadata.property.selectSqlQuery"></a>

- *Type:* `string`

---

### MachineLearningS3DataSpec <a name="aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningS3DataSpec: machinelearning.MachineLearningS3DataSpec = { ... }
```

##### `dataLocationS3`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec.property.dataLocationS3"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec.property.dataSchema"></a>

- *Type:* `string`

---

##### `dataSchemaLocationS3`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningS3DataSpec.property.dataSchemaLocationS3"></a>

- *Type:* `string`

---

### MachineLearningTag <a name="aws-cdk-sdk.machinelearning.MachineLearningTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningTag: machinelearning.MachineLearningTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningTag.property.value"></a>

- *Type:* `string`

---

### MachineLearningUpdateBatchPredictionInput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateBatchPredictionInput: machinelearning.MachineLearningUpdateBatchPredictionInput = { ... }
```

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput.property.batchPredictionId"></a>

- *Type:* `string`

---

##### `batchPredictionName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput.property.batchPredictionName"></a>

- *Type:* `string`

---

### MachineLearningUpdateBatchPredictionOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateBatchPredictionOutput: machinelearning.MachineLearningUpdateBatchPredictionOutput = { ... }
```

##### `batchPredictionId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionOutput.property.batchPredictionId"></a>

- *Type:* `string`

---

### MachineLearningUpdateDataSourceInput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateDataSourceInput: machinelearning.MachineLearningUpdateDataSourceInput = { ... }
```

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSourceName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput.property.dataSourceName"></a>

- *Type:* `string`

---

### MachineLearningUpdateDataSourceOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateDataSourceOutput: machinelearning.MachineLearningUpdateDataSourceOutput = { ... }
```

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceOutput.property.dataSourceId"></a>

- *Type:* `string`

---

### MachineLearningUpdateEvaluationInput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateEvaluationInput: machinelearning.MachineLearningUpdateEvaluationInput = { ... }
```

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput.property.evaluationId"></a>

- *Type:* `string`

---

##### `evaluationName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput.property.evaluationName"></a>

- *Type:* `string`

---

### MachineLearningUpdateEvaluationOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateEvaluationOutput: machinelearning.MachineLearningUpdateEvaluationOutput = { ... }
```

##### `evaluationId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationOutput.property.evaluationId"></a>

- *Type:* `string`

---

### MachineLearningUpdateMlModelInput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateMlModelInput: machinelearning.MachineLearningUpdateMlModelInput = { ... }
```

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput.property.mlModelId"></a>

- *Type:* `string`

---

##### `mlModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput.property.mlModelName"></a>

- *Type:* `string`

---

##### `scoreThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput.property.scoreThreshold"></a>

- *Type:* `number`

---

### MachineLearningUpdateMlModelOutput <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

const machineLearningUpdateMlModelOutput: machinelearning.MachineLearningUpdateMlModelOutput = { ... }
```

##### `mlModelId`<sup>Optional</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelOutput.property.mlModelId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MachineLearningResponsesAddTags <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesAddTags(__scope: Construct, __resources: string[], __input: MachineLearningAddTagsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningAddTagsInput)

---



#### Properties <a name="Properties"></a>

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesAddTags.property.resourceType"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateBatchPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateBatchPrediction(__scope: Construct, __resources: string[], __input: MachineLearningCreateBatchPredictionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateBatchPredictionInput)

---



#### Properties <a name="Properties"></a>

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateBatchPrediction.property.batchPredictionId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateDataSourceFromRds <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateDataSourceFromRds(__scope: Construct, __resources: string[], __input: MachineLearningCreateDataSourceFromRdsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRdsInput)

---



#### Properties <a name="Properties"></a>

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRds.property.dataSourceId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateDataSourceFromRedshift <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift(__scope: Construct, __resources: string[], __input: MachineLearningCreateDataSourceFromRedshiftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromRedshiftInput)

---



#### Properties <a name="Properties"></a>

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromRedshift.property.dataSourceId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateDataSourceFromS3 <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateDataSourceFromS3(__scope: Construct, __resources: string[], __input: MachineLearningCreateDataSourceFromS3Input)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input`](#aws-cdk-sdk.machinelearning.MachineLearningCreateDataSourceFromS3Input)

---



#### Properties <a name="Properties"></a>

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateDataSourceFromS3.property.dataSourceId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateEvaluation <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateEvaluation(__scope: Construct, __resources: string[], __input: MachineLearningCreateEvaluationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateEvaluationInput)

---



#### Properties <a name="Properties"></a>

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateEvaluation.property.evaluationId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateMlModel <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateMlModel(__scope: Construct, __resources: string[], __input: MachineLearningCreateMlModelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateMlModelInput)

---



#### Properties <a name="Properties"></a>

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateMlModel.property.mlModelId"></a>

- *Type:* `string`

---


### MachineLearningResponsesCreateRealtimeEndpoint <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateRealtimeEndpoint(__scope: Construct, __resources: string[], __input: MachineLearningCreateRealtimeEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.property.mlModelId"></a>

- *Type:* `string`

---

##### `realtimeEndpointInfo`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpoint.property.realtimeEndpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo)

---


### MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo(__scope: Construct, __resources: string[], __input: MachineLearningCreateRealtimeEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningCreateRealtimeEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `endpointStatus`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.property.endpointStatus"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.property.endpointUrl"></a>

- *Type:* `string`

---

##### `peakRequestsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo.property.peakRequestsPerSecond"></a>

- *Type:* `number`

---


### MachineLearningResponsesDeleteBatchPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteBatchPrediction(__scope: Construct, __resources: string[], __input: MachineLearningDeleteBatchPredictionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteBatchPredictionInput)

---



#### Properties <a name="Properties"></a>

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteBatchPrediction.property.batchPredictionId"></a>

- *Type:* `string`

---


### MachineLearningResponsesDeleteDataSource <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteDataSource(__scope: Construct, __resources: string[], __input: MachineLearningDeleteDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteDataSource.property.dataSourceId"></a>

- *Type:* `string`

---


### MachineLearningResponsesDeleteEvaluation <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteEvaluation(__scope: Construct, __resources: string[], __input: MachineLearningDeleteEvaluationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteEvaluationInput)

---



#### Properties <a name="Properties"></a>

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteEvaluation.property.evaluationId"></a>

- *Type:* `string`

---


### MachineLearningResponsesDeleteMlModel <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteMlModel(__scope: Construct, __resources: string[], __input: MachineLearningDeleteMlModelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteMlModelInput)

---



#### Properties <a name="Properties"></a>

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteMlModel.property.mlModelId"></a>

- *Type:* `string`

---


### MachineLearningResponsesDeleteRealtimeEndpoint <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint(__scope: Construct, __resources: string[], __input: MachineLearningDeleteRealtimeEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.property.mlModelId"></a>

- *Type:* `string`

---

##### `realtimeEndpointInfo`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpoint.property.realtimeEndpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo)

---


### MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo(__scope: Construct, __resources: string[], __input: MachineLearningDeleteRealtimeEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteRealtimeEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `endpointStatus`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.property.endpointStatus"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.property.endpointUrl"></a>

- *Type:* `string`

---

##### `peakRequestsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo.property.peakRequestsPerSecond"></a>

- *Type:* `number`

---


### MachineLearningResponsesDeleteTags <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDeleteTags(__scope: Construct, __resources: string[], __input: MachineLearningDeleteTagsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDeleteTagsInput)

---



#### Properties <a name="Properties"></a>

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDeleteTags.property.resourceType"></a>

- *Type:* `string`

---


### MachineLearningResponsesDescribeBatchPredictions <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDescribeBatchPredictions(__scope: Construct, __resources: string[], __input: MachineLearningDescribeBatchPredictionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeBatchPredictionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeBatchPredictions.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction`](#aws-cdk-sdk.machinelearning.MachineLearningBatchPrediction)[]

---


### MachineLearningResponsesDescribeDataSources <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDescribeDataSources(__scope: Construct, __resources: string[], __input: MachineLearningDescribeDataSourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeDataSourcesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeDataSources.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDataSource`](#aws-cdk-sdk.machinelearning.MachineLearningDataSource)[]

---


### MachineLearningResponsesDescribeEvaluations <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDescribeEvaluations(__scope: Construct, __resources: string[], __input: MachineLearningDescribeEvaluationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeEvaluationsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeEvaluations.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningEvaluation`](#aws-cdk-sdk.machinelearning.MachineLearningEvaluation)[]

---


### MachineLearningResponsesDescribeMlModels <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDescribeMlModels(__scope: Construct, __resources: string[], __input: MachineLearningDescribeMlModelsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeMlModelsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeMlModels.property.results"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningMlModel`](#aws-cdk-sdk.machinelearning.MachineLearningMlModel)[]

---


### MachineLearningResponsesDescribeTags <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesDescribeTags(__scope: Construct, __resources: string[], __input: MachineLearningDescribeTagsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput`](#aws-cdk-sdk.machinelearning.MachineLearningDescribeTagsInput)

---



#### Properties <a name="Properties"></a>

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesDescribeTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningTag`](#aws-cdk-sdk.machinelearning.MachineLearningTag)[]

---


### MachineLearningResponsesFetchBatchPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchBatchPrediction(__scope: Construct, __resources: string[], __input: MachineLearningGetBatchPredictionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetBatchPredictionInput)

---



#### Properties <a name="Properties"></a>

##### `batchPredictionDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.batchPredictionDataSourceId"></a>

- *Type:* `string`

---

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.batchPredictionId"></a>

- *Type:* `string`

---

##### `computeTime`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `invalidRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.invalidRecordCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.name"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.outputUri"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.status"></a>

- *Type:* `string`

---

##### `totalRecordCount`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchBatchPrediction.property.totalRecordCount"></a>

- *Type:* `number`

---


### MachineLearningResponsesFetchDataSource <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchDataSource(__scope: Construct, __resources: string[], __input: MachineLearningGetDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `computeStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.computeStatistics"></a>

- *Type:* `boolean`

---

##### `computeTime`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `dataLocationS3`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.dataLocationS3"></a>

- *Type:* `string`

---

##### `dataRearrangement`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.dataRearrangement"></a>

- *Type:* `string`

---

##### `dataSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.dataSizeInBytes"></a>

- *Type:* `number`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSourceSchema`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.dataSourceSchema"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.finishedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.name"></a>

- *Type:* `string`

---

##### `numberOfFiles`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.numberOfFiles"></a>

- *Type:* `number`

---

##### `rdsMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.rdsMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata)

---

##### `redshiftMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.redshiftMetadata"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.roleArn"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSource.property.status"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchDataSourceRdsMetadata <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata(__scope: Construct, __resources: string[], __input: MachineLearningGetDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.database"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase)

---

##### `databaseUserName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.databaseUserName"></a>

- *Type:* `string`

---

##### `dataPipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.dataPipelineId"></a>

- *Type:* `string`

---

##### `resourceRole`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.resourceRole"></a>

- *Type:* `string`

---

##### `selectSqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.selectSqlQuery"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadata.property.serviceRole"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchDataSourceRdsMetadataDatabase <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase(__scope: Construct, __resources: string[], __input: MachineLearningGetDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.property.databaseName"></a>

- *Type:* `string`

---

##### `instanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRdsMetadataDatabase.property.instanceIdentifier"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchDataSourceRedshiftMetadata <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata(__scope: Construct, __resources: string[], __input: MachineLearningGetDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `databaseUserName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.property.databaseUserName"></a>

- *Type:* `string`

---

##### `redshiftDatabase`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.property.redshiftDatabase"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase)

---

##### `selectSqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadata.property.selectSqlQuery"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase(__scope: Construct, __resources: string[], __input: MachineLearningGetDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase.property.databaseName"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchEvaluation <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchEvaluation(__scope: Construct, __resources: string[], __input: MachineLearningGetEvaluationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput)

---



#### Properties <a name="Properties"></a>

##### `computeTime`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `evaluationDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.evaluationDataSourceId"></a>

- *Type:* `string`

---

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.evaluationId"></a>

- *Type:* `string`

---

##### `finishedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.mlModelId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.name"></a>

- *Type:* `string`

---

##### `performanceMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.performanceMetrics"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics)

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluation.property.status"></a>

- *Type:* `string`

---


### MachineLearningResponsesFetchEvaluationPerformanceMetrics <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics(__scope: Construct, __resources: string[], __input: MachineLearningGetEvaluationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetEvaluationInput)

---



#### Properties <a name="Properties"></a>

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchEvaluationPerformanceMetrics.property.properties"></a>

- *Type:* {[ key: string ]: `string`}

---


### MachineLearningResponsesFetchMlModel <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchMlModel(__scope: Construct, __resources: string[], __input: MachineLearningGetMlModelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput)

---



#### Properties <a name="Properties"></a>

##### `computeTime`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.computeTime"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.createdAt"></a>

- *Type:* `string`

---

##### `createdByIamUser`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.createdByIamUser"></a>

- *Type:* `string`

---

##### `endpointInfo`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.endpointInfo"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo)

---

##### `finishedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.finishedAt"></a>

- *Type:* `string`

---

##### `inputDataLocationS3`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.inputDataLocationS3"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `logUri`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.logUri"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.message"></a>

- *Type:* `string`

---

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.mlModelId"></a>

- *Type:* `string`

---

##### `mlModelType`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.mlModelType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.name"></a>

- *Type:* `string`

---

##### `recipe`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.recipe"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.schema"></a>

- *Type:* `string`

---

##### `scoreThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.scoreThreshold"></a>

- *Type:* `number`

---

##### `scoreThresholdLastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.scoreThresholdLastUpdatedAt"></a>

- *Type:* `string`

---

##### `sizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.sizeInBytes"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.startedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.trainingDataSourceId"></a>

- *Type:* `string`

---

##### `trainingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModel.property.trainingParameters"></a>

- *Type:* {[ key: string ]: `string`}

---


### MachineLearningResponsesFetchMlModelEndpointInfo <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo(__scope: Construct, __resources: string[], __input: MachineLearningGetMlModelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningGetMlModelInput)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `endpointStatus`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.property.endpointStatus"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.property.endpointUrl"></a>

- *Type:* `string`

---

##### `peakRequestsPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesFetchMlModelEndpointInfo.property.peakRequestsPerSecond"></a>

- *Type:* `number`

---


### MachineLearningResponsesPredict <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesPredict(__scope: Construct, __resources: string[], __input: MachineLearningPredictInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPredictInput`](#aws-cdk-sdk.machinelearning.MachineLearningPredictInput)

---



#### Properties <a name="Properties"></a>

##### `prediction`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredict.property.prediction"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction`](#aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction)

---


### MachineLearningResponsesPredictPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesPredictPrediction(__scope: Construct, __resources: string[], __input: MachineLearningPredictInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningPredictInput`](#aws-cdk-sdk.machinelearning.MachineLearningPredictInput)

---



#### Properties <a name="Properties"></a>

##### `details`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.property.details"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `predictedLabel`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.property.predictedLabel"></a>

- *Type:* `string`

---

##### `predictedScores`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.property.predictedScores"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `predictedValue`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesPredictPrediction.property.predictedValue"></a>

- *Type:* `number`

---


### MachineLearningResponsesUpdateBatchPrediction <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesUpdateBatchPrediction(__scope: Construct, __resources: string[], __input: MachineLearningUpdateBatchPredictionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateBatchPredictionInput)

---



#### Properties <a name="Properties"></a>

##### `batchPredictionId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateBatchPrediction.property.batchPredictionId"></a>

- *Type:* `string`

---


### MachineLearningResponsesUpdateDataSource <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesUpdateDataSource(__scope: Construct, __resources: string[], __input: MachineLearningUpdateDataSourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateDataSourceInput)

---



#### Properties <a name="Properties"></a>

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateDataSource.property.dataSourceId"></a>

- *Type:* `string`

---


### MachineLearningResponsesUpdateEvaluation <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesUpdateEvaluation(__scope: Construct, __resources: string[], __input: MachineLearningUpdateEvaluationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateEvaluationInput)

---



#### Properties <a name="Properties"></a>

##### `evaluationId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateEvaluation.property.evaluationId"></a>

- *Type:* `string`

---


### MachineLearningResponsesUpdateMlModel <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel"></a>

#### Initializer <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel.Initializer"></a>

```typescript
import { machinelearning } from 'aws-cdk-sdk'

new machinelearning.MachineLearningResponsesUpdateMlModel(__scope: Construct, __resources: string[], __input: MachineLearningUpdateMlModelInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput`](#aws-cdk-sdk.machinelearning.MachineLearningUpdateMlModelInput)

---



#### Properties <a name="Properties"></a>

##### `mlModelId`<sup>Required</sup> <a name="aws-cdk-sdk.machinelearning.MachineLearningResponsesUpdateMlModel.property.mlModelId"></a>

- *Type:* `string`

---



