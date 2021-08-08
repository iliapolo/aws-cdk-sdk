# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeBuildClient <a name="aws-cdk-sdk.codebuild.CodeBuildClient"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildClient.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchDeleteBuilds` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchDeleteBuilds"></a>

```typescript
public batchDeleteBuilds(input: CodeBuildBatchDeleteBuildsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput)

---

##### `batchGetBuildBatches` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchGetBuildBatches"></a>

```typescript
public batchGetBuildBatches(input: CodeBuildBatchGetBuildBatchesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput)

---

##### `batchGetBuilds` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchGetBuilds"></a>

```typescript
public batchGetBuilds(input: CodeBuildBatchGetBuildsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput)

---

##### `batchGetProjects` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchGetProjects"></a>

```typescript
public batchGetProjects(input: CodeBuildBatchGetProjectsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput)

---

##### `batchGetReportGroups` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchGetReportGroups"></a>

```typescript
public batchGetReportGroups(input: CodeBuildBatchGetReportGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput)

---

##### `batchGetReports` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.batchGetReports"></a>

```typescript
public batchGetReports(input: CodeBuildBatchGetReportsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput)

---

##### `createProject` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.createProject"></a>

```typescript
public createProject(input: CodeBuildCreateProjectInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---

##### `createReportGroup` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.createReportGroup"></a>

```typescript
public createReportGroup(input: CodeBuildCreateReportGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput)

---

##### `createWebhook` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.createWebhook"></a>

```typescript
public createWebhook(input: CodeBuildCreateWebhookInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput)

---

##### `deleteBuildBatch` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteBuildBatch"></a>

```typescript
public deleteBuildBatch(input: CodeBuildDeleteBuildBatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput)

---

##### `deleteProject` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteProject"></a>

```typescript
public deleteProject(input: CodeBuildDeleteProjectInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteProjectInput)

---

##### `deleteReport` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteReport"></a>

```typescript
public deleteReport(input: CodeBuildDeleteReportInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteReportInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteReportInput)

---

##### `deleteReportGroup` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteReportGroup"></a>

```typescript
public deleteReportGroup(input: CodeBuildDeleteReportGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupInput)

---

##### `deleteResourcePolicy` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteResourcePolicy"></a>

```typescript
public deleteResourcePolicy(input: CodeBuildDeleteResourcePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteResourcePolicyInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteResourcePolicyInput)

---

##### `deleteSourceCredentials` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteSourceCredentials"></a>

```typescript
public deleteSourceCredentials(input: CodeBuildDeleteSourceCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput)

---

##### `deleteWebhook` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.deleteWebhook"></a>

```typescript
public deleteWebhook(input: CodeBuildDeleteWebhookInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteWebhookInput)

---

##### `describeCodeCoverages` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.describeCodeCoverages"></a>

