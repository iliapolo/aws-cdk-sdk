# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodePipelineClient <a name="aws-cdk-sdk.codepipeline.CodePipelineClient"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acknowledgeJob` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.acknowledgeJob"></a>

```typescript
public acknowledgeJob(input: CodePipelineAcknowledgeJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput`](#aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput)

---

##### `acknowledgeThirdPartyJob` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.acknowledgeThirdPartyJob"></a>

```typescript
public acknowledgeThirdPartyJob(input: CodePipelineAcknowledgeThirdPartyJobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput`](#aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput)

---

##### `createCustomActionType` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.createCustomActionType"></a>

```typescript
public createCustomActionType(input: CodePipelineCreateCustomActionTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---

##### `createPipeline` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.createPipeline"></a>

```typescript
public createPipeline(input: CodePipelineCreatePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput)

---

##### `deleteCustomActionType` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.deleteCustomActionType"></a>

```typescript
public deleteCustomActionType(input: CodePipelineDeleteCustomActionTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput)

---

##### `deletePipeline` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.deletePipeline"></a>

```typescript
public deletePipeline(input: CodePipelineDeletePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineDeletePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineDeletePipelineInput)

---

##### `deleteWebhook` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.deleteWebhook"></a>

```typescript
public deleteWebhook(input: CodePipelineDeleteWebhookInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineDeleteWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelineDeleteWebhookInput)

---

##### `deregisterWebhookWithThirdParty` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.deregisterWebhookWithThirdParty"></a>

```typescript
public deregisterWebhookWithThirdParty(input: CodePipelineDeregisterWebhookWithThirdPartyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineDeregisterWebhookWithThirdPartyInput`](#aws-cdk-sdk.codepipeline.CodePipelineDeregisterWebhookWithThirdPartyInput)

---

##### `disableStageTransition` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.disableStageTransition"></a>

```typescript
public disableStageTransition(input: CodePipelineDisableStageTransitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput`](#aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput)

---

##### `enableStageTransition` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.enableStageTransition"></a>

```typescript
public enableStageTransition(input: CodePipelineEnableStageTransitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput`](#aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput)

---

##### `fetchJobDetails` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.fetchJobDetails"></a>

```typescript
public fetchJobDetails(input: CodePipelineGetJobDetailsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---

##### `fetchPipeline` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.fetchPipeline"></a>

```typescript
public fetchPipeline(input: CodePipelineGetPipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---

##### `fetchPipelineExecution` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.fetchPipelineExecution"></a>

```typescript
public fetchPipelineExecution(input: CodePipelineGetPipelineExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput)

---

##### `fetchPipelineState` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.fetchPipelineState"></a>

```typescript
public fetchPipelineState(input: CodePipelineGetPipelineStateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput)

---

##### `fetchThirdPartyJobDetails` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.fetchThirdPartyJobDetails"></a>

```typescript
public fetchThirdPartyJobDetails(input: CodePipelineGetThirdPartyJobDetailsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---

##### `listActionExecutions` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listActionExecutions"></a>

```typescript
public listActionExecutions(input: CodePipelineListActionExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput`](#aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput)

---

##### `listActionTypes` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listActionTypes"></a>

```typescript
public listActionTypes(input: CodePipelineListActionTypesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput`](#aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput)

---

##### `listPipelineExecutions` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listPipelineExecutions"></a>

```typescript
public listPipelineExecutions(input: CodePipelineListPipelineExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput`](#aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput)

---

##### `listPipelines` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listPipelines"></a>

```typescript
public listPipelines(input: CodePipelineListPipelinesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput`](#aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodePipelineListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput`](#aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput)

---

##### `listWebhooks` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.listWebhooks"></a>

```typescript
public listWebhooks(input: CodePipelineListWebhooksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput`](#aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput)

---

##### `pollForJobs` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.pollForJobs"></a>

```typescript
public pollForJobs(input: CodePipelinePollForJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput`](#aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput)

---

##### `pollForThirdPartyJobs` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.pollForThirdPartyJobs"></a>

```typescript
public pollForThirdPartyJobs(input: CodePipelinePollForThirdPartyJobsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput`](#aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput)

---

##### `putActionRevision` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putActionRevision"></a>

```typescript
public putActionRevision(input: CodePipelinePutActionRevisionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput)

---

##### `putApprovalResult` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putApprovalResult"></a>

```typescript
public putApprovalResult(input: CodePipelinePutApprovalResultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput)

---

##### `putJobFailureResult` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putJobFailureResult"></a>

```typescript
public putJobFailureResult(input: CodePipelinePutJobFailureResultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutJobFailureResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutJobFailureResultInput)

---

##### `putJobSuccessResult` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putJobSuccessResult"></a>

```typescript
public putJobSuccessResult(input: CodePipelinePutJobSuccessResultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput)

---

##### `putThirdPartyJobFailureResult` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putThirdPartyJobFailureResult"></a>

```typescript
public putThirdPartyJobFailureResult(input: CodePipelinePutThirdPartyJobFailureResultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput)

---

##### `putThirdPartyJobSuccessResult` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putThirdPartyJobSuccessResult"></a>

```typescript
public putThirdPartyJobSuccessResult(input: CodePipelinePutThirdPartyJobSuccessResultInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput)

---

##### `putWebhook` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.putWebhook"></a>

```typescript
public putWebhook(input: CodePipelinePutWebhookInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput)

---

##### `registerWebhookWithThirdParty` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.registerWebhookWithThirdParty"></a>

```typescript
public registerWebhookWithThirdParty(input: CodePipelineRegisterWebhookWithThirdPartyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineRegisterWebhookWithThirdPartyInput`](#aws-cdk-sdk.codepipeline.CodePipelineRegisterWebhookWithThirdPartyInput)

---

##### `retryStageExecution` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.retryStageExecution"></a>

```typescript
public retryStageExecution(input: CodePipelineRetryStageExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput)

---

##### `startPipelineExecution` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.startPipelineExecution"></a>

```typescript
public startPipelineExecution(input: CodePipelineStartPipelineExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput)

---

##### `stopPipelineExecution` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.stopPipelineExecution"></a>

```typescript
public stopPipelineExecution(input: CodePipelineStopPipelineExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput)

---

##### `tagResource` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.tagResource"></a>

```typescript
public tagResource(input: CodePipelineTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTagResourceInput`](#aws-cdk-sdk.codepipeline.CodePipelineTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.untagResource"></a>

```typescript
public untagResource(input: CodePipelineUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUntagResourceInput`](#aws-cdk-sdk.codepipeline.CodePipelineUntagResourceInput)

---

##### `updatePipeline` <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.updatePipeline"></a>

```typescript
public updatePipeline(input: CodePipelineUpdatePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput)

---




## Structs <a name="Structs"></a>

### CodePipelineAcknowledgeJobInput <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineAcknowledgeJobInput: codepipeline.CodePipelineAcknowledgeJobInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput.property.jobId"></a>

- *Type:* `string`

---

##### `nonce`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput.property.nonce"></a>

- *Type:* `string`

---

### CodePipelineAcknowledgeJobOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineAcknowledgeJobOutput: codepipeline.CodePipelineAcknowledgeJobOutput = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobOutput.property.status"></a>

- *Type:* `string`

---

### CodePipelineAcknowledgeThirdPartyJobInput <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineAcknowledgeThirdPartyJobInput: codepipeline.CodePipelineAcknowledgeThirdPartyJobInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput.property.clientToken"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput.property.jobId"></a>

- *Type:* `string`

---

##### `nonce`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput.property.nonce"></a>

- *Type:* `string`

---

### CodePipelineAcknowledgeThirdPartyJobOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineAcknowledgeThirdPartyJobOutput: codepipeline.CodePipelineAcknowledgeThirdPartyJobOutput = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobOutput.property.status"></a>

- *Type:* `string`

---

### CodePipelineActionConfiguration <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionConfiguration: codepipeline.CodePipelineActionConfiguration = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration.property.configuration"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodePipelineActionConfigurationProperty <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionConfigurationProperty: codepipeline.CodePipelineActionConfigurationProperty = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.key"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.name"></a>

- *Type:* `string`

---

##### `required`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.required"></a>

- *Type:* `boolean`

---

##### `secret`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.secret"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.description"></a>

- *Type:* `string`

---

##### `queryable`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.queryable"></a>

- *Type:* `boolean`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty.property.type"></a>

- *Type:* `string`

---

### CodePipelineActionContext <a name="aws-cdk-sdk.codepipeline.CodePipelineActionContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionContext: codepipeline.CodePipelineActionContext = { ... }
```

##### `actionExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionContext.property.actionExecutionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionContext.property.name"></a>

- *Type:* `string`

---

### CodePipelineActionDeclaration <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionDeclaration: codepipeline.CodePipelineActionDeclaration = { ... }
```

##### `actionTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.name"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.configuration"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `inputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineInputArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineInputArtifact)[]

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.namespace"></a>

- *Type:* `string`

---

##### `outputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineOutputArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineOutputArtifact)[]

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.region"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.roleArn"></a>

- *Type:* `string`

---

##### `runOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration.property.runOrder"></a>

- *Type:* `number`

---

### CodePipelineActionExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecution: codepipeline.CodePipelineActionExecution = { ... }
```

##### `actionExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.actionExecutionId"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineErrorDetails`](#aws-cdk-sdk.codepipeline.CodePipelineErrorDetails)

---

##### `externalExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.externalExecutionId"></a>

- *Type:* `string`

---

##### `externalExecutionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.externalExecutionUrl"></a>

- *Type:* `string`

---

##### `lastStatusChange`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.lastStatusChange"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `percentComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.percentComplete"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.summary"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecution.property.token"></a>

- *Type:* `string`

---

### CodePipelineActionExecutionDetail <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecutionDetail: codepipeline.CodePipelineActionExecutionDetail = { ... }
```

##### `actionExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.actionExecutionId"></a>

- *Type:* `string`

---

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.actionName"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput)

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.output"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput)

---

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.pipelineVersion"></a>

- *Type:* `number`

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.stageName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail.property.status"></a>

- *Type:* `string`

---

### CodePipelineActionExecutionFilter <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecutionFilter: codepipeline.CodePipelineActionExecutionFilter = { ... }
```

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionFilter.property.pipelineExecutionId"></a>

- *Type:* `string`

---

### CodePipelineActionExecutionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecutionInput: codepipeline.CodePipelineActionExecutionInput = { ... }
```

##### `actionTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.configuration"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `inputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail)[]

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.namespace"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.region"></a>

- *Type:* `string`

---

##### `resolvedConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.resolvedConfiguration"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionInput.property.roleArn"></a>

- *Type:* `string`

---

### CodePipelineActionExecutionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecutionOutput: codepipeline.CodePipelineActionExecutionOutput = { ... }
```

##### `executionResult`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput.property.executionResult"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult)

---

##### `outputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail)[]

---

##### `outputVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionOutput.property.outputVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodePipelineActionExecutionResult <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionExecutionResult: codepipeline.CodePipelineActionExecutionResult = { ... }
```

##### `externalExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult.property.externalExecutionId"></a>

- *Type:* `string`

---

##### `externalExecutionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult.property.externalExecutionSummary"></a>

- *Type:* `string`

---

##### `externalExecutionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionExecutionResult.property.externalExecutionUrl"></a>

- *Type:* `string`

---

### CodePipelineActionRevision <a name="aws-cdk-sdk.codepipeline.CodePipelineActionRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionRevision: codepipeline.CodePipelineActionRevision = { ... }
```

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionRevision.property.created"></a>

- *Type:* `string`

---

##### `revisionChangeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionRevision.property.revisionChangeId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionRevision.property.revisionId"></a>

- *Type:* `string`

---

### CodePipelineActionState <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionState: codepipeline.CodePipelineActionState = { ... }
```

##### `actionName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState.property.actionName"></a>

- *Type:* `string`

---

##### `currentRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState.property.currentRevision"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionRevision`](#aws-cdk-sdk.codepipeline.CodePipelineActionRevision)

---

##### `entityUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState.property.entityUrl"></a>

- *Type:* `string`

---

##### `latestExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState.property.latestExecution"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecution`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecution)

---

##### `revisionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionState.property.revisionUrl"></a>

- *Type:* `string`

---

### CodePipelineActionType <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionType: codepipeline.CodePipelineActionType = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType.property.id"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType.property.inputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails)

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType.property.outputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails)

---

##### `actionConfigurationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType.property.actionConfigurationProperties"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty`](#aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty)[]

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionType.property.settings"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings)

---

### CodePipelineActionTypeId <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionTypeId: codepipeline.CodePipelineActionTypeId = { ... }
```

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeId.property.category"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeId.property.owner"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeId.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeId.property.version"></a>

- *Type:* `string`

---

### CodePipelineActionTypeSettings <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineActionTypeSettings: codepipeline.CodePipelineActionTypeSettings = { ... }
```

##### `entityUrlTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings.property.entityUrlTemplate"></a>

- *Type:* `string`

---

##### `executionUrlTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings.property.executionUrlTemplate"></a>

- *Type:* `string`

---

##### `revisionUrlTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings.property.revisionUrlTemplate"></a>

- *Type:* `string`

---

##### `thirdPartyConfigurationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

- *Type:* `string`

---

### CodePipelineApprovalResult <a name="aws-cdk-sdk.codepipeline.CodePipelineApprovalResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineApprovalResult: codepipeline.CodePipelineApprovalResult = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineApprovalResult.property.status"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineApprovalResult.property.summary"></a>

- *Type:* `string`

---

### CodePipelineArtifact <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifact: codepipeline.CodePipelineArtifact = { ... }
```

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifact.property.location"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactLocation`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifact.property.name"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifact.property.revision"></a>

- *Type:* `string`

---

### CodePipelineArtifactDetail <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifactDetail: codepipeline.CodePipelineArtifactDetail = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `s3location`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetail.property.s3location"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineS3Location`](#aws-cdk-sdk.codepipeline.CodePipelineS3Location)

---

### CodePipelineArtifactDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifactDetails: codepipeline.CodePipelineArtifactDetails = { ... }
```

##### `maximumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails.property.maximumCount"></a>

- *Type:* `number`

---

##### `minimumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails.property.minimumCount"></a>

- *Type:* `number`

---

### CodePipelineArtifactLocation <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifactLocation: codepipeline.CodePipelineArtifactLocation = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineS3ArtifactLocation`](#aws-cdk-sdk.codepipeline.CodePipelineS3ArtifactLocation)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactLocation.property.type"></a>

- *Type:* `string`

---

### CodePipelineArtifactRevision <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifactRevision: codepipeline.CodePipelineArtifactRevision = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.created"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.name"></a>

- *Type:* `string`

---

##### `revisionChangeIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.revisionChangeIdentifier"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.revisionId"></a>

- *Type:* `string`

---

##### `revisionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.revisionSummary"></a>

- *Type:* `string`

---

##### `revisionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision.property.revisionUrl"></a>

- *Type:* `string`

---

### CodePipelineArtifactStore <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactStore"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineArtifactStore: codepipeline.CodePipelineArtifactStore = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactStore.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactStore.property.type"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineArtifactStore.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey)

---

### CodePipelineAwsSessionCredentials <a name="aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineAwsSessionCredentials: codepipeline.CodePipelineAwsSessionCredentials = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials.property.sessionToken"></a>

- *Type:* `string`

---

### CodePipelineBlockerDeclaration <a name="aws-cdk-sdk.codepipeline.CodePipelineBlockerDeclaration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineBlockerDeclaration: codepipeline.CodePipelineBlockerDeclaration = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineBlockerDeclaration.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineBlockerDeclaration.property.type"></a>

- *Type:* `string`

---

### CodePipelineCreateCustomActionTypeInput <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineCreateCustomActionTypeInput: codepipeline.CodePipelineCreateCustomActionTypeInput = { ... }
```

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.category"></a>

- *Type:* `string`

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.inputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails)

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.outputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactDetails)

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.version"></a>

- *Type:* `string`

---

##### `configurationProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.configurationProperties"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty`](#aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty)[]

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.settings"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeSettings)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineCreateCustomActionTypeOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineCreateCustomActionTypeOutput: codepipeline.CodePipelineCreateCustomActionTypeOutput = { ... }
```

##### `actionType`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeOutput.property.actionType"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionType`](#aws-cdk-sdk.codepipeline.CodePipelineActionType)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineCreatePipelineInput <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineCreatePipelineInput: codepipeline.CodePipelineCreatePipelineInput = { ... }
```

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineCreatePipelineOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineCreatePipelineOutput: codepipeline.CodePipelineCreatePipelineOutput = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineOutput.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineCurrentRevision <a name="aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineCurrentRevision: codepipeline.CodePipelineCurrentRevision = { ... }
```

##### `changeIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision.property.changeIdentifier"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision.property.revision"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision.property.created"></a>

- *Type:* `string`

---

##### `revisionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision.property.revisionSummary"></a>

- *Type:* `string`

---

### CodePipelineDeleteCustomActionTypeInput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeleteCustomActionTypeInput: codepipeline.CodePipelineDeleteCustomActionTypeInput = { ... }
```

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput.property.category"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteCustomActionTypeInput.property.version"></a>

- *Type:* `string`

---

### CodePipelineDeletePipelineInput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeletePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeletePipelineInput: codepipeline.CodePipelineDeletePipelineInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeletePipelineInput.property.name"></a>

- *Type:* `string`

---

### CodePipelineDeleteWebhookInput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteWebhookInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeleteWebhookInput: codepipeline.CodePipelineDeleteWebhookInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteWebhookInput.property.name"></a>

- *Type:* `string`

---

### CodePipelineDeleteWebhookOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeleteWebhookOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeleteWebhookOutput: codepipeline.CodePipelineDeleteWebhookOutput = { ... }
```

### CodePipelineDeregisterWebhookWithThirdPartyInput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeregisterWebhookWithThirdPartyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeregisterWebhookWithThirdPartyInput: codepipeline.CodePipelineDeregisterWebhookWithThirdPartyInput = { ... }
```

##### `webhookName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDeregisterWebhookWithThirdPartyInput.property.webhookName"></a>

- *Type:* `string`

---

### CodePipelineDeregisterWebhookWithThirdPartyOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineDeregisterWebhookWithThirdPartyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDeregisterWebhookWithThirdPartyOutput: codepipeline.CodePipelineDeregisterWebhookWithThirdPartyOutput = { ... }
```

### CodePipelineDisableStageTransitionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineDisableStageTransitionInput: codepipeline.CodePipelineDisableStageTransitionInput = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput.property.reason"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput.property.stageName"></a>

- *Type:* `string`

---

##### `transitionType`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineDisableStageTransitionInput.property.transitionType"></a>

- *Type:* `string`

---

### CodePipelineEnableStageTransitionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineEnableStageTransitionInput: codepipeline.CodePipelineEnableStageTransitionInput = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput.property.stageName"></a>

- *Type:* `string`

---

##### `transitionType`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineEnableStageTransitionInput.property.transitionType"></a>

- *Type:* `string`

---

### CodePipelineEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineEncryptionKey: codepipeline.CodePipelineEncryptionKey = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey.property.type"></a>

- *Type:* `string`

---

### CodePipelineErrorDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineErrorDetails: codepipeline.CodePipelineErrorDetails = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineErrorDetails.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineErrorDetails.property.message"></a>

- *Type:* `string`

---

### CodePipelineExecutionDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineExecutionDetails: codepipeline.CodePipelineExecutionDetails = { ... }
```

##### `externalExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails.property.externalExecutionId"></a>

- *Type:* `string`

---

##### `percentComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails.property.percentComplete"></a>

- *Type:* `number`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails.property.summary"></a>

- *Type:* `string`

---

### CodePipelineExecutionTrigger <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineExecutionTrigger: codepipeline.CodePipelineExecutionTrigger = { ... }
```

##### `triggerDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionTrigger.property.triggerDetail"></a>

- *Type:* `string`

---

##### `triggerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineExecutionTrigger.property.triggerType"></a>

- *Type:* `string`

---

### CodePipelineFailureDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineFailureDetails: codepipeline.CodePipelineFailureDetails = { ... }
```

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineFailureDetails.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineFailureDetails.property.type"></a>

- *Type:* `string`

---

##### `externalExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineFailureDetails.property.externalExecutionId"></a>

- *Type:* `string`

---

### CodePipelineGetJobDetailsInput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetJobDetailsInput: codepipeline.CodePipelineGetJobDetailsInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput.property.jobId"></a>

- *Type:* `string`

---

### CodePipelineGetJobDetailsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetJobDetailsOutput: codepipeline.CodePipelineGetJobDetailsOutput = { ... }
```

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsOutput.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineJobDetails`](#aws-cdk-sdk.codepipeline.CodePipelineJobDetails)

---

### CodePipelineGetPipelineExecutionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineExecutionInput: codepipeline.CodePipelineGetPipelineExecutionInput = { ... }
```

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput.property.pipelineName"></a>

- *Type:* `string`

---

### CodePipelineGetPipelineExecutionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineExecutionOutput: codepipeline.CodePipelineGetPipelineExecutionOutput = { ... }
```

##### `pipelineExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionOutput.property.pipelineExecution"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution)

---

### CodePipelineGetPipelineInput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineInput: codepipeline.CodePipelineGetPipelineInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput.property.version"></a>

- *Type:* `number`

---

### CodePipelineGetPipelineOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineOutput: codepipeline.CodePipelineGetPipelineOutput = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineOutput.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata)

---

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineOutput.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration)

---

### CodePipelineGetPipelineStateInput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineStateInput: codepipeline.CodePipelineGetPipelineStateInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput.property.name"></a>

- *Type:* `string`

---

### CodePipelineGetPipelineStateOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetPipelineStateOutput: codepipeline.CodePipelineGetPipelineStateOutput = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput.property.created"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput.property.pipelineName"></a>

- *Type:* `string`

---

##### `pipelineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput.property.pipelineVersion"></a>

- *Type:* `number`

---

##### `stageStates`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput.property.stageStates"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageState`](#aws-cdk-sdk.codepipeline.CodePipelineStageState)[]

---

##### `updated`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateOutput.property.updated"></a>

- *Type:* `string`

---

### CodePipelineGetThirdPartyJobDetailsInput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetThirdPartyJobDetailsInput: codepipeline.CodePipelineGetThirdPartyJobDetailsInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput.property.clientToken"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput.property.jobId"></a>

- *Type:* `string`

---

### CodePipelineGetThirdPartyJobDetailsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineGetThirdPartyJobDetailsOutput: codepipeline.CodePipelineGetThirdPartyJobDetailsOutput = { ... }
```

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsOutput.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails`](#aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails)

---

### CodePipelineInputArtifact <a name="aws-cdk-sdk.codepipeline.CodePipelineInputArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineInputArtifact: codepipeline.CodePipelineInputArtifact = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineInputArtifact.property.name"></a>

- *Type:* `string`

---

### CodePipelineJob <a name="aws-cdk-sdk.codepipeline.CodePipelineJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineJob: codepipeline.CodePipelineJob = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJob.property.accountId"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJob.property.data"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineJobData`](#aws-cdk-sdk.codepipeline.CodePipelineJobData)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJob.property.id"></a>

- *Type:* `string`

---

##### `nonce`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJob.property.nonce"></a>

- *Type:* `string`

---

### CodePipelineJobData <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineJobData: codepipeline.CodePipelineJobData = { ... }
```

##### `actionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.actionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration)

---

##### `actionTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `artifactCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.artifactCredentials"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials`](#aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials)

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.continuationToken"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey)

---

##### `inputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `outputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `pipelineContext`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobData.property.pipelineContext"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineContext`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineContext)

---

### CodePipelineJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineJobDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineJobDetails: codepipeline.CodePipelineJobDetails = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobDetails.property.accountId"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobDetails.property.data"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineJobData`](#aws-cdk-sdk.codepipeline.CodePipelineJobData)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineJobDetails.property.id"></a>

- *Type:* `string`

---

### CodePipelineListActionExecutionsInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListActionExecutionsInput: codepipeline.CodePipelineListActionExecutionsInput = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput.property.filter"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionFilter`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListActionExecutionsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListActionExecutionsOutput: codepipeline.CodePipelineListActionExecutionsOutput = { ... }
```

##### `actionExecutionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsOutput.property.actionExecutionDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListActionTypesInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListActionTypesInput: codepipeline.CodePipelineListActionTypesInput = { ... }
```

##### `actionOwnerFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput.property.actionOwnerFilter"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListActionTypesOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListActionTypesOutput: codepipeline.CodePipelineListActionTypesOutput = { ... }
```

##### `actionTypes`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesOutput.property.actionTypes"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionType`](#aws-cdk-sdk.codepipeline.CodePipelineActionType)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListActionTypesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListPipelineExecutionsInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListPipelineExecutionsInput: codepipeline.CodePipelineListPipelineExecutionsInput = { ... }
```

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListPipelineExecutionsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListPipelineExecutionsOutput: codepipeline.CodePipelineListPipelineExecutionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelineExecutionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsOutput.property.pipelineExecutionSummaries"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary)[]

---

### CodePipelineListPipelinesInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListPipelinesInput: codepipeline.CodePipelineListPipelinesInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListPipelinesOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelinesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListPipelinesOutput: codepipeline.CodePipelineListPipelinesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelinesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelines`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListPipelinesOutput.property.pipelines"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary)[]

---

### CodePipelineListTagsForResourceInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListTagsForResourceInput: codepipeline.CodePipelineListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListTagsForResourceOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListTagsForResourceOutput: codepipeline.CodePipelineListTagsForResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineListWebhookItem <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListWebhookItem: codepipeline.CodePipelineListWebhookItem = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.definition"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition`](#aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition)

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.url"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.arn"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.errorMessage"></a>

- *Type:* `string`

---

##### `lastTriggered`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.lastTriggered"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineListWebhooksInput <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListWebhooksInput: codepipeline.CodePipelineListWebhooksInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput.property.nextToken"></a>

- *Type:* `string`

---

### CodePipelineListWebhooksOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineListWebhooksOutput: codepipeline.CodePipelineListWebhooksOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `webhooks`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineListWebhooksOutput.property.webhooks"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem`](#aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem)[]

---

### CodePipelineOutputArtifact <a name="aws-cdk-sdk.codepipeline.CodePipelineOutputArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineOutputArtifact: codepipeline.CodePipelineOutputArtifact = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineOutputArtifact.property.name"></a>

- *Type:* `string`

---

### CodePipelinePipelineContext <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineContext: codepipeline.CodePipelinePipelineContext = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext.property.action"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionContext`](#aws-cdk-sdk.codepipeline.CodePipelineActionContext)

---

##### `pipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext.property.pipelineArn"></a>

- *Type:* `string`

---

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext.property.pipelineName"></a>

- *Type:* `string`

---

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineContext.property.stage"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageContext`](#aws-cdk-sdk.codepipeline.CodePipelineStageContext)

---

### CodePipelinePipelineDeclaration <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineDeclaration: codepipeline.CodePipelinePipelineDeclaration = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.roleArn"></a>

- *Type:* `string`

---

##### `stages`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.stages"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration)[]

---

##### `artifactStore`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.artifactStore"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactStore)

---

##### `artifactStores`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.artifactStores"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codepipeline.CodePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactStore)}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration.property.version"></a>

- *Type:* `number`

---

### CodePipelinePipelineExecution <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineExecution: codepipeline.CodePipelinePipelineExecution = { ... }
```

##### `artifactRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution.property.artifactRevisions"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision)[]

---

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution.property.pipelineName"></a>

- *Type:* `string`

---

##### `pipelineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution.property.pipelineVersion"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecution.property.status"></a>

- *Type:* `string`

---

### CodePipelinePipelineExecutionSummary <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineExecutionSummary: codepipeline.CodePipelinePipelineExecutionSummary = { ... }
```

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `sourceRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.sourceRevisions"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineSourceRevision`](#aws-cdk-sdk.codepipeline.CodePipelineSourceRevision)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.status"></a>

- *Type:* `string`

---

##### `stopTrigger`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.stopTrigger"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStopExecutionTrigger`](#aws-cdk-sdk.codepipeline.CodePipelineStopExecutionTrigger)

---

##### `trigger`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineExecutionTrigger`](#aws-cdk-sdk.codepipeline.CodePipelineExecutionTrigger)

---

### CodePipelinePipelineMetadata <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineMetadata: codepipeline.CodePipelinePipelineMetadata = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata.property.created"></a>

- *Type:* `string`

---

##### `pipelineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata.property.pipelineArn"></a>

- *Type:* `string`

---

##### `updated`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineMetadata.property.updated"></a>

- *Type:* `string`

---

### CodePipelinePipelineSummary <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePipelineSummary: codepipeline.CodePipelinePipelineSummary = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary.property.created"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary.property.name"></a>

- *Type:* `string`

---

##### `updated`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary.property.updated"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary.property.version"></a>

- *Type:* `number`

---

### CodePipelinePollForJobsInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePollForJobsInput: codepipeline.CodePipelinePollForJobsInput = { ... }
```

##### `actionTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `maxBatchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput.property.maxBatchSize"></a>

- *Type:* `number`

---

##### `queryParam`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput.property.queryParam"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodePipelinePollForJobsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePollForJobsOutput: codepipeline.CodePipelinePollForJobsOutput = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForJobsOutput.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineJob`](#aws-cdk-sdk.codepipeline.CodePipelineJob)[]

---

### CodePipelinePollForThirdPartyJobsInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePollForThirdPartyJobsInput: codepipeline.CodePipelinePollForThirdPartyJobsInput = { ... }
```

##### `actionTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `maxBatchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput.property.maxBatchSize"></a>

- *Type:* `number`

---

### CodePipelinePollForThirdPartyJobsOutput <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePollForThirdPartyJobsOutput: codepipeline.CodePipelinePollForThirdPartyJobsOutput = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsOutput.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob`](#aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob)[]

---

### CodePipelinePutActionRevisionInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutActionRevisionInput: codepipeline.CodePipelinePutActionRevisionInput = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput.property.actionName"></a>

- *Type:* `string`

---

##### `actionRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput.property.actionRevision"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionRevision`](#aws-cdk-sdk.codepipeline.CodePipelineActionRevision)

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput.property.stageName"></a>

- *Type:* `string`

---

### CodePipelinePutActionRevisionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutActionRevisionOutput: codepipeline.CodePipelinePutActionRevisionOutput = { ... }
```

##### `newRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionOutput.property.newRevision"></a>

- *Type:* `boolean`

---

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionOutput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

### CodePipelinePutApprovalResultInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutApprovalResultInput: codepipeline.CodePipelinePutApprovalResultInput = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput.property.actionName"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput.property.result"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineApprovalResult`](#aws-cdk-sdk.codepipeline.CodePipelineApprovalResult)

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput.property.stageName"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput.property.token"></a>

- *Type:* `string`

---

### CodePipelinePutApprovalResultOutput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutApprovalResultOutput: codepipeline.CodePipelinePutApprovalResultOutput = { ... }
```

##### `approvedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultOutput.property.approvedAt"></a>

- *Type:* `string`

---

### CodePipelinePutJobFailureResultInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobFailureResultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutJobFailureResultInput: codepipeline.CodePipelinePutJobFailureResultInput = { ... }
```

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobFailureResultInput.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineFailureDetails`](#aws-cdk-sdk.codepipeline.CodePipelineFailureDetails)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobFailureResultInput.property.jobId"></a>

- *Type:* `string`

---

### CodePipelinePutJobSuccessResultInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutJobSuccessResultInput: codepipeline.CodePipelinePutJobSuccessResultInput = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput.property.jobId"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput.property.continuationToken"></a>

- *Type:* `string`

---

##### `currentRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput.property.currentRevision"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision`](#aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision)

---

##### `executionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput.property.executionDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails`](#aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails)

---

##### `outputVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutJobSuccessResultInput.property.outputVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodePipelinePutThirdPartyJobFailureResultInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutThirdPartyJobFailureResultInput: codepipeline.CodePipelinePutThirdPartyJobFailureResultInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput.property.clientToken"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineFailureDetails`](#aws-cdk-sdk.codepipeline.CodePipelineFailureDetails)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobFailureResultInput.property.jobId"></a>

- *Type:* `string`

---

### CodePipelinePutThirdPartyJobSuccessResultInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutThirdPartyJobSuccessResultInput: codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput.property.clientToken"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput.property.jobId"></a>

- *Type:* `string`

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput.property.continuationToken"></a>

- *Type:* `string`

---

##### `currentRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput.property.currentRevision"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision`](#aws-cdk-sdk.codepipeline.CodePipelineCurrentRevision)

---

##### `executionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutThirdPartyJobSuccessResultInput.property.executionDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails`](#aws-cdk-sdk.codepipeline.CodePipelineExecutionDetails)

---

### CodePipelinePutWebhookInput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutWebhookInput: codepipeline.CodePipelinePutWebhookInput = { ... }
```

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition`](#aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelinePutWebhookOutput <a name="aws-cdk-sdk.codepipeline.CodePipelinePutWebhookOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelinePutWebhookOutput: codepipeline.CodePipelinePutWebhookOutput = { ... }
```

##### `webhook`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelinePutWebhookOutput.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem`](#aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem)

---

### CodePipelineRegisterWebhookWithThirdPartyInput <a name="aws-cdk-sdk.codepipeline.CodePipelineRegisterWebhookWithThirdPartyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineRegisterWebhookWithThirdPartyInput: codepipeline.CodePipelineRegisterWebhookWithThirdPartyInput = { ... }
```

##### `webhookName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRegisterWebhookWithThirdPartyInput.property.webhookName"></a>

- *Type:* `string`

---

### CodePipelineRegisterWebhookWithThirdPartyOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineRegisterWebhookWithThirdPartyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineRegisterWebhookWithThirdPartyOutput: codepipeline.CodePipelineRegisterWebhookWithThirdPartyOutput = { ... }
```

### CodePipelineRetryStageExecutionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineRetryStageExecutionInput: codepipeline.CodePipelineRetryStageExecutionInput = { ... }
```

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `retryMode`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput.property.retryMode"></a>

- *Type:* `string`

---

##### `stageName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput.property.stageName"></a>

- *Type:* `string`

---

### CodePipelineRetryStageExecutionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineRetryStageExecutionOutput: codepipeline.CodePipelineRetryStageExecutionOutput = { ... }
```

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionOutput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

### CodePipelineS3ArtifactLocation <a name="aws-cdk-sdk.codepipeline.CodePipelineS3ArtifactLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineS3ArtifactLocation: codepipeline.CodePipelineS3ArtifactLocation = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineS3ArtifactLocation.property.bucketName"></a>

- *Type:* `string`

---

##### `objectKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineS3ArtifactLocation.property.objectKey"></a>

- *Type:* `string`

---

### CodePipelineS3Location <a name="aws-cdk-sdk.codepipeline.CodePipelineS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineS3Location: codepipeline.CodePipelineS3Location = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineS3Location.property.key"></a>

- *Type:* `string`

---

### CodePipelineSourceRevision <a name="aws-cdk-sdk.codepipeline.CodePipelineSourceRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineSourceRevision: codepipeline.CodePipelineSourceRevision = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineSourceRevision.property.actionName"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineSourceRevision.property.revisionId"></a>

- *Type:* `string`

---

##### `revisionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineSourceRevision.property.revisionSummary"></a>

- *Type:* `string`

---

##### `revisionUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineSourceRevision.property.revisionUrl"></a>

- *Type:* `string`

---

### CodePipelineStageContext <a name="aws-cdk-sdk.codepipeline.CodePipelineStageContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStageContext: codepipeline.CodePipelineStageContext = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageContext.property.name"></a>

- *Type:* `string`

---

### CodePipelineStageDeclaration <a name="aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStageDeclaration: codepipeline.CodePipelineStageDeclaration = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration.property.actions"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineActionDeclaration)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration.property.name"></a>

- *Type:* `string`

---

##### `blockers`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration.property.blockers"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineBlockerDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineBlockerDeclaration)[]

---

### CodePipelineStageExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineStageExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStageExecution: codepipeline.CodePipelineStageExecution = { ... }
```

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageExecution.property.status"></a>

- *Type:* `string`

---

### CodePipelineStageState <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStageState: codepipeline.CodePipelineStageState = { ... }
```

##### `actionStates`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState.property.actionStates"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionState`](#aws-cdk-sdk.codepipeline.CodePipelineActionState)[]

---

##### `inboundExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState.property.inboundExecution"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageExecution`](#aws-cdk-sdk.codepipeline.CodePipelineStageExecution)

---

##### `inboundTransitionState`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState.property.inboundTransitionState"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTransitionState`](#aws-cdk-sdk.codepipeline.CodePipelineTransitionState)

---

##### `latestExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState.property.latestExecution"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageExecution`](#aws-cdk-sdk.codepipeline.CodePipelineStageExecution)

---

##### `stageName`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStageState.property.stageName"></a>

- *Type:* `string`

---

### CodePipelineStartPipelineExecutionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStartPipelineExecutionInput: codepipeline.CodePipelineStartPipelineExecutionInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput.property.clientRequestToken"></a>

- *Type:* `string`

---

### CodePipelineStartPipelineExecutionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStartPipelineExecutionOutput: codepipeline.CodePipelineStartPipelineExecutionOutput = { ... }
```

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionOutput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

### CodePipelineStopExecutionTrigger <a name="aws-cdk-sdk.codepipeline.CodePipelineStopExecutionTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStopExecutionTrigger: codepipeline.CodePipelineStopExecutionTrigger = { ... }
```

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopExecutionTrigger.property.reason"></a>

- *Type:* `string`

---

### CodePipelineStopPipelineExecutionInput <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStopPipelineExecutionInput: codepipeline.CodePipelineStopPipelineExecutionInput = { ... }
```

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput.property.pipelineName"></a>

- *Type:* `string`

---

##### `abandon`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput.property.abandon"></a>

- *Type:* `boolean`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput.property.reason"></a>

- *Type:* `string`

---

### CodePipelineStopPipelineExecutionOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineStopPipelineExecutionOutput: codepipeline.CodePipelineStopPipelineExecutionOutput = { ... }
```

##### `pipelineExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionOutput.property.pipelineExecutionId"></a>

- *Type:* `string`

---

### CodePipelineTag <a name="aws-cdk-sdk.codepipeline.CodePipelineTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineTag: codepipeline.CodePipelineTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTag.property.value"></a>

- *Type:* `string`

---

### CodePipelineTagResourceInput <a name="aws-cdk-sdk.codepipeline.CodePipelineTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineTagResourceInput: codepipeline.CodePipelineTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

### CodePipelineTagResourceOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineTagResourceOutput: codepipeline.CodePipelineTagResourceOutput = { ... }
```

### CodePipelineThirdPartyJob <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineThirdPartyJob: codepipeline.CodePipelineThirdPartyJob = { ... }
```

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob.property.clientId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob.property.jobId"></a>

- *Type:* `string`

---

### CodePipelineThirdPartyJobData <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineThirdPartyJobData: codepipeline.CodePipelineThirdPartyJobData = { ... }
```

##### `actionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.actionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineActionConfiguration)

---

##### `actionTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineActionTypeId)

---

##### `artifactCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.artifactCredentials"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials`](#aws-cdk-sdk.codepipeline.CodePipelineAwsSessionCredentials)

---

##### `continuationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.continuationToken"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineEncryptionKey)

---

##### `inputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `outputArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `pipelineContext`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData.property.pipelineContext"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineContext`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineContext)

---

### CodePipelineThirdPartyJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineThirdPartyJobDetails: codepipeline.CodePipelineThirdPartyJobDetails = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails.property.data"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData`](#aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobData)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails.property.id"></a>

- *Type:* `string`

---

##### `nonce`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJobDetails.property.nonce"></a>

- *Type:* `string`

---

### CodePipelineTransitionState <a name="aws-cdk-sdk.codepipeline.CodePipelineTransitionState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineTransitionState: codepipeline.CodePipelineTransitionState = { ... }
```

##### `disabledReason`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTransitionState.property.disabledReason"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTransitionState.property.enabled"></a>

- *Type:* `boolean`

---

##### `lastChangedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTransitionState.property.lastChangedAt"></a>

- *Type:* `string`

---

##### `lastChangedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineTransitionState.property.lastChangedBy"></a>

- *Type:* `string`

---

### CodePipelineUntagResourceInput <a name="aws-cdk-sdk.codepipeline.CodePipelineUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineUntagResourceInput: codepipeline.CodePipelineUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodePipelineUntagResourceOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineUntagResourceOutput: codepipeline.CodePipelineUntagResourceOutput = { ... }
```

### CodePipelineUpdatePipelineInput <a name="aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineUpdatePipelineInput: codepipeline.CodePipelineUpdatePipelineInput = { ... }
```

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration)

