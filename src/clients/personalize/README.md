# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PersonalizeClient <a name="aws-cdk-sdk.personalize.PersonalizeClient"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeClient.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createBatchInferenceJob` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createBatchInferenceJob"></a>

```typescript
public createBatchInferenceJob(input: PersonalizeCreateBatchInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest)

---

##### `createCampaign` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createCampaign"></a>

```typescript
public createCampaign(input: PersonalizeCreateCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest)

---

##### `createDataset` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createDataset"></a>

```typescript
public createDataset(input: PersonalizeCreateDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest)

---

##### `createDatasetGroup` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createDatasetGroup"></a>

```typescript
public createDatasetGroup(input: PersonalizeCreateDatasetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest)

---

##### `createDatasetImportJob` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createDatasetImportJob"></a>

```typescript
public createDatasetImportJob(input: PersonalizeCreateDatasetImportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest)

---

##### `createEventTracker` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createEventTracker"></a>

```typescript
public createEventTracker(input: PersonalizeCreateEventTrackerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest)

---

##### `createFilter` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createFilter"></a>

```typescript
public createFilter(input: PersonalizeCreateFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest)

---

##### `createSchema` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createSchema"></a>

```typescript
public createSchema(input: PersonalizeCreateSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest)

---

##### `createSolution` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createSolution"></a>

```typescript
public createSolution(input: PersonalizeCreateSolutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest)

---

##### `createSolutionVersion` <a name="aws-cdk-sdk.personalize.PersonalizeClient.createSolutionVersion"></a>

```typescript
public createSolutionVersion(input: PersonalizeCreateSolutionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest)

---

##### `deleteCampaign` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteCampaign"></a>

```typescript
public deleteCampaign(input: PersonalizeDeleteCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteCampaignRequest)

---

##### `deleteDataset` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteDataset"></a>

```typescript
public deleteDataset(input: PersonalizeDeleteDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteDatasetRequest)

---

##### `deleteDatasetGroup` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteDatasetGroup"></a>

```typescript
public deleteDatasetGroup(input: PersonalizeDeleteDatasetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteDatasetGroupRequest)

---

##### `deleteEventTracker` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteEventTracker"></a>

```typescript
public deleteEventTracker(input: PersonalizeDeleteEventTrackerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteEventTrackerRequest)

---

##### `deleteFilter` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteFilter"></a>

```typescript
public deleteFilter(input: PersonalizeDeleteFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteFilterRequest)

---

##### `deleteSchema` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteSchema"></a>

```typescript
public deleteSchema(input: PersonalizeDeleteSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteSchemaRequest)

---

##### `deleteSolution` <a name="aws-cdk-sdk.personalize.PersonalizeClient.deleteSolution"></a>

```typescript
public deleteSolution(input: PersonalizeDeleteSolutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDeleteSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDeleteSolutionRequest)

---

##### `describeAlgorithm` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeAlgorithm"></a>

```typescript
public describeAlgorithm(input: PersonalizeDescribeAlgorithmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest)

---

##### `describeBatchInferenceJob` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeBatchInferenceJob"></a>

