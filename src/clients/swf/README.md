# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SwfClient <a name="aws-cdk-sdk.swf.SwfClient"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SwfClient.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SwfClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `countClosedWorkflowExecutions` <a name="aws-cdk-sdk.swf.SwfClient.countClosedWorkflowExecutions"></a>

```typescript
public countClosedWorkflowExecutions(input: SwfCountClosedWorkflowExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput)

---

##### `countOpenWorkflowExecutions` <a name="aws-cdk-sdk.swf.SwfClient.countOpenWorkflowExecutions"></a>

```typescript
public countOpenWorkflowExecutions(input: SwfCountOpenWorkflowExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput)

---

##### `countPendingActivityTasks` <a name="aws-cdk-sdk.swf.SwfClient.countPendingActivityTasks"></a>

```typescript
public countPendingActivityTasks(input: SwfCountPendingActivityTasksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput`](#aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput)

---

##### `countPendingDecisionTasks` <a name="aws-cdk-sdk.swf.SwfClient.countPendingDecisionTasks"></a>

```typescript
public countPendingDecisionTasks(input: SwfCountPendingDecisionTasksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput`](#aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput)

---

##### `deprecateActivityType` <a name="aws-cdk-sdk.swf.SwfClient.deprecateActivityType"></a>

```typescript
public deprecateActivityType(input: SwfDeprecateActivityTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDeprecateActivityTypeInput`](#aws-cdk-sdk.swf.SwfDeprecateActivityTypeInput)

---

##### `deprecateDomain` <a name="aws-cdk-sdk.swf.SwfClient.deprecateDomain"></a>

```typescript
public deprecateDomain(input: SwfDeprecateDomainInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDeprecateDomainInput`](#aws-cdk-sdk.swf.SwfDeprecateDomainInput)

---

##### `deprecateWorkflowType` <a name="aws-cdk-sdk.swf.SwfClient.deprecateWorkflowType"></a>

```typescript
public deprecateWorkflowType(input: SwfDeprecateWorkflowTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDeprecateWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDeprecateWorkflowTypeInput)

---

##### `describeActivityType` <a name="aws-cdk-sdk.swf.SwfClient.describeActivityType"></a>

```typescript
public describeActivityType(input: SwfDescribeActivityTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---

##### `describeDomain` <a name="aws-cdk-sdk.swf.SwfClient.describeDomain"></a>

```typescript
public describeDomain(input: SwfDescribeDomainInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeDomainInput`](#aws-cdk-sdk.swf.SwfDescribeDomainInput)

---

##### `describeWorkflowExecution` <a name="aws-cdk-sdk.swf.SwfClient.describeWorkflowExecution"></a>

```typescript
public describeWorkflowExecution(input: SwfDescribeWorkflowExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---

##### `describeWorkflowType` <a name="aws-cdk-sdk.swf.SwfClient.describeWorkflowType"></a>

```typescript
public describeWorkflowType(input: SwfDescribeWorkflowTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---

##### `fetchWorkflowExecutionHistory` <a name="aws-cdk-sdk.swf.SwfClient.fetchWorkflowExecutionHistory"></a>

```typescript
public fetchWorkflowExecutionHistory(input: SwfGetWorkflowExecutionHistoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput`](#aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput)

---

##### `listActivityTypes` <a name="aws-cdk-sdk.swf.SwfClient.listActivityTypes"></a>

```typescript
public listActivityTypes(input: SwfListActivityTypesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListActivityTypesInput`](#aws-cdk-sdk.swf.SwfListActivityTypesInput)

---

##### `listClosedWorkflowExecutions` <a name="aws-cdk-sdk.swf.SwfClient.listClosedWorkflowExecutions"></a>

```typescript
public listClosedWorkflowExecutions(input: SwfListClosedWorkflowExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput)

---

##### `listDomains` <a name="aws-cdk-sdk.swf.SwfClient.listDomains"></a>

```typescript
public listDomains(input: SwfListDomainsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListDomainsInput`](#aws-cdk-sdk.swf.SwfListDomainsInput)

---

##### `listOpenWorkflowExecutions` <a name="aws-cdk-sdk.swf.SwfClient.listOpenWorkflowExecutions"></a>

```typescript
public listOpenWorkflowExecutions(input: SwfListOpenWorkflowExecutionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.swf.SwfClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SwfListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListTagsForResourceInput`](#aws-cdk-sdk.swf.SwfListTagsForResourceInput)

---

##### `listWorkflowTypes` <a name="aws-cdk-sdk.swf.SwfClient.listWorkflowTypes"></a>

```typescript
public listWorkflowTypes(input: SwfListWorkflowTypesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListWorkflowTypesInput`](#aws-cdk-sdk.swf.SwfListWorkflowTypesInput)

---

##### `pollForActivityTask` <a name="aws-cdk-sdk.swf.SwfClient.pollForActivityTask"></a>

```typescript
public pollForActivityTask(input: SwfPollForActivityTaskInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForActivityTaskInput`](#aws-cdk-sdk.swf.SwfPollForActivityTaskInput)

---

##### `pollForDecisionTask` <a name="aws-cdk-sdk.swf.SwfClient.pollForDecisionTask"></a>

```typescript
public pollForDecisionTask(input: SwfPollForDecisionTaskInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForDecisionTaskInput`](#aws-cdk-sdk.swf.SwfPollForDecisionTaskInput)

---

##### `recordActivityTaskHeartbeat` <a name="aws-cdk-sdk.swf.SwfClient.recordActivityTaskHeartbeat"></a>

```typescript
public recordActivityTaskHeartbeat(input: SwfRecordActivityTaskHeartbeatInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput`](#aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput)

---

##### `registerActivityType` <a name="aws-cdk-sdk.swf.SwfClient.registerActivityType"></a>

```typescript
public registerActivityType(input: SwfRegisterActivityTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRegisterActivityTypeInput`](#aws-cdk-sdk.swf.SwfRegisterActivityTypeInput)

---

##### `registerDomain` <a name="aws-cdk-sdk.swf.SwfClient.registerDomain"></a>

```typescript
public registerDomain(input: SwfRegisterDomainInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRegisterDomainInput`](#aws-cdk-sdk.swf.SwfRegisterDomainInput)

---

##### `registerWorkflowType` <a name="aws-cdk-sdk.swf.SwfClient.registerWorkflowType"></a>

```typescript
public registerWorkflowType(input: SwfRegisterWorkflowTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput)

---

##### `requestCancelWorkflowExecution` <a name="aws-cdk-sdk.swf.SwfClient.requestCancelWorkflowExecution"></a>

```typescript
public requestCancelWorkflowExecution(input: SwfRequestCancelWorkflowExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput)

---

##### `respondActivityTaskCanceled` <a name="aws-cdk-sdk.swf.SwfClient.respondActivityTaskCanceled"></a>

```typescript
public respondActivityTaskCanceled(input: SwfRespondActivityTaskCanceledInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRespondActivityTaskCanceledInput`](#aws-cdk-sdk.swf.SwfRespondActivityTaskCanceledInput)

---

##### `respondActivityTaskCompleted` <a name="aws-cdk-sdk.swf.SwfClient.respondActivityTaskCompleted"></a>

```typescript
public respondActivityTaskCompleted(input: SwfRespondActivityTaskCompletedInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRespondActivityTaskCompletedInput`](#aws-cdk-sdk.swf.SwfRespondActivityTaskCompletedInput)

---

##### `respondActivityTaskFailed` <a name="aws-cdk-sdk.swf.SwfClient.respondActivityTaskFailed"></a>

```typescript
public respondActivityTaskFailed(input: SwfRespondActivityTaskFailedInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput`](#aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput)

---

##### `respondDecisionTaskCompleted` <a name="aws-cdk-sdk.swf.SwfClient.respondDecisionTaskCompleted"></a>

```typescript
public respondDecisionTaskCompleted(input: SwfRespondDecisionTaskCompletedInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput`](#aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput)

---

##### `signalWorkflowExecution` <a name="aws-cdk-sdk.swf.SwfClient.signalWorkflowExecution"></a>

```typescript
public signalWorkflowExecution(input: SwfSignalWorkflowExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput)

---

##### `startWorkflowExecution` <a name="aws-cdk-sdk.swf.SwfClient.startWorkflowExecution"></a>

```typescript
public startWorkflowExecution(input: SwfStartWorkflowExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput)

---

##### `tagResource` <a name="aws-cdk-sdk.swf.SwfClient.tagResource"></a>

```typescript
public tagResource(input: SwfTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTagResourceInput`](#aws-cdk-sdk.swf.SwfTagResourceInput)

---

##### `terminateWorkflowExecution` <a name="aws-cdk-sdk.swf.SwfClient.terminateWorkflowExecution"></a>

```typescript
public terminateWorkflowExecution(input: SwfTerminateWorkflowExecutionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput)

---

##### `undeprecateActivityType` <a name="aws-cdk-sdk.swf.SwfClient.undeprecateActivityType"></a>

```typescript
public undeprecateActivityType(input: SwfUndeprecateActivityTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfUndeprecateActivityTypeInput`](#aws-cdk-sdk.swf.SwfUndeprecateActivityTypeInput)

---

##### `undeprecateDomain` <a name="aws-cdk-sdk.swf.SwfClient.undeprecateDomain"></a>

```typescript
public undeprecateDomain(input: SwfUndeprecateDomainInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfUndeprecateDomainInput`](#aws-cdk-sdk.swf.SwfUndeprecateDomainInput)

---

##### `undeprecateWorkflowType` <a name="aws-cdk-sdk.swf.SwfClient.undeprecateWorkflowType"></a>

```typescript
public undeprecateWorkflowType(input: SwfUndeprecateWorkflowTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfUndeprecateWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfUndeprecateWorkflowTypeInput)

---

##### `untagResource` <a name="aws-cdk-sdk.swf.SwfClient.untagResource"></a>

```typescript
public untagResource(input: SwfUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfUntagResourceInput`](#aws-cdk-sdk.swf.SwfUntagResourceInput)

---




## Structs <a name="Structs"></a>

### SwfActivityTask <a name="aws-cdk-sdk.swf.SwfActivityTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTask: swf.SwfActivityTask = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.activityId"></a>

- *Type:* `string`

---

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.startedEventId"></a>

- *Type:* `number`

---

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.taskToken"></a>

- *Type:* `string`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTask.property.input"></a>

- *Type:* `string`

---

### SwfActivityTaskCanceledEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskCanceledEventAttributes: swf.SwfActivityTaskCanceledEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `latestCancelRequestedEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes.property.latestCancelRequestedEventId"></a>

- *Type:* `number`

---

### SwfActivityTaskCancelRequestedEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskCancelRequestedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskCancelRequestedEventAttributes: swf.SwfActivityTaskCancelRequestedEventAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCancelRequestedEventAttributes.property.activityId"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCancelRequestedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfActivityTaskCompletedEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskCompletedEventAttributes: swf.SwfActivityTaskCompletedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes.property.result"></a>

- *Type:* `string`

---

### SwfActivityTaskFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskFailedEventAttributes: swf.SwfActivityTaskFailedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfActivityTaskScheduledEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskScheduledEventAttributes: swf.SwfActivityTaskScheduledEventAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.activityId"></a>

- *Type:* `string`

---

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.heartbeatTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `scheduleToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.scheduleToCloseTimeout"></a>

- *Type:* `string`

---

##### `scheduleToStartTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.scheduleToStartTimeout"></a>

- *Type:* `string`

---

##### `startToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.startToCloseTimeout"></a>

- *Type:* `string`

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes.property.taskPriority"></a>

- *Type:* `string`

---

### SwfActivityTaskStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskStartedEventAttributes: swf.SwfActivityTaskStartedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskStartedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskStartedEventAttributes.property.identity"></a>

- *Type:* `string`

---

### SwfActivityTaskStatus <a name="aws-cdk-sdk.swf.SwfActivityTaskStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskStatus: swf.SwfActivityTaskStatus = { ... }
```

##### `cancelRequested`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskStatus.property.cancelRequested"></a>

- *Type:* `boolean`

---

### SwfActivityTaskTimedOutEventAttributes <a name="aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTaskTimedOutEventAttributes: swf.SwfActivityTaskTimedOutEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timeoutType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes.property.timeoutType"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes.property.details"></a>

- *Type:* `string`

---

### SwfActivityType <a name="aws-cdk-sdk.swf.SwfActivityType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityType: swf.SwfActivityType = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityType.property.version"></a>

- *Type:* `string`

---

### SwfActivityTypeConfiguration <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTypeConfiguration: swf.SwfActivityTypeConfiguration = { ... }
```

##### `defaultTaskHeartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskHeartbeatTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `defaultTaskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskScheduleToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToStartTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskScheduleToStartTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeConfiguration.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfActivityTypeDetail <a name="aws-cdk-sdk.swf.SwfActivityTypeDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTypeDetail: swf.SwfActivityTypeDetail = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeDetail.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTypeConfiguration`](#aws-cdk-sdk.swf.SwfActivityTypeConfiguration)

---

##### `typeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeDetail.property.typeInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTypeInfo`](#aws-cdk-sdk.swf.SwfActivityTypeInfo)

---

### SwfActivityTypeInfo <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTypeInfo: swf.SwfActivityTypeInfo = { ... }
```

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo.property.status"></a>

- *Type:* `string`

---

##### `deprecationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo.property.deprecationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfo.property.description"></a>

- *Type:* `string`

---

### SwfActivityTypeInfos <a name="aws-cdk-sdk.swf.SwfActivityTypeInfos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfActivityTypeInfos: swf.SwfActivityTypeInfos = { ... }
```

##### `typeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfos.property.typeInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTypeInfo`](#aws-cdk-sdk.swf.SwfActivityTypeInfo)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfActivityTypeInfos.property.nextPageToken"></a>

- *Type:* `string`

---

### SwfCancelTimerDecisionAttributes <a name="aws-cdk-sdk.swf.SwfCancelTimerDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCancelTimerDecisionAttributes: swf.SwfCancelTimerDecisionAttributes = { ... }
```

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelTimerDecisionAttributes.property.timerId"></a>

- *Type:* `string`

---

### SwfCancelTimerFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCancelTimerFailedEventAttributes: swf.SwfCancelTimerFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes.property.timerId"></a>

- *Type:* `string`

---

### SwfCancelWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfCancelWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCancelWorkflowExecutionDecisionAttributes: swf.SwfCancelWorkflowExecutionDecisionAttributes = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCancelWorkflowExecutionDecisionAttributes.property.details"></a>

- *Type:* `string`

---

### SwfCancelWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfCancelWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCancelWorkflowExecutionFailedEventAttributes: swf.SwfCancelWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCancelWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfChildWorkflowExecutionCanceledEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionCanceledEventAttributes: swf.SwfChildWorkflowExecutionCanceledEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes.property.details"></a>

- *Type:* `string`

---

### SwfChildWorkflowExecutionCompletedEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionCompletedEventAttributes: swf.SwfChildWorkflowExecutionCompletedEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes.property.result"></a>

- *Type:* `string`

---

### SwfChildWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionFailedEventAttributes: swf.SwfChildWorkflowExecutionFailedEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfChildWorkflowExecutionStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionStartedEventAttributes: swf.SwfChildWorkflowExecutionStartedEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfChildWorkflowExecutionTerminatedEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionTerminatedEventAttributes: swf.SwfChildWorkflowExecutionTerminatedEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfChildWorkflowExecutionTimedOutEventAttributes <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfChildWorkflowExecutionTimedOutEventAttributes: swf.SwfChildWorkflowExecutionTimedOutEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timeoutType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes.property.timeoutType"></a>

- *Type:* `string`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfCloseStatusFilter <a name="aws-cdk-sdk.swf.SwfCloseStatusFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCloseStatusFilter: swf.SwfCloseStatusFilter = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCloseStatusFilter.property.status"></a>

- *Type:* `string`

---

### SwfCompleteWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCompleteWorkflowExecutionDecisionAttributes: swf.SwfCompleteWorkflowExecutionDecisionAttributes = { ... }
```

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionDecisionAttributes.property.result"></a>

- *Type:* `string`

---

### SwfCompleteWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCompleteWorkflowExecutionFailedEventAttributes: swf.SwfCompleteWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfContinueAsNewWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfContinueAsNewWorkflowExecutionDecisionAttributes: swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes = { ... }
```

##### `childPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.lambdaRole"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `workflowTypeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes.property.workflowTypeVersion"></a>

- *Type:* `string`

---

### SwfContinueAsNewWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfContinueAsNewWorkflowExecutionFailedEventAttributes: swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfCountClosedWorkflowExecutionsInput <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCountClosedWorkflowExecutionsInput: swf.SwfCountClosedWorkflowExecutionsInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.domain"></a>

- *Type:* `string`

---

##### `closeStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.closeStatusFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCloseStatusFilter`](#aws-cdk-sdk.swf.SwfCloseStatusFilter)

---

##### `closeTimeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.closeTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `executionFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.executionFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionFilter`](#aws-cdk-sdk.swf.SwfWorkflowExecutionFilter)

---

##### `startTimeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.startTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `tagFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.tagFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTagFilter`](#aws-cdk-sdk.swf.SwfTagFilter)

---

##### `typeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput.property.typeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeFilter`](#aws-cdk-sdk.swf.SwfWorkflowTypeFilter)

---

### SwfCountOpenWorkflowExecutionsInput <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCountOpenWorkflowExecutionsInput: swf.SwfCountOpenWorkflowExecutionsInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput.property.domain"></a>

- *Type:* `string`

---

##### `startTimeFilter`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput.property.startTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `executionFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput.property.executionFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionFilter`](#aws-cdk-sdk.swf.SwfWorkflowExecutionFilter)

---

##### `tagFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput.property.tagFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTagFilter`](#aws-cdk-sdk.swf.SwfTagFilter)

---

##### `typeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput.property.typeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeFilter`](#aws-cdk-sdk.swf.SwfWorkflowTypeFilter)

---

### SwfCountPendingActivityTasksInput <a name="aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCountPendingActivityTasksInput: swf.SwfCountPendingActivityTasksInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput.property.domain"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

### SwfCountPendingDecisionTasksInput <a name="aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfCountPendingDecisionTasksInput: swf.SwfCountPendingDecisionTasksInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput.property.domain"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

### SwfDecision <a name="aws-cdk-sdk.swf.SwfDecision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecision: swf.SwfDecision = { ... }
```

##### `decisionType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.decisionType"></a>

- *Type:* `string`

---

##### `cancelTimerDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.cancelTimerDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCancelTimerDecisionAttributes`](#aws-cdk-sdk.swf.SwfCancelTimerDecisionAttributes)

---

##### `cancelWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.cancelWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCancelWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfCancelWorkflowExecutionDecisionAttributes)

---

##### `completeWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.completeWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionDecisionAttributes)

---

##### `continueAsNewWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.continueAsNewWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionDecisionAttributes)

---

##### `failWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.failWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfFailWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfFailWorkflowExecutionDecisionAttributes)

---

##### `recordMarkerDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.recordMarkerDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRecordMarkerDecisionAttributes`](#aws-cdk-sdk.swf.SwfRecordMarkerDecisionAttributes)

---

##### `requestCancelActivityTaskDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.requestCancelActivityTaskDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelActivityTaskDecisionAttributes`](#aws-cdk-sdk.swf.SwfRequestCancelActivityTaskDecisionAttributes)

---

##### `requestCancelExternalWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.requestCancelExternalWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes)

---

##### `scheduleActivityTaskDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.scheduleActivityTaskDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes`](#aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes)

---

##### `scheduleLambdaFunctionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.scheduleLambdaFunctionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes`](#aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes)

---

##### `signalExternalWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.signalExternalWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes)

---

##### `startChildWorkflowExecutionDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.startChildWorkflowExecutionDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes`](#aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes)

---

##### `startTimerDecisionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecision.property.startTimerDecisionAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes`](#aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes)

---

### SwfDecisionTask <a name="aws-cdk-sdk.swf.SwfDecisionTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecisionTask: swf.SwfDecisionTask = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.events"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfHistoryEvent`](#aws-cdk-sdk.swf.SwfHistoryEvent)[]

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.startedEventId"></a>

- *Type:* `number`

---

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.taskToken"></a>

- *Type:* `string`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.nextPageToken"></a>

- *Type:* `string`

---

##### `previousStartedEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTask.property.previousStartedEventId"></a>

- *Type:* `number`

---

### SwfDecisionTaskCompletedEventAttributes <a name="aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecisionTaskCompletedEventAttributes: swf.SwfDecisionTaskCompletedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `executionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes.property.executionContext"></a>

- *Type:* `string`

---

### SwfDecisionTaskScheduledEventAttributes <a name="aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecisionTaskScheduledEventAttributes: swf.SwfDecisionTaskScheduledEventAttributes = { ... }
```

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `startToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes.property.startToCloseTimeout"></a>

- *Type:* `string`

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes.property.taskPriority"></a>

- *Type:* `string`

---

### SwfDecisionTaskStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfDecisionTaskStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecisionTaskStartedEventAttributes: swf.SwfDecisionTaskStartedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskStartedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskStartedEventAttributes.property.identity"></a>

- *Type:* `string`

---

### SwfDecisionTaskTimedOutEventAttributes <a name="aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDecisionTaskTimedOutEventAttributes: swf.SwfDecisionTaskTimedOutEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timeoutType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes.property.timeoutType"></a>

- *Type:* `string`

---

### SwfDeprecateActivityTypeInput <a name="aws-cdk-sdk.swf.SwfDeprecateActivityTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDeprecateActivityTypeInput: swf.SwfDeprecateActivityTypeInput = { ... }
```

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDeprecateActivityTypeInput.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDeprecateActivityTypeInput.property.domain"></a>

- *Type:* `string`

---

### SwfDeprecateDomainInput <a name="aws-cdk-sdk.swf.SwfDeprecateDomainInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDeprecateDomainInput: swf.SwfDeprecateDomainInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDeprecateDomainInput.property.name"></a>

- *Type:* `string`

---

### SwfDeprecateWorkflowTypeInput <a name="aws-cdk-sdk.swf.SwfDeprecateWorkflowTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDeprecateWorkflowTypeInput: swf.SwfDeprecateWorkflowTypeInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDeprecateWorkflowTypeInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDeprecateWorkflowTypeInput.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfDescribeActivityTypeInput <a name="aws-cdk-sdk.swf.SwfDescribeActivityTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDescribeActivityTypeInput: swf.SwfDescribeActivityTypeInput = { ... }
```

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeActivityTypeInput.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeActivityTypeInput.property.domain"></a>

- *Type:* `string`

---

### SwfDescribeDomainInput <a name="aws-cdk-sdk.swf.SwfDescribeDomainInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDescribeDomainInput: swf.SwfDescribeDomainInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeDomainInput.property.name"></a>

- *Type:* `string`

---

### SwfDescribeWorkflowExecutionInput <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDescribeWorkflowExecutionInput: swf.SwfDescribeWorkflowExecutionInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput.property.domain"></a>

- *Type:* `string`

---

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput.property.execution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

### SwfDescribeWorkflowTypeInput <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDescribeWorkflowTypeInput: swf.SwfDescribeWorkflowTypeInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfDomainConfiguration <a name="aws-cdk-sdk.swf.SwfDomainConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDomainConfiguration: swf.SwfDomainConfiguration = { ... }
```

##### `workflowExecutionRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainConfiguration.property.workflowExecutionRetentionPeriodInDays"></a>

- *Type:* `string`

---

### SwfDomainDetail <a name="aws-cdk-sdk.swf.SwfDomainDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDomainDetail: swf.SwfDomainDetail = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainDetail.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDomainConfiguration`](#aws-cdk-sdk.swf.SwfDomainConfiguration)

---

##### `domainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainDetail.property.domainInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDomainInfo`](#aws-cdk-sdk.swf.SwfDomainInfo)

---

### SwfDomainInfo <a name="aws-cdk-sdk.swf.SwfDomainInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDomainInfo: swf.SwfDomainInfo = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfo.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfo.property.status"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfo.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfo.property.description"></a>

- *Type:* `string`

---

### SwfDomainInfos <a name="aws-cdk-sdk.swf.SwfDomainInfos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfDomainInfos: swf.SwfDomainInfos = { ... }
```

##### `domainInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfos.property.domainInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDomainInfo`](#aws-cdk-sdk.swf.SwfDomainInfo)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfDomainInfos.property.nextPageToken"></a>

- *Type:* `string`

---

### SwfExecutionTimeFilter <a name="aws-cdk-sdk.swf.SwfExecutionTimeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfExecutionTimeFilter: swf.SwfExecutionTimeFilter = { ... }
```

##### `oldestDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfExecutionTimeFilter.property.oldestDate"></a>

- *Type:* `string`

---

##### `latestDate`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfExecutionTimeFilter.property.latestDate"></a>

- *Type:* `string`

---

### SwfExternalWorkflowExecutionCancelRequestedEventAttributes <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfExternalWorkflowExecutionCancelRequestedEventAttributes: swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

### SwfExternalWorkflowExecutionSignaledEventAttributes <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionSignaledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfExternalWorkflowExecutionSignaledEventAttributes: swf.SwfExternalWorkflowExecutionSignaledEventAttributes = { ... }
```

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionSignaledEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfExternalWorkflowExecutionSignaledEventAttributes.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

### SwfFailWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfFailWorkflowExecutionDecisionAttributes: swf.SwfFailWorkflowExecutionDecisionAttributes = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionDecisionAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionDecisionAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfFailWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfFailWorkflowExecutionFailedEventAttributes: swf.SwfFailWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfFailWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfGetWorkflowExecutionHistoryInput <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfGetWorkflowExecutionHistoryInput: swf.SwfGetWorkflowExecutionHistoryInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput.property.domain"></a>

- *Type:* `string`

---

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput.property.execution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SwfHistory <a name="aws-cdk-sdk.swf.SwfHistory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfHistory: swf.SwfHistory = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfHistory.property.events"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfHistoryEvent`](#aws-cdk-sdk.swf.SwfHistoryEvent)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistory.property.nextPageToken"></a>

- *Type:* `string`

---

### SwfHistoryEvent <a name="aws-cdk-sdk.swf.SwfHistoryEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfHistoryEvent: swf.SwfHistoryEvent = { ... }
```

##### `eventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.eventId"></a>

- *Type:* `number`

---

##### `eventTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.eventTimestamp"></a>

- *Type:* `string`

---

##### `eventType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.eventType"></a>

- *Type:* `string`

---

##### `activityTaskCanceledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskCanceledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskCanceledEventAttributes)

---

##### `activityTaskCancelRequestedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskCancelRequestedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskCancelRequestedEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskCancelRequestedEventAttributes)

---

##### `activityTaskCompletedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskCompletedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskCompletedEventAttributes)

---

##### `activityTaskFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskFailedEventAttributes)

---

##### `activityTaskScheduledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskScheduledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskScheduledEventAttributes)

---

##### `activityTaskStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskStartedEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskStartedEventAttributes)

---

##### `activityTaskTimedOutEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.activityTaskTimedOutEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes`](#aws-cdk-sdk.swf.SwfActivityTaskTimedOutEventAttributes)

---

##### `cancelTimerFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.cancelTimerFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes`](#aws-cdk-sdk.swf.SwfCancelTimerFailedEventAttributes)

---

##### `cancelWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.cancelWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCancelWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfCancelWorkflowExecutionFailedEventAttributes)

---

##### `childWorkflowExecutionCanceledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionCanceledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionCanceledEventAttributes)

---

##### `childWorkflowExecutionCompletedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionCompletedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionCompletedEventAttributes)

---

##### `childWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionFailedEventAttributes)

---

##### `childWorkflowExecutionStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionStartedEventAttributes)

---

##### `childWorkflowExecutionTerminatedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionTerminatedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionTerminatedEventAttributes)

---

##### `childWorkflowExecutionTimedOutEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.childWorkflowExecutionTimedOutEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes`](#aws-cdk-sdk.swf.SwfChildWorkflowExecutionTimedOutEventAttributes)

---

##### `completeWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.completeWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfCompleteWorkflowExecutionFailedEventAttributes)

---

##### `continueAsNewWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.continueAsNewWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfContinueAsNewWorkflowExecutionFailedEventAttributes)

---

##### `decisionTaskCompletedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.decisionTaskCompletedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes`](#aws-cdk-sdk.swf.SwfDecisionTaskCompletedEventAttributes)

---

##### `decisionTaskScheduledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.decisionTaskScheduledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes`](#aws-cdk-sdk.swf.SwfDecisionTaskScheduledEventAttributes)

---

##### `decisionTaskStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.decisionTaskStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDecisionTaskStartedEventAttributes`](#aws-cdk-sdk.swf.SwfDecisionTaskStartedEventAttributes)

---

##### `decisionTaskTimedOutEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.decisionTaskTimedOutEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes`](#aws-cdk-sdk.swf.SwfDecisionTaskTimedOutEventAttributes)

---

##### `externalWorkflowExecutionCancelRequestedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.externalWorkflowExecutionCancelRequestedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes`](#aws-cdk-sdk.swf.SwfExternalWorkflowExecutionCancelRequestedEventAttributes)

---

##### `externalWorkflowExecutionSignaledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.externalWorkflowExecutionSignaledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExternalWorkflowExecutionSignaledEventAttributes`](#aws-cdk-sdk.swf.SwfExternalWorkflowExecutionSignaledEventAttributes)

---

##### `failWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.failWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfFailWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfFailWorkflowExecutionFailedEventAttributes)

---

##### `lambdaFunctionCompletedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.lambdaFunctionCompletedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes`](#aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes)

---

##### `lambdaFunctionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.lambdaFunctionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes)

---

##### `lambdaFunctionScheduledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.lambdaFunctionScheduledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes`](#aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes)

---

##### `lambdaFunctionStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.lambdaFunctionStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfLambdaFunctionStartedEventAttributes`](#aws-cdk-sdk.swf.SwfLambdaFunctionStartedEventAttributes)

---

##### `lambdaFunctionTimedOutEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.lambdaFunctionTimedOutEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes`](#aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes)

---

##### `markerRecordedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.markerRecordedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes`](#aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes)

---

##### `recordMarkerFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.recordMarkerFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes`](#aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes)

---

##### `requestCancelActivityTaskFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.requestCancelActivityTaskFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes`](#aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes)

---

##### `requestCancelExternalWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.requestCancelExternalWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes)

---

##### `requestCancelExternalWorkflowExecutionInitiatedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.requestCancelExternalWorkflowExecutionInitiatedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes`](#aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes)

---

##### `scheduleActivityTaskFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.scheduleActivityTaskFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes`](#aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes)

---

##### `scheduleLambdaFunctionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.scheduleLambdaFunctionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes)

---

##### `signalExternalWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.signalExternalWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes)

---

##### `signalExternalWorkflowExecutionInitiatedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.signalExternalWorkflowExecutionInitiatedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes`](#aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes)

---

##### `startChildWorkflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.startChildWorkflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes)

---

##### `startChildWorkflowExecutionInitiatedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.startChildWorkflowExecutionInitiatedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes`](#aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes)

---

##### `startLambdaFunctionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.startLambdaFunctionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes)

---

##### `startTimerFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.startTimerFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes`](#aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes)

---

##### `timerCanceledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.timerCanceledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes`](#aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes)

---

##### `timerFiredEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.timerFiredEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTimerFiredEventAttributes`](#aws-cdk-sdk.swf.SwfTimerFiredEventAttributes)

---

##### `timerStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.timerStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTimerStartedEventAttributes`](#aws-cdk-sdk.swf.SwfTimerStartedEventAttributes)

---

##### `workflowExecutionCanceledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionCanceledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionCanceledEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionCanceledEventAttributes)

---

##### `workflowExecutionCancelRequestedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionCancelRequestedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes)

---

##### `workflowExecutionCompletedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionCompletedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionCompletedEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionCompletedEventAttributes)

---

##### `workflowExecutionContinuedAsNewEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionContinuedAsNewEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes)

---

##### `workflowExecutionFailedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionFailedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes)

---

##### `workflowExecutionSignaledEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionSignaledEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes)

---

##### `workflowExecutionStartedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionStartedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes)

---

##### `workflowExecutionTerminatedEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionTerminatedEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes)

---

##### `workflowExecutionTimedOutEventAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfHistoryEvent.property.workflowExecutionTimedOutEventAttributes"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionTimedOutEventAttributes`](#aws-cdk-sdk.swf.SwfWorkflowExecutionTimedOutEventAttributes)

---

### SwfLambdaFunctionCompletedEventAttributes <a name="aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfLambdaFunctionCompletedEventAttributes: swf.SwfLambdaFunctionCompletedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionCompletedEventAttributes.property.result"></a>

- *Type:* `string`

---

### SwfLambdaFunctionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfLambdaFunctionFailedEventAttributes: swf.SwfLambdaFunctionFailedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionFailedEventAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfLambdaFunctionScheduledEventAttributes <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfLambdaFunctionScheduledEventAttributes: swf.SwfLambdaFunctionScheduledEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.name"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `startToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionScheduledEventAttributes.property.startToCloseTimeout"></a>

- *Type:* `string`

---

### SwfLambdaFunctionStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfLambdaFunctionStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfLambdaFunctionStartedEventAttributes: swf.SwfLambdaFunctionStartedEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionStartedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

### SwfLambdaFunctionTimedOutEventAttributes <a name="aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfLambdaFunctionTimedOutEventAttributes: swf.SwfLambdaFunctionTimedOutEventAttributes = { ... }
```

##### `scheduledEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timeoutType`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfLambdaFunctionTimedOutEventAttributes.property.timeoutType"></a>

- *Type:* `string`

---

### SwfListActivityTypesInput <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListActivityTypesInput: swf.SwfListActivityTypesInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.domain"></a>

- *Type:* `string`

---

##### `registrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.registrationStatus"></a>

- *Type:* `string`

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.name"></a>

- *Type:* `string`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListActivityTypesInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SwfListClosedWorkflowExecutionsInput <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListClosedWorkflowExecutionsInput: swf.SwfListClosedWorkflowExecutionsInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.domain"></a>

- *Type:* `string`

---

##### `closeStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.closeStatusFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCloseStatusFilter`](#aws-cdk-sdk.swf.SwfCloseStatusFilter)

---

##### `closeTimeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.closeTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `executionFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.executionFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionFilter`](#aws-cdk-sdk.swf.SwfWorkflowExecutionFilter)

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

##### `startTimeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.startTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `tagFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.tagFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTagFilter`](#aws-cdk-sdk.swf.SwfTagFilter)

---

##### `typeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput.property.typeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeFilter`](#aws-cdk-sdk.swf.SwfWorkflowTypeFilter)

---

### SwfListDomainsInput <a name="aws-cdk-sdk.swf.SwfListDomainsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListDomainsInput: swf.SwfListDomainsInput = { ... }
```

##### `registrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListDomainsInput.property.registrationStatus"></a>

- *Type:* `string`

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListDomainsInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListDomainsInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListDomainsInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SwfListOpenWorkflowExecutionsInput <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListOpenWorkflowExecutionsInput: swf.SwfListOpenWorkflowExecutionsInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.domain"></a>

- *Type:* `string`

---

##### `startTimeFilter`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.startTimeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfExecutionTimeFilter`](#aws-cdk-sdk.swf.SwfExecutionTimeFilter)

---

##### `executionFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.executionFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionFilter`](#aws-cdk-sdk.swf.SwfWorkflowExecutionFilter)

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

##### `tagFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.tagFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTagFilter`](#aws-cdk-sdk.swf.SwfTagFilter)

---

##### `typeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput.property.typeFilter"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeFilter`](#aws-cdk-sdk.swf.SwfWorkflowTypeFilter)

---

### SwfListTagsForResourceInput <a name="aws-cdk-sdk.swf.SwfListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListTagsForResourceInput: swf.SwfListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

### SwfListTagsForResourceOutput <a name="aws-cdk-sdk.swf.SwfListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListTagsForResourceOutput: swf.SwfListTagsForResourceOutput = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfResourceTag`](#aws-cdk-sdk.swf.SwfResourceTag)[]

---

### SwfListWorkflowTypesInput <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfListWorkflowTypesInput: swf.SwfListWorkflowTypesInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.domain"></a>

- *Type:* `string`

---

##### `registrationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.registrationStatus"></a>

- *Type:* `string`

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.name"></a>

- *Type:* `string`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfListWorkflowTypesInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SwfMarkerRecordedEventAttributes <a name="aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfMarkerRecordedEventAttributes: swf.SwfMarkerRecordedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `markerName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes.property.markerName"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfMarkerRecordedEventAttributes.property.details"></a>

- *Type:* `string`

---

### SwfPendingTaskCount <a name="aws-cdk-sdk.swf.SwfPendingTaskCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfPendingTaskCount: swf.SwfPendingTaskCount = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfPendingTaskCount.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPendingTaskCount.property.truncated"></a>

- *Type:* `boolean`

---

### SwfPollForActivityTaskInput <a name="aws-cdk-sdk.swf.SwfPollForActivityTaskInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfPollForActivityTaskInput: swf.SwfPollForActivityTaskInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfPollForActivityTaskInput.property.domain"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfPollForActivityTaskInput.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPollForActivityTaskInput.property.identity"></a>

- *Type:* `string`

---

### SwfPollForDecisionTaskInput <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfPollForDecisionTaskInput: swf.SwfPollForDecisionTaskInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.domain"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.identity"></a>

- *Type:* `string`

---

##### `maximumPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.maximumPageSize"></a>

- *Type:* `number`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfPollForDecisionTaskInput.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SwfRecordActivityTaskHeartbeatInput <a name="aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRecordActivityTaskHeartbeatInput: swf.SwfRecordActivityTaskHeartbeatInput = { ... }
```

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput.property.taskToken"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput.property.details"></a>

- *Type:* `string`

---

### SwfRecordMarkerDecisionAttributes <a name="aws-cdk-sdk.swf.SwfRecordMarkerDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRecordMarkerDecisionAttributes: swf.SwfRecordMarkerDecisionAttributes = { ... }
```

##### `markerName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRecordMarkerDecisionAttributes.property.markerName"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRecordMarkerDecisionAttributes.property.details"></a>

- *Type:* `string`

---

### SwfRecordMarkerFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRecordMarkerFailedEventAttributes: swf.SwfRecordMarkerFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `markerName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRecordMarkerFailedEventAttributes.property.markerName"></a>

- *Type:* `string`

---

### SwfRegisterActivityTypeInput <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRegisterActivityTypeInput: swf.SwfRegisterActivityTypeInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.domain"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.version"></a>

- *Type:* `string`

---

##### `defaultTaskHeartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskHeartbeatTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `defaultTaskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskScheduleToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToStartTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskScheduleToStartTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterActivityTypeInput.property.description"></a>

- *Type:* `string`

---

### SwfRegisterDomainInput <a name="aws-cdk-sdk.swf.SwfRegisterDomainInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRegisterDomainInput: swf.SwfRegisterDomainInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterDomainInput.property.name"></a>

- *Type:* `string`

---

##### `workflowExecutionRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterDomainInput.property.workflowExecutionRetentionPeriodInDays"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterDomainInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterDomainInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfResourceTag`](#aws-cdk-sdk.swf.SwfResourceTag)[]

---

### SwfRegisterWorkflowTypeInput <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRegisterWorkflowTypeInput: swf.SwfRegisterWorkflowTypeInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.domain"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.version"></a>

- *Type:* `string`

---

##### `defaultChildPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultChildPolicy"></a>

- *Type:* `string`

---

##### `defaultExecutionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultExecutionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultLambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultLambdaRole"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `defaultTaskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRegisterWorkflowTypeInput.property.description"></a>

- *Type:* `string`

---

### SwfRequestCancelActivityTaskDecisionAttributes <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelActivityTaskDecisionAttributes: swf.SwfRequestCancelActivityTaskDecisionAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskDecisionAttributes.property.activityId"></a>

- *Type:* `string`

---

### SwfRequestCancelActivityTaskFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelActivityTaskFailedEventAttributes: swf.SwfRequestCancelActivityTaskFailedEventAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes.property.activityId"></a>

- *Type:* `string`

---

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelActivityTaskFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfRequestCancelExternalWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelExternalWorkflowExecutionDecisionAttributes: swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes = { ... }
```

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes.property.control"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionDecisionAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelExternalWorkflowExecutionFailedEventAttributes: swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionFailedEventAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes: swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelExternalWorkflowExecutionInitiatedEventAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfRequestCancelWorkflowExecutionInput <a name="aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRequestCancelWorkflowExecutionInput: swf.SwfRequestCancelWorkflowExecutionInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput.property.workflowId"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRequestCancelWorkflowExecutionInput.property.runId"></a>

- *Type:* `string`

---

### SwfResourceTag <a name="aws-cdk-sdk.swf.SwfResourceTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfResourceTag: swf.SwfResourceTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfResourceTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfResourceTag.property.value"></a>

- *Type:* `string`

---

### SwfRespondActivityTaskCanceledInput <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCanceledInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRespondActivityTaskCanceledInput: swf.SwfRespondActivityTaskCanceledInput = { ... }
```

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCanceledInput.property.taskToken"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCanceledInput.property.details"></a>

- *Type:* `string`

---

### SwfRespondActivityTaskCompletedInput <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCompletedInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRespondActivityTaskCompletedInput: swf.SwfRespondActivityTaskCompletedInput = { ... }
```

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCompletedInput.property.taskToken"></a>

- *Type:* `string`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskCompletedInput.property.result"></a>

- *Type:* `string`

---

### SwfRespondActivityTaskFailedInput <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRespondActivityTaskFailedInput: swf.SwfRespondActivityTaskFailedInput = { ... }
```

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput.property.taskToken"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondActivityTaskFailedInput.property.reason"></a>

- *Type:* `string`

---

### SwfRespondDecisionTaskCompletedInput <a name="aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRespondDecisionTaskCompletedInput: swf.SwfRespondDecisionTaskCompletedInput = { ... }
```

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput.property.taskToken"></a>

- *Type:* `string`

---

##### `decisions`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput.property.decisions"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDecision`](#aws-cdk-sdk.swf.SwfDecision)[]

---

##### `executionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRespondDecisionTaskCompletedInput.property.executionContext"></a>

- *Type:* `string`

---

### SwfRun <a name="aws-cdk-sdk.swf.SwfRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfRun: swf.SwfRun = { ... }
```

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfRun.property.runId"></a>

- *Type:* `string`

---

### SwfScheduleActivityTaskDecisionAttributes <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfScheduleActivityTaskDecisionAttributes: swf.SwfScheduleActivityTaskDecisionAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.activityId"></a>

- *Type:* `string`

---

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.control"></a>

- *Type:* `string`

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.heartbeatTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.input"></a>

- *Type:* `string`

---

##### `scheduleToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.scheduleToCloseTimeout"></a>

- *Type:* `string`

---

##### `scheduleToStartTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.scheduleToStartTimeout"></a>

- *Type:* `string`

---

##### `startToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.startToCloseTimeout"></a>

- *Type:* `string`

---

##### `taskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskDecisionAttributes.property.taskPriority"></a>

- *Type:* `string`

---

### SwfScheduleActivityTaskFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfScheduleActivityTaskFailedEventAttributes: swf.SwfScheduleActivityTaskFailedEventAttributes = { ... }
```

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes.property.activityId"></a>

- *Type:* `string`

---

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleActivityTaskFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

### SwfScheduleLambdaFunctionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfScheduleLambdaFunctionDecisionAttributes: swf.SwfScheduleLambdaFunctionDecisionAttributes = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes.property.name"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes.property.control"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes.property.input"></a>

- *Type:* `string`

---

##### `startToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionDecisionAttributes.property.startToCloseTimeout"></a>

- *Type:* `string`

---

### SwfScheduleLambdaFunctionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfScheduleLambdaFunctionFailedEventAttributes: swf.SwfScheduleLambdaFunctionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfScheduleLambdaFunctionFailedEventAttributes.property.name"></a>

- *Type:* `string`

---

### SwfSignalExternalWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfSignalExternalWorkflowExecutionDecisionAttributes: swf.SwfSignalExternalWorkflowExecutionDecisionAttributes = { ... }
```

##### `signalName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes.property.signalName"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes.property.control"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes.property.input"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionDecisionAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfSignalExternalWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfSignalExternalWorkflowExecutionFailedEventAttributes: swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionFailedEventAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfSignalExternalWorkflowExecutionInitiatedEventAttributes <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfSignalExternalWorkflowExecutionInitiatedEventAttributes: swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `signalName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.signalName"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalExternalWorkflowExecutionInitiatedEventAttributes.property.runId"></a>

- *Type:* `string`

---

### SwfSignalWorkflowExecutionInput <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfSignalWorkflowExecutionInput: swf.SwfSignalWorkflowExecutionInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput.property.domain"></a>

- *Type:* `string`

---

##### `signalName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput.property.signalName"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput.property.workflowId"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput.property.input"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfSignalWorkflowExecutionInput.property.runId"></a>

- *Type:* `string`

---

### SwfStartChildWorkflowExecutionDecisionAttributes <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartChildWorkflowExecutionDecisionAttributes: swf.SwfStartChildWorkflowExecutionDecisionAttributes = { ... }
```

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `childPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.control"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.lambdaRole"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionDecisionAttributes.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfStartChildWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartChildWorkflowExecutionFailedEventAttributes: swf.SwfStartChildWorkflowExecutionFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `initiatedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.initiatedEventId"></a>

- *Type:* `number`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionFailedEventAttributes.property.control"></a>

- *Type:* `string`

---

### SwfStartChildWorkflowExecutionInitiatedEventAttributes <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartChildWorkflowExecutionInitiatedEventAttributes: swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.workflowId"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.control"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.lambdaRole"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartChildWorkflowExecutionInitiatedEventAttributes.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfStartLambdaFunctionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartLambdaFunctionFailedEventAttributes: swf.SwfStartLambdaFunctionFailedEventAttributes = { ... }
```

##### `cause`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes.property.message"></a>

- *Type:* `string`

---

##### `scheduledEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartLambdaFunctionFailedEventAttributes.property.scheduledEventId"></a>

- *Type:* `number`

---

### SwfStartTimerDecisionAttributes <a name="aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartTimerDecisionAttributes: swf.SwfStartTimerDecisionAttributes = { ... }
```

##### `startToFireTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes.property.startToFireTimeout"></a>

- *Type:* `string`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes.property.timerId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerDecisionAttributes.property.control"></a>

- *Type:* `string`

---

### SwfStartTimerFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartTimerFailedEventAttributes: swf.SwfStartTimerFailedEventAttributes = { ... }
```

##### `cause`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartTimerFailedEventAttributes.property.timerId"></a>

- *Type:* `string`

---

### SwfStartWorkflowExecutionInput <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfStartWorkflowExecutionInput: swf.SwfStartWorkflowExecutionInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.workflowId"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `childPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.childPolicy"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.lambdaRole"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfTagFilter <a name="aws-cdk-sdk.swf.SwfTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTagFilter: swf.SwfTagFilter = { ... }
```

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTagFilter.property.tag"></a>

- *Type:* `string`

---

### SwfTagResourceInput <a name="aws-cdk-sdk.swf.SwfTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTagResourceInput: swf.SwfTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfResourceTag`](#aws-cdk-sdk.swf.SwfResourceTag)[]

---

### SwfTaskList <a name="aws-cdk-sdk.swf.SwfTaskList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTaskList: swf.SwfTaskList = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTaskList.property.name"></a>

- *Type:* `string`

---

### SwfTerminateWorkflowExecutionInput <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTerminateWorkflowExecutionInput: swf.SwfTerminateWorkflowExecutionInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.workflowId"></a>

- *Type:* `string`

---

##### `childPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.childPolicy"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.reason"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfTerminateWorkflowExecutionInput.property.runId"></a>

- *Type:* `string`

---

### SwfTimerCanceledEventAttributes <a name="aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTimerCanceledEventAttributes: swf.SwfTimerCanceledEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerCanceledEventAttributes.property.timerId"></a>

- *Type:* `string`

---

### SwfTimerFiredEventAttributes <a name="aws-cdk-sdk.swf.SwfTimerFiredEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTimerFiredEventAttributes: swf.SwfTimerFiredEventAttributes = { ... }
```

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerFiredEventAttributes.property.startedEventId"></a>

- *Type:* `number`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerFiredEventAttributes.property.timerId"></a>

- *Type:* `string`

---

### SwfTimerStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfTimerStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfTimerStartedEventAttributes: swf.SwfTimerStartedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerStartedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `startToFireTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerStartedEventAttributes.property.startToFireTimeout"></a>

- *Type:* `string`

---

##### `timerId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfTimerStartedEventAttributes.property.timerId"></a>

- *Type:* `string`

---

##### `control`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfTimerStartedEventAttributes.property.control"></a>

- *Type:* `string`

---

### SwfUndeprecateActivityTypeInput <a name="aws-cdk-sdk.swf.SwfUndeprecateActivityTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfUndeprecateActivityTypeInput: swf.SwfUndeprecateActivityTypeInput = { ... }
```

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUndeprecateActivityTypeInput.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityType`](#aws-cdk-sdk.swf.SwfActivityType)

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUndeprecateActivityTypeInput.property.domain"></a>

- *Type:* `string`

---

### SwfUndeprecateDomainInput <a name="aws-cdk-sdk.swf.SwfUndeprecateDomainInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfUndeprecateDomainInput: swf.SwfUndeprecateDomainInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUndeprecateDomainInput.property.name"></a>

- *Type:* `string`

---

### SwfUndeprecateWorkflowTypeInput <a name="aws-cdk-sdk.swf.SwfUndeprecateWorkflowTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfUndeprecateWorkflowTypeInput: swf.SwfUndeprecateWorkflowTypeInput = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUndeprecateWorkflowTypeInput.property.domain"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUndeprecateWorkflowTypeInput.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

### SwfUntagResourceInput <a name="aws-cdk-sdk.swf.SwfUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfUntagResourceInput: swf.SwfUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### SwfWorkflowExecution <a name="aws-cdk-sdk.swf.SwfWorkflowExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecution: swf.SwfWorkflowExecution = { ... }
```

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecution.property.runId"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecution.property.workflowId"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionCanceledEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCanceledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionCanceledEventAttributes: swf.SwfWorkflowExecutionCanceledEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCanceledEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCanceledEventAttributes.property.details"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionCancelRequestedEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionCancelRequestedEventAttributes: swf.SwfWorkflowExecutionCancelRequestedEventAttributes = { ... }
```

##### `cause`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `externalInitiatedEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes.property.externalInitiatedEventId"></a>

- *Type:* `number`

---

##### `externalWorkflowExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCancelRequestedEventAttributes.property.externalWorkflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

### SwfWorkflowExecutionCompletedEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCompletedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionCompletedEventAttributes: swf.SwfWorkflowExecutionCompletedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCompletedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCompletedEventAttributes.property.result"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionConfiguration <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionConfiguration: swf.SwfWorkflowExecutionConfiguration = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.childPolicy"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `taskStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.lambdaRole"></a>

- *Type:* `string`

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration.property.taskPriority"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionContinuedAsNewEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionContinuedAsNewEventAttributes: swf.SwfWorkflowExecutionContinuedAsNewEventAttributes = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `newExecutionRunId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.newExecutionRunId"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.lambdaRole"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionContinuedAsNewEventAttributes.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionCount <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionCount: swf.SwfWorkflowExecutionCount = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCount.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionCount.property.truncated"></a>

- *Type:* `boolean`

---

### SwfWorkflowExecutionDetail <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionDetail: swf.SwfWorkflowExecutionDetail = { ... }
```

##### `executionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail.property.executionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration`](#aws-cdk-sdk.swf.SwfWorkflowExecutionConfiguration)

---

##### `executionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail.property.executionInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionInfo`](#aws-cdk-sdk.swf.SwfWorkflowExecutionInfo)

---

##### `openCounts`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail.property.openCounts"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts`](#aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts)

---

##### `latestActivityTaskTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail.property.latestActivityTaskTimestamp"></a>

- *Type:* `string`

---

##### `latestExecutionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionDetail.property.latestExecutionContext"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionFailedEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionFailedEventAttributes: swf.SwfWorkflowExecutionFailedEventAttributes = { ... }
```

##### `decisionTaskCompletedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes.property.decisionTaskCompletedEventId"></a>

- *Type:* `number`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFailedEventAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionFilter <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionFilter: swf.SwfWorkflowExecutionFilter = { ... }
```

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionFilter.property.workflowId"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionInfo <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionInfo: swf.SwfWorkflowExecutionInfo = { ... }
```

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.execution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `executionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.executionStatus"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.startTimestamp"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `cancelRequested`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.cancelRequested"></a>

- *Type:* `boolean`

---

##### `closeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.closeStatus"></a>

- *Type:* `string`

---

##### `closeTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.closeTimestamp"></a>

- *Type:* `string`

---

##### `parent`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.parent"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfo.property.tagList"></a>

- *Type:* `string`[]

---

### SwfWorkflowExecutionInfos <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionInfos: swf.SwfWorkflowExecutionInfos = { ... }
```

##### `executionInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfos.property.executionInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionInfo`](#aws-cdk-sdk.swf.SwfWorkflowExecutionInfo)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionInfos.property.nextPageToken"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionOpenCounts <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionOpenCounts: swf.SwfWorkflowExecutionOpenCounts = { ... }
```

##### `openActivityTasks`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts.property.openActivityTasks"></a>

- *Type:* `number`

---

##### `openChildWorkflowExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts.property.openChildWorkflowExecutions"></a>

- *Type:* `number`

---

##### `openDecisionTasks`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts.property.openDecisionTasks"></a>

- *Type:* `number`

---

##### `openTimers`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts.property.openTimers"></a>

- *Type:* `number`

---

##### `openLambdaFunctions`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionOpenCounts.property.openLambdaFunctions"></a>

- *Type:* `number`

---

### SwfWorkflowExecutionSignaledEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionSignaledEventAttributes: swf.SwfWorkflowExecutionSignaledEventAttributes = { ... }
```

##### `signalName`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes.property.signalName"></a>

- *Type:* `string`

---

##### `externalInitiatedEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes.property.externalInitiatedEventId"></a>

- *Type:* `number`

---

##### `externalWorkflowExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes.property.externalWorkflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionSignaledEventAttributes.property.input"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionStartedEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionStartedEventAttributes: swf.SwfWorkflowExecutionStartedEventAttributes = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `continuedExecutionRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.continuedExecutionRunId"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.input"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.lambdaRole"></a>

- *Type:* `string`

---

##### `parentInitiatedEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.parentInitiatedEventId"></a>

- *Type:* `number`

---

##### `parentWorkflowExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.parentWorkflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecution`](#aws-cdk-sdk.swf.SwfWorkflowExecution)

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.tagList"></a>

- *Type:* `string`[]

---

##### `taskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionStartedEventAttributes.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionTerminatedEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionTerminatedEventAttributes: swf.SwfWorkflowExecutionTerminatedEventAttributes = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `cause`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes.property.cause"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes.property.details"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTerminatedEventAttributes.property.reason"></a>

- *Type:* `string`

---

### SwfWorkflowExecutionTimedOutEventAttributes <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTimedOutEventAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowExecutionTimedOutEventAttributes: swf.SwfWorkflowExecutionTimedOutEventAttributes = { ... }
```

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTimedOutEventAttributes.property.childPolicy"></a>

- *Type:* `string`

---

##### `timeoutType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowExecutionTimedOutEventAttributes.property.timeoutType"></a>

- *Type:* `string`

---

### SwfWorkflowType <a name="aws-cdk-sdk.swf.SwfWorkflowType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowType: swf.SwfWorkflowType = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowType.property.version"></a>

- *Type:* `string`

---

### SwfWorkflowTypeConfiguration <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowTypeConfiguration: swf.SwfWorkflowTypeConfiguration = { ... }
```

##### `defaultChildPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultChildPolicy"></a>

- *Type:* `string`

---

##### `defaultExecutionStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultExecutionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultLambdaRole`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultLambdaRole"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfTaskList`](#aws-cdk-sdk.swf.SwfTaskList)

---

##### `defaultTaskPriority`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---

### SwfWorkflowTypeDetail <a name="aws-cdk-sdk.swf.SwfWorkflowTypeDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowTypeDetail: swf.SwfWorkflowTypeDetail = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeDetail.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration`](#aws-cdk-sdk.swf.SwfWorkflowTypeConfiguration)

---

##### `typeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeDetail.property.typeInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeInfo`](#aws-cdk-sdk.swf.SwfWorkflowTypeInfo)

---

### SwfWorkflowTypeFilter <a name="aws-cdk-sdk.swf.SwfWorkflowTypeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowTypeFilter: swf.SwfWorkflowTypeFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeFilter.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeFilter.property.version"></a>

- *Type:* `string`

---

### SwfWorkflowTypeInfo <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowTypeInfo: swf.SwfWorkflowTypeInfo = { ... }
```

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo.property.status"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowType`](#aws-cdk-sdk.swf.SwfWorkflowType)

---

##### `deprecationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo.property.deprecationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfo.property.description"></a>

- *Type:* `string`

---

### SwfWorkflowTypeInfos <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

const swfWorkflowTypeInfos: swf.SwfWorkflowTypeInfos = { ... }
```

##### `typeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfos.property.typeInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeInfo`](#aws-cdk-sdk.swf.SwfWorkflowTypeInfo)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.swf.SwfWorkflowTypeInfos.property.nextPageToken"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SWFResponsesCountClosedWorkflowExecutions <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesCountClosedWorkflowExecutions(__scope: Construct, __resources: string[], __input: SwfCountClosedWorkflowExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfCountClosedWorkflowExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountClosedWorkflowExecutions.property.truncated"></a>

- *Type:* `boolean`

---


### SWFResponsesCountOpenWorkflowExecutions <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesCountOpenWorkflowExecutions(__scope: Construct, __resources: string[], __input: SwfCountOpenWorkflowExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfCountOpenWorkflowExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountOpenWorkflowExecutions.property.truncated"></a>

- *Type:* `boolean`

---


### SWFResponsesCountPendingActivityTasks <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesCountPendingActivityTasks(__scope: Construct, __resources: string[], __input: SwfCountPendingActivityTasksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput`](#aws-cdk-sdk.swf.SwfCountPendingActivityTasksInput)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingActivityTasks.property.truncated"></a>

- *Type:* `boolean`

---


### SWFResponsesCountPendingDecisionTasks <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesCountPendingDecisionTasks(__scope: Construct, __resources: string[], __input: SwfCountPendingDecisionTasksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput`](#aws-cdk-sdk.swf.SwfCountPendingDecisionTasksInput)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.property.count"></a>

- *Type:* `number`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesCountPendingDecisionTasks.property.truncated"></a>

- *Type:* `boolean`

---


### SWFResponsesDescribeActivityType <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeActivityType(__scope: Construct, __resources: string[], __input: SwfDescribeActivityTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration`](#aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration)

---

##### `typeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityType.property.typeInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo`](#aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo)

---


### SWFResponsesDescribeActivityTypeConfiguration <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeActivityTypeConfiguration(__scope: Construct, __resources: string[], __input: SwfDescribeActivityTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---



#### Properties <a name="Properties"></a>

##### `defaultTaskHeartbeatTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskHeartbeatTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList`](#aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList)

---

##### `defaultTaskPriority`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskScheduleToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskScheduleToStartTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskScheduleToStartTimeout"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfiguration.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---


### SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList(__scope: Construct, __resources: string[], __input: SwfDescribeActivityTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeConfigurationDefaultTaskList.property.name"></a>

- *Type:* `string`

---


### SWFResponsesDescribeActivityTypeTypeInfo <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeActivityTypeTypeInfo(__scope: Construct, __resources: string[], __input: SwfDescribeActivityTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---



#### Properties <a name="Properties"></a>

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType`](#aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `deprecationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.property.deprecationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfo.property.status"></a>

- *Type:* `string`

---


### SWFResponsesDescribeActivityTypeTypeInfoActivityType <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType(__scope: Construct, __resources: string[], __input: SwfDescribeActivityTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeActivityTypeInput`](#aws-cdk-sdk.swf.SwfDescribeActivityTypeInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeActivityTypeTypeInfoActivityType.property.version"></a>

- *Type:* `string`

---


### SWFResponsesDescribeDomain <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeDomain(__scope: Construct, __resources: string[], __input: SwfDescribeDomainInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeDomainInput`](#aws-cdk-sdk.swf.SwfDescribeDomainInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration`](#aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration)

---

##### `domainInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomain.property.domainInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo`](#aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo)

---


### SWFResponsesDescribeDomainConfiguration <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeDomainConfiguration(__scope: Construct, __resources: string[], __input: SwfDescribeDomainInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeDomainInput`](#aws-cdk-sdk.swf.SwfDescribeDomainInput)

---



#### Properties <a name="Properties"></a>

##### `workflowExecutionRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainConfiguration.property.workflowExecutionRetentionPeriodInDays"></a>

- *Type:* `string`

---


### SWFResponsesDescribeDomainDomainInfo <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeDomainDomainInfo(__scope: Construct, __resources: string[], __input: SwfDescribeDomainInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeDomainInput`](#aws-cdk-sdk.swf.SwfDescribeDomainInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeDomainDomainInfo.property.status"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecution <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecution(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `executionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.property.executionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration)

---

##### `executionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.property.executionInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo)

---

##### `latestActivityTaskTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.property.latestActivityTaskTimestamp"></a>

- *Type:* `string`

---

##### `latestExecutionContext`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.property.latestExecutionContext"></a>

- *Type:* `string`

---

##### `openCounts`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecution.property.openCounts"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts)

---


### SWFResponsesDescribeWorkflowExecutionExecutionConfiguration <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `childPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.childPolicy"></a>

- *Type:* `string`

---

##### `executionStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.executionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `lambdaRole`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.lambdaRole"></a>

- *Type:* `string`

---

##### `taskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.taskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList)

---

##### `taskPriority`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.taskPriority"></a>

- *Type:* `string`

---

##### `taskStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfiguration.property.taskStartToCloseTimeout"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionConfigurationTaskList.property.name"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecutionExecutionInfo <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `cancelRequested`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.cancelRequested"></a>

- *Type:* `boolean`

---

##### `closeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.closeStatus"></a>

- *Type:* `string`

---

##### `closeTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.closeTimestamp"></a>

- *Type:* `string`

---

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.execution"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution)

---

##### `executionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.executionStatus"></a>

- *Type:* `string`

---

##### `parent`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.parent"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent)

---

##### `startTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.startTimestamp"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.tagList"></a>

- *Type:* `string`[]

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfo.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType)

---


### SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.property.runId"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoExecution.property.workflowId"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecutionExecutionInfoParent <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.property.runId"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoParent.property.workflowId"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionExecutionInfoWorkflowType.property.version"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowExecutionOpenCounts <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowExecutionOpenCounts(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `openActivityTasks`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.property.openActivityTasks"></a>

- *Type:* `number`

---

##### `openChildWorkflowExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.property.openChildWorkflowExecutions"></a>

- *Type:* `number`

---

##### `openDecisionTasks`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.property.openDecisionTasks"></a>

- *Type:* `number`

---

##### `openLambdaFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.property.openLambdaFunctions"></a>

- *Type:* `number`

---

##### `openTimers`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowExecutionOpenCounts.property.openTimers"></a>

- *Type:* `number`

---


### SWFResponsesDescribeWorkflowType <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowType(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration)

---

##### `typeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowType.property.typeInfo"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo)

---


### SWFResponsesDescribeWorkflowTypeConfiguration <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowTypeConfiguration(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---



#### Properties <a name="Properties"></a>

##### `defaultChildPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultChildPolicy"></a>

- *Type:* `string`

---

##### `defaultExecutionStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultExecutionStartToCloseTimeout"></a>

- *Type:* `string`

---

##### `defaultLambdaRole`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultLambdaRole"></a>

- *Type:* `string`

---

##### `defaultTaskList`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultTaskList"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList)

---

##### `defaultTaskPriority`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultTaskPriority"></a>

- *Type:* `string`

---

##### `defaultTaskStartToCloseTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfiguration.property.defaultTaskStartToCloseTimeout"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeConfigurationDefaultTaskList.property.name"></a>

- *Type:* `string`

---


### SWFResponsesDescribeWorkflowTypeTypeInfo <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowTypeTypeInfo(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.property.creationDate"></a>

- *Type:* `string`

---

##### `deprecationDate`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.property.deprecationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.property.status"></a>

- *Type:* `string`

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfo.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType`](#aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType)

---


### SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType(__scope: Construct, __resources: string[], __input: SwfDescribeWorkflowTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput`](#aws-cdk-sdk.swf.SwfDescribeWorkflowTypeInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesDescribeWorkflowTypeTypeInfoWorkflowType.property.version"></a>

- *Type:* `string`

---


### SWFResponsesFetchWorkflowExecutionHistory <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesFetchWorkflowExecutionHistory(__scope: Construct, __resources: string[], __input: SwfGetWorkflowExecutionHistoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput`](#aws-cdk-sdk.swf.SwfGetWorkflowExecutionHistoryInput)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.property.events"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfHistoryEvent`](#aws-cdk-sdk.swf.SwfHistoryEvent)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesFetchWorkflowExecutionHistory.property.nextPageToken"></a>

- *Type:* `string`

---


### SWFResponsesListActivityTypes <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListActivityTypes(__scope: Construct, __resources: string[], __input: SwfListActivityTypesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListActivityTypesInput`](#aws-cdk-sdk.swf.SwfListActivityTypesInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.property.nextPageToken"></a>

- *Type:* `string`

---

##### `typeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListActivityTypes.property.typeInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfActivityTypeInfo`](#aws-cdk-sdk.swf.SwfActivityTypeInfo)[]

---


### SWFResponsesListClosedWorkflowExecutions <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListClosedWorkflowExecutions(__scope: Construct, __resources: string[], __input: SwfListClosedWorkflowExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfListClosedWorkflowExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `executionInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.property.executionInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionInfo`](#aws-cdk-sdk.swf.SwfWorkflowExecutionInfo)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListClosedWorkflowExecutions.property.nextPageToken"></a>

- *Type:* `string`

---


### SWFResponsesListDomains <a name="aws-cdk-sdk.swf.SWFResponsesListDomains"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListDomains(__scope: Construct, __resources: string[], __input: SwfListDomainsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListDomainsInput`](#aws-cdk-sdk.swf.SwfListDomainsInput)

---



#### Properties <a name="Properties"></a>

##### `domainInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.property.domainInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfDomainInfo`](#aws-cdk-sdk.swf.SwfDomainInfo)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListDomains.property.nextPageToken"></a>

- *Type:* `string`

---


### SWFResponsesListOpenWorkflowExecutions <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListOpenWorkflowExecutions(__scope: Construct, __resources: string[], __input: SwfListOpenWorkflowExecutionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput`](#aws-cdk-sdk.swf.SwfListOpenWorkflowExecutionsInput)

---



#### Properties <a name="Properties"></a>

##### `executionInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.property.executionInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowExecutionInfo`](#aws-cdk-sdk.swf.SwfWorkflowExecutionInfo)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListOpenWorkflowExecutions.property.nextPageToken"></a>

- *Type:* `string`

---


### SWFResponsesListTagsForResource <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SwfListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListTagsForResourceInput`](#aws-cdk-sdk.swf.SwfListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfResourceTag`](#aws-cdk-sdk.swf.SwfResourceTag)[]

---


### SWFResponsesListWorkflowTypes <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesListWorkflowTypes(__scope: Construct, __resources: string[], __input: SwfListWorkflowTypesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfListWorkflowTypesInput`](#aws-cdk-sdk.swf.SwfListWorkflowTypesInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.property.nextPageToken"></a>

- *Type:* `string`

---

##### `typeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesListWorkflowTypes.property.typeInfos"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfWorkflowTypeInfo`](#aws-cdk-sdk.swf.SwfWorkflowTypeInfo)[]

---


### SWFResponsesPollForActivityTask <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForActivityTask(__scope: Construct, __resources: string[], __input: SwfPollForActivityTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForActivityTaskInput`](#aws-cdk-sdk.swf.SwfPollForActivityTaskInput)

---



#### Properties <a name="Properties"></a>

##### `activityId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.activityId"></a>

- *Type:* `string`

---

##### `activityType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.activityType"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType`](#aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType)

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.input"></a>

- *Type:* `string`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.startedEventId"></a>

- *Type:* `number`

---

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.taskToken"></a>

- *Type:* `string`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTask.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution`](#aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution)

---


### SWFResponsesPollForActivityTaskActivityType <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForActivityTaskActivityType(__scope: Construct, __resources: string[], __input: SwfPollForActivityTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForActivityTaskInput`](#aws-cdk-sdk.swf.SwfPollForActivityTaskInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskActivityType.property.version"></a>

- *Type:* `string`

---


### SWFResponsesPollForActivityTaskWorkflowExecution <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForActivityTaskWorkflowExecution(__scope: Construct, __resources: string[], __input: SwfPollForActivityTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForActivityTaskInput`](#aws-cdk-sdk.swf.SwfPollForActivityTaskInput)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.property.runId"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForActivityTaskWorkflowExecution.property.workflowId"></a>

- *Type:* `string`

---


### SWFResponsesPollForDecisionTask <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForDecisionTask(__scope: Construct, __resources: string[], __input: SwfPollForDecisionTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForDecisionTaskInput`](#aws-cdk-sdk.swf.SwfPollForDecisionTaskInput)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.events"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfHistoryEvent`](#aws-cdk-sdk.swf.SwfHistoryEvent)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.nextPageToken"></a>

- *Type:* `string`

---

##### `previousStartedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.previousStartedEventId"></a>

- *Type:* `number`

---

##### `startedEventId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.startedEventId"></a>

- *Type:* `number`

---

##### `taskToken`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.taskToken"></a>

- *Type:* `string`

---

##### `workflowExecution`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.workflowExecution"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution`](#aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution)

---

##### `workflowType`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTask.property.workflowType"></a>

- *Type:* [`aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType`](#aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType)

---


### SWFResponsesPollForDecisionTaskWorkflowExecution <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForDecisionTaskWorkflowExecution(__scope: Construct, __resources: string[], __input: SwfPollForDecisionTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForDecisionTaskInput`](#aws-cdk-sdk.swf.SwfPollForDecisionTaskInput)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.property.runId"></a>

- *Type:* `string`

---

##### `workflowId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowExecution.property.workflowId"></a>

- *Type:* `string`

---


### SWFResponsesPollForDecisionTaskWorkflowType <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesPollForDecisionTaskWorkflowType(__scope: Construct, __resources: string[], __input: SwfPollForDecisionTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfPollForDecisionTaskInput`](#aws-cdk-sdk.swf.SwfPollForDecisionTaskInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesPollForDecisionTaskWorkflowType.property.version"></a>

- *Type:* `string`

---


### SWFResponsesRecordActivityTaskHeartbeat <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesRecordActivityTaskHeartbeat(__scope: Construct, __resources: string[], __input: SwfRecordActivityTaskHeartbeatInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput`](#aws-cdk-sdk.swf.SwfRecordActivityTaskHeartbeatInput)

---



#### Properties <a name="Properties"></a>

##### `cancelRequested`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesRecordActivityTaskHeartbeat.property.cancelRequested"></a>

- *Type:* `boolean`

---


### SWFResponsesStartWorkflowExecution <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution.Initializer"></a>

```typescript
import { swf } from 'aws-cdk-sdk'

new swf.SWFResponsesStartWorkflowExecution(__scope: Construct, __resources: string[], __input: SwfStartWorkflowExecutionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput`](#aws-cdk-sdk.swf.SwfStartWorkflowExecutionInput)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.swf.SWFResponsesStartWorkflowExecution.property.runId"></a>

- *Type:* `string`

---