---

### CodePipelineUpdatePipelineOutput <a name="aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineUpdatePipelineOutput: codepipeline.CodePipelineUpdatePipelineOutput = { ... }
```

##### `pipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineOutput.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineDeclaration)

---

### CodePipelineWebhookAuthConfiguration <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookAuthConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineWebhookAuthConfiguration: codepipeline.CodePipelineWebhookAuthConfiguration = { ... }
```

##### `allowedIpRange`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookAuthConfiguration.property.allowedIpRange"></a>

- *Type:* `string`

---

##### `secretToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookAuthConfiguration.property.secretToken"></a>

- *Type:* `string`

---

### CodePipelineWebhookDefinition <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineWebhookDefinition: codepipeline.CodePipelineWebhookDefinition = { ... }
```

##### `authentication`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.authentication"></a>

- *Type:* `string`

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.authenticationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineWebhookAuthConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineWebhookAuthConfiguration)

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.filters"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule`](#aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.name"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.targetAction"></a>

- *Type:* `string`

---

##### `targetPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookDefinition.property.targetPipeline"></a>

- *Type:* `string`

---

### CodePipelineWebhookFilterRule <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

const codePipelineWebhookFilterRule: codepipeline.CodePipelineWebhookFilterRule = { ... }
```

##### `jsonPath`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule.property.jsonPath"></a>

- *Type:* `string`

---

##### `matchEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule.property.matchEquals"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodePipelineResponsesAcknowledgeJob <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesAcknowledgeJob(__scope: Construct, __resources: string[], __input: CodePipelineAcknowledgeJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput`](#aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeJobInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeJob.property.status"></a>

- *Type:* `string`

---


### CodePipelineResponsesAcknowledgeThirdPartyJob <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob(__scope: Construct, __resources: string[], __input: CodePipelineAcknowledgeThirdPartyJobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput`](#aws-cdk-sdk.codepipeline.CodePipelineAcknowledgeThirdPartyJobInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesAcknowledgeThirdPartyJob.property.status"></a>

- *Type:* `string`

---


### CodePipelineResponsesCreateCustomActionType <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionType(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `actionType`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.property.actionType"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionType.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---


### CodePipelineResponsesCreateCustomActionTypeActionType <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `actionConfigurationProperties`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.property.actionConfigurationProperties"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty`](#aws-cdk-sdk.codepipeline.CodePipelineActionConfigurationProperty)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.property.id"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId)

---

##### `inputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.property.inputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails)

---

##### `outputArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.property.outputArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails)

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionType.property.settings"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings)

---


### CodePipelineResponsesCreateCustomActionTypeActionTypeId <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.property.category"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.property.owner"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeId.property.version"></a>

- *Type:* `string`

---


### CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `maximumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.property.maximumCount"></a>

- *Type:* `number`

---

##### `minimumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeInputArtifactDetails.property.minimumCount"></a>

- *Type:* `number`

---


### CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `maximumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.property.maximumCount"></a>

- *Type:* `number`

---

##### `minimumCount`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeOutputArtifactDetails.property.minimumCount"></a>

- *Type:* `number`

---


### CodePipelineResponsesCreateCustomActionTypeActionTypeSettings <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings(__scope: Construct, __resources: string[], __input: CodePipelineCreateCustomActionTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreateCustomActionTypeInput)

---



#### Properties <a name="Properties"></a>

##### `entityUrlTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.property.entityUrlTemplate"></a>

- *Type:* `string`

---

##### `executionUrlTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.property.executionUrlTemplate"></a>

- *Type:* `string`

---

##### `revisionUrlTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.property.revisionUrlTemplate"></a>

- *Type:* `string`

---

##### `thirdPartyConfigurationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreateCustomActionTypeActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

- *Type:* `string`

---


### CodePipelineResponsesCreatePipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreatePipeline(__scope: Construct, __resources: string[], __input: CodePipelineCreatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipeline.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---


### CodePipelineResponsesCreatePipelinePipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreatePipelinePipeline(__scope: Construct, __resources: string[], __input: CodePipelineCreatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `artifactStore`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.artifactStore"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore)

---

##### `artifactStores`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.artifactStores"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codepipeline.CodePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactStore)}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.roleArn"></a>

- *Type:* `string`

---

##### `stages`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.stages"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipeline.property.version"></a>

- *Type:* `number`

---


### CodePipelineResponsesCreatePipelinePipelineArtifactStore <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore(__scope: Construct, __resources: string[], __input: CodePipelineCreatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStore.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey(__scope: Construct, __resources: string[], __input: CodePipelineCreatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineCreatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesCreatePipelinePipelineArtifactStoreEncryptionKey.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetails(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `jobDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetails.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails)

---


### CodePipelineResponsesFetchJobDetailsJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.property.accountId"></a>

- *Type:* `string`

---

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.property.data"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetails.property.id"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetailsJobDetailsData <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `actionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.actionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration)

---

##### `actionTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId)

