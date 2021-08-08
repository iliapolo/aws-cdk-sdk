# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AmplifyClient <a name="aws-cdk-sdk.amplify.AmplifyClient"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyClient.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApp` <a name="aws-cdk-sdk.amplify.AmplifyClient.createApp"></a>

```typescript
public createApp(input: AmplifyCreateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateAppRequest`](#aws-cdk-sdk.amplify.AmplifyCreateAppRequest)

---

##### `createBackendEnvironment` <a name="aws-cdk-sdk.amplify.AmplifyClient.createBackendEnvironment"></a>

```typescript
public createBackendEnvironment(input: AmplifyCreateBackendEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest)

---

##### `createBranch` <a name="aws-cdk-sdk.amplify.AmplifyClient.createBranch"></a>

```typescript
public createBranch(input: AmplifyCreateBranchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBranchRequest)

---

##### `createDeployment` <a name="aws-cdk-sdk.amplify.AmplifyClient.createDeployment"></a>

```typescript
public createDeployment(input: AmplifyCreateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest`](#aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest)

---

##### `createDomainAssociation` <a name="aws-cdk-sdk.amplify.AmplifyClient.createDomainAssociation"></a>

```typescript
public createDomainAssociation(input: AmplifyCreateDomainAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest)

---

##### `createWebhook` <a name="aws-cdk-sdk.amplify.AmplifyClient.createWebhook"></a>

```typescript
public createWebhook(input: AmplifyCreateWebhookRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest)

---

##### `deleteApp` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteApp"></a>

```typescript
public deleteApp(input: AmplifyDeleteAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteAppRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteAppRequest)

---

##### `deleteBackendEnvironment` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteBackendEnvironment"></a>

```typescript
public deleteBackendEnvironment(input: AmplifyDeleteBackendEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest)

---

##### `deleteBranch` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteBranch"></a>

```typescript
public deleteBranch(input: AmplifyDeleteBranchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest)

---

##### `deleteDomainAssociation` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteDomainAssociation"></a>

```typescript
public deleteDomainAssociation(input: AmplifyDeleteDomainAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest)

---

##### `deleteJob` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteJob"></a>

```typescript
public deleteJob(input: AmplifyDeleteJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteJobRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteJobRequest)

---

##### `deleteWebhook` <a name="aws-cdk-sdk.amplify.AmplifyClient.deleteWebhook"></a>

```typescript
public deleteWebhook(input: AmplifyDeleteWebhookRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest)

---

##### `fetchApp` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchApp"></a>

```typescript
public fetchApp(input: AmplifyGetAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetAppRequest`](#aws-cdk-sdk.amplify.AmplifyGetAppRequest)

---

##### `fetchArtifactUrl` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchArtifactUrl"></a>

```typescript
public fetchArtifactUrl(input: AmplifyGetArtifactUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest`](#aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest)

---

##### `fetchBackendEnvironment` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchBackendEnvironment"></a>

```typescript
public fetchBackendEnvironment(input: AmplifyGetBackendEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest)

---

##### `fetchBranch` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchBranch"></a>

```typescript
public fetchBranch(input: AmplifyGetBranchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBranchRequest`](#aws-cdk-sdk.amplify.AmplifyGetBranchRequest)

---

##### `fetchDomainAssociation` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchDomainAssociation"></a>

```typescript
public fetchDomainAssociation(input: AmplifyGetDomainAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest)

---

##### `fetchJob` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchJob"></a>

```typescript
public fetchJob(input: AmplifyGetJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetJobRequest`](#aws-cdk-sdk.amplify.AmplifyGetJobRequest)

---

##### `fetchWebhook` <a name="aws-cdk-sdk.amplify.AmplifyClient.fetchWebhook"></a>

```typescript
public fetchWebhook(input: AmplifyGetWebhookRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyGetWebhookRequest)

---

##### `generateAccessLogs` <a name="aws-cdk-sdk.amplify.AmplifyClient.generateAccessLogs"></a>

```typescript
public generateAccessLogs(input: AmplifyGenerateAccessLogsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest`](#aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest)

---

##### `listApps` <a name="aws-cdk-sdk.amplify.AmplifyClient.listApps"></a>

```typescript
public listApps(input: AmplifyListAppsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListAppsRequest`](#aws-cdk-sdk.amplify.AmplifyListAppsRequest)

---

##### `listArtifacts` <a name="aws-cdk-sdk.amplify.AmplifyClient.listArtifacts"></a>

```typescript
public listArtifacts(input: AmplifyListArtifactsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListArtifactsRequest`](#aws-cdk-sdk.amplify.AmplifyListArtifactsRequest)

---

##### `listBackendEnvironments` <a name="aws-cdk-sdk.amplify.AmplifyClient.listBackendEnvironments"></a>

```typescript
public listBackendEnvironments(input: AmplifyListBackendEnvironmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest`](#aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest)

---

##### `listBranches` <a name="aws-cdk-sdk.amplify.AmplifyClient.listBranches"></a>

```typescript
public listBranches(input: AmplifyListBranchesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListBranchesRequest`](#aws-cdk-sdk.amplify.AmplifyListBranchesRequest)

---

##### `listDomainAssociations` <a name="aws-cdk-sdk.amplify.AmplifyClient.listDomainAssociations"></a>

```typescript
public listDomainAssociations(input: AmplifyListDomainAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest`](#aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.amplify.AmplifyClient.listJobs"></a>

```typescript
public listJobs(input: AmplifyListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListJobsRequest`](#aws-cdk-sdk.amplify.AmplifyListJobsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.amplify.AmplifyClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AmplifyListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest`](#aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest)

---

##### `listWebhooks` <a name="aws-cdk-sdk.amplify.AmplifyClient.listWebhooks"></a>

```typescript
public listWebhooks(input: AmplifyListWebhooksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListWebhooksRequest`](#aws-cdk-sdk.amplify.AmplifyListWebhooksRequest)

---

##### `startDeployment` <a name="aws-cdk-sdk.amplify.AmplifyClient.startDeployment"></a>

```typescript
public startDeployment(input: AmplifyStartDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest`](#aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest)

---

##### `startJob` <a name="aws-cdk-sdk.amplify.AmplifyClient.startJob"></a>

```typescript
public startJob(input: AmplifyStartJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartJobRequest`](#aws-cdk-sdk.amplify.AmplifyStartJobRequest)

---

##### `stopJob` <a name="aws-cdk-sdk.amplify.AmplifyClient.stopJob"></a>

```typescript
public stopJob(input: AmplifyStopJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStopJobRequest`](#aws-cdk-sdk.amplify.AmplifyStopJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.amplify.AmplifyClient.tagResource"></a>

```typescript
public tagResource(input: AmplifyTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyTagResourceRequest`](#aws-cdk-sdk.amplify.AmplifyTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.amplify.AmplifyClient.untagResource"></a>

```typescript
public untagResource(input: AmplifyUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUntagResourceRequest`](#aws-cdk-sdk.amplify.AmplifyUntagResourceRequest)

---

##### `updateApp` <a name="aws-cdk-sdk.amplify.AmplifyClient.updateApp"></a>

```typescript
public updateApp(input: AmplifyUpdateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateAppRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateAppRequest)

---

##### `updateBranch` <a name="aws-cdk-sdk.amplify.AmplifyClient.updateBranch"></a>

```typescript
public updateBranch(input: AmplifyUpdateBranchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest)

---

##### `updateDomainAssociation` <a name="aws-cdk-sdk.amplify.AmplifyClient.updateDomainAssociation"></a>

```typescript
public updateDomainAssociation(input: AmplifyUpdateDomainAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest)

---

##### `updateWebhook` <a name="aws-cdk-sdk.amplify.AmplifyClient.updateWebhook"></a>

```typescript
public updateWebhook(input: AmplifyUpdateWebhookRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest)

---




## Structs <a name="Structs"></a>

### AmplifyApp <a name="aws-cdk-sdk.amplify.AmplifyApp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyApp: amplify.AmplifyApp = { ... }
```

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.appArn"></a>

- *Type:* `string`

---

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.appId"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.createTime"></a>

- *Type:* `string`

---

##### `defaultDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.defaultDomain"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.description"></a>

- *Type:* `string`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.platform"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.repository"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.updateTime"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.buildSpec"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `enableAutoBranchCreation`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `iamServiceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `productionBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.productionBranch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyProductionBranch`](#aws-cdk-sdk.amplify.AmplifyProductionBranch)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyApp.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AmplifyArtifact <a name="aws-cdk-sdk.amplify.AmplifyArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyArtifact: amplify.AmplifyArtifact = { ... }
```

##### `artifactFileName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyArtifact.property.artifactFileName"></a>

- *Type:* `string`

---

##### `artifactId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyArtifact.property.artifactId"></a>

- *Type:* `string`

---

### AmplifyAutoBranchCreationConfig <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyAutoBranchCreationConfig: amplify.AmplifyAutoBranchCreationConfig = { ... }
```

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.buildSpec"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig.property.stage"></a>

- *Type:* `string`

---

### AmplifyBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyBackendEnvironment: amplify.AmplifyBackendEnvironment = { ... }
```

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.createTime"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.updateTime"></a>

- *Type:* `string`

---

##### `deploymentArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.deploymentArtifacts"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBackendEnvironment.property.stackName"></a>

- *Type:* `string`

---

### AmplifyBranch <a name="aws-cdk-sdk.amplify.AmplifyBranch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyBranch: amplify.AmplifyBranch = { ... }
```

##### `activeJobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.activeJobId"></a>

- *Type:* `string`

---

##### `branchArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.branchArn"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.createTime"></a>

- *Type:* `string`

---

##### `customDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.customDomains"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.framework"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.stage"></a>

- *Type:* `string`

---

##### `totalNumberOfJobs`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.totalNumberOfJobs"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.ttl"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.updateTime"></a>

- *Type:* `string`

---

##### `associatedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.associatedResources"></a>

- *Type:* `string`[]

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.buildSpec"></a>

- *Type:* `string`

---

##### `destinationBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.destinationBranch"></a>

- *Type:* `string`

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.sourceBranch"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thumbnailUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

### AmplifyCreateAppRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateAppRequest: amplify.AmplifyCreateAppRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.accessToken"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.buildSpec"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `oauthToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.oauthToken"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.platform"></a>

- *Type:* `string`

---

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.repository"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AmplifyCreateAppResult <a name="aws-cdk-sdk.amplify.AmplifyCreateAppResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateAppResult: amplify.AmplifyCreateAppResult = { ... }
```

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateAppResult.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)

---

### AmplifyCreateBackendEnvironmentRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateBackendEnvironmentRequest: amplify.AmplifyCreateBackendEnvironmentRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest.property.appId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `deploymentArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest.property.deploymentArtifacts"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest.property.stackName"></a>

- *Type:* `string`

---

### AmplifyCreateBackendEnvironmentResult <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateBackendEnvironmentResult: amplify.AmplifyCreateBackendEnvironmentResult = { ... }
```

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentResult.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyBackendEnvironment)

---

### AmplifyCreateBranchRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateBranchRequest: amplify.AmplifyCreateBranchRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.branchName"></a>

- *Type:* `string`

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.buildSpec"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.stage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `ttl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchRequest.property.ttl"></a>

- *Type:* `string`

---

### AmplifyCreateBranchResult <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateBranchResult: amplify.AmplifyCreateBranchResult = { ... }
```

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateBranchResult.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)

---

### AmplifyCreateDeploymentRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateDeploymentRequest: amplify.AmplifyCreateDeploymentRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest.property.branchName"></a>

- *Type:* `string`

---

##### `fileMap`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest.property.fileMap"></a>

- *Type:* {[ key: string ]: `string`}

---

### AmplifyCreateDeploymentResult <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateDeploymentResult: amplify.AmplifyCreateDeploymentResult = { ... }
```

##### `fileUploadUrls`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentResult.property.fileUploadUrls"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `zipUploadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentResult.property.zipUploadUrl"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDeploymentResult.property.jobId"></a>

- *Type:* `string`

---

### AmplifyCreateDomainAssociationRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateDomainAssociationRequest: amplify.AmplifyCreateDomainAssociationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.appId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.domainName"></a>

- *Type:* `string`

---

##### `subDomainSettings`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.subDomainSettings"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomainSetting`](#aws-cdk-sdk.amplify.AmplifySubDomainSetting)[]

---

##### `autoSubDomainCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIAMRole`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.autoSubDomainIAMRole"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

### AmplifyCreateDomainAssociationResult <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateDomainAssociationResult: amplify.AmplifyCreateDomainAssociationResult = { ... }
```

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationResult.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)

---

### AmplifyCreateWebhookRequest <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateWebhookRequest: amplify.AmplifyCreateWebhookRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest.property.branchName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest.property.description"></a>

- *Type:* `string`

---

### AmplifyCreateWebhookResult <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCreateWebhookResult: amplify.AmplifyCreateWebhookResult = { ... }
```

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCreateWebhookResult.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)

---

### AmplifyCustomRule <a name="aws-cdk-sdk.amplify.AmplifyCustomRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyCustomRule: amplify.AmplifyCustomRule = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCustomRule.property.source"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyCustomRule.property.target"></a>

- *Type:* `string`

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCustomRule.property.condition"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyCustomRule.property.status"></a>

- *Type:* `string`

---

### AmplifyDeleteAppRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteAppRequest: amplify.AmplifyDeleteAppRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteAppRequest.property.appId"></a>

- *Type:* `string`

---

### AmplifyDeleteAppResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteAppResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteAppResult: amplify.AmplifyDeleteAppResult = { ... }
```

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteAppResult.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)

---

### AmplifyDeleteBackendEnvironmentRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteBackendEnvironmentRequest: amplify.AmplifyDeleteBackendEnvironmentRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest.property.appId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest.property.environmentName"></a>

- *Type:* `string`

---

### AmplifyDeleteBackendEnvironmentResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteBackendEnvironmentResult: amplify.AmplifyDeleteBackendEnvironmentResult = { ... }
```

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentResult.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyBackendEnvironment)

---

### AmplifyDeleteBranchRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteBranchRequest: amplify.AmplifyDeleteBranchRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest.property.branchName"></a>

- *Type:* `string`

---

### AmplifyDeleteBranchResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteBranchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteBranchResult: amplify.AmplifyDeleteBranchResult = { ... }
```

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteBranchResult.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)

---

### AmplifyDeleteDomainAssociationRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteDomainAssociationRequest: amplify.AmplifyDeleteDomainAssociationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest.property.appId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest.property.domainName"></a>

- *Type:* `string`

---

### AmplifyDeleteDomainAssociationResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteDomainAssociationResult: amplify.AmplifyDeleteDomainAssociationResult = { ... }
```

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationResult.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)

---

### AmplifyDeleteJobRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteJobRequest: amplify.AmplifyDeleteJobRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobRequest.property.jobId"></a>

- *Type:* `string`

---

### AmplifyDeleteJobResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteJobResult: amplify.AmplifyDeleteJobResult = { ... }
```

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteJobResult.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)

---

### AmplifyDeleteWebhookRequest <a name="aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteWebhookRequest: amplify.AmplifyDeleteWebhookRequest = { ... }
```

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest.property.webhookId"></a>

- *Type:* `string`

---

### AmplifyDeleteWebhookResult <a name="aws-cdk-sdk.amplify.AmplifyDeleteWebhookResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDeleteWebhookResult: amplify.AmplifyDeleteWebhookResult = { ... }
```

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDeleteWebhookResult.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)

---

### AmplifyDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyDomainAssociation: amplify.AmplifyDomainAssociation = { ... }
```

##### `domainAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.domainAssociationArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.domainStatus"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.statusReason"></a>

- *Type:* `string`

---

##### `subDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.subDomains"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomain`](#aws-cdk-sdk.amplify.AmplifySubDomain)[]

---

##### `autoSubDomainCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIAMRole`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.autoSubDomainIAMRole"></a>

- *Type:* `string`

---

##### `certificateVerificationDNSRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyDomainAssociation.property.certificateVerificationDNSRecord"></a>

- *Type:* `string`

---

### AmplifyGenerateAccessLogsRequest <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGenerateAccessLogsRequest: amplify.AmplifyGenerateAccessLogsRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest.property.appId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest.property.startTime"></a>

- *Type:* `string`

---

### AmplifyGenerateAccessLogsResult <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGenerateAccessLogsResult: amplify.AmplifyGenerateAccessLogsResult = { ... }
```

##### `logUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsResult.property.logUrl"></a>

- *Type:* `string`

---

### AmplifyGetAppRequest <a name="aws-cdk-sdk.amplify.AmplifyGetAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetAppRequest: amplify.AmplifyGetAppRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetAppRequest.property.appId"></a>

- *Type:* `string`

---

### AmplifyGetAppResult <a name="aws-cdk-sdk.amplify.AmplifyGetAppResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetAppResult: amplify.AmplifyGetAppResult = { ... }
```

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetAppResult.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)

---

### AmplifyGetArtifactUrlRequest <a name="aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetArtifactUrlRequest: amplify.AmplifyGetArtifactUrlRequest = { ... }
```

##### `artifactId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest.property.artifactId"></a>

- *Type:* `string`

---

### AmplifyGetArtifactUrlResult <a name="aws-cdk-sdk.amplify.AmplifyGetArtifactUrlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetArtifactUrlResult: amplify.AmplifyGetArtifactUrlResult = { ... }
```

##### `artifactId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetArtifactUrlResult.property.artifactId"></a>

- *Type:* `string`

---

##### `artifactUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetArtifactUrlResult.property.artifactUrl"></a>

- *Type:* `string`

---

### AmplifyGetBackendEnvironmentRequest <a name="aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetBackendEnvironmentRequest: amplify.AmplifyGetBackendEnvironmentRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest.property.appId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest.property.environmentName"></a>

- *Type:* `string`

---

### AmplifyGetBackendEnvironmentResult <a name="aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetBackendEnvironmentResult: amplify.AmplifyGetBackendEnvironmentResult = { ... }
```

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentResult.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyBackendEnvironment)

---

### AmplifyGetBranchRequest <a name="aws-cdk-sdk.amplify.AmplifyGetBranchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetBranchRequest: amplify.AmplifyGetBranchRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBranchRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBranchRequest.property.branchName"></a>

- *Type:* `string`

---

### AmplifyGetBranchResult <a name="aws-cdk-sdk.amplify.AmplifyGetBranchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetBranchResult: amplify.AmplifyGetBranchResult = { ... }
```

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetBranchResult.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)

---

### AmplifyGetDomainAssociationRequest <a name="aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetDomainAssociationRequest: amplify.AmplifyGetDomainAssociationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest.property.appId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest.property.domainName"></a>

- *Type:* `string`

---

### AmplifyGetDomainAssociationResult <a name="aws-cdk-sdk.amplify.AmplifyGetDomainAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetDomainAssociationResult: amplify.AmplifyGetDomainAssociationResult = { ... }
```

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetDomainAssociationResult.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)

---

### AmplifyGetJobRequest <a name="aws-cdk-sdk.amplify.AmplifyGetJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetJobRequest: amplify.AmplifyGetJobRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetJobRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetJobRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetJobRequest.property.jobId"></a>

- *Type:* `string`

---

### AmplifyGetJobResult <a name="aws-cdk-sdk.amplify.AmplifyGetJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetJobResult: amplify.AmplifyGetJobResult = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetJobResult.property.job"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJob`](#aws-cdk-sdk.amplify.AmplifyJob)

---

### AmplifyGetWebhookRequest <a name="aws-cdk-sdk.amplify.AmplifyGetWebhookRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetWebhookRequest: amplify.AmplifyGetWebhookRequest = { ... }
```

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetWebhookRequest.property.webhookId"></a>

- *Type:* `string`

---

### AmplifyGetWebhookResult <a name="aws-cdk-sdk.amplify.AmplifyGetWebhookResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyGetWebhookResult: amplify.AmplifyGetWebhookResult = { ... }
```

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyGetWebhookResult.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)

---

### AmplifyJob <a name="aws-cdk-sdk.amplify.AmplifyJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyJob: amplify.AmplifyJob = { ... }
```

##### `steps`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJob.property.steps"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStep`](#aws-cdk-sdk.amplify.AmplifyStep)[]

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJob.property.summary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)

---

### AmplifyJobSummary <a name="aws-cdk-sdk.amplify.AmplifyJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyJobSummary: amplify.AmplifyJobSummary = { ... }
```

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.status"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyJobSummary.property.endTime"></a>

- *Type:* `string`

---

### AmplifyListAppsRequest <a name="aws-cdk-sdk.amplify.AmplifyListAppsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListAppsRequest: amplify.AmplifyListAppsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListAppsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListAppsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListAppsResult <a name="aws-cdk-sdk.amplify.AmplifyListAppsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListAppsResult: amplify.AmplifyListAppsResult = { ... }
```

##### `apps`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListAppsResult.property.apps"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListAppsResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListArtifactsRequest <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListArtifactsRequest: amplify.AmplifyListArtifactsRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListArtifactsResult <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListArtifactsResult: amplify.AmplifyListArtifactsResult = { ... }
```

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsResult.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyArtifact`](#aws-cdk-sdk.amplify.AmplifyArtifact)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListArtifactsResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListBackendEnvironmentsRequest <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListBackendEnvironmentsRequest: amplify.AmplifyListBackendEnvironmentsRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest.property.appId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListBackendEnvironmentsResult <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListBackendEnvironmentsResult: amplify.AmplifyListBackendEnvironmentsResult = { ... }
```

##### `backendEnvironments`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsResult.property.backendEnvironments"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyBackendEnvironment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListBranchesRequest <a name="aws-cdk-sdk.amplify.AmplifyListBranchesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListBranchesRequest: amplify.AmplifyListBranchesRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBranchesRequest.property.appId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBranchesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBranchesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListBranchesResult <a name="aws-cdk-sdk.amplify.AmplifyListBranchesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListBranchesResult: amplify.AmplifyListBranchesResult = { ... }
```

##### `branches`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBranchesResult.property.branches"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListBranchesResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListDomainAssociationsRequest <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListDomainAssociationsRequest: amplify.AmplifyListDomainAssociationsRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest.property.appId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListDomainAssociationsResult <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListDomainAssociationsResult: amplify.AmplifyListDomainAssociationsResult = { ... }
```

##### `domainAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsResult.property.domainAssociations"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListDomainAssociationsResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListJobsRequest <a name="aws-cdk-sdk.amplify.AmplifyListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListJobsRequest: amplify.AmplifyListJobsRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsRequest.property.branchName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListJobsResult <a name="aws-cdk-sdk.amplify.AmplifyListJobsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListJobsResult: amplify.AmplifyListJobsResult = { ... }
```

##### `jobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsResult.property.jobSummaries"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListJobsResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListTagsForResourceRequest <a name="aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListTagsForResourceRequest: amplify.AmplifyListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AmplifyListTagsForResourceResponse <a name="aws-cdk-sdk.amplify.AmplifyListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListTagsForResourceResponse: amplify.AmplifyListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AmplifyListWebhooksRequest <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListWebhooksRequest: amplify.AmplifyListWebhooksRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksRequest.property.appId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksRequest.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyListWebhooksResult <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyListWebhooksResult: amplify.AmplifyListWebhooksResult = { ... }
```

##### `webhooks`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksResult.property.webhooks"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyListWebhooksResult.property.nextToken"></a>

- *Type:* `string`

---

### AmplifyProductionBranch <a name="aws-cdk-sdk.amplify.AmplifyProductionBranch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyProductionBranch: amplify.AmplifyProductionBranch = { ... }
```

##### `branchName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyProductionBranch.property.branchName"></a>

- *Type:* `string`

---

##### `lastDeployTime`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyProductionBranch.property.lastDeployTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyProductionBranch.property.status"></a>

- *Type:* `string`

---

##### `thumbnailUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyProductionBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

### AmplifyStartDeploymentRequest <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStartDeploymentRequest: amplify.AmplifyStartDeploymentRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest.property.jobId"></a>

- *Type:* `string`

---

##### `sourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest.property.sourceUrl"></a>

- *Type:* `string`

---

### AmplifyStartDeploymentResult <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStartDeploymentResult: amplify.AmplifyStartDeploymentResult = { ... }
```

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartDeploymentResult.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)

---

### AmplifyStartJobRequest <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStartJobRequest: amplify.AmplifyStartJobRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.jobType"></a>

- *Type:* `string`

---

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.commitTime"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `jobReason`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobRequest.property.jobReason"></a>

- *Type:* `string`

---

### AmplifyStartJobResult <a name="aws-cdk-sdk.amplify.AmplifyStartJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStartJobResult: amplify.AmplifyStartJobResult = { ... }
```

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStartJobResult.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)

---

### AmplifyStep <a name="aws-cdk-sdk.amplify.AmplifyStep"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStep: amplify.AmplifyStep = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.status"></a>

- *Type:* `string`

---

##### `stepName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.stepName"></a>

- *Type:* `string`

---

##### `artifactsUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.artifactsUrl"></a>

- *Type:* `string`

---

##### `context`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.context"></a>

- *Type:* `string`

---

##### `logUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.logUrl"></a>

- *Type:* `string`

---

##### `screenshots`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.screenshots"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.statusReason"></a>

- *Type:* `string`

---

##### `testArtifactsUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.testArtifactsUrl"></a>

- *Type:* `string`

---

##### `testConfigUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyStep.property.testConfigUrl"></a>

- *Type:* `string`

---

### AmplifyStopJobRequest <a name="aws-cdk-sdk.amplify.AmplifyStopJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStopJobRequest: amplify.AmplifyStopJobRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStopJobRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStopJobRequest.property.branchName"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStopJobRequest.property.jobId"></a>

- *Type:* `string`

---

### AmplifyStopJobResult <a name="aws-cdk-sdk.amplify.AmplifyStopJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyStopJobResult: amplify.AmplifyStopJobResult = { ... }
```

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyStopJobResult.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)

---

### AmplifySubDomain <a name="aws-cdk-sdk.amplify.AmplifySubDomain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifySubDomain: amplify.AmplifySubDomain = { ... }
```

##### `dnsRecord`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifySubDomain.property.dnsRecord"></a>

- *Type:* `string`

---

##### `subDomainSetting`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifySubDomain.property.subDomainSetting"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomainSetting`](#aws-cdk-sdk.amplify.AmplifySubDomainSetting)

---

##### `verified`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifySubDomain.property.verified"></a>

- *Type:* `boolean`

---

### AmplifySubDomainSetting <a name="aws-cdk-sdk.amplify.AmplifySubDomainSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifySubDomainSetting: amplify.AmplifySubDomainSetting = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifySubDomainSetting.property.branchName"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifySubDomainSetting.property.prefix"></a>

- *Type:* `string`

---

### AmplifyTagResourceRequest <a name="aws-cdk-sdk.amplify.AmplifyTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyTagResourceRequest: amplify.AmplifyTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AmplifyTagResourceResponse <a name="aws-cdk-sdk.amplify.AmplifyTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyTagResourceResponse: amplify.AmplifyTagResourceResponse = { ... }
```

### AmplifyUntagResourceRequest <a name="aws-cdk-sdk.amplify.AmplifyUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUntagResourceRequest: amplify.AmplifyUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AmplifyUntagResourceResponse <a name="aws-cdk-sdk.amplify.AmplifyUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUntagResourceResponse: amplify.AmplifyUntagResourceResponse = { ... }
```

### AmplifyUpdateAppRequest <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateAppRequest: amplify.AmplifyUpdateAppRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.appId"></a>

- *Type:* `string`

---

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.accessToken"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.buildSpec"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `oauthToken`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.oauthToken"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.platform"></a>

- *Type:* `string`

---

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppRequest.property.repository"></a>

- *Type:* `string`

---

### AmplifyUpdateAppResult <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateAppResult: amplify.AmplifyUpdateAppResult = { ... }
```

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateAppResult.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)

---

### AmplifyUpdateBranchRequest <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateBranchRequest: amplify.AmplifyUpdateBranchRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.appId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.branchName"></a>

- *Type:* `string`

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.buildSpec"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.stage"></a>

- *Type:* `string`

---

##### `ttl`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest.property.ttl"></a>

- *Type:* `string`

---

### AmplifyUpdateBranchResult <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateBranchResult: amplify.AmplifyUpdateBranchResult = { ... }
```

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateBranchResult.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)

---

### AmplifyUpdateDomainAssociationRequest <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateDomainAssociationRequest: amplify.AmplifyUpdateDomainAssociationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.appId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.domainName"></a>

- *Type:* `string`

---

##### `subDomainSettings`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.subDomainSettings"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomainSetting`](#aws-cdk-sdk.amplify.AmplifySubDomainSetting)[]

---

##### `autoSubDomainCreationPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIAMRole`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.autoSubDomainIAMRole"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

### AmplifyUpdateDomainAssociationResult <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateDomainAssociationResult: amplify.AmplifyUpdateDomainAssociationResult = { ... }
```

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationResult.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)

---

### AmplifyUpdateWebhookRequest <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateWebhookRequest: amplify.AmplifyUpdateWebhookRequest = { ... }
```

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest.property.webhookId"></a>

- *Type:* `string`

---

##### `branchName`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest.property.branchName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest.property.description"></a>

- *Type:* `string`

---

### AmplifyUpdateWebhookResult <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyUpdateWebhookResult: amplify.AmplifyUpdateWebhookResult = { ... }
```

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyUpdateWebhookResult.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)

---

### AmplifyWebhook <a name="aws-cdk-sdk.amplify.AmplifyWebhook"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

const amplifyWebhook: amplify.AmplifyWebhook = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.description"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.updateTime"></a>

- *Type:* `string`

---

##### `webhookArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.webhookArn"></a>

- *Type:* `string`

---

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.webhookId"></a>

- *Type:* `string`

---

##### `webhookUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyWebhook.property.webhookUrl"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AmplifyResponsesCreateApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateApp(__scope: Construct, __resources: string[], __input: AmplifyCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateAppRequest`](#aws-cdk-sdk.amplify.AmplifyCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateApp.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp)

---


### AmplifyResponsesCreateAppApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateAppApp(__scope: Construct, __resources: string[], __input: AmplifyCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateAppRequest`](#aws-cdk-sdk.amplify.AmplifyCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.appArn"></a>

- *Type:* `string`

---

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.appId"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.createTime"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `defaultDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.defaultDomain"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.platform"></a>

- *Type:* `string`

---

##### `productionBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.productionBranch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch)

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.repository"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppApp.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateAppAppAutoBranchCreationConfig <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig(__scope: Construct, __resources: string[], __input: AmplifyCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateAppRequest`](#aws-cdk-sdk.amplify.AmplifyCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.buildSpec"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppAutoBranchCreationConfig.property.stage"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateAppAppProductionBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateAppAppProductionBranch(__scope: Construct, __resources: string[], __input: AmplifyCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateAppRequest`](#aws-cdk-sdk.amplify.AmplifyCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.property.branchName"></a>