```typescript
public describeCodeCoverages(input: CodeBuildDescribeCodeCoveragesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput`](#aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput)

---

##### `describeTestCases` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.describeTestCases"></a>

```typescript
public describeTestCases(input: CodeBuildDescribeTestCasesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput`](#aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput)

---

##### `fetchReportGroupTrend` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.fetchReportGroupTrend"></a>

```typescript
public fetchReportGroupTrend(input: CodeBuildGetReportGroupTrendInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput`](#aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput)

---

##### `fetchResourcePolicy` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.fetchResourcePolicy"></a>

```typescript
public fetchResourcePolicy(input: CodeBuildGetResourcePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput`](#aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput)

---

##### `importSourceCredentials` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.importSourceCredentials"></a>

```typescript
public importSourceCredentials(input: CodeBuildImportSourceCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput`](#aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput)

---

##### `invalidateProjectCache` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.invalidateProjectCache"></a>

```typescript
public invalidateProjectCache(input: CodeBuildInvalidateProjectCacheInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildInvalidateProjectCacheInput`](#aws-cdk-sdk.codebuild.CodeBuildInvalidateProjectCacheInput)

---

##### `listBuildBatches` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listBuildBatches"></a>

```typescript
public listBuildBatches(input: CodeBuildListBuildBatchesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput)

---

##### `listBuildBatchesForProject` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listBuildBatchesForProject"></a>

```typescript
public listBuildBatchesForProject(input: CodeBuildListBuildBatchesForProjectInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput)

---

##### `listBuilds` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listBuilds"></a>

```typescript
public listBuilds(input: CodeBuildListBuildsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildsInput)

---

##### `listBuildsForProject` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listBuildsForProject"></a>

```typescript
public listBuildsForProject(input: CodeBuildListBuildsForProjectInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput)

---

##### `listCuratedEnvironmentImages` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listCuratedEnvironmentImages"></a>

```typescript
public listCuratedEnvironmentImages()
```

##### `listProjects` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listProjects"></a>

```typescript
public listProjects(input: CodeBuildListProjectsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildListProjectsInput)

---

##### `listReportGroups` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listReportGroups"></a>

```typescript
public listReportGroups(input: CodeBuildListReportGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput)

---

##### `listReports` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listReports"></a>

```typescript
public listReports(input: CodeBuildListReportsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportsInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportsInput)

---

##### `listReportsForReportGroup` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listReportsForReportGroup"></a>

```typescript
public listReportsForReportGroup(input: CodeBuildListReportsForReportGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput)

---

##### `listSharedProjects` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listSharedProjects"></a>

```typescript
public listSharedProjects(input: CodeBuildListSharedProjectsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput)

---

##### `listSharedReportGroups` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listSharedReportGroups"></a>

```typescript
public listSharedReportGroups(input: CodeBuildListSharedReportGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput)

---

##### `listSourceCredentials` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.listSourceCredentials"></a>

```typescript
public listSourceCredentials()
```

##### `putResourcePolicy` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.putResourcePolicy"></a>

```typescript
public putResourcePolicy(input: CodeBuildPutResourcePolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput`](#aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput)

---

##### `retryBuild` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.retryBuild"></a>

```typescript
public retryBuild(input: CodeBuildRetryBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---

##### `retryBuildBatch` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.retryBuildBatch"></a>

```typescript
public retryBuildBatch(input: CodeBuildRetryBuildBatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---

##### `startBuild` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.startBuild"></a>

```typescript
public startBuild(input: CodeBuildStartBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---

##### `startBuildBatch` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.startBuildBatch"></a>

```typescript
public startBuildBatch(input: CodeBuildStartBuildBatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---

##### `stopBuild` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.stopBuild"></a>

```typescript
public stopBuild(input: CodeBuildStopBuildInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---

##### `stopBuildBatch` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.stopBuildBatch"></a>

```typescript
public stopBuildBatch(input: CodeBuildStopBuildBatchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---

##### `updateProject` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.updateProject"></a>

```typescript
public updateProject(input: CodeBuildUpdateProjectInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---

##### `updateReportGroup` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.updateReportGroup"></a>

```typescript
public updateReportGroup(input: CodeBuildUpdateReportGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput)

---

##### `updateWebhook` <a name="aws-cdk-sdk.codebuild.CodeBuildClient.updateWebhook"></a>

```typescript
public updateWebhook(input: CodeBuildUpdateWebhookInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput)

---




## Structs <a name="Structs"></a>

### CodeBuildBatchDeleteBuildsInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchDeleteBuildsInput: codebuild.CodeBuildBatchDeleteBuildsInput = { ... }
```

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput.property.ids"></a>

- *Type:* `string`[]

---

### CodeBuildBatchDeleteBuildsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchDeleteBuildsOutput: codebuild.CodeBuildBatchDeleteBuildsOutput = { ... }
```

##### `buildsDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsOutput.property.buildsDeleted"></a>

- *Type:* `string`[]

---

##### `buildsNotDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsOutput.property.buildsNotDeleted"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted`](#aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted)[]

---

### CodeBuildBatchGetBuildBatchesInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetBuildBatchesInput: codebuild.CodeBuildBatchGetBuildBatchesInput = { ... }
```

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput.property.ids"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetBuildBatchesOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetBuildBatchesOutput: codebuild.CodeBuildBatchGetBuildBatchesOutput = { ... }
```

##### `buildBatches`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesOutput.property.buildBatches"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatch)[]

---

##### `buildBatchesNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesOutput.property.buildBatchesNotFound"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetBuildsInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetBuildsInput: codebuild.CodeBuildBatchGetBuildsInput = { ... }
```

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput.property.ids"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetBuildsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetBuildsOutput: codebuild.CodeBuildBatchGetBuildsOutput = { ... }
```

##### `builds`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsOutput.property.builds"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuild`](#aws-cdk-sdk.codebuild.CodeBuildBuild)[]

---

##### `buildsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsOutput.property.buildsNotFound"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetProjectsInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetProjectsInput: codebuild.CodeBuildBatchGetProjectsInput = { ... }
```

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput.property.names"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetProjectsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetProjectsOutput: codebuild.CodeBuildBatchGetProjectsOutput = { ... }
```

##### `projects`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsOutput.property.projects"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProject`](#aws-cdk-sdk.codebuild.CodeBuildProject)[]

---

##### `projectsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsOutput.property.projectsNotFound"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetReportGroupsInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetReportGroupsInput: codebuild.CodeBuildBatchGetReportGroupsInput = { ... }
```

##### `reportGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput.property.reportGroupArns"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetReportGroupsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetReportGroupsOutput: codebuild.CodeBuildBatchGetReportGroupsOutput = { ... }
```

##### `reportGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsOutput.property.reportGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildReportGroup)[]

---

##### `reportGroupsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsOutput.property.reportGroupsNotFound"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetReportsInput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetReportsInput: codebuild.CodeBuildBatchGetReportsInput = { ... }
```

##### `reportArns`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput.property.reportArns"></a>

- *Type:* `string`[]

---

### CodeBuildBatchGetReportsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchGetReportsOutput: codebuild.CodeBuildBatchGetReportsOutput = { ... }
```

##### `reports`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsOutput.property.reports"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReport`](#aws-cdk-sdk.codebuild.CodeBuildReport)[]

---

##### `reportsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsOutput.property.reportsNotFound"></a>

- *Type:* `string`[]

---

### CodeBuildBatchRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildBatchRestrictions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBatchRestrictions: codebuild.CodeBuildBatchRestrictions = { ... }
```

##### `computeTypesAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBatchRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---

### CodeBuildBuild <a name="aws-cdk-sdk.codebuild.CodeBuildBuild"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuild: codebuild.CodeBuildBuild = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)

---

##### `buildBatchArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.buildBatchArn"></a>

- *Type:* `string`

---

##### `buildComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.buildComplete"></a>

- *Type:* `boolean`

---

##### `buildNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.buildNumber"></a>

- *Type:* `number`

---

##### `buildStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.buildStatus"></a>

- *Type:* `string`

---

##### `cache`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `currentPhase`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.currentPhase"></a>

- *Type:* `string`

---

##### `debugSession`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.debugSession"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDebugSession`](#aws-cdk-sdk.codebuild.CodeBuildDebugSession)

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment)

---

##### `exportedEnvironmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.exportedEnvironmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable)[]

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.initiator"></a>

- *Type:* `string`

---

##### `logs`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsLocation`](#aws-cdk-sdk.codebuild.CodeBuildLogsLocation)

---

##### `networkInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildNetworkInterface`](#aws-cdk-sdk.codebuild.CodeBuildNetworkInterface)

---

##### `phases`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildPhase)[]

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `reportArns`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.reportArns"></a>

- *Type:* `string`[]

---

##### `resolvedSourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.startTime"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuild.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildVpcConfig)

---

### CodeBuildBuildArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildArtifacts: codebuild.CodeBuildBuildArtifacts = { ... }
```

##### `artifactIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.location"></a>

- *Type:* `string`

---

##### `md5sum`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.md5sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256sum`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts.property.sha256sum"></a>

- *Type:* `string`

---

### CodeBuildBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildBatch: codebuild.CodeBuildBuildBatch = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)

---

##### `buildBatchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig)

---

##### `buildBatchNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.buildBatchNumber"></a>

- *Type:* `number`

---

##### `buildBatchStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.buildBatchStatus"></a>

- *Type:* `string`

---

##### `buildGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.buildGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildGroup`](#aws-cdk-sdk.codebuild.CodeBuildBuildGroup)[]

---

##### `buildTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.buildTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `cache`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `complete`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.complete"></a>

- *Type:* `boolean`

---

##### `currentPhase`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.currentPhase"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment)

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.initiator"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `phases`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase)[]

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `resolvedSourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.startTime"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatch.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildVpcConfig)

---

### CodeBuildBuildBatchFilter <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildBatchFilter: codebuild.CodeBuildBuildBatchFilter = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter.property.status"></a>

- *Type:* `string`

---

### CodeBuildBuildBatchPhase <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildBatchPhase: codebuild.CodeBuildBuildBatchPhase = { ... }
```

##### `contexts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.contexts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildPhaseContext`](#aws-cdk-sdk.codebuild.CodeBuildPhaseContext)[]

---

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.endTime"></a>

- *Type:* `string`

---

##### `phaseStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.phaseStatus"></a>

- *Type:* `string`

---

##### `phaseType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.phaseType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase.property.startTime"></a>

- *Type:* `string`

---

### CodeBuildBuildGroup <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildGroup: codebuild.CodeBuildBuildGroup = { ... }
```

##### `currentBuildSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup.property.currentBuildSummary"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildSummary`](#aws-cdk-sdk.codebuild.CodeBuildBuildSummary)

---

##### `dependsOn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup.property.dependsOn"></a>

- *Type:* `string`[]

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup.property.identifier"></a>

- *Type:* `string`

---

##### `ignoreFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup.property.ignoreFailure"></a>

- *Type:* `boolean`

---

##### `priorBuildSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildGroup.property.priorBuildSummaryList"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildSummary`](#aws-cdk-sdk.codebuild.CodeBuildBuildSummary)[]

---

### CodeBuildBuildNotDeleted <a name="aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildNotDeleted: codebuild.CodeBuildBuildNotDeleted = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted.property.id"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted.property.statusCode"></a>

- *Type:* `string`

---

### CodeBuildBuildPhase <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildPhase: codebuild.CodeBuildBuildPhase = { ... }
```

##### `contexts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.contexts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildPhaseContext`](#aws-cdk-sdk.codebuild.CodeBuildPhaseContext)[]

---

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.endTime"></a>

- *Type:* `string`

---

##### `phaseStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.phaseStatus"></a>

- *Type:* `string`

---

##### `phaseType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.phaseType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildPhase.property.startTime"></a>

- *Type:* `string`

---

### CodeBuildBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildStatusConfig: codebuild.CodeBuildBuildStatusConfig = { ... }
```

##### `context`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---

### CodeBuildBuildSummary <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildBuildSummary: codebuild.CodeBuildBuildSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary.property.arn"></a>

- *Type:* `string`

---

##### `buildStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary.property.buildStatus"></a>

- *Type:* `string`

---

##### `primaryArtifact`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary.property.primaryArtifact"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact`](#aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact)

---

##### `requestedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary.property.requestedOn"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildBuildSummary.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact`](#aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact)[]

---

### CodeBuildCloudWatchLogsConfig <a name="aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCloudWatchLogsConfig: codebuild.CodeBuildCloudWatchLogsConfig = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig.property.status"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig.property.groupName"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig.property.streamName"></a>

- *Type:* `string`

---

### CodeBuildCodeCoverage <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCodeCoverage: codebuild.CodeBuildCodeCoverage = { ... }
```

##### `branchCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.branchCoveragePercentage"></a>

- *Type:* `number`

---

##### `branchesCovered`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.branchesCovered"></a>

- *Type:* `number`

---

##### `branchesMissed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.branchesMissed"></a>

- *Type:* `number`

---

##### `expired`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.expired"></a>

- *Type:* `string`

---

##### `filePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.filePath"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.id"></a>

- *Type:* `string`

---

##### `lineCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.lineCoveragePercentage"></a>

- *Type:* `number`

---

##### `linesCovered`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.linesCovered"></a>

- *Type:* `number`

---

##### `linesMissed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.linesMissed"></a>

- *Type:* `number`

---

##### `reportARN`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverage.property.reportARN"></a>

- *Type:* `string`

---

### CodeBuildCodeCoverageReportSummary <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCodeCoverageReportSummary: codebuild.CodeBuildCodeCoverageReportSummary = { ... }
```

##### `branchCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.branchCoveragePercentage"></a>

- *Type:* `number`

---

##### `branchesCovered`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.branchesCovered"></a>

- *Type:* `number`

---

##### `branchesMissed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.branchesMissed"></a>

- *Type:* `number`

---

##### `lineCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.lineCoveragePercentage"></a>

- *Type:* `number`

---

##### `linesCovered`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.linesCovered"></a>

- *Type:* `number`

---

##### `linesMissed`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary.property.linesMissed"></a>

- *Type:* `number`

---

### CodeBuildCreateProjectInput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateProjectInput: codebuild.CodeBuildCreateProjectInput = { ... }
```

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.name"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)

---

##### `badgeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.badgeEnabled"></a>

- *Type:* `boolean`

---

##### `buildBatchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig)

---

##### `cache`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.encryptionKey"></a>

- *Type:* `string`

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `logsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.logsConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `queuedTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySources`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.sourceVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildVpcConfig)

---

### CodeBuildCreateProjectOutput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateProjectOutput: codebuild.CodeBuildCreateProjectOutput = { ... }
```

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateProjectOutput.property.project"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProject`](#aws-cdk-sdk.codebuild.CodeBuildProject)

---

### CodeBuildCreateReportGroupInput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateReportGroupInput: codebuild.CodeBuildCreateReportGroupInput = { ... }
```

##### `exportConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildReportExportConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput.property.type"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

### CodeBuildCreateReportGroupOutput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateReportGroupOutput: codebuild.CodeBuildCreateReportGroupOutput = { ... }
```

##### `reportGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupOutput.property.reportGroup"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildReportGroup)

---

### CodeBuildCreateWebhookInput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateWebhookInput: codebuild.CodeBuildCreateWebhookInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput.property.projectName"></a>

- *Type:* `string`

---

##### `branchFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

### CodeBuildCreateWebhookOutput <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildCreateWebhookOutput: codebuild.CodeBuildCreateWebhookOutput = { ... }
```

##### `webhook`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildCreateWebhookOutput.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhook`](#aws-cdk-sdk.codebuild.CodeBuildWebhook)

---

### CodeBuildDebugSession <a name="aws-cdk-sdk.codebuild.CodeBuildDebugSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDebugSession: codebuild.CodeBuildDebugSession = { ... }
```

##### `sessionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDebugSession.property.sessionEnabled"></a>

- *Type:* `boolean`

---

##### `sessionTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDebugSession.property.sessionTarget"></a>

- *Type:* `string`

---

### CodeBuildDeleteBuildBatchInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteBuildBatchInput: codebuild.CodeBuildDeleteBuildBatchInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput.property.id"></a>

- *Type:* `string`

---

### CodeBuildDeleteBuildBatchOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteBuildBatchOutput: codebuild.CodeBuildDeleteBuildBatchOutput = { ... }
```

##### `buildsDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchOutput.property.buildsDeleted"></a>

- *Type:* `string`[]

---

##### `buildsNotDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchOutput.property.buildsNotDeleted"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted`](#aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted)[]

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchOutput.property.statusCode"></a>

- *Type:* `string`

---

### CodeBuildDeleteProjectInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteProjectInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteProjectInput: codebuild.CodeBuildDeleteProjectInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteProjectInput.property.name"></a>

- *Type:* `string`

---

### CodeBuildDeleteProjectOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteProjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteProjectOutput: codebuild.CodeBuildDeleteProjectOutput = { ... }
```

### CodeBuildDeleteReportGroupInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteReportGroupInput: codebuild.CodeBuildDeleteReportGroupInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupInput.property.arn"></a>

- *Type:* `string`

---

##### `deleteReports`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupInput.property.deleteReports"></a>

- *Type:* `boolean`

---

### CodeBuildDeleteReportGroupOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteReportGroupOutput: codebuild.CodeBuildDeleteReportGroupOutput = { ... }
```

### CodeBuildDeleteReportInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteReportInput: codebuild.CodeBuildDeleteReportInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportInput.property.arn"></a>

- *Type:* `string`

---

### CodeBuildDeleteReportOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteReportOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteReportOutput: codebuild.CodeBuildDeleteReportOutput = { ... }
```

### CodeBuildDeleteResourcePolicyInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteResourcePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteResourcePolicyInput: codebuild.CodeBuildDeleteResourcePolicyInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteResourcePolicyInput.property.resourceArn"></a>

- *Type:* `string`

---

### CodeBuildDeleteResourcePolicyOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteResourcePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteResourcePolicyOutput: codebuild.CodeBuildDeleteResourcePolicyOutput = { ... }
```

### CodeBuildDeleteSourceCredentialsInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteSourceCredentialsInput: codebuild.CodeBuildDeleteSourceCredentialsInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput.property.arn"></a>

- *Type:* `string`

---

### CodeBuildDeleteSourceCredentialsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteSourceCredentialsOutput: codebuild.CodeBuildDeleteSourceCredentialsOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsOutput.property.arn"></a>

- *Type:* `string`

---

### CodeBuildDeleteWebhookInput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteWebhookInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteWebhookInput: codebuild.CodeBuildDeleteWebhookInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteWebhookInput.property.projectName"></a>

- *Type:* `string`

---

### CodeBuildDeleteWebhookOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDeleteWebhookOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDeleteWebhookOutput: codebuild.CodeBuildDeleteWebhookOutput = { ... }
```

### CodeBuildDescribeCodeCoveragesInput <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDescribeCodeCoveragesInput: codebuild.CodeBuildDescribeCodeCoveragesInput = { ... }
```

##### `reportArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.reportArn"></a>

- *Type:* `string`

---

##### `maxLineCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.maxLineCoveragePercentage"></a>

- *Type:* `number`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `minLineCoveragePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.minLineCoveragePercentage"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildDescribeCodeCoveragesOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDescribeCodeCoveragesOutput: codebuild.CodeBuildDescribeCodeCoveragesOutput = { ... }
```

##### `codeCoverages`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesOutput.property.codeCoverages"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCodeCoverage`](#aws-cdk-sdk.codebuild.CodeBuildCodeCoverage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildDescribeTestCasesInput <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDescribeTestCasesInput: codebuild.CodeBuildDescribeTestCasesInput = { ... }
```

##### `reportArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput.property.reportArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTestCaseFilter`](#aws-cdk-sdk.codebuild.CodeBuildTestCaseFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildDescribeTestCasesOutput <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildDescribeTestCasesOutput: codebuild.CodeBuildDescribeTestCasesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `testCases`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesOutput.property.testCases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTestCase`](#aws-cdk-sdk.codebuild.CodeBuildTestCase)[]

---

### CodeBuildEnvironmentImage <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildEnvironmentImage: codebuild.CodeBuildEnvironmentImage = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage.property.name"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage.property.versions"></a>

- *Type:* `string`[]

---

### CodeBuildEnvironmentLanguage <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentLanguage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildEnvironmentLanguage: codebuild.CodeBuildEnvironmentLanguage = { ... }
```

##### `images`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentLanguage.property.images"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentImage)[]

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentLanguage.property.language"></a>

- *Type:* `string`

---

### CodeBuildEnvironmentPlatform <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildEnvironmentPlatform: codebuild.CodeBuildEnvironmentPlatform = { ... }
```

##### `languages`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform.property.languages"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentLanguage`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentLanguage)[]

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform.property.platform"></a>

- *Type:* `string`

---

### CodeBuildEnvironmentVariable <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildEnvironmentVariable: codebuild.CodeBuildEnvironmentVariable = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable.property.value"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable.property.type"></a>

- *Type:* `string`

---

### CodeBuildExportedEnvironmentVariable <a name="aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildExportedEnvironmentVariable: codebuild.CodeBuildExportedEnvironmentVariable = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable.property.value"></a>

- *Type:* `string`

---

### CodeBuildGetReportGroupTrendInput <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildGetReportGroupTrendInput: codebuild.CodeBuildGetReportGroupTrendInput = { ... }
```

##### `reportGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput.property.reportGroupArn"></a>

- *Type:* `string`

---

##### `trendField`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput.property.trendField"></a>

- *Type:* `string`

---

##### `numOfReports`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput.property.numOfReports"></a>

- *Type:* `number`

---

### CodeBuildGetReportGroupTrendOutput <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildGetReportGroupTrendOutput: codebuild.CodeBuildGetReportGroupTrendOutput = { ... }
```

##### `rawData`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendOutput.property.rawData"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportWithRawData`](#aws-cdk-sdk.codebuild.CodeBuildReportWithRawData)[]

---

##### `stats`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendOutput.property.stats"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats`](#aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats)

---

### CodeBuildGetResourcePolicyInput <a name="aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildGetResourcePolicyInput: codebuild.CodeBuildGetResourcePolicyInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput.property.resourceArn"></a>

- *Type:* `string`

---

### CodeBuildGetResourcePolicyOutput <a name="aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildGetResourcePolicyOutput: codebuild.CodeBuildGetResourcePolicyOutput = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyOutput.property.policy"></a>

- *Type:* `string`

---

### CodeBuildGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildGitSubmodulesConfig: codebuild.CodeBuildGitSubmodulesConfig = { ... }
```

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---

### CodeBuildImportSourceCredentialsInput <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildImportSourceCredentialsInput: codebuild.CodeBuildImportSourceCredentialsInput = { ... }
```

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput.property.authType"></a>

- *Type:* `string`

---

##### `serverType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput.property.serverType"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput.property.token"></a>

- *Type:* `string`

---

##### `shouldOverwrite`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput.property.shouldOverwrite"></a>

- *Type:* `boolean`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput.property.username"></a>

- *Type:* `string`

---

### CodeBuildImportSourceCredentialsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildImportSourceCredentialsOutput: codebuild.CodeBuildImportSourceCredentialsOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsOutput.property.arn"></a>

- *Type:* `string`

---

### CodeBuildInvalidateProjectCacheInput <a name="aws-cdk-sdk.codebuild.CodeBuildInvalidateProjectCacheInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildInvalidateProjectCacheInput: codebuild.CodeBuildInvalidateProjectCacheInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildInvalidateProjectCacheInput.property.projectName"></a>

- *Type:* `string`

---

### CodeBuildInvalidateProjectCacheOutput <a name="aws-cdk-sdk.codebuild.CodeBuildInvalidateProjectCacheOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildInvalidateProjectCacheOutput: codebuild.CodeBuildInvalidateProjectCacheOutput = { ... }
```

### CodeBuildListBuildBatchesForProjectInput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildBatchesForProjectInput: codebuild.CodeBuildListBuildBatchesForProjectInput = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput.property.nextToken"></a>

- *Type:* `string`

---

##### `projectName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput.property.projectName"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListBuildBatchesForProjectOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildBatchesForProjectOutput: codebuild.CodeBuildListBuildBatchesForProjectOutput = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectOutput.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildListBuildBatchesInput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildBatchesInput: codebuild.CodeBuildListBuildBatchesInput = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListBuildBatchesOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildBatchesOutput: codebuild.CodeBuildListBuildBatchesOutput = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesOutput.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildListBuildsForProjectInput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildsForProjectInput: codebuild.CodeBuildListBuildsForProjectInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput.property.projectName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListBuildsForProjectOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildsForProjectOutput: codebuild.CodeBuildListBuildsForProjectOutput = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectOutput.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildListBuildsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildsInput: codebuild.CodeBuildListBuildsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListBuildsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListBuildsOutput: codebuild.CodeBuildListBuildsOutput = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsOutput.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListBuildsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeBuildListCuratedEnvironmentImagesInput <a name="aws-cdk-sdk.codebuild.CodeBuildListCuratedEnvironmentImagesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListCuratedEnvironmentImagesInput: codebuild.CodeBuildListCuratedEnvironmentImagesInput = { ... }
```

### CodeBuildListCuratedEnvironmentImagesOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListCuratedEnvironmentImagesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListCuratedEnvironmentImagesOutput: codebuild.CodeBuildListCuratedEnvironmentImagesOutput = { ... }
```

##### `platforms`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListCuratedEnvironmentImagesOutput.property.platforms"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform)[]

---

### CodeBuildListProjectsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListProjectsInput: codebuild.CodeBuildListProjectsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListProjectsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListProjectsOutput: codebuild.CodeBuildListProjectsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListProjectsOutput.property.projects"></a>

- *Type:* `string`[]

---

### CodeBuildListReportGroupsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportGroupsInput: codebuild.CodeBuildListReportGroupsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListReportGroupsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportGroupsOutput: codebuild.CodeBuildListReportGroupsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `reportGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportGroupsOutput.property.reportGroups"></a>

- *Type:* `string`[]

---

### CodeBuildListReportsForReportGroupInput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportsForReportGroupInput: codebuild.CodeBuildListReportsForReportGroupInput = { ... }
```

##### `reportGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput.property.reportGroupArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportFilter`](#aws-cdk-sdk.codebuild.CodeBuildReportFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListReportsForReportGroupOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportsForReportGroupOutput: codebuild.CodeBuildListReportsForReportGroupOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `reports`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupOutput.property.reports"></a>

- *Type:* `string`[]

---

### CodeBuildListReportsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportsInput: codebuild.CodeBuildListReportsInput = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportFilter`](#aws-cdk-sdk.codebuild.CodeBuildReportFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListReportsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListReportsOutput: codebuild.CodeBuildListReportsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `reports`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListReportsOutput.property.reports"></a>

- *Type:* `string`[]

---

### CodeBuildListSharedProjectsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSharedProjectsInput: codebuild.CodeBuildListSharedProjectsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListSharedProjectsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSharedProjectsOutput: codebuild.CodeBuildListSharedProjectsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsOutput.property.projects"></a>

- *Type:* `string`[]

---

### CodeBuildListSharedReportGroupsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSharedReportGroupsInput: codebuild.CodeBuildListSharedReportGroupsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeBuildListSharedReportGroupsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSharedReportGroupsOutput: codebuild.CodeBuildListSharedReportGroupsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `reportGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsOutput.property.reportGroups"></a>

- *Type:* `string`[]

---

### CodeBuildListSourceCredentialsInput <a name="aws-cdk-sdk.codebuild.CodeBuildListSourceCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSourceCredentialsInput: codebuild.CodeBuildListSourceCredentialsInput = { ... }
```

### CodeBuildListSourceCredentialsOutput <a name="aws-cdk-sdk.codebuild.CodeBuildListSourceCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildListSourceCredentialsOutput: codebuild.CodeBuildListSourceCredentialsOutput = { ... }
```

##### `sourceCredentialsInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildListSourceCredentialsOutput.property.sourceCredentialsInfos"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo`](#aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo)[]

---

### CodeBuildLogsConfig <a name="aws-cdk-sdk.codebuild.CodeBuildLogsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildLogsConfig: codebuild.CodeBuildLogsConfig = { ... }
```

##### `cloudWatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig)

---

##### `s3Logs`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig)

---

### CodeBuildLogsLocation <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildLogsLocation: codebuild.CodeBuildLogsLocation = { ... }
```

##### `cloudWatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildCloudWatchLogsConfig)

---

##### `cloudWatchLogsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.cloudWatchLogsArn"></a>

- *Type:* `string`

---

##### `deepLink`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.deepLink"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.groupName"></a>

- *Type:* `string`

---

##### `s3DeepLink`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.s3DeepLink"></a>

- *Type:* `string`

---

##### `s3Logs`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig)

---

##### `s3LogsArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.s3LogsArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildLogsLocation.property.streamName"></a>

- *Type:* `string`

---

### CodeBuildNetworkInterface <a name="aws-cdk-sdk.codebuild.CodeBuildNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildNetworkInterface: codebuild.CodeBuildNetworkInterface = { ... }
```

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildNetworkInterface.property.subnetId"></a>

- *Type:* `string`

---

### CodeBuildPhaseContext <a name="aws-cdk-sdk.codebuild.CodeBuildPhaseContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildPhaseContext: codebuild.CodeBuildPhaseContext = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildPhaseContext.property.message"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildPhaseContext.property.statusCode"></a>

- *Type:* `string`

---

### CodeBuildProject <a name="aws-cdk-sdk.codebuild.CodeBuildProject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProject: codebuild.CodeBuildProject = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)

---

##### `badge`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.badge"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBadge`](#aws-cdk-sdk.codebuild.CodeBuildProjectBadge)

---

##### `buildBatchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig)

---

##### `cache`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.encryptionKey"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment)

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.lastModified"></a>

- *Type:* `string`

---

##### `logsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.logsConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.name"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySources`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.sourceVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildVpcConfig)

---

##### `webhook`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProject.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhook`](#aws-cdk-sdk.codebuild.CodeBuildWebhook)

---

### CodeBuildProjectArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectArtifacts: codebuild.CodeBuildProjectArtifacts = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.type"></a>

- *Type:* `string`

---

##### `artifactIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.name"></a>

- *Type:* `string`

---

##### `namespaceType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.namespaceType"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `packaging`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts.property.path"></a>

- *Type:* `string`

---

### CodeBuildProjectBadge <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBadge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectBadge: codebuild.CodeBuildProjectBadge = { ... }
```

##### `badgeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBadge.property.badgeEnabled"></a>

- *Type:* `boolean`

---

##### `badgeRequestUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBadge.property.badgeRequestUrl"></a>

- *Type:* `string`

---

### CodeBuildProjectBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectBuildBatchConfig: codebuild.CodeBuildProjectBuildBatchConfig = { ... }
```

##### `combineArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildBatchRestrictions)

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---