---

##### `artifactCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.artifactCredentials"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials)

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.continuationToken"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey)

---

##### `inputArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `outputArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `pipelineContext`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsData.property.pipelineContext"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext)

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionConfiguration.property.configuration"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.property.category"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.property.owner"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataActionTypeId.property.version"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataArtifactCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataEncryptionKey.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.property.action"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction)

---

##### `pipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.property.pipelineArn"></a>

- *Type:* `string`

---

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.property.pipelineName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContext.property.stage"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage)

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `actionExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.property.actionExecutionId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextAction.property.name"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage(__scope: Construct, __resources: string[], __input: CodePipelineGetJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchJobDetailsJobDetailsDataPipelineContextStage.property.name"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchPipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipeline(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata)

---

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline)

---


### CodePipelineResponsesFetchPipelineExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelineExecution(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineExecution`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecution.property.pipelineExecution"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution)

---


### CodePipelineResponsesFetchPipelineExecutionPipelineExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `artifactRevisions`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.property.artifactRevisions"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactRevision)[]

---

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.property.pipelineName"></a>

- *Type:* `string`

---

##### `pipelineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.property.pipelineVersion"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineExecutionPipelineExecution.property.status"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchPipelineMetadata <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelineMetadata(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.property.created"></a>

