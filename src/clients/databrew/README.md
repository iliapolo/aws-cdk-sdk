# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataBrewClient <a name="aws-cdk-sdk.databrew.DataBrewClient"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewClient.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchDeleteRecipeVersion` <a name="aws-cdk-sdk.databrew.DataBrewClient.batchDeleteRecipeVersion"></a>

```typescript
public batchDeleteRecipeVersion(input: DataBrewBatchDeleteRecipeVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest`](#aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest)

---

##### `createDataset` <a name="aws-cdk-sdk.databrew.DataBrewClient.createDataset"></a>

```typescript
public createDataset(input: DataBrewCreateDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest)

---

##### `createProfileJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.createProfileJob"></a>

```typescript
public createProfileJob(input: DataBrewCreateProfileJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest`](#aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest)

---

##### `createProject` <a name="aws-cdk-sdk.databrew.DataBrewClient.createProject"></a>

```typescript
public createProject(input: DataBrewCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateProjectRequest`](#aws-cdk-sdk.databrew.DataBrewCreateProjectRequest)

---

##### `createRecipe` <a name="aws-cdk-sdk.databrew.DataBrewClient.createRecipe"></a>

```typescript
public createRecipe(input: DataBrewCreateRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest)

---

##### `createRecipeJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.createRecipeJob"></a>

```typescript
public createRecipeJob(input: DataBrewCreateRecipeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest`](#aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest)

---

##### `createSchedule` <a name="aws-cdk-sdk.databrew.DataBrewClient.createSchedule"></a>

```typescript
public createSchedule(input: DataBrewCreateScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest)

---

##### `deleteDataset` <a name="aws-cdk-sdk.databrew.DataBrewClient.deleteDataset"></a>

```typescript
public deleteDataset(input: DataBrewDeleteDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest)

---

##### `deleteJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.deleteJob"></a>

```typescript
public deleteJob(input: DataBrewDeleteJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteJobRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteJobRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.databrew.DataBrewClient.deleteProject"></a>

```typescript
public deleteProject(input: DataBrewDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest)

---

##### `deleteRecipeVersion` <a name="aws-cdk-sdk.databrew.DataBrewClient.deleteRecipeVersion"></a>

```typescript
public deleteRecipeVersion(input: DataBrewDeleteRecipeVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest)

---

##### `deleteSchedule` <a name="aws-cdk-sdk.databrew.DataBrewClient.deleteSchedule"></a>

```typescript
public deleteSchedule(input: DataBrewDeleteScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest)

---

##### `describeDataset` <a name="aws-cdk-sdk.databrew.DataBrewClient.describeDataset"></a>

```typescript
public describeDataset(input: DataBrewDescribeDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---

##### `describeJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.describeJob"></a>

```typescript
public describeJob(input: DataBrewDescribeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeJobRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeJobRequest)

---

##### `describeProject` <a name="aws-cdk-sdk.databrew.DataBrewClient.describeProject"></a>

```typescript
public describeProject(input: DataBrewDescribeProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest)

---

##### `describeRecipe` <a name="aws-cdk-sdk.databrew.DataBrewClient.describeRecipe"></a>

```typescript
public describeRecipe(input: DataBrewDescribeRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest)

---

##### `describeSchedule` <a name="aws-cdk-sdk.databrew.DataBrewClient.describeSchedule"></a>

```typescript
public describeSchedule(input: DataBrewDescribeScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest)

---

##### `listDatasets` <a name="aws-cdk-sdk.databrew.DataBrewClient.listDatasets"></a>

```typescript
public listDatasets(input: DataBrewListDatasetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListDatasetsRequest`](#aws-cdk-sdk.databrew.DataBrewListDatasetsRequest)

---

##### `listJobRuns` <a name="aws-cdk-sdk.databrew.DataBrewClient.listJobRuns"></a>

```typescript
public listJobRuns(input: DataBrewListJobRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListJobRunsRequest`](#aws-cdk-sdk.databrew.DataBrewListJobRunsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.databrew.DataBrewClient.listJobs"></a>

```typescript
public listJobs(input: DataBrewListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListJobsRequest`](#aws-cdk-sdk.databrew.DataBrewListJobsRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.databrew.DataBrewClient.listProjects"></a>

```typescript
public listProjects(input: DataBrewListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListProjectsRequest`](#aws-cdk-sdk.databrew.DataBrewListProjectsRequest)

---

##### `listRecipes` <a name="aws-cdk-sdk.databrew.DataBrewClient.listRecipes"></a>

```typescript
public listRecipes(input: DataBrewListRecipesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListRecipesRequest`](#aws-cdk-sdk.databrew.DataBrewListRecipesRequest)

---

##### `listRecipeVersions` <a name="aws-cdk-sdk.databrew.DataBrewClient.listRecipeVersions"></a>

```typescript
public listRecipeVersions(input: DataBrewListRecipeVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest`](#aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest)

---

##### `listSchedules` <a name="aws-cdk-sdk.databrew.DataBrewClient.listSchedules"></a>

```typescript
public listSchedules(input: DataBrewListSchedulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListSchedulesRequest`](#aws-cdk-sdk.databrew.DataBrewListSchedulesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.databrew.DataBrewClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DataBrewListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest`](#aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest)

---

##### `publishRecipe` <a name="aws-cdk-sdk.databrew.DataBrewClient.publishRecipe"></a>

```typescript
public publishRecipe(input: DataBrewPublishRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest)

---

##### `sendProjectSessionAction` <a name="aws-cdk-sdk.databrew.DataBrewClient.sendProjectSessionAction"></a>

```typescript
public sendProjectSessionAction(input: DataBrewSendProjectSessionActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest`](#aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest)

---

##### `startJobRun` <a name="aws-cdk-sdk.databrew.DataBrewClient.startJobRun"></a>

```typescript
public startJobRun(input: DataBrewStartJobRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStartJobRunRequest`](#aws-cdk-sdk.databrew.DataBrewStartJobRunRequest)

---

##### `startProjectSession` <a name="aws-cdk-sdk.databrew.DataBrewClient.startProjectSession"></a>

```typescript
public startProjectSession(input: DataBrewStartProjectSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest`](#aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest)

---

##### `stopJobRun` <a name="aws-cdk-sdk.databrew.DataBrewClient.stopJobRun"></a>

```typescript
public stopJobRun(input: DataBrewStopJobRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStopJobRunRequest`](#aws-cdk-sdk.databrew.DataBrewStopJobRunRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.databrew.DataBrewClient.tagResource"></a>

```typescript
public tagResource(input: DataBrewTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewTagResourceRequest`](#aws-cdk-sdk.databrew.DataBrewTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.databrew.DataBrewClient.untagResource"></a>

```typescript
public untagResource(input: DataBrewUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUntagResourceRequest`](#aws-cdk-sdk.databrew.DataBrewUntagResourceRequest)

---

##### `updateDataset` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateDataset"></a>

```typescript
public updateDataset(input: DataBrewUpdateDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest)

---

##### `updateProfileJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateProfileJob"></a>

```typescript
public updateProfileJob(input: DataBrewUpdateProfileJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateProject"></a>

```typescript
public updateProject(input: DataBrewUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest)

---

##### `updateRecipe` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateRecipe"></a>

```typescript
public updateRecipe(input: DataBrewUpdateRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest)

---

##### `updateRecipeJob` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateRecipeJob"></a>

```typescript
public updateRecipeJob(input: DataBrewUpdateRecipeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest)

---

##### `updateSchedule` <a name="aws-cdk-sdk.databrew.DataBrewClient.updateSchedule"></a>

```typescript
public updateSchedule(input: DataBrewUpdateScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest)

---




## Structs <a name="Structs"></a>

### DataBrewBatchDeleteRecipeVersionRequest <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewBatchDeleteRecipeVersionRequest: databrew.DataBrewBatchDeleteRecipeVersionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest.property.name"></a>

- *Type:* `string`

---

##### `recipeVersions`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest.property.recipeVersions"></a>

- *Type:* `string`[]

---

### DataBrewBatchDeleteRecipeVersionResponse <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewBatchDeleteRecipeVersionResponse: databrew.DataBrewBatchDeleteRecipeVersionResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionResponse.property.name"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail`](#aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail)[]

---

### DataBrewConditionExpression <a name="aws-cdk-sdk.databrew.DataBrewConditionExpression"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewConditionExpression: databrew.DataBrewConditionExpression = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewConditionExpression.property.condition"></a>

- *Type:* `string`

---

##### `targetColumn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewConditionExpression.property.targetColumn"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewConditionExpression.property.value"></a>

- *Type:* `string`

---

### DataBrewCreateDatasetRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateDatasetRequest: databrew.DataBrewCreateDatasetRequest = { ... }
```

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest.property.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewInput`](#aws-cdk-sdk.databrew.DataBrewInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest.property.name"></a>

- *Type:* `string`

---

##### `formatOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest.property.formatOptions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewFormatOptions`](#aws-cdk-sdk.databrew.DataBrewFormatOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewCreateDatasetResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateDatasetResponse: databrew.DataBrewCreateDatasetResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateDatasetResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewCreateProfileJobRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateProfileJobRequest: databrew.DataBrewCreateProfileJobRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewS3Location`](#aws-cdk-sdk.databrew.DataBrewS3Location)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.encryptionMode"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest.property.timeout"></a>

- *Type:* `number`

---

### DataBrewCreateProfileJobResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateProfileJobResponse: databrew.DataBrewCreateProfileJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProfileJobResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewCreateProjectRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateProjectRequest: databrew.DataBrewCreateProjectRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `recipeName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.recipeName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.sample"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSample`](#aws-cdk-sdk.databrew.DataBrewSample)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewCreateProjectResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateProjectResponse: databrew.DataBrewCreateProjectResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateProjectResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewCreateRecipeJobRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateRecipeJobRequest: databrew.DataBrewCreateRecipeJobRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.encryptionMode"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.projectName"></a>

- *Type:* `string`

---

##### `recipeReference`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.recipeReference"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeReference`](#aws-cdk-sdk.databrew.DataBrewRecipeReference)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest.property.timeout"></a>

- *Type:* `number`

---

### DataBrewCreateRecipeJobResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateRecipeJobResponse: databrew.DataBrewCreateRecipeJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeJobResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewCreateRecipeRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateRecipeRequest: databrew.DataBrewCreateRecipeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest.property.name"></a>

- *Type:* `string`

---

##### `steps`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest.property.steps"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewCreateRecipeResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateRecipeResponse: databrew.DataBrewCreateRecipeResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateRecipeResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewCreateScheduleRequest <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateScheduleRequest: databrew.DataBrewCreateScheduleRequest = { ... }
```

##### `cronExpression`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest.property.cronExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest.property.name"></a>

- *Type:* `string`

---

##### `jobNames`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest.property.jobNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewCreateScheduleResponse <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewCreateScheduleResponse: databrew.DataBrewCreateScheduleResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewCreateScheduleResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewDataCatalogInputDefinition <a name="aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDataCatalogInputDefinition: databrew.DataBrewDataCatalogInputDefinition = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition.property.catalogId"></a>

- *Type:* `string`

---

##### `tempDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition.property.tempDirectory"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewS3Location`](#aws-cdk-sdk.databrew.DataBrewS3Location)

---

### DataBrewDataset <a name="aws-cdk-sdk.databrew.DataBrewDataset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDataset: databrew.DataBrewDataset = { ... }
```

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewInput`](#aws-cdk-sdk.databrew.DataBrewInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.name"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.accountId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.createdBy"></a>

- *Type:* `string`

---

##### `formatOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.formatOptions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewFormatOptions`](#aws-cdk-sdk.databrew.DataBrewFormatOptions)

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.resourceArn"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.source"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDataset.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewDeleteDatasetRequest <a name="aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteDatasetRequest: databrew.DataBrewDeleteDatasetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteDatasetResponse <a name="aws-cdk-sdk.databrew.DataBrewDeleteDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteDatasetResponse: databrew.DataBrewDeleteDatasetResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteDatasetResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteJobRequest <a name="aws-cdk-sdk.databrew.DataBrewDeleteJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteJobRequest: databrew.DataBrewDeleteJobRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteJobRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteJobResponse <a name="aws-cdk-sdk.databrew.DataBrewDeleteJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteJobResponse: databrew.DataBrewDeleteJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteJobResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteProjectRequest <a name="aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteProjectRequest: databrew.DataBrewDeleteProjectRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteProjectResponse <a name="aws-cdk-sdk.databrew.DataBrewDeleteProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteProjectResponse: databrew.DataBrewDeleteProjectResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteProjectResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteRecipeVersionRequest <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteRecipeVersionRequest: databrew.DataBrewDeleteRecipeVersionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewDeleteRecipeVersionResponse <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteRecipeVersionResponse: databrew.DataBrewDeleteRecipeVersionResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionResponse.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionResponse.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewDeleteScheduleRequest <a name="aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteScheduleRequest: databrew.DataBrewDeleteScheduleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDeleteScheduleResponse <a name="aws-cdk-sdk.databrew.DataBrewDeleteScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDeleteScheduleResponse: databrew.DataBrewDeleteScheduleResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDeleteScheduleResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewDescribeDatasetRequest <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeDatasetRequest: databrew.DataBrewDescribeDatasetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDescribeDatasetResponse <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeDatasetResponse: databrew.DataBrewDescribeDatasetResponse = { ... }
```

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewInput`](#aws-cdk-sdk.databrew.DataBrewInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `formatOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.formatOptions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewFormatOptions`](#aws-cdk-sdk.databrew.DataBrewFormatOptions)

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.source"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeDatasetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewDescribeJobRequest <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeJobRequest: databrew.DataBrewDescribeJobRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDescribeJobResponse <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeJobResponse: databrew.DataBrewDescribeJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.datasetName"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.encryptionMode"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.maxRetries"></a>

- *Type:* `number`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.projectName"></a>

- *Type:* `string`

---

##### `recipeReference`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.recipeReference"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeReference`](#aws-cdk-sdk.databrew.DataBrewRecipeReference)

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.timeout"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeJobResponse.property.type"></a>

- *Type:* `string`

---

### DataBrewDescribeProjectRequest <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeProjectRequest: databrew.DataBrewDescribeProjectRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDescribeProjectResponse <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeProjectResponse: databrew.DataBrewDescribeProjectResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.datasetName"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `openDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.openDate"></a>

- *Type:* `string`

---

##### `openedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.openedBy"></a>

- *Type:* `string`

---

##### `recipeName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.recipeName"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.sample"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSample`](#aws-cdk-sdk.databrew.DataBrewSample)

---

##### `sessionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.sessionStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeProjectResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewDescribeRecipeRequest <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeRecipeRequest: databrew.DataBrewDescribeRecipeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewDescribeRecipeResponse <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeRecipeResponse: databrew.DataBrewDescribeRecipeResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.description"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.projectName"></a>

- *Type:* `string`

---

##### `publishedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.publishedBy"></a>

- *Type:* `string`

---

##### `publishedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.publishedDate"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.recipeVersion"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `steps`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.steps"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeRecipeResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewDescribeScheduleRequest <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeScheduleRequest: databrew.DataBrewDescribeScheduleRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewDescribeScheduleResponse <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewDescribeScheduleResponse: databrew.DataBrewDescribeScheduleResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.createdBy"></a>

- *Type:* `string`

---

##### `cronExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.cronExpression"></a>

- *Type:* `string`

---

##### `jobNames`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.jobNames"></a>

- *Type:* `string`[]

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewDescribeScheduleResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewExcelOptions <a name="aws-cdk-sdk.databrew.DataBrewExcelOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewExcelOptions: databrew.DataBrewExcelOptions = { ... }
```

##### `sheetIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewExcelOptions.property.sheetIndexes"></a>

- *Type:* `number`[]

---

##### `sheetNames`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewExcelOptions.property.sheetNames"></a>

- *Type:* `string`[]

---

### DataBrewFormatOptions <a name="aws-cdk-sdk.databrew.DataBrewFormatOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewFormatOptions: databrew.DataBrewFormatOptions = { ... }
```

##### `excel`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewFormatOptions.property.excel"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewExcelOptions`](#aws-cdk-sdk.databrew.DataBrewExcelOptions)

---

##### `json`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewFormatOptions.property.json"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewJsonOptions`](#aws-cdk-sdk.databrew.DataBrewJsonOptions)

---

### DataBrewInput <a name="aws-cdk-sdk.databrew.DataBrewInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewInput: databrew.DataBrewInput = { ... }
```

##### `dataCatalogInputDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewInput.property.dataCatalogInputDefinition"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition`](#aws-cdk-sdk.databrew.DataBrewDataCatalogInputDefinition)

---

##### `s3InputDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewInput.property.s3InputDefinition"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewS3Location`](#aws-cdk-sdk.databrew.DataBrewS3Location)

---

### DataBrewJob <a name="aws-cdk-sdk.databrew.DataBrewJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewJob: databrew.DataBrewJob = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.name"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.accountId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.datasetName"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.encryptionMode"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.maxRetries"></a>

- *Type:* `number`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.projectName"></a>

- *Type:* `string`

---

##### `recipeReference`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.recipeReference"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeReference`](#aws-cdk-sdk.databrew.DataBrewRecipeReference)

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.roleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.timeout"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJob.property.type"></a>

- *Type:* `string`

---

### DataBrewJobRun <a name="aws-cdk-sdk.databrew.DataBrewJobRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewJobRun: databrew.DataBrewJobRun = { ... }
```

##### `attempt`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.attempt"></a>

- *Type:* `number`

---

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.completedOn"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.datasetName"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.executionTime"></a>

- *Type:* `number`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.jobName"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.logGroupName"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.logSubscription"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `recipeReference`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.recipeReference"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeReference`](#aws-cdk-sdk.databrew.DataBrewRecipeReference)

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.runId"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.startedBy"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.startedOn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJobRun.property.state"></a>

- *Type:* `string`

---

### DataBrewJsonOptions <a name="aws-cdk-sdk.databrew.DataBrewJsonOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewJsonOptions: databrew.DataBrewJsonOptions = { ... }
```

##### `multiLine`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewJsonOptions.property.multiLine"></a>

- *Type:* `boolean`

---

### DataBrewListDatasetsRequest <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListDatasetsRequest: databrew.DataBrewListDatasetsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListDatasetsResponse <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListDatasetsResponse: databrew.DataBrewListDatasetsResponse = { ... }
```

##### `datasets`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsResponse.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDataset`](#aws-cdk-sdk.databrew.DataBrewDataset)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListDatasetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListJobRunsRequest <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListJobRunsRequest: databrew.DataBrewListJobRunsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListJobRunsResponse <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListJobRunsResponse: databrew.DataBrewListJobRunsResponse = { ... }
```

##### `jobRuns`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsResponse.property.jobRuns"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewJobRun`](#aws-cdk-sdk.databrew.DataBrewJobRun)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListJobsRequest <a name="aws-cdk-sdk.databrew.DataBrewListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListJobsRequest: databrew.DataBrewListJobsRequest = { ... }
```

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsRequest.property.projectName"></a>

- *Type:* `string`

---

### DataBrewListJobsResponse <a name="aws-cdk-sdk.databrew.DataBrewListJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListJobsResponse: databrew.DataBrewListJobsResponse = { ... }
```

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewJob`](#aws-cdk-sdk.databrew.DataBrewJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListProjectsRequest <a name="aws-cdk-sdk.databrew.DataBrewListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListProjectsRequest: databrew.DataBrewListProjectsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListProjectsResponse <a name="aws-cdk-sdk.databrew.DataBrewListProjectsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListProjectsResponse: databrew.DataBrewListProjectsResponse = { ... }
```

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListProjectsResponse.property.projects"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewProject`](#aws-cdk-sdk.databrew.DataBrewProject)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListProjectsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListRecipesRequest <a name="aws-cdk-sdk.databrew.DataBrewListRecipesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListRecipesRequest: databrew.DataBrewListRecipesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipesRequest.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewListRecipesResponse <a name="aws-cdk-sdk.databrew.DataBrewListRecipesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListRecipesResponse: databrew.DataBrewListRecipesResponse = { ... }
```

##### `recipes`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipesResponse.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipe`](#aws-cdk-sdk.databrew.DataBrewRecipe)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipesResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListRecipeVersionsRequest <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListRecipeVersionsRequest: databrew.DataBrewListRecipeVersionsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListRecipeVersionsResponse <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListRecipeVersionsResponse: databrew.DataBrewListRecipeVersionsResponse = { ... }
```

##### `recipes`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsResponse.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipe`](#aws-cdk-sdk.databrew.DataBrewRecipe)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListRecipeVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListSchedulesRequest <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListSchedulesRequest: databrew.DataBrewListSchedulesRequest = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesRequest.property.jobName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListSchedulesResponse <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListSchedulesResponse: databrew.DataBrewListSchedulesResponse = { ... }
```

##### `schedules`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesResponse.property.schedules"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSchedule`](#aws-cdk-sdk.databrew.DataBrewSchedule)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListSchedulesResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataBrewListTagsForResourceRequest <a name="aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListTagsForResourceRequest: databrew.DataBrewListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### DataBrewListTagsForResourceResponse <a name="aws-cdk-sdk.databrew.DataBrewListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewListTagsForResourceResponse: databrew.DataBrewListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewOutput <a name="aws-cdk-sdk.databrew.DataBrewOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewOutput: databrew.DataBrewOutput = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewOutput.property.location"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewS3Location`](#aws-cdk-sdk.databrew.DataBrewS3Location)

---

##### `compressionFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewOutput.property.compressionFormat"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewOutput.property.format"></a>

- *Type:* `string`

---

##### `overwrite`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewOutput.property.overwrite"></a>

- *Type:* `boolean`

---

##### `partitionColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewOutput.property.partitionColumns"></a>

- *Type:* `string`[]

---

### DataBrewProject <a name="aws-cdk-sdk.databrew.DataBrewProject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewProject: databrew.DataBrewProject = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.name"></a>

- *Type:* `string`

---

##### `recipeName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.recipeName"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.accountId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.datasetName"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `openDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.openDate"></a>

- *Type:* `string`

---

##### `openedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.openedBy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.roleArn"></a>

- *Type:* `string`

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.sample"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSample`](#aws-cdk-sdk.databrew.DataBrewSample)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewProject.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewPublishRecipeRequest <a name="aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewPublishRecipeRequest: databrew.DataBrewPublishRecipeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest.property.description"></a>

- *Type:* `string`

---

### DataBrewPublishRecipeResponse <a name="aws-cdk-sdk.databrew.DataBrewPublishRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewPublishRecipeResponse: databrew.DataBrewPublishRecipeResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewPublishRecipeResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewRecipe <a name="aws-cdk-sdk.databrew.DataBrewRecipe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewRecipe: databrew.DataBrewRecipe = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.name"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.description"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.projectName"></a>

- *Type:* `string`

---

##### `publishedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.publishedBy"></a>

- *Type:* `string`

---

##### `publishedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.publishedDate"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.recipeVersion"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.resourceArn"></a>

- *Type:* `string`

---

##### `steps`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.steps"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipe.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewRecipeAction <a name="aws-cdk-sdk.databrew.DataBrewRecipeAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewRecipeAction: databrew.DataBrewRecipeAction = { ... }
```

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeAction.property.operation"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeAction.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewRecipeReference <a name="aws-cdk-sdk.databrew.DataBrewRecipeReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewRecipeReference: databrew.DataBrewRecipeReference = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeReference.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeReference.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewRecipeStep <a name="aws-cdk-sdk.databrew.DataBrewRecipeStep"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewRecipeStep: databrew.DataBrewRecipeStep = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeStep.property.action"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeAction`](#aws-cdk-sdk.databrew.DataBrewRecipeAction)

---

##### `conditionExpressions`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeStep.property.conditionExpressions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewConditionExpression`](#aws-cdk-sdk.databrew.DataBrewConditionExpression)[]

---

### DataBrewRecipeVersionErrorDetail <a name="aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewRecipeVersionErrorDetail: databrew.DataBrewRecipeVersionErrorDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail.property.errorMessage"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail.property.recipeVersion"></a>

- *Type:* `string`

---

### DataBrewS3Location <a name="aws-cdk-sdk.databrew.DataBrewS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewS3Location: databrew.DataBrewS3Location = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewS3Location.property.key"></a>

- *Type:* `string`

---

### DataBrewSample <a name="aws-cdk-sdk.databrew.DataBrewSample"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewSample: databrew.DataBrewSample = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewSample.property.type"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSample.property.size"></a>

- *Type:* `number`

---

### DataBrewSchedule <a name="aws-cdk-sdk.databrew.DataBrewSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewSchedule: databrew.DataBrewSchedule = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.name"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.accountId"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.createdBy"></a>

- *Type:* `string`

---

##### `cronExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.cronExpression"></a>

- *Type:* `string`

---

##### `jobNames`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.jobNames"></a>

- *Type:* `string`[]

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSchedule.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewSendProjectSessionActionRequest <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewSendProjectSessionActionRequest: databrew.DataBrewSendProjectSessionActionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.name"></a>

- *Type:* `string`

---

##### `clientSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.clientSessionId"></a>

- *Type:* `string`

---

##### `preview`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.preview"></a>

- *Type:* `boolean`

---

##### `recipeStep`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.recipeStep"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)

---

##### `stepIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.stepIndex"></a>

- *Type:* `number`

---

##### `viewFrame`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest.property.viewFrame"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewViewFrame`](#aws-cdk-sdk.databrew.DataBrewViewFrame)

---

### DataBrewSendProjectSessionActionResponse <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewSendProjectSessionActionResponse: databrew.DataBrewSendProjectSessionActionResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionResponse.property.name"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionResponse.property.actionId"></a>

- *Type:* `number`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionResponse.property.result"></a>

- *Type:* `string`

---

### DataBrewStartJobRunRequest <a name="aws-cdk-sdk.databrew.DataBrewStartJobRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStartJobRunRequest: databrew.DataBrewStartJobRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartJobRunRequest.property.name"></a>

- *Type:* `string`

---

### DataBrewStartJobRunResponse <a name="aws-cdk-sdk.databrew.DataBrewStartJobRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStartJobRunResponse: databrew.DataBrewStartJobRunResponse = { ... }
```

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartJobRunResponse.property.runId"></a>

- *Type:* `string`

---

### DataBrewStartProjectSessionRequest <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStartProjectSessionRequest: databrew.DataBrewStartProjectSessionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest.property.name"></a>

- *Type:* `string`

---

##### `assumeControl`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest.property.assumeControl"></a>

- *Type:* `boolean`

---

### DataBrewStartProjectSessionResponse <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStartProjectSessionResponse: databrew.DataBrewStartProjectSessionResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionResponse.property.name"></a>

- *Type:* `string`

---

##### `clientSessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewStartProjectSessionResponse.property.clientSessionId"></a>

- *Type:* `string`

---

### DataBrewStopJobRunRequest <a name="aws-cdk-sdk.databrew.DataBrewStopJobRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStopJobRunRequest: databrew.DataBrewStopJobRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStopJobRunRequest.property.name"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStopJobRunRequest.property.runId"></a>

- *Type:* `string`

---

### DataBrewStopJobRunResponse <a name="aws-cdk-sdk.databrew.DataBrewStopJobRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewStopJobRunResponse: databrew.DataBrewStopJobRunResponse = { ... }
```

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewStopJobRunResponse.property.runId"></a>

- *Type:* `string`

---

### DataBrewTagResourceRequest <a name="aws-cdk-sdk.databrew.DataBrewTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewTagResourceRequest: databrew.DataBrewTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### DataBrewTagResourceResponse <a name="aws-cdk-sdk.databrew.DataBrewTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewTagResourceResponse: databrew.DataBrewTagResourceResponse = { ... }
```

### DataBrewUntagResourceRequest <a name="aws-cdk-sdk.databrew.DataBrewUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUntagResourceRequest: databrew.DataBrewUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DataBrewUntagResourceResponse <a name="aws-cdk-sdk.databrew.DataBrewUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUntagResourceResponse: databrew.DataBrewUntagResourceResponse = { ... }
```

### DataBrewUpdateDatasetRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateDatasetRequest: databrew.DataBrewUpdateDatasetRequest = { ... }
```

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest.property.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewInput`](#aws-cdk-sdk.databrew.DataBrewInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest.property.name"></a>

- *Type:* `string`

---

##### `formatOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest.property.formatOptions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewFormatOptions`](#aws-cdk-sdk.databrew.DataBrewFormatOptions)

---

### DataBrewUpdateDatasetResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateDatasetResponse: databrew.DataBrewUpdateDatasetResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateDatasetResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewUpdateProfileJobRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateProfileJobRequest: databrew.DataBrewUpdateProfileJobRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewS3Location`](#aws-cdk-sdk.databrew.DataBrewS3Location)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.encryptionMode"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest.property.timeout"></a>

- *Type:* `number`

---

### DataBrewUpdateProfileJobResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateProfileJobResponse: databrew.DataBrewUpdateProfileJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProfileJobResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewUpdateProjectRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateProjectRequest: databrew.DataBrewUpdateProjectRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `sample`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest.property.sample"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSample`](#aws-cdk-sdk.databrew.DataBrewSample)

---

### DataBrewUpdateProjectResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateProjectResponse: databrew.DataBrewUpdateProjectResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectResponse.property.name"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateProjectResponse.property.lastModifiedDate"></a>

- *Type:* `string`

---

### DataBrewUpdateRecipeJobRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateRecipeJobRequest: databrew.DataBrewUpdateRecipeJobRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.encryptionMode"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest.property.timeout"></a>

- *Type:* `number`

---

### DataBrewUpdateRecipeJobResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateRecipeJobResponse: databrew.DataBrewUpdateRecipeJobResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewUpdateRecipeRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateRecipeRequest: databrew.DataBrewUpdateRecipeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest.property.description"></a>

- *Type:* `string`

---

##### `steps`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest.property.steps"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)[]

---

### DataBrewUpdateRecipeResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateRecipeResponse: databrew.DataBrewUpdateRecipeResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateRecipeResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewUpdateScheduleRequest <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateScheduleRequest: databrew.DataBrewUpdateScheduleRequest = { ... }
```

##### `cronExpression`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest.property.cronExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest.property.name"></a>

- *Type:* `string`

---

##### `jobNames`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest.property.jobNames"></a>

- *Type:* `string`[]

---

### DataBrewUpdateScheduleResponse <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewUpdateScheduleResponse: databrew.DataBrewUpdateScheduleResponse = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewUpdateScheduleResponse.property.name"></a>

- *Type:* `string`

---

### DataBrewViewFrame <a name="aws-cdk-sdk.databrew.DataBrewViewFrame"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

const dataBrewViewFrame: databrew.DataBrewViewFrame = { ... }
```

##### `startColumnIndex`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewViewFrame.property.startColumnIndex"></a>

- *Type:* `number`

---

##### `columnRange`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewViewFrame.property.columnRange"></a>

- *Type:* `number`

---

##### `hiddenColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.databrew.DataBrewViewFrame.property.hiddenColumns"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### DataBrewResponsesBatchDeleteRecipeVersion <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesBatchDeleteRecipeVersion(__scope: Construct, __resources: string[], __input: DataBrewBatchDeleteRecipeVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest`](#aws-cdk-sdk.databrew.DataBrewBatchDeleteRecipeVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail`](#aws-cdk-sdk.databrew.DataBrewRecipeVersionErrorDetail)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesBatchDeleteRecipeVersion.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateDataset <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateDataset(__scope: Construct, __resources: string[], __input: DataBrewCreateDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewCreateDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateDataset.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateProfileJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateProfileJob(__scope: Construct, __resources: string[], __input: DataBrewCreateProfileJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest`](#aws-cdk-sdk.databrew.DataBrewCreateProfileJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProfileJob.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateProject <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateProject(__scope: Construct, __resources: string[], __input: DataBrewCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateProjectRequest`](#aws-cdk-sdk.databrew.DataBrewCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateProject.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateRecipe <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateRecipe(__scope: Construct, __resources: string[], __input: DataBrewCreateRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewCreateRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipe.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateRecipeJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateRecipeJob(__scope: Construct, __resources: string[], __input: DataBrewCreateRecipeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest`](#aws-cdk-sdk.databrew.DataBrewCreateRecipeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateRecipeJob.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesCreateSchedule <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesCreateSchedule(__scope: Construct, __resources: string[], __input: DataBrewCreateScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewCreateScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesCreateSchedule.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesDeleteDataset <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDeleteDataset(__scope: Construct, __resources: string[], __input: DataBrewDeleteDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteDataset.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesDeleteJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDeleteJob(__scope: Construct, __resources: string[], __input: DataBrewDeleteJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteJobRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteJob.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesDeleteProject <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDeleteProject(__scope: Construct, __resources: string[], __input: DataBrewDeleteProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteProject.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesDeleteRecipeVersion <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDeleteRecipeVersion(__scope: Construct, __resources: string[], __input: DataBrewDeleteRecipeVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteRecipeVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteRecipeVersion.property.recipeVersion"></a>

- *Type:* `string`

---


### DataBrewResponsesDeleteSchedule <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDeleteSchedule(__scope: Construct, __resources: string[], __input: DataBrewDeleteScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewDeleteScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDeleteSchedule.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeDataset <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDataset(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.createdBy"></a>

- *Type:* `string`

---

##### `formatOptions`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.formatOptions"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions)

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput)

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.name"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.resourceArn"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.source"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDataset.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataBrewResponsesDescribeDatasetFormatOptions <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetFormatOptions(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `excel`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.property.excel"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel)

---

##### `json`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptions.property.json"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson)

---


### DataBrewResponsesDescribeDatasetFormatOptionsExcel <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `sheetIndexes`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.property.sheetIndexes"></a>

- *Type:* `number`[]

---

##### `sheetNames`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsExcel.property.sheetNames"></a>

- *Type:* `string`[]

---


### DataBrewResponsesDescribeDatasetFormatOptionsJson <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `multiLine`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetFormatOptionsJson.property.multiLine"></a>

- *Type:* `boolean`

---


### DataBrewResponsesDescribeDatasetInput <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetInput(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataCatalogInputDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.property.dataCatalogInputDefinition"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition)

---

##### `s3InputDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInput.property.s3InputDefinition"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition)

---


### DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.property.tableName"></a>

- *Type:* `string`

---

##### `tempDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition.property.tempDirectory"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory)

---


### DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory.property.key"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeDatasetInputS3InputDefinition <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition(__scope: Construct, __resources: string[], __input: DataBrewDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeDatasetInputS3InputDefinition.property.key"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeJob(__scope: Construct, __resources: string[], __input: DataBrewDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeJobRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.datasetName"></a>

- *Type:* `string`

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.encryptionKeyArn"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.encryptionMode"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `logSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.logSubscription"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewOutput`](#aws-cdk-sdk.databrew.DataBrewOutput)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.projectName"></a>

- *Type:* `string`

---

##### `recipeReference`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.recipeReference"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference)

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.roleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.timeout"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJob.property.type"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeJobRecipeReference <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeJobRecipeReference(__scope: Construct, __resources: string[], __input: DataBrewDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeJobRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.property.name"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeJobRecipeReference.property.recipeVersion"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeProject <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeProject(__scope: Construct, __resources: string[], __input: DataBrewDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.createdBy"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.datasetName"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.name"></a>

- *Type:* `string`

---

##### `openDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.openDate"></a>

- *Type:* `string`

---

##### `openedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.openedBy"></a>

- *Type:* `string`

---

##### `recipeName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.recipeName"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.roleArn"></a>

- *Type:* `string`

---

##### `sample`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.sample"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample`](#aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample)

---

##### `sessionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.sessionStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProject.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataBrewResponsesDescribeProjectSample <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeProjectSample(__scope: Construct, __resources: string[], __input: DataBrewDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.property.size"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeProjectSample.property.type"></a>

- *Type:* `string`

---


### DataBrewResponsesDescribeRecipe <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeRecipe(__scope: Construct, __resources: string[], __input: DataBrewDescribeRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.createdBy"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.description"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.name"></a>

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.projectName"></a>

- *Type:* `string`

---

##### `publishedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.publishedBy"></a>

- *Type:* `string`

---

##### `publishedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.publishedDate"></a>

- *Type:* `string`

---

##### `recipeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.recipeVersion"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.resourceArn"></a>

- *Type:* `string`

---

##### `steps`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.steps"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipeStep`](#aws-cdk-sdk.databrew.DataBrewRecipeStep)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeRecipe.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataBrewResponsesDescribeSchedule <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesDescribeSchedule(__scope: Construct, __resources: string[], __input: DataBrewDescribeScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewDescribeScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.createDate"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.createdBy"></a>

- *Type:* `string`

---

##### `cronExpression`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.cronExpression"></a>

- *Type:* `string`

---

##### `jobNames`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.jobNames"></a>

- *Type:* `string`[]

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.name"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesDescribeSchedule.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataBrewResponsesListDatasets <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListDatasets(__scope: Construct, __resources: string[], __input: DataBrewListDatasetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListDatasetsRequest`](#aws-cdk-sdk.databrew.DataBrewListDatasetsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasets`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewDataset`](#aws-cdk-sdk.databrew.DataBrewDataset)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListDatasets.property.nextToken"></a>

- *Type:* `string`

---


### DataBrewResponsesListJobRuns <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListJobRuns(__scope: Construct, __resources: string[], __input: DataBrewListJobRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListJobRunsRequest`](#aws-cdk-sdk.databrew.DataBrewListJobRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobRuns`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.property.jobRuns"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewJobRun`](#aws-cdk-sdk.databrew.DataBrewJobRun)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobRuns.property.nextToken"></a>

- *Type:* `string`

---


### DataBrewResponsesListJobs <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListJobs(__scope: Construct, __resources: string[], __input: DataBrewListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListJobsRequest`](#aws-cdk-sdk.databrew.DataBrewListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewJob`](#aws-cdk-sdk.databrew.DataBrewJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### DataBrewResponsesListProjects <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListProjects(__scope: Construct, __resources: string[], __input: DataBrewListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListProjectsRequest`](#aws-cdk-sdk.databrew.DataBrewListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewProject`](#aws-cdk-sdk.databrew.DataBrewProject)[]

---


### DataBrewResponsesListRecipes <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListRecipes(__scope: Construct, __resources: string[], __input: DataBrewListRecipesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListRecipesRequest`](#aws-cdk-sdk.databrew.DataBrewListRecipesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.property.nextToken"></a>

- *Type:* `string`

---

##### `recipes`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipes.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipe`](#aws-cdk-sdk.databrew.DataBrewRecipe)[]

---


### DataBrewResponsesListRecipeVersions <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListRecipeVersions(__scope: Construct, __resources: string[], __input: DataBrewListRecipeVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest`](#aws-cdk-sdk.databrew.DataBrewListRecipeVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `recipes`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListRecipeVersions.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewRecipe`](#aws-cdk-sdk.databrew.DataBrewRecipe)[]

---


### DataBrewResponsesListSchedules <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListSchedules(__scope: Construct, __resources: string[], __input: DataBrewListSchedulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListSchedulesRequest`](#aws-cdk-sdk.databrew.DataBrewListSchedulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.property.nextToken"></a>

- *Type:* `string`

---

##### `schedules`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListSchedules.property.schedules"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSchedule`](#aws-cdk-sdk.databrew.DataBrewSchedule)[]

---


### DataBrewResponsesListTagsForResource <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DataBrewListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest`](#aws-cdk-sdk.databrew.DataBrewListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### DataBrewResponsesPublishRecipe <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesPublishRecipe(__scope: Construct, __resources: string[], __input: DataBrewPublishRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewPublishRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesPublishRecipe.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesSendProjectSessionAction <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesSendProjectSessionAction(__scope: Construct, __resources: string[], __input: DataBrewSendProjectSessionActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest`](#aws-cdk-sdk.databrew.DataBrewSendProjectSessionActionRequest)

---



#### Properties <a name="Properties"></a>

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.property.actionId"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.property.name"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesSendProjectSessionAction.property.result"></a>

- *Type:* `string`

---


### DataBrewResponsesStartJobRun <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesStartJobRun(__scope: Construct, __resources: string[], __input: DataBrewStartJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStartJobRunRequest`](#aws-cdk-sdk.databrew.DataBrewStartJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartJobRun.property.runId"></a>

- *Type:* `string`

---


### DataBrewResponsesStartProjectSession <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesStartProjectSession(__scope: Construct, __resources: string[], __input: DataBrewStartProjectSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest`](#aws-cdk-sdk.databrew.DataBrewStartProjectSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `clientSessionId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.property.clientSessionId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStartProjectSession.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesStopJobRun <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesStopJobRun(__scope: Construct, __resources: string[], __input: DataBrewStopJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewStopJobRunRequest`](#aws-cdk-sdk.databrew.DataBrewStopJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesStopJobRun.property.runId"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateDataset <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateDataset(__scope: Construct, __resources: string[], __input: DataBrewUpdateDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateDataset.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateProfileJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateProfileJob(__scope: Construct, __resources: string[], __input: DataBrewUpdateProfileJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateProfileJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProfileJob.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateProject <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateProject(__scope: Construct, __resources: string[], __input: DataBrewUpdateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateProject.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateRecipe <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateRecipe(__scope: Construct, __resources: string[], __input: DataBrewUpdateRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipe.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateRecipeJob <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateRecipeJob(__scope: Construct, __resources: string[], __input: DataBrewUpdateRecipeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateRecipeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateRecipeJob.property.name"></a>

- *Type:* `string`

---


### DataBrewResponsesUpdateSchedule <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule.Initializer"></a>

```typescript
import { databrew } from 'aws-cdk-sdk'

new databrew.DataBrewResponsesUpdateSchedule(__scope: Construct, __resources: string[], __input: DataBrewUpdateScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest`](#aws-cdk-sdk.databrew.DataBrewUpdateScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.databrew.DataBrewResponsesUpdateSchedule.property.name"></a>

- *Type:* `string`

---