- *Type:* `string`

---

##### `lastDeployTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.property.lastDeployTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.property.status"></a>

- *Type:* `string`

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateAppAppProductionBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyCreateBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironment.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment)

---


### AmplifyResponsesCreateBackendEnvironmentBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyCreateBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.deploymentArtifacts"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.stackName"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBackendEnvironmentBackendEnvironment.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateBranch(__scope: Construct, __resources: string[], __input: AmplifyCreateBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranch.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch)

---


### AmplifyResponsesCreateBranchBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateBranchBranch(__scope: Construct, __resources: string[], __input: AmplifyCreateBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyCreateBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `activeJobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.activeJobId"></a>

- *Type:* `string`

---

##### `associatedResources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.associatedResources"></a>

- *Type:* `string`[]

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `branchArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.branchArn"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.branchName"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.createTime"></a>

- *Type:* `string`

---

##### `customDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.customDomains"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.description"></a>

- *Type:* `string`

---

##### `destinationBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.destinationBranch"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.sourceBranch"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.stage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

##### `totalNumberOfJobs`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.totalNumberOfJobs"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.ttl"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateBranchBranch.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateDeployment <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: AmplifyCreateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest`](#aws-cdk-sdk.amplify.AmplifyCreateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `fileUploadUrls`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.property.fileUploadUrls"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.property.jobId"></a>