- *Type:* `string`

---

##### `pipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.property.pipelineArn"></a>

- *Type:* `string`

---

##### `updated`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineMetadata.property.updated"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchPipelinePipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelinePipeline(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---



#### Properties <a name="Properties"></a>

##### `artifactStore`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.artifactStore"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore)

---

##### `artifactStores`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.artifactStores"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codepipeline.CodePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactStore)}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.roleArn"></a>

- *Type:* `string`

---

##### `stages`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.stages"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipeline.property.version"></a>

- *Type:* `number`

---


### CodePipelineResponsesFetchPipelinePipelineArtifactStore <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStore.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelinePipelineArtifactStoreEncryptionKey.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchPipelineState <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchPipelineState(__scope: Construct, __resources: string[], __input: CodePipelineGetPipelineStateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetPipelineStateInput)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.property.created"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.property.pipelineName"></a>

- *Type:* `string`

---

##### `pipelineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.property.pipelineVersion"></a>

- *Type:* `number`

---

##### `stageStates`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.property.stageStates"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageState`](#aws-cdk-sdk.codepipeline.CodePipelineStageState)[]

---

##### `updated`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchPipelineState.property.updated"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `jobDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetails.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails)

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.property.data"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.property.id"></a>

- *Type:* `string`

