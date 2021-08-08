# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataPipelineClient <a name="aws-cdk-sdk.datapipeline.DataPipelineClient"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `activatePipeline` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.activatePipeline"></a>

```typescript
public activatePipeline(input: DataPipelineActivatePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput`](#aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput)

---

##### `addTags` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.addTags"></a>

```typescript
public addTags(input: DataPipelineAddTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineAddTagsInput`](#aws-cdk-sdk.datapipeline.DataPipelineAddTagsInput)

---

##### `createPipeline` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.createPipeline"></a>

```typescript
public createPipeline(input: DataPipelineCreatePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput`](#aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput)

---

##### `deactivatePipeline` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.deactivatePipeline"></a>

```typescript
public deactivatePipeline(input: DataPipelineDeactivatePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineInput`](#aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineInput)

---

##### `deletePipeline` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.deletePipeline"></a>

```typescript
public deletePipeline(input: DataPipelineDeletePipelineInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDeletePipelineInput`](#aws-cdk-sdk.datapipeline.DataPipelineDeletePipelineInput)

---

##### `describeObjects` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.describeObjects"></a>

```typescript
public describeObjects(input: DataPipelineDescribeObjectsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput`](#aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput)

---

##### `describePipelines` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.describePipelines"></a>

```typescript
public describePipelines(input: DataPipelineDescribePipelinesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput`](#aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput)

---

##### `evaluateExpression` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.evaluateExpression"></a>

```typescript
public evaluateExpression(input: DataPipelineEvaluateExpressionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput`](#aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput)

---

##### `fetchPipelineDefinition` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.fetchPipelineDefinition"></a>

```typescript
public fetchPipelineDefinition(input: DataPipelineGetPipelineDefinitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput)

---

##### `listPipelines` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.listPipelines"></a>

```typescript
public listPipelines(input: DataPipelineListPipelinesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput`](#aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput)

---

##### `pollForTask` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.pollForTask"></a>

```typescript
public pollForTask(input: DataPipelinePollForTaskInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput`](#aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput)

---

##### `putPipelineDefinition` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.putPipelineDefinition"></a>

```typescript
public putPipelineDefinition(input: DataPipelinePutPipelineDefinitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput)

---

##### `putStatus` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.putStatus"></a>

```typescript
public putStatus(input: DataPipelineSetStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput`](#aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput)

---

##### `putTaskStatus` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.putTaskStatus"></a>

```typescript
public putTaskStatus(input: DataPipelineSetTaskStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput`](#aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput)

---

##### `queryObjects` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.queryObjects"></a>

```typescript
public queryObjects(input: DataPipelineQueryObjectsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput`](#aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput)

---

##### `removeTags` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.removeTags"></a>

```typescript
public removeTags(input: DataPipelineRemoveTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsInput`](#aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsInput)

---

##### `reportTaskProgress` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.reportTaskProgress"></a>

```typescript
public reportTaskProgress(input: DataPipelineReportTaskProgressInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput`](#aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput)

---

##### `reportTaskRunnerHeartbeat` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.reportTaskRunnerHeartbeat"></a>

```typescript
public reportTaskRunnerHeartbeat(input: DataPipelineReportTaskRunnerHeartbeatInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput`](#aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput)

---

##### `validatePipelineDefinition` <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.validatePipelineDefinition"></a>

```typescript
public validatePipelineDefinition(input: DataPipelineValidatePipelineDefinitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput)

---




## Structs <a name="Structs"></a>

### DataPipelineActivatePipelineInput <a name="aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineActivatePipelineInput: datapipeline.DataPipelineActivatePipelineInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `parameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput.property.parameterValues"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterValue`](#aws-cdk-sdk.datapipeline.DataPipelineParameterValue)[]

---

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineInput.property.startTimestamp"></a>

- *Type:* `string`

---

### DataPipelineActivatePipelineOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineActivatePipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineActivatePipelineOutput: datapipeline.DataPipelineActivatePipelineOutput = { ... }
```

### DataPipelineAddTagsInput <a name="aws-cdk-sdk.datapipeline.DataPipelineAddTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineAddTagsInput: datapipeline.DataPipelineAddTagsInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineAddTagsInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineAddTagsInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineTag`](#aws-cdk-sdk.datapipeline.DataPipelineTag)[]

---

### DataPipelineAddTagsOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineAddTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineAddTagsOutput: datapipeline.DataPipelineAddTagsOutput = { ... }
```

### DataPipelineCreatePipelineInput <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineCreatePipelineInput: datapipeline.DataPipelineCreatePipelineInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput.property.name"></a>

- *Type:* `string`

---

##### `uniqueId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput.property.uniqueId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineTag`](#aws-cdk-sdk.datapipeline.DataPipelineTag)[]

---

### DataPipelineCreatePipelineOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineCreatePipelineOutput: datapipeline.DataPipelineCreatePipelineOutput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineOutput.property.pipelineId"></a>

- *Type:* `string`

---

### DataPipelineDeactivatePipelineInput <a name="aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDeactivatePipelineInput: datapipeline.DataPipelineDeactivatePipelineInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `cancelActive`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineInput.property.cancelActive"></a>

- *Type:* `boolean`

---

### DataPipelineDeactivatePipelineOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineDeactivatePipelineOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDeactivatePipelineOutput: datapipeline.DataPipelineDeactivatePipelineOutput = { ... }
```

### DataPipelineDeletePipelineInput <a name="aws-cdk-sdk.datapipeline.DataPipelineDeletePipelineInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDeletePipelineInput: datapipeline.DataPipelineDeletePipelineInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDeletePipelineInput.property.pipelineId"></a>

- *Type:* `string`

---

### DataPipelineDescribeObjectsInput <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDescribeObjectsInput: datapipeline.DataPipelineDescribeObjectsInput = { ... }
```

##### `objectIds`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput.property.objectIds"></a>

- *Type:* `string`[]

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `evaluateExpressions`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput.property.evaluateExpressions"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput.property.marker"></a>

- *Type:* `string`

---

### DataPipelineDescribeObjectsOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDescribeObjectsOutput: datapipeline.DataPipelineDescribeObjectsOutput = { ... }
```

##### `pipelineObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsOutput.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---

##### `hasMoreResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsOutput.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsOutput.property.marker"></a>

- *Type:* `string`

---

### DataPipelineDescribePipelinesInput <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDescribePipelinesInput: datapipeline.DataPipelineDescribePipelinesInput = { ... }
```

##### `pipelineIds`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput.property.pipelineIds"></a>

- *Type:* `string`[]

---

### DataPipelineDescribePipelinesOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineDescribePipelinesOutput: datapipeline.DataPipelineDescribePipelinesOutput = { ... }
```

##### `pipelineDescriptionList`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesOutput.property.pipelineDescriptionList"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription)[]

---

### DataPipelineEvaluateExpressionInput <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineEvaluateExpressionInput: datapipeline.DataPipelineEvaluateExpressionInput = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput.property.expression"></a>

- *Type:* `string`

---

##### `objectId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput.property.objectId"></a>

- *Type:* `string`

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput.property.pipelineId"></a>

- *Type:* `string`

---

### DataPipelineEvaluateExpressionOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineEvaluateExpressionOutput: datapipeline.DataPipelineEvaluateExpressionOutput = { ... }
```

##### `evaluatedExpression`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionOutput.property.evaluatedExpression"></a>

- *Type:* `string`

---

### DataPipelineField <a name="aws-cdk-sdk.datapipeline.DataPipelineField"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineField: datapipeline.DataPipelineField = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineField.property.key"></a>

- *Type:* `string`

---

##### `refValue`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineField.property.refValue"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineField.property.stringValue"></a>

- *Type:* `string`

---

### DataPipelineGetPipelineDefinitionInput <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineGetPipelineDefinitionInput: datapipeline.DataPipelineGetPipelineDefinitionInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput.property.version"></a>

- *Type:* `string`

---

### DataPipelineGetPipelineDefinitionOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineGetPipelineDefinitionOutput: datapipeline.DataPipelineGetPipelineDefinitionOutput = { ... }
```

##### `parameterObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionOutput.property.parameterObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterObject`](#aws-cdk-sdk.datapipeline.DataPipelineParameterObject)[]

---

##### `parameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionOutput.property.parameterValues"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterValue`](#aws-cdk-sdk.datapipeline.DataPipelineParameterValue)[]

---

##### `pipelineObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionOutput.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---

### DataPipelineInstanceIdentity <a name="aws-cdk-sdk.datapipeline.DataPipelineInstanceIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineInstanceIdentity: datapipeline.DataPipelineInstanceIdentity = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineInstanceIdentity.property.document"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineInstanceIdentity.property.signature"></a>

- *Type:* `string`

---

### DataPipelineListPipelinesInput <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineListPipelinesInput: datapipeline.DataPipelineListPipelinesInput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput.property.marker"></a>

- *Type:* `string`

---

### DataPipelineListPipelinesOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineListPipelinesOutput: datapipeline.DataPipelineListPipelinesOutput = { ... }
```

##### `pipelineIdList`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesOutput.property.pipelineIdList"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName)[]

---

##### `hasMoreResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesOutput.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineListPipelinesOutput.property.marker"></a>

- *Type:* `string`

---

### DataPipelineOperator <a name="aws-cdk-sdk.datapipeline.DataPipelineOperator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineOperator: datapipeline.DataPipelineOperator = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineOperator.property.type"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineOperator.property.values"></a>

- *Type:* `string`[]

---

### DataPipelineParameterAttribute <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineParameterAttribute: datapipeline.DataPipelineParameterAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterAttribute.property.key"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterAttribute.property.stringValue"></a>

- *Type:* `string`

---

### DataPipelineParameterObject <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineParameterObject: datapipeline.DataPipelineParameterObject = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterObject.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterAttribute`](#aws-cdk-sdk.datapipeline.DataPipelineParameterAttribute)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterObject.property.id"></a>

- *Type:* `string`

---

### DataPipelineParameterValue <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineParameterValue: datapipeline.DataPipelineParameterValue = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterValue.property.id"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineParameterValue.property.stringValue"></a>

- *Type:* `string`

---

### DataPipelinePipelineDescription <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePipelineDescription: datapipeline.DataPipelinePipelineDescription = { ... }
```

##### `fields`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription.property.fields"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineField`](#aws-cdk-sdk.datapipeline.DataPipelineField)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription.property.name"></a>

- *Type:* `string`

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription.property.pipelineId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineTag`](#aws-cdk-sdk.datapipeline.DataPipelineTag)[]

---

### DataPipelinePipelineIdName <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePipelineIdName: datapipeline.DataPipelinePipelineIdName = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName.property.name"></a>

- *Type:* `string`

---

### DataPipelinePipelineObject <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePipelineObject: datapipeline.DataPipelinePipelineObject = { ... }
```

##### `fields`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineObject.property.fields"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineField`](#aws-cdk-sdk.datapipeline.DataPipelineField)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineObject.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePipelineObject.property.name"></a>

- *Type:* `string`

---

### DataPipelinePollForTaskInput <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePollForTaskInput: datapipeline.DataPipelinePollForTaskInput = { ... }
```

##### `workerGroup`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput.property.workerGroup"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput.property.hostname"></a>

- *Type:* `string`

---

##### `instanceIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput.property.instanceIdentity"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineInstanceIdentity`](#aws-cdk-sdk.datapipeline.DataPipelineInstanceIdentity)

---

### DataPipelinePollForTaskOutput <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePollForTaskOutput: datapipeline.DataPipelinePollForTaskOutput = { ... }
```

##### `taskObject`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePollForTaskOutput.property.taskObject"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineTaskObject`](#aws-cdk-sdk.datapipeline.DataPipelineTaskObject)

---

### DataPipelinePutPipelineDefinitionInput <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePutPipelineDefinitionInput: datapipeline.DataPipelinePutPipelineDefinitionInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `pipelineObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---

##### `parameterObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput.property.parameterObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterObject`](#aws-cdk-sdk.datapipeline.DataPipelineParameterObject)[]

---

##### `parameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput.property.parameterValues"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterValue`](#aws-cdk-sdk.datapipeline.DataPipelineParameterValue)[]

---

### DataPipelinePutPipelineDefinitionOutput <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelinePutPipelineDefinitionOutput: datapipeline.DataPipelinePutPipelineDefinitionOutput = { ... }
```

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionOutput.property.errored"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionOutput.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationError`](#aws-cdk-sdk.datapipeline.DataPipelineValidationError)[]

---

##### `validationWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionOutput.property.validationWarnings"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationWarning`](#aws-cdk-sdk.datapipeline.DataPipelineValidationWarning)[]

---

### DataPipelineQuery <a name="aws-cdk-sdk.datapipeline.DataPipelineQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineQuery: datapipeline.DataPipelineQuery = { ... }
```

##### `selectors`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQuery.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineSelector`](#aws-cdk-sdk.datapipeline.DataPipelineSelector)[]

---

### DataPipelineQueryObjectsInput <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineQueryObjectsInput: datapipeline.DataPipelineQueryObjectsInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `sphere`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput.property.sphere"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput.property.marker"></a>

- *Type:* `string`

---

##### `query`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput.property.query"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineQuery`](#aws-cdk-sdk.datapipeline.DataPipelineQuery)

---

### DataPipelineQueryObjectsOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineQueryObjectsOutput: datapipeline.DataPipelineQueryObjectsOutput = { ... }
```

##### `hasMoreResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsOutput.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsOutput.property.ids"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsOutput.property.marker"></a>

- *Type:* `string`

---

### DataPipelineRemoveTagsInput <a name="aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineRemoveTagsInput: datapipeline.DataPipelineRemoveTagsInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### DataPipelineRemoveTagsOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineRemoveTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineRemoveTagsOutput: datapipeline.DataPipelineRemoveTagsOutput = { ... }
```

### DataPipelineReportTaskProgressInput <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineReportTaskProgressInput: datapipeline.DataPipelineReportTaskProgressInput = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput.property.taskId"></a>

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput.property.fields"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineField`](#aws-cdk-sdk.datapipeline.DataPipelineField)[]

---

### DataPipelineReportTaskProgressOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineReportTaskProgressOutput: datapipeline.DataPipelineReportTaskProgressOutput = { ... }
```

##### `canceled`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressOutput.property.canceled"></a>

- *Type:* `boolean`

---

### DataPipelineReportTaskRunnerHeartbeatInput <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineReportTaskRunnerHeartbeatInput: datapipeline.DataPipelineReportTaskRunnerHeartbeatInput = { ... }
```

##### `taskrunnerId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput.property.taskrunnerId"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput.property.hostname"></a>

- *Type:* `string`

---

##### `workerGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput.property.workerGroup"></a>

- *Type:* `string`

---

### DataPipelineReportTaskRunnerHeartbeatOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineReportTaskRunnerHeartbeatOutput: datapipeline.DataPipelineReportTaskRunnerHeartbeatOutput = { ... }
```

##### `terminate`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatOutput.property.terminate"></a>

- *Type:* `boolean`

---

### DataPipelineSelector <a name="aws-cdk-sdk.datapipeline.DataPipelineSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineSelector: datapipeline.DataPipelineSelector = { ... }
```

##### `fieldName`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSelector.property.fieldName"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSelector.property.operator"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineOperator`](#aws-cdk-sdk.datapipeline.DataPipelineOperator)

---

### DataPipelineSetStatusInput <a name="aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineSetStatusInput: datapipeline.DataPipelineSetStatusInput = { ... }
```

##### `objectIds`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput.property.objectIds"></a>

- *Type:* `string`[]

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetStatusInput.property.status"></a>

- *Type:* `string`

---

### DataPipelineSetTaskStatusInput <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineSetTaskStatusInput: datapipeline.DataPipelineSetTaskStatusInput = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput.property.taskStatus"></a>

- *Type:* `string`

---

##### `errorId`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput.property.errorId"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorStackTrace`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusInput.property.errorStackTrace"></a>

- *Type:* `string`

---

### DataPipelineSetTaskStatusOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineSetTaskStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineSetTaskStatusOutput: datapipeline.DataPipelineSetTaskStatusOutput = { ... }
```

### DataPipelineTag <a name="aws-cdk-sdk.datapipeline.DataPipelineTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineTag: datapipeline.DataPipelineTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTag.property.value"></a>

- *Type:* `string`

---

### DataPipelineTaskObject <a name="aws-cdk-sdk.datapipeline.DataPipelineTaskObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineTaskObject: datapipeline.DataPipelineTaskObject = { ... }
```

##### `attemptId`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTaskObject.property.attemptId"></a>

- *Type:* `string`

---

##### `objects`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTaskObject.property.objects"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)}

---

##### `pipelineId`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTaskObject.property.pipelineId"></a>

- *Type:* `string`

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineTaskObject.property.taskId"></a>

- *Type:* `string`

---

### DataPipelineValidatePipelineDefinitionInput <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineValidatePipelineDefinitionInput: datapipeline.DataPipelineValidatePipelineDefinitionInput = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput.property.pipelineId"></a>

- *Type:* `string`

---

##### `pipelineObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---

##### `parameterObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput.property.parameterObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterObject`](#aws-cdk-sdk.datapipeline.DataPipelineParameterObject)[]

---

##### `parameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput.property.parameterValues"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterValue`](#aws-cdk-sdk.datapipeline.DataPipelineParameterValue)[]

---

### DataPipelineValidatePipelineDefinitionOutput <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineValidatePipelineDefinitionOutput: datapipeline.DataPipelineValidatePipelineDefinitionOutput = { ... }
```

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionOutput.property.errored"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionOutput.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationError`](#aws-cdk-sdk.datapipeline.DataPipelineValidationError)[]

---

##### `validationWarnings`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionOutput.property.validationWarnings"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationWarning`](#aws-cdk-sdk.datapipeline.DataPipelineValidationWarning)[]

---

### DataPipelineValidationError <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineValidationError: datapipeline.DataPipelineValidationError = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationError.property.errors"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationError.property.id"></a>

- *Type:* `string`

---

### DataPipelineValidationWarning <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

const dataPipelineValidationWarning: datapipeline.DataPipelineValidationWarning = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationWarning.property.id"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineValidationWarning.property.warnings"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### DataPipelineResponsesCreatePipeline <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesCreatePipeline(__scope: Construct, __resources: string[], __input: DataPipelineCreatePipelineInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput`](#aws-cdk-sdk.datapipeline.DataPipelineCreatePipelineInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesCreatePipeline.property.pipelineId"></a>

- *Type:* `string`

---


### DataPipelineResponsesDescribeObjects <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesDescribeObjects(__scope: Construct, __resources: string[], __input: DataPipelineDescribeObjectsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput`](#aws-cdk-sdk.datapipeline.DataPipelineDescribeObjectsInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreResults`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.property.marker"></a>

- *Type:* `string`

---

##### `pipelineObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribeObjects.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---


### DataPipelineResponsesDescribePipelines <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesDescribePipelines(__scope: Construct, __resources: string[], __input: DataPipelineDescribePipelinesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput`](#aws-cdk-sdk.datapipeline.DataPipelineDescribePipelinesInput)

---



#### Properties <a name="Properties"></a>

##### `pipelineDescriptionList`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesDescribePipelines.property.pipelineDescriptionList"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineDescription)[]

---


### DataPipelineResponsesEvaluateExpression <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesEvaluateExpression(__scope: Construct, __resources: string[], __input: DataPipelineEvaluateExpressionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput`](#aws-cdk-sdk.datapipeline.DataPipelineEvaluateExpressionInput)

---



#### Properties <a name="Properties"></a>

##### `evaluatedExpression`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesEvaluateExpression.property.evaluatedExpression"></a>

- *Type:* `string`

---


### DataPipelineResponsesFetchPipelineDefinition <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesFetchPipelineDefinition(__scope: Construct, __resources: string[], __input: DataPipelineGetPipelineDefinitionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelineGetPipelineDefinitionInput)

---



#### Properties <a name="Properties"></a>

##### `parameterObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.property.parameterObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterObject`](#aws-cdk-sdk.datapipeline.DataPipelineParameterObject)[]

---

##### `parameterValues`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.property.parameterValues"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineParameterValue`](#aws-cdk-sdk.datapipeline.DataPipelineParameterValue)[]

---

##### `pipelineObjects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesFetchPipelineDefinition.property.pipelineObjects"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)[]

---


### DataPipelineResponsesListPipelines <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesListPipelines(__scope: Construct, __resources: string[], __input: DataPipelineListPipelinesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput`](#aws-cdk-sdk.datapipeline.DataPipelineListPipelinesInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreResults`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.property.marker"></a>

- *Type:* `string`

---

##### `pipelineIdList`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesListPipelines.property.pipelineIdList"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineIdName)[]

---


### DataPipelineResponsesPollForTask <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesPollForTask(__scope: Construct, __resources: string[], __input: DataPipelinePollForTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput`](#aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput)

---



#### Properties <a name="Properties"></a>

##### `taskObject`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTask.property.taskObject"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject`](#aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject)

---


### DataPipelineResponsesPollForTaskTaskObject <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesPollForTaskTaskObject(__scope: Construct, __resources: string[], __input: DataPipelinePollForTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput`](#aws-cdk-sdk.datapipeline.DataPipelinePollForTaskInput)

---



#### Properties <a name="Properties"></a>

##### `attemptId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.property.attemptId"></a>

- *Type:* `string`

---

##### `objects`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.property.objects"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.datapipeline.DataPipelinePipelineObject`](#aws-cdk-sdk.datapipeline.DataPipelinePipelineObject)}

---

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.property.pipelineId"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPollForTaskTaskObject.property.taskId"></a>

- *Type:* `string`

---


### DataPipelineResponsesPutPipelineDefinition <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesPutPipelineDefinition(__scope: Construct, __resources: string[], __input: DataPipelinePutPipelineDefinitionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelinePutPipelineDefinitionInput)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.property.errored"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationError`](#aws-cdk-sdk.datapipeline.DataPipelineValidationError)[]

---

##### `validationWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesPutPipelineDefinition.property.validationWarnings"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationWarning`](#aws-cdk-sdk.datapipeline.DataPipelineValidationWarning)[]

---


### DataPipelineResponsesQueryObjects <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesQueryObjects(__scope: Construct, __resources: string[], __input: DataPipelineQueryObjectsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput`](#aws-cdk-sdk.datapipeline.DataPipelineQueryObjectsInput)

---



#### Properties <a name="Properties"></a>

##### `hasMoreResults`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.property.hasMoreResults"></a>

- *Type:* `boolean`

---

##### `ids`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.property.ids"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesQueryObjects.property.marker"></a>

- *Type:* `string`

---


### DataPipelineResponsesReportTaskProgress <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesReportTaskProgress(__scope: Construct, __resources: string[], __input: DataPipelineReportTaskProgressInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput`](#aws-cdk-sdk.datapipeline.DataPipelineReportTaskProgressInput)

---



#### Properties <a name="Properties"></a>

##### `canceled`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskProgress.property.canceled"></a>

- *Type:* `boolean`

---


### DataPipelineResponsesReportTaskRunnerHeartbeat <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat(__scope: Construct, __resources: string[], __input: DataPipelineReportTaskRunnerHeartbeatInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput`](#aws-cdk-sdk.datapipeline.DataPipelineReportTaskRunnerHeartbeatInput)

---



#### Properties <a name="Properties"></a>

##### `terminate`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesReportTaskRunnerHeartbeat.property.terminate"></a>

- *Type:* `boolean`

---


### DataPipelineResponsesValidatePipelineDefinition <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.Initializer"></a>

```typescript
import { datapipeline } from 'aws-cdk-sdk'

new datapipeline.DataPipelineResponsesValidatePipelineDefinition(__scope: Construct, __resources: string[], __input: DataPipelineValidatePipelineDefinitionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput`](#aws-cdk-sdk.datapipeline.DataPipelineValidatePipelineDefinitionInput)

---



#### Properties <a name="Properties"></a>

##### `errored`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.property.errored"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationError`](#aws-cdk-sdk.datapipeline.DataPipelineValidationError)[]

---

##### `validationWarnings`<sup>Required</sup> <a name="aws-cdk-sdk.datapipeline.DataPipelineResponsesValidatePipelineDefinition.property.validationWarnings"></a>

- *Type:* [`aws-cdk-sdk.datapipeline.DataPipelineValidationWarning`](#aws-cdk-sdk.datapipeline.DataPipelineValidationWarning)[]

---