```typescript
public describeBatchInferenceJob(input: PersonalizeDescribeBatchInferenceJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---

##### `describeCampaign` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeCampaign"></a>

```typescript
public describeCampaign(input: PersonalizeDescribeCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---

##### `describeDataset` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeDataset"></a>

```typescript
public describeDataset(input: PersonalizeDescribeDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest)

---

##### `describeDatasetGroup` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeDatasetGroup"></a>

```typescript
public describeDatasetGroup(input: PersonalizeDescribeDatasetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest)

---

##### `describeDatasetImportJob` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeDatasetImportJob"></a>

```typescript
public describeDatasetImportJob(input: PersonalizeDescribeDatasetImportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest)

---

##### `describeEventTracker` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeEventTracker"></a>

```typescript
public describeEventTracker(input: PersonalizeDescribeEventTrackerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest)

---

##### `describeFeatureTransformation` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeFeatureTransformation"></a>

```typescript
public describeFeatureTransformation(input: PersonalizeDescribeFeatureTransformationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest)

---

##### `describeFilter` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeFilter"></a>

```typescript
public describeFilter(input: PersonalizeDescribeFilterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest)

---

##### `describeRecipe` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeRecipe"></a>

```typescript
public describeRecipe(input: PersonalizeDescribeRecipeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest)

---

##### `describeSchema` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeSchema"></a>

```typescript
public describeSchema(input: PersonalizeDescribeSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest)

---

##### `describeSolution` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeSolution"></a>

```typescript
public describeSolution(input: PersonalizeDescribeSolutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---

##### `describeSolutionVersion` <a name="aws-cdk-sdk.personalize.PersonalizeClient.describeSolutionVersion"></a>

```typescript
public describeSolutionVersion(input: PersonalizeDescribeSolutionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---

##### `fetchSolutionMetrics` <a name="aws-cdk-sdk.personalize.PersonalizeClient.fetchSolutionMetrics"></a>

```typescript
public fetchSolutionMetrics(input: PersonalizeGetSolutionMetricsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest`](#aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest)

---

##### `listBatchInferenceJobs` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listBatchInferenceJobs"></a>

```typescript
public listBatchInferenceJobs(input: PersonalizeListBatchInferenceJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest`](#aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest)

---

##### `listCampaigns` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listCampaigns"></a>

```typescript
public listCampaigns(input: PersonalizeListCampaignsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest`](#aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest)

---

##### `listDatasetGroups` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listDatasetGroups"></a>

```typescript
public listDatasetGroups(input: PersonalizeListDatasetGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest)

---

##### `listDatasetImportJobs` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listDatasetImportJobs"></a>

```typescript
public listDatasetImportJobs(input: PersonalizeListDatasetImportJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest)

---

##### `listDatasets` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listDatasets"></a>

```typescript
public listDatasets(input: PersonalizeListDatasetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest)

---

##### `listEventTrackers` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listEventTrackers"></a>

```typescript
public listEventTrackers(input: PersonalizeListEventTrackersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest`](#aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest)

---

##### `listFilters` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listFilters"></a>

```typescript
public listFilters(input: PersonalizeListFiltersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListFiltersRequest`](#aws-cdk-sdk.personalize.PersonalizeListFiltersRequest)

---

##### `listRecipes` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listRecipes"></a>

```typescript
public listRecipes(input: PersonalizeListRecipesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListRecipesRequest`](#aws-cdk-sdk.personalize.PersonalizeListRecipesRequest)

---

##### `listSchemas` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listSchemas"></a>

```typescript
public listSchemas(input: PersonalizeListSchemasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSchemasRequest`](#aws-cdk-sdk.personalize.PersonalizeListSchemasRequest)

---

##### `listSolutions` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listSolutions"></a>

```typescript
public listSolutions(input: PersonalizeListSolutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest`](#aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest)

---

##### `listSolutionVersions` <a name="aws-cdk-sdk.personalize.PersonalizeClient.listSolutionVersions"></a>

```typescript
public listSolutionVersions(input: PersonalizeListSolutionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest`](#aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest)

---

##### `updateCampaign` <a name="aws-cdk-sdk.personalize.PersonalizeClient.updateCampaign"></a>

```typescript
public updateCampaign(input: PersonalizeUpdateCampaignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest)

---




## Structs <a name="Structs"></a>

### PersonalizeAlgorithm <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeAlgorithm: personalize.PersonalizeAlgorithm = { ... }
```

##### `algorithmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.algorithmArn"></a>

- *Type:* `string`

---

##### `algorithmImage`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.algorithmImage"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeAlgorithmImage`](#aws-cdk-sdk.personalize.PersonalizeAlgorithmImage)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.creationDateTime"></a>

- *Type:* `string`

---

##### `defaultHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.defaultHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges`](#aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges)

---

##### `defaultHyperParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.defaultHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `defaultResourceConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.defaultResourceConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.roleArn"></a>

- *Type:* `string`

---

##### `trainingInputMode`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithm.property.trainingInputMode"></a>

- *Type:* `string`

---

### PersonalizeAlgorithmImage <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithmImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeAlgorithmImage: personalize.PersonalizeAlgorithmImage = { ... }
```

##### `dockerURI`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithmImage.property.dockerURI"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAlgorithmImage.property.name"></a>

- *Type:* `string`

---

### PersonalizeAutoMlConfig <a name="aws-cdk-sdk.personalize.PersonalizeAutoMlConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeAutoMlConfig: personalize.PersonalizeAutoMlConfig = { ... }
```

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAutoMlConfig.property.metricName"></a>

- *Type:* `string`

---

##### `recipeList`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAutoMlConfig.property.recipeList"></a>

- *Type:* `string`[]

---

### PersonalizeAutoMlResult <a name="aws-cdk-sdk.personalize.PersonalizeAutoMlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeAutoMlResult: personalize.PersonalizeAutoMlResult = { ... }
```

##### `bestRecipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeAutoMlResult.property.bestRecipeArn"></a>

- *Type:* `string`

---

### PersonalizeBatchInferenceJob <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeBatchInferenceJob: personalize.PersonalizeBatchInferenceJob = { ... }
```

##### `batchInferenceJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.batchInferenceJobArn"></a>

- *Type:* `string`

---

##### `batchInferenceJobConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.batchInferenceJobConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.failureReason"></a>

- *Type:* `string`

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.filterArn"></a>

- *Type:* `string`

---

##### `jobInput`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.jobInput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput)

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.jobName"></a>

- *Type:* `string`

---

##### `jobOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.jobOutput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput)

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `numResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.numResults"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.roleArn"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob.property.status"></a>

- *Type:* `string`

---

### PersonalizeBatchInferenceJobConfig <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeBatchInferenceJobConfig: personalize.PersonalizeBatchInferenceJobConfig = { ... }
```

##### `itemExplorationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig.property.itemExplorationConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

### PersonalizeBatchInferenceJobInput <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeBatchInferenceJobInput: personalize.PersonalizeBatchInferenceJobInput = { ... }
```

##### `s3DataSource`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput.property.s3DataSource"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeS3DataConfig`](#aws-cdk-sdk.personalize.PersonalizeS3DataConfig)

---

### PersonalizeBatchInferenceJobOutput <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeBatchInferenceJobOutput: personalize.PersonalizeBatchInferenceJobOutput = { ... }
```

##### `s3DataDestination`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput.property.s3DataDestination"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeS3DataConfig`](#aws-cdk-sdk.personalize.PersonalizeS3DataConfig)

---

### PersonalizeBatchInferenceJobSummary <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeBatchInferenceJobSummary: personalize.PersonalizeBatchInferenceJobSummary = { ... }
```

##### `batchInferenceJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.batchInferenceJobArn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.jobName"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeCampaign <a name="aws-cdk-sdk.personalize.PersonalizeCampaign"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCampaign: personalize.PersonalizeCampaign = { ... }
```

##### `campaignArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.campaignArn"></a>

- *Type:* `string`

---

##### `campaignConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeCampaignConfig)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `latestCampaignUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.latestCampaignUpdate"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary`](#aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary)

---

##### `minProvisionedTPS`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.minProvisionedTPS"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.name"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaign.property.status"></a>

- *Type:* `string`

---

### PersonalizeCampaignConfig <a name="aws-cdk-sdk.personalize.PersonalizeCampaignConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCampaignConfig: personalize.PersonalizeCampaignConfig = { ... }
```

##### `itemExplorationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignConfig.property.itemExplorationConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

### PersonalizeCampaignSummary <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCampaignSummary: personalize.PersonalizeCampaignSummary = { ... }
```

##### `campaignArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.campaignArn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeCampaignUpdateSummary <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCampaignUpdateSummary: personalize.PersonalizeCampaignUpdateSummary = { ... }
```

##### `campaignConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeCampaignConfig)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `minProvisionedTPS`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.minProvisionedTPS"></a>

- *Type:* `number`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCampaignUpdateSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeCategoricalHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCategoricalHyperParameterRange: personalize.PersonalizeCategoricalHyperParameterRange = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange.property.values"></a>

- *Type:* `string`[]

---

### PersonalizeContinuousHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeContinuousHyperParameterRange: personalize.PersonalizeContinuousHyperParameterRange = { ... }
```

##### `maxValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange.property.maxValue"></a>

- *Type:* `number`

---

##### `minValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange.property.minValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange.property.name"></a>

- *Type:* `string`

---

### PersonalizeCreateBatchInferenceJobRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateBatchInferenceJobRequest: personalize.PersonalizeCreateBatchInferenceJobRequest = { ... }
```

##### `jobInput`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.jobInput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobInput)

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `jobOutput`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.jobOutput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobOutput)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `batchInferenceJobConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.batchInferenceJobConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobConfig)

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.filterArn"></a>

- *Type:* `string`

---

##### `numResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest.property.numResults"></a>

- *Type:* `number`

---

### PersonalizeCreateBatchInferenceJobResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateBatchInferenceJobResponse: personalize.PersonalizeCreateBatchInferenceJobResponse = { ... }
```

##### `batchInferenceJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobResponse.property.batchInferenceJobArn"></a>

- *Type:* `string`

---

### PersonalizeCreateCampaignRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateCampaignRequest: personalize.PersonalizeCreateCampaignRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest.property.name"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `campaignConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeCampaignConfig)

---

##### `minProvisionedTPS`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest.property.minProvisionedTPS"></a>

- *Type:* `number`

---

### PersonalizeCreateCampaignResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateCampaignResponse: personalize.PersonalizeCreateCampaignResponse = { ... }
```

##### `campaignArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateCampaignResponse.property.campaignArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetGroupRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetGroupRequest: personalize.PersonalizeCreateDatasetGroupRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest.property.roleArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetGroupResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetGroupResponse: personalize.PersonalizeCreateDatasetGroupResponse = { ... }
```

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupResponse.property.datasetGroupArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetImportJobRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetImportJobRequest: personalize.PersonalizeCreateDatasetImportJobRequest = { ... }
```

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest.property.datasetArn"></a>

- *Type:* `string`

---

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDataSource`](#aws-cdk-sdk.personalize.PersonalizeDataSource)

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest.property.roleArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetImportJobResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetImportJobResponse: personalize.PersonalizeCreateDatasetImportJobResponse = { ... }
```

##### `datasetImportJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobResponse.property.datasetImportJobArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetRequest: personalize.PersonalizeCreateDatasetRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `datasetType`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest.property.datasetType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeCreateDatasetResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateDatasetResponse: personalize.PersonalizeCreateDatasetResponse = { ... }
```

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateDatasetResponse.property.datasetArn"></a>

- *Type:* `string`

---

### PersonalizeCreateEventTrackerRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateEventTrackerRequest: personalize.PersonalizeCreateEventTrackerRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest.property.name"></a>

- *Type:* `string`

---

### PersonalizeCreateEventTrackerResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateEventTrackerResponse: personalize.PersonalizeCreateEventTrackerResponse = { ... }
```

##### `eventTrackerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerResponse.property.eventTrackerArn"></a>

- *Type:* `string`

---

##### `trackingId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerResponse.property.trackingId"></a>

- *Type:* `string`

---

### PersonalizeCreateFilterRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateFilterRequest: personalize.PersonalizeCreateFilterRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest.property.filterExpression"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest.property.name"></a>

- *Type:* `string`

---

### PersonalizeCreateFilterResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateFilterResponse: personalize.PersonalizeCreateFilterResponse = { ... }
```

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateFilterResponse.property.filterArn"></a>

- *Type:* `string`

---

### PersonalizeCreateSchemaRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSchemaRequest: personalize.PersonalizeCreateSchemaRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest.property.schema"></a>

- *Type:* `string`

---

### PersonalizeCreateSchemaResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSchemaResponse: personalize.PersonalizeCreateSchemaResponse = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeCreateSolutionRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSolutionRequest: personalize.PersonalizeCreateSolutionRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.name"></a>

- *Type:* `string`

---

##### `eventType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.eventType"></a>

- *Type:* `string`

---

##### `performAutoML`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.performAutoML"></a>

- *Type:* `boolean`

---

##### `performHPO`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.performHPO"></a>

- *Type:* `boolean`

---

##### `recipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.recipeArn"></a>

- *Type:* `string`

---

##### `solutionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest.property.solutionConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionConfig`](#aws-cdk-sdk.personalize.PersonalizeSolutionConfig)

---

### PersonalizeCreateSolutionResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSolutionResponse: personalize.PersonalizeCreateSolutionResponse = { ... }
```

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionResponse.property.solutionArn"></a>

- *Type:* `string`

---

### PersonalizeCreateSolutionVersionRequest <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSolutionVersionRequest: personalize.PersonalizeCreateSolutionVersionRequest = { ... }
```

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest.property.solutionArn"></a>

- *Type:* `string`

---

##### `trainingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest.property.trainingMode"></a>

- *Type:* `string`

---

### PersonalizeCreateSolutionVersionResponse <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeCreateSolutionVersionResponse: personalize.PersonalizeCreateSolutionVersionResponse = { ... }
```

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionResponse.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeDataset <a name="aws-cdk-sdk.personalize.PersonalizeDataset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDataset: personalize.PersonalizeDataset = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `datasetType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.datasetType"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.schemaArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataset.property.status"></a>

- *Type:* `string`

---

### PersonalizeDatasetGroup <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetGroup: personalize.PersonalizeDatasetGroup = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.failureReason"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroup.property.status"></a>

- *Type:* `string`

---

### PersonalizeDatasetGroupSummary <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetGroupSummary: personalize.PersonalizeDatasetGroupSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeDatasetImportJob <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetImportJob: personalize.PersonalizeDatasetImportJob = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetImportJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.datasetImportJobArn"></a>

- *Type:* `string`

---

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDataSource`](#aws-cdk-sdk.personalize.PersonalizeDataSource)

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.failureReason"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.jobName"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJob.property.status"></a>

- *Type:* `string`

---

### PersonalizeDatasetImportJobSummary <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetImportJobSummary: personalize.PersonalizeDatasetImportJobSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetImportJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.datasetImportJobArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.jobName"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeDatasetSchema <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetSchema: personalize.PersonalizeDatasetSchema = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema.property.creationDateTime"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema.property.schema"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchema.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeDatasetSchemaSummary <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetSchemaSummary: personalize.PersonalizeDatasetSchemaSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeDatasetSummary <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDatasetSummary: personalize.PersonalizeDatasetSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.datasetType"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDatasetSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeDataSource <a name="aws-cdk-sdk.personalize.PersonalizeDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDataSource: personalize.PersonalizeDataSource = { ... }
```

##### `dataLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDataSource.property.dataLocation"></a>

- *Type:* `string`

---

### PersonalizeDefaultCategoricalHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDefaultCategoricalHyperParameterRange: personalize.PersonalizeDefaultCategoricalHyperParameterRange = { ... }
```

##### `isTunable`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange.property.isTunable"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange.property.values"></a>

- *Type:* `string`[]

---

### PersonalizeDefaultContinuousHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDefaultContinuousHyperParameterRange: personalize.PersonalizeDefaultContinuousHyperParameterRange = { ... }
```

##### `isTunable`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange.property.isTunable"></a>

- *Type:* `boolean`

---

##### `maxValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange.property.maxValue"></a>

- *Type:* `number`

---

##### `minValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange.property.minValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange.property.name"></a>

- *Type:* `string`

---

### PersonalizeDefaultHyperParameterRanges <a name="aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDefaultHyperParameterRanges: personalize.PersonalizeDefaultHyperParameterRanges = { ... }
```

##### `categoricalHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange)[]

---

##### `continuousHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges.property.continuousHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange)[]

---

##### `integerHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultHyperParameterRanges.property.integerHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange)[]

---

### PersonalizeDefaultIntegerHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDefaultIntegerHyperParameterRange: personalize.PersonalizeDefaultIntegerHyperParameterRange = { ... }
```

##### `isTunable`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange.property.isTunable"></a>

- *Type:* `boolean`

---

##### `maxValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange.property.maxValue"></a>

- *Type:* `number`

---

##### `minValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange.property.minValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange.property.name"></a>

- *Type:* `string`

---

### PersonalizeDeleteCampaignRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteCampaignRequest: personalize.PersonalizeDeleteCampaignRequest = { ... }
```

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteCampaignRequest.property.campaignArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteDatasetGroupRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteDatasetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteDatasetGroupRequest: personalize.PersonalizeDeleteDatasetGroupRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteDatasetGroupRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteDatasetRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteDatasetRequest: personalize.PersonalizeDeleteDatasetRequest = { ... }
```

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteDatasetRequest.property.datasetArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteEventTrackerRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteEventTrackerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteEventTrackerRequest: personalize.PersonalizeDeleteEventTrackerRequest = { ... }
```

##### `eventTrackerArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteEventTrackerRequest.property.eventTrackerArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteFilterRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteFilterRequest: personalize.PersonalizeDeleteFilterRequest = { ... }
```

##### `filterArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteFilterRequest.property.filterArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteSchemaRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteSchemaRequest: personalize.PersonalizeDeleteSchemaRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteSchemaRequest.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeDeleteSolutionRequest <a name="aws-cdk-sdk.personalize.PersonalizeDeleteSolutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDeleteSolutionRequest: personalize.PersonalizeDeleteSolutionRequest = { ... }
```

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDeleteSolutionRequest.property.solutionArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeAlgorithmRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeAlgorithmRequest: personalize.PersonalizeDescribeAlgorithmRequest = { ... }
```

##### `algorithmArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest.property.algorithmArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeAlgorithmResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeAlgorithmResponse: personalize.PersonalizeDescribeAlgorithmResponse = { ... }
```

##### `algorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmResponse.property.algorithm"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeAlgorithm`](#aws-cdk-sdk.personalize.PersonalizeAlgorithm)

---

### PersonalizeDescribeBatchInferenceJobRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeBatchInferenceJobRequest: personalize.PersonalizeDescribeBatchInferenceJobRequest = { ... }
```

##### `batchInferenceJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest.property.batchInferenceJobArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeBatchInferenceJobResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeBatchInferenceJobResponse: personalize.PersonalizeDescribeBatchInferenceJobResponse = { ... }
```

##### `batchInferenceJob`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobResponse.property.batchInferenceJob"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJob)

---

### PersonalizeDescribeCampaignRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeCampaignRequest: personalize.PersonalizeDescribeCampaignRequest = { ... }
```

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest.property.campaignArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeCampaignResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeCampaignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeCampaignResponse: personalize.PersonalizeDescribeCampaignResponse = { ... }
```

##### `campaign`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeCampaignResponse.property.campaign"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaign`](#aws-cdk-sdk.personalize.PersonalizeCampaign)

---

### PersonalizeDescribeDatasetGroupRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetGroupRequest: personalize.PersonalizeDescribeDatasetGroupRequest = { ... }
```

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeDatasetGroupResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetGroupResponse: personalize.PersonalizeDescribeDatasetGroupResponse = { ... }
```

##### `datasetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupResponse.property.datasetGroup"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetGroup`](#aws-cdk-sdk.personalize.PersonalizeDatasetGroup)

---

### PersonalizeDescribeDatasetImportJobRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetImportJobRequest: personalize.PersonalizeDescribeDatasetImportJobRequest = { ... }
```

##### `datasetImportJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest.property.datasetImportJobArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeDatasetImportJobResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetImportJobResponse: personalize.PersonalizeDescribeDatasetImportJobResponse = { ... }
```

##### `datasetImportJob`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobResponse.property.datasetImportJob"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetImportJob`](#aws-cdk-sdk.personalize.PersonalizeDatasetImportJob)

---

### PersonalizeDescribeDatasetRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetRequest: personalize.PersonalizeDescribeDatasetRequest = { ... }
```

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest.property.datasetArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeDatasetResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeDatasetResponse: personalize.PersonalizeDescribeDatasetResponse = { ... }
```

##### `dataset`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeDatasetResponse.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDataset`](#aws-cdk-sdk.personalize.PersonalizeDataset)

---

### PersonalizeDescribeEventTrackerRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeEventTrackerRequest: personalize.PersonalizeDescribeEventTrackerRequest = { ... }
```

##### `eventTrackerArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest.property.eventTrackerArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeEventTrackerResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeEventTrackerResponse: personalize.PersonalizeDescribeEventTrackerResponse = { ... }
```

##### `eventTracker`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerResponse.property.eventTracker"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeEventTracker`](#aws-cdk-sdk.personalize.PersonalizeEventTracker)

---

### PersonalizeDescribeFeatureTransformationRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeFeatureTransformationRequest: personalize.PersonalizeDescribeFeatureTransformationRequest = { ... }
```

##### `featureTransformationArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest.property.featureTransformationArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeFeatureTransformationResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeFeatureTransformationResponse: personalize.PersonalizeDescribeFeatureTransformationResponse = { ... }
```

##### `featureTransformation`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationResponse.property.featureTransformation"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeFeatureTransformation`](#aws-cdk-sdk.personalize.PersonalizeFeatureTransformation)

---

### PersonalizeDescribeFilterRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeFilterRequest: personalize.PersonalizeDescribeFilterRequest = { ... }
```

##### `filterArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest.property.filterArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeFilterResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFilterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeFilterResponse: personalize.PersonalizeDescribeFilterResponse = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeFilterResponse.property.filter"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeFilter`](#aws-cdk-sdk.personalize.PersonalizeFilter)

---

### PersonalizeDescribeRecipeRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeRecipeRequest: personalize.PersonalizeDescribeRecipeRequest = { ... }
```

##### `recipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest.property.recipeArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeRecipeResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeRecipeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeRecipeResponse: personalize.PersonalizeDescribeRecipeResponse = { ... }
```

##### `recipe`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeRecipeResponse.property.recipe"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeRecipe`](#aws-cdk-sdk.personalize.PersonalizeRecipe)

---

### PersonalizeDescribeSchemaRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSchemaRequest: personalize.PersonalizeDescribeSchemaRequest = { ... }
```

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest.property.schemaArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeSchemaResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSchemaResponse: personalize.PersonalizeDescribeSchemaResponse = { ... }
```

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSchemaResponse.property.schema"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetSchema`](#aws-cdk-sdk.personalize.PersonalizeDatasetSchema)

---

### PersonalizeDescribeSolutionRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSolutionRequest: personalize.PersonalizeDescribeSolutionRequest = { ... }
```

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest.property.solutionArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeSolutionResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSolutionResponse: personalize.PersonalizeDescribeSolutionResponse = { ... }
```

##### `solution`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionResponse.property.solution"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolution`](#aws-cdk-sdk.personalize.PersonalizeSolution)

---

### PersonalizeDescribeSolutionVersionRequest <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSolutionVersionRequest: personalize.PersonalizeDescribeSolutionVersionRequest = { ... }
```

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeDescribeSolutionVersionResponse <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeDescribeSolutionVersionResponse: personalize.PersonalizeDescribeSolutionVersionResponse = { ... }
```

##### `solutionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionResponse.property.solutionVersion"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionVersion`](#aws-cdk-sdk.personalize.PersonalizeSolutionVersion)

---

### PersonalizeEventTracker <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeEventTracker: personalize.PersonalizeEventTracker = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.accountId"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventTrackerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.eventTrackerArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.status"></a>

- *Type:* `string`

---

##### `trackingId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTracker.property.trackingId"></a>

- *Type:* `string`

---

### PersonalizeEventTrackerSummary <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeEventTrackerSummary: personalize.PersonalizeEventTrackerSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `eventTrackerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary.property.eventTrackerArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeFeatureTransformation <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeFeatureTransformation: personalize.PersonalizeFeatureTransformation = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.creationDateTime"></a>

- *Type:* `string`

---

##### `defaultParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.defaultParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `featureTransformationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.featureTransformationArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFeatureTransformation.property.status"></a>

- *Type:* `string`

---

### PersonalizeFilter <a name="aws-cdk-sdk.personalize.PersonalizeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeFilter: personalize.PersonalizeFilter = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.failureReason"></a>

- *Type:* `string`

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.filterArn"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.filterExpression"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilter.property.status"></a>

- *Type:* `string`

---

### PersonalizeFilterSummary <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeFilterSummary: personalize.PersonalizeFilterSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `filterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.filterArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeFilterSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeGetSolutionMetricsRequest <a name="aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeGetSolutionMetricsRequest: personalize.PersonalizeGetSolutionMetricsRequest = { ... }
```

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeGetSolutionMetricsResponse <a name="aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeGetSolutionMetricsResponse: personalize.PersonalizeGetSolutionMetricsResponse = { ... }
```

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsResponse.property.metrics"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsResponse.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeHpoConfig <a name="aws-cdk-sdk.personalize.PersonalizeHpoConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeHpoConfig: personalize.PersonalizeHpoConfig = { ... }
```

##### `algorithmHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoConfig.property.algorithmHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges`](#aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges)

---

##### `hpoObjective`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoConfig.property.hpoObjective"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeHpoObjective`](#aws-cdk-sdk.personalize.PersonalizeHpoObjective)

---

##### `hpoResourceConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoConfig.property.hpoResourceConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeHpoResourceConfig`](#aws-cdk-sdk.personalize.PersonalizeHpoResourceConfig)

---

### PersonalizeHpoObjective <a name="aws-cdk-sdk.personalize.PersonalizeHpoObjective"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeHpoObjective: personalize.PersonalizeHpoObjective = { ... }
```

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoObjective.property.metricName"></a>

- *Type:* `string`

---

##### `metricRegex`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoObjective.property.metricRegex"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoObjective.property.type"></a>

- *Type:* `string`

---

### PersonalizeHpoResourceConfig <a name="aws-cdk-sdk.personalize.PersonalizeHpoResourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeHpoResourceConfig: personalize.PersonalizeHpoResourceConfig = { ... }
```

##### `maxNumberOfTrainingJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoResourceConfig.property.maxNumberOfTrainingJobs"></a>

- *Type:* `string`

---

##### `maxParallelTrainingJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHpoResourceConfig.property.maxParallelTrainingJobs"></a>

- *Type:* `string`

---

### PersonalizeHyperParameterRanges <a name="aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeHyperParameterRanges: personalize.PersonalizeHyperParameterRanges = { ... }
```

##### `categoricalHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange)[]

---

##### `continuousHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges.property.continuousHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange)[]

---

##### `integerHyperParameterRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeHyperParameterRanges.property.integerHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange)[]

---

### PersonalizeIntegerHyperParameterRange <a name="aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeIntegerHyperParameterRange: personalize.PersonalizeIntegerHyperParameterRange = { ... }
```

##### `maxValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange.property.maxValue"></a>

- *Type:* `number`

---

##### `minValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange.property.minValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange.property.name"></a>

- *Type:* `string`

---

### PersonalizeListBatchInferenceJobsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListBatchInferenceJobsRequest: personalize.PersonalizeListBatchInferenceJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeListBatchInferenceJobsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListBatchInferenceJobsResponse: personalize.PersonalizeListBatchInferenceJobsResponse = { ... }
```

##### `batchInferenceJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsResponse.property.batchInferenceJobs"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListCampaignsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListCampaignsRequest: personalize.PersonalizeListCampaignsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest.property.solutionArn"></a>

- *Type:* `string`

---

### PersonalizeListCampaignsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListCampaignsResponse: personalize.PersonalizeListCampaignsResponse = { ... }
```

##### `campaigns`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsResponse.property.campaigns"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignSummary`](#aws-cdk-sdk.personalize.PersonalizeCampaignSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListCampaignsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetGroupsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetGroupsRequest: personalize.PersonalizeListDatasetGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetGroupsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetGroupsResponse: personalize.PersonalizeListDatasetGroupsResponse = { ... }
```

##### `datasetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsResponse.property.datasetGroups"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetImportJobsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetImportJobsRequest: personalize.PersonalizeListDatasetImportJobsRequest = { ... }
```

##### `datasetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest.property.datasetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetImportJobsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetImportJobsResponse: personalize.PersonalizeListDatasetImportJobsResponse = { ... }
```

##### `datasetImportJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsResponse.property.datasetImportJobs"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetsRequest: personalize.PersonalizeListDatasetsRequest = { ... }
```

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListDatasetsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListDatasetsResponse: personalize.PersonalizeListDatasetsResponse = { ... }
```

##### `datasets`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsResponse.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListDatasetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListEventTrackersRequest <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListEventTrackersRequest: personalize.PersonalizeListEventTrackersRequest = { ... }
```

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListEventTrackersResponse <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListEventTrackersResponse: personalize.PersonalizeListEventTrackersResponse = { ... }
```

##### `eventTrackers`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersResponse.property.eventTrackers"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary`](#aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListEventTrackersResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListFiltersRequest <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListFiltersRequest: personalize.PersonalizeListFiltersRequest = { ... }
```

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListFiltersResponse <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListFiltersResponse: personalize.PersonalizeListFiltersResponse = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersResponse.property.filters"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeFilterSummary`](#aws-cdk-sdk.personalize.PersonalizeFilterSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListFiltersResponse.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListRecipesRequest <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListRecipesRequest: personalize.PersonalizeListRecipesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `recipeProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesRequest.property.recipeProvider"></a>

- *Type:* `string`

---

### PersonalizeListRecipesResponse <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListRecipesResponse: personalize.PersonalizeListRecipesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `recipes`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListRecipesResponse.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeRecipeSummary`](#aws-cdk-sdk.personalize.PersonalizeRecipeSummary)[]

---

### PersonalizeListSchemasRequest <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSchemasRequest: personalize.PersonalizeListSchemasRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListSchemasResponse <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSchemasResponse: personalize.PersonalizeListSchemasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSchemasResponse.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary)[]

---

### PersonalizeListSolutionsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSolutionsRequest: personalize.PersonalizeListSolutionsRequest = { ... }
```

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### PersonalizeListSolutionsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSolutionsResponse: personalize.PersonalizeListSolutionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `solutions`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionsResponse.property.solutions"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionSummary`](#aws-cdk-sdk.personalize.PersonalizeSolutionSummary)[]

---

### PersonalizeListSolutionVersionsRequest <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSolutionVersionsRequest: personalize.PersonalizeListSolutionVersionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest.property.solutionArn"></a>

- *Type:* `string`

---

### PersonalizeListSolutionVersionsResponse <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeListSolutionVersionsResponse: personalize.PersonalizeListSolutionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `solutionVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsResponse.property.solutionVersions"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary`](#aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary)[]

---

### PersonalizeRecipe <a name="aws-cdk-sdk.personalize.PersonalizeRecipe"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeRecipe: personalize.PersonalizeRecipe = { ... }
```

##### `algorithmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.algorithmArn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.creationDateTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.description"></a>

- *Type:* `string`

---

##### `featureTransformationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.featureTransformationArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.name"></a>

- *Type:* `string`

---

##### `recipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.recipeArn"></a>

- *Type:* `string`

---

##### `recipeType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.recipeType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipe.property.status"></a>

- *Type:* `string`

---

### PersonalizeRecipeSummary <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeRecipeSummary: personalize.PersonalizeRecipeSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary.property.name"></a>

- *Type:* `string`

---

##### `recipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary.property.recipeArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeRecipeSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeS3DataConfig <a name="aws-cdk-sdk.personalize.PersonalizeS3DataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeS3DataConfig: personalize.PersonalizeS3DataConfig = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeS3DataConfig.property.path"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeS3DataConfig.property.kmsKeyArn"></a>

- *Type:* `string`

---

### PersonalizeSolution <a name="aws-cdk-sdk.personalize.PersonalizeSolution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeSolution: personalize.PersonalizeSolution = { ... }
```

##### `autoMLResult`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.autoMLResult"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeAutoMlResult`](#aws-cdk-sdk.personalize.PersonalizeAutoMlResult)

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.eventType"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `latestSolutionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.latestSolutionVersion"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary`](#aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.name"></a>

- *Type:* `string`

---

##### `performAutoML`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.performAutoML"></a>

- *Type:* `boolean`

---

##### `performHPO`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.performHPO"></a>

- *Type:* `boolean`

---

##### `recipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.recipeArn"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.solutionArn"></a>

- *Type:* `string`

---

##### `solutionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.solutionConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionConfig`](#aws-cdk-sdk.personalize.PersonalizeSolutionConfig)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolution.property.status"></a>

- *Type:* `string`

---

### PersonalizeSolutionConfig <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeSolutionConfig: personalize.PersonalizeSolutionConfig = { ... }
```

##### `algorithmHyperParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig.property.algorithmHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoMLConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig.property.autoMLConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeAutoMlConfig`](#aws-cdk-sdk.personalize.PersonalizeAutoMlConfig)

---

##### `eventValueThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig.property.eventValueThreshold"></a>

- *Type:* `string`

---

##### `featureTransformationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig.property.featureTransformationParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `hpoConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionConfig.property.hpoConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeHpoConfig`](#aws-cdk-sdk.personalize.PersonalizeHpoConfig)

---

### PersonalizeSolutionSummary <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeSolutionSummary: personalize.PersonalizeSolutionSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary.property.name"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary.property.solutionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeSolutionVersion <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeSolutionVersion: personalize.PersonalizeSolutionVersion = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventType`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.eventType"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `performAutoML`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.performAutoML"></a>

- *Type:* `boolean`

---

##### `performHPO`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.performHPO"></a>

- *Type:* `boolean`

---

##### `recipeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.recipeArn"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.solutionArn"></a>

- *Type:* `string`

---

##### `solutionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.solutionConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionConfig`](#aws-cdk-sdk.personalize.PersonalizeSolutionConfig)

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.status"></a>

- *Type:* `string`

---

##### `trainingHours`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.trainingHours"></a>

- *Type:* `number`

---

##### `trainingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.trainingMode"></a>

- *Type:* `string`

---

##### `tunedHPOParams`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersion.property.tunedHPOParams"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeTunedHpoParams`](#aws-cdk-sdk.personalize.PersonalizeTunedHpoParams)

---

### PersonalizeSolutionVersionSummary <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeSolutionVersionSummary: personalize.PersonalizeSolutionVersionSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary.property.status"></a>

- *Type:* `string`

---

### PersonalizeTunedHpoParams <a name="aws-cdk-sdk.personalize.PersonalizeTunedHpoParams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeTunedHpoParams: personalize.PersonalizeTunedHpoParams = { ... }
```

##### `algorithmHyperParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeTunedHpoParams.property.algorithmHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### PersonalizeUpdateCampaignRequest <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeUpdateCampaignRequest: personalize.PersonalizeUpdateCampaignRequest = { ... }
```

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest.property.campaignArn"></a>

- *Type:* `string`

---

##### `campaignConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeCampaignConfig)

---

##### `minProvisionedTPS`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest.property.minProvisionedTPS"></a>

- *Type:* `number`

---

##### `solutionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest.property.solutionVersionArn"></a>

- *Type:* `string`

---

### PersonalizeUpdateCampaignResponse <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

const personalizeUpdateCampaignResponse: personalize.PersonalizeUpdateCampaignResponse = { ... }
```

##### `campaignArn`<sup>Optional</sup> <a name="aws-cdk-sdk.personalize.PersonalizeUpdateCampaignResponse.property.campaignArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### PersonalizeResponsesCreateBatchInferenceJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateBatchInferenceJob(__scope: Construct, __resources: string[], __input: PersonalizeCreateBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `batchInferenceJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateBatchInferenceJob.property.batchInferenceJobArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateCampaign <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateCampaign(__scope: Construct, __resources: string[], __input: PersonalizeCreateCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateCampaign.property.campaignArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateDataset <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateDataset(__scope: Construct, __resources: string[], __input: PersonalizeCreateDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDataset.property.datasetArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateDatasetGroup <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateDatasetGroup(__scope: Construct, __resources: string[], __input: PersonalizeCreateDatasetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetGroup.property.datasetGroupArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateDatasetImportJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateDatasetImportJob(__scope: Construct, __resources: string[], __input: PersonalizeCreateDatasetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateDatasetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetImportJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateDatasetImportJob.property.datasetImportJobArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateEventTracker <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateEventTracker(__scope: Construct, __resources: string[], __input: PersonalizeCreateEventTrackerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateEventTrackerRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTrackerArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.property.eventTrackerArn"></a>

- *Type:* `string`

---

##### `trackingId`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateEventTracker.property.trackingId"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateFilter <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateFilter(__scope: Construct, __resources: string[], __input: PersonalizeCreateFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `filterArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateFilter.property.filterArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateSchema <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateSchema(__scope: Construct, __resources: string[], __input: PersonalizeCreateSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSchema.property.schemaArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateSolution <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateSolution(__scope: Construct, __resources: string[], __input: PersonalizeCreateSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolution.property.solutionArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesCreateSolutionVersion <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesCreateSolutionVersion(__scope: Construct, __resources: string[], __input: PersonalizeCreateSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeCreateSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesCreateSolutionVersion.property.solutionVersionArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeAlgorithm <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeAlgorithm(__scope: Construct, __resources: string[], __input: PersonalizeDescribeAlgorithmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithm.property.algorithm"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm)

---


### PersonalizeResponsesDescribeAlgorithmAlgorithm <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm(__scope: Construct, __resources: string[], __input: PersonalizeDescribeAlgorithmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.algorithmArn"></a>

- *Type:* `string`

---

##### `algorithmImage`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.algorithmImage"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.creationDateTime"></a>

- *Type:* `string`

---

##### `defaultHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.defaultHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges)

---

##### `defaultHyperParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.defaultHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `defaultResourceConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.defaultResourceConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.roleArn"></a>

- *Type:* `string`

---

##### `trainingInputMode`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithm.property.trainingInputMode"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage(__scope: Construct, __resources: string[], __input: PersonalizeDescribeAlgorithmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest)

---



#### Properties <a name="Properties"></a>

##### `dockerUri`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.property.dockerUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage.property.name"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges(__scope: Construct, __resources: string[], __input: PersonalizeDescribeAlgorithmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeAlgorithmRequest)

---



#### Properties <a name="Properties"></a>

##### `categoricalHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultCategoricalHyperParameterRange)[]

---

##### `continuousHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.property.continuousHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultContinuousHyperParameterRange)[]

---

##### `integerHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges.property.integerHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeDefaultIntegerHyperParameterRange)[]

---


### PersonalizeResponsesDescribeBatchInferenceJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJob(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `batchInferenceJob`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJob.property.batchInferenceJob"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob)

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `batchInferenceJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.batchInferenceJobArn"></a>

- *Type:* `string`

---

##### `batchInferenceJobConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.batchInferenceJobConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.failureReason"></a>

- *Type:* `string`

---

##### `filterArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.filterArn"></a>

- *Type:* `string`

---

##### `jobInput`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.jobInput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput)

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.jobName"></a>

- *Type:* `string`

---

##### `jobOutput`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.jobOutput"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput)

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `numResults`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.numResults"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.roleArn"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `itemExplorationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig.property.itemExplorationConfig"></a>

- *Type:* {[ key: string ]: `string`}

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3DataSource`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput.property.s3DataSource"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource)

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource.property.path"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3DataDestination`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput.property.s3DataDestination"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination)

---


### PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination(__scope: Construct, __resources: string[], __input: PersonalizeDescribeBatchInferenceJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeBatchInferenceJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination.property.path"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeCampaign <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeCampaign(__scope: Construct, __resources: string[], __input: PersonalizeDescribeCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaign`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaign.property.campaign"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign)

---


### PersonalizeResponsesDescribeCampaignCampaign <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeCampaignCampaign(__scope: Construct, __resources: string[], __input: PersonalizeDescribeCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.campaignArn"></a>

- *Type:* `string`

---

##### `campaignConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `latestCampaignUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.latestCampaignUpdate"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate)

---

##### `minProvisionedTps`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.minProvisionedTps"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.name"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaign.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeCampaignCampaignCampaignConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `itemExplorationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignCampaignConfig.property.itemExplorationConfig"></a>

- *Type:* {[ key: string ]: `string`}

---


### PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate(__scope: Construct, __resources: string[], __input: PersonalizeDescribeCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.campaignConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `minProvisionedTps`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.minProvisionedTps"></a>

- *Type:* `number`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `itemExplorationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig.property.itemExplorationConfig"></a>

- *Type:* {[ key: string ]: `string`}

---


### PersonalizeResponsesDescribeDataset <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDataset(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataset`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDataset.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset)

---


### PersonalizeResponsesDescribeDatasetDataset <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetDataset(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `datasetType`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.datasetType"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.name"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.schemaArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetDataset.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeDatasetGroup <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetGroup(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroup.property.datasetGroup"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup)

---


### PersonalizeResponsesDescribeDatasetGroupDatasetGroup <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.failureReason"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetGroupDatasetGroup.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeDatasetImportJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetImportJob(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetImportJob`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJob.property.datasetImportJob"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob)

---


### PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.datasetArn"></a>

- *Type:* `string`

---

##### `datasetImportJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.datasetImportJobArn"></a>

- *Type:* `string`

---

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource)

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.failureReason"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.jobName"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource(__scope: Construct, __resources: string[], __input: PersonalizeDescribeDatasetImportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeDatasetImportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource.property.dataLocation"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeEventTracker <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeEventTracker(__scope: Construct, __resources: string[], __input: PersonalizeDescribeEventTrackerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTracker`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTracker.property.eventTracker"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker)

---


### PersonalizeResponsesDescribeEventTrackerEventTracker <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeEventTrackerEventTracker(__scope: Construct, __resources: string[], __input: PersonalizeDescribeEventTrackerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeEventTrackerRequest)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.accountId"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventTrackerArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.eventTrackerArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.status"></a>

- *Type:* `string`

---

##### `trackingId`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeEventTrackerEventTracker.property.trackingId"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeFeatureTransformation <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeFeatureTransformation(__scope: Construct, __resources: string[], __input: PersonalizeDescribeFeatureTransformationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest)

---



#### Properties <a name="Properties"></a>

##### `featureTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformation.property.featureTransformation"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation)

---


### PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation(__scope: Construct, __resources: string[], __input: PersonalizeDescribeFeatureTransformationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFeatureTransformationRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.creationDateTime"></a>

- *Type:* `string`

---

##### `defaultParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.defaultParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `featureTransformationArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.featureTransformationArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeFilter <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeFilter(__scope: Construct, __resources: string[], __input: PersonalizeDescribeFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilter.property.filter"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter)

---


### PersonalizeResponsesDescribeFilterFilter <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeFilterFilter(__scope: Construct, __resources: string[], __input: PersonalizeDescribeFilterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeFilterRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.failureReason"></a>

- *Type:* `string`

---

##### `filterArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.filterArn"></a>

- *Type:* `string`

---

##### `filterExpression`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.filterExpression"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeFilterFilter.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeRecipe <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeRecipe(__scope: Construct, __resources: string[], __input: PersonalizeDescribeRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `recipe`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipe.property.recipe"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe)

---


### PersonalizeResponsesDescribeRecipeRecipe <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeRecipeRecipe(__scope: Construct, __resources: string[], __input: PersonalizeDescribeRecipeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeRecipeRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.algorithmArn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.creationDateTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.description"></a>

- *Type:* `string`

---

##### `featureTransformationArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.featureTransformationArn"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.name"></a>

- *Type:* `string`

---

##### `recipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.recipeArn"></a>

- *Type:* `string`

---

##### `recipeType`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.recipeType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeRecipeRecipe.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSchema <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSchema(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchema.property.schema"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema)

---


### PersonalizeResponsesDescribeSchemaSchema <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSchemaSchema(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.property.creationDateTime"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.property.schema"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSchemaSchema.property.schemaArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolution <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolution(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `solution`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolution.property.solution"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution)

---


### PersonalizeResponsesDescribeSolutionSolution <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolution(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `autoMlResult`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.autoMlResult"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult)

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventType`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.eventType"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `latestSolutionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.latestSolutionVersion"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.name"></a>

- *Type:* `string`

---

##### `performAutoMl`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.performAutoMl"></a>

- *Type:* `boolean`

---

##### `performHpo`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.performHpo"></a>

- *Type:* `boolean`

---

##### `recipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.recipeArn"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.solutionArn"></a>

- *Type:* `string`

---

##### `solutionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.solutionConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolution.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionSolutionAutoMlResult <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `bestRecipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionAutoMlResult.property.bestRecipeArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.property.creationDateTime"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion.property.status"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmHyperParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.property.algorithmHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoMlConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.property.autoMlConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig)

---

##### `eventValueThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.property.eventValueThreshold"></a>

- *Type:* `string`

---

##### `featureTransformationParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.property.featureTransformationParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `hpoConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfig.property.hpoConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig)

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.property.metricName"></a>

- *Type:* `string`

---

##### `recipeList`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig.property.recipeList"></a>

- *Type:* `string`[]

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges)

---

##### `hpoObjective`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.property.hpoObjective"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective)

---

##### `hpoResourceConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig.property.hpoResourceConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig)

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `categoricalHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange)[]

---

##### `continuousHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange)[]

---

##### `integerHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange)[]

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.property.metricName"></a>

- *Type:* `string`

---

##### `metricRegex`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.property.metricRegex"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective.property.type"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionRequest)

---



#### Properties <a name="Properties"></a>

##### `maxNumberOfTrainingJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs"></a>

- *Type:* `string`

---

##### `maxParallelTrainingJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionVersion <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersion(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `solutionVersion`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersion.property.solutionVersion"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion)

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersion <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.creationDateTime"></a>

- *Type:* `string`

---

##### `datasetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.datasetGroupArn"></a>

- *Type:* `string`

---

##### `eventType`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.eventType"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.lastUpdatedDateTime"></a>

- *Type:* `string`

---

##### `performAutoMl`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.performAutoMl"></a>

- *Type:* `boolean`

---

##### `performHpo`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.performHpo"></a>

- *Type:* `boolean`

---

##### `recipeArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.recipeArn"></a>

- *Type:* `string`

---

##### `solutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.solutionArn"></a>

- *Type:* `string`

---

##### `solutionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.solutionConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig)

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.solutionVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.status"></a>

- *Type:* `string`

---

##### `trainingHours`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.trainingHours"></a>

- *Type:* `number`

---

##### `trainingMode`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.trainingMode"></a>

- *Type:* `string`

---

##### `tunedHpoParams`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersion.property.tunedHpoParams"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams)

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmHyperParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.property.algorithmHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoMlConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.property.autoMlConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig)

---

##### `eventValueThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.property.eventValueThreshold"></a>

- *Type:* `string`

---

##### `featureTransformationParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.property.featureTransformationParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `hpoConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig.property.hpoConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig)

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.property.metricName"></a>

- *Type:* `string`

---

##### `recipeList`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig.property.recipeList"></a>

- *Type:* `string`[]

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges)

---

##### `hpoObjective`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.property.hpoObjective"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective)

---

##### `hpoResourceConfig`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig.property.hpoResourceConfig"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig`](#aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig)

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `categoricalHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeCategoricalHyperParameterRange)[]

---

##### `continuousHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeContinuousHyperParameterRange)[]

---

##### `integerHyperParameterRanges`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange`](#aws-cdk-sdk.personalize.PersonalizeIntegerHyperParameterRange)[]

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.property.metricName"></a>

- *Type:* `string`

---

##### `metricRegex`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.property.metricRegex"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective.property.type"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `maxNumberOfTrainingJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs"></a>

- *Type:* `string`

---

##### `maxParallelTrainingJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs"></a>

- *Type:* `string`

---


### PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams(__scope: Construct, __resources: string[], __input: PersonalizeDescribeSolutionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest`](#aws-cdk-sdk.personalize.PersonalizeDescribeSolutionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithmHyperParameters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams.property.algorithmHyperParameters"></a>

- *Type:* {[ key: string ]: `string`}

---


### PersonalizeResponsesFetchSolutionMetrics <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesFetchSolutionMetrics(__scope: Construct, __resources: string[], __input: PersonalizeGetSolutionMetricsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest`](#aws-cdk-sdk.personalize.PersonalizeGetSolutionMetricsRequest)

---



#### Properties <a name="Properties"></a>

##### `metrics`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.property.metrics"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `solutionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesFetchSolutionMetrics.property.solutionVersionArn"></a>

- *Type:* `string`

---


### PersonalizeResponsesListBatchInferenceJobs <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListBatchInferenceJobs(__scope: Construct, __resources: string[], __input: PersonalizeListBatchInferenceJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest`](#aws-cdk-sdk.personalize.PersonalizeListBatchInferenceJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `batchInferenceJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.property.batchInferenceJobs"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary`](#aws-cdk-sdk.personalize.PersonalizeBatchInferenceJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListBatchInferenceJobs.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListCampaigns <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListCampaigns(__scope: Construct, __resources: string[], __input: PersonalizeListCampaignsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest`](#aws-cdk-sdk.personalize.PersonalizeListCampaignsRequest)