---

##### `nonce`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetails.property.nonce"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `actionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.actionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration)

---

##### `actionTypeId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.actionTypeId"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId)

---

##### `artifactCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.artifactCredentials"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials)

---

##### `continuationToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.continuationToken"></a>

- *Type:* `string`

---

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey)

---

##### `inputArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.inputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `outputArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.outputArtifacts"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineArtifact`](#aws-cdk-sdk.codepipeline.CodePipelineArtifact)[]

---

##### `pipelineContext`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsData.property.pipelineContext"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext)

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionConfiguration.property.configuration"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.property.category"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.property.owner"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.property.provider"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataActionTypeId.property.version"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataArtifactCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataEncryptionKey.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.property.action"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction)

---

##### `pipelineArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.property.pipelineArn"></a>

- *Type:* `string`

---

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.property.pipelineExecutionId"></a>

- *Type:* `string`

---

##### `pipelineName`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.property.pipelineName"></a>

- *Type:* `string`

---

##### `stage`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContext.property.stage"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage)

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `actionExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.property.actionExecutionId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextAction.property.name"></a>

- *Type:* `string`

---


### CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage(__scope: Construct, __resources: string[], __input: CodePipelineGetThirdPartyJobDetailsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput`](#aws-cdk-sdk.codepipeline.CodePipelineGetThirdPartyJobDetailsInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesFetchThirdPartyJobDetailsJobDetailsDataPipelineContextStage.property.name"></a>

- *Type:* `string`

---


### CodePipelineResponsesListActionExecutions <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListActionExecutions(__scope: Construct, __resources: string[], __input: CodePipelineListActionExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput`](#aws-cdk-sdk.codepipeline.CodePipelineListActionExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `actionExecutionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.property.actionExecutionDetails"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail`](#aws-cdk-sdk.codepipeline.CodePipelineActionExecutionDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionExecutions.property.nextToken"></a>

- *Type:* `string`

---


### CodePipelineResponsesListActionTypes <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListActionTypes(__scope: Construct, __resources: string[], __input: CodePipelineListActionTypesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput`](#aws-cdk-sdk.codepipeline.CodePipelineListActionTypesInput)

---



#### Properties <a name="Properties"></a>

##### `actionTypes`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.property.actionTypes"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineActionType`](#aws-cdk-sdk.codepipeline.CodePipelineActionType)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListActionTypes.property.nextToken"></a>

- *Type:* `string`

---


### CodePipelineResponsesListPipelineExecutions <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListPipelineExecutions(__scope: Construct, __resources: string[], __input: CodePipelineListPipelineExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput`](#aws-cdk-sdk.codepipeline.CodePipelineListPipelineExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelineExecutionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelineExecutions.property.pipelineExecutionSummaries"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineExecutionSummary)[]

---


### CodePipelineResponsesListPipelines <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListPipelines(__scope: Construct, __resources: string[], __input: CodePipelineListPipelinesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput`](#aws-cdk-sdk.codepipeline.CodePipelineListPipelinesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.property.nextToken"></a>

- *Type:* `string`

---

##### `pipelines`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListPipelines.property.pipelines"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary`](#aws-cdk-sdk.codepipeline.CodePipelinePipelineSummary)[]

---


### CodePipelineResponsesListTagsForResource <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodePipelineListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput`](#aws-cdk-sdk.codepipeline.CodePipelineListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---


### CodePipelineResponsesListWebhooks <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesListWebhooks(__scope: Construct, __resources: string[], __input: CodePipelineListWebhooksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput`](#aws-cdk-sdk.codepipeline.CodePipelineListWebhooksInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.property.nextToken"></a>

- *Type:* `string`

---

##### `webhooks`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesListWebhooks.property.webhooks"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem`](#aws-cdk-sdk.codepipeline.CodePipelineListWebhookItem)[]

---


### CodePipelineResponsesPollForJobs <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPollForJobs(__scope: Construct, __resources: string[], __input: CodePipelinePollForJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput`](#aws-cdk-sdk.codepipeline.CodePipelinePollForJobsInput)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineJob`](#aws-cdk-sdk.codepipeline.CodePipelineJob)[]

---


### CodePipelineResponsesPollForThirdPartyJobs <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPollForThirdPartyJobs(__scope: Construct, __resources: string[], __input: CodePipelinePollForThirdPartyJobsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput`](#aws-cdk-sdk.codepipeline.CodePipelinePollForThirdPartyJobsInput)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPollForThirdPartyJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob`](#aws-cdk-sdk.codepipeline.CodePipelineThirdPartyJob)[]

---


### CodePipelineResponsesPutActionRevision <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutActionRevision(__scope: Construct, __resources: string[], __input: CodePipelinePutActionRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutActionRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `newRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.property.newRevision"></a>

- *Type:* `boolean`

---

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutActionRevision.property.pipelineExecutionId"></a>

- *Type:* `string`

---


### CodePipelineResponsesPutApprovalResult <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutApprovalResult(__scope: Construct, __resources: string[], __input: CodePipelinePutApprovalResultInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutApprovalResultInput)

---



#### Properties <a name="Properties"></a>

##### `approvedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutApprovalResult.property.approvedAt"></a>

- *Type:* `string`

---


### CodePipelineResponsesPutWebhook <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutWebhook(__scope: Construct, __resources: string[], __input: CodePipelinePutWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `webhook`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhook.property.webhook"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook)

---


### CodePipelineResponsesPutWebhookWebhook <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutWebhookWebhook(__scope: Construct, __resources: string[], __input: CodePipelinePutWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.arn"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.definition"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition)

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.errorMessage"></a>

- *Type:* `string`

---

##### `lastTriggered`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.lastTriggered"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineTag`](#aws-cdk-sdk.codepipeline.CodePipelineTag)[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhook.property.url"></a>

- *Type:* `string`

---


### CodePipelineResponsesPutWebhookWebhookDefinition <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition(__scope: Construct, __resources: string[], __input: CodePipelinePutWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `authentication`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.authentication"></a>

- *Type:* `string`

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.authenticationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration)

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.filters"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule`](#aws-cdk-sdk.codepipeline.CodePipelineWebhookFilterRule)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.name"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.targetAction"></a>