- *Type:* `string`

---

##### `zipUploadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDeployment.property.zipUploadUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesCreateDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyCreateDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociation.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation)

---


### AmplifyResponsesCreateDomainAssociationDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyCreateDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyCreateDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoSubDomainCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIamRole`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.autoSubDomainIamRole"></a>

- *Type:* `string`

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.certificateVerificationDnsRecord"></a>

- *Type:* `string`

---

##### `domainAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.domainAssociationArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.domainStatus"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.statusReason"></a>

- *Type:* `string`

---

##### `subDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateDomainAssociationDomainAssociation.property.subDomains"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomain`](#aws-cdk-sdk.amplify.AmplifySubDomain)[]

---


### AmplifyResponsesCreateWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateWebhook(__scope: Construct, __resources: string[], __input: AmplifyCreateWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook`](#aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook)

---


### AmplifyResponsesCreateWebhookWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesCreateWebhookWebhook(__scope: Construct, __resources: string[], __input: AmplifyCreateWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyCreateWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.description"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.updateTime"></a>

- *Type:* `string`

---

##### `webhookArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.webhookArn"></a>

- *Type:* `string`

---

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.webhookId"></a>

- *Type:* `string`

---

##### `webhookUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesCreateWebhookWebhook.property.webhookUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteApp(__scope: Construct, __resources: string[], __input: AmplifyDeleteAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteAppRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteAppRequest)