### CodeBuildProjectCache <a name="aws-cdk-sdk.codebuild.CodeBuildProjectCache"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectCache: codebuild.CodeBuildProjectCache = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectCache.property.type"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectCache.property.modes"></a>

- *Type:* `string`[]

---

### CodeBuildProjectEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectEnvironment: codebuild.CodeBuildProjectEnvironment = { ... }
```

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.image"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.type"></a>

- *Type:* `string`

---

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `imagePullCredentialsType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildRegistryCredential)

---

### CodeBuildProjectFileSystemLocation <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectFileSystemLocation: codebuild.CodeBuildProjectFileSystemLocation = { ... }
```

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation.property.identifier"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation.property.location"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation.property.mountOptions"></a>

- *Type:* `string`

---

##### `mountPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation.property.mountPoint"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation.property.type"></a>

- *Type:* `string`

---

### CodeBuildProjectSource <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectSource: codebuild.CodeBuildProjectSource = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.type"></a>

- *Type:* `string`

---

##### `auth`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildSourceAuth)

---

##### `buildspec`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

### CodeBuildProjectSourceVersion <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildProjectSourceVersion: codebuild.CodeBuildProjectSourceVersion = { ... }
```

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion.property.sourceVersion"></a>

- *Type:* `string`

---

### CodeBuildPutResourcePolicyInput <a name="aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildPutResourcePolicyInput: codebuild.CodeBuildPutResourcePolicyInput = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput.property.resourceArn"></a>

- *Type:* `string`

---

### CodeBuildPutResourcePolicyOutput <a name="aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildPutResourcePolicyOutput: codebuild.CodeBuildPutResourcePolicyOutput = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyOutput.property.resourceArn"></a>

- *Type:* `string`

---

### CodeBuildRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildRegistryCredential"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildRegistryCredential: codebuild.CodeBuildRegistryCredential = { ... }
```

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---

### CodeBuildReport <a name="aws-cdk-sdk.codebuild.CodeBuildReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReport: codebuild.CodeBuildReport = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.arn"></a>

- *Type:* `string`

---

##### `codeCoverageSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.codeCoverageSummary"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary`](#aws-cdk-sdk.codebuild.CodeBuildCodeCoverageReportSummary)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.created"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.executionId"></a>

- *Type:* `string`

---

##### `expired`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.expired"></a>

- *Type:* `string`

---

##### `exportConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildReportExportConfig)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.name"></a>

- *Type:* `string`

---

##### `reportGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.reportGroupArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.status"></a>

- *Type:* `string`

---

##### `testSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.testSummary"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTestReportSummary`](#aws-cdk-sdk.codebuild.CodeBuildTestReportSummary)

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.truncated"></a>

- *Type:* `boolean`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReport.property.type"></a>

- *Type:* `string`

---

### CodeBuildReportExportConfig <a name="aws-cdk-sdk.codebuild.CodeBuildReportExportConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReportExportConfig: codebuild.CodeBuildReportExportConfig = { ... }
```

##### `exportConfigType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportExportConfig.property.exportConfigType"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportExportConfig.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig)

---

### CodeBuildReportFilter <a name="aws-cdk-sdk.codebuild.CodeBuildReportFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReportFilter: codebuild.CodeBuildReportFilter = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportFilter.property.status"></a>

- *Type:* `string`

---

### CodeBuildReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReportGroup: codebuild.CodeBuildReportGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.created"></a>

- *Type:* `string`

---

##### `exportConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildReportExportConfig)

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.lastModified"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroup.property.type"></a>

- *Type:* `string`

---

### CodeBuildReportGroupTrendStats <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReportGroupTrendStats: codebuild.CodeBuildReportGroupTrendStats = { ... }
```

##### `average`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats.property.average"></a>

- *Type:* `string`

---

##### `max`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats.property.max"></a>

- *Type:* `string`

---

##### `min`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportGroupTrendStats.property.min"></a>

- *Type:* `string`

---

### CodeBuildReportWithRawData <a name="aws-cdk-sdk.codebuild.CodeBuildReportWithRawData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildReportWithRawData: codebuild.CodeBuildReportWithRawData = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportWithRawData.property.data"></a>

- *Type:* `string`

---

##### `reportArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildReportWithRawData.property.reportArn"></a>

- *Type:* `string`

---

### CodeBuildResolvedArtifact <a name="aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildResolvedArtifact: codebuild.CodeBuildResolvedArtifact = { ... }
```

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact.property.identifier"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResolvedArtifact.property.type"></a>

- *Type:* `string`

---

### CodeBuildRetryBuildBatchInput <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildRetryBuildBatchInput: codebuild.CodeBuildRetryBuildBatchInput = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput.property.id"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `retryType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput.property.retryType"></a>

- *Type:* `string`

---