- *Type:* `string`

---

##### `targetPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinition.property.targetPipeline"></a>

- *Type:* `string`

---


### CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration(__scope: Construct, __resources: string[], __input: CodePipelinePutWebhookInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput`](#aws-cdk-sdk.codepipeline.CodePipelinePutWebhookInput)

---



#### Properties <a name="Properties"></a>

##### `allowedIpRange`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.property.allowedIpRange"></a>

- *Type:* `string`

---

##### `secretToken`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesPutWebhookWebhookDefinitionAuthenticationConfiguration.property.secretToken"></a>

- *Type:* `string`

---


### CodePipelineResponsesRetryStageExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesRetryStageExecution(__scope: Construct, __resources: string[], __input: CodePipelineRetryStageExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineRetryStageExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesRetryStageExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---


### CodePipelineResponsesStartPipelineExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesStartPipelineExecution(__scope: Construct, __resources: string[], __input: CodePipelineStartPipelineExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineStartPipelineExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStartPipelineExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---


### CodePipelineResponsesStopPipelineExecution <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesStopPipelineExecution(__scope: Construct, __resources: string[], __input: CodePipelineStopPipelineExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput`](#aws-cdk-sdk.codepipeline.CodePipelineStopPipelineExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesStopPipelineExecution.property.pipelineExecutionId"></a>