---



#### Properties <a name="Properties"></a>

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteApp.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp)

---


### AmplifyResponsesDeleteAppApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteAppApp(__scope: Construct, __resources: string[], __input: AmplifyDeleteAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteAppRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.appArn"></a>

- *Type:* `string`

---

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.appId"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.createTime"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `defaultDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.defaultDomain"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.platform"></a>

- *Type:* `string`

---

##### `productionBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.productionBranch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch)

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.repository"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppApp.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteAppAppAutoBranchCreationConfig <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig(__scope: Construct, __resources: string[], __input: AmplifyDeleteAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteAppRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteAppRequest)

---



#### Properties <a name="Properties"></a>

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.buildSpec"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppAutoBranchCreationConfig.property.stage"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteAppAppProductionBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteAppAppProductionBranch(__scope: Construct, __resources: string[], __input: AmplifyDeleteAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteAppRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteAppRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.property.branchName"></a>

- *Type:* `string`

---

##### `lastDeployTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.property.lastDeployTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.property.status"></a>

- *Type:* `string`

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteAppAppProductionBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyDeleteBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironment.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment)

---


### AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyDeleteBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.deploymentArtifacts"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.stackName"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBackendEnvironmentBackendEnvironment.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteBranch(__scope: Construct, __resources: string[], __input: AmplifyDeleteBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranch.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch)