### CodeBuildRetryBuildBatchOutput <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildRetryBuildBatchOutput: codebuild.CodeBuildRetryBuildBatchOutput = { ... }
```

##### `buildBatch`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchOutput.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatch)

---

### CodeBuildRetryBuildInput <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildRetryBuildInput: codebuild.CodeBuildRetryBuildInput = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput.property.id"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput.property.idempotencyToken"></a>

- *Type:* `string`

---

### CodeBuildRetryBuildOutput <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildRetryBuildOutput: codebuild.CodeBuildRetryBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildRetryBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuild`](#aws-cdk-sdk.codebuild.CodeBuildBuild)

---

### CodeBuildS3LogsConfig <a name="aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildS3LogsConfig: codebuild.CodeBuildS3LogsConfig = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig.property.status"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3LogsConfig.property.location"></a>

- *Type:* `string`

---

### CodeBuildS3ReportExportConfig <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildS3ReportExportConfig: codebuild.CodeBuildS3ReportExportConfig = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig.property.bucket"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig.property.encryptionKey"></a>

- *Type:* `string`

---

##### `packaging`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildS3ReportExportConfig.property.path"></a>

- *Type:* `string`

---

### CodeBuildSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildSourceAuth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildSourceAuth: codebuild.CodeBuildSourceAuth = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildSourceAuth.property.type"></a>

- *Type:* `string`

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildSourceAuth.property.resource"></a>

- *Type:* `string`

---

### CodeBuildSourceCredentialsInfo <a name="aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildSourceCredentialsInfo: codebuild.CodeBuildSourceCredentialsInfo = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo.property.arn"></a>

- *Type:* `string`

---

##### `authType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo.property.authType"></a>

- *Type:* `string`

---

##### `serverType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo.property.serverType"></a>

- *Type:* `string`

---

### CodeBuildStartBuildBatchInput <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStartBuildBatchInput: codebuild.CodeBuildStartBuildBatchInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.projectName"></a>

- *Type:* `string`

---

##### `artifactsOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.artifactsOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)

---

##### `buildBatchConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.buildBatchConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig)

---

##### `buildspecOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.buildspecOverride"></a>

- *Type:* `string`

---

##### `buildTimeoutInMinutesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.buildTimeoutInMinutesOverride"></a>

- *Type:* `number`

---

##### `cacheOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.cacheOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `certificateOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.certificateOverride"></a>

- *Type:* `string`

---

##### `computeTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.computeTypeOverride"></a>

- *Type:* `string`

---

##### `encryptionKeyOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.encryptionKeyOverride"></a>

- *Type:* `string`

---

##### `environmentTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.environmentTypeOverride"></a>

- *Type:* `string`

---

##### `environmentVariablesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.environmentVariablesOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `gitCloneDepthOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.gitCloneDepthOverride"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.gitSubmodulesConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig)

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `imageOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.imageOverride"></a>

- *Type:* `string`

---

##### `imagePullCredentialsTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.imagePullCredentialsTypeOverride"></a>

- *Type:* `string`

---

##### `insecureSslOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.insecureSslOverride"></a>

- *Type:* `boolean`

---

##### `logsConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.logsConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `privilegedModeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.privilegedModeOverride"></a>

- *Type:* `boolean`

---

##### `queuedTimeoutInMinutesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.queuedTimeoutInMinutesOverride"></a>

- *Type:* `number`

---

##### `registryCredentialOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.registryCredentialOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildRegistryCredential)

---

##### `reportBuildBatchStatusOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.reportBuildBatchStatusOverride"></a>

- *Type:* `boolean`

---

##### `secondaryArtifactsOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.secondaryArtifactsOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySourcesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.secondarySourcesOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourcesVersionOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.secondarySourcesVersionOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRoleOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.serviceRoleOverride"></a>

- *Type:* `string`

---

##### `sourceAuthOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.sourceAuthOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildSourceAuth)

---

##### `sourceLocationOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.sourceLocationOverride"></a>

- *Type:* `string`

---

##### `sourceTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.sourceTypeOverride"></a>

- *Type:* `string`

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput.property.sourceVersion"></a>

- *Type:* `string`

---

### CodeBuildStartBuildBatchOutput <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStartBuildBatchOutput: codebuild.CodeBuildStartBuildBatchOutput = { ... }
```

##### `buildBatch`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchOutput.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatch)

---

### CodeBuildStartBuildInput <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStartBuildInput: codebuild.CodeBuildStartBuildInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.projectName"></a>

- *Type:* `string`

---

##### `artifactsOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.artifactsOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)

---

##### `buildspecOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.buildspecOverride"></a>

- *Type:* `string`

---

##### `buildStatusConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.buildStatusConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildBuildStatusConfig)

---

##### `cacheOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.cacheOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `certificateOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.certificateOverride"></a>

- *Type:* `string`

---

##### `computeTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.computeTypeOverride"></a>

- *Type:* `string`

---

##### `debugSessionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.debugSessionEnabled"></a>

- *Type:* `boolean`

---

##### `encryptionKeyOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.encryptionKeyOverride"></a>

- *Type:* `string`

---

##### `environmentTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.environmentTypeOverride"></a>

- *Type:* `string`

---

##### `environmentVariablesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.environmentVariablesOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `gitCloneDepthOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.gitCloneDepthOverride"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.gitSubmodulesConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildGitSubmodulesConfig)

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `imageOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.imageOverride"></a>

- *Type:* `string`

---

##### `imagePullCredentialsTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.imagePullCredentialsTypeOverride"></a>

- *Type:* `string`

---

##### `insecureSslOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.insecureSslOverride"></a>

- *Type:* `boolean`

---

##### `logsConfigOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.logsConfigOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `privilegedModeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.privilegedModeOverride"></a>

- *Type:* `boolean`

---

##### `queuedTimeoutInMinutesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.queuedTimeoutInMinutesOverride"></a>

- *Type:* `number`

---

##### `registryCredentialOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.registryCredentialOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildRegistryCredential)

---

##### `reportBuildStatusOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.reportBuildStatusOverride"></a>

- *Type:* `boolean`

---

##### `secondaryArtifactsOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.secondaryArtifactsOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySourcesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.secondarySourcesOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourcesVersionOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.secondarySourcesVersionOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRoleOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.serviceRoleOverride"></a>

- *Type:* `string`

---

##### `sourceAuthOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.sourceAuthOverride"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildSourceAuth)

---

##### `sourceLocationOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.sourceLocationOverride"></a>

- *Type:* `string`

---

##### `sourceTypeOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.sourceTypeOverride"></a>

- *Type:* `string`

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.sourceVersion"></a>

- *Type:* `string`

---

##### `timeoutInMinutesOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildInput.property.timeoutInMinutesOverride"></a>

- *Type:* `number`

---

### CodeBuildStartBuildOutput <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStartBuildOutput: codebuild.CodeBuildStartBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStartBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuild`](#aws-cdk-sdk.codebuild.CodeBuildBuild)

---

### CodeBuildStopBuildBatchInput <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStopBuildBatchInput: codebuild.CodeBuildStopBuildBatchInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput.property.id"></a>

- *Type:* `string`

---

### CodeBuildStopBuildBatchOutput <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStopBuildBatchOutput: codebuild.CodeBuildStopBuildBatchOutput = { ... }
```

##### `buildBatch`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchOutput.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatch)

---

### CodeBuildStopBuildInput <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStopBuildInput: codebuild.CodeBuildStopBuildInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildInput.property.id"></a>

- *Type:* `string`

---

### CodeBuildStopBuildOutput <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildStopBuildOutput: codebuild.CodeBuildStopBuildOutput = { ... }
```

##### `build2`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildStopBuildOutput.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuild`](#aws-cdk-sdk.codebuild.CodeBuildBuild)

---

### CodeBuildTag <a name="aws-cdk-sdk.codebuild.CodeBuildTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildTag: codebuild.CodeBuildTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTag.property.value"></a>

- *Type:* `string`

---

### CodeBuildTestCase <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildTestCase: codebuild.CodeBuildTestCase = { ... }
```

##### `durationInNanoSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.durationInNanoSeconds"></a>

- *Type:* `number`

---

##### `expired`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.expired"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.name"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.prefix"></a>

- *Type:* `string`

---

##### `reportArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.reportArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.status"></a>

- *Type:* `string`

---

##### `testRawDataPath`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCase.property.testRawDataPath"></a>

- *Type:* `string`

---

### CodeBuildTestCaseFilter <a name="aws-cdk-sdk.codebuild.CodeBuildTestCaseFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildTestCaseFilter: codebuild.CodeBuildTestCaseFilter = { ... }
```

##### `keyword`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCaseFilter.property.keyword"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestCaseFilter.property.status"></a>

- *Type:* `string`

---

### CodeBuildTestReportSummary <a name="aws-cdk-sdk.codebuild.CodeBuildTestReportSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildTestReportSummary: codebuild.CodeBuildTestReportSummary = { ... }
```

##### `durationInNanoSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestReportSummary.property.durationInNanoSeconds"></a>

- *Type:* `number`

---

##### `statusCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestReportSummary.property.statusCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `total`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildTestReportSummary.property.total"></a>

- *Type:* `number`

---

### CodeBuildUpdateProjectInput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateProjectInput: codebuild.CodeBuildUpdateProjectInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.name"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)

---

##### `badgeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.badgeEnabled"></a>

- *Type:* `boolean`

---

##### `buildBatchConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildProjectBuildBatchConfig)

---

##### `cache`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildProjectCache)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.encryptionKey"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildProjectEnvironment)

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `logsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.logsConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildLogsConfig)

---

##### `queuedTimeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySources`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)

---

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.sourceVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildVpcConfig)

---

### CodeBuildUpdateProjectOutput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateProjectOutput: codebuild.CodeBuildUpdateProjectOutput = { ... }
```

##### `project`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateProjectOutput.property.project"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProject`](#aws-cdk-sdk.codebuild.CodeBuildProject)

---

### CodeBuildUpdateReportGroupInput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateReportGroupInput: codebuild.CodeBuildUpdateReportGroupInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput.property.arn"></a>

- *Type:* `string`

---

##### `exportConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildReportExportConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

### CodeBuildUpdateReportGroupOutput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateReportGroupOutput: codebuild.CodeBuildUpdateReportGroupOutput = { ... }
```

##### `reportGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupOutput.property.reportGroup"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildReportGroup)