---



#### Properties <a name="Properties"></a>

##### `campaigns`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.property.campaigns"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeCampaignSummary`](#aws-cdk-sdk.personalize.PersonalizeCampaignSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListCampaigns.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListDatasetGroups <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListDatasetGroups(__scope: Construct, __resources: string[], __input: PersonalizeListDatasetGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.property.datasetGroups"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetGroupSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetGroups.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListDatasetImportJobs <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListDatasetImportJobs(__scope: Construct, __resources: string[], __input: PersonalizeListDatasetImportJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetImportJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetImportJobs`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.property.datasetImportJobs"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetImportJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasetImportJobs.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListDatasets <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListDatasets(__scope: Construct, __resources: string[], __input: PersonalizeListDatasetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest`](#aws-cdk-sdk.personalize.PersonalizeListDatasetsRequest)

---



#### Properties <a name="Properties"></a>

##### `datasets`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListDatasets.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListEventTrackers <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListEventTrackers(__scope: Construct, __resources: string[], __input: PersonalizeListEventTrackersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest`](#aws-cdk-sdk.personalize.PersonalizeListEventTrackersRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTrackers`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.property.eventTrackers"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary`](#aws-cdk-sdk.personalize.PersonalizeEventTrackerSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListEventTrackers.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListFilters <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListFilters(__scope: Construct, __resources: string[], __input: PersonalizeListFiltersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListFiltersRequest`](#aws-cdk-sdk.personalize.PersonalizeListFiltersRequest)