- *Type:* `string`

---


### CodePipelineResponsesUpdatePipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesUpdatePipeline(__scope: Construct, __resources: string[], __input: CodePipelineUpdatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `pipeline`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipeline.property.pipeline"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline)

---


### CodePipelineResponsesUpdatePipelinePipeline <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesUpdatePipelinePipeline(__scope: Construct, __resources: string[], __input: CodePipelineUpdatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `artifactStore`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.artifactStore"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore)

---

##### `artifactStores`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.artifactStores"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.codepipeline.CodePipelineArtifactStore`](#aws-cdk-sdk.codepipeline.CodePipelineArtifactStore)}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.roleArn"></a>

- *Type:* `string`

---

##### `stages`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.stages"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration`](#aws-cdk-sdk.codepipeline.CodePipelineStageDeclaration)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipeline.property.version"></a>

- *Type:* `number`

---


### CodePipelineResponsesUpdatePipelinePipelineArtifactStore <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore(__scope: Construct, __resources: string[], __input: CodePipelineUpdatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `encryptionKey`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.property.encryptionKey"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey`](#aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.property.location"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStore.property.type"></a>

- *Type:* `string`

---


### CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { codepipeline } from 'aws-cdk-sdk'

new codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey(__scope: Construct, __resources: string[], __input: CodePipelineUpdatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput`](#aws-cdk-sdk.codepipeline.CodePipelineUpdatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codepipeline.CodePipelineResponsesUpdatePipelinePipelineArtifactStoreEncryptionKey.property.type"></a>

- *Type:* `string`

---