---

### CodeBuildUpdateWebhookInput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateWebhookInput: codebuild.CodeBuildUpdateWebhookInput = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput.property.projectName"></a>

- *Type:* `string`

---

##### `branchFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `rotateSecret`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput.property.rotateSecret"></a>

- *Type:* `boolean`

---

### CodeBuildUpdateWebhookOutput <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildUpdateWebhookOutput: codebuild.CodeBuildUpdateWebhookOutput = { ... }
```

##### `webhook`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookOutput.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhook`](#aws-cdk-sdk.codebuild.CodeBuildWebhook)

---

### CodeBuildVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildVpcConfig: codebuild.CodeBuildVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildVpcConfig.property.vpcId"></a>

- *Type:* `string`

---

### CodeBuildWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildWebhook: codebuild.CodeBuildWebhook = { ... }
```

##### `branchFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `lastModifiedSecret`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.lastModifiedSecret"></a>

- *Type:* `string`

---

##### `payloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.payloadUrl"></a>

- *Type:* `string`

---

##### `secret`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.secret"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhook.property.url"></a>

- *Type:* `string`

---

### CodeBuildWebhookFilter <a name="aws-cdk-sdk.codebuild.CodeBuildWebhookFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

const codeBuildWebhookFilter: codebuild.CodeBuildWebhookFilter = { ... }
```

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhookFilter.property.pattern"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhookFilter.property.type"></a>

- *Type:* `string`

---

##### `excludeMatchedPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildWebhookFilter.property.excludeMatchedPattern"></a>

- *Type:* `boolean`

---

## Classes <a name="Classes"></a>

### CodeBuildResponsesBatchDeleteBuilds <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchDeleteBuilds(__scope: Construct, __resources: string[], __input: CodeBuildBatchDeleteBuildsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchDeleteBuildsInput)

---



#### Properties <a name="Properties"></a>

##### `buildsDeleted`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.property.buildsDeleted"></a>

- *Type:* `string`[]

---

##### `buildsNotDeleted`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchDeleteBuilds.property.buildsNotDeleted"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted`](#aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted)[]

---


### CodeBuildResponsesBatchGetBuildBatches <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchGetBuildBatches(__scope: Construct, __resources: string[], __input: CodeBuildBatchGetBuildBatchesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildBatchesInput)

---



#### Properties <a name="Properties"></a>

##### `buildBatches`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.property.buildBatches"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatch)[]

---

##### `buildBatchesNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuildBatches.property.buildBatchesNotFound"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesBatchGetBuilds <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchGetBuilds(__scope: Construct, __resources: string[], __input: CodeBuildBatchGetBuildsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetBuildsInput)

---



#### Properties <a name="Properties"></a>

##### `builds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.property.builds"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuild`](#aws-cdk-sdk.codebuild.CodeBuildBuild)[]

---

##### `buildsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetBuilds.property.buildsNotFound"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesBatchGetProjects <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchGetProjects(__scope: Construct, __resources: string[], __input: CodeBuildBatchGetProjectsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetProjectsInput)

---



#### Properties <a name="Properties"></a>

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProject`](#aws-cdk-sdk.codebuild.CodeBuildProject)[]

---

##### `projectsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetProjects.property.projectsNotFound"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesBatchGetReportGroups <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchGetReportGroups(__scope: Construct, __resources: string[], __input: CodeBuildBatchGetReportGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetReportGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `reportGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.property.reportGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildReportGroup)[]

---

##### `reportGroupsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReportGroups.property.reportGroupsNotFound"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesBatchGetReports <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesBatchGetReports(__scope: Construct, __resources: string[], __input: CodeBuildBatchGetReportsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput`](#aws-cdk-sdk.codebuild.CodeBuildBatchGetReportsInput)

---



#### Properties <a name="Properties"></a>

##### `reports`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.property.reports"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReport`](#aws-cdk-sdk.codebuild.CodeBuildReport)[]

---

##### `reportsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesBatchGetReports.property.reportsNotFound"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesCreateProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProject(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject)

---


### CodeBuildResponsesCreateProjectProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProject(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts)

---

##### `badge`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.badge"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge)

---

##### `buildBatchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig)

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.encryptionKey"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment)

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.lastModified"></a>

- *Type:* `string`

---

##### `logsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.logsConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.name"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.sourceVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig)

---

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProject.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook)

---


### CodeBuildResponsesCreateProjectProjectArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectArtifacts(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.name"></a>

- *Type:* `string`

---

##### `namespaceType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.namespaceType"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `packaging`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.path"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectArtifacts.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectBadge <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectBadge(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `badgeEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.property.badgeEnabled"></a>

- *Type:* `boolean`

---

##### `badgeRequestUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBadge.property.badgeRequestUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `combineArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions)

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---


### CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `computeTypesAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---


### CodeBuildResponsesCreateProjectProjectCache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectCache(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectCache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectEnvironment(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectLogsConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs)

---


### CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectLogsConfigS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectSource <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectSource(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSource.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesCreateProjectProjectVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateProjectProjectWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateProjectProjectWebhook(__scope: Construct, __resources: string[], __input: CodeBuildCreateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `branchFilter`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `lastModifiedSecret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.lastModifiedSecret"></a>

- *Type:* `string`

---

##### `payloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.payloadUrl"></a>

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.secret"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateProjectProjectWebhook.property.url"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateReportGroup(__scope: Construct, __resources: string[], __input: CodeBuildCreateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `reportGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroup.property.reportGroup"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup)

---


### CodeBuildResponsesCreateReportGroupReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateReportGroupReportGroup(__scope: Construct, __resources: string[], __input: CodeBuildCreateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.created"></a>

- *Type:* `string`

---

##### `exportConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig)

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.lastModified"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroup.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateReportGroupReportGroupExportConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig(__scope: Construct, __resources: string[], __input: CodeBuildCreateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `exportConfigType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.property.exportConfigType"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfig.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination)

---


### CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination(__scope: Construct, __resources: string[], __input: CodeBuildCreateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.property.encryptionKey"></a>

- *Type:* `string`

---

##### `packaging`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateReportGroupReportGroupExportConfigS3Destination.property.path"></a>

- *Type:* `string`

---


### CodeBuildResponsesCreateWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateWebhook(__scope: Construct, __resources: string[], __input: CodeBuildCreateWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook`](#aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook)

---


### CodeBuildResponsesCreateWebhookWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesCreateWebhookWebhook(__scope: Construct, __resources: string[], __input: CodeBuildCreateWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildCreateWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `branchFilter`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `lastModifiedSecret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.lastModifiedSecret"></a>

- *Type:* `string`

---

##### `payloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.payloadUrl"></a>

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.secret"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesCreateWebhookWebhook.property.url"></a>

- *Type:* `string`

---


### CodeBuildResponsesDeleteBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesDeleteBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildDeleteBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `buildsDeleted`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.property.buildsDeleted"></a>

- *Type:* `string`[]

---

##### `buildsNotDeleted`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.property.buildsNotDeleted"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted`](#aws-cdk-sdk.codebuild.CodeBuildBuildNotDeleted)[]

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteBuildBatch.property.statusCode"></a>

- *Type:* `string`

---


### CodeBuildResponsesDeleteSourceCredentials <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesDeleteSourceCredentials(__scope: Construct, __resources: string[], __input: CodeBuildDeleteSourceCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput`](#aws-cdk-sdk.codebuild.CodeBuildDeleteSourceCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDeleteSourceCredentials.property.arn"></a>

- *Type:* `string`

---


### CodeBuildResponsesDescribeCodeCoverages <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesDescribeCodeCoverages(__scope: Construct, __resources: string[], __input: CodeBuildDescribeCodeCoveragesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput`](#aws-cdk-sdk.codebuild.CodeBuildDescribeCodeCoveragesInput)

---



#### Properties <a name="Properties"></a>

##### `codeCoverages`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.property.codeCoverages"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildCodeCoverage`](#aws-cdk-sdk.codebuild.CodeBuildCodeCoverage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeCodeCoverages.property.nextToken"></a>

- *Type:* `string`

---


### CodeBuildResponsesDescribeTestCases <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesDescribeTestCases(__scope: Construct, __resources: string[], __input: CodeBuildDescribeTestCasesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput`](#aws-cdk-sdk.codebuild.CodeBuildDescribeTestCasesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.property.nextToken"></a>

- *Type:* `string`

---

##### `testCases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesDescribeTestCases.property.testCases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTestCase`](#aws-cdk-sdk.codebuild.CodeBuildTestCase)[]

---


### CodeBuildResponsesFetchReportGroupTrend <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesFetchReportGroupTrend(__scope: Construct, __resources: string[], __input: CodeBuildGetReportGroupTrendInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput`](#aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput)

---



#### Properties <a name="Properties"></a>

##### `rawData`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.property.rawData"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildReportWithRawData`](#aws-cdk-sdk.codebuild.CodeBuildReportWithRawData)[]

---

##### `stats`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrend.property.stats"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats`](#aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats)

---


### CodeBuildResponsesFetchReportGroupTrendStats <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesFetchReportGroupTrendStats(__scope: Construct, __resources: string[], __input: CodeBuildGetReportGroupTrendInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput`](#aws-cdk-sdk.codebuild.CodeBuildGetReportGroupTrendInput)

---



#### Properties <a name="Properties"></a>

##### `average`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.property.average"></a>

- *Type:* `string`

---

##### `max`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.property.max"></a>

- *Type:* `string`

---

##### `min`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchReportGroupTrendStats.property.min"></a>

- *Type:* `string`

---


### CodeBuildResponsesFetchResourcePolicy <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesFetchResourcePolicy(__scope: Construct, __resources: string[], __input: CodeBuildGetResourcePolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput`](#aws-cdk-sdk.codebuild.CodeBuildGetResourcePolicyInput)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesFetchResourcePolicy.property.policy"></a>