---


### AmplifyResponsesDeleteBranchBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteBranchBranch(__scope: Construct, __resources: string[], __input: AmplifyDeleteBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `activeJobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.activeJobId"></a>

- *Type:* `string`

---

##### `associatedResources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.associatedResources"></a>

- *Type:* `string`[]

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `branchArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.branchArn"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.branchName"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.createTime"></a>

- *Type:* `string`

---

##### `customDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.customDomains"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.description"></a>

- *Type:* `string`

---

##### `destinationBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.destinationBranch"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.sourceBranch"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.stage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

##### `totalNumberOfJobs`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.totalNumberOfJobs"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.ttl"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteBranchBranch.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyDeleteDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociation.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation)

---


### AmplifyResponsesDeleteDomainAssociationDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyDeleteDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoSubDomainCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIamRole`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.autoSubDomainIamRole"></a>

- *Type:* `string`

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.certificateVerificationDnsRecord"></a>

- *Type:* `string`

---

##### `domainAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.domainAssociationArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.domainStatus"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.statusReason"></a>

- *Type:* `string`

---

##### `subDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteDomainAssociationDomainAssociation.property.subDomains"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomain`](#aws-cdk-sdk.amplify.AmplifySubDomain)[]

---


### AmplifyResponsesDeleteJob <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteJob(__scope: Construct, __resources: string[], __input: AmplifyDeleteJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteJobRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJob.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary)