---



#### Properties <a name="Properties"></a>

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.property.filters"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeFilterSummary`](#aws-cdk-sdk.personalize.PersonalizeFilterSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListFilters.property.nextToken"></a>

- *Type:* `string`

---


### PersonalizeResponsesListRecipes <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListRecipes(__scope: Construct, __resources: string[], __input: PersonalizeListRecipesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListRecipesRequest`](#aws-cdk-sdk.personalize.PersonalizeListRecipesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.property.nextToken"></a>

- *Type:* `string`

---

##### `recipes`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListRecipes.property.recipes"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeRecipeSummary`](#aws-cdk-sdk.personalize.PersonalizeRecipeSummary)[]

---


### PersonalizeResponsesListSchemas <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListSchemas(__scope: Construct, __resources: string[], __input: PersonalizeListSchemasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSchemasRequest`](#aws-cdk-sdk.personalize.PersonalizeListSchemasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSchemas.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary`](#aws-cdk-sdk.personalize.PersonalizeDatasetSchemaSummary)[]

---


### PersonalizeResponsesListSolutions <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListSolutions(__scope: Construct, __resources: string[], __input: PersonalizeListSolutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest`](#aws-cdk-sdk.personalize.PersonalizeListSolutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.property.nextToken"></a>

- *Type:* `string`

---

##### `solutions`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutions.property.solutions"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionSummary`](#aws-cdk-sdk.personalize.PersonalizeSolutionSummary)[]

---


### PersonalizeResponsesListSolutionVersions <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesListSolutionVersions(__scope: Construct, __resources: string[], __input: PersonalizeListSolutionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest`](#aws-cdk-sdk.personalize.PersonalizeListSolutionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `solutionVersions`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesListSolutionVersions.property.solutionVersions"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary`](#aws-cdk-sdk.personalize.PersonalizeSolutionVersionSummary)[]

---


### PersonalizeResponsesUpdateCampaign <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign"></a>

#### Initializer <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign.Initializer"></a>

```typescript
import { personalize } from 'aws-cdk-sdk'

new personalize.PersonalizeResponsesUpdateCampaign(__scope: Construct, __resources: string[], __input: PersonalizeUpdateCampaignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest`](#aws-cdk-sdk.personalize.PersonalizeUpdateCampaignRequest)

---



#### Properties <a name="Properties"></a>

##### `campaignArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalize.PersonalizeResponsesUpdateCampaign.property.campaignArn"></a>

- *Type:* `string`

---