- *Type:* `string`

---


### CodeBuildResponsesImportSourceCredentials <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesImportSourceCredentials(__scope: Construct, __resources: string[], __input: CodeBuildImportSourceCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput`](#aws-cdk-sdk.codebuild.CodeBuildImportSourceCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesImportSourceCredentials.property.arn"></a>

- *Type:* `string`

---


### CodeBuildResponsesListBuildBatches <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListBuildBatches(__scope: Construct, __resources: string[], __input: CodeBuildListBuildBatchesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesInput)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatches.property.nextToken"></a>

- *Type:* `string`

---


### CodeBuildResponsesListBuildBatchesForProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListBuildBatchesForProject(__scope: Construct, __resources: string[], __input: CodeBuildListBuildBatchesForProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildBatchesForProjectInput)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildBatchesForProject.property.nextToken"></a>

- *Type:* `string`

---


### CodeBuildResponsesListBuilds <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListBuilds(__scope: Construct, __resources: string[], __input: CodeBuildListBuildsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildsInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildsInput)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuilds.property.nextToken"></a>

- *Type:* `string`

---


### CodeBuildResponsesListBuildsForProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListBuildsForProject(__scope: Construct, __resources: string[], __input: CodeBuildListBuildsForProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildListBuildsForProjectInput)

---



#### Properties <a name="Properties"></a>

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.property.ids"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListBuildsForProject.property.nextToken"></a>

- *Type:* `string`

---


### CodeBuildResponsesListCuratedEnvironmentImages <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListCuratedEnvironmentImages"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListCuratedEnvironmentImages.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListCuratedEnvironmentImages(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListCuratedEnvironmentImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListCuratedEnvironmentImages.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `platforms`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListCuratedEnvironmentImages.property.platforms"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentPlatform)[]

---


### CodeBuildResponsesListProjects <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListProjects(__scope: Construct, __resources: string[], __input: CodeBuildListProjectsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildListProjectsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListProjects.property.projects"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListReportGroups <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListReportGroups(__scope: Construct, __resources: string[], __input: CodeBuildListReportGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `reportGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportGroups.property.reportGroups"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListReports <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListReports(__scope: Construct, __resources: string[], __input: CodeBuildListReportsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportsInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.property.nextToken"></a>

- *Type:* `string`

---

##### `reports`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReports.property.reports"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListReportsForReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListReportsForReportGroup(__scope: Construct, __resources: string[], __input: CodeBuildListReportsForReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildListReportsForReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.property.nextToken"></a>

- *Type:* `string`

---

##### `reports`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListReportsForReportGroup.property.reports"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListSharedProjects <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListSharedProjects(__scope: Construct, __resources: string[], __input: CodeBuildListSharedProjectsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput`](#aws-cdk-sdk.codebuild.CodeBuildListSharedProjectsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedProjects.property.projects"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListSharedReportGroups <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListSharedReportGroups(__scope: Construct, __resources: string[], __input: CodeBuildListSharedReportGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput`](#aws-cdk-sdk.codebuild.CodeBuildListSharedReportGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `reportGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSharedReportGroups.property.reportGroups"></a>

- *Type:* `string`[]

---


### CodeBuildResponsesListSourceCredentials <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSourceCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSourceCredentials.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesListSourceCredentials(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSourceCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSourceCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `sourceCredentialsInfos`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesListSourceCredentials.property.sourceCredentialsInfos"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo`](#aws-cdk-sdk.codebuild.CodeBuildSourceCredentialsInfo)[]

---


### CodeBuildResponsesPutResourcePolicy <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesPutResourcePolicy(__scope: Construct, __resources: string[], __input: CodeBuildPutResourcePolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput`](#aws-cdk-sdk.codebuild.CodeBuildPutResourcePolicyInput)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesPutResourcePolicy.property.resourceArn"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuild <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuild(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2)

---


### CodeBuildResponsesRetryBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `buildBatch`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatch.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch)

---


### CodeBuildResponsesRetryBuildBatchBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts)

---

##### `buildBatchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig)

---

##### `buildBatchNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.buildBatchNumber"></a>

- *Type:* `number`

---

##### `buildBatchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.buildBatchStatus"></a>

- *Type:* `string`

---

##### `buildGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.buildGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildGroup`](#aws-cdk-sdk.codebuild.CodeBuildBuildGroup)[]

---

##### `buildTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.buildTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache)

---

##### `complete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.complete"></a>

- *Type:* `boolean`

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.currentPhase"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment)

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.initiator"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.startTime"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatch.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig)

---


### CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchArtifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `combineArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions)

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `computeTypesAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchCache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchCache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs)

---


### CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchLogConfigS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchSource <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSource.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBatchBuildBatchVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2 <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts)

---

##### `buildBatchArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.buildBatchArn"></a>

- *Type:* `string`

---

##### `buildComplete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.buildComplete"></a>

- *Type:* `boolean`

---

##### `buildNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.buildNumber"></a>

- *Type:* `number`

---

##### `buildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.buildStatus"></a>

- *Type:* `string`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache)

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.currentPhase"></a>

- *Type:* `string`

---

##### `debugSession`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.debugSession"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession)

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment)

---

##### `exportedEnvironmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.exportedEnvironmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable)[]

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.initiator"></a>

- *Type:* `string`

---

##### `logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs)

---

##### `networkInterface`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `reportArns`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.reportArns"></a>

- *Type:* `string`[]

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.startTime"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig)

---


### CodeBuildResponsesRetryBuildBuild2Artifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Artifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2Cache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2Cache(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Cache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2DebugSession <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `sessionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.property.sessionEnabled"></a>

- *Type:* `boolean`

---

##### `sessionTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2DebugSession.property.sessionTarget"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2Environment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2Environment(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Environment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2EnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2Logs(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs)

---

##### `cloudWatchLogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.cloudWatchLogsArn"></a>

- *Type:* `string`

---

##### `deepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.deepLink"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.groupName"></a>

- *Type:* `string`

---

##### `s3DeepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.s3DeepLink"></a>

- *Type:* `string`

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs)

---

##### `s3LogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.s3LogsArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Logs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2LogsS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2LogsS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2NetworkInterface <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2NetworkInterface.property.subnetId"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2Source <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2Source(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2Source.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2SourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2SourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesRetryBuildBuild2VpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildRetryBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildRetryBuildInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesRetryBuildBuild2VpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuild <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuild(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2)

---


### CodeBuildResponsesStartBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `buildBatch`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatch.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch)

---


### CodeBuildResponsesStartBuildBatchBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts)

---

##### `buildBatchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig)

---

##### `buildBatchNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.buildBatchNumber"></a>

- *Type:* `number`

---

##### `buildBatchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.buildBatchStatus"></a>

- *Type:* `string`

---

##### `buildGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.buildGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildGroup`](#aws-cdk-sdk.codebuild.CodeBuildBuildGroup)[]

---

##### `buildTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.buildTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache)

---

##### `complete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.complete"></a>

- *Type:* `boolean`

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.currentPhase"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment)

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.initiator"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.startTime"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatch.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig)

---


### CodeBuildResponsesStartBuildBatchBuildBatchArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchArtifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `combineArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions)

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---


### CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `computeTypesAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---


### CodeBuildResponsesStartBuildBatchBuildBatchCache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchCache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchLogConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs)

---


### CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchLogConfigS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchSource <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSource.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBatchBuildBatchVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2 <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts)

---

##### `buildBatchArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.buildBatchArn"></a>

- *Type:* `string`

---

##### `buildComplete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.buildComplete"></a>

- *Type:* `boolean`

---

##### `buildNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.buildNumber"></a>

- *Type:* `number`

---

##### `buildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.buildStatus"></a>

- *Type:* `string`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache)

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.currentPhase"></a>

- *Type:* `string`

---

##### `debugSession`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.debugSession"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession)

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment)

---

##### `exportedEnvironmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.exportedEnvironmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable)[]

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.initiator"></a>

- *Type:* `string`

---

##### `logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs)

---

##### `networkInterface`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `reportArns`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.reportArns"></a>

- *Type:* `string`[]

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.startTime"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig)

---


### CodeBuildResponsesStartBuildBuild2Artifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2Artifacts(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Artifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2Cache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2Cache(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Cache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2DebugSession <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2DebugSession(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `sessionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.property.sessionEnabled"></a>

- *Type:* `boolean`

---

##### `sessionTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2DebugSession.property.sessionTarget"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2Environment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2Environment(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Environment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2EnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2Logs(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs)

---

##### `cloudWatchLogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.cloudWatchLogsArn"></a>

- *Type:* `string`

---

##### `deepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.deepLink"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.groupName"></a>

- *Type:* `string`

---

##### `s3DeepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.s3DeepLink"></a>

- *Type:* `string`

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs)

---

##### `s3LogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.s3LogsArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Logs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2LogsS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2LogsS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2NetworkInterface <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2NetworkInterface.property.subnetId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2Source <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2Source(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2Source.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2SourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2SourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesStartBuildBuild2VpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildStartBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStartBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStartBuildInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStartBuildBuild2VpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuild <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuild(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `build2`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuild.property.build2"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2)

---


### CodeBuildResponsesStopBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `buildBatch`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatch.property.buildBatch"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch)

---


### CodeBuildResponsesStopBuildBatchBuildBatch <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatch(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts)

---

##### `buildBatchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig)

---

##### `buildBatchNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.buildBatchNumber"></a>

- *Type:* `number`

---

##### `buildBatchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.buildBatchStatus"></a>

- *Type:* `string`

---

##### `buildGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.buildGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildGroup`](#aws-cdk-sdk.codebuild.CodeBuildBuildGroup)[]