---


### AmplifyResponsesDeleteJobJobSummary <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteJobJobSummary(__scope: Construct, __resources: string[], __input: AmplifyDeleteJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteJobRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteJobRequest)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.endTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteJobJobSummary.property.status"></a>

- *Type:* `string`

---


### AmplifyResponsesDeleteWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteWebhook(__scope: Construct, __resources: string[], __input: AmplifyDeleteWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook`](#aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook)

---


### AmplifyResponsesDeleteWebhookWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesDeleteWebhookWebhook(__scope: Construct, __resources: string[], __input: AmplifyDeleteWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyDeleteWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.description"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.updateTime"></a>

- *Type:* `string`

---

##### `webhookArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.webhookArn"></a>

- *Type:* `string`

---

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.webhookId"></a>

- *Type:* `string`

---

##### `webhookUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesDeleteWebhookWebhook.property.webhookUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchApp(__scope: Construct, __resources: string[], __input: AmplifyGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetAppRequest`](#aws-cdk-sdk.amplify.AmplifyGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchApp.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp)

---


### AmplifyResponsesFetchAppApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchAppApp(__scope: Construct, __resources: string[], __input: AmplifyGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetAppRequest`](#aws-cdk-sdk.amplify.AmplifyGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.appArn"></a>

- *Type:* `string`

---

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.appId"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.createTime"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `defaultDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.defaultDomain"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.platform"></a>

- *Type:* `string`

---

##### `productionBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.productionBranch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch)

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.repository"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppApp.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchAppAppAutoBranchCreationConfig <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig(__scope: Construct, __resources: string[], __input: AmplifyGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetAppRequest`](#aws-cdk-sdk.amplify.AmplifyGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.buildSpec"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppAutoBranchCreationConfig.property.stage"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchAppAppProductionBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchAppAppProductionBranch(__scope: Construct, __resources: string[], __input: AmplifyGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetAppRequest`](#aws-cdk-sdk.amplify.AmplifyGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.property.branchName"></a>

- *Type:* `string`

---

##### `lastDeployTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.property.lastDeployTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.property.status"></a>