---

##### `buildTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.buildTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache)

---

##### `complete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.complete"></a>

- *Type:* `boolean`

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.currentPhase"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment)

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.initiator"></a>

- *Type:* `string`

---

##### `logConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.logConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildBatchPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.startTime"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatch.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig)

---


### CodeBuildResponsesStopBuildBatchBuildBatchArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchArtifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `combineArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions)

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---


### CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `computeTypesAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---


### CodeBuildResponsesStopBuildBatchBuildBatchCache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchCache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchLogConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs)

---


### CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchLogConfigS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchSource <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSource.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildBatchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildBatchInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBatchBuildBatchVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2 <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts)

---

##### `buildBatchArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.buildBatchArn"></a>

- *Type:* `string`

---

##### `buildComplete`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.buildComplete"></a>

- *Type:* `boolean`

---

##### `buildNumber`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.buildNumber"></a>

- *Type:* `number`

---

##### `buildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.buildStatus"></a>

- *Type:* `string`

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache)

---

##### `currentPhase`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.currentPhase"></a>

- *Type:* `string`

---

##### `debugSession`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.debugSession"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession)

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.encryptionKey"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.endTime"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment)

---

##### `exportedEnvironmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.exportedEnvironmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildExportedEnvironmentVariable)[]

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.id"></a>

- *Type:* `string`

---

##### `initiator`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.initiator"></a>

- *Type:* `string`

---

##### `logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs)

---

##### `networkInterface`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface)

---

##### `phases`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.phases"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildPhase`](#aws-cdk-sdk.codebuild.CodeBuildBuildPhase)[]

---

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.projectName"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `reportArns`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.reportArns"></a>

- *Type:* `string`[]

---

##### `resolvedSourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.resolvedSourceVersion"></a>

- *Type:* `string`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildBuildArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.sourceVersion"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.startTime"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig)

---


### CodeBuildResponsesStopBuildBuild2Artifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2Artifacts(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.location"></a>

- *Type:* `string`

---

##### `md5Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.md5Sum"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `sha256Sum`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Artifacts.property.sha256Sum"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2Cache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2Cache(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Cache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2DebugSession <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2DebugSession(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `sessionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.property.sessionEnabled"></a>

- *Type:* `boolean`

---

##### `sessionTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2DebugSession.property.sessionTarget"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2Environment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2Environment(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Environment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2EnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2Logs(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs)

---

##### `cloudWatchLogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.cloudWatchLogsArn"></a>

- *Type:* `string`

---

##### `deepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.deepLink"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.groupName"></a>

- *Type:* `string`

---

##### `s3DeepLink`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.s3DeepLink"></a>

- *Type:* `string`

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs)

---

##### `s3LogsArn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.s3LogsArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Logs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2LogsS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2LogsS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2NetworkInterface <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2NetworkInterface.property.subnetId"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2Source <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2Source(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2Source.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2SourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2SourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesStopBuildBuild2VpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildStopBuildInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildStopBuildInput`](#aws-cdk-sdk.codebuild.CodeBuildStopBuildInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesStopBuildBuild2VpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProject(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `project`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProject.property.project"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject)

---


### CodeBuildResponsesUpdateProjectProject <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProject(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.arn"></a>

- *Type:* `string`

---

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts)

---

##### `badge`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.badge"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge)

---

##### `buildBatchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.buildBatchConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig)

---

##### `cache`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.cache"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.description"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.encryptionKey"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.environment"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment)

---

##### `fileSystemLocations`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.fileSystemLocations"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation`](#aws-cdk-sdk.codebuild.CodeBuildProjectFileSystemLocation)[]

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.lastModified"></a>

- *Type:* `string`

---

##### `logsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.logsConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.name"></a>

- *Type:* `string`

---

##### `queuedTimeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.queuedTimeoutInMinutes"></a>

- *Type:* `number`

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.secondaryArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts`](#aws-cdk-sdk.codebuild.CodeBuildProjectArtifacts)[]

---

##### `secondarySources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.secondarySources"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildProjectSource)[]

---

##### `secondarySourceVersions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.secondarySourceVersions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion`](#aws-cdk-sdk.codebuild.CodeBuildProjectSourceVersion)[]

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.serviceRole"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.source"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource)

---

##### `sourceVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.sourceVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.timeoutInMinutes"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig)

---

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProject.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook)

---


### CodeBuildResponsesUpdateProjectProjectArtifacts <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `artifactIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.artifactIdentifier"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.location"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.name"></a>

- *Type:* `string`

---

##### `namespaceType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.namespaceType"></a>

- *Type:* `string`

---

##### `overrideArtifactName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.overrideArtifactName"></a>

- *Type:* `boolean`

---

##### `packaging`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.path"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectArtifacts.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectBadge <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectBadge(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `badgeEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.property.badgeEnabled"></a>

- *Type:* `boolean`

---

##### `badgeRequestUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBadge.property.badgeRequestUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectBuildBatchConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `combineArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.property.combineArtifacts"></a>

- *Type:* `boolean`

---

##### `restrictions`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.property.restrictions"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions)

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `timeoutInMins`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfig.property.timeoutInMins"></a>

- *Type:* `number`

---


### CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `computeTypesAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

- *Type:* `string`[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

- *Type:* `number`

---


### CodeBuildResponsesUpdateProjectProjectCache <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectCache(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.property.location"></a>

- *Type:* `string`

---

##### `modes`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.property.modes"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectCache.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectEnvironment <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.certificate"></a>

- *Type:* `string`

---

##### `computeType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.computeType"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.environmentVariables"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable`](#aws-cdk-sdk.codebuild.CodeBuildEnvironmentVariable)[]

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.image"></a>

- *Type:* `string`

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.imagePullCredentialsType"></a>

- *Type:* `string`

---

##### `privilegedMode`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.privilegedMode"></a>

- *Type:* `boolean`

---

##### `registryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.registryCredential"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironment.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `credential`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.property.credential"></a>

- *Type:* `string`

---

##### `credentialProvider`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectLogsConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs)

---

##### `s3Logs`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfig.property.s3Logs"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs)

---


### CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.property.groupName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.property.status"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigCloudWatchLogs.property.streamName"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.property.location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectLogsConfigS3Logs.property.status"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectSource <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectSource(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `auth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.auth"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth)

---

##### `buildspec`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.buildspec"></a>

- *Type:* `string`

---

##### `buildStatusConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.buildStatusConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig)

---

##### `gitCloneDepth`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.gitCloneDepth"></a>

- *Type:* `number`

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.gitSubmodulesConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig)

---

##### `insecureSsl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.insecureSsl"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.location"></a>

- *Type:* `string`

---

##### `reportBuildStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.reportBuildStatus"></a>

- *Type:* `boolean`

---

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSource.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectSourceAuth <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.property.resource"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceAuth.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `context`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.property.context"></a>

- *Type:* `string`

---

##### `targetUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceBuildStatusConfig.property.targetUrl"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `fetchSubmodules`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

- *Type:* `boolean`

---


### CodeBuildResponsesUpdateProjectProjectVpcConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateProjectProjectWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateProjectProjectWebhook(__scope: Construct, __resources: string[], __input: CodeBuildUpdateProjectInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateProjectInput)

---



#### Properties <a name="Properties"></a>

##### `branchFilter`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `lastModifiedSecret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.lastModifiedSecret"></a>

- *Type:* `string`

---

##### `payloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.payloadUrl"></a>

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.secret"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateProjectProjectWebhook.property.url"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateReportGroup(__scope: Construct, __resources: string[], __input: CodeBuildUpdateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `reportGroup`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroup.property.reportGroup"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup)

---


### CodeBuildResponsesUpdateReportGroupReportGroup <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateReportGroupReportGroup(__scope: Construct, __resources: string[], __input: CodeBuildUpdateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.created"></a>

- *Type:* `string`

---

##### `exportConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.exportConfig"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig)

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.lastModified"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildTag`](#aws-cdk-sdk.codebuild.CodeBuildTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroup.property.type"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateReportGroupReportGroupExportConfig <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig(__scope: Construct, __resources: string[], __input: CodeBuildUpdateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `exportConfigType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.property.exportConfigType"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfig.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination)

---


### CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination(__scope: Construct, __resources: string[], __input: CodeBuildUpdateReportGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateReportGroupInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `encryptionDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

- *Type:* `boolean`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.property.encryptionKey"></a>

- *Type:* `string`

---

##### `packaging`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.property.packaging"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateReportGroupReportGroupExportConfigS3Destination.property.path"></a>

- *Type:* `string`

---


### CodeBuildResponsesUpdateWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateWebhook(__scope: Construct, __resources: string[], __input: CodeBuildUpdateWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook`](#aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook)

---


### CodeBuildResponsesUpdateWebhookWebhook <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.Initializer"></a>

```typescript
import { codebuild } from 'aws-cdk-sdk'

new codebuild.CodeBuildResponsesUpdateWebhookWebhook(__scope: Construct, __resources: string[], __input: CodeBuildUpdateWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput`](#aws-cdk-sdk.codebuild.CodeBuildUpdateWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `branchFilter`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.branchFilter"></a>

- *Type:* `string`

---

##### `buildType`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.buildType"></a>

- *Type:* `string`

---

##### `filterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.filterGroups"></a>

- *Type:* [`aws-cdk-sdk.codebuild.CodeBuildWebhookFilter`](#aws-cdk-sdk.codebuild.CodeBuildWebhookFilter)[][]

---

##### `lastModifiedSecret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.lastModifiedSecret"></a>

- *Type:* `string`

---

##### `payloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.payloadUrl"></a>

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.secret"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codebuild.CodeBuildResponsesUpdateWebhookWebhook.property.url"></a>

- *Type:* `string`

---