- *Type:* `string`

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchAppAppProductionBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchArtifactUrl <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchArtifactUrl(__scope: Construct, __resources: string[], __input: AmplifyGetArtifactUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest`](#aws-cdk-sdk.amplify.AmplifyGetArtifactUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `artifactId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.property.artifactId"></a>

- *Type:* `string`

---

##### `artifactUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchArtifactUrl.property.artifactUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyGetBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironment.property.backendEnvironment"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment)

---


### AmplifyResponsesFetchBackendEnvironmentBackendEnvironment <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment(__scope: Construct, __resources: string[], __input: AmplifyGetBackendEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest`](#aws-cdk-sdk.amplify.AmplifyGetBackendEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.deploymentArtifacts"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.stackName"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBackendEnvironmentBackendEnvironment.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchBranch(__scope: Construct, __resources: string[], __input: AmplifyGetBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBranchRequest`](#aws-cdk-sdk.amplify.AmplifyGetBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranch.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch)

---


### AmplifyResponsesFetchBranchBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchBranchBranch(__scope: Construct, __resources: string[], __input: AmplifyGetBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetBranchRequest`](#aws-cdk-sdk.amplify.AmplifyGetBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `activeJobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.activeJobId"></a>

- *Type:* `string`

---

##### `associatedResources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.associatedResources"></a>

- *Type:* `string`[]

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `branchArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.branchArn"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.branchName"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.createTime"></a>

- *Type:* `string`

---

##### `customDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.customDomains"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.description"></a>

- *Type:* `string`

---

##### `destinationBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.destinationBranch"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.sourceBranch"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.stage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

##### `totalNumberOfJobs`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.totalNumberOfJobs"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.ttl"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchBranchBranch.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyGetDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociation.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation)

---


### AmplifyResponsesFetchDomainAssociationDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyGetDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyGetDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoSubDomainCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIamRole`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.autoSubDomainIamRole"></a>

- *Type:* `string`

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.certificateVerificationDnsRecord"></a>

- *Type:* `string`

---

##### `domainAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.domainAssociationArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.domainStatus"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.statusReason"></a>

- *Type:* `string`

---

##### `subDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchDomainAssociationDomainAssociation.property.subDomains"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomain`](#aws-cdk-sdk.amplify.AmplifySubDomain)[]

---


### AmplifyResponsesFetchJob <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchJob(__scope: Construct, __resources: string[], __input: AmplifyGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetJobRequest`](#aws-cdk-sdk.amplify.AmplifyGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob)

---


### AmplifyResponsesFetchJobJob <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchJobJob(__scope: Construct, __resources: string[], __input: AmplifyGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetJobRequest`](#aws-cdk-sdk.amplify.AmplifyGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `steps`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.property.steps"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStep`](#aws-cdk-sdk.amplify.AmplifyStep)[]

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJob.property.summary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary)

---


### AmplifyResponsesFetchJobJobSummary <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchJobJobSummary(__scope: Construct, __resources: string[], __input: AmplifyGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetJobRequest`](#aws-cdk-sdk.amplify.AmplifyGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.endTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchJobJobSummary.property.status"></a>

- *Type:* `string`

---


### AmplifyResponsesFetchWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchWebhook(__scope: Construct, __resources: string[], __input: AmplifyGetWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyGetWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook`](#aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook)

---


### AmplifyResponsesFetchWebhookWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesFetchWebhookWebhook(__scope: Construct, __resources: string[], __input: AmplifyGetWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGetWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyGetWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.description"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.updateTime"></a>

- *Type:* `string`

---

##### `webhookArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.webhookArn"></a>

- *Type:* `string`

---

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.webhookId"></a>

- *Type:* `string`

---

##### `webhookUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesFetchWebhookWebhook.property.webhookUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesGenerateAccessLogs <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesGenerateAccessLogs(__scope: Construct, __resources: string[], __input: AmplifyGenerateAccessLogsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest`](#aws-cdk-sdk.amplify.AmplifyGenerateAccessLogsRequest)

---



#### Properties <a name="Properties"></a>

##### `logUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesGenerateAccessLogs.property.logUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesListApps <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListApps(__scope: Construct, __resources: string[], __input: AmplifyListAppsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListAppsRequest`](#aws-cdk-sdk.amplify.AmplifyListAppsRequest)

---



#### Properties <a name="Properties"></a>

##### `apps`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.property.apps"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyApp`](#aws-cdk-sdk.amplify.AmplifyApp)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListApps.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListArtifacts <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListArtifacts(__scope: Construct, __resources: string[], __input: AmplifyListArtifactsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListArtifactsRequest`](#aws-cdk-sdk.amplify.AmplifyListArtifactsRequest)

---



#### Properties <a name="Properties"></a>

##### `artifacts`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.property.artifacts"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyArtifact`](#aws-cdk-sdk.amplify.AmplifyArtifact)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListArtifacts.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListBackendEnvironments <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListBackendEnvironments(__scope: Construct, __resources: string[], __input: AmplifyListBackendEnvironmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest`](#aws-cdk-sdk.amplify.AmplifyListBackendEnvironmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `backendEnvironments`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.property.backendEnvironments"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBackendEnvironment`](#aws-cdk-sdk.amplify.AmplifyBackendEnvironment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBackendEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListBranches <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListBranches(__scope: Construct, __resources: string[], __input: AmplifyListBranchesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListBranchesRequest`](#aws-cdk-sdk.amplify.AmplifyListBranchesRequest)

---



#### Properties <a name="Properties"></a>

##### `branches`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.property.branches"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyBranch`](#aws-cdk-sdk.amplify.AmplifyBranch)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListBranches.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListDomainAssociations <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListDomainAssociations(__scope: Construct, __resources: string[], __input: AmplifyListDomainAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest`](#aws-cdk-sdk.amplify.AmplifyListDomainAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `domainAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.property.domainAssociations"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyDomainAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListDomainAssociations.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListJobs <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListJobs(__scope: Construct, __resources: string[], __input: AmplifyListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListJobsRequest`](#aws-cdk-sdk.amplify.AmplifyListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.property.jobSummaries"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyJobSummary`](#aws-cdk-sdk.amplify.AmplifyJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### AmplifyResponsesListTagsForResource <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AmplifyListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest`](#aws-cdk-sdk.amplify.AmplifyListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### AmplifyResponsesListWebhooks <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesListWebhooks(__scope: Construct, __resources: string[], __input: AmplifyListWebhooksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyListWebhooksRequest`](#aws-cdk-sdk.amplify.AmplifyListWebhooksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.property.nextToken"></a>

- *Type:* `string`

---

##### `webhooks`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesListWebhooks.property.webhooks"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyWebhook`](#aws-cdk-sdk.amplify.AmplifyWebhook)[]

---


### AmplifyResponsesStartDeployment <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStartDeployment(__scope: Construct, __resources: string[], __input: AmplifyStartDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest`](#aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeployment.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary`](#aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary)

---


### AmplifyResponsesStartDeploymentJobSummary <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStartDeploymentJobSummary(__scope: Construct, __resources: string[], __input: AmplifyStartDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest`](#aws-cdk-sdk.amplify.AmplifyStartDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.endTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartDeploymentJobSummary.property.status"></a>

- *Type:* `string`

---


### AmplifyResponsesStartJob <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStartJob(__scope: Construct, __resources: string[], __input: AmplifyStartJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartJobRequest`](#aws-cdk-sdk.amplify.AmplifyStartJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJob.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary`](#aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary)

---


### AmplifyResponsesStartJobJobSummary <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStartJobJobSummary(__scope: Construct, __resources: string[], __input: AmplifyStartJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStartJobRequest`](#aws-cdk-sdk.amplify.AmplifyStartJobRequest)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.endTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStartJobJobSummary.property.status"></a>

- *Type:* `string`

---


### AmplifyResponsesStopJob <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStopJob(__scope: Construct, __resources: string[], __input: AmplifyStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStopJobRequest`](#aws-cdk-sdk.amplify.AmplifyStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummary`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJob.property.jobSummary"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary`](#aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary)

---


### AmplifyResponsesStopJobJobSummary <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesStopJobJobSummary(__scope: Construct, __resources: string[], __input: AmplifyStopJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyStopJobRequest`](#aws-cdk-sdk.amplify.AmplifyStopJobRequest)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.commitId"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.commitMessage"></a>

- *Type:* `string`

---

##### `commitTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.commitTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.endTime"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.jobType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesStopJobJobSummary.property.status"></a>

- *Type:* `string`

---


### AmplifyResponsesUpdateApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateApp(__scope: Construct, __resources: string[], __input: AmplifyUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateAppRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `app`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateApp.property.app"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp)

---


### AmplifyResponsesUpdateAppApp <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateAppApp(__scope: Construct, __resources: string[], __input: AmplifyUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateAppRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.appArn"></a>

- *Type:* `string`

---

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.appId"></a>

- *Type:* `string`

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.autoBranchCreationConfig"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig)

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.autoBranchCreationPatterns"></a>

- *Type:* `string`[]

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.createTime"></a>

- *Type:* `string`

---

##### `customHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.customHeaders"></a>

- *Type:* `string`

---

##### `customRules`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.customRules"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyCustomRule`](#aws-cdk-sdk.amplify.AmplifyCustomRule)[]

---

##### `defaultDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.defaultDomain"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.description"></a>

- *Type:* `string`

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.enableAutoBranchCreation"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.enableBranchAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.enableBranchAutoDeletion"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `iamServiceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.iamServiceRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.platform"></a>

- *Type:* `string`

---

##### `productionBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.productionBranch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch)

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.repository"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppApp.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesUpdateAppAppAutoBranchCreationConfig <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig(__scope: Construct, __resources: string[], __input: AmplifyUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateAppRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.buildSpec"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppAutoBranchCreationConfig.property.stage"></a>

- *Type:* `string`

---


### AmplifyResponsesUpdateAppAppProductionBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateAppAppProductionBranch(__scope: Construct, __resources: string[], __input: AmplifyUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateAppRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.property.branchName"></a>

- *Type:* `string`

---

##### `lastDeployTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.property.lastDeployTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.property.status"></a>

- *Type:* `string`

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateAppAppProductionBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---


### AmplifyResponsesUpdateBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateBranch(__scope: Construct, __resources: string[], __input: AmplifyUpdateBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranch.property.branch"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch)

---


### AmplifyResponsesUpdateBranchBranch <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateBranchBranch(__scope: Construct, __resources: string[], __input: AmplifyUpdateBranchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateBranchRequest)

---



#### Properties <a name="Properties"></a>

##### `activeJobId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.activeJobId"></a>

- *Type:* `string`

---

##### `associatedResources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.associatedResources"></a>

- *Type:* `string`[]

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.backendEnvironmentArn"></a>

- *Type:* `string`

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.basicAuthCredentials"></a>

- *Type:* `string`

---

##### `branchArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.branchArn"></a>

- *Type:* `string`

---

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.branchName"></a>

- *Type:* `string`

---

##### `buildSpec`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.buildSpec"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.createTime"></a>

- *Type:* `string`

---

##### `customDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.customDomains"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.description"></a>

- *Type:* `string`

---

##### `destinationBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.destinationBranch"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.displayName"></a>

- *Type:* `string`

---

##### `enableAutoBuild`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.enableAutoBuild"></a>

- *Type:* `boolean`

---

##### `enableBasicAuth`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.enableBasicAuth"></a>

- *Type:* `boolean`

---

##### `enableNotification`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.enableNotification"></a>

- *Type:* `boolean`

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.enablePerformanceMode"></a>

- *Type:* `boolean`

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.enablePullRequestPreview"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.framework"></a>

- *Type:* `string`

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.pullRequestEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceBranch`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.sourceBranch"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.stage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thumbnailUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.thumbnailUrl"></a>

- *Type:* `string`

---

##### `totalNumberOfJobs`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.totalNumberOfJobs"></a>

- *Type:* `string`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.ttl"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateBranchBranch.property.updateTime"></a>

- *Type:* `string`

---


### AmplifyResponsesUpdateDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyUpdateDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `domainAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociation.property.domainAssociation"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation)

---


### AmplifyResponsesUpdateDomainAssociationDomainAssociation <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation(__scope: Construct, __resources: string[], __input: AmplifyUpdateDomainAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateDomainAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `autoSubDomainCreationPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.autoSubDomainCreationPatterns"></a>

- *Type:* `string`[]

---

##### `autoSubDomainIamRole`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.autoSubDomainIamRole"></a>

- *Type:* `string`

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.certificateVerificationDnsRecord"></a>

- *Type:* `string`

---

##### `domainAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.domainAssociationArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.domainStatus"></a>

- *Type:* `string`

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.enableAutoSubDomain"></a>

- *Type:* `boolean`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.statusReason"></a>

- *Type:* `string`

---

##### `subDomains`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateDomainAssociationDomainAssociation.property.subDomains"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifySubDomain`](#aws-cdk-sdk.amplify.AmplifySubDomain)[]

---


### AmplifyResponsesUpdateWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateWebhook(__scope: Construct, __resources: string[], __input: AmplifyUpdateWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook`](#aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook)

---


### AmplifyResponsesUpdateWebhookWebhook <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.Initializer"></a>

```typescript
import { amplify } from 'aws-cdk-sdk'

new amplify.AmplifyResponsesUpdateWebhookWebhook(__scope: Construct, __resources: string[], __input: AmplifyUpdateWebhookRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest`](#aws-cdk-sdk.amplify.AmplifyUpdateWebhookRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.branchName"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.description"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.updateTime"></a>

- *Type:* `string`

---

##### `webhookArn`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.webhookArn"></a>

- *Type:* `string`

---

##### `webhookId`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.webhookId"></a>

- *Type:* `string`

---

##### `webhookUrl`<sup>Required</sup> <a name="aws-cdk-sdk.amplify.AmplifyResponsesUpdateWebhookWebhook.property.webhookUrl"></a>

- *Type:* `string`

---



